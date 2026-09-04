import { GAME_CONFIG } from '../config.js?v=4.7';
import { STAT_GROUPS } from '../data/statDefinitions.js?v=4.7';
import { TRAINING_TYPES, CONTEXTUAL_TRAINING_VARIANTS } from '../data/trainingDefinitions.js?v=4.7';
import { WEAPON_CATEGORIES } from '../data/weaponDefinitions.js?v=4.7';
import { clamp, randomFloat, weightedPick } from '../utils/random.js?v=4.7';

export function rollTrainingLevel(highLevelBias = 0) {
  return weightedPick([
    { value: 1, weight: 34 * (1 - highLevelBias) },
    { value: 2, weight: 29 * (1 - highLevelBias * 0.7) },
    { value: 3, weight: 22 },
    { value: 4, weight: 11 * (1 + highLevelBias * 2.2) },
    { value: 5, weight: 4 * (1 + highLevelBias * 3.4) },
  ]);
}

function trainingAvailable(type, facilityLevel, weaponsLabLevel, year) {
  return Number(type.facilityLevel ?? 0) <= facilityLevel
    && Number(type.minYear ?? 1) <= year
    && Number(type.maxYear ?? 99) >= year
    && (!type.weaponLab || Number(type.weaponsLabLevel ?? 99) <= weaponsLabLevel);
}

function promotionChance(facilityLevel) {
  return [0, 0.30, 0.42, 0.54, 0.64, 0.74][Math.max(0, Math.min(5, facilityLevel))] ?? 0;
}

function promoteBasicTraining(type, facilityLevel, year) {
  if (!type.id?.match(/^training_[a-z]+_1$/) || facilityLevel <= 0 || Math.random() >= promotionChance(facilityLevel)) return type;
  const upgrades = TRAINING_TYPES
    .filter((candidate) => candidate.groupKey === type.groupKey && candidate.id !== type.id && !candidate.weaponLab && !candidate.specialMode)
    .filter((candidate) => Number(candidate.facilityLevel ?? 0) <= facilityLevel)
    .filter((candidate) => Number(candidate.minYear ?? 1) <= year)
    .filter((candidate) => Number(candidate.maxYear ?? 99) >= year)
    .map((candidate) => {
      let weight = 1;
      if (candidate.id.startsWith('training_')) weight = 1.35;
      if (candidate.id.startsWith('advanced_')) weight = candidate.facilityLevel >= 5 ? 0.24 : 0.72;
      return { value: candidate, weight };
    });
  if (!upgrades.length) return type;
  const promoted = weightedPick(upgrades);
  return {
    ...promoted,
    promotedFrom: type.id,
    promotedFromLabel: type.label,
    facilityPromotion: true,
  };
}


function contextRuleMatches(rule, context = {}) {
  if (rule === 'tournamentChampionRecent') return context.lastTournamentOutcome === 'champion' && Number(context.lastTournamentTurnsAgo ?? 99) <= 3;
  if (rule === 'tournamentEliminatedRecent') return context.lastTournamentOutcome === 'eliminated' && Number(context.lastTournamentTurnsAgo ?? 99) <= 3;
  if (rule === 'tournamentUpcoming') return Boolean(context.tournamentUpcoming);
  if (rule === 'winStreak') return Number(context.winStreak ?? 0) >= 3;
  if (rule === 'lossStreak') return Number(context.lossStreak ?? 0) >= 3;
  if (rule === 'recentWinHeavy') return Number(context.recentWins ?? 0) >= 4;
  if (rule === 'recentLossHeavy') return Number(context.recentLosses ?? 0) >= 4;
  if (rule === 'closeWeaponHeavy') return context.dominantWeaponRange === '近距離' && Number(context.dominantWeaponRatio ?? 0) >= 0.40;
  if (rule === 'rangedWeaponHeavy') return context.dominantWeaponRange === '遠距離' && Number(context.dominantWeaponRatio ?? 0) >= 0.40;
  if (rule === 'specialWeaponHeavy') return context.dominantWeaponRange === '特殊兵装' && Number(context.dominantWeaponRatio ?? 0) >= 0.40;
  if (rule === 'seniorHeavy') return Number(context.seniorRatio ?? 0) >= 0.34;
  if (rule === 'rookieHeavy') return Number(context.rookieRatio ?? 0) >= 0.34;
  return false;
}

function contextVariantChance(facilityLevel, priority) {
  const base = [0, 0, 0.22, 0.31, 0.40, 0.49][Math.max(0, Math.min(5, facilityLevel))] ?? 0;
  if (priority >= 90) return Math.min(0.72, base + 0.15);
  if (priority >= 65) return Math.min(0.62, base + 0.07);
  if (priority <= 45) return Math.max(0.14, base - 0.08);
  return base;
}

function contextualTrainingVariant(type, context = {}) {
  const facilityLevel = Number(context.trainingFacilityLevel ?? 0);
  if (facilityLevel < 2) return type;
  const candidates = CONTEXTUAL_TRAINING_VARIANTS
    .filter((candidate) => candidate.groupKey === type.groupKey)
    .filter((candidate) => contextRuleMatches(candidate.contextRule, context))
    .sort((a, b) => Number(b.contextPriority ?? 0) - Number(a.contextPriority ?? 0));
  if (!candidates.length) return type;

  // 同系統で条件が重なった場合は、重要度が最も高い層だけを候補にする。
  // 大会直後 > 大会前 > 戦績 > 兵装構成 > 世代構成の順で、意味の薄い上書きを防ぐ。
  const topPriority = Number(candidates[0].contextPriority ?? 0);
  const topCandidates = candidates.filter((candidate) => Number(candidate.contextPriority ?? 0) === topPriority);
  if (Math.random() >= contextVariantChance(facilityLevel, topPriority)) return type;
  const variant = topCandidates[Math.floor(Math.random() * topCandidates.length)];
  const noteMap = {
    tournamentChampionRecent: `${context.lastTournamentName || '大会'}優勝後`,
    tournamentEliminatedRecent: `${context.lastTournamentName || '大会'}敗退後`,
    tournamentUpcoming: `大会まで${Math.max(1, Number(context.tournamentTurnsAway ?? 1))}回`,
    recentWinHeavy: `直近5戦 ${Number(context.recentWins ?? 0)}勝`,
    recentLossHeavy: `直近5戦 ${Number(context.recentLosses ?? 0)}敗`,
    closeWeaponHeavy: `近距離兵装 ${Math.round(Number(context.dominantWeaponRatio ?? 0) * 100)}%`,
    rangedWeaponHeavy: `遠距離兵装 ${Math.round(Number(context.dominantWeaponRatio ?? 0) * 100)}%`,
    specialWeaponHeavy: `特殊兵装 ${Math.round(Number(context.dominantWeaponRatio ?? 0) * 100)}%`,
  };
  return {
    ...variant,
    level: type.level,
    contextualVariant: true,
    contextualFrom: type.id,
    contextualFromLabel: type.label,
    contextNote: noteMap[variant.contextRule] ?? variant.nature,
  };
}

export function generateTrainingChoices(count = GAME_CONFIG.trainingChoices, modifiers = [], highLevelBias = 0, context = {}, excludedGroupKeys = []) {
  const choices = [];
  const used = new Set(excludedGroupKeys);
  const active = modifiers.filter((modifier) => modifier.remainingTurns > 0);
  const facilityLevel = Number(context.trainingFacilityLevel ?? 0);
  const year = Number(context.year ?? 1);
  const weaponsLabLevel = Number(context.weaponsLabLevel ?? 0);
  while (choices.length < count) {
    // 7基礎グループは「基礎カードを引く → 設備条件で専門・複合・極限へ置換」。
    // これにより上位カードを増やしても候補プール自体が肥大化しにくい。
    const candidates = TRAINING_TYPES
      .filter((type) => !used.has(type.groupKey))
      .filter((type) => trainingAvailable(type, facilityLevel, weaponsLabLevel, year))
      .filter((type) => type.weaponLab || type.specialMode || type.id?.match(/^training_[a-z]+_1$/))
      .map((type) => {
        const matching = active.filter((modifier) => modifier.groupKey === type.groupKey);
        let weight = matching.reduce((value, modifier) => value * (modifier.weightMultiplier ?? 1), 1);
        if (type.weaponLab) weight *= type.weaponsLabLevel >= 5 ? 0.08 : type.weaponsLabLevel >= 4 ? 0.14 : type.weaponsLabLevel >= 3 ? 0.22 : 0.34;
        else if (type.specialMode) weight *= type.rarity === '低' ? 0.28 : 0.48;
        return { value: type, weight };
      });
    const baseType = weightedPick(candidates);
    const promotedType = promoteBasicTraining(baseType, facilityLevel, year);
    const type = contextualTrainingVariant(promotedType, context);
    used.add(type.groupKey);
    const levelBonus = active.filter((modifier) => modifier.groupKey === type.groupKey).reduce((sum, modifier) => sum + (modifier.levelBonus ?? 0), 0);
    choices.push({ ...type, level: clamp(rollTrainingLevel(highLevelBias) + levelBonus, GAME_CONFIG.trainingLevelMin, GAME_CONFIG.trainingLevelMax) });
  }
  return choices;
}


export function generateTrainingChoicesWithCarryover(count = GAME_CONFIG.trainingChoices, modifiers = [], highLevelBias = 0, context = {}, reservedTraining = null) {
  const reserved = reservedTraining ? { ...reservedTraining, reservedCarryover: true } : null;
  const excluded = reserved?.groupKey ? [reserved.groupKey] : [];
  const freshCount = Math.max(0, Number(count) - (reserved ? 1 : 0));
  const fresh = generateTrainingChoices(freshCount, modifiers, highLevelBias, context, excluded);
  return reserved ? [reserved, ...fresh] : fresh;
}

function weakestGroupKey(robot) {
  return Object.keys(STAT_GROUPS).sort((a, b) => groupAverage(robot, a) - groupAverage(robot, b))[0];
}

function strongestGroupKey(robot) {
  return Object.keys(STAT_GROUPS).sort((a, b) => groupAverage(robot, b) - groupAverage(robot, a))[0];
}

function groupAverage(robot, groupKey) {
  const values = Object.values(robot.stats?.[groupKey] ?? {});
  return values.reduce((sum, value) => sum + Number(value || 0), 0) / Math.max(1, values.length);
}

export function seriesGrowthMultiplier(robot, groupKey = null, { weapon = false, team = false } = {}) {
  const curve = robot.seriesGrowthCurve ?? {};
  const trait = robot.seriesIntrinsicTrait ?? {};
  const yearIndex = Math.max(0, Math.min(2, Number(robot.cohortYear ?? 1) - 1));
  let mult = Number(curve.yearMultipliers?.[yearIndex] ?? 1);
  if (curve.weakGroupMultiplier && groupKey) {
    const weakest = Object.keys(STAT_GROUPS).sort((a, b) => groupAverage(robot, a) - groupAverage(robot, b))[0];
    if (groupKey === weakest) mult *= Number(curve.weakGroupMultiplier);
  }
  if (team) mult *= Number(trait.team ?? 1);
  if (yearIndex === 0) mult *= Number(trait.year1 ?? 1);
  if (yearIndex === 2) mult *= Number(trait.year3 ?? 1);
  if (weapon) mult *= Number(trait.weaponTraining ?? 1);
  if (groupKey) {
    mult *= Number(trait.groups?.[groupKey] ?? 1);
    if (trait.weak) {
      const weakest = Object.keys(STAT_GROUPS).sort((a, b) => groupAverage(robot, a) - groupAverage(robot, b))[0];
      if (groupKey === weakest) mult *= Number(trait.weak);
    }
  }
  return mult;
}

function seriesNoise(robot) {
  const modifier = Number(robot.seriesIntrinsicTrait?.noise ?? 1);
  const width = 0.15 * modifier;
  return randomFloat(1 - width, 1 + width);
}

function growGroup(robot, groupKey, baseGrowth, focusStats = [], focusBonus = 0, options = {}) {
  const group = STAT_GROUPS[groupKey];
  if (!group) return [];
  const deltas = [];

  for (const statName of group.stats) {
    const multiplier = robot.growthMultipliers[groupKey][statName];
    const noise = seriesNoise(robot);
    const seriesMultiplier = seriesGrowthMultiplier(robot, groupKey, options);
    const focusMultiplier = focusStats.includes(statName) ? (1 + focusBonus) : 1;
    const delta = baseGrowth * multiplier * noise * focusMultiplier * seriesMultiplier;
    robot.stats[groupKey][statName] = clamp(robot.stats[groupKey][statName] + delta, 0, 999);
    deltas.push({ groupKey, statName, delta });
  }
  return deltas;
}

function growWeaponCategory(robot, weaponKey, baseGrowth, options = {}) {
  robot.weaponCategoryStats ??= {};
  robot.weaponCategoryGrowthMultipliers ??= {};
  const values = weaponKey === robot.weaponKey ? robot.weaponStats : robot.weaponCategoryStats?.[weaponKey];
  const growths = weaponKey === robot.weaponKey ? robot.weaponGrowthMultipliers : robot.weaponCategoryGrowthMultipliers?.[weaponKey];
  if (!values || !growths) return [];
  const next = { ...values };
  const deltas = [];
  for (const [axis, value] of Object.entries(values)) {
    const multiplier = Number(growths[axis] ?? 1);
    const noise = seriesNoise(robot);
    const delta = baseGrowth * multiplier * noise * seriesGrowthMultiplier(robot, null, { ...options, weapon: true });
    next[axis] = clamp(Number(value) + delta, 0, 999);
    deltas.push({ axis, delta, weaponKey });
  }
  robot.weaponCategoryStats[weaponKey] = { ...next };
  if (weaponKey === robot.weaponKey) robot.weaponStats = { ...next };
  return deltas;
}

function growWeapon(robot, baseGrowth, options = {}) {
  return growWeaponCategory(robot, robot.weaponKey, baseGrowth, options);
}

function applyIndividualTraining(robot) {
  const target = robot.individualTrainingTarget ?? `group:${robot.favoriteGroup}`;
  const [type, key] = target.split(':');
  if (type === 'weapon' && key === robot.weaponKey) {
    return growWeapon(robot, GAME_CONFIG.individualBaseGrowth, { team: false });
  }
  return growGroup(robot, key || robot.favoriteGroup, GAME_CONFIG.individualBaseGrowth, [], 0, { team: false });
}

export function individualTrainingOptions(robot) {
  const groupOptions = Object.entries(STAT_GROUPS).map(([key, value]) => ({
    value: `group:${key}`,
    label: `${value.label}系`,
  }));
  return [
    ...groupOptions,
    { value: `weapon:${robot.weaponKey}`, label: `${WEAPON_CATEGORIES[robot.weaponKey].label}系` },
  ];
}


const WEAPON_LINKED_GROUP = {
  blade:'control', hammer:'output', lance:'mobility', beamBlade:'engine', rifle:'sensor', machineGun:'mobility',
  cannon:'control', laser:'sensor', beamCannon:'engine', missile:'compute', emp:'ai', drone:'compute',
};

export function applyTrainingTurn(roster, selectedTraining) {
  const log = [];
  const teamGrowth = GAME_CONFIG.teamBaseGrowthByLevel[selectedTraining.level];

  for (const robot of roster) {
    applyIndividualTraining(robot);
    if (selectedTraining.weaponLab) {
      const testWeaponKey = WEAPON_CATEGORIES[selectedTraining.testWeaponKey] ? selectedTraining.testWeaponKey : robot.weaponKey;
      growWeaponCategory(robot, testWeaponKey, teamGrowth * Number(selectedTraining.weaponGrowth ?? 1), { team: true });
      const linkedGroup = WEAPON_LINKED_GROUP[testWeaponKey] ?? robot.favoriteGroup;
      growGroup(robot, linkedGroup, teamGrowth * Number(selectedTraining.linkedGrowth ?? 0.35), [], 0, { team: true });
    } else if (selectedTraining.specialMode === 'weakest') {
      growGroup(robot, weakestGroupKey(robot), teamGrowth * Number(selectedTraining.specialGrowth ?? 0.72), [], 0, { team: true });
    } else if (selectedTraining.specialMode === 'rookieFoundation') {
      if (Number(robot.cohortYear ?? 1) === 1) growGroup(robot, weakestGroupKey(robot), teamGrowth * Number(selectedTraining.specialGrowth ?? 0.82), [], 0, { team: true });
    } else if (selectedTraining.specialMode === 'favorite') {
      growGroup(robot, robot.favoriteGroup ?? strongestGroupKey(robot), teamGrowth * Number(selectedTraining.specialGrowth ?? 0.90), [], 0, { team: true });
    } else if (selectedTraining.specialMode === 'reliability') {
      const [minGain, maxGain] = selectedTraining.reliabilityGain ?? [1, 2];
      robot.reliability = clamp(Number(robot.reliability ?? 50) + randomFloat(minGain, maxGain), 0, 100);
    } else if (selectedTraining.specialMode === 'finalTune') {
      if (Number(robot.cohortYear ?? 1) >= 3) growGroup(robot, robot.favoriteGroup ?? strongestGroupKey(robot), teamGrowth * Number(selectedTraining.specialGrowth ?? 0.78), [], 0, { team: true });
    } else {
      growGroup(robot, selectedTraining.groupKey, teamGrowth, selectedTraining.focusStats ?? [], selectedTraining.focusBonus ?? 0, { team: true });
    }
    if (selectedTraining.risk?.reliability && Math.random() < 0.18) robot.reliability = clamp(Number(robot.reliability ?? 50) + selectedTraining.risk.reliability, 0, 100);
  }

  const focusText = selectedTraining.focusStats?.length ? `（重点：${selectedTraining.focusStats.join('・')}）` : '';
  log.push(`${selectedTraining.label} Lv${selectedTraining.level}を実施。${focusText}`);
  return log;
}

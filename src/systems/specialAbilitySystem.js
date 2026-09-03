import { GAME_CONFIG } from '../config.js?v=3.9';
import {
  ABILITY_UPGRADES,
  NEGATIVE_ABILITY_IDS,
  NEGATIVE_TO_POSITIVE,
  NORMAL_POSITIVE_ABILITY_IDS,
  SPECIAL_ABILITIES,
} from '../data/specialAbilities.js?v=3.9';
import { GROUP_KEYS, STAT_GROUPS } from '../data/statDefinitions.js?v=3.9';
import { WEAPON_CATEGORIES } from '../data/weaponDefinitions.js?v=3.9';
import { pick, weightedPick } from '../utils/random.js?v=3.9';

function hasAbility(robot, id) {
  return robot.specialAbilities?.includes(id) ?? false;
}

const GROUP_GAIN_ABILITIES = {
  output: 'outputTune', mobility: 'mobilityTune', control: 'controlTune', engine: 'engineTune',
  compute: 'computeTune', sensor: 'sensorTune', ai: 'aiTune',
};

const RESISTANCE_GAIN_ABILITIES = {
  '衝撃耐性': 'antiShock', '貫通耐性': 'antiPierce', '切断耐性': 'antiCut',
  '熱耐性': 'antiHeat', '爆発耐性': 'antiBlast', '電磁耐性': 'antiEM',
};

const NEGATIVE_CONDITION_ABILITIES = {
  output: 'outputInstability', control: 'controlLag', sensor: 'sensorNoise', ai: 'aiHesitation',
};

function seriesAbilityWeight(robot, abilityId) {
  const tags = new Set(robot.seriesAbilityTendencyTags ?? []);
  const overlap = (SPECIAL_ABILITIES[abilityId]?.tags ?? []).filter((tag) => tags.has(tag)).length;
  return overlap ? Math.pow(Number(robot.seriesAbilityTendencyMultiplier ?? 1.18), overlap) : 1;
}

function seriesAbilityChance(robot, abilityId, chance) {
  return Math.min(0.95, chance * seriesAbilityWeight(robot, abilityId));
}

export function addAbility(robot, abilityId) {
  if (!SPECIAL_ABILITIES[abilityId]) return null;
  robot.specialAbilities ??= [];
  if (robot.specialAbilities.includes(abilityId)) return null;
  robot.specialAbilities.push(abilityId);
  return { type: 'gain', abilityId };
}

export function removeAbility(robot, abilityId) {
  robot.specialAbilities ??= [];
  const index = robot.specialAbilities.indexOf(abilityId);
  if (index < 0) return null;
  robot.specialAbilities.splice(index, 1);
  return { type: 'remove', abilityId };
}

export function upgradeAbility(robot, baseAbilityId) {
  const upperId = ABILITY_UPGRADES[baseAbilityId];
  if (!upperId || !hasAbility(robot, baseAbilityId) || hasAbility(robot, upperId)) return null;
  removeAbility(robot, baseAbilityId);
  robot.specialAbilities.push(upperId);
  return { type: 'upgrade', fromAbilityId: baseAbilityId, abilityId: upperId };
}

export function randomPositiveAbility(robot) {
  const candidates = NORMAL_POSITIVE_ABILITY_IDS.filter((id) => !hasAbility(robot, id) && !hasAbility(robot, ABILITY_UPGRADES[id]));
  return candidates.length ? weightedPick(candidates.map((id) => ({ value: id, weight: seriesAbilityWeight(robot, id) }))) : null;
}

export function randomNegativeAbility(robot) {
  const candidates = NEGATIVE_ABILITY_IDS.filter((id) => !hasAbility(robot, id));
  return candidates.length ? pick(candidates) : null;
}

export function randomUpgradableAbility(robot) {
  const candidates = Object.keys(ABILITY_UPGRADES).filter((id) => hasAbility(robot, id) && !hasAbility(robot, ABILITY_UPGRADES[id]));
  return candidates.length ? pick(candidates) : null;
}

export function randomNegativeToOvercome(robot) {
  const candidates = NEGATIVE_ABILITY_IDS.filter((id) => hasAbility(robot, id));
  return candidates.length ? pick(candidates) : null;
}

function overallBaseScore(robot) {
  let total = 0;
  let count = 0;
  for (const groupKey of GROUP_KEYS) {
    for (const statName of STAT_GROUPS[groupKey].stats) {
      total += robot.stats[groupKey][statName];
      count += 1;
    }
  }
  return total / Math.max(1, count);
}

function comparisonHas(result, predicate) {
  return result.comparisons.some((item) => predicate(item.slot));
}

function candidateRoll(candidates, robot = null) {
  const shuffled = [...candidates].sort(() => Math.random() - 0.5);
  for (const candidate of shuffled) {
    if (Math.random() < (robot ? seriesAbilityChance(robot, candidate.id, candidate.chance) : candidate.chance)) return candidate.id;
  }
  return null;
}

export function evaluateOfficialBoutAbilityChanges(robot, opponent, result, allyWon) {
  const changes = [];
  robot.specialAbilities ??= [];
  const weapon = WEAPON_CATEGORIES[robot.weaponKey];
  const opponentScore = overallBaseScore(opponent);
  const robotScore = overallBaseScore(robot);

  // まず既存の赤特克服を判定。勝利経験が対応する弱点を消す。
  if (allyWon) {
    const overcomeCandidates = [];
    if (hasAbility(robot, 'bigStageX')) overcomeCandidates.push({ id: 'bigStageX', chance: GAME_CONFIG.negativeAbilityOvercomeChance });
    if (hasAbility(robot, 'moodSwing')) overcomeCandidates.push({ id: 'moodSwing', chance: GAME_CONFIG.negativeAbilityOvercomeChance * 0.7 });
    if (hasAbility(robot, 'heatRunaway') && weapon.type === 'エネルギー') {
      overcomeCandidates.push({ id: 'heatRunaway', chance: GAME_CONFIG.negativeAbilityOvercomeChance });
    }
    for (const [groupKey, abilityId] of Object.entries(NEGATIVE_CONDITION_ABILITIES)) {
      if (hasAbility(robot, abilityId) && comparisonHas(result, (slot) => slot.kind === 'base' && slot.groupKey === groupKey)) {
        overcomeCandidates.push({ id: abilityId, chance: GAME_CONFIG.negativeAbilityOvercomeChance * 0.85 });
      }
    }
    const overcomeId = candidateRoll(overcomeCandidates, robot);
    if (overcomeId) {
      const removed = removeAbility(robot, overcomeId);
      if (removed) changes.push(removed);
      const positiveId = NEGATIVE_TO_POSITIVE[overcomeId];
      if (positiveId && Math.random() < GAME_CONFIG.overcomePositiveFollowupChance) {
        const gained = addAbility(robot, positiveId);
        if (gained) changes.push(gained);
      }
    }
  }

  // 通常能力の上位化。試合で活躍した時だけ、ごく低確率。
  if (allyWon && Math.random() < GAME_CONFIG.officialAbilityUpgradeChance) {
    const upgradable = randomUpgradableAbility(robot);
    const upgraded = upgradable ? upgradeAbility(robot, upgradable) : null;
    if (upgraded) changes.push(upgraded);
  }

  if (allyWon) {
    const gainCandidates = [];
    if (result.reversal && result.comparisonWinner === 'b') gainCandidates.push({ id: 'adversity', chance: 0.11 });
    if (opponentScore >= robotScore + 5) gainCandidates.push({ id: 'giantKiller', chance: 0.08 });
    gainCandidates.push({ id: 'bigStage', chance: 0.025 });
    for (const [groupKey, abilityId] of Object.entries(GROUP_GAIN_ABILITIES)) {
      if (comparisonHas(result, (slot) => slot.kind === 'base' && slot.groupKey === groupKey)) {
        gainCandidates.push({ id: abilityId, chance: 0.022 });
      }
    }
    if (comparisonHas(result, (slot) => slot.kind === 'weapon')) {
      gainCandidates.push({ id: 'weaponAdapt', chance: 0.022 });
    }

    if (comparisonHas(result, (slot) => slot.kind === 'base' && ['反応速度', '駆動応答'].includes(slot.statName))) {
      gainCandidates.push({ id: 'highResponse', chance: 0.045 });
    }
    if (comparisonHas(result, (slot) => slot.kind === 'base' && ['駆動精度', '微細制御'].includes(slot.statName))) {
      gainCandidates.push({ id: 'precisionControl', chance: 0.04 });
    }
    if (
      robot.weaponKey === 'hammer'
      && comparisonHas(result, (slot) => slot.kind === 'weapon' && slot.axis === 'power')
      && comparisonHas(result, (slot) => slot.kind === 'base' && slot.statName === '瞬間出力')
    ) {
      gainCandidates.push({ id: 'heavyStrike', chance: 0.07 });
    }
    if (weapon.range === '遠距離' && comparisonHas(result, (slot) => slot.kind === 'weapon' && slot.axis === 'accuracy')) {
      gainCandidates.push({ id: 'precisionFire', chance: 0.055 });
    }
    if (weapon.type === 'エネルギー' && comparisonHas(result, (slot) => slot.kind === 'weapon' && slot.axis === 'stability')) {
      gainCandidates.push({ id: 'thermalManagement', chance: 0.05 });
    }
    const resistanceAbility = RESISTANCE_GAIN_ABILITIES[WEAPON_CATEGORIES[opponent.weaponKey]?.resistance];
    if (resistanceAbility) gainCandidates.push({ id: resistanceAbility, chance: 0.03 });
    if (robot.reliability >= 88) gainCandidates.push({ id: 'stableOperation', chance: 0.035 });

    const abilityId = candidateRoll(gainCandidates.filter((item) => !hasAbility(robot, item.id) && !hasAbility(robot, ABILITY_UPGRADES[item.id])), robot);
    const gained = abilityId ? addAbility(robot, abilityId) : null;
    if (gained) changes.push(gained);
  } else if (Math.random() < GAME_CONFIG.officialNegativeAbilityChance) {
    const negativeCandidates = [];
    if (robot.reliability <= 62) negativeCandidates.push('moodSwing');
    if (weapon.type === 'エネルギー' && robot.stats.engine['冷却性能'] < 60) negativeCandidates.push('heatRunaway');
    for (const [groupKey, abilityId] of Object.entries(NEGATIVE_CONDITION_ABILITIES)) {
      if (comparisonHas(result, (slot) => slot.kind === 'base' && slot.groupKey === groupKey)) negativeCandidates.push(abilityId);
    }
    negativeCandidates.push('bigStageX');
    const available = negativeCandidates.filter((id) => !hasAbility(robot, id));
    const negative = available.length ? addAbility(robot, pick(available)) : null;
    if (negative) changes.push(negative);
  }

  return changes;
}

export function describeAbilityChange(change) {
  if (!change) return '';
  const ability = SPECIAL_ABILITIES[change.abilityId];
  if (!ability) return '';
  if (change.type === 'gain') return `特殊能力「${ability.name}」を獲得`;
  if (change.type === 'remove') return `「${ability.name}」を克服`;
  if (change.type === 'upgrade') {
    const from = SPECIAL_ABILITIES[change.fromAbilityId];
    return `「${from?.name ?? '特殊能力'}」が「${ability.name}」へ昇格`;
  }
  return ability.name;
}

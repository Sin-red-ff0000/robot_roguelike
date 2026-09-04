import { GAME_CONFIG } from '../config.js?v=4.7';
import { NORMAL_POSITIVE_ABILITY_IDS, SPECIAL_ABILITIES } from '../data/specialAbilities.js?v=4.7';
import { EVENT_EXPANSION_TEMPLATES } from '../data/eventExpansionDefinitions.js?v=4.7';
import { GROUP_KEYS, STAT_GROUPS } from '../data/statDefinitions.js?v=4.7';
import { WEAPON_AXES, WEAPON_CATEGORIES } from '../data/weaponDefinitions.js?v=4.7';
import { clamp, pick, randomFloat, randomInt, weightedPick } from '../utils/random.js?v=4.7';
import { generateCustomPart } from './partSystem.js?v=4.7';
import {
  addAbility,
  describeAbilityChange,
  randomNegativeAbility,
  randomNegativeToOvercome,
  randomPositiveAbility,
  randomUpgradableAbility,
  removeAbility,
  upgradeAbility,
} from './specialAbilitySystem.js?v=4.7';
import { eventChanceMultiplier } from './settingsSystem.js?v=4.7';

function eventId(prefix) {
  return `${prefix}-${Date.now()}-${randomInt(1000, 9999)}`;
}

function robotLabel(robot) {
  return `${robot.manufacturerName} ${robot.seriesName}`;
}

function rememberEvent(state, event) {
  state.lastEvent = event;
  state.eventHistory ??= [];
  state.eventHistory.unshift(event);
  state.eventHistory = state.eventHistory.slice(0, 40);
  return event;
}

function eventResult(type, title, description, extras = {}) {
  return {
    id: eventId(type),
    type,
    title,
    description,
    timestamp: Date.now(),
    ...extras,
  };
}

function addRandomBaseStats(robot, count, min, max) {
  const pool = [];
  for (const groupKey of GROUP_KEYS) {
    for (const statName of STAT_GROUPS[groupKey].stats) pool.push({ groupKey, statName });
  }
  const chosen = [...pool].sort(() => Math.random() - 0.5).slice(0, count);
  return chosen.map(({ groupKey, statName }) => {
    const amount = randomInt(min, max);
    robot.stats[groupKey][statName] = clamp(robot.stats[groupKey][statName] + amount, 0, GAME_CONFIG.customPartStatCap);
    return `${statName}+${amount}`;
  });
}

function addRandomWeaponStats(robot, count, min, max) {
  const axes = [...WEAPON_AXES].sort(() => Math.random() - 0.5).slice(0, count);
  const weapon = WEAPON_CATEGORIES[robot.weaponKey];
  return axes.map((axis) => {
    const amount = randomInt(min, max);
    robot.weaponStats[axis] = clamp(robot.weaponStats[axis] + amount, 0, GAME_CONFIG.customPartStatCap);
    robot.weaponCategoryStats[robot.weaponKey][axis] = robot.weaponStats[axis];
    return `${weapon.stats[axis]}+${amount}`;
  });
}

function createTrainingModifier() {
  const groupKey = pick(GROUP_KEYS);
  return {
    id: eventId('training-mod'),
    groupKey,
    remainingTurns: GAME_CONFIG.trainingModifierDefaultTurns,
    levelBonus: GAME_CONFIG.trainingModifierLevelBonus,
    weightMultiplier: GAME_CONFIG.trainingModifierWeightMultiplier,
  };
}

export function tickTrainingModifiers(state) {
  state.trainingModifiers ??= [];
  state.trainingModifiers = state.trainingModifiers
    .map((modifier) => ({ ...modifier, remainingTurns: modifier.remainingTurns - 1 }))
    .filter((modifier) => modifier.remainingTurns > 0);
}

function normalPartEvent(state) {
  const multiChance = 0.14;
  const count = Math.random() < multiChance ? randomInt(2, 4) : 1;
  const parts = Array.from({ length: count }, () => generateCustomPart({ challenge: false }));
  state.partInventory.push(...parts);
  return eventResult(
    'part-supply',
    'カスタムパーツ提供',
    count === 1
      ? `${parts[0].manufacturerName}からカスタムパーツが提供された。`
      : `複数メーカーからカスタムパーツが${count}個提供された。`,
    { partIds: parts.map((part) => part.id) },
  );
}

function challengePartEvent(state) {
  const part = generateCustomPart({ challenge: true });
  state.partInventory.push(part);
  return eventResult(
    'challenge-part',
    '挑戦的な試供品',
    `${part.manufacturerName}から、性能を大きく尖らせる「挑戦的な試供品」が届いた。`,
    { partIds: [part.id] },
  );
}

function trainingEnvironmentEvent(state) {
  state.trainingModifiers ??= [];
  const modifier = createTrainingModifier();
  state.trainingModifiers.push(modifier);
  return eventResult(
    'training-focus',
    '重点訓練期間',
    `${STAT_GROUPS[modifier.groupKey].label}系の訓練環境が${modifier.remainingTurns}ターン強化された。該当練習が出やすくなり、出現Lvも+${modifier.levelBonus}。`,
    { trainingModifierId: modifier.id },
  );
}

function positiveAbilityEvent(state) {
  const candidates = state.roster.filter((robot) => randomPositiveAbility(robot));
  if (!candidates.length) return normalPartEvent(state);
  const robot = pick(candidates);
  const abilityId = randomPositiveAbility(robot);
  const change = addAbility(robot, abilityId);
  return eventResult(
    'ability-gain',
    '戦闘AIの新たな特性',
    `${robotLabel(robot)}が特殊能力「${SPECIAL_ABILITIES[abilityId].name}」を獲得した。`,
    { robotId: robot.id, abilityChanges: [change] },
  );
}

function aggressiveTuningEvent(state) {
  const robot = pick(state.roster);
  const statChanges = Math.random() < 0.5
    ? addRandomBaseStats(robot, randomInt(2, 4), 3, 7)
    : addRandomWeaponStats(robot, randomInt(2, 4), 3, 7);
  const negativeId = randomNegativeAbility(robot);
  const change = negativeId && Math.random() < 0.72 ? addAbility(robot, negativeId) : null;
  const tail = change ? ` 代償として「${SPECIAL_ABILITIES[negativeId].name}」も付与された。` : '';
  return eventResult(
    'aggressive-tuning',
    '挑戦的AIチューニング',
    `${robotLabel(robot)}に攻めた調整を実施。${statChanges.join(' / ')}。${tail}`,
    { robotId: robot.id, abilityChanges: change ? [change] : [] },
  );
}

function overcomeEvent(state) {
  const candidates = state.roster.filter((robot) => randomNegativeToOvercome(robot));
  if (!candidates.length) return positiveAbilityEvent(state);
  const robot = pick(candidates);
  const negativeId = randomNegativeToOvercome(robot);
  const removed = removeAbility(robot, negativeId);
  return eventResult(
    'overcome',
    '弱点克服',
    `${robotLabel(robot)}が「${SPECIAL_ABILITIES[negativeId].name}」を克服した。`,
    { robotId: robot.id, abilityChanges: removed ? [removed] : [] },
  );
}

function individualBreakthroughEvent(state) {
  const robot = pick(state.roster);
  const target = robot.individualTrainingTarget ?? `group:${robot.favoriteGroup}`;
  const [kind, key] = target.split(':');
  let changes;
  let label;
  if (kind === 'weapon') {
    changes = addRandomWeaponStats(robot, randomInt(2, 3), 2, 5);
    label = WEAPON_CATEGORIES[robot.weaponKey].label;
  } else {
    const groupKey = key || robot.favoriteGroup;
    const stats = [...STAT_GROUPS[groupKey].stats].sort(() => Math.random() - 0.5).slice(0, randomInt(2, 3));
    changes = stats.map((statName) => {
      const amount = randomInt(2, 5);
      robot.stats[groupKey][statName] = clamp(robot.stats[groupKey][statName] + amount, 0, GAME_CONFIG.customPartStatCap);
      return `${statName}+${amount}`;
    });
    label = STAT_GROUPS[groupKey].label;
  }
  return eventResult(
    'breakthrough',
    '個別練習の手応え',
    `${robotLabel(robot)}が${label}系の個別練習で大きな手応えを得た。${changes.join(' / ')}`,
    { robotId: robot.id },
  );
}


function manufacturerSupportEvent(state) {
  const robot = pick(state.roster);
  const count = randomInt(2, 3);
  const parts = Array.from({ length: count }, () => generateCustomPart({
    manufacturerId: robot.manufacturerId,
    challenge: false,

  }));
  state.partInventory.push(...parts);
  return eventResult(
    'manufacturer-support',
    'メーカー集中技術支援',
    `${robot.manufacturerName}から同社製カスタムパーツ${count}個の集中提供を受けた。`,
    { robotId: robot.id, partIds: parts.map((part) => part.id) },
  );
}

function intensiveTrainingEvent(state) {
  state.trainingModifiers ??= [];
  const groupKey = pick(GROUP_KEYS);
  const modifier = {
    id: eventId('intensive-training'),
    groupKey,
    remainingTurns: randomInt(2, 4),
    levelBonus: 2,
    weightMultiplier: GAME_CONFIG.trainingModifierWeightMultiplier * 1.25,
  };
  state.trainingModifiers.push(modifier);
  return eventResult(
    'intensive-training',
    '短期集中強化プログラム',
    `${STAT_GROUPS[groupKey].label}系を${modifier.remainingTurns}ターン集中強化。該当練習の出現率が上がり、出現Lv+2。`,
    { trainingModifierId: modifier.id },
  );
}

function reliabilityCalibrationEvent(state) {
  const robot = pick(state.roster);
  const before = robot.reliability;
  const amount = randomInt(3, 8);
  robot.reliability = clamp(robot.reliability + amount, 20, 100);
  return eventResult(
    'reliability-calibration',
    '精密再調整',
    `${robotLabel(robot)}の動作再現性を再調整。信頼性 ${before} → ${robot.reliability}。`,
    { robotId: robot.id },
  );
}

function abilityUpgradeEvent(state) {
  const candidates = state.roster.filter((robot) => randomUpgradableAbility(robot));
  if (!candidates.length) return positiveAbilityEvent(state);
  const robot = pick(candidates);
  const abilityId = randomUpgradableAbility(robot);
  const change = upgradeAbility(robot, abilityId);
  return eventResult(
    'ability-upgrade',
    'AI特性の深化',
    `${robotLabel(robot)}の特殊能力が上位能力へ発展した。${describeAbilityChange(change)}。`,
    { robotId: robot.id, abilityChanges: change ? [change] : [] },
  );
}

function rarePrototypeEvent(state) {
  const robot = pick(state.roster);
  const rarityKey = Math.random() < 0.22 ? 'bespoke' : 'elite';
  const part = generateCustomPart({
    manufacturerId: robot.manufacturerId,
    rarityKey,
    challenge: Math.random() < 0.35,
    forceAbility: true,
  });
  part.name = `${robot.manufacturerName} 特別技術試験品：${part.name.split('：').at(-1)}`;
  state.partInventory.push(part);
  return eventResult(
    'rare-prototype',
    '特別技術試験品',
    `${robot.manufacturerName}から${part.rarityLabel}の特別技術試験品が提供された。`,
    { robotId: robot.id, partIds: [part.id] },
  );
}

function growthAwakening(robot) {
  const useWeapon = Math.random() < 0.34;
  const changes = [];
  if (useWeapon) {
    const axes = [...WEAPON_AXES].sort(() => Math.random() - 0.5).slice(0, randomInt(3, 6));
    for (const axis of axes) {
      const amount = randomFloat(0.16, 0.34);
      robot.weaponGrowthMultipliers[axis] = clamp(
        robot.weaponGrowthMultipliers[axis] + amount,
        GAME_CONFIG.growthMultiplierMin,
        GAME_CONFIG.awakeningGrowthMultiplierCap,
      );
      robot.weaponCategoryGrowthMultipliers[robot.weaponKey][axis] = robot.weaponGrowthMultipliers[axis];
      changes.push(`${WEAPON_CATEGORIES[robot.weaponKey].stats[axis]}成長適性↑`);
    }
    return { kind: 'growth', label: `${WEAPON_CATEGORIES[robot.weaponKey].label}適性覚醒`, changes };
  }

  const groupKey = pick(GROUP_KEYS);
  const stats = [...STAT_GROUPS[groupKey].stats].sort(() => Math.random() - 0.5).slice(0, randomInt(3, STAT_GROUPS[groupKey].stats.length));
  for (const statName of stats) {
    const amount = randomFloat(0.16, 0.34);
    robot.growthMultipliers[groupKey][statName] = clamp(
      robot.growthMultipliers[groupKey][statName] + amount,
      GAME_CONFIG.growthMultiplierMin,
      GAME_CONFIG.awakeningGrowthMultiplierCap,
    );
    changes.push(`${statName}成長適性↑`);
  }
  return { kind: 'growth', label: `${STAT_GROUPS[groupKey].label}適性覚醒`, changes };
}

function statAwakening(robot) {
  const changes = [
    ...addRandomBaseStats(robot, randomInt(3, 5), 5, 12),
    ...(Math.random() < 0.45 ? addRandomWeaponStats(robot, randomInt(2, 3), 5, 10) : []),
  ];
  return { kind: 'stats', label: '潜在能力開放', changes };
}

function abilityAwakening(robot) {
  const changes = [];
  const upgradable = randomUpgradableAbility(robot);
  if (upgradable && Math.random() < 0.68) {
    const change = upgradeAbility(robot, upgradable);
    if (change) changes.push(change);
  } else {
    const count = randomInt(1, 2);
    for (let index = 0; index < count; index += 1) {
      const abilityId = randomPositiveAbility(robot);
      const change = abilityId ? addAbility(robot, abilityId) : null;
      if (change) changes.push(change);
    }
  }
  return {
    kind: 'ability',
    label: 'AI特性覚醒',
    changes: changes.map(describeAbilityChange),
    abilityChanges: changes,
  };
}

function overcomeAwakening(robot) {
  const negativeId = randomNegativeToOvercome(robot);
  if (!negativeId) return abilityAwakening(robot);
  const removed = removeAbility(robot, negativeId);
  const changes = removed ? [removed] : [];
  const positiveId = randomPositiveAbility(robot);
  const gained = positiveId ? addAbility(robot, positiveId) : null;
  if (gained) changes.push(gained);
  return {
    kind: 'overcome',
    label: '完全克服',
    changes: changes.map(describeAbilityChange),
    abilityChanges: changes,
  };
}

function awakeningEvent(state) {
  const robot = pick(state.roster);
  robot.awakenings ??= [];
  const modes = [growthAwakening, statAwakening, abilityAwakening, overcomeAwakening];
  const firstMode = pick(modes);
  const first = firstMode(robot);
  const results = [first];
  if (Math.random() < GAME_CONFIG.awakeningCompositeChance) {
    const secondMode = pick(modes.filter((mode) => mode !== firstMode));
    results.push(secondMode(robot));
  }
  const abilityChanges = results.flatMap((item) => item.abilityChanges ?? []);
  const summary = results.map((item) => `${item.label}：${item.changes.join(' / ') || '変化を確認'}`).join(' ｜ ');
  const record = { year: state.year, turn: state.turn, summary };
  robot.awakenings.push(record);
  return eventResult(
    'awakening',
    'AWAKENING ― 覚醒',
    `${robotLabel(robot)}に未知の変化を確認。${summary}`,
    { robotId: robot.id, awakening: true, abilityChanges },
  );
}


function robotGroupAverage(robot, groupKey) {
  const stats = STAT_GROUPS[groupKey]?.stats ?? [];
  if (!stats.length) return 0;
  return stats.reduce((sum, name) => sum + Number(robot.stats?.[groupKey]?.[name] ?? 0), 0) / stats.length;
}

function expandedEventCandidates(state, template) {
  const roster = state.roster ?? [];
  switch (template.condition) {
    case 'weapon': return roster.filter((robot) => robot.weaponKey === template.weaponKey);
    case 'year1': return roster.filter((robot) => Number(robot.cohortYear ?? 1) === 1);
    case 'year3': return roster.filter((robot) => Number(robot.cohortYear ?? 1) >= 3);
    case 'reliable': return roster.filter((robot) => Number(robot.reliability ?? 0) >= 82);
    case 'unstable': return roster.filter((robot) => Number(robot.reliability ?? 100) <= 58);
    case 'abilityRich': return roster.filter((robot) => (robot.specialAbilities ?? []).length >= 3);
    case 'sameMaker': {
      const counts = roster.reduce((map, robot) => map.set(robot.manufacturerId, (map.get(robot.manufacturerId) ?? 0) + 1), new Map());
      return roster.filter((robot) => (counts.get(robot.manufacturerId) ?? 0) >= 4);
    }
    case 'mixedMaker': {
      const makers = new Set(roster.map((robot) => robot.manufacturerId));
      return makers.size >= 5 ? roster : [];
    }
    case 'highStat': return roster.filter((robot) => robotGroupAverage(robot, template.groupKey) >= 72);
    case 'lowStat': return roster.filter((robot) => robotGroupAverage(robot, template.groupKey) <= 48);
    case 'recentWin': return (state.teamRecord?.recentResults ?? []).slice(-3).includes('W') ? roster : [];
    case 'recentLoss': return (state.teamRecord?.recentResults ?? []).slice(-3).includes('L') ? roster : [];
    case 'tournament': return (state.career?.tournamentEntries ?? 0) > 0 || Object.values(state.tournamentYear?.entries ?? {}).some((entry) => entry?.status && entry.status !== 'locked') ? roster : [];
    case 'any':
    default: return roster;
  }
}

function applyExpandedEventEffect(robot, template) {
  const details = [];
  const groupKey = template.groupKey;
  const groupStats = STAT_GROUPS[groupKey]?.stats ?? [];
  const weapon = WEAPON_CATEGORIES[robot.weaponKey];
  const addGroup = (min, max, count = 2) => {
    const chosen = [...groupStats].sort(() => Math.random() - 0.5).slice(0, Math.min(count, groupStats.length));
    for (const statName of chosen) {
      const amount = randomInt(min, max);
      robot.stats[groupKey][statName] = clamp(Number(robot.stats[groupKey][statName] ?? 0) + amount, 0, GAME_CONFIG.customPartStatCap);
      details.push(`${statName}+${amount}`);
    }
  };
  if (template.effect === 'base') addGroup(1, 3, 2);
  else if (template.effect === 'growth') {
    const statName = pick(groupStats);
    if (statName) {
      const amount = randomFloat(0.025, 0.06);
      robot.growthMultipliers[groupKey][statName] = clamp(Number(robot.growthMultipliers[groupKey][statName] ?? 1) + amount, GAME_CONFIG.growthMultiplierMin, GAME_CONFIG.awakeningGrowthMultiplierCap);
      details.push(`${statName}の成長適性+${amount.toFixed(2)}`);
    }
  } else if (template.effect === 'weapon' || template.effect === 'weaponGrowth') {
    const axis = pick(WEAPON_AXES);
    if (template.effect === 'weapon') {
      const amount = randomInt(1, 3);
      robot.weaponStats[axis] = clamp(Number(robot.weaponStats[axis] ?? 0) + amount, 0, GAME_CONFIG.customPartStatCap);
      robot.weaponCategoryStats[robot.weaponKey][axis] = robot.weaponStats[axis];
      details.push(`${weapon.stats[axis]}+${amount}`);
    } else {
      const amount = randomFloat(0.025, 0.055);
      robot.weaponGrowthMultipliers[axis] = clamp(Number(robot.weaponGrowthMultipliers[axis] ?? 1) + amount, GAME_CONFIG.growthMultiplierMin, GAME_CONFIG.awakeningGrowthMultiplierCap);
      robot.weaponCategoryGrowthMultipliers[robot.weaponKey][axis] = robot.weaponGrowthMultipliers[axis];
      details.push(`${weapon.stats[axis]}の成長適性+${amount.toFixed(2)}`);
    }
  } else if (template.effect === 'reliability') {
    const amount = randomInt(2, 5);
    robot.reliability = clamp(Number(robot.reliability ?? 50) + amount, 20, 100);
    details.push(`信頼性+${amount}`);
  } else if (template.effect === 'weakFix') {
    const weakest = [...groupStats].sort((a, b) => Number(robot.stats[groupKey]?.[a] ?? 0) - Number(robot.stats[groupKey]?.[b] ?? 0))[0];
    if (weakest) {
      const amount = randomInt(2, 5);
      robot.stats[groupKey][weakest] = clamp(Number(robot.stats[groupKey][weakest] ?? 0) + amount, 0, GAME_CONFIG.customPartStatCap);
      details.push(`${weakest}+${amount}`);
    }
  }

  // 一部の研究イベントは能力値だけでなく、実戦AIの学習結果として特殊能力へ接続する。
  // 発生頻度は低めにして、イベントだけで特殊能力が飽和しないようにする。
  let learnedAbilityId = null;
  if (template.family === 'ability' && Math.random() < 0.24) learnedAbilityId = randomPositiveAbility(robot);
  if (template.family === 'doctrine' && Math.random() < 0.18) {
    const weaponCandidates = NORMAL_POSITIVE_ABILITY_IDS.filter((id) => {
      const ability = SPECIAL_ABILITIES[id];
      return !robot.specialAbilities?.includes(id) && (ability?.tags ?? []).includes(robot.weaponKey);
    });
    learnedAbilityId = weaponCandidates.length ? pick(weaponCandidates) : learnedAbilityId;
  }
  if (template.family === 'tournament' && Math.random() < 0.12 && !robot.specialAbilities?.includes('bigStage')) learnedAbilityId = 'bigStage';
  if (learnedAbilityId) {
    const change = addAbility(robot, learnedAbilityId);
    if (change) details.push(`特殊能力「${SPECIAL_ABILITIES[learnedAbilityId].name}」を獲得`);
  }
  return details;
}

function expandedOperationalEvent(state) {
  const eligible = EVENT_EXPANSION_TEMPLATES
    .map((template) => ({ template, candidates: expandedEventCandidates(state, template) }))
    .filter((entry) => entry.candidates.length);
  if (!eligible.length) return individualBreakthroughEvent(state);
  // 同じ研究系統ばかり連続しないよう、直近の発生履歴で重みを下げる。
  // 完全なクールダウンにはせず、条件が限られる状況でもイベントが枯れないようにする。
  const recentExpanded = (state.eventHistory ?? []).filter((event) => event?.type === 'operational-study').slice(0, 10);
  const recentFamilies = recentExpanded.map((event) => event.expansionFamily);
  const recentIds = new Set(recentExpanded.slice(0, 6).map((event) => event.expansionEventId));
  const weighted = eligible.map((entry) => {
    const familyHits = recentFamilies.filter((family) => family === entry.template.family).length;
    const exactPenalty = recentIds.has(entry.template.id) ? 0.08 : 1;
    const familyPenalty = familyHits === 0 ? 1 : familyHits === 1 ? 0.52 : familyHits === 2 ? 0.24 : 0.10;
    return { value: entry, weight: Math.max(0.02, Number(entry.template.weight ?? 1) * familyPenalty * exactPenalty) };
  });
  const chosen = weightedPick(weighted);
  const robot = pick(chosen.candidates);
  const details = applyExpandedEventEffect(robot, chosen.template);
  return eventResult(
    'operational-study',
    chosen.template.title,
    `${chosen.template.description} 対象：${robotLabel(robot)}。${details.length ? details.join(' / ') : '運用設定を更新した。'}`,
    { robotId: robot.id, expansionEventId: chosen.template.id, expansionFamily: chosen.template.family },
  );
}

export function resolvePostTrainingEvent(state) {
  if (!state.roster.length) return null;

  if (Math.random() < GAME_CONFIG.awakeningChancePerTraining) {
    return rememberEvent(state, awakeningEvent(state));
  }
  const eventChance = Math.min(0.95, GAME_CONFIG.postTrainingEventChance * eventChanceMultiplier(state.settings));
  if (Math.random() >= eventChance) return null;

  const type = weightedPick([
    { value: 'part', weight: 20 },
    { value: 'challenge', weight: 8 },
    { value: 'manufacturer', weight: 7 },
    { value: 'training', weight: 13 },
    { value: 'intensive', weight: 5 },
    { value: 'breakthrough', weight: 15 },
    { value: 'ability', weight: 10 },
    { value: 'upgrade', weight: 4 },
    { value: 'calibration', weight: 7 },
    { value: 'aggressive', weight: 7 },
    { value: 'overcome', weight: 7 },
    { value: 'rarePrototype', weight: 2 },
    { value: 'expanded', weight: 12 },
  ]);

  const event = {
    part: normalPartEvent,
    challenge: challengePartEvent,
    manufacturer: manufacturerSupportEvent,
    training: trainingEnvironmentEvent,
    intensive: intensiveTrainingEvent,
    breakthrough: individualBreakthroughEvent,
    ability: positiveAbilityEvent,
    upgrade: abilityUpgradeEvent,
    calibration: reliabilityCalibrationEvent,
    aggressive: aggressiveTuningEvent,
    overcome: overcomeEvent,
    rarePrototype: rarePrototypeEvent,
    expanded: expandedOperationalEvent,
  }[type](state);

  return rememberEvent(state, event);
}

import { GAME_CONFIG } from '../config.js?v=3.7';
import { SPECIAL_ABILITIES } from '../data/specialAbilities.js?v=3.7';
import { GROUP_KEYS, STAT_GROUPS } from '../data/statDefinitions.js?v=3.7';
import { WEAPON_AXES, WEAPON_CATEGORIES } from '../data/weaponDefinitions.js?v=3.7';
import { clamp, pick, randomFloat, randomInt, weightedPick } from '../utils/random.js?v=3.7';
import { generateCustomPart } from './partSystem.js?v=3.7';
import {
  addAbility,
  describeAbilityChange,
  randomNegativeAbility,
  randomNegativeToOvercome,
  randomPositiveAbility,
  randomUpgradableAbility,
  removeAbility,
  upgradeAbility,
} from './specialAbilitySystem.js?v=3.7';
import { logisticsLevel } from './facilitySystem.js?v=3.7';
import { eventChanceMultiplier } from './settingsSystem.js?v=3.7';

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
  const logistics = logisticsLevel(state);
  const multiChance = 0.14 + logistics * 0.08;
  const count = Math.random() < multiChance ? randomInt(2, 4 + (logistics >= 3 ? 1 : 0)) : 1;
  const parts = Array.from({ length: count }, () => generateCustomPart({ challenge: false, rarityBias: logistics }));
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
  const part = generateCustomPart({ challenge: true, rarityBias: logisticsLevel(state) });
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
  const logistics = logisticsLevel(state);
  const count = randomInt(2, 3 + (logistics >= 3 ? 1 : 0));
  const parts = Array.from({ length: count }, () => generateCustomPart({
    manufacturerId: robot.manufacturerId,
    challenge: false,
    rarityBias: logistics + 1,
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
  }[type](state);

  return rememberEvent(state, event);
}

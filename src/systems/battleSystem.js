import { GAME_CONFIG } from '../config.js?v=2.8';
import { BASE_SYNERGY_RULES, RESISTANCE_BANDS } from '../data/battleRules.js?v=2.8';
import { GROUP_KEYS, STAT_GROUPS } from '../data/statDefinitions.js?v=2.8';
import { WEAPON_AXES, WEAPON_CATEGORIES } from '../data/weaponDefinitions.js?v=2.8';
import { clamp, randomFloat, shuffle } from '../utils/random.js?v=2.8';

function hasAbility(robot, id) {
  return robot.specialAbilities?.includes(id) ?? false;
}

const RESISTANCE_ABILITY_MAP = {
  '衝撃耐性': ['antiShock', 'fortressFrame'],
  '貫通耐性': ['antiPierce'],
  '切断耐性': ['antiCut'],
  '熱耐性': ['antiHeat'],
  '爆発耐性': ['antiBlast'],
  '電磁耐性': ['antiEM'],
};

const GROUP_ABILITY_RULES = {
  output: { normal: 'outputTune', upper: 'outputRelease', negative: 'outputInstability', normalMult: 1.08, upperMult: 1.15, negativeMult: 0.92 },
  mobility: { normal: 'mobilityTune', upper: 'completeDrive', normalMult: 1.08, upperMult: 1.15 },
  control: { normal: 'controlTune', upper: 'perfectControl', negative: 'controlLag', normalMult: 1.08, upperMult: 1.15, negativeMult: 0.92 },
  engine: { normal: 'engineTune', upper: 'coreMaster', normalMult: 1.08, upperMult: 1.15 },
  compute: { normal: 'computeTune', upper: 'overclockMind', normalMult: 1.08, upperMult: 1.15 },
  sensor: { normal: 'sensorTune', upper: 'omniscientSensor', negative: 'sensorNoise', normalMult: 1.08, upperMult: 1.15, negativeMult: 0.92 },
  ai: { normal: 'aiTune', upper: 'tacticalForesight', negative: 'aiHesitation', normalMult: 1.08, upperMult: 1.15, negativeMult: 0.92 },
};

function reliabilitySpreadMultiplier(robot, context) {
  let multiplier = 1;
  if (hasAbility(robot, 'perfectOperation')) multiplier *= 0.25;
  else if (hasAbility(robot, 'stableOperation')) multiplier *= 0.65;
  if (hasAbility(robot, 'moodSwing')) multiplier *= 1.35;
  if (context.official && hasAbility(robot, 'bigStageX')) multiplier *= 1.25;
  return multiplier;
}

function groupModifierFromReliability(robot, context) {
  const spread = ((100 - robot.reliability) / 55)
    * GAME_CONFIG.reliabilityMaxSpread
    * reliabilitySpreadMultiplier(robot, context);
  return randomFloat(1 - spread, 1 + spread);
}

function createReliabilityModifiers(robot, context) {
  const modifiers = Object.fromEntries(GROUP_KEYS.map((key) => [key, groupModifierFromReliability(robot, context)]));
  modifiers.weapon = groupModifierFromReliability(robot, context);
  return modifiers;
}

function baseEntriesFromGroup(robot, groupKey, count) {
  const names = shuffle(STAT_GROUPS[groupKey].stats).slice(0, count);
  return names.map((statName) => ({ kind: 'base', groupKey, statName }));
}

function randomBaseEntries(count, excluded = []) {
  const pool = [];
  for (const groupKey of GROUP_KEYS) {
    for (const statName of STAT_GROUPS[groupKey].stats) {
      const key = `${groupKey}:${statName}`;
      if (!excluded.includes(key)) pool.push({ kind: 'base', groupKey, statName });
    }
  }
  return shuffle(pool).slice(0, count);
}

function weaponEntries(count) {
  return shuffle(WEAPON_AXES).slice(0, count).map((axis) => ({ kind: 'weapon', axis }));
}

function buildComparisonSlots(robotA, robotB) {
  const aFavorite = baseEntriesFromGroup(robotA, robotA.favoriteGroup, 2);
  const bFavorite = baseEntriesFromGroup(robotB, robotB.favoriteGroup, 2);
  const excluded = [...aFavorite, ...bFavorite].map((entry) => `${entry.groupKey}:${entry.statName}`);
  const randomBase = randomBaseEntries(2, excluded);
  return [...aFavorite, ...bFavorite, ...randomBase, ...weaponEntries(3)];
}

function selectedBaseStatNames(slots) {
  return new Set(slots.filter((slot) => slot.kind === 'base').map((slot) => slot.statName));
}

function ruleApplies(rule, weaponKey, weaponDef) {
  if (rule.weaponKeys && !rule.weaponKeys.includes(weaponKey)) return false;
  if (rule.weaponTypes && !rule.weaponTypes.includes(weaponDef.type)) return false;
  if (rule.weaponRanges && !rule.weaponRanges.includes(weaponDef.range)) return false;
  return true;
}

function resistanceBand(value) {
  return RESISTANCE_BANDS.find((band) => value >= band.min) ?? RESISTANCE_BANDS.at(-1);
}

function effectiveResistance(robot, resistanceName) {
  let value = robot.resistances[resistanceName];
  const abilities = RESISTANCE_ABILITY_MAP[resistanceName] ?? [];
  if (abilities.includes('fortressFrame') && hasAbility(robot, 'fortressFrame')) value += 20;
  else if (abilities.some((id) => hasAbility(robot, id))) value += 10;
  return value;
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

function globalAbilityMultiplier(robot, opponent, context) {
  let multiplier = 1;
  const notes = [];
  if (context.official && hasAbility(robot, 'clutchMaster')) {
    multiplier *= 1.06;
    notes.push('勝負師×1.06');
  } else if (context.official && hasAbility(robot, 'bigStage')) {
    multiplier *= 1.03;
    notes.push('大舞台○×1.03');
  }
  if (hasAbility(robot, 'upsetArtist') && overallBaseScore(opponent) > overallBaseScore(robot) + 3) {
    multiplier *= 1.06;
    notes.push('番狂わせ×1.06');
  } else if (hasAbility(robot, 'giantKiller') && overallBaseScore(opponent) > overallBaseScore(robot) + 3) {
    multiplier *= 1.03;
    notes.push('格上○×1.03');
  }
  return { multiplier, notes };
}

function baseAbilityMultiplier(robot, slot) {
  let multiplier = 1;
  const notes = [];
  if (hasAbility(robot, 'highResponse') && ['反応速度', '駆動応答'].includes(slot.statName)) {
    multiplier *= 1.10;
    notes.push('高応答○×1.10');
  }
  if (hasAbility(robot, 'hyperPrecision') && ['駆動精度', '微細制御'].includes(slot.statName)) {
    multiplier *= 1.18;
    notes.push('超精密制御×1.18');
  } else if (hasAbility(robot, 'precisionControl') && ['駆動精度', '微細制御'].includes(slot.statName)) {
    multiplier *= 1.10;
    notes.push('精密制御○×1.10');
  }
  if (hasAbility(robot, 'lightningSpeed') && slot.groupKey === 'mobility') {
    multiplier *= 1.12;
    notes.push('電光石火×1.12');
  }
  const groupRule = GROUP_ABILITY_RULES[slot.groupKey];
  if (groupRule) {
    if (groupRule.upper && hasAbility(robot, groupRule.upper)) {
      multiplier *= groupRule.upperMult;
      notes.push(`${groupRule.upper}×${groupRule.upperMult.toFixed(2)}`);
    } else if (groupRule.normal && hasAbility(robot, groupRule.normal)) {
      multiplier *= groupRule.normalMult;
      notes.push(`${groupRule.normal}×${groupRule.normalMult.toFixed(2)}`);
    }
    if (groupRule.negative && hasAbility(robot, groupRule.negative)) {
      multiplier *= groupRule.negativeMult;
      notes.push(`${groupRule.negative}×${groupRule.negativeMult.toFixed(2)}`);
    }
  }
  return { multiplier, notes };
}

function weaponAbilityMultiplier(robot, axis, selectedNames) {
  const weaponDef = WEAPON_CATEGORIES[robot.weaponKey];
  let multiplier = 1;
  const notes = [];

  if (robot.weaponKey === 'hammer' && axis === 'power' && selectedNames.has('瞬間出力')) {
    if (hasAbility(robot, 'siegeBreaker')) {
      multiplier *= 1.25;
      notes.push('破城の一撃×1.25');
    } else if (hasAbility(robot, 'heavyStrike')) {
      multiplier *= 1.15;
      notes.push('重撃○×1.15');
    }
  }
  if (axis === 'accuracy' && weaponDef.range === '遠距離' && hasAbility(robot, 'deadeye')) {
    multiplier *= 1.18;
    notes.push('百発百中×1.18');
  } else if (axis === 'accuracy' && weaponDef.range === '遠距離' && hasAbility(robot, 'precisionFire')) {
    multiplier *= 1.10;
    notes.push('精密射撃○×1.10');
  }
  if (axis === 'stability' && weaponDef.type === 'エネルギー' && hasAbility(robot, 'thermalMaster')) {
    multiplier *= 1.18;
    notes.push('完全熱制御×1.18');
  } else if (axis === 'stability' && weaponDef.type === 'エネルギー' && hasAbility(robot, 'thermalManagement')) {
    multiplier *= 1.10;
    notes.push('熱管理○×1.10');
  }
  if (
    axis === 'stability'
    && weaponDef.type === 'エネルギー'
    && hasAbility(robot, 'heatRunaway')
    && selectedNames.has('冷却性能')
    && robot.stats.engine['冷却性能'] < 60
  ) {
    multiplier *= 0.88;
    notes.push('熱暴走傾向×0.88');
  }
  if (hasAbility(robot, 'weaponMastery')) {
    multiplier *= 1.10;
    notes.push('武装の極致×1.10');
  } else if (hasAbility(robot, 'weaponAdapt')) {
    multiplier *= 1.05;
    notes.push('兵装適応○×1.05');
  }
  return { multiplier, notes };
}

function weaponMultiplier(robot, opponent, axis, selectedNames) {
  const weaponDef = WEAPON_CATEGORIES[robot.weaponKey];
  let multiplier = 1;
  const notes = [];

  for (const rule of BASE_SYNERGY_RULES) {
    if (rule.weaponAxis !== axis || !selectedNames.has(rule.triggerStat)) continue;
    if (!ruleApplies(rule, robot.weaponKey, weaponDef)) continue;
    multiplier *= rule.multiplier;
    notes.push(`${rule.label}×${rule.multiplier.toFixed(2)}`);
  }

  const ability = weaponAbilityMultiplier(robot, axis, selectedNames);
  multiplier *= ability.multiplier;
  notes.push(...ability.notes);

  if (axis === 'power') {
    const resistanceValue = effectiveResistance(opponent, weaponDef.resistance);
    const band = resistanceBand(resistanceValue);
    multiplier *= band.attackerMultiplier;
    if (band.attackerMultiplier !== 1) {
      notes.push(`${weaponDef.resistance}(${band.label})×${band.attackerMultiplier.toFixed(2)}`);
    }
  }

  return {
    multiplier: clamp(multiplier, GAME_CONFIG.battleMultiplierMin, GAME_CONFIG.battleMultiplierMax),
    notes,
  };
}

function baseValue(robot, opponent, slot, reliabilityModifiers, context) {
  const global = globalAbilityMultiplier(robot, opponent, context);
  const ability = baseAbilityMultiplier(robot, slot);
  const multiplier = clamp(
    global.multiplier * ability.multiplier,
    GAME_CONFIG.battleMultiplierMin,
    GAME_CONFIG.battleMultiplierMax,
  );
  return {
    value: robot.stats[slot.groupKey][slot.statName] * reliabilityModifiers[slot.groupKey] * multiplier,
    notes: [...global.notes, ...ability.notes],
  };
}

function weaponValue(robot, opponent, slot, reliabilityModifiers, selectedNames, context) {
  const base = robot.weaponStats[slot.axis] * reliabilityModifiers.weapon;
  const synergy = weaponMultiplier(robot, opponent, slot.axis, selectedNames);
  const global = globalAbilityMultiplier(robot, opponent, context);
  const multiplier = clamp(
    synergy.multiplier * global.multiplier,
    GAME_CONFIG.battleMultiplierMin,
    GAME_CONFIG.battleMultiplierMax,
  );
  return { value: base * multiplier, notes: [...synergy.notes, ...global.notes] };
}

function compareSlot(robotA, robotB, slot, modA, modB, selectedNames, context) {
  if (slot.kind === 'base') {
    const a = baseValue(robotA, robotB, slot, modA, context);
    const b = baseValue(robotB, robotA, slot, modB, context);
    return {
      slot,
      aLabel: slot.statName,
      bLabel: slot.statName,
      aValue: a.value,
      bValue: b.value,
      winner: a.value === b.value ? (Math.random() < 0.5 ? 'a' : 'b') : (a.value > b.value ? 'a' : 'b'),
      notesA: a.notes,
      notesB: b.notes,
    };
  }

  const aWeapon = WEAPON_CATEGORIES[robotA.weaponKey];
  const bWeapon = WEAPON_CATEGORIES[robotB.weaponKey];
  const a = weaponValue(robotA, robotB, slot, modA, selectedNames, context);
  const b = weaponValue(robotB, robotA, slot, modB, selectedNames, context);
  return {
    slot,
    aLabel: aWeapon.stats[slot.axis],
    bLabel: bWeapon.stats[slot.axis],
    aValue: a.value,
    bValue: b.value,
    winner: a.value === b.value ? (Math.random() < 0.5 ? 'a' : 'b') : (a.value > b.value ? 'a' : 'b'),
    notesA: a.notes,
    notesB: b.notes,
  };
}

export function favoredWinChance(wins, losses, table = GAME_CONFIG.battleFavoredWinChanceByMargin) {
  const margin = Math.abs(wins - losses);
  return Number(table?.[margin] ?? 0.5);
}

export function advantageText(aWins, bWins) {
  const margin = aWins - bWins;
  if (margin >= 7) return '圧倒的にこちらが優勢だ。';
  if (margin >= 5) return 'かなりこちらが優勢だ。';
  if (margin >= 3) return 'こちらが優勢だ。';
  if (margin >= 1) return 'わずかにこちらが優勢だ。';
  if (margin <= -7) return '非常に厳しい状況だ……';
  if (margin <= -5) return 'かなり厳しいようだ……';
  if (margin <= -3) return 'こちらが押されている……';
  return 'わずかに相手が優勢なようだ……';
}

function underdogBonus(robot) {
  if (hasAbility(robot, 'unyielding')) return 0.10;
  if (hasAbility(robot, 'adversity')) return 0.05;
  return 0;
}

export function simulateBattle(robotA, robotB, options = {}) {
  const context = { official: Boolean(options.official) };
  const slots = buildComparisonSlots(robotA, robotB);
  const selectedNames = selectedBaseStatNames(slots);
  const modifiersA = createReliabilityModifiers(robotA, context);
  const modifiersB = createReliabilityModifiers(robotB, context);
  const comparisons = slots.map((slot) => compareSlot(robotA, robotB, slot, modifiersA, modifiersB, selectedNames, context));
  const aWins = comparisons.filter((item) => item.winner === 'a').length;
  const bWins = comparisons.length - aWins;
  const baseFavored = favoredWinChance(aWins, bWins, options.winChanceTable);

  let chanceA;
  if (aWins > bWins) {
    chanceA = baseFavored - underdogBonus(robotB);
  } else {
    chanceA = (1 - baseFavored) + underdogBonus(robotA);
  }
  chanceA = clamp(chanceA, 0.02, 0.98);

  const winner = Math.random() < chanceA ? 'a' : 'b';
  const comparisonWinner = aWins > bWins ? 'a' : 'b';
  const reversal = winner !== comparisonWinner;
  const favoredChance = comparisonWinner === 'a' ? chanceA : 1 - chanceA;

  return {
    slots,
    comparisons,
    aWins,
    bWins,
    winner,
    comparisonWinner,
    reversal,
    favoredChance,
    chanceA,
    summary: advantageText(aWins, bWins),
    reversalText: reversal
      ? (winner === 'a' ? 'なんと、ここから逆転した！' : 'しかし、相手が逆転した！')
      : '',
  };
}

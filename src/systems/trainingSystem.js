import { GAME_CONFIG } from '../config.js?v=3.9';
import { STAT_GROUPS } from '../data/statDefinitions.js?v=3.9';
import { TRAINING_TYPES } from '../data/trainingDefinitions.js?v=3.9';
import { WEAPON_CATEGORIES } from '../data/weaponDefinitions.js?v=3.9';
import { clamp, randomFloat, weightedPick } from '../utils/random.js?v=3.9';

export function rollTrainingLevel(highLevelBias = 0) {
  return weightedPick([
    { value: 1, weight: 34 * (1 - highLevelBias) },
    { value: 2, weight: 29 * (1 - highLevelBias * 0.7) },
    { value: 3, weight: 22 },
    { value: 4, weight: 11 * (1 + highLevelBias * 2.2) },
    { value: 5, weight: 4 * (1 + highLevelBias * 3.4) },
  ]);
}

export function generateTrainingChoices(count = GAME_CONFIG.trainingChoices, modifiers = [], highLevelBias = 0) {
  const choices = [];
  const used = new Set();
  const active = modifiers.filter((modifier) => modifier.remainingTurns > 0);
  while (choices.length < count) {
    const candidates = TRAINING_TYPES
      .filter((type) => !used.has(type.groupKey))
      .map((type) => {
        const matching = active.filter((modifier) => modifier.groupKey === type.groupKey);
        const weight = matching.reduce((value, modifier) => value * (modifier.weightMultiplier ?? 1), 1);
        return { value: type, weight };
      });
    const type = weightedPick(candidates);
    used.add(type.groupKey);
    const levelBonus = active
      .filter((modifier) => modifier.groupKey === type.groupKey)
      .reduce((sum, modifier) => sum + (modifier.levelBonus ?? 0), 0);
    choices.push({ ...type, level: clamp(rollTrainingLevel(highLevelBias) + levelBonus, GAME_CONFIG.trainingLevelMin, GAME_CONFIG.trainingLevelMax) });
  }
  return choices;
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

function growWeapon(robot, baseGrowth, options = {}) {
  const deltas = [];
  for (const [axis, value] of Object.entries(robot.weaponStats)) {
    const multiplier = robot.weaponGrowthMultipliers[axis];
    const noise = seriesNoise(robot);
    const delta = baseGrowth * multiplier * noise * seriesGrowthMultiplier(robot, null, { ...options, weapon: true });
    robot.weaponStats[axis] = clamp(value + delta, 0, 999);
    deltas.push({ axis, delta });
  }
  robot.weaponCategoryStats ??= {};
  robot.weaponCategoryStats[robot.weaponKey] = { ...robot.weaponStats };
  return deltas;
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

export function applyTrainingTurn(roster, selectedTraining) {
  const log = [];
  const teamGrowth = GAME_CONFIG.teamBaseGrowthByLevel[selectedTraining.level];

  for (const robot of roster) {
    applyIndividualTraining(robot);
    growGroup(robot, selectedTraining.groupKey, teamGrowth, selectedTraining.focusStats ?? [], selectedTraining.focusBonus ?? 0, { team: true });
  }

  const focusText = selectedTraining.focusStats?.length ? `（重点：${selectedTraining.focusStats.join('・')}）` : '';
  log.push(`${selectedTraining.label} Lv${selectedTraining.level}を実施。${focusText}`);
  return log;
}

import { GROUP_KEYS } from '../data/statDefinitions.js?v=2.8';
import { WEAPON_AXES } from '../data/weaponDefinitions.js?v=2.8';

function appearances(robot) {
  return (robot.record?.wins ?? 0) + (robot.record?.losses ?? 0);
}

function winRate(robot) {
  const games = appearances(robot);
  return games ? (robot.record?.wins ?? 0) / games : 0;
}

function highestIndividualStat(robot) {
  let best = { value: -Infinity, label: '---' };
  for (const groupKey of GROUP_KEYS) {
    for (const [label, value] of Object.entries(robot.stats?.[groupKey] ?? {})) {
      if (value > best.value) best = { value, label };
    }
  }
  for (const axis of WEAPON_AXES) {
    const value = robot.weaponStats?.[axis];
    if (Number.isFinite(value) && value > best.value) best = { value, label: `兵装:${axis}` };
  }
  return best;
}


export function createRobotSnapshot(robot) {
  if (!robot) return null;
  return JSON.parse(JSON.stringify({
    id: robot.id,
    nickname: robot.nickname ?? '',
    manufacturerId: robot.manufacturerId,
    manufacturerName: robot.manufacturerName,
    seriesId: robot.seriesId ?? null,
    seriesArchetypeId: robot.seriesArchetypeId ?? null,
    seriesTrendLabel: robot.seriesTrendLabel ?? '',
    seriesTrendSummary: robot.seriesTrendSummary ?? '',
    productionYear: robot.productionYear ?? null,
    annualTrend: robot.annualTrend ?? null,
    seriesNumber: robot.seriesNumber,
    seriesName: robot.seriesName,
    seriesNameKana: robot.seriesNameKana,
    seriesNameLatin: robot.seriesNameLatin,
    serial: robot.serial,
    cohortYear: robot.cohortYear,
    weaponKey: robot.weaponKey,
    weaponName: robot.weaponName,
    reliability: robot.reliability,
    stats: robot.stats,
    growthMultipliers: robot.growthMultipliers,
    resistances: robot.resistances,
    weaponStats: robot.weaponStats,
    weaponGrowthMultipliers: robot.weaponGrowthMultipliers,
    weaponCategoryStats: robot.weaponCategoryStats,
    weaponCategoryGrowthMultipliers: robot.weaponCategoryGrowthMultipliers,
    specialAbilities: robot.specialAbilities ?? [],
    customHistory: robot.customHistory ?? [],
    awakenings: robot.awakenings ?? [],
    generationTrait: robot.generationTrait ?? 'standard',
    record: robot.record ?? { wins: 0, losses: 0 },
    individualTrainingTarget: robot.individualTrainingTarget ?? null,
  }));
}

export function historicalRobots(state) {
  return [...(state.roster ?? []), ...(state.retired ?? [])];
}

export function careerRecordSummary(state) {
  const robots = historicalRobots(state);
  const byWins = [...robots].sort((a, b) => (b.record?.wins ?? 0) - (a.record?.wins ?? 0));
  const eligibleWinRate = robots.filter((robot) => appearances(robot) >= 5)
    .sort((a, b) => winRate(b) - winRate(a) || appearances(b) - appearances(a));
  const byAbilities = [...robots].sort((a, b) => (b.specialAbilities?.length ?? 0) - (a.specialAbilities?.length ?? 0));
  const statCandidates = robots.map((robot) => ({ robot, best: highestIndividualStat(robot) }))
    .sort((a, b) => b.best.value - a.best.value);

  return {
    mostWins: byWins[0] ?? null,
    bestWinRate: eligibleWinRate[0] ?? null,
    mostAbilities: byAbilities[0] ?? null,
    highestStatRobot: statCandidates[0]?.robot ?? null,
    highestStat: statCandidates[0]?.best ?? null,
  };
}

export function manufacturerRecords(state) {
  const map = new Map();
  for (const robot of historicalRobots(state)) {
    const key = robot.manufacturerId ?? robot.manufacturerName;
    const row = map.get(key) ?? {
      manufacturerId: robot.manufacturerId,
      manufacturerName: robot.manufacturerName,
      robots: 0,
      wins: 0,
      losses: 0,
      championships: 0,
    };
    row.robots += 1;
    row.wins += robot.record?.wins ?? 0;
    row.losses += robot.record?.losses ?? 0;
    map.set(key, row);
  }
  return [...map.values()].sort((a, b) => b.wins - a.wins || b.robots - a.robots);
}

export function isHallOfFame(state, robotId) {
  return (state.hallOfFame ?? []).some((item) => item.robotId === robotId);
}

export function toggleHallOfFame(state, robotId) {
  state.hallOfFame ??= [];
  const index = state.hallOfFame.findIndex((item) => item.robotId === robotId);
  if (index >= 0) {
    state.hallOfFame.splice(index, 1);
    return false;
  }
  const robot = (state.retired ?? []).find((item) => item.id === robotId);
  if (!robot) return false;
  state.hallOfFame.unshift({ robotId, inductedYear: state.year, memo: '', snapshot: createRobotSnapshot(robot) });
  return true;
}

export function updateHallMemo(state, robotId, memo) {
  const item = (state.hallOfFame ?? []).find((entry) => entry.robotId === robotId);
  if (!item) return false;
  item.memo = String(memo ?? '').slice(0, 160);
  return true;
}

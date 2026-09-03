import { GROUP_KEYS } from '../data/statDefinitions.js?v=3.2';
import { WEAPON_AXES } from '../data/weaponDefinitions.js?v=3.2';
import { MANUFACTURERS } from '../data/manufacturers.js?v=3.2';
import { SERIES_DEFINITIONS, resolveSeriesProfile } from '../data/seriesDefinitions.js?v=3.2';

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
    seriesConcept: robot.seriesConcept ?? '',
    seriesNamingConcept: robot.seriesNamingConcept ?? '',
    seriesDevelopmentBackground: robot.seriesDevelopmentBackground ?? '',
    seriesEngineeringNotes: robot.seriesEngineeringNotes ?? '',
    seriesTrainingNotes: robot.seriesTrainingNotes ?? '',
    seriesLegacyRefit: Boolean(robot.seriesLegacyRefit),
    seriesRefitGeneration: Number(robot.seriesRefitGeneration ?? (robot.seriesLegacyRefit ? 1 : 0)),
    seriesRefitVersion: robot.seriesRefitVersion ?? (robot.seriesLegacyRefit ? '3.1' : ''),
    seriesMarketPosition: robot.seriesMarketPosition ?? '',
    seriesProductionTierId: robot.seriesProductionTierId ?? 'standard',
    seriesProductionTierLabel: robot.seriesProductionTierLabel ?? '',
    seriesIndividualityTraitId: robot.seriesIndividualityTraitId ?? 'normal',
    seriesIndividualityLabel: robot.seriesIndividualityLabel ?? '',
    seriesIndividualitySummary: robot.seriesIndividualitySummary ?? '',
    seriesLineageLabel: robot.seriesLineageLabel ?? '',
    seriesLineageRootId: robot.seriesLineageRootId ?? null,
    seriesPredecessorId: robot.seriesPredecessorId ?? null,
    seriesPredecessorNameKana: robot.seriesPredecessorNameKana ?? '',
    seriesPredecessorNameLatin: robot.seriesPredecessorNameLatin ?? '',
    seriesPreferredWeapons: robot.seriesPreferredWeapons ?? [],
    seriesAvoidedWeapons: robot.seriesAvoidedWeapons ?? [],
    seriesWeaponDoctrine: robot.seriesWeaponDoctrine ?? '',
    seriesIntrinsicTraitId: robot.seriesIntrinsicTraitId ?? null,
    seriesIntrinsicTrait: robot.seriesIntrinsicTrait ?? null,
    seriesGrowthCurveId: robot.seriesGrowthCurveId ?? null,
    seriesGrowthCurve: robot.seriesGrowthCurve ?? null,
    seriesCustomAptitudeId: robot.seriesCustomAptitudeId ?? null,
    seriesCustomAptitude: robot.seriesCustomAptitude ?? null,
    seriesAbilityTendencyTags: robot.seriesAbilityTendencyTags ?? [],
    seriesAbilityTendencyMultiplier: robot.seriesAbilityTendencyMultiplier ?? 1.18,
    seriesJackpot: robot.seriesJackpot ?? null,
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

function simpleOverall(robot) {
  const baseValues = [];
  for (const groupKey of GROUP_KEYS) baseValues.push(...Object.values(robot.stats?.[groupKey] ?? {}));
  const weaponValues = Object.values(robot.weaponStats ?? {});
  const base = baseValues.reduce((a,b)=>a+Number(b||0),0)/Math.max(1,baseValues.length);
  const weapon = weaponValues.reduce((a,b)=>a+Number(b||0),0)/Math.max(1,weaponValues.length);
  return base * .68 + weapon * .24 + Number(robot.reliability ?? 0) * .08;
}

export function seriesRecords(state) {
  const history = historicalRobots(state);
  const hallIds = new Set((state.hallOfFame ?? []).map((entry) => entry.robotId));
  const retiredIds = new Set((state.retired ?? []).map((robot) => robot.id));
  const rows = new Map();
  for (const def of SERIES_DEFINITIONS) {
    const profile = resolveSeriesProfile(def);
    rows.set(def.id, {
      seriesId:def.id, manufacturerId:def.manufacturerId, seriesNumber:def.seriesNumber,
      nameKana:def.nameKana, nameLatin:def.nameLatin, profile,
      encounters:Number(state.seriesEncounters?.[def.id] ?? 0), joined:0, retired:0, hall:0, wins:0, losses:0,
      totalOverall:0, bestOverall:0, bestRobotName:'',
    });
  }
  for (const robot of history) {
    if (!robot.seriesId || !rows.has(robot.seriesId)) continue;
    const row=rows.get(robot.seriesId); row.joined+=1; row.encounters=Math.max(row.encounters,1);
    if (retiredIds.has(robot.id)) row.retired+=1;
    if (hallIds.has(robot.id)) row.hall+=1;
    row.wins+=Number(robot.record?.wins??0); row.losses+=Number(robot.record?.losses??0);
    const score=simpleOverall(robot); row.totalOverall+=score;
    if (score>row.bestOverall) { row.bestOverall=score; row.bestRobotName=robot.nickname || `${robot.seriesNameKana ?? robot.seriesName} ${robot.serial}`; }
  }
  return [...rows.values()].map((row)=>({
    ...row, averageOverall:row.joined?row.totalOverall/row.joined:0,
    discovery: row.hall?'hall':row.retired?'retired':row.joined?'joined':row.encounters?'seen':'unseen',
  }));
}

export function seriesDiscoverySummary(state, rows = null) {
  const data = rows ?? seriesRecords(state); const count=(status)=>data.filter((r)=>r.discovery===status).length;
  return { total:data.length, discovered:data.filter((r)=>r.discovery!=='unseen').length, seen:count('seen'), joined:count('joined'), retired:count('retired'), hall:count('hall') };
}

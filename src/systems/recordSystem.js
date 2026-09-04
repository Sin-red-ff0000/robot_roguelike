import { GROUP_KEYS } from '../data/statDefinitions.js?v=4.8';
import { WEAPON_AXES, WEAPON_CATEGORIES } from '../data/weaponDefinitions.js?v=4.8';
import { MANUFACTURERS } from '../data/manufacturers.js?v=4.8';
import { SERIES_DEFINITIONS, resolveSeriesProfile } from '../data/seriesDefinitions.js?v=4.8';

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
    if (Number.isFinite(value) && value > best.value) best = { value, label: WEAPON_CATEGORIES[robot.weaponKey]?.stats?.[axis] ?? `兵装能力` };
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
    favoriteGroup: robot.favoriteGroup ?? GROUP_KEYS[0],
    weaponUsage: robot.weaponUsage ?? {},
    weaponHistory: robot.weaponHistory ?? [],
    record: robot.record ?? { wins: 0, losses: 0 },
    individualTrainingTarget: robot.individualTrainingTarget ?? null,
  }));
}


export function robotCareerMetrics(robot) {
  const games = appearances(robot);
  const peak = highestIndividualStat(robot);
  return {
    games,
    wins: Number(robot.record?.wins ?? 0),
    losses: Number(robot.record?.losses ?? 0),
    winRate: winRate(robot),
    abilities: Number(robot.specialAbilities?.length ?? 0),
    customizations: Number(robot.customHistory?.length ?? 0),
    awakenings: Number(robot.awakenings?.length ?? 0),
    reliability: Number(robot.reliability ?? 0),
    peakValue: Number.isFinite(Number(peak.value)) ? Number(peak.value) : 0,
    peakLabel: peak.label ?? '---',
    overall: simpleOverall(robot),
  };
}

export function robotCareerHighlights(robot) {
  const m = robotCareerMetrics(robot);
  const tags = [];
  if (m.wins >= 30) tags.push('歴戦のエース'); else if (m.wins >= 18) tags.push('主力級');
  if (m.awakenings >= 2) tags.push('複数覚醒'); else if (m.awakenings >= 1) tags.push('覚醒経験');
  if (m.customizations >= 8) tags.push('重改修'); else if (m.customizations >= 4) tags.push('改修多数');
  if (m.abilities >= 8) tags.push('多能力'); else if (m.abilities >= 5) tags.push('能力豊富');
  if (m.games >= 12 && m.winRate >= .8) tags.push('高勝率');
  if (m.reliability >= 92) tags.push('高信頼');
  if (m.peakValue >= 150) tags.push(`${m.peakLabel}特化`);
  if (m.games >= 20) tags.push('長期実戦型');
  if (!tags.length) tags.push('標準運用');
  return tags.slice(0, 4);
}

export function extendedCareerRecordSummary(state) {
  const robots = historicalRobots(state);
  const topBy = (score, eligible=()=>true) => robots.filter(eligible).sort((a,b)=>score(b)-score(a))[0] ?? null;
  return {
    mostAppearances: topBy((r)=>appearances(r)),
    mostCustomizations: topBy((r)=>r.customHistory?.length ?? 0),
    mostAwakenings: topBy((r)=>r.awakenings?.length ?? 0),
    highestReliability: topBy((r)=>Number(r.reliability ?? 0)),
    highestOverall: topBy((r)=>simpleOverall(r)),
  };
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


function averageBaseStat(robot) {
  const values = [];
  for (const groupKey of GROUP_KEYS) values.push(...Object.values(robot.stats?.[groupKey] ?? {}).map(Number));
  return values.length ? values.reduce((a,b)=>a+(Number.isFinite(b)?b:0),0)/values.length : 0;
}

function averageWeaponStat(robot) {
  const values = Object.values(robot.weaponStats ?? {}).map(Number).filter(Number.isFinite);
  return values.length ? values.reduce((a,b)=>a+b,0)/values.length : 0;
}

function best15Score(robot, mode = 'overall') {
  const games = appearances(robot);
  const wins = Number(robot.record?.wins ?? 0);
  const losses = Number(robot.record?.losses ?? 0);
  const abilities = Number(robot.specialAbilities?.length ?? 0);
  const peak = Number(highestIndividualStat(robot).value ?? 0);
  const overall = simpleOverall(robot);
  if (mode === 'wins') return wins * 1000 + winRate(robot) * 100 + overall;
  if (mode === 'winRate') return (games >= 5 ? winRate(robot) : 0) * 10000 + Math.min(50, games) * 10 + overall;
  if (mode === 'abilities') return abilities * 1000 + overall;
  if (mode === 'peak') return peak * 100 + overall;
  if (mode === 'reliability') return Number(robot.reliability ?? 0) * 100 + overall;
  // 総合は能力だけでなく、実戦実績と特殊能力も軽く評価する。
  return overall * 10 + wins * 8 + winRate(robot) * Math.min(30, games) * 3 + abilities * 6 - losses * 0.5;
}

export const BEST15_MODES = Object.freeze([
  { id:'overall', label:'総合評価' },
  { id:'wins', label:'最多勝' },
  { id:'winRate', label:'勝率・実績' },
  { id:'abilities', label:'特殊能力' },
  { id:'peak', label:'最高個別値' },
  { id:'reliability', label:'信頼性' },
]);

export function historicalBest15(state, mode = 'overall') {
  const retired = [...(state.retired ?? [])];
  if (mode === 'manual') {
    const wanted = new Set((state.best15?.manualIds ?? []).slice(0, 15));
    const order = new Map((state.best15?.manualIds ?? []).map((id,index)=>[id,index]));
    return retired.filter((robot)=>wanted.has(robot.id)).sort((a,b)=>(order.get(a.id)??999)-(order.get(b.id)??999)).slice(0,15)
      .map((robot,index)=>({ robot, rank:index+1, score:null, mode:'manual' }));
  }
  return retired
    .map((robot)=>({ robot, score:best15Score(robot, mode) }))
    .filter(({score})=>Number.isFinite(score))
    .sort((a,b)=>b.score-a.score || Number(b.robot.record?.wins??0)-Number(a.robot.record?.wins??0))
    .slice(0,15)
    .map((row,index)=>({ ...row, rank:index+1, mode }));
}

export function isManualBest15(state, robotId) {
  return (state.best15?.manualIds ?? []).includes(robotId);
}

export function toggleManualBest15(state, robotId) {
  state.best15 ??= { manualIds: [], selectedMode: 'overall' };
  state.best15.manualIds ??= [];
  const index = state.best15.manualIds.indexOf(robotId);
  if (index >= 0) {
    state.best15.manualIds.splice(index, 1);
    return { added:false, reason:'removed' };
  }
  if (!(state.retired ?? []).some((robot)=>robot.id===robotId)) return { added:false, reason:'not-retired' };
  if (state.best15.manualIds.length >= 15) return { added:false, reason:'full' };
  state.best15.manualIds.push(robotId);
  return { added:true, reason:'added' };
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

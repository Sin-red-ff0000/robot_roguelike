import { GAME_CONFIG } from '../config.js?v=4.8';
import { MANUFACTURERS } from '../data/manufacturers.js?v=4.8';
import { getSeriesDefinition, resolveSeriesProfile, seriesByNumber } from '../data/seriesDefinitions.js?v=4.8';
import { randomFloat, randomInt } from '../utils/random.js?v=4.8';
import { WEAPON_AXES, WEAPON_CATEGORIES, WEAPON_KEYS } from '../data/weaponDefinitions.js?v=4.8';
import { generateInitialPartInventory, generateMemorialPart } from './partSystem.js?v=4.8';
import { generateCohort } from './robotGenerator.js?v=4.8';
import { generateTrainingChoices, generateTrainingChoicesWithCarryover } from './trainingSystem.js?v=4.8';
import { defaultFacilities, trainingChoiceCount, trainingLevelBias, trainingChoiceContext, updateFacilities } from './facilitySystem.js?v=4.8';
import { ensureTournamentYear, markMissedTournaments } from './tournamentSystem.js?v=4.8';
import { defaultSettings, normalizeSettings } from './settingsSystem.js?v=4.8';
import { createRobotSnapshot, robotCareerHighlights } from './recordSystem.js?v=4.8';
import { getAnnualTrend } from './annualTrendSystem.js?v=4.8';

const MANUFACTURER_MAP = new Map(MANUFACTURERS.map((item) => [item.id, item]));

function normalizeRobot(robot) {
  robot.nickname = String(robot.nickname ?? '').trim().slice(0, 24);
  const manufacturer = MANUFACTURER_MAP.get(robot.manufacturerId);
  const fallbackNumber = Number(robot.seriesNumber ?? String(robot.seriesName ?? '').match(/(\d+)/)?.[1] ?? 1);
  const formalSeries = getSeriesDefinition(robot.seriesId) ?? seriesByNumber(robot.manufacturerId, fallbackNumber);
  const formalProfile = resolveSeriesProfile(formalSeries);
  robot.seriesId = formalSeries?.id ?? robot.seriesId ?? null;
  robot.seriesNumber = Number(formalSeries?.seriesNumber ?? fallbackNumber);
  robot.seriesNameKana = formalSeries?.nameKana ?? robot.seriesNameKana ?? robot.seriesName ?? `シリーズ-${String(fallbackNumber).padStart(2, '0')}`;
  robot.seriesNameLatin = formalSeries?.nameLatin ?? robot.seriesNameLatin ?? `SERIES-${String(fallbackNumber).padStart(2, '0')}`;
  robot.seriesName = robot.seriesNameKana;
  robot.seriesArchetypeId ??= formalProfile?.archetypeId ?? 'balanced';
  robot.seriesTrendLabel ??= formalProfile?.label ?? '標準汎用';
  robot.seriesTrendSummary ??= formalProfile?.summary ?? '';
  robot.seriesConcept = formalProfile?.concept ?? robot.seriesConcept ?? robot.seriesTrendSummary ?? '';
  robot.seriesNamingConcept = formalProfile?.namingConcept ?? robot.seriesNamingConcept ?? '';
  robot.seriesDevelopmentBackground = formalProfile?.developmentBackground ?? robot.seriesDevelopmentBackground ?? '';
  robot.seriesEngineeringNotes = formalProfile?.engineeringNotes ?? robot.seriesEngineeringNotes ?? '';
  robot.seriesTrainingNotes = formalProfile?.trainingNotes ?? robot.seriesTrainingNotes ?? '';
  robot.seriesLegacyRefit = Boolean(formalProfile?.legacyRefit ?? robot.seriesLegacyRefit);
  robot.seriesRefitGeneration = Number(formalProfile?.refitGeneration ?? (formalProfile?.legacyRefit ? 1 : robot.seriesRefitGeneration ?? 0));
  robot.seriesRefitVersion = formalProfile?.refitVersion ?? (formalProfile?.legacyRefit ? '3.1' : robot.seriesRefitVersion ?? '');
  robot.seriesMarketPosition ??= formalProfile?.marketPosition ?? '';
  robot.seriesProductionTierId ??= formalProfile?.productionTierId ?? 'standard';
  robot.seriesProductionTierLabel ??= formalProfile?.productionTierLabel ?? '標準生産';
  robot.seriesIndividualityTraitId ??= formalProfile?.individualityTraitId ?? 'normal';
  robot.seriesIndividualityLabel ??= formalProfile?.individualityLabel ?? '標準個体差';
  robot.seriesIndividualitySummary ??= formalProfile?.individualitySummary ?? '';
  robot.seriesLineageLabel ??= formalProfile?.lineageLabel ?? '';
  robot.seriesLineageRootId ??= formalProfile?.lineageRootId ?? null;
  robot.seriesPredecessorId ??= formalProfile?.predecessorId ?? null;
  robot.seriesPredecessorNameKana ??= formalProfile?.predecessorNameKana ?? '';
  robot.seriesPredecessorNameLatin ??= formalProfile?.predecessorNameLatin ?? '';
  robot.seriesPreferredWeapons ??= [...(formalProfile?.preferredWeapons ?? [])];
  robot.seriesAvoidedWeapons ??= [...(formalProfile?.avoidedWeapons ?? [])];
  robot.seriesWeaponDoctrine ??= formalProfile?.weaponDoctrine ?? '';
  robot.seriesIntrinsicTraitId ??= formalProfile?.intrinsicTraitId ?? 'maturePlatform';
  robot.seriesIntrinsicTrait ??= { ...(formalProfile?.intrinsicTrait ?? {}) };
  robot.seriesGrowthCurveId ??= formalProfile?.growthCurveId ?? 'steady';
  robot.seriesGrowthCurve ??= { ...(formalProfile?.growthCurve ?? {}) };
  robot.seriesCustomAptitudeId ??= formalProfile?.customAptitudeId ?? 'balanced';
  robot.seriesCustomAptitude ??= JSON.parse(JSON.stringify(formalProfile?.customAptitude ?? {}));
  robot.seriesAbilityTendencyTags ??= [...(formalProfile?.abilityTendencyTags ?? [])];
  robot.seriesAbilityTendencyMultiplier ??= Number(formalProfile?.abilityTendencyMultiplier ?? 1.18);
  if (formalProfile?.refitVersion || formalProfile?.legacyRefit) {
    robot.seriesArchetypeId = formalProfile.archetypeId ?? robot.seriesArchetypeId;
    robot.seriesTrendLabel = formalProfile.label ?? robot.seriesTrendLabel;
    robot.seriesTrendSummary = formalProfile.summary ?? robot.seriesTrendSummary;
    robot.seriesMarketPosition = formalProfile.marketPosition ?? robot.seriesMarketPosition;
    robot.seriesIndividualityTraitId = formalProfile.individualityTraitId ?? robot.seriesIndividualityTraitId;
    robot.seriesIndividualityLabel = formalProfile.individualityLabel ?? robot.seriesIndividualityLabel;
    robot.seriesIndividualitySummary = formalProfile.individualitySummary ?? robot.seriesIndividualitySummary;
    robot.seriesPreferredWeapons = [...(formalProfile.preferredWeapons ?? robot.seriesPreferredWeapons ?? [])];
    robot.seriesAvoidedWeapons = [...(formalProfile.avoidedWeapons ?? robot.seriesAvoidedWeapons ?? [])];
    robot.seriesWeaponDoctrine = formalProfile.weaponDoctrine ?? robot.seriesWeaponDoctrine;
    robot.seriesIntrinsicTraitId = formalProfile.intrinsicTraitId ?? robot.seriesIntrinsicTraitId;
    robot.seriesIntrinsicTrait = { ...(formalProfile.intrinsicTrait ?? robot.seriesIntrinsicTrait ?? {}) };
    robot.seriesGrowthCurveId = formalProfile.growthCurveId ?? robot.seriesGrowthCurveId;
    robot.seriesGrowthCurve = { ...(formalProfile.growthCurve ?? robot.seriesGrowthCurve ?? {}) };
    robot.seriesCustomAptitudeId = formalProfile.customAptitudeId ?? robot.seriesCustomAptitudeId;
    robot.seriesCustomAptitude = JSON.parse(JSON.stringify(formalProfile.customAptitude ?? robot.seriesCustomAptitude ?? {}));
    robot.seriesAbilityTendencyTags = [...(formalProfile.abilityTendencyTags ?? robot.seriesAbilityTendencyTags ?? [])];
    robot.seriesAbilityTendencyMultiplier = Number(formalProfile.abilityTendencyMultiplier ?? robot.seriesAbilityTendencyMultiplier ?? 1.18);
  }
  robot.seriesJackpot ??= null;
  robot.productionYear = Math.max(1, Number(robot.productionYear ?? robot.yearJoined ?? 1));
  robot.yearJoined = Math.max(1, Number(robot.yearJoined ?? robot.productionYear ?? 1));
  if (!robot.annualTrend?.seriesYearEvent) robot.annualTrend = getAnnualTrend(robot.productionYear, robot.manufacturerId, robot.seriesId);
  robot.specialAbilities ??= [];
  robot.customHistory ??= [];
  robot.record ??= { wins: 0, losses: 0 };
  robot.awakenings ??= [];
  robot.generationTrait ??= 'standard';
  robot.weaponCategoryStats ??= { [robot.weaponKey]: { ...robot.weaponStats } };
  robot.weaponCategoryGrowthMultipliers ??= { [robot.weaponKey]: { ...robot.weaponGrowthMultipliers } };
  for (const weaponKey of WEAPON_KEYS) {
    robot.weaponCategoryStats[weaponKey] ??= Object.fromEntries(
      WEAPON_AXES.map((axis) => [axis, Number(randomFloat(42, 72).toFixed(1))]),
    );
    robot.weaponCategoryGrowthMultipliers[weaponKey] ??= Object.fromEntries(
      WEAPON_AXES.map((axis) => [axis, Number(randomFloat(0.65, 1.45).toFixed(2))]),
    );
  }
  robot.weaponName = WEAPON_CATEGORIES[robot.weaponKey]?.label ?? robot.weaponName;
  robot.weaponStats = { ...robot.weaponCategoryStats[robot.weaponKey] };
  robot.weaponGrowthMultipliers = { ...robot.weaponCategoryGrowthMultipliers[robot.weaponKey] };
  return robot;
}

export function migrateState(state) {
  if (!state) return null;
  const sourceVersion = state.version ?? null;
  state.roster = (state.roster ?? []).map(normalizeRobot);
  state.retired = (state.retired ?? []).map(normalizeRobot);
  state.partInventory ??= generateInitialPartInventory(GAME_CONFIG.initialPartInventory);
  state.logisticsProcurement ??= { year:Number(state.year ?? 1), used:0, pending:null, history:[] };
  state.logisticsProcurement.history ??= [];
  if (Number(state.logisticsProcurement.year) !== Number(state.year ?? 1)) { state.logisticsProcurement.year = Number(state.year ?? 1); state.logisticsProcurement.used = 0; state.logisticsProcurement.pending = null; }
  state.teamRecord ??= { wins: 0, losses: 0, streak: 0, recentResults: [] };
  state.teamRecord.streak ??= 0;
  state.teamRecord.recentResults ??= [];
  state.rivalHistory ??= {};
  state.trainingModifiers ??= [];
  state.eventHistory ??= [];
  state.seriesEncounters ??= {};
  for (const robot of [...state.roster, ...state.retired]) if (robot.seriesId) state.seriesEncounters[robot.seriesId] = Math.max(1, Number(state.seriesEncounters[robot.seriesId] ?? 0));
  state.settings = normalizeSettings(state.settings ?? { growthMode: state.growthVisibility === 'visible' ? 'visible' : 'facility' });
  state.hallOfFame ??= [];
  state.best15 ??= { manualIds: [], selectedMode: 'overall' };
  state.best15.manualIds = [...new Set((state.best15.manualIds ?? []).filter((id) => state.retired.some((robot) => robot.id === id)))].slice(0, 15);
  state.best15.selectedMode ??= 'overall';
  state.exhibitionHistory ??= [];
  state.lastExhibition ??= null;
  state.hallOfFame = state.hallOfFame.map((entry) => {
    if (entry?.snapshot) return { ...entry, snapshot: normalizeRobot(entry.snapshot) };
    const retiredRobot = state.retired.find((robot) => robot.id === entry?.robotId);
    return retiredRobot ? { ...entry, snapshot: createRobotSnapshot(retiredRobot) } : entry;
  });
  state.career ??= { tournamentEntries: 0, tournamentWins: 0, championships: 0, totalRetired: state.retired.length };
  state.career.tournamentEntries ??= 0;
  state.career.tournamentWins ??= 0;
  state.career.championships ??= 0;
  state.career.totalRetired ??= state.retired.length;
  state.facilities ??= defaultFacilities();
  state.trainingControl ??= { year: Number(state.year ?? 1), turn: Number(state.turn ?? 1), rerollUsed: false, reserved: null };
  state.trainingControl.year = Number(state.trainingControl.year ?? state.year ?? 1);
  state.trainingControl.turn = Number(state.trainingControl.turn ?? state.turn ?? 1);
  state.trainingControl.rerollUsed = Boolean(state.trainingControl.rerollUsed);
  state.trainingControl.reserved ??= null;
  state.weaponsLabControl ??= { targetWeaponKey: null };
  if (!WEAPON_KEYS.includes(state.weaponsLabControl.targetWeaponKey)) state.weaponsLabControl.targetWeaponKey = null;
  state.tournamentHistory ??= [];
  state.retirementHistory ??= [];
  state.retirementHistory = state.retirementHistory.map((entry) => {
    const fallbackNumber = Number(entry?.seriesNumber ?? String(entry?.seriesName ?? '').match(/(\d+)/)?.[1] ?? 1);
    const def = getSeriesDefinition(entry?.seriesId) ?? seriesByNumber(entry?.manufacturerId, fallbackNumber);
    const retiredRobot = state.retired.find((robot) => robot.id === entry?.robotId);
    const base = def ? {
      ...entry,
      seriesId: def.id,
      seriesNumber: def.seriesNumber,
      seriesName: def.nameKana,
      seriesNameKana: def.nameKana,
      seriesNameLatin: def.nameLatin,
    } : { ...entry };
    if (!base.snapshot && retiredRobot) base.snapshot = createRobotSnapshot(retiredRobot);
    if (!base.careerHighlights && retiredRobot) base.careerHighlights = robotCareerHighlights(retiredRobot);
    return base;
  });
  ensureTournamentYear(state);
  updateFacilities(state);
  state.trainingChoices = generateTrainingChoices(trainingChoiceCount(state), state.trainingModifiers ?? [], trainingLevelBias(state), trainingChoiceContext(state));
  state.lastEvent ??= null;
  state.lastYearSummary ??= null;
  state.onboarding ??= { completed: Boolean(sourceVersion), step: 0 };
  state.onboarding.completed = Boolean(state.onboarding.completed);
  state.onboarding.step = Number.isFinite(Number(state.onboarding.step)) ? Number(state.onboarding.step) : 0;
  state.createdAt ??= new Date().toISOString();
  state.version = GAME_CONFIG.version;
  state.log ??= [];
  return state;
}

export function createInitialState() {
  const year = 1;
  const roster = [];
  for (let cohortYear = 1; cohortYear <= 3; cohortYear += 1) {
    roster.push(
      ...generateCohort({
        year,
        cohortYear,
        count: randomInt(GAME_CONFIG.rookieMin, GAME_CONFIG.rookieMax),
      }),
    );
  }

  const state = {
    version: GAME_CONFIG.version,
    year,
    turn: 1,
    roster,
    trainingModifiers: [],
    trainingChoices: [],
    trainingControl: { year, turn: 1, rerollUsed: false, reserved: null },
    selectedRobotId: roster[0]?.id ?? null,
    battleOpponentId: roster[1]?.id ?? null,
    lastBattle: null,
    officialMatch: null,
    teamRecord: { wins: 0, losses: 0, streak: 0, recentResults: [] },
    rivalHistory: {},
    growthVisibility: 'hidden',
    settings: defaultSettings(),
    hallOfFame: [],
    best15: { manualIds: [], selectedMode: 'overall' },
    exhibitionHistory: [],
    lastExhibition: null,
    partInventory: generateInitialPartInventory(GAME_CONFIG.initialPartInventory),
    logisticsProcurement: { year, used:0, pending:null, history:[] },
    eventHistory: [],
    lastEvent: null,
    career: { tournamentEntries: 0, tournamentWins: 0, championships: 0, totalRetired: 0 },
    facilities: defaultFacilities(),
    tournamentHistory: [],
    retirementHistory: [],
    seriesEncounters: Object.fromEntries(roster.filter((robot) => robot.seriesId).map((robot) => [robot.seriesId, 1])),
    log: [`v4.8作業版を開始しました。${MANUFACTURERS.length}メーカー・11世代・${MANUFACTURERS.length * (200 + MANUFACTURERS.length)}シリーズを収録しています。`],
    lastYearSummary: null,
    onboarding: { completed: false, step: 0 },
    createdAt: new Date().toISOString(),
    retired: [],
  };
  ensureTournamentYear(state);
  state.trainingChoices = generateTrainingChoices(trainingChoiceCount(state), [], trainingLevelBias(state), trainingChoiceContext(state));
  return state;
}

export function advanceYear(state) {
  ensureTournamentYear(state);
  markMissedTournaments(state);
  state.tournamentHistory ??= [];
  state.tournamentHistory.push(JSON.parse(JSON.stringify(state.tournamentYear)));

  const retired = state.roster.filter((robot) => robot.cohortYear >= 3);
  const memorialParts = retired.map((robot) => generateMemorialPart(robot));
  state.partInventory.push(...memorialParts);
  state.retirementHistory ??= [];
  for (let index = 0; index < retired.length; index += 1) {
    const robot = retired[index];
    state.retirementHistory.unshift({
      year: state.year,
      robotId: robot.id,
      nickname: robot.nickname ?? '',
      manufacturerId: robot.manufacturerId,
      manufacturerName: robot.manufacturerName,
      seriesId: robot.seriesId ?? null,
      seriesArchetypeId: robot.seriesArchetypeId ?? null,
      seriesTrendLabel: robot.seriesTrendLabel ?? '',
      seriesProductionTierLabel: robot.seriesProductionTierLabel ?? '',
      seriesIndividualityLabel: robot.seriesIndividualityLabel ?? '',
      seriesLineageLabel: robot.seriesLineageLabel ?? '',
      seriesPreferredWeapons: [...(robot.seriesPreferredWeapons ?? [])],
      seriesAvoidedWeapons: [...(robot.seriesAvoidedWeapons ?? [])],
      seriesIntrinsicTraitId: robot.seriesIntrinsicTraitId ?? null,
      seriesGrowthCurveId: robot.seriesGrowthCurveId ?? null,
      seriesCustomAptitudeId: robot.seriesCustomAptitudeId ?? null,
      seriesAbilityTendencyTags: [...(robot.seriesAbilityTendencyTags ?? [])],
      productionYear: robot.productionYear ?? null,
      annualTrend: robot.annualTrend ?? null,
      seriesName: robot.seriesName,
      seriesNameKana: robot.seriesNameKana,
      seriesNameLatin: robot.seriesNameLatin,
      serial: robot.serial,
      record: { ...(robot.record ?? { wins: 0, losses: 0 }) },
      abilities: [...(robot.specialAbilities ?? [])],
      memorialPartName: memorialParts[index]?.name ?? null,
      careerHighlights: robotCareerHighlights(robot),
      snapshot: createRobotSnapshot(robot),
    });
  }

  const survivors = state.roster
    .filter((robot) => robot.cohortYear < 3)
    .map((robot) => ({ ...robot, cohortYear: robot.cohortYear + 1 }));
  const nextYear = state.year + 1;
  const rookies = generateCohort({
    year: nextYear,
    cohortYear: 1,
    count: randomInt(GAME_CONFIG.rookieMin, GAME_CONFIG.rookieMax),
  });
  const roster = [...survivors, ...rookies];
  state.seriesEncounters ??= {};
  for (const robot of rookies) if (robot.seriesId) state.seriesEncounters[robot.seriesId] = Number(state.seriesEncounters[robot.seriesId] ?? 0) + 1;

  const nextState = {
    ...state,
    year: nextYear,
    turn: 1,
    roster,
    retired: [...state.retired, ...retired],
    trainingModifiers: state.trainingModifiers ?? [],
    selectedRobotId: roster[0]?.id ?? null,
    battleOpponentId: roster[1]?.id ?? null,
    lastBattle: null,
    officialMatch: null,
  };
  const tournamentResults = Object.values(state.tournamentYear?.entries ?? {}).map((entry) => ({
    tournamentId: entry.tournamentId,
    status: entry.status,
    wins: entry.wins ?? 0,
    champion: Boolean(entry.champion),
  }));
  nextState.lastYearSummary = {
    year: state.year,
    retiredCount: retired.length,
    rookieCount: rookies.length,
    memorialPartCount: memorialParts.length,
    tournamentResults,
  };
  nextState.career ??= {};
  nextState.career.totalRetired = (nextState.career.totalRetired ?? 0) + retired.length;
  nextState.tournamentYear = null;
  ensureTournamentYear(nextState);
  const unlocked = updateFacilities(nextState);
  nextState.trainingControl ??= { year: nextState.year, turn: nextState.turn, rerollUsed: false, reserved: null };
  const carriedTraining = nextState.trainingControl.reserved ?? null;
  nextState.trainingControl = { year: nextState.year, turn: nextState.turn, rerollUsed: false, reserved: null };
  nextState.trainingChoices = generateTrainingChoicesWithCarryover(
    trainingChoiceCount(nextState),
    nextState.trainingModifiers ?? [],
    trainingLevelBias(nextState),
    trainingChoiceContext(nextState),
    carriedTraining,
  );
  const facilityLogs = unlocked.map((item) => `設備拡充：${item.name} Lv${item.level}が利用可能になりました。`);
  nextState.log = [
    ...facilityLogs,
    `${retired.length}機を売却。記念カスタムパーツ${memorialParts.length}個を獲得し、新人${rookies.length}機が加入しました。`,
    ...state.log,
  ].slice(0, 32);
  return nextState;
}


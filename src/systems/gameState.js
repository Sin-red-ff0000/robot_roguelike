import { GAME_CONFIG } from '../config.js?v=2.8';
import { MANUFACTURERS } from '../data/manufacturers.js?v=2.8';
import { getSeriesDefinition, resolveSeriesProfile, seriesByNumber } from '../data/seriesDefinitions.js?v=2.8';
import { randomFloat, randomInt } from '../utils/random.js?v=2.8';
import { WEAPON_AXES, WEAPON_CATEGORIES, WEAPON_KEYS } from '../data/weaponDefinitions.js?v=2.8';
import { generateInitialPartInventory, generateMemorialPart } from './partSystem.js?v=2.8';
import { generateCohort } from './robotGenerator.js?v=2.8';
import { generateTrainingChoices } from './trainingSystem.js?v=2.8';
import { defaultFacilities, trainingChoiceCount, trainingLevelBias, updateFacilities } from './facilitySystem.js?v=2.8';
import { ensureTournamentYear, markMissedTournaments } from './tournamentSystem.js?v=2.8';
import { defaultSettings, normalizeSettings } from './settingsSystem.js?v=2.8';
import { createRobotSnapshot } from './recordSystem.js?v=2.8';
import { getAnnualTrend } from './annualTrendSystem.js?v=2.8';

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
  robot.productionYear = Math.max(1, Number(robot.productionYear ?? robot.yearJoined ?? 1));
  robot.yearJoined = Math.max(1, Number(robot.yearJoined ?? robot.productionYear ?? 1));
  robot.annualTrend ??= getAnnualTrend(robot.productionYear, robot.manufacturerId, robot.seriesId);
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
  state.teamRecord ??= { wins: 0, losses: 0 };
  state.trainingModifiers ??= [];
  state.eventHistory ??= [];
  state.settings = normalizeSettings(state.settings ?? { growthMode: state.growthVisibility === 'visible' ? 'visible' : 'facility' });
  state.hallOfFame ??= [];
  state.hallOfFame = state.hallOfFame.map((entry) => {
    if (entry?.snapshot) return entry;
    const retiredRobot = state.retired.find((robot) => robot.id === entry?.robotId);
    return retiredRobot ? { ...entry, snapshot: createRobotSnapshot(retiredRobot) } : entry;
  });
  state.career ??= { tournamentEntries: 0, tournamentWins: 0, championships: 0, totalRetired: state.retired.length };
  state.career.tournamentEntries ??= 0;
  state.career.tournamentWins ??= 0;
  state.career.championships ??= 0;
  state.career.totalRetired ??= state.retired.length;
  state.facilities ??= defaultFacilities();
  state.tournamentHistory ??= [];
  state.retirementHistory ??= [];
  ensureTournamentYear(state);
  updateFacilities(state);
  state.trainingChoices = generateTrainingChoices(trainingChoiceCount(state), state.trainingModifiers ?? [], trainingLevelBias(state));
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
    selectedRobotId: roster[0]?.id ?? null,
    battleOpponentId: roster[1]?.id ?? null,
    lastBattle: null,
    officialMatch: null,
    teamRecord: { wins: 0, losses: 0 },
    growthVisibility: 'hidden',
    settings: defaultSettings(),
    hallOfFame: [],
    partInventory: generateInitialPartInventory(GAME_CONFIG.initialPartInventory),
    eventHistory: [],
    lastEvent: null,
    career: { tournamentEntries: 0, tournamentWins: 0, championships: 0, totalRetired: 0 },
    facilities: defaultFacilities(),
    tournamentHistory: [],
    retirementHistory: [],
    log: ['v2.8を開始しました。各メーカー40シリーズ・合計800シリーズへ拡張しました。'],
    lastYearSummary: null,
    onboarding: { completed: false, step: 0 },
    createdAt: new Date().toISOString(),
    retired: [],
  };
  ensureTournamentYear(state);
  state.trainingChoices = generateTrainingChoices(trainingChoiceCount(state), [], trainingLevelBias(state));
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
      productionYear: robot.productionYear ?? null,
      annualTrend: robot.annualTrend ?? null,
      seriesName: robot.seriesName,
      seriesNameKana: robot.seriesNameKana,
      seriesNameLatin: robot.seriesNameLatin,
      serial: robot.serial,
      record: { ...(robot.record ?? { wins: 0, losses: 0 }) },
      abilities: [...(robot.specialAbilities ?? [])],
      memorialPartName: memorialParts[index]?.name ?? null,
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
  nextState.trainingChoices = generateTrainingChoices(
    trainingChoiceCount(nextState),
    nextState.trainingModifiers ?? [],
    trainingLevelBias(nextState),
  );
  const facilityLogs = unlocked.map((item) => `設備拡充：${item.name} Lv${item.level}が利用可能になりました。`);
  nextState.log = [
    ...facilityLogs,
    `${retired.length}機を売却。記念カスタムパーツ${memorialParts.length}個を獲得し、新人${rookies.length}機が加入しました。`,
    ...state.log,
  ].slice(0, 32);
  return nextState;
}


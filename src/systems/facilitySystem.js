import { FACILITY_DEFINITIONS } from '../data/facilityDefinitions.js?v=3.8';

export function defaultFacilities() {
  return Object.fromEntries(Object.keys(FACILITY_DEFINITIONS).map((id) => [id, 0]));
}

function championshipCount(state) {
  return state.career?.championships ?? 0;
}

function completedYears(state) {
  return Math.max(0, (state.year ?? 1) - 1);
}

function teamWins(state) {
  return state.teamRecord?.wins ?? 0;
}

function retiredCount(state) {
  return state.career?.totalRetired ?? state.retired?.length ?? 0;
}

function targetLevels(state) {
  const wins = teamWins(state);
  const champs = championshipCount(state);
  const years = completedYears(state);
  const retired = retiredCount(state);

  return {
    analysis: champs >= 4 || years >= 12 ? 4 : champs >= 2 || years >= 7 ? 3 : wins >= 10 || years >= 4 ? 2 : wins >= 3 ? 1 : 0,
    training: champs >= 5 || wins >= 35 ? 3 : champs >= 1 || wins >= 15 ? 2 : wins >= 5 ? 1 : 0,
    logistics: champs >= 4 || retired >= 35 ? 3 : champs >= 1 || retired >= 15 ? 2 : retired >= 5 || wins >= 8 ? 1 : 0,
    archive: retired >= 40 || years >= 10 ? 3 : retired >= 18 || years >= 5 ? 2 : retired >= 5 || years >= 2 ? 1 : 0,
  };
}

export function updateFacilities(state) {
  state.facilities ??= defaultFacilities();
  const targets = targetLevels(state);
  const unlocked = [];
  for (const [id, target] of Object.entries(targets)) {
    const current = state.facilities[id] ?? 0;
    if (target > current) {
      for (let level = current + 1; level <= target; level += 1) {
        unlocked.push({ id, name: FACILITY_DEFINITIONS[id].name, level });
      }
      state.facilities[id] = target;
    }
  }
  return unlocked;
}

export function facilityLevel(state, id) {
  return state.facilities?.[id] ?? 0;
}

export function trainingChoiceCount(state) {
  const level = facilityLevel(state, 'training');
  if (level >= 3) return 5;
  if (level >= 1) return 4;
  return 3;
}

export function trainingLevelBias(state) {
  const level = facilityLevel(state, 'training');
  if (level >= 3) return 0.22;
  if (level >= 2) return 0.11;
  return 0;
}

export function logisticsLevel(state) {
  return facilityLevel(state, 'logistics');
}

export function analysisLevel(state) {
  return facilityLevel(state, 'analysis');
}

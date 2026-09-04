import { FACILITY_DEFINITIONS } from '../data/facilityDefinitions.js?v=4.8';
import { TOURNAMENTS, TOURNAMENT_IDS } from '../data/tournamentDefinitions.js?v=4.8';
import { GAME_CONFIG } from '../config.js?v=4.8';
import { WEAPON_CATEGORIES } from '../data/weaponDefinitions.js?v=4.8';

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
  const tier = (checks) => checks.reduce((level, ok, index) => ok ? index + 1 : level, 0);
  return {
    analysis: tier([wins >= 3 || years >= 2, wins >= 10 || years >= 4, champs >= 2 || years >= 7, champs >= 4 || years >= 10, champs >= 7 || years >= 14]),
    training: tier([wins >= 5, wins >= 15 || champs >= 1, wins >= 25 || champs >= 2, wins >= 40 || champs >= 4, wins >= 60 || champs >= 7]),
    weaponsLab: tier([wins >= 4, wins >= 12, wins >= 24 || champs >= 1, wins >= 38 || champs >= 3, wins >= 55 || champs >= 6]),
    combatResearch: tier([wins >= 2, wins >= 8, wins >= 18 || champs >= 1, wins >= 32 || champs >= 3, wins >= 50 || champs >= 5]),
    logistics: tier([retired >= 5 || wins >= 8, retired >= 15 || champs >= 1, retired >= 25 || champs >= 2, retired >= 35 || champs >= 4, retired >= 50 || champs >= 7]),
    archive: tier([retired >= 5 || years >= 2, retired >= 18 || years >= 5, retired >= 30 || years >= 7, retired >= 40 || years >= 10, retired >= 55 || years >= 13]),
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

export function trainingLevelBias(_state) {
  // 設備は数値倍率ではなく選択肢を増やす。練習Lv抽選自体には補正しない。
  return 0;
}

export function trainingFacilityLevel(state) { return facilityLevel(state, 'training'); }
export function weaponsLabLevel(state) { return facilityLevel(state, 'weaponsLab'); }
export function combatResearchLevel(state) { return facilityLevel(state, 'combatResearch'); }

export function logisticsLevel(state) {
  return facilityLevel(state, 'logistics');
}

export function analysisLevel(state) {
  return facilityLevel(state, 'analysis');
}


export function trainingChoiceContext(state) {
  const roster = state.roster ?? [];
  const count = Math.max(1, roster.length);
  const rookieRatio = roster.filter((robot) => Number(robot.cohortYear ?? 1) === 1).length / count;
  const seniorRatio = roster.filter((robot) => Number(robot.cohortYear ?? 1) >= 3).length / count;
  const streak = Number(state.teamRecord?.streak ?? 0);
  const recentFive = (state.teamRecord?.recentResults ?? []).slice(-5);
  const recentWins = recentFive.filter((result) => result === 'W').length;
  const recentLosses = recentFive.filter((result) => result === 'L').length;

  const rangeCounts = {};
  for (const robot of roster) {
    const range = WEAPON_CATEGORIES[robot.weaponKey]?.range;
    if (range) rangeCounts[range] = (rangeCounts[range] ?? 0) + 1;
  }
  const [dominantWeaponRange = '', dominantWeaponCount = 0] = Object.entries(rangeCounts).sort((a,b) => b[1] - a[1])[0] ?? [];
  const dominantWeaponRatio = dominantWeaponCount / count;

  const totalTurns = Number(state?.settings?.trainingTurns ?? GAME_CONFIG.trainingTurnsPerYear);
  const upcoming = TOURNAMENT_IDS
    .map((id) => ({ id, def: TOURNAMENTS[id], entry: state.tournamentYear?.entries?.[id] }))
    .filter(({ entry }) => !entry || entry.status === 'locked')
    .map(({ def }) => {
      const ratio = Number(def.availableRatio ?? (def.availableTurn / 30));
      const availableTurn = Math.max(1, Math.min(totalTurns, Math.round(totalTurns * ratio)));
      return { turnsAway: availableTurn - Number(state.turn ?? 1), name: def.name };
    })
    .filter((item) => item.turnsAway >= 1 && item.turnsAway <= 2)
    .sort((a,b) => a.turnsAway - b.turnsAway)[0];

  const resolvedEntries = TOURNAMENT_IDS
    .map((id) => ({ id, def: TOURNAMENTS[id], entry: state.tournamentYear?.entries?.[id] }))
    .filter(({ entry }) => Number.isFinite(Number(entry?.resolvedTurn)))
    .sort((a,b) => Number(b.entry.resolvedTurn) - Number(a.entry.resolvedTurn));
  const lastResolved = resolvedEntries[0];
  const lastTournamentTurnsAgo = lastResolved ? Math.max(0, Number(state.turn ?? 1) - Number(lastResolved.entry.resolvedTurn)) : null;

  return {
    trainingFacilityLevel: trainingFacilityLevel(state),
    weaponsLabLevel: weaponsLabLevel(state),
    combatResearchLevel: combatResearchLevel(state),
    year: Number(state.year ?? 1),
    tournamentUpcoming: Boolean(upcoming),
    tournamentTurnsAway: upcoming?.turnsAway ?? null,
    tournamentName: upcoming?.name ?? '',
    lastTournamentOutcome: lastResolved?.entry?.champion ? 'champion' : lastResolved?.entry?.status === 'eliminated' ? 'eliminated' : '',
    lastTournamentName: lastResolved?.def?.name ?? '',
    lastTournamentTurnsAgo,
    winStreak: Math.max(0, streak),
    lossStreak: Math.max(0, -streak),
    recentWins,
    recentLosses,
    dominantWeaponRange,
    dominantWeaponRatio,
    rookieRatio,
    seniorRatio,
  };
}


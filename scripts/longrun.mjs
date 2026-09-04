import { advanceYear, createInitialState, migrateState } from '../src/systems/gameState.js';
import { applyTrainingTurn, generateTrainingChoices } from '../src/systems/trainingSystem.js';
import { resolvePostTrainingEvent, tickTrainingModifiers } from '../src/systems/eventSystem.js';
import { trainingChoiceCount, trainingLevelBias, trainingChoiceContext, updateFacilities } from '../src/systems/facilitySystem.js';
import { trainingTurnsForState } from '../src/systems/settingsSystem.js';
import { useCustomPart } from '../src/systems/partSystem.js';
import { GROUP_KEYS } from '../src/data/statDefinitions.js';
import { TOURNAMENT_IDS } from '../src/data/tournamentDefinitions.js';
import { ensureTournamentYear, refreshTournamentAvailability, tournamentEntry, tournamentMatchOptions, resolveTournamentMatch } from '../src/systems/tournamentSystem.js';
import { createOfficialMatch, autoSelectLineup, arrangeLineup, startOfficialMatch, runNextBout } from '../src/systems/teamMatchSystem.js';

function assertState(state) {
  if (state.roster.length < 15 || state.roster.length > 24) throw new Error(`roster size ${state.roster.length}`);
  if (new Set(state.roster.map((robot) => robot.id)).size !== state.roster.length) throw new Error('duplicate robot id');
  for (const robot of state.roster) {
    if (!Number.isFinite(robot.reliability)) throw new Error('invalid reliability');
    if (new Set(robot.specialAbilities ?? []).size !== (robot.specialAbilities ?? []).length) throw new Error('duplicate special ability');
    for (const groupKey of GROUP_KEYS) {
      for (const value of Object.values(robot.stats[groupKey] ?? {})) {
        if (!Number.isFinite(value)) throw new Error(`invalid stat ${groupKey}`);
      }
    }
    for (const value of Object.values(robot.weaponStats ?? {})) {
      if (!Number.isFinite(value)) throw new Error('invalid weapon stat');
    }
  }
}

function playAvailableTournaments(state, metrics) {
  ensureTournamentYear(state);
  refreshTournamentAvailability(state);
  for (const id of TOURNAMENT_IDS) {
    let entry = tournamentEntry(state, id);
    while (['available', 'active'].includes(entry.status)) {
      const options = tournamentMatchOptions(state, id);
      if (!options) break;
      const match = createOfficialMatch(state, options);
      autoSelectLineup(state, match, 'overall');
      arrangeLineup(state, match, Math.random() < 0.5 ? 'strongFirst' : 'veteranFirst');
      if (!startOfficialMatch(match)) throw new Error(`failed to start tournament match ${id}`);
      while (match.status === 'running') {
        const bout = runNextBout(state, match);
        if (!bout) throw new Error(`tournament bout stalled ${id}`);
        metrics.officialBouts += 1;
      }
      metrics.officialMatches += 1;
      if (match.teamWon) metrics.officialWins += 1;
      else metrics.officialLosses += 1;
      const resolved = resolveTournamentMatch(state, match);
      if (!resolved) throw new Error(`failed to resolve tournament match ${id}`);
      if (resolved.entry.champion) metrics.championships += 1;
      updateFacilities(state);
      entry = resolved.entry;
    }
  }
}

let state = createInitialState();
let maxInventory = state.partInventory.length;
let maxStat = 0;
let maxAbilities = 0;
const targetYears = 60;
const metrics = { officialMatches: 0, officialBouts: 0, officialWins: 0, officialLosses: 0, championships: 0, events: 0 };
const facilityFirstUnlockYear = {};

for (let completed = 0; completed < targetYears; completed += 1) {
  const turns = trainingTurnsForState(state);
  for (let turn = 0; turn < turns; turn += 1) {
    ensureTournamentYear(state);
    refreshTournamentAvailability(state);
    playAvailableTournaments(state, metrics);

    const choices = generateTrainingChoices(
      trainingChoiceCount(state),
      state.trainingModifiers ?? [],
      trainingLevelBias(state),
      trainingChoiceContext(state),
    );
    applyTrainingTurn(state.roster, choices[Math.floor(Math.random() * choices.length)]);
    tickTrainingModifiers(state);
    if (resolvePostTrainingEvent(state)) metrics.events += 1;

    if ((state.partInventory?.length ?? 0) > 18 && Math.random() < 0.35) {
      const part = state.partInventory.shift();
      const robot = state.roster[Math.floor(Math.random() * state.roster.length)];
      if (part && robot) useCustomPart(robot, part);
    }

    if (state.turn < turns) state.turn += 1;
    refreshTournamentAvailability(state);
  }

  // 最終ターンで解禁された大会も取りこぼさず消化する。
  playAvailableTournaments(state, metrics);

  for (const robot of state.roster) {
    maxAbilities = Math.max(maxAbilities, (robot.specialAbilities ?? []).length);
    for (const groupKey of GROUP_KEYS) {
      for (const value of Object.values(robot.stats[groupKey] ?? {})) maxStat = Math.max(maxStat, value);
    }
    for (const value of Object.values(robot.weaponStats ?? {})) maxStat = Math.max(maxStat, value);
  }

  state = advanceYear(state);
  state = migrateState(JSON.parse(JSON.stringify(state)));
  maxInventory = Math.max(maxInventory, state.partInventory.length);
  assertState(state);
  for (const [id, level] of Object.entries(state.facilities ?? {})) {
    if (level > 0 && facilityFirstUnlockYear[id] == null) facilityFirstUnlockYear[id] = state.year;
  }
}

const facilityLevels = Object.values(state.facilities ?? {});
if (!facilityLevels.some((level) => level >= 3)) throw new Error(`60年進行で設備が十分に解禁されていません: ${JSON.stringify(state.facilities)}`);
if (metrics.officialMatches < targetYears * 3) throw new Error(`公式戦試行数が少なすぎます: ${metrics.officialMatches}`);
if (state.teamRecord.wins + state.teamRecord.losses !== metrics.officialMatches) throw new Error('チーム戦績と長期監査の公式戦数が一致しません');

console.log(JSON.stringify({
  ok: true,
  completedYears: targetYears,
  currentYear: state.year,
  roster: state.roster.length,
  retired: state.retired.length,
  inventory: state.partInventory.length,
  maxInventory,
  maxObservedStat: Number(maxStat.toFixed(2)),
  maxObservedAbilities: maxAbilities,
  facilities: state.facilities,
  facilityFirstUnlockYear,
  official: metrics,
  teamRecord: state.teamRecord,
}, null, 2));

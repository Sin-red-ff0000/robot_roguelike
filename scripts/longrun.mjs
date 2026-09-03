import { advanceYear, createInitialState, migrateState } from '../src/systems/gameState.js';
import { applyTrainingTurn, generateTrainingChoices } from '../src/systems/trainingSystem.js';
import { resolvePostTrainingEvent, tickTrainingModifiers } from '../src/systems/eventSystem.js';
import { trainingChoiceCount, trainingLevelBias } from '../src/systems/facilitySystem.js';
import { trainingTurnsForState } from '../src/systems/settingsSystem.js';
import { useCustomPart } from '../src/systems/partSystem.js';
import { GROUP_KEYS } from '../src/data/statDefinitions.js';

function assertState(state) {
  if (state.roster.length < 15 || state.roster.length > 24) throw new Error(`roster size ${state.roster.length}`);
  if (new Set(state.roster.map((robot) => robot.id)).size !== state.roster.length) throw new Error('duplicate robot id');
  for (const robot of state.roster) {
    if (!Number.isFinite(robot.reliability)) throw new Error('invalid reliability');
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

let state = createInitialState();
let maxInventory = state.partInventory.length;
let maxStat = 0;
const targetYears = 60;

for (let completed = 0; completed < targetYears; completed += 1) {
  const turns = trainingTurnsForState(state);
  for (let turn = 0; turn < turns; turn += 1) {
    const choices = generateTrainingChoices(trainingChoiceCount(state), state.trainingModifiers ?? [], trainingLevelBias(state));
    applyTrainingTurn(state.roster, choices[0]);
    tickTrainingModifiers(state);
    resolvePostTrainingEvent(state);

    if ((state.partInventory?.length ?? 0) > 18 && Math.random() < 0.35) {
      const part = state.partInventory.shift();
      const robot = state.roster[Math.floor(Math.random() * state.roster.length)];
      if (part && robot) useCustomPart(robot, part);
    }
  }

  for (const robot of state.roster) {
    for (const groupKey of GROUP_KEYS) {
      for (const value of Object.values(robot.stats[groupKey] ?? {})) maxStat = Math.max(maxStat, value);
    }
    for (const value of Object.values(robot.weaponStats ?? {})) maxStat = Math.max(maxStat, value);
  }

  state = advanceYear(state);
  state = migrateState(JSON.parse(JSON.stringify(state)));
  maxInventory = Math.max(maxInventory, state.partInventory.length);
  assertState(state);
}

console.log(JSON.stringify({
  ok: true,
  completedYears: targetYears,
  currentYear: state.year,
  roster: state.roster.length,
  retired: state.retired.length,
  inventory: state.partInventory.length,
  maxInventory,
  maxObservedStat: Number(maxStat.toFixed(2)),
  facilities: state.facilities,
}, null, 2));

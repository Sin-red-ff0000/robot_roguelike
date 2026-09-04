import { createInitialState, migrateState } from '../src/systems/gameState.js?v=4.7';
import { generateTrainingChoicesWithCarryover } from '../src/systems/trainingSystem.js?v=4.7';
import { trainingChoiceCount, trainingChoiceContext, trainingLevelBias } from '../src/systems/facilitySystem.js?v=4.7';

const state = createInitialState();
state.facilities.training = 4;
state.trainingChoices = generateTrainingChoicesWithCarryover(
  trainingChoiceCount(state), state.trainingModifiers ?? [], trainingLevelBias(state), trainingChoiceContext(state), null,
);
if (state.trainingChoices.length !== 5) throw new Error(`expected 5 choices, got ${state.trainingChoices.length}`);

const reserved = { ...state.trainingChoices[0] };
const next = generateTrainingChoicesWithCarryover(
  5, [], 0, trainingChoiceContext(state), reserved,
);
if (next.length !== 5) throw new Error(`carryover changed choice count: ${next.length}`);
if (!next[0].reservedCarryover) throw new Error('reserved card was not marked as carryover');
if (next[0].id !== reserved.id || next[0].level !== reserved.level) throw new Error('reserved card changed during carryover');
if (next.slice(1).some((item) => item.groupKey === reserved.groupKey)) throw new Error('carryover duplicated its training group');

state.trainingControl = { year: state.year, turn: state.turn, rerollUsed: true, reserved };
const migrated = migrateState(JSON.parse(JSON.stringify(state)));
if (!migrated.trainingControl?.rerollUsed) throw new Error('reroll state was not preserved by migration');
if (migrated.trainingControl?.reserved?.id !== reserved.id) throw new Error('reserved card was not preserved by migration');

console.log(JSON.stringify({
  ok: true,
  choiceCount: next.length,
  reserved: `${next[0].label} Lv${next[0].level}`,
  duplicateGroup: false,
  migrationPreservesControl: true,
}, null, 2));

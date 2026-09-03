import { advanceYear, createInitialState, migrateState } from '../src/systems/gameState.js';
import { generateTrainingChoices, applyTrainingTurn } from '../src/systems/trainingSystem.js';
import { simulateBattle } from '../src/systems/battleSystem.js';
import { resolvePostTrainingEvent, tickTrainingModifiers } from '../src/systems/eventSystem.js';
import { generateCustomPart, useCustomPart } from '../src/systems/partSystem.js';
import { evaluateOfficialBoutAbilityChanges } from '../src/systems/specialAbilitySystem.js';
import { SPECIAL_ABILITIES } from '../src/data/specialAbilities.js';
import { TRAINING_TYPES } from '../src/data/trainingDefinitions.js';
import { arrangeLineup, autoSelectLineup, createOfficialMatch, runNextBout, startOfficialMatch } from '../src/systems/teamMatchSystem.js';
import { parseSaveText, serializeSave } from '../src/systems/saveSystem.js';
import { managerLine, normalizeManagerProfile, parseCustomLines, setManagerCustomLines } from '../src/systems/managerSystem.js';
import { MANAGER_PERSONALITIES } from '../src/data/managerDefinitions.js';
import { normalizeSettings } from '../src/systems/settingsSystem.js';
import { applyManagerPreset, createManagerPreset, parseManagerProfileText, serializeManagerProfile, upsertManagerPreset } from '../src/systems/managerPresetSystem.js';
import { tournamentAvailableTurn } from '../src/systems/tournamentSystem.js';
import { toggleHallOfFame } from '../src/systems/recordSystem.js';

let state = createInitialState();
if (state.roster.length < 15) throw new Error('roster too small');

if (state.onboarding?.completed) throw new Error('new game tutorial should be incomplete');
const saveRoundTrip = parseSaveText(serializeSave(state));
if (saveRoundTrip.year !== state.year || saveRoundTrip.roster.length !== state.roster.length) throw new Error('save roundtrip');

if (TRAINING_TYPES.length < 20) throw new Error('training content not expanded');
if (Object.keys(SPECIAL_ABILITIES).length < 40) throw new Error('ability content not expanded');
if (Object.keys(MANAGER_PERSONALITIES).length !== 15) throw new Error('manager personality count');
for (const turns of [12,24,36,48,60]) { if (normalizeSettings({ trainingTurns: turns }).trainingTurns !== turns) throw new Error(`training turn option missing ${turns}`); }
if (normalizeSettings({ trainingTurns: 30 }).trainingTurns !== 36) throw new Error('legacy 30-turn migration failed');
const shortYear = { settings: normalizeSettings({ trainingTurns: 12 }) };
if (tournamentAvailableTurn(shortYear, 'summer') > 12 || tournamentAvailableTurn(shortYear, 'late') > 12) throw new Error('short-year tournament scaling failed');
const longYear = { settings: normalizeSettings({ trainingTurns: 60 }) };
if (tournamentAvailableTurn(longYear, 'late') < 40) throw new Error('long-year tournament scaling failed');

for (let i = 0; i < 80; i += 1) {
  const choices = generateTrainingChoices(3, state.trainingModifiers ?? [], 0.1);
  if (new Set(choices.map((x) => x.groupKey)).size !== choices.length) throw new Error('duplicate group in training hand');
  applyTrainingTurn(state.roster, choices[0]);
  tickTrainingModifiers(state);
  resolvePostTrainingEvent(state);
}

const a = state.roster[0];
const b = state.roster[1];
for (let i = 0; i < 1200; i += 1) {
  const result = simulateBattle(a, b, { official: true });
  if (result.comparisons.length !== 9) throw new Error('battle comparison count');
  evaluateOfficialBoutAbilityChanges(a, b, result, result.winner === 'a');
}

for (let i = 0; i < 100; i += 1) {
  const part = generateCustomPart({ rarityBias: 2 });
  useCustomPart(state.roster[i % state.roster.length], part);
}

const match = createOfficialMatch(state, { context: { type: 'scrimmage', name: 'Smoke Match', prestige: 0 } });
if (!autoSelectLineup(state, match, 'veteran')) throw new Error('auto lineup selection failed');
if (!arrangeLineup(state, match, 'random')) throw new Error('lineup arrangement failed');
if (new Set(match.lineupIds).size !== 15) throw new Error('lineup duplicate');
if (!startOfficialMatch(match)) throw new Error('match start failed');
while (match.status === 'running') runNextBout(state, match);
if (match.results.length !== 15 || match.allyWins + match.enemyWins !== 15) throw new Error('team match did not complete');

const traits = {};
for (let i = 0; i < 2000; i += 1) {
  const fresh = createInitialState().roster[0];
  traits[fresh.generationTrait] = (traits[fresh.generationTrait] ?? 0) + 1;
}
if (!traits.promising || !traits.lateBloom || !traits.eccentric) throw new Error(`generation traits missing ${JSON.stringify(traits)}`);

const migratedInput = JSON.parse(JSON.stringify(state));
migratedInput.version = '0.9';
delete migratedInput.onboarding;
delete migratedInput.lastYearSummary;
const migrated = migrateState(migratedInput);
if (!migrated || migrated.version !== '2.5') throw new Error('migration version');
if (!migrated.onboarding?.completed) throw new Error('legacy onboarding should be completed');
let manager = normalizeManagerProfile({ personalityId: 'calm', name: 'Test Manager' });
if (!managerLine(manager, 'training')) throw new Error('manager line missing');
manager = setManagerCustomLines(manager, 'training', parseCustomLines('カスタム訓練A\nカスタム訓練B'));
manager.lineMode = 'custom';
const customLine = managerLine(manager, 'training');
if (!['カスタム訓練A', 'カスタム訓練B'].includes(customLine)) throw new Error('manager custom line missing');
manager = setManagerCustomLines(manager, 'robotSelected', ['{year}年目：{robot} / {weapon}']);
const templateLine = managerLine(manager, 'robotSelected', { year: 7, robot: 'TEST-01', weapon: 'ハンマー' });
if (templateLine !== '7年目：TEST-01 / ハンマー') throw new Error(`manager template failed: ${templateLine}`);
if (!managerLine(manager, 'awakening')) throw new Error('manager custom fallback missing');
const personaPreset = createManagerPreset(manager, 'テスト人格');
let personaList = upsertManagerPreset([], personaPreset);
if (personaList.length !== 1 || personaList[0].label !== 'テスト人格') throw new Error('manager preset save failed');
const alternateManager = normalizeManagerProfile({ name: 'Portrait Keeper', imageDataUrl: 'data:image/jpeg;base64,abc', personalityId: 'cheerful' });
const appliedManager = applyManagerPreset(alternateManager, personaPreset);
if (appliedManager.name !== 'Portrait Keeper' || appliedManager.imageDataUrl !== 'data:image/jpeg;base64,abc') throw new Error('manager preset should preserve identity');
if (appliedManager.personalityId !== manager.personalityId || appliedManager.lineMode !== manager.lineMode) throw new Error('manager preset apply failed');
const managerExport = serializeManagerProfile(manager);
const managerImported = parseManagerProfileText(managerExport);
if (managerImported.name !== manager.name || managerImported.customLines?.robotSelected?.[0] !== manager.customLines?.robotSelected?.[0]) throw new Error('manager profile export roundtrip failed');
migrated.roster[0].nickname = 'テストエース';
const nicknameId = migrated.roster[0].id;
const migratedAgain = migrateState(JSON.parse(JSON.stringify(migrated)));
if (migratedAgain.roster.find((robot) => robot.id === nicknameId)?.nickname !== 'テストエース') throw new Error('nickname persistence failed');
const retiringRobot = migratedAgain.roster.find((robot) => robot.cohortYear === 3);
if (retiringRobot) retiringRobot.nickname = '引退テスト';
const retiringId = retiringRobot?.id;
const nextYear = advanceYear(migratedAgain);
if (retiringId && nextYear.retirementHistory.find((entry) => entry.robotId === retiringId)?.nickname !== '引退テスト') throw new Error('retirement nickname missing');
if (retiringId) {
  const retiredForHall = nextYear.retired.find((robot) => robot.id === retiringId);
  if (!retiredForHall) throw new Error('retired robot missing for hall snapshot');
  if (!toggleHallOfFame(nextYear, retiringId)) throw new Error('hall induction failed');
  const hallEntry = nextYear.hallOfFame.find((entry) => entry.robotId === retiringId);
  if (!hallEntry?.snapshot?.stats || !hallEntry.snapshot.weaponCategoryStats || !Array.isArray(hallEntry.snapshot.specialAbilities)) throw new Error('hall snapshot data missing');
}
if (!nextYear.lastYearSummary || nextYear.lastYearSummary.year !== migrated.year) throw new Error('year summary missing');
if (nextYear.lastYearSummary.rookieCount < 5 || nextYear.lastYearSummary.rookieCount > 8) throw new Error('year summary rookie count');
console.log(JSON.stringify({
  ok: true,
  trainingTypes: TRAINING_TYPES.length,
  abilities: Object.keys(SPECIAL_ABILITIES).length,
  eventHistory: state.eventHistory.length,
  teamMatch: `${match.allyWins}-${match.enemyWins}`,
  traits,
}, null, 2));

import { createInitialState } from '../src/systems/gameState.js?v=4.7';
import { FACILITY_DEFINITIONS } from '../src/data/facilityDefinitions.js?v=4.7';
import { procurementStatus, requestProcurement, chooseProcurement, PROCUREMENT_ROUTES } from '../src/systems/logisticsSystem.js?v=4.7';
import { generateTrainingChoices } from '../src/systems/trainingSystem.js?v=4.7';
import { trainingChoiceContext } from '../src/systems/facilitySystem.js?v=4.7';

const state = createInitialState();
for (const key of Object.keys(state.facilities)) state.facilities[key] = 5;
const before = JSON.stringify(state.roster.map(r => ({ id:r.id, stats:r.stats, weaponStats:r.weaponStats })));
const routes = Object.keys(PROCUREMENT_ROUTES);
const routeCounts = {};
for (const route of routes) {
  state.logisticsProcurement = { year:state.year, used:0, pending:null, history:[] };
  const maker = route === 'maker' ? 'kirishima' : null;
  const result = requestProcurement(state, route, maker);
  if (!result.ok) throw new Error(`procurement route failed: ${route} ${result.reason}`);
  routeCounts[route] = result.pending.choices.length;
  const chosen = chooseProcurement(state, result.pending.choices[0].id);
  if (!chosen.ok) throw new Error(`procurement choose failed: ${route}`);
}
state.logisticsProcurement = { year:state.year, used:0, pending:null, history:[] };
const first = requestProcurement(state, 'special');
chooseProcurement(state, first.pending.choices[0].id);
const second = requestProcurement(state, 'special');
chooseProcurement(state, second.pending.choices[0].id);
const third = requestProcurement(state, 'special');
if (third.ok) throw new Error('Lv5 annual procurement limit should be 2');
const after = JSON.stringify(state.roster.map(r => ({ id:r.id, stats:r.stats, weaponStats:r.weaponStats })));
if (before !== after) throw new Error('facility procurement directly changed robot growth/stats');
const choices = generateTrainingChoices(5, [], 0, trainingChoiceContext(state));
if (choices.length !== 5) throw new Error('training Lv5 should expose 5 choices');
const missing = Object.entries(FACILITY_DEFINITIONS).filter(([,def]) => def.levels.length !== 6 || def.maxLevel !== 5).map(([id])=>id);
if (missing.length) throw new Error(`facility level definitions incomplete: ${missing.join(',')}`);
console.log(JSON.stringify({ ok:true, facilities:Object.keys(FACILITY_DEFINITIONS).length, routeCounts, procurementLimit:procurementStatus(state).limit, trainingChoices:choices.length, directRobotStatChange:false }, null, 2));

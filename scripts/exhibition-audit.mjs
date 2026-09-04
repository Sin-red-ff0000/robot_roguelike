import { createInitialState } from '../src/systems/gameState.js?v=4.7';
import { createRobotSnapshot } from '../src/systems/recordSystem.js?v=4.7';
import { exhibitionTeamOptions, buildExhibitionTeam, simulateExhibitionMatch } from '../src/systems/exhibitionSystem.js?v=4.7';

const state = createInitialState();
state.facilities.archive = 5;
// Build enough historical robots while preserving a valid active team.
const seed = state.roster[0];
state.retired = Array.from({length:40}, (_,i)=>{
  const r = createRobotSnapshot(seed);
  r.id = `ret-${i}`;
  r.serial = `RET-${i}`;
  r.nickname = `歴代${i+1}`;
  r.record = { wins: 5+i, losses: i%7 };
  r.reliability = 60 + (i%40);
  r.seriesNumber = (i%20)+1;
  r.manufacturerId = seed.manufacturerId;
  return r;
});
state.best15.manualIds = state.retired.slice(0,15).map(r=>r.id);
const opts = exhibitionTeamOptions(state);
if (!opts.find(o=>o.id==='active')) throw new Error('active option missing');
if (!opts.find(o=>o.id==='best15:manual')) throw new Error('manual best15 option missing');
if (buildExhibitionTeam(state,'best15:overall').length !== 15) throw new Error('best15 team length');
const result = simulateExhibitionMatch(state,'active','best15:overall');
if (!result.ok || result.record.results.length !== 15) throw new Error('exhibition failed');
if ((result.record.leftWins + result.record.rightWins) !== 15) throw new Error('score mismatch');
const before = state.retired[0].record.wins;
simulateExhibitionMatch(state,'best15:manual','best15:overall');
if (state.retired[0].record.wins !== before) throw new Error('exhibition mutated career stats');
console.log(JSON.stringify({ok:true, options:opts.length, score:`${result.record.leftWins}-${result.record.rightWins}`, history:state.exhibitionHistory.length}, null, 2));

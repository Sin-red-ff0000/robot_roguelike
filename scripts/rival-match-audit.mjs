import { createInitialState } from '../src/systems/gameState.js';
import { createOfficialMatch } from '../src/systems/teamMatchSystem.js';
const s=createInitialState(); s.facilities.combatResearch=5; s.roster.push(...s.roster.slice(0,Math.max(0,15-s.roster.length)));
const seen=new Set(); let sample=null;
for(let y=1;y<=80;y++){s.year=y;s.teamRecord.wins=y;s.teamRecord.losses=Math.floor(y/3);const m=createOfficialMatch(s,{context:{type:'tournament',tournamentId:`t${y%4}`,roundIndex:y%3}});seen.add(m.context.rivalTeamId);if(!sample)sample={name:m.context.rivalTeamName,analysis:m.context.rivalAnalysis,line:m.context.rivalManagerLine,enemyCount:m.enemyRoster.length};if(m.enemyRoster.length!==15)throw new Error('enemy count');}
console.log(JSON.stringify({ok:seen.size>40,distinctRivals:seen.size,sample},null,2));

import { RIVAL_TEAMS } from '../src/data/rivalTeamDefinitions.js';
import { rivalAnalysis, rivalManagerLine, rivalTraitLabels } from '../src/systems/rivalTeamSystem.js';
const ids = new Set();
let missing=0, duplicatePhilosophy=0;
const philosophies=new Map();
for (const team of RIVAL_TEAMS) {
  if (ids.has(team.id)) throw new Error(`duplicate id ${team.id}`); ids.add(team.id);
  for (const key of ['philosophy','sacrifice','scoutingFocus','counterHint','coachStyle']) if (!team[key]) missing++;
  const key=`${team.philosophy}|${team.sacrifice}|${team.scoutingFocus}`;
  philosophies.set(key,(philosophies.get(key)||0)+1);
  const a5=rivalAnalysis(team,5,{meetings:3,wins:1,losses:2,rivalryPoints:7,currentStreak:-1,lastScore:'7-8',lastResult:'L'});
  const m5=rivalManagerLine(team,5,{meetings:3,wins:1,losses:2,rivalryPoints:7,currentStreak:-1,lastScore:'7-8',lastResult:'L'});
  if (!a5.includes('弱点') && !a5.includes('狙い目')) throw new Error(`analysis lacks weakness ${team.id}`);
  if (!m5.includes(team.name)) throw new Error(`manager lacks team name ${team.id}`);
  if (!rivalTraitLabels(team).length) throw new Error(`no traits ${team.id}`);
}
duplicatePhilosophy=[...philosophies.values()].filter(v=>v>1).reduce((a,b)=>a+b-1,0);
console.log(JSON.stringify({ok:true,teams:RIVAL_TEAMS.length,uniqueIds:ids.size,missing,uniqueIdentityBundles:philosophies.size,duplicateIdentityBundles:duplicatePhilosophy},null,2));

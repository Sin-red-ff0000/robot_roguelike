import { RIVAL_TEAMS } from '../src/data/rivalTeamDefinitions.js';
import { rivalTraitLabels, rivalGenerationOptions } from '../src/systems/rivalTeamSystem.js';
const counts={}; for(const t of RIVAL_TEAMS) for(const x of t.traits) counts[x]=(counts[x]??0)+1;
const bad=RIVAL_TEAMS.filter(t=>!t.name||!t.traits.length||!rivalTraitLabels(t).length);
const seriesTeams=RIVAL_TEAMS.filter(t=>t.traits.includes('series'));
const generationTeams=RIVAL_TEAMS.filter(t=>t.traits.includes('generation'));
console.log(JSON.stringify({ok:RIVAL_TEAMS.length>=200&&!bad.length&&seriesTeams.length&&generationTeams.length,total:RIVAL_TEAMS.length,traitCounts:counts,bad:bad.length,sample:RIVAL_TEAMS.slice(0,8).map(t=>({name:t.name,labels:rivalTraitLabels(t),options:rivalGenerationOptions(t,0)}))},null,2));

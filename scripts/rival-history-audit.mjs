import { createInitialState } from '../src/systems/gameState.js';
import { RIVAL_TEAMS } from '../src/data/rivalTeamDefinitions.js';
import { selectRivalTeam, rivalHistoryEntry, recordRivalResult, rivalManagerLine, rivalryTier, rivalArchiveRows } from '../src/systems/rivalTeamSystem.js';

const state=createInitialState();
const ranks=new Set(RIVAL_TEAMS.map(t=>t.rankId));
const affinities=new Set(RIVAL_TEAMS.map(t=>t.tournamentAffinity));
if(RIVAL_TEAMS.length!==240) throw new Error(`rivals ${RIVAL_TEAMS.length}`);
if(ranks.size<5) throw new Error('rank coverage');
if(!['early','middle','late','any'].every(x=>affinities.has(x))) throw new Error('affinity coverage');
const early=[]; const late=[];
for(let y=1;y<=80;y++){
 state.year=y;
 early.push(selectRivalTeam(state,{type:'tournament',tournamentId:'audit',roundIndex:0,prestige:1}).rankScore);
 late.push(selectRivalTeam(state,{type:'tournament',tournamentId:'audit',roundIndex:4,prestige:7}).rankScore);
}
const avg=a=>a.reduce((x,y)=>x+y,0)/a.length;
if(avg(late)<=avg(early)) throw new Error(`rank scaling failed ${avg(early)} ${avg(late)}`);
const team=RIVAL_TEAMS[0];
for(let i=0;i<2;i++){
 const match={status:'complete',teamWon:false,allyWins:7,enemyWins:8,context:{rivalTeamId:team.id,type:'tournament',tournamentName:'監査大会',roundName:'全国決勝'}};
 recordRivalResult(state,match);
 recordRivalResult(state,match);
}
const h=rivalHistoryEntry(state,team.id);
if(h.meetings!==2 || h.losses!==2 || h.currentStreak!==-2) throw new Error(JSON.stringify(h));
if(h.titleDenied!==2 || h.finalMeetings!==2 || h.closeGames!==2) throw new Error(`final rivalry metrics ${JSON.stringify(h)}`);
if(rivalryTier(h).id!=='nemesis') throw new Error(`nemesis threshold ${JSON.stringify(h)}`);
const line=rivalManagerLine(team,5,h);
if(!line.includes('宿敵')) throw new Error(line);
const archive=rivalArchiveRows(state);
if(!archive.length || archive[0].id!==team.id) throw new Error('archive order');
console.log(JSON.stringify({ok:true,rivals:RIVAL_TEAMS.length,ranks:[...ranks],affinities:[...affinities],earlyRankAvg:Number(avg(early).toFixed(2)),lateRankAvg:Number(avg(late).toFixed(2)),history:h,tier:rivalryTier(h),managerLine:line,archiveTop:archive[0].team.name},null,2));

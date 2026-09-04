import { MANUFACTURERS } from '../data/manufacturers.js?v=4.8';
import { simulateBattle } from './battleSystem.js?v=4.8';
import { historicalBest15 } from './recordSystem.js?v=4.8';
import { robotSelectionScore } from './teamMatchSystem.js?v=4.8';
import { battleWinTable } from './settingsSystem.js?v=4.8';

const MAKER_MAP = new Map(MANUFACTURERS.map((m) => [m.id, m]));

function generationOf(robot) {
  return Number(robot.seriesNumber ?? 1) >= 201 ? 11 : Math.max(1, Math.ceil(Number(robot.seriesNumber ?? 1) / 20));
}

function cloneRobot(robot, prefix, index) {
  const copy = JSON.parse(JSON.stringify(robot));
  copy.id = `${prefix}-${index}-${robot.id}`;
  return copy;
}

function labelRobot(robot) {
  const name = robot.nickname || robot.seriesNameKana || robot.seriesName || robot.serial || '機体';
  return String(name);
}

function historicalPool(state) {
  return [...(state.retired ?? [])];
}

function rankPool(pool) {
  return [...pool].sort((a, b) => {
    const aw = Number(a.record?.wins ?? 0); const bw = Number(b.record?.wins ?? 0);
    return robotSelectionScore(b) - robotSelectionScore(a) || bw - aw;
  });
}

export function exhibitionTeamOptions(state) {
  const options = [];
  if ((state.roster ?? []).length >= 15) options.push({ id: 'active', label: '現役ベスト15', kind: 'active' });
  if ((state.best15?.manualIds ?? []).length >= 15) options.push({ id: 'best15:manual', label: '歴代ベスト15（手動）', kind: 'best15' });
  for (const mode of ['overall', 'wins', 'winRate', 'abilities', 'peak', 'reliability']) {
    if (historicalBest15(state, mode).length >= 15) {
      const labels = { overall:'総合', wins:'最多勝', winRate:'勝率・実績', abilities:'特殊能力', peak:'最高個別値', reliability:'信頼性' };
      options.push({ id: `best15:${mode}`, label: `歴代ベスト15（${labels[mode]}）`, kind:'best15' });
    }
  }
  const retired = historicalPool(state);
  for (let generation = 1; generation <= 11; generation += 1) {
    const count = retired.filter((r) => generationOf(r) === generation).length;
    if (count >= 15) options.push({ id:`generation:${generation}`, label:`歴代・第${generation}世代ベスト15`, kind:'generation', count });
  }
  for (const maker of MANUFACTURERS) {
    const count = retired.filter((r) => r.manufacturerId === maker.id).length;
    if (count >= 15) options.push({ id:`manufacturer:${maker.id}`, label:`歴代・${maker.name}ベスト15`, kind:'manufacturer', count });
  }
  return options;
}

export function buildExhibitionTeam(state, teamId) {
  if (teamId === 'active') {
    return rankPool(state.roster ?? []).slice(0, 15).map((r,i)=>cloneRobot(r,'ex-active',i));
  }
  if (String(teamId).startsWith('best15:')) {
    const mode = String(teamId).split(':')[1] || 'overall';
    return historicalBest15(state, mode).slice(0, 15).map(({robot},i)=>cloneRobot(robot,`ex-${mode}`,i));
  }
  if (String(teamId).startsWith('generation:')) {
    const generation = Number(String(teamId).split(':')[1]);
    return rankPool(historicalPool(state).filter((r)=>generationOf(r)===generation)).slice(0,15).map((r,i)=>cloneRobot(r,`ex-g${generation}`,i));
  }
  if (String(teamId).startsWith('manufacturer:')) {
    const makerId = String(teamId).split(':')[1];
    return rankPool(historicalPool(state).filter((r)=>r.manufacturerId===makerId)).slice(0,15).map((r,i)=>cloneRobot(r,`ex-m-${makerId}`,i));
  }
  return [];
}

export function exhibitionTeamLabel(state, teamId) {
  return exhibitionTeamOptions(state).find((x)=>x.id===teamId)?.label ?? teamId;
}

export function simulateExhibitionMatch(state, leftId, rightId) {
  const left = buildExhibitionTeam(state, leftId);
  const right = buildExhibitionTeam(state, rightId);
  if (left.length < 15 || right.length < 15) return { ok:false, reason:'not-enough-robots' };
  const results = [];
  let leftWins = 0; let rightWins = 0;
  const table = battleWinTable(state.settings);
  for (let i=0; i<15; i+=1) {
    const result = simulateBattle(left[i], right[i], { official:false, prestige:0, winChanceTable:table });
    const leftWon = result.winner === 'a';
    if (leftWon) leftWins += 1; else rightWins += 1;
    results.push({
      slot:i+1,
      leftId:left[i].id,
      rightId:right[i].id,
      leftName:labelRobot(left[i]),
      rightName:labelRobot(right[i]),
      winner:leftWon?'left':'right',
      margin:Number(result.margin ?? 0),
    });
  }
  const record = {
    id:`exhibition-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,
    year:Number(state.year ?? 1),
    leftId, rightId,
    leftLabel:exhibitionTeamLabel(state,leftId),
    rightLabel:exhibitionTeamLabel(state,rightId),
    leftWins, rightWins,
    winner:leftWins>rightWins?'left':'right',
    results,
    playedAt:new Date().toISOString(),
  };
  state.exhibitionHistory ??= [];
  state.exhibitionHistory.unshift(record);
  state.exhibitionHistory = state.exhibitionHistory.slice(0, 30);
  state.lastExhibition = record;
  return { ok:true, record };
}

export function exhibitionHistoryRows(state) {
  return [...(state.exhibitionHistory ?? [])];
}

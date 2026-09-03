import { GAME_CONFIG } from '../config.js?v=3.0';
import { GROUP_KEYS, STAT_GROUPS } from '../data/statDefinitions.js?v=3.0';
import { generateCohort } from './robotGenerator.js?v=3.0';
import { simulateBattle } from './battleSystem.js?v=3.0';
import { evaluateOfficialBoutAbilityChanges } from './specialAbilitySystem.js?v=3.0';
import { clamp, randomInt } from '../utils/random.js?v=3.0';
import { battleWinTable } from './settingsSystem.js?v=3.0';

function groupAverage(robot, groupKey) {
  const values = Object.values(robot.stats[groupKey]);
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function weaponAverage(robot) {
  const values = Object.values(robot.weaponStats);
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

export function robotSelectionScore(robot) {
  const baseAverage = GROUP_KEYS.reduce((sum, key) => sum + groupAverage(robot, key), 0) / GROUP_KEYS.length;
  return baseAverage * 0.68 + weaponAverage(robot) * 0.24 + robot.reliability * 0.08;
}

function applyEnemyDifficulty(robot, difficulty = 0) {
  if (!difficulty) return robot;
  for (const groupKey of GROUP_KEYS) {
    for (const statName of Object.keys(robot.stats[groupKey])) {
      robot.stats[groupKey][statName] = clamp(robot.stats[groupKey][statName] + difficulty, GAME_CONFIG.statMin, GAME_CONFIG.tournamentEnemyStatCap);
    }
  }
  for (const axis of Object.keys(robot.weaponStats)) {
    robot.weaponStats[axis] = clamp(robot.weaponStats[axis] + difficulty, GAME_CONFIG.weaponStatMin, GAME_CONFIG.tournamentEnemyStatCap);
  }
  robot.weaponCategoryStats[robot.weaponKey] = { ...robot.weaponStats };
  for (const key of Object.keys(robot.resistances ?? {})) {
    robot.resistances[key] = clamp(robot.resistances[key] + Math.round(difficulty * 0.55), 0, 150);
  }
  robot.reliability = clamp(robot.reliability + Math.round(difficulty * 0.35), 20, 100);
  return robot;
}

function createEnemyTeam(year, difficulty = 0) {
  const cohortCounts = [5, 5, 5];
  const enemies = [];
  for (let cohortYear = 1; cohortYear <= 3; cohortYear += 1) {
    enemies.push(...generateCohort({ year, cohortYear, count: cohortCounts[cohortYear - 1] }));
  }
  return enemies.map((robot, index) => applyEnemyDifficulty({
    ...robot,
    id: `enemy-${year}-${index}-${robot.id}`,
    serial: `EN-${String(year).padStart(2, '0')}-${String(index + 1).padStart(2, '0')}`,
  }, difficulty));
}

export function createOfficialMatch(state, { difficulty = 0, context = null } = {}) {
  const lineupIds = state.roster
    .slice()
    .sort((a, b) => robotSelectionScore(b) - robotSelectionScore(a))
    .slice(0, GAME_CONFIG.officialMatchSize)
    .map((robot) => robot.id);

  const enemyRoster = createEnemyTeam(state.year, difficulty)
    .sort((a, b) => robotSelectionScore(b) - robotSelectionScore(a));
  state.seriesEncounters ??= {};
  for (const enemy of enemyRoster) {
    if (enemy.seriesId) state.seriesEncounters[enemy.seriesId] = Number(state.seriesEncounters[enemy.seriesId] ?? 0) + 1;
  }

  return {
    id: `official-${state.year}-${Date.now()}`,
    status: 'setup',
    lineupIds,
    enemyRoster,
    enemyLineupIds: enemyRoster.slice(0, GAME_CONFIG.officialMatchSize).map((robot) => robot.id),
    currentBout: 0,
    allyWins: 0,
    enemyWins: 0,
    substitutionsRemaining: GAME_CONFIG.officialMatchSubstitutions,
    results: [],
    difficulty,
    context,
  };
}


export function autoSelectLineup(state, match, strategy = 'overall') {
  if (!match || match.status !== 'setup') return false;
  const sorters = {
    overall: (a, b) => robotSelectionScore(b) - robotSelectionScore(a),
    veteran: (a, b) => (b.cohortYear - a.cohortYear) || (robotSelectionScore(b) - robotSelectionScore(a)),
    rookie: (a, b) => (a.cohortYear - b.cohortYear) || (robotSelectionScore(b) - robotSelectionScore(a)),
    wins: (a, b) => ((b.record?.wins ?? 0) - (a.record?.wins ?? 0)) || (robotSelectionScore(b) - robotSelectionScore(a)),
    reliability: (a, b) => (b.reliability - a.reliability) || (robotSelectionScore(b) - robotSelectionScore(a)),
  };
  const sorter = sorters[strategy] ?? sorters.overall;
  const selected = state.roster.slice().sort(sorter).slice(0, GAME_CONFIG.officialMatchSize);
  if (selected.length < GAME_CONFIG.officialMatchSize) return false;
  match.lineupIds = selected.map((robot) => robot.id);
  return true;
}

export function arrangeLineup(state, match, order = 'strongFirst') {
  if (!match || match.status !== 'setup') return false;
  const robotMap = new Map(state.roster.map((robot) => [robot.id, robot]));
  const ids = [...match.lineupIds];
  const compare = (aId, bId) => {
    const a = robotMap.get(aId);
    const b = robotMap.get(bId);
    if (!a || !b) return 0;
    if (order === 'weakFirst') return robotSelectionScore(a) - robotSelectionScore(b);
    if (order === 'veteranFirst') return (b.cohortYear - a.cohortYear) || (robotSelectionScore(b) - robotSelectionScore(a));
    if (order === 'rookieFirst') return (a.cohortYear - b.cohortYear) || (robotSelectionScore(b) - robotSelectionScore(a));
    if (order === 'winsFirst') return ((b.record?.wins ?? 0) - (a.record?.wins ?? 0)) || (robotSelectionScore(b) - robotSelectionScore(a));
    return robotSelectionScore(b) - robotSelectionScore(a);
  };
  if (order === 'random') {
    for (let i = ids.length - 1; i > 0; i -= 1) {
      const j = randomInt(0, i);
      [ids[i], ids[j]] = [ids[j], ids[i]];
    }
  } else {
    ids.sort(compare);
  }
  match.lineupIds = ids;
  return true;
}

export function updateLineupSlot(match, slotIndex, robotId) {
  if (match.status !== 'setup') return false;
  const existingIndex = match.lineupIds.indexOf(robotId);
  if (existingIndex >= 0) {
    [match.lineupIds[slotIndex], match.lineupIds[existingIndex]] = [match.lineupIds[existingIndex], match.lineupIds[slotIndex]];
  } else {
    match.lineupIds[slotIndex] = robotId;
  }
  return true;
}

export function moveLineupSlot(match, slotIndex, direction) {
  if (match.status !== 'setup') return false;
  const nextIndex = slotIndex + direction;
  if (nextIndex < 0 || nextIndex >= match.lineupIds.length) return false;
  [match.lineupIds[slotIndex], match.lineupIds[nextIndex]] = [match.lineupIds[nextIndex], match.lineupIds[slotIndex]];
  return true;
}

export function startOfficialMatch(match) {
  if (match.status !== 'setup' || match.lineupIds.length !== GAME_CONFIG.officialMatchSize) return false;
  if (new Set(match.lineupIds).size !== GAME_CONFIG.officialMatchSize) return false;
  match.status = 'running';
  match.currentBout = 0;
  match.allyWins = 0;
  match.enemyWins = 0;
  match.results = [];
  return true;
}

function addGrowth(value, amount) {
  return clamp(value + amount, GAME_CONFIG.statMin, GAME_CONFIG.battleGrowthStatCap);
}

function applyBattleGrowth(robot, result, won) {
  const baseGrowth = won ? GAME_CONFIG.battleWinGrowth : GAME_CONFIG.battleLossGrowth;
  const touched = new Set();

  for (const comparison of result.comparisons) {
    const slot = comparison.slot;
    if (slot.kind === 'base') {
      const key = `${slot.groupKey}:${slot.statName}`;
      if (touched.has(key)) continue;
      touched.add(key);
      const mult = robot.growthMultipliers[slot.groupKey][slot.statName];
      robot.stats[slot.groupKey][slot.statName] = addGrowth(
        robot.stats[slot.groupKey][slot.statName],
        baseGrowth * mult,
      );
    } else {
      const key = `weapon:${slot.axis}`;
      if (touched.has(key)) continue;
      touched.add(key);
      const mult = robot.weaponGrowthMultipliers[slot.axis];
      robot.weaponStats[slot.axis] = addGrowth(robot.weaponStats[slot.axis], baseGrowth * mult);
    }
  }
}

export function runNextBout(state, match) {
  if (match.status !== 'running') return null;
  if (match.currentBout >= GAME_CONFIG.officialMatchSize) return null;

  const slot = match.currentBout;
  const allyId = match.lineupIds[slot];
  const enemyId = match.enemyLineupIds[slot];
  const ally = state.roster.find((robot) => robot.id === allyId);
  const enemy = match.enemyRoster.find((robot) => robot.id === enemyId);
  if (!ally || !enemy) return null;

  const progressionMatch = match.context?.type !== 'scrimmage';
  const result = simulateBattle(ally, enemy, { official: progressionMatch, prestige: match.context?.prestige ?? 1, winChanceTable: battleWinTable(state.settings) });
  const allyWon = result.winner === 'a';
  if (allyWon) match.allyWins += 1;
  else match.enemyWins += 1;

  let abilityChanges = [];
  if (progressionMatch) {
    ally.record ??= { wins: 0, losses: 0 };
    if (allyWon) ally.record.wins += 1;
    else ally.record.losses += 1;
    applyBattleGrowth(ally, result, allyWon);
    abilityChanges = evaluateOfficialBoutAbilityChanges(ally, enemy, result, allyWon);
  }

  const bout = {
    slot,
    allyId,
    enemyId,
    result,
    allyWon,
    abilityChanges,
  };
  match.results.push(bout);
  match.currentBout += 1;

  if (match.currentBout >= GAME_CONFIG.officialMatchSize) {
    match.status = 'complete';
    match.teamWon = match.allyWins > match.enemyWins;
    if (progressionMatch) {
      state.teamRecord ??= { wins: 0, losses: 0 };
      if (match.teamWon) state.teamRecord.wins += 1;
      else state.teamRecord.losses += 1;
    }
  }

  return bout;
}

export function substituteFutureSlot(state, match, slotIndex, benchRobotId) {
  if (match.status !== 'running') return { ok: false, reason: '試合中ではありません。' };
  if (match.substitutionsRemaining <= 0) return { ok: false, reason: '交代回数を使い切っています。' };
  if (slotIndex < match.currentBout || slotIndex >= GAME_CONFIG.officialMatchSize) {
    return { ok: false, reason: '未出場の枠だけ交代できます。' };
  }

  const playedIds = new Set(match.results.map((result) => result.allyId));
  if (playedIds.has(benchRobotId)) return { ok: false, reason: '出場済みの機体は再出場できません。' };
  if (match.lineupIds.includes(benchRobotId)) return { ok: false, reason: 'その機体はすでに出場予定です。' };
  if (!state.roster.some((robot) => robot.id === benchRobotId)) return { ok: false, reason: '機体が見つかりません。' };

  match.lineupIds[slotIndex] = benchRobotId;
  match.substitutionsRemaining -= 1;
  return { ok: true };
}

export function availableBenchRobots(state, match) {
  const scheduled = new Set(match.lineupIds);
  const played = new Set(match.results.map((result) => result.allyId));
  return state.roster.filter((robot) => !scheduled.has(robot.id) && !played.has(robot.id));
}

export function officialMatchSummary(match) {
  if (!match) return '公式戦未準備';
  if (match.status === 'setup') return '編成中';
  if (match.status === 'running') return `${match.allyWins}-${match.enemyWins} / 第${match.currentBout + 1}戦へ`;
  return `${match.allyWins}-${match.enemyWins} / ${match.teamWon ? 'チーム勝利' : 'チーム敗北'}`;
}

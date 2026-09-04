import { RIVAL_TEAMS } from '../data/rivalTeamDefinitions.js?v=4.8';
import { MANUFACTURERS } from '../data/manufacturers.js?v=4.8';
import { getSeriesForManufacturer } from '../data/seriesDefinitions.js?v=4.8';
import { WEAPON_CATEGORIES, WEAPON_KEYS } from '../data/weaponDefinitions.js?v=4.8';
import { GROUP_KEYS, STAT_GROUPS } from '../data/statDefinitions.js?v=4.8';
import { clamp } from '../utils/random.js?v=4.8';

function seededIndex(state, context, length) {
  const text = `${state.year}|${context?.tournamentId ?? 'scrim'}|${context?.roundIndex ?? 0}|${state.teamRecord?.wins ?? 0}|${state.teamRecord?.losses ?? 0}`;
  let h = 2166136261;
  for (const ch of text) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  return Math.abs(h >>> 0) % length;
}
function desiredRank(context) {
  if (context?.type !== 'tournament') return 2;
  const prestige = Number(context?.prestige ?? 1);
  const roundIndex = Number(context?.roundIndex ?? 0);
  return Math.max(1, Math.min(5, Math.round((prestige + 1) / 2) + Math.min(2, roundIndex)));
}
function affinityMatches(team, context) {
  if (team.tournamentAffinity === 'any' || context?.type !== 'tournament') return true;
  const round = Number(context?.roundIndex ?? 0);
  const band = round <= 0 ? 'early' : round <= 2 ? 'middle' : 'late';
  return team.tournamentAffinity === band;
}
export function selectRivalTeam(state, context) {
  const target = desiredRank(context);
  let candidates = RIVAL_TEAMS.filter(team => Math.abs(Number(team.rankScore ?? 2) - target) <= 1 && affinityMatches(team, context));
  if (!candidates.length) candidates = RIVAL_TEAMS.filter(team => Math.abs(Number(team.rankScore ?? 2) - target) <= 1);
  if (!candidates.length) candidates = RIVAL_TEAMS;
  // 因縁が深い相手は大会で再登場する余地を少しだけ増やす。固定化はせず、通常抽選が主役のまま。
  if (context?.type === 'tournament') {
    const history = ensureRivalHistory(state);
    const familiar = candidates.filter((team) => Number(history[team.id]?.rivalryPoints ?? 0) >= 6 && Number(history[team.id]?.meetings ?? 0) >= 2);
    if (familiar.length && seededIndex(state, { ...context, tournamentId: `${context?.tournamentId ?? ''}:rematch` }, 100) < 22) {
      return familiar[seededIndex(state, { ...context, tournamentId: `${context?.tournamentId ?? ''}:familiar` }, familiar.length)];
    }
  }
  return candidates[seededIndex(state, context, candidates.length)];
}

export function ensureRivalHistory(state) {
  state.rivalHistory ??= {};
  return state.rivalHistory;
}
export function rivalHistoryEntry(state, rivalId) {
  const history = ensureRivalHistory(state);
  history[rivalId] ??= { meetings:0, wins:0, losses:0, currentStreak:0, rivalryPoints:0, closeGames:0, tournamentMeetings:0, finalMeetings:0, titleDenied:0, titleWonAgainst:0, nemesisSinceYear:null, lastYear:null, lastTournamentName:'', lastRoundName:'', lastScore:'', lastResult:'' };
  const entry = history[rivalId];
  entry.rivalryPoints ??= 0; entry.closeGames ??= 0; entry.tournamentMeetings ??= 0; entry.finalMeetings ??= 0; entry.titleDenied ??= 0; entry.titleWonAgainst ??= 0; entry.nemesisSinceYear ??= null;
  return history[rivalId];
}
export function recordRivalResult(state, match) {
  const rivalId = match?.context?.rivalTeamId;
  if (!rivalId || match?.rivalHistoryRecorded || match?.status !== 'complete') return null;
  const entry = rivalHistoryEntry(state, rivalId);
  entry.meetings += 1;
  if (match.teamWon) {
    entry.wins += 1;
    entry.currentStreak = entry.currentStreak >= 0 ? entry.currentStreak + 1 : 1;
    entry.lastResult = 'W';
  } else {
    entry.losses += 1;
    entry.currentStreak = entry.currentStreak <= 0 ? entry.currentStreak - 1 : -1;
    entry.lastResult = 'L';
  }
  const close = Math.abs(Number(match.allyWins ?? 0) - Number(match.enemyWins ?? 0)) <= 2;
  const tournament = match.context?.type === 'tournament';
  const roundName = String(match.context?.roundName ?? '');
  const finalRound = tournament && roundName.includes('決勝') && !roundName.includes('準決勝');
  const repeatMeeting = entry.meetings >= 2;
  if (close) entry.closeGames += 1;
  if (tournament) entry.tournamentMeetings += 1;
  if (finalRound) entry.finalMeetings += 1;
  if (finalRound && !match.teamWon) entry.titleDenied += 1;
  if (finalRound && match.teamWon) entry.titleWonAgainst += 1;
  let gained = 1;
  if (close) gained += 1;
  if (tournament) gained += 1;
  if (repeatMeeting) gained += 1;
  if (finalRound) gained += 2;
  if (!match.teamWon) gained += 1;
  if ((entry.currentStreak ?? 0) <= -2) gained += 1;
  entry.rivalryPoints += gained;
  if (entry.rivalryPoints >= 10 && entry.nemesisSinceYear == null) entry.nemesisSinceYear = Number(state.year ?? 1);
  entry.lastYear = Number(state.year ?? 1);
  entry.lastTournamentName = match.context?.tournamentName ?? '';
  entry.lastRoundName = match.context?.roundName ?? '';
  entry.lastScore = `${match.allyWins}-${match.enemyWins}`;
  match.rivalHistoryRecorded = true;
  return entry;
}


export function rivalryTier(entry) {
  const points = Number(entry?.rivalryPoints ?? 0);
  if (points >= 20) return { id:'archnemesis', label:'最大の宿敵', rank:4 };
  if (points >= 10) return { id:'nemesis', label:'宿敵', rank:3 };
  if (points >= 6) return { id:'rival', label:'因縁', rank:2 };
  if (points >= 3) return { id:'familiar', label:'顔なじみ', rank:1 };
  return { id:'none', label:'', rank:0 };
}

export function rivalArchiveRows(state) {
  const history = ensureRivalHistory(state);
  return Object.entries(history).map(([id, entry]) => {
    const team = RIVAL_TEAMS.find((item) => item.id === id);
    if (!team || !entry?.meetings) return null;
    return { id, team, entry, tier: rivalryTier(entry) };
  }).filter(Boolean).sort((a,b) =>
    (b.tier.rank - a.tier.rank) ||
    (Number(b.entry.rivalryPoints ?? 0) - Number(a.entry.rivalryPoints ?? 0)) ||
    (Number(b.entry.meetings ?? 0) - Number(a.entry.meetings ?? 0))
  );
}

function generationSeries(team, manufacturerId) {
  const all = getSeriesForManufacturer(manufacturerId);
  const generation = Math.max(1, Math.min(11, Number(team.generation ?? 1)));
  return all.filter(s => (Number(s.seriesNumber ?? 1) >= 201 ? 11 : Math.ceil(Number(s.seriesNumber ?? 1) / 20)) === generation);
}

export function rivalGenerationOptions(team, slot) {
  let manufacturerId = null, seriesId = null, weaponKey = null;
  if (team.traits.includes('manufacturer') || team.traits.includes('series')) manufacturerId = team.manufacturerId;
  if (team.traits.includes('mixedManufacturers')) manufacturerId = MANUFACTURERS[slot % MANUFACTURERS.length].id;
  if (team.traits.includes('series')) {
    const list = generationSeries(team, manufacturerId ?? team.manufacturerId);
    seriesId = list[0]?.id ?? getSeriesForManufacturer(manufacturerId ?? team.manufacturerId)[0]?.id ?? null;
    manufacturerId ??= team.manufacturerId;
  } else if (team.traits.includes('generation') || team.traits.includes('oldGeneration') || team.traits.includes('latestGeneration')) {
    manufacturerId ??= MANUFACTURERS[(slot + team.generation) % MANUFACTURERS.length].id;
    const g = team.traits.includes('oldGeneration') ? 1 + (team.generation % 3) : team.traits.includes('latestGeneration') ? 11 : team.generation;
    const list = getSeriesForManufacturer(manufacturerId).filter(s => (Number(s.seriesNumber ?? 1) >= 201 ? 11 : Math.ceil(Number(s.seriesNumber ?? 1) / 20)) === g);
    seriesId = list[slot % Math.max(1,list.length)]?.id ?? null;
  }
  if (team.traits.includes('singleWeapon')) weaponKey = team.weaponKey;
  if (team.traits.includes('singleRange')) {
    const range = WEAPON_CATEGORIES[team.weaponKey].range;
    const keys = WEAPON_KEYS.filter(k => WEAPON_CATEGORIES[k].range === range);
    weaponKey = keys[slot % keys.length];
  }
  return { manufacturerId, seriesId, weaponKey };
}

function bumpGroup(robot, groupKey, amount) {
  for (const stat of STAT_GROUPS[groupKey].stats) robot.stats[groupKey][stat] = clamp(robot.stats[groupKey][stat] + amount, 1, 150);
}
export function applyRivalTraits(robot, team, slot) {
  const t = team.traits;
  if (t.includes('superGroup')) bumpGroup(robot, team.groupKey, 22 + team.strength * 2);
  if (t.includes('superStat')) robot.stats[team.groupKey][team.statName] = clamp(robot.stats[team.groupKey][team.statName] + 38, 1, 150);
  if (t.includes('aceAndFodder')) {
    const delta = slot < 3 ? 28 : -10;
    for (const g of GROUP_KEYS) bumpGroup(robot, g, delta);
  }
  if (t.includes('uniform')) for (const g of GROUP_KEYS) for (const stat of STAT_GROUPS[g].stats) robot.stats[g][stat] = 68 + team.strength * 2;
  if (t.includes('reliabilityTank')) robot.reliability = 98;
  if (t.includes('unstableMonster')) { robot.reliability = 42; for (const g of GROUP_KEYS) bumpGroup(robot, g, 15); }
  if (t.includes('abilityHeavy')) robot.specialAbilities = [...new Set([...(robot.specialAbilities ?? []), 'giantKiller', 'clutchPerformer'])];
  if (t.includes('abilityLight')) robot.specialAbilities = [];
  return robot;
}

const LABELS = {
 manufacturer: t=>`全機を${t.manufacturerName}で統一`, generation:t=>`第${t.generation}世代中心`, series:()=>`同一系列だけで15機を揃える異例の編成`,
 singleWeapon:t=>`${t.weaponName}偏執編成`, singleRange:t=>`${WEAPON_CATEGORIES[t.weaponKey].range}へ極端に集中`, superGroup:t=>`${t.groupName}を超特化育成`, superStat:t=>`${t.statName}だけを異常な水準まで育成`,
 aceAndFodder:()=>`上位3機へ資源を集中した一点豪華型`, uniform:()=>`15機をほぼ同一水準に揃える均一型`, reliabilityTank:()=>`信頼性最優先`, unstableMonster:()=>`低信頼性と引き換えに基礎性能を極端に強化`,
 abilityHeavy:()=>`特殊能力を大量に積む構成`, abilityLight:()=>`特殊能力を捨て基礎性能を優先`, oldGeneration:()=>`旧世代機を意図的に運用`, latestGeneration:()=>`最新第11世代中心`, mixedManufacturers:()=>`メーカーを意図的に分散した混成編成`
};
export function rivalTraitLabels(team) { return team.traits.map(id => LABELS[id]?.(team)).filter(Boolean); }
export function rivalAnalysis(team, level=0, history=null) {
  const labels = rivalTraitLabels(team);
  if (level <= 0) return '詳細な傾向はまだ解析できていません。';
  const rank = team.rankLabel ? `格付けは「${team.rankLabel}」` : '';
  const tier = rivalryTier(history);
  const past = history?.meetings ? `過去${history.meetings}戦で${history.wins}勝${history.losses}敗${tier.rank >= 2 ? `、現在は「${tier.label}」認定` : ''}` : '';
  if (level === 1) return `${labels[0] ?? '独自の編成思想'}が特徴です。${rank ? ` ${rank}です。` : ''}`;
  if (level === 2) return `${labels.slice(0,2).join('。さらに、')}。運用の軸は「${team.scoutingFocus}」です。${past ? ` ${past}。` : ''}`;
  if (level === 3) return `${labels.join('。')}。チーム思想は「${team.philosophy}」。その代わり「${team.sacrifice}」を割り切っています。`;
  if (level === 4) return `${labels.join('。')}。要注意は「${team.scoutingFocus}」。弱点は「${team.sacrifice}」を捨て気味な点です。`;
  return `${labels.join('。')}。思想は「${team.philosophy}」、指導傾向は「${team.coachStyle}」。弱点は「${team.sacrifice}」。狙い目は、${team.counterHint}ことです。${past ? ` ${past}。` : ''}`;
}

export function rivalManagerLine(team, level=0, history=null) {
  const labels = rivalTraitLabels(team);
  const prefix = `……${team.name}`;
  if (history?.meetings) {
    const tier = rivalryTier(history);
    if (tier.id === 'archnemesis') return `${prefix}。もう説明はいりませんね。最大の宿敵です。通算${history.meetings}戦${history.wins}勝${history.losses}敗。${level >= 4 ? `今回は「${team.sacrifice}」を突きたいです。` : '決着をつけましょう。'}`;
    if (tier.id === 'nemesis' && (history.currentStreak ?? 0) < 0) return `${prefix}。宿敵です。通算${history.meetings}戦${history.wins}勝${history.losses}敗。${level >= 3 ? `前と同じ正面勝負は避けて、「${team.sacrifice}」を狙いましょう。` : 'ここで流れを変えたいですね。'}`;
    if (tier.id === 'nemesis') return `${prefix}。宿敵との再戦です。通算${history.meetings}戦${history.wins}勝${history.losses}敗。${level >= 3 ? `相手は「${team.philosophy}」を崩してこないはずです。` : 'いつも通りにはいきません。'}`;
    if ((history.currentStreak ?? 0) <= -2) return `${prefix}です。現在${Math.abs(history.currentStreak)}連敗中。${level >= 3 ? `今回は「${team.sacrifice}」を突いて流れを変えたいですね。` : '今度こそ借りを返したいですね。'}`;
    if ((history.currentStreak ?? 0) >= 2) return `${prefix}ですね。こちらは現在${history.currentStreak}連勝中ですが、${level >= 3 ? `相手の軸はまだ「${team.scoutingFocus}」です。` : '前と同じ相手だと思わない方がよさそうです。'}`;
    if (history.lastResult === 'L') return `${prefix}。前回は${history.lastScore || '敗戦'}でした。${level >= 3 ? `今度は「${team.sacrifice}」を狙って対策を変えましょう。` : '対策を変えてきましょう。'}`;
    if (history.lastResult === 'W') return `${prefix}とは再戦ですね。前回は勝っていますが、${level >= 3 ? `「${team.scoutingFocus}」は引き続き警戒です。` : '油断はできません。'}`;
  }
  if (level <= 0) return `${prefix}ですね。まずは相手の出方を見ましょう。`;
  if (level === 1) return `${prefix}は、${labels[0] ?? '独特な戦い方'}が特徴みたいです。`;
  if (level === 2) return `${prefix}、${labels.slice(0,2).join('。それに、')}。かなり変わった編成ですね。`;
  if (level === 3) return `${prefix}。このチームは「${team.philosophy}」という考え方がはっきりしています。`;
  if (level === 4) return `${prefix}。警戒するのは「${team.scoutingFocus}」。ただ、「${team.sacrifice}」は薄そうです。`;
  return `${prefix}。特徴は把握できています。「${team.scoutingFocus}」を正面から受けず、${team.counterHint}のが良さそうです。`;
}


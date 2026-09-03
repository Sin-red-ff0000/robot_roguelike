import { GAME_CONFIG } from '../config.js?v=3.7';
import { TOURNAMENTS, TOURNAMENT_IDS } from '../data/tournamentDefinitions.js?v=3.7';
import { generateCustomPart } from './partSystem.js?v=3.7';

export function createTournamentYearState() {
  return Object.fromEntries(TOURNAMENT_IDS.map((id) => [id, {
    id,
    status: 'locked',
    roundIndex: 0,
    wins: 0,
    losses: 0,
    bestRound: -1,
    champion: false,
  }]));
}

export function ensureTournamentYear(state) {
  state.tournamentYear ??= { year: state.year, entries: createTournamentYearState() };
  if (state.tournamentYear.year !== state.year) {
    state.tournamentYear = { year: state.year, entries: createTournamentYearState() };
  }
  for (const id of TOURNAMENT_IDS) {
    state.tournamentYear.entries[id] ??= createTournamentYearState()[id];
  }
  refreshTournamentAvailability(state);
  return state.tournamentYear;
}


export function tournamentAvailableTurn(state, idOrDef) {
  const def = typeof idOrDef === 'string' ? TOURNAMENTS[idOrDef] : idOrDef;
  if (!def) return 1;
  const totalTurns = Number(state?.settings?.trainingTurns ?? GAME_CONFIG.trainingTurnsPerYear);
  const ratio = Number(def.availableRatio ?? (def.availableTurn / 30));
  return Math.max(1, Math.min(totalTurns, Math.round(totalTurns * ratio)));
}

export function refreshTournamentAvailability(state) {
  if (!state.tournamentYear) return;
  for (const id of TOURNAMENT_IDS) {
    const def = TOURNAMENTS[id];
    const entry = state.tournamentYear.entries[id];
    if (entry.status === 'locked' && state.turn >= tournamentAvailableTurn(state, def)) entry.status = 'available';
  }
}

export function markMissedTournaments(state) {
  ensureTournamentYear(state);
  for (const entry of Object.values(state.tournamentYear.entries)) {
    if (entry.status === 'locked' || entry.status === 'available' || entry.status === 'active') {
      entry.status = 'missed';
    }
  }
}

export function tournamentEntry(state, id) {
  ensureTournamentYear(state);
  return state.tournamentYear.entries[id];
}

export function currentTournamentRound(state, id) {
  const def = TOURNAMENTS[id];
  const entry = tournamentEntry(state, id);
  return def?.rounds?.[entry.roundIndex] ?? null;
}

export function canStartTournamentRound(state, id) {
  const entry = tournamentEntry(state, id);
  return ['available', 'active'].includes(entry.status) && !state.officialMatch;
}

export function tournamentMatchOptions(state, id) {
  const def = TOURNAMENTS[id];
  const entry = tournamentEntry(state, id);
  if (!def || !entry) return null;
  const round = def.rounds[entry.roundIndex];
  if (!round) return null;
  if (entry.status === 'available') entry.status = 'active';
  state.career ??= {};
  if (!entry.entered) {
    entry.entered = true;
    state.career.tournamentEntries = (state.career.tournamentEntries ?? 0) + 1;
  }
  return {
    difficulty: round.difficulty,
    context: {
      type: 'tournament',
      tournamentId: id,
      tournamentName: def.name,
      roundIndex: entry.roundIndex,
      roundName: round.name,
      prestige: round.prestige,
    },
  };
}

function awardRoundPart(state, def, round) {
  const part = generateCustomPart({ rarityKey: round.rewardRarity, rarityBias: Math.max(0, (round.prestige ?? 1) - 2) });
  part.source = `${def.name} ${round.name}`;
  state.partInventory.push(part);
  return part;
}

function awardChampionPart(state, def) {
  const part = generateCustomPart({ rarityKey: def.championRewardRarity, forceAbility: true });
  part.name = `${def.name} 優勝記念特注パーツ`;
  part.source = `${def.name} 優勝`;
  part.tournamentSpecial = true;
  state.partInventory.push(part);
  return part;
}

export function resolveTournamentMatch(state, match) {
  const context = match?.context;
  if (!context || context.type !== 'tournament' || match.status !== 'complete' || match.tournamentResolved) return null;
  const def = TOURNAMENTS[context.tournamentId];
  const entry = tournamentEntry(state, context.tournamentId);
  const round = def.rounds[context.roundIndex];
  match.tournamentResolved = true;
  entry.bestRound = Math.max(entry.bestRound ?? -1, context.roundIndex);
  const logs = [];

  if (match.teamWon) {
    entry.wins += 1;
    const reward = awardRoundPart(state, def, round);
    logs.push(`${def.name} ${round.name}勝利。${reward.rarityLabel}カスタムパーツを獲得。`);
    const finalRound = context.roundIndex >= def.rounds.length - 1;
    if (finalRound) {
      entry.status = 'champion';
      entry.champion = true;
      state.career ??= {};
      state.career.championships = (state.career.championships ?? 0) + 1;
      state.career.tournamentWins = (state.career.tournamentWins ?? 0) + 1;
      const championPart = awardChampionPart(state, def);
      logs.unshift(`${def.name}優勝！ 特別報酬「${championPart.name}」を獲得。`);
    } else {
      entry.roundIndex += 1;
      entry.status = 'active';
      state.career ??= {};
      state.career.tournamentWins = (state.career.tournamentWins ?? 0) + 1;
    }
  } else {
    entry.losses += 1;
    entry.status = 'eliminated';
    logs.push(`${def.name} ${round.name}で敗退。`);
    const consolationChance = Math.min(0.75, GAME_CONFIG.tournamentLossConsolationChance + (round.prestige ?? 1) * 0.025);
    if (Math.random() < consolationChance) {
      const consolationRarity = (round.prestige ?? 1) >= 5 ? 'high' : 'good';
      const consolation = generateCustomPart({ rarityKey: consolationRarity, challenge: Math.random() < 0.18 });
      consolation.source = `${def.name} 敗退後技術フィードバック`;
      state.partInventory.push(consolation);
      logs.push(`大会データ提供の謝礼として${consolation.rarityLabel}カスタムパーツを獲得。`);
    }
  }

  return { logs, entry, definition: def };
}

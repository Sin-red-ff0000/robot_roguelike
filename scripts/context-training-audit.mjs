import { generateTrainingChoices } from '../src/systems/trainingSystem.js?v=4.7';

const BASE = {
  trainingFacilityLevel: 5,
  weaponsLabLevel: 5,
  year: 3,
  winStreak: 0,
  lossStreak: 0,
  recentWins: 2,
  recentLosses: 2,
  rookieRatio: 0.2,
  seniorRatio: 0.2,
  dominantWeaponRange: '',
  dominantWeaponRatio: 0,
  tournamentUpcoming: false,
  lastTournamentOutcome: '',
  lastTournamentTurnsAgo: 99,
};

function sample(context, iterations = 5000) {
  const labels = new Map();
  for (let i = 0; i < iterations; i += 1) {
    const choices = generateTrainingChoices(5, [], 0, { ...BASE, ...context });
    for (const choice of choices) labels.set(choice.label, (labels.get(choice.label) ?? 0) + 1);
  }
  return labels;
}

const scenarios = [
  ['champion', { lastTournamentOutcome:'champion', lastTournamentTurnsAgo:1, lastTournamentName:'全国統合戦' }, '優勝仕様再現試験'],
  ['eliminated', { lastTournamentOutcome:'eliminated', lastTournamentTurnsAgo:1, lastTournamentName:'全国統合戦' }, '大会敗退再調整'],
  ['recentWins', { recentWins:4, recentLosses:1 }, '勝因再現演習'],
  ['recentLosses', { recentWins:1, recentLosses:4 }, '敗因検証演習'],
  ['closeHeavy', { dominantWeaponRange:'近距離', dominantWeaponRatio:0.53 }, '近接編隊連携'],
  ['rangedHeavy', { dominantWeaponRange:'遠距離', dominantWeaponRatio:0.47 }, '遠距離火器連携'],
  ['specialHeavy', { dominantWeaponRange:'特殊兵装', dominantWeaponRatio:0.40 }, '特殊兵装統合演習'],
];

const results = {};
for (const [name, context, expected] of scenarios) {
  const labels = sample(context);
  const count = labels.get(expected) ?? 0;
  if (count <= 0) throw new Error(`${name}: ${expected} did not appear`);
  results[name] = { expected, count };
}

const expired = sample({ lastTournamentOutcome:'champion', lastTournamentTurnsAgo:4 }, 3000);
if ((expired.get('優勝仕様再現試験') ?? 0) > 0) throw new Error('champion follow-up leaked after 3 turns');

const priority = sample({
  lastTournamentOutcome:'eliminated', lastTournamentTurnsAgo:1,
  tournamentUpcoming:true, tournamentTurnsAway:1,
}, 5000);
if ((priority.get('大会敗退再調整') ?? 0) <= 0) throw new Error('priority: tournament loss variant missing');
if ((priority.get('大会前制御調整') ?? 0) > 0) throw new Error('priority: lower-priority tournament-upcoming control variant leaked');

console.log(JSON.stringify({ ok:true, results, expiredChampionCount: expired.get('優勝仕様再現試験') ?? 0, priority: {
  eliminated: priority.get('大会敗退再調整') ?? 0,
  upcomingControl: priority.get('大会前制御調整') ?? 0,
}}, null, 2));

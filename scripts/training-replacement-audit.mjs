import { generateTrainingChoices } from '../src/systems/trainingSystem.js';

function sample(level, loops = 12000) {
  let total = 0;
  let promoted = 0;
  let extreme = 0;
  let duplicates = 0;
  const labels = new Map();
  for (let i = 0; i < loops; i += 1) {
    const choices = generateTrainingChoices(level >= 3 ? 5 : level >= 1 ? 4 : 3, [], 0, {
      trainingFacilityLevel: level,
      weaponsLabLevel: level,
      year: 3,
    });
    const keys = choices.map(x => x.groupKey);
    if (new Set(keys).size !== keys.length) duplicates += 1;
    for (const c of choices) {
      total += 1;
      if (c.facilityPromotion) promoted += 1;
      if (c.nature === '極限') extreme += 1;
      labels.set(c.label, (labels.get(c.label) ?? 0) + 1);
    }
  }
  return {
    level,
    total,
    promotedRate: Number((promoted / total).toFixed(3)),
    extremeRate: Number((extreme / total).toFixed(3)),
    duplicateChoiceSets: duplicates,
    uniqueLabelsSeen: labels.size,
  };
}

const result = [0,1,2,3,4,5].map(level => sample(level));
const ok = result[0].promotedRate === 0
  && result[1].promotedRate > 0
  && result[5].promotedRate > result[1].promotedRate
  && result.every(x => x.duplicateChoiceSets === 0)
  && result[5].extremeRate > 0;
console.log(JSON.stringify({ ok, result }, null, 2));
if (!ok) process.exit(1);


const contextCases = {
  tournament: { trainingFacilityLevel:5, weaponsLabLevel:5, year:3, tournamentUpcoming:true, tournamentTurnsAway:1, winStreak:0, lossStreak:0, rookieRatio:0.2, seniorRatio:0.2 },
  winStreak: { trainingFacilityLevel:5, weaponsLabLevel:5, year:3, winStreak:4, lossStreak:0, rookieRatio:0.2, seniorRatio:0.2 },
  lossStreak: { trainingFacilityLevel:5, weaponsLabLevel:5, year:3, winStreak:0, lossStreak:4, rookieRatio:0.2, seniorRatio:0.2 },
  rookieHeavy: { trainingFacilityLevel:5, weaponsLabLevel:5, year:3, winStreak:0, lossStreak:0, rookieRatio:0.5, seniorRatio:0.1 },
  seniorHeavy: { trainingFacilityLevel:5, weaponsLabLevel:5, year:3, winStreak:0, lossStreak:0, rookieRatio:0.1, seniorRatio:0.5 },
};
const expected = {
  tournament: ['大会前制御調整','大会前索敵調整'],
  winStreak: ['勝勢維持演習'],
  lossStreak: ['戦術再構築演習'],
  rookieHeavy: ['新人連携演習'],
  seniorHeavy: ['最終仕様稼働試験'],
};
const contextResult = {};
for (const [name, context] of Object.entries(contextCases)) {
  const seen = new Set();
  let contextual = 0;
  let total = 0;
  for (let i = 0; i < 5000; i += 1) {
    for (const choice of generateTrainingChoices(5, [], 0, context)) {
      total += 1;
      if (choice.contextualVariant) {
        contextual += 1;
        seen.add(choice.label);
      }
    }
  }
  contextResult[name] = { rate:Number((contextual / total).toFixed(3)), labels:[...seen] };
}
const contextOk = Object.entries(expected).every(([name, labels]) => labels.every((label) => contextResult[name].labels.includes(label)))
  && Object.values(contextResult).every((item) => item.rate > 0 && item.rate < 0.20);
console.log(JSON.stringify({ contextOk, contextResult }, null, 2));
if (!contextOk) process.exit(1);

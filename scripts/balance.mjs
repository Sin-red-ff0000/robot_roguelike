import { generateCohort } from '../src/systems/robotGenerator.js';
import { applyTrainingTurn, generateTrainingChoices } from '../src/systems/trainingSystem.js';
import { generateCustomPart, useCustomPart } from '../src/systems/partSystem.js';
import { simulateBattle } from '../src/systems/battleSystem.js';
import { robotSelectionScore } from '../src/systems/teamMatchSystem.js';
import { GROUP_KEYS } from '../src/data/statDefinitions.js';

const avg = (values) => values.reduce((sum, value) => sum + value, 0) / Math.max(1, values.length);
const percentile = (values, ratio) => {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * ratio))];
};
const allBaseStats = (robot) => GROUP_KEYS.flatMap((groupKey) => Object.values(robot.stats[groupKey]));
const averageBase = (robot) => avg(allBaseStats(robot));
const averageWeapon = (robot) => avg(Object.values(robot.weaponStats));

function trainRobot(robot, turns = 90, mode = 'balanced') {
  if (mode === 'weapon') robot.individualTrainingTarget = `weapon:${robot.weaponKey}`;
  for (let turn = 0; turn < turns; turn += 1) {
    const choices = generateTrainingChoices(3, [], 0.08);
    let selected = choices[Math.floor(Math.random() * choices.length)];
    if (mode === 'specialist') {
      selected = choices.find((choice) => choice.groupKey === robot.favoriteGroup) ?? selected;
    }
    if (mode === 'balanced') {
      const averages = Object.fromEntries(GROUP_KEYS.map((key) => [key, avg(Object.values(robot.stats[key]))]));
      const weakest = GROUP_KEYS.slice().sort((a, b) => averages[a] - averages[b])[0];
      selected = choices.find((choice) => choice.groupKey === weakest) ?? selected;
    }
    applyTrainingTurn([robot], selected);
  }
  return robot;
}

function trainSample(count, mode) {
  return generateCohort({ year: 1, cohortYear: 1, count }).map((robot) => trainRobot(robot, 90, mode));
}

const samples = {
  balanced: trainSample(240, 'balanced'),
  specialist: trainSample(240, 'specialist'),
  weapon: trainSample(240, 'weapon'),
};

const growthReport = Object.fromEntries(Object.entries(samples).map(([name, robots]) => {
  const base = robots.map(averageBase);
  const weapon = robots.map(averageWeapon);
  return [name, {
    baseMean: Number(avg(base).toFixed(2)),
    baseP10: Number(percentile(base, 0.10).toFixed(2)),
    baseP90: Number(percentile(base, 0.90).toFixed(2)),
    weaponMean: Number(avg(weapon).toFixed(2)),
    weaponP90: Number(percentile(weapon, 0.90).toFixed(2)),
    maxIndividualBaseStat: Number(Math.max(...robots.flatMap(allBaseStats)).toFixed(2)),
  }];
}));

const partRich = generateCohort({ year: 1, cohortYear: 3, count: 120 });
for (const robot of partRich) {
  trainRobot(robot, 90, 'specialist');
  for (let index = 0; index < 24; index += 1) {
    useCustomPart(robot, generateCustomPart({ rarityBias: 1.4 }));
  }
}
const partRichStats = partRich.flatMap(allBaseStats);
const partReport = {
  baseMean: Number(avg(partRich.map(averageBase)).toFixed(2)),
  maxIndividualBaseStat: Number(Math.max(...partRichStats).toFixed(2)),
  p99IndividualBaseStat: Number(percentile(partRichStats, 0.99).toFixed(2)),
  weaponMean: Number(avg(partRich.map(averageWeapon)).toFixed(2)),
  abilityMean: Number(avg(partRich.map((robot) => robot.specialAbilities.length)).toFixed(2)),
  maxAbilities: Math.max(...partRich.map((robot) => robot.specialAbilities.length)),
};

const battlePool = [...samples.balanced, ...samples.specialist, ...samples.weapon];
const ordered = battlePool.slice().sort((a, b) => robotSelectionScore(a) - robotSelectionScore(b));
const lower = ordered.slice(0, Math.floor(ordered.length * 0.30));
const upper = ordered.slice(Math.ceil(ordered.length * 0.70));
let upperWins = 0;
const battles = 4000;
for (let index = 0; index < battles; index += 1) {
  const strong = upper[Math.floor(Math.random() * upper.length)];
  const weak = lower[Math.floor(Math.random() * lower.length)];
  if (simulateBattle(strong, weak).winner === 'a') upperWins += 1;
}

const reliabilityBase = generateCohort({ year: 1, cohortYear: 2, count: 1 })[0];
trainRobot(reliabilityBase, 60, 'balanced');
const reliable = structuredClone(reliabilityBase);
const volatile = structuredClone(reliabilityBase);
reliable.reliability = 96;
volatile.reliability = 48;
let reliableWins = 0;
let volatileWins = 0;
for (let index = 0; index < 4000; index += 1) {
  const result = index % 2 === 0 ? simulateBattle(reliable, volatile) : simulateBattle(volatile, reliable);
  const reliableWon = index % 2 === 0 ? result.winner === 'a' : result.winner === 'b';
  if (reliableWon) reliableWins += 1;
  else volatileWins += 1;
}

const report = {
  ok: true,
  threeYearTraining: growthReport,
  partRich,
  partRichSummary: partReport,
  battleSeparation: {
    battles,
    upper30WinRateVsLower30: Number((upperWins / battles).toFixed(3)),
    lowerMeanScore: Number(avg(lower.map(robotSelectionScore)).toFixed(2)),
    upperMeanScore: Number(avg(upper.map(robotSelectionScore)).toFixed(2)),
  },
  reliabilityCheck: {
    identicalStatsHighReliabilityWinRate: Number((reliableWins / 4000).toFixed(3)),
    lowReliabilityWinRate: Number((volatileWins / 4000).toFixed(3)),
  },
};
// Avoid dumping robot data: print only summaries.
delete report.partRich;
console.log(JSON.stringify(report, null, 2));

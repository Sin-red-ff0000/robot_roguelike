import { STAT_GROUPS } from '../src/data/statDefinitions.js?v=3.4';
import { SERIES_CUSTOM_APTITUDES, SERIES_GROWTH_CURVES, SERIES_INTRINSIC_TRAITS } from '../src/data/seriesDefinitions.js?v=3.4';
import { adjustedCustomPartEffects, useCustomPart } from '../src/systems/partSystem.js?v=3.4';
import { seriesGrowthMultiplier } from '../src/systems/trainingSystem.js?v=3.4';

function assert(condition, message) { if (!condition) throw new Error(message); }
function almost(actual, expected, tolerance = 0.001) { return Math.abs(actual - expected) <= tolerance; }

function baseRobot({ curve='steady', aptitude='balanced', trait='maturePlatform', cohortYear=1 }={}) {
  const stats = Object.fromEntries(Object.entries(STAT_GROUPS).map(([groupKey, group]) => [groupKey, Object.fromEntries(group.stats.map((name) => [name, 50]))]));
  return {
    manufacturerId:'kirishima', cohortYear,
    stats,
    growthMultipliers:Object.fromEntries(Object.entries(STAT_GROUPS).map(([groupKey, group]) => [groupKey, Object.fromEntries(group.stats.map((name) => [name, 1]))])),
    weaponKey:'blade', weaponStats:{power:50,accuracy:50,control:50,response:50,stability:50,efficiency:50},
    weaponGrowthMultipliers:{power:1,accuracy:1,control:1,response:1,stability:1,efficiency:1},
    weaponCategoryStats:{blade:{power:50,accuracy:50,control:50,response:50,stability:50,efficiency:50}},
    resistances:{衝撃:50,貫通:50,切断:50,熱:50,爆発:50,電磁:50}, reliability:70,
    seriesGrowthCurve:{...SERIES_GROWTH_CURVES[curve]},
    seriesCustomAptitude:JSON.parse(JSON.stringify(SERIES_CUSTOM_APTITUDES[aptitude])),
    seriesIntrinsicTrait:{...SERIES_INTRINSIC_TRAITS[trait]},
    specialAbilities:[], customHistory:[],
  };
}

const growth = {
  earlyYear1: seriesGrowthMultiplier(baseRobot({curve:'early',cohortYear:1}), 'output'),
  earlyYear3: seriesGrowthMultiplier(baseRobot({curve:'early',cohortYear:3}), 'output'),
  lateYear1: seriesGrowthMultiplier(baseRobot({curve:'late',cohortYear:1}), 'output'),
  lateYear3: seriesGrowthMultiplier(baseRobot({curve:'late',cohortYear:3}), 'output'),
  finalBurstYear3: seriesGrowthMultiplier(baseRobot({curve:'finalburst',trait:'finalYearBurst',cohortYear:3}), 'output'),
  weaponPurist: seriesGrowthMultiplier(baseRobot({curve:'steady',trait:'weaponPurist',cohortYear:2}), null, {weapon:true}),
};
const catchup = baseRobot({curve:'catchup',cohortYear:2});
for (const name of Object.keys(catchup.stats.output)) catchup.stats.output[name] = 30;
growth.catchupWeak = seriesGrowthMultiplier(catchup, 'output');
growth.catchupStrong = seriesGrowthMultiplier(catchup, 'ai');

assert(growth.earlyYear1 > growth.earlyYear3, 'early curve not front-loaded');
assert(growth.lateYear3 > growth.lateYear1, 'late curve not back-loaded');
assert(growth.finalBurstYear3 > 1.4, 'final-burst stacking missing');
assert(growth.catchupWeak > growth.catchupStrong * 1.1, 'catchup weak-group bonus missing');
assert(almost(growth.weaponPurist, 1.10), 'weapon-purist training bonus missing');

const basePart = { manufacturerId:'other', challenge:false, effects:[{kind:'base',groupKey:'output',statName:'瞬間出力',label:'瞬間出力',amount:4}], negatives:[{kind:'base',groupKey:'output',statName:'持続出力',label:'持続出力',amount:-4}] };
const sameMakerPart = {...basePart, manufacturerId:'kirishima'};
const challengePart = {...basePart, manufacturerId:'other', challenge:true};
const weaponPart = { manufacturerId:'other', challenge:false, effects:[{kind:'weapon',weaponKey:'blade',axis:'power',label:'ブレード威力',amount:4}], negatives:[] };
const electronicPart = { manufacturerId:'other', challenge:false, effects:[{kind:'base',groupKey:'compute',statName:STAT_GROUPS.compute.stats[0],label:'演算',amount:4}], negatives:[] };

function adjusted(aptitude, part=basePart, trait='maturePlatform') {
  const robot = baseRobot({aptitude, trait});
  return adjustedCustomPartEffects(robot, part).map((e)=>e.amount);
}
const custom = {
  balanced: adjusted('balanced'),
  modular: adjusted('modular'),
  overresponsive: adjusted('overresponsive'),
  conservative: adjusted('conservative'),
  manufacturerSame: adjusted('manufacturer', sameMakerPart),
  manufacturerOther: adjusted('manufacturer', basePart),
  trialChallenge: adjusted('trial', challengePart),
  weapon: adjusted('weapon', weaponPart),
  electronic: adjusted('electronic', electronicPart),
  precision: adjusted('precision'),
  intrinsicCustom: adjusted('balanced', basePart, 'customMonster'),
};
assert(custom.modular[0] > custom.balanced[0], 'modular aptitude positive bonus missing');
assert(Math.abs(custom.overresponsive[1]) > Math.abs(custom.balanced[1]), 'overresponsive negative amplification missing');
assert(Math.abs(custom.conservative[1]) < Math.abs(custom.balanced[1]), 'conservative negative reduction missing');
assert(custom.manufacturerSame[0] > custom.manufacturerOther[0], 'same-maker aptitude missing');
assert(custom.trialChallenge[0] > custom.balanced[0] && Math.abs(custom.trialChallenge[1]) > Math.abs(custom.balanced[1]), 'trial aptitude challenge response missing');
assert(custom.weapon[0] > 4, 'weapon aptitude missing');
assert(custom.electronic[0] > 4.5, 'electronic group aptitude missing');
assert(custom.precision[0] > 4 && Math.abs(custom.precision[1]) < 4, 'precision aptitude missing');
assert(custom.intrinsicCustom[0] > 4, 'intrinsic custom trait stacking missing');

const applyRobot = baseRobot({aptitude:'modular'});
const before = applyRobot.stats.output['瞬間出力'];
useCustomPart(applyRobot, {...basePart, id:'mechanics-test', name:'mechanics-test', abilityId:null});
const appliedDelta = Number((applyRobot.stats.output['瞬間出力'] - before).toFixed(1));
assert(almost(appliedDelta, custom.modular[0], 0.01), `useCustomPart did not apply adjusted amount: ${appliedDelta}`);

console.log(JSON.stringify({
  ok:true,
  growth,
  custom,
  appliedDelta,
  note:'Growth curves affect training multipliers by cohort year; v3.4 also applies the same series growth identity to official-match growth. Custom aptitudes preserve one decimal so small-part bonuses are no longer erased by integer rounding.'
}, null, 2));

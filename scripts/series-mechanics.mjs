import { STAT_GROUPS } from '../src/data/statDefinitions.js?v=3.8';
import { SERIES_CUSTOM_APTITUDES, SERIES_GROWTH_CURVES, SERIES_INTRINSIC_TRAITS } from '../src/data/seriesDefinitions.js?v=3.8';
import { adjustedCustomPartEffects, useCustomPart } from '../src/systems/partSystem.js?v=3.8';
import { seriesGrowthMultiplier } from '../src/systems/trainingSystem.js?v=3.8';

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
  ignitionYear1: seriesGrowthMultiplier(baseRobot({curve:'ignition',cohortYear:1}), 'output'),
  ignitionYear3: seriesGrowthMultiplier(baseRobot({curve:'ignition',cohortYear:3}), 'output'),
  plateauYear1: seriesGrowthMultiplier(baseRobot({curve:'plateau',cohortYear:1}), 'output'),
  plateauYear3: seriesGrowthMultiplier(baseRobot({curve:'plateau',cohortYear:3}), 'output'),
  reboundYear2: seriesGrowthMultiplier(baseRobot({curve:'rebound',cohortYear:2}), 'output'),
  reboundYear3: seriesGrowthMultiplier(baseRobot({curve:'rebound',cohortYear:3}), 'output'),
  pulseYear2: seriesGrowthMultiplier(baseRobot({curve:'pulse',cohortYear:2}), 'output'),
  pulseYear3: seriesGrowthMultiplier(baseRobot({curve:'pulse',cohortYear:3}), 'output'),
  doublePeakYear1: seriesGrowthMultiplier(baseRobot({curve:'doublepeak',cohortYear:1}), 'output'),
  doublePeakYear2: seriesGrowthMultiplier(baseRobot({curve:'doublepeak',cohortYear:2}), 'output'),
  doublePeakYear3: seriesGrowthMultiplier(baseRobot({curve:'doublepeak',cohortYear:3}), 'output'),
  rebuildYear2: seriesGrowthMultiplier(baseRobot({curve:'rebuild',cohortYear:2}), 'output'),
  rebuildYear3: seriesGrowthMultiplier(baseRobot({curve:'rebuild',cohortYear:3}), 'output'),
  highPlateauYear1: seriesGrowthMultiplier(baseRobot({curve:'highplateau',cohortYear:1}), 'output'),
  highPlateauYear2: seriesGrowthMultiplier(baseRobot({curve:'highplateau',cohortYear:2}), 'output'),
  highPlateauYear3: seriesGrowthMultiplier(baseRobot({curve:'highplateau',cohortYear:3}), 'output'),
  fieldDeepenYear1: seriesGrowthMultiplier(baseRobot({curve:'fielddeepen',cohortYear:1}), 'output'),
  fieldDeepenYear3: seriesGrowthMultiplier(baseRobot({curve:'fielddeepen',cohortYear:3}), 'output'),
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
assert(growth.ignitionYear3 > growth.ignitionYear1 * 1.8, 'ignition curve not delayed enough');
assert(growth.plateauYear1 > growth.plateauYear3 * 1.35, 'plateau curve not front loaded');
assert(growth.reboundYear3 > growth.reboundYear2 * 1.35, 'rebound curve missing recovery');
assert(growth.pulseYear2 > growth.pulseYear3 * 1.35, 'pulse curve missing year-two peak');
assert(growth.doublePeakYear1 > growth.doublePeakYear2 * 1.25 && growth.doublePeakYear3 > growth.doublePeakYear2 * 1.25, 'double-peak curve missing dual peaks');
assert(growth.rebuildYear3 > growth.rebuildYear2 * 1.6, 'rebuild curve missing third-year reconstruction');
assert(Math.min(growth.highPlateauYear1, growth.highPlateauYear2, growth.highPlateauYear3) > 1.0, 'high-plateau curve dropped below baseline');
assert(growth.fieldDeepenYear3 > growth.fieldDeepenYear1 * 1.25, 'field-deepen curve missing progressive growth');

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
  blank: adjusted('blank'),
  weaponExtreme: adjusted('weaponExtreme', weaponPart),
  riskLab: adjusted('riskLab', challengePart),
  manufacturerPlusSame: adjusted('manufacturerPlus', sameMakerPart),
  manufacturerPlusOther: adjusted('manufacturerPlus', basePart),
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
assert(custom.blank[0] >= 4.7, 'fifth-generation blank aptitude missing');
assert(custom.weaponExtreme[0] > custom.weapon[0], 'fifth-generation weapon extreme aptitude missing');
assert(custom.riskLab[0] > custom.trialChallenge[0] && Math.abs(custom.riskLab[1]) > Math.abs(custom.trialChallenge[1]), 'fifth-generation risk-lab aptitude missing');
assert(custom.manufacturerPlusSame[0] > custom.manufacturerPlusOther[0] * 1.2, 'fifth-generation pure-maker aptitude missing');

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
  note:'v3.8 re-audits growth/custom mechanics and keeps all seventh-generation series on the same verified execution path.'
}, null, 2));

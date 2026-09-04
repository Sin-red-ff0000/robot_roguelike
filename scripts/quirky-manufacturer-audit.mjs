import { MANUFACTURERS } from '../src/data/manufacturers.js';
import { SERIES_DEFINITIONS, getSeriesForManufacturer } from '../src/data/seriesDefinitions.js';

const QUIRKY_IDS = ['tokiwa','heritage','libido'];
const expectedPerMaker = 200 + MANUFACTURERS.length;
for (const id of QUIRKY_IDS) {
  const maker = MANUFACTURERS.find((m)=>m.id===id);
  if (!maker) throw new Error(`missing quirky manufacturer: ${id}`);
  const list = getSeriesForManufacturer(id);
  if (list.length !== expectedPerMaker) throw new Error(`${id}: ${list.length} series`);
  const pre = list.filter((s)=>s.seriesNumber<=200);
  const g10 = list.filter((s)=>s.seriesNumber>=181&&s.seriesNumber<=200);
  const g11 = list.filter((s)=>s.eleventhGeneration);
  if (pre.length!==200 || g10.length!==20 || g11.length!==MANUFACTURERS.length) throw new Error(`${id}: generation coverage invalid`);
  if (new Set(g10.map((s)=>s.nameKana)).size!==20 || new Set(g10.map((s)=>s.nameLatin)).size!==20) throw new Error(`${id}: g10 duplicate names`);
  if (g11.filter((s)=>s.collaborationType==='bilateral').length!==MANUFACTURERS.length-1) throw new Error(`${id}: bilateral coverage invalid`);
  if (g11.filter((s)=>s.collaborationType==='consortium').length!==1) throw new Error(`${id}: consortium missing`);
  if (String(maker.philosophy ?? '').length < 45) throw new Error(`${id}: philosophy too short`);
}
const allG10 = SERIES_DEFINITIONS.filter((s)=>s.seriesNumber>=181&&s.seriesNumber<=200);
if (new Set(allG10.map((s)=>s.nameKana)).size!==allG10.length) throw new Error('global g10 Japanese duplicate after quirky makers');
if (new Set(allG10.map((s)=>s.nameLatin)).size!==allG10.length) throw new Error('global g10 Latin duplicate after quirky makers');
const profiles = Object.fromEntries(QUIRKY_IDS.map((id)=>{
  const m=MANUFACTURERS.find((x)=>x.id===id);
  return [id,{reliability:m.profile.reliabilityBias,variance:m.profile.statVariance,focus:Object.entries(m.profile.groupBias).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([k])=>k)}];
}));
if (profiles.tokiwa.reliability <= 5 || profiles.tokiwa.variance >= 0.95) throw new Error('tokiwa consumer-product reliability identity too weak');
if (profiles.heritage.reliability <= 4 || !profiles.heritage.focus.includes('sensor')) throw new Error('heritage travel/environment identity too weak');
if (profiles.libido.variance <= 1.1 || profiles.libido.focus[0] !== 'control') throw new Error('libido adult-humanoid control identity too weak');

const tokiwaAll = getSeriesForManufacturer('tokiwa');
const heritageAll = getSeriesForManufacturer('heritage');
const libidoAll = getSeriesForManufacturer('libido');
if (!tokiwaAll.every((s)=>s.sideBusinessBreakout===true)) throw new Error('tokiwa side-business breakout metadata missing');
if (!heritageAll.every((s)=>s.travelCompanyOrigin===true && s.namingRule==='worldHeritage')) throw new Error('heritage world-heritage naming metadata missing');
if (!libidoAll.every((s)=>s.adultModelOnly===true && s.combatSexaroid===true && s.designPriority==='aestheticBeforeCombat')) throw new Error('libido adult combat-sexaroid metadata missing');

const heritage = getSeriesForManufacturer('heritage').filter((s)=>s.seriesNumber<=200);
if (!heritage.every((s)=>String(s.nameKana ?? '').length > 0 && String(s.nameLatin ?? '').length > 0)) throw new Error('heritage naming missing');
const libidoMaker = MANUFACTURERS.find((m)=>m.id==='libido');
if (!String(libidoMaker?.philosophy ?? '').includes('成人型')) throw new Error('libido adult-only specification missing');
console.log(JSON.stringify({ok:true,manufacturers:MANUFACTURERS.length,totalSeries:SERIES_DEFINITIONS.length,quirky:QUIRKY_IDS,perManufacturer:expectedPerMaker,profiles},null,2));

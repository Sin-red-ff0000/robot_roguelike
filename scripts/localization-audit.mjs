import { SERIES_DEFINITIONS, getSeriesForManufacturer } from '../src/data/seriesDefinitions.js?v=3.8';
import { seriesJapaneseDisplayIsValid } from '../src/data/seriesNameLocalization.js?v=3.8';
import { MANUFACTURERS } from '../src/data/manufacturers.js?v=3.8';
import { seriesDisplayName } from '../src/systems/displaySystem.js?v=3.8';

if (SERIES_DEFINITIONS.length !== 2800) throw new Error(`catalog size ${SERIES_DEFINITIONS.length}`);
for (const maker of MANUFACTURERS) {
  const list=getSeriesForManufacturer(maker.id);
  if (list.length !== 140) throw new Error(`${maker.id}: ${list.length} series`);
}
const invalid=SERIES_DEFINITIONS.filter((series)=>!seriesJapaneseDisplayIsValid(series.nameKana));
if (invalid.length) throw new Error(`unlocalized Japanese labels: ${invalid.slice(0,10).map(s=>`${s.id}:${s.nameKana}`).join(', ')}`);
const missing=SERIES_DEFINITIONS.filter((series)=>!series.nameKana || !series.nameLatin);
if (missing.length) throw new Error(`missing bilingual series labels: ${missing.length}`);
for (let generation=1; generation<=7; generation+=1) {
  const min=(generation-1)*20+1, max=generation*20;
  const count=SERIES_DEFINITIONS.filter((series)=>series.seriesNumber>=min && series.seriesNumber<=max).length;
  if (count!==400) throw new Error(`generation ${generation} count ${count}`);
}
for (const series of SERIES_DEFINITIONS.filter((_,index)=>index%79===0)) {
  const robot={ seriesNameKana:series.nameKana, seriesNameLatin:series.nameLatin, seriesName:series.nameKana };
  const ja=seriesDisplayName(robot,{seriesLabelMode:'kana'});
  const latin=seriesDisplayName(robot,{seriesLabelMode:'latin'});
  if (!seriesJapaneseDisplayIsValid(ja)) throw new Error(`display Japanese failed ${series.id}: ${ja}`);
  if (latin!==series.nameLatin) throw new Error(`display Latin failed ${series.id}: ${latin}`);
}
console.log(JSON.stringify({ok:true,series:SERIES_DEFINITIONS.length,perManufacturer:140,generations:7,invalidJapaneseLabels:invalid.length},null,2));

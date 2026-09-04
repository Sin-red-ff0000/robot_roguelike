import { MANUFACTURERS } from '../src/data/manufacturers.js';
import { SERIES_DEFINITIONS, getSeriesForManufacturer } from '../src/data/seriesDefinitions.js';
const g11=SERIES_DEFINITIONS.filter(s=>s.eleventhGeneration);
const expectedPerMaker=MANUFACTURERS.length;
if(MANUFACTURERS.length!==26) throw new Error(`メーカー数 ${MANUFACTURERS.length}`);
if(g11.length!==MANUFACTURERS.length*expectedPerMaker) throw new Error(`第11世代系列数 ${g11.length}`);
for(const maker of MANUFACTURERS){
 const list=g11.filter(s=>s.manufacturerId===maker.id);
 if(list.length!==expectedPerMaker) throw new Error(`${maker.id}: g11 ${list.length}`);
 const bilateral=list.filter(s=>s.collaborationType==='bilateral');
 const consortium=list.filter(s=>s.collaborationType==='consortium');
 const expected=MANUFACTURERS.filter(m=>m.id!==maker.id).map(m=>m.id).sort();
 const partners=bilateral.map(s=>s.collaborationPartnerId).sort();
 if(partners.length!==MANUFACTURERS.length-1||new Set(partners).size!==MANUFACTURERS.length-1||partners.join('|')!==expected.join('|')) throw new Error(`${maker.id}: 共同相手${MANUFACTURERS.length-1}社不正`);
 if(consortium.length!==1||consortium[0].seriesNumber!==200+MANUFACTURERS.length) throw new Error(`${maker.id}: 全社共同規格不正`);
 if(getSeriesForManufacturer(maker.id).length!==200+MANUFACTURERS.length) throw new Error(`${maker.id}: 全系列数不正`);
}
console.log(JSON.stringify({ok:true,manufacturers:MANUFACTURERS.length,total:SERIES_DEFINITIONS.length,g11:g11.length,bilateral:g11.filter(s=>s.collaborationType==='bilateral').length,consortium:g11.filter(s=>s.collaborationType==='consortium').length,perManufacturer:200+MANUFACTURERS.length},null,2));

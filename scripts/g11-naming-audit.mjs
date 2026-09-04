import { MANUFACTURERS } from '../src/data/manufacturers.js';
import { SERIES_DEFINITIONS } from '../src/data/seriesDefinitions.js';
const g11=SERIES_DEFINITIONS.filter(s=>s.eleventhGeneration);
const kana=new Set(), latin=new Set();
for(const s of g11){
 if(!s.nameKana||!s.nameLatin) throw new Error(`${s.id}: 名称欠落`);
 if(/[×]/.test(s.nameKana)||/\sx\s/i.test(s.nameLatin)) throw new Error(`${s.id}: メーカー連結名が残存 ${s.nameKana}`);
 if(s.nameKana==='全社共同規格'||s.nameLatin==='Common Standard') throw new Error(`${s.id}: 共通規格仮称が残存`);
 if(kana.has(s.nameKana)) throw new Error(`第11世代日本語名重複 ${s.nameKana}`);
 if(latin.has(s.nameLatin.toLowerCase())) throw new Error(`第11世代Latin名重複 ${s.nameLatin}`);
 kana.add(s.nameKana); latin.add(s.nameLatin.toLowerCase());
 if(!s.namingConcept?.includes('実在語・固有名詞') && s.collaborationType==='bilateral') throw new Error(`${s.id}: 命名説明不足`);
}
for(const maker of MANUFACTURERS){
 const list=g11.filter(s=>s.manufacturerId===maker.id);
 if(new Set(list.map(s=>s.nameKana)).size!==MANUFACTURERS.length) throw new Error(`${maker.id}: メーカー内名称重複`);
 const consortium=list.find(s=>s.collaborationType==='consortium');
 if(!consortium||consortium.nameKana==='全社共同規格') throw new Error(`${maker.id}: 全社共同規格固有名なし`);
}
// A主導/B主導は必ず別名。
for(const s of g11.filter(s=>s.collaborationType==='bilateral')){
 const reverse=g11.find(x=>x.manufacturerId===s.collaborationPartnerId&&x.collaborationPartnerId===s.manufacturerId);
 if(!reverse) throw new Error(`${s.id}: 逆主導系列なし`);
 if(reverse.nameKana===s.nameKana||reverse.nameLatin.toLowerCase()===s.nameLatin.toLowerCase()) throw new Error(`${s.id}: 逆主導と同名`);
}
console.log(JSON.stringify({ok:true,g11:g11.length,kanaUnique:kana.size,latinUnique:latin.size,bilateral:g11.filter(s=>s.collaborationType==='bilateral').length,consortium:g11.filter(s=>s.collaborationType==='consortium').length},null,2));

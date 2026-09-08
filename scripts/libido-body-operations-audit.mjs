import { SERIES_DEFINITIONS } from '../src/data/seriesDefinitions.js?v=4.8';
import { LIBIDO_BODY_ARCHETYPES } from '../src/data/libidoBodyMechanics.js?v=4.8';
import { LIBIDO_BODY_OPERATIONS } from '../src/data/libidoBodyOperations.js?v=4.8';
import { generateRobot } from '../src/systems/robotGenerator.js?v=4.8';
import { simulateBattle } from '../src/systems/battleSystem.js?v=4.8';

const ids=LIBIDO_BODY_ARCHETYPES.map(x=>x.id);
const missingOps=ids.filter(id=>!LIBIDO_BODY_OPERATIONS[id]);
const malformed=ids.filter(id=>{
  const x=LIBIDO_BODY_OPERATIONS[id];
  return !x || !x.maintenance || !x.trainingGroup || !x.battleGroup || !(x.battleMult>=1&&x.battleMult<=1.04) || !Number.isInteger(x.burden);
});
const libido=SERIES_DEFINITIONS.filter(s=>s.manufacturerId==='libido');
const sampleSeries=libido.slice(0,Math.min(30,libido.length));
let propagated=0, battleNotes=0;
for(const s of sampleSeries){
  const r=generateRobot({year:1,manufacturerId:'libido',seriesId:s.id});
  if(r.libidoBodyArchetypeId&&r.libidoBodyArchetype&&r.libidoBodyMechanicsScale>0) propagated++;
  const foe=generateRobot({year:1,manufacturerId:'kirishima'});
  for(let i=0;i<12;i++){
    const result=simulateBattle(r,foe,{official:true});
    if(result.comparisons.some(c=>(c.notesA||[]).some(n=>/×1\.0/.test(n)&&['長大多関節同期','翼肢姿勢変換','多脚分散感覚','可変形状制御','追跡感覚','高荷重骨格','環境適応感覚','多肢並列処理','広域環境感知','外殻荷重分散','四脚加速姿勢','対人挙動予測','分散投影演算','非定型可変支持','自然姿勢制御'].some(k=>n.includes(k))))) {battleNotes++;break;}
  }
}
const result={
  ok:missingOps.length===0&&malformed.length===0&&propagated===sampleSeries.length&&battleNotes>0,
  archetypes:ids.length,
  operationProfiles:Object.keys(LIBIDO_BODY_OPERATIONS).length,
  missingOps,malformed,
  propagationSample:`${propagated}/${sampleSeries.length}`,
  samplesShowingBattleTrait:battleNotes,
  maxBattleMultiplier:Math.max(...Object.values(LIBIDO_BODY_OPERATIONS).map(x=>x.battleMult)),
  maxMaintenanceBurden:Math.max(...Object.values(LIBIDO_BODY_OPERATIONS).map(x=>x.burden)),
};
console.log(JSON.stringify(result,null,2));
if(!result.ok)process.exit(1);

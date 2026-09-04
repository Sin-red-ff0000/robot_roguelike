import { historicalBest15, toggleManualBest15, BEST15_MODES } from '../src/systems/recordSystem.js?v=4.7';

function robot(id, wins, losses, reliability, abilityCount, peak, base=50, weapon=50) {
  return {
    id, nickname:`機体${id}`, manufacturerId:'kirishima', manufacturerName:'霧島重工', seriesNameKana:`試験系列${id}`,
    record:{wins, losses}, reliability,
    stats:{
      output:{'瞬間出力':peak,'持続出力':base}, mobility:{'反応速度':base,'加速性能':base}, control:{'姿勢制御':base,'重心制御':base},
      engine:{'発電性能':base,'電力供給':base}, compute:{'処理速度':base,'並列処理':base}, sensor:{'探知性能':base,'識別性能':base}, ai:{'状況判断':base,'行動予測':base},
    },
    weaponStats:{power:weapon, accuracy:weapon, handling:weapon, response:weapon, penetration:weapon, stability:weapon},
    specialAbilities:Array.from({length:abilityCount},(_,i)=>`ability-${id}-${i}`),
  };
}
const retired = Array.from({length:22},(_,i)=>robot(`R${i+1}`, i+1, (i%5)+1, 40+i, i%9, 60+i, 40+i/2, 45+i/3));
// make one clear category leader per mode
retired[0].record={wins:99,losses:10};
retired[1].record={wins:20,losses:0};
retired[2].specialAbilities=Array.from({length:30},(_,i)=>`A${i}`);
retired[3].stats.output['瞬間出力']=999;
retired[4].reliability=100;
const state={retired,best15:{manualIds:[],selectedMode:'overall'}};

for (const mode of BEST15_MODES.map(x=>x.id)) {
  const rows=historicalBest15(state,mode);
  if (rows.length!==15) throw new Error(`${mode}: expected 15, got ${rows.length}`);
  if (new Set(rows.map(x=>x.robot.id)).size!==15) throw new Error(`${mode}: duplicates`);
}
if (historicalBest15(state,'wins')[0].robot.id!=='R1') throw new Error('wins leader mismatch');
if (historicalBest15(state,'winRate')[0].robot.id!=='R2') throw new Error('winRate leader mismatch');
if (historicalBest15(state,'abilities')[0].robot.id!=='R3') throw new Error('abilities leader mismatch');
if (historicalBest15(state,'peak')[0].robot.id!=='R4') throw new Error('peak leader mismatch');
if (historicalBest15(state,'reliability')[0].robot.id!=='R5') throw new Error('reliability leader mismatch');
for (let i=0;i<15;i++) {
  const result=toggleManualBest15(state,retired[i].id);
  if (!result.added) throw new Error(`manual add failed ${i}`);
}
const overflow=toggleManualBest15(state,retired[15].id);
if (overflow.reason!=='full') throw new Error('manual cap not enforced');
if (historicalBest15(state,'manual').length!==15) throw new Error('manual list size mismatch');
toggleManualBest15(state,retired[0].id);
if (state.best15.manualIds.length!==14) throw new Error('manual removal failed');
console.log(JSON.stringify({ok:true, retired:retired.length, modes:BEST15_MODES.length, manualCap:15, leaders:{wins:'R1',winRate:'R2',abilities:'R3',peak:'R4',reliability:'R5'}},null,2));

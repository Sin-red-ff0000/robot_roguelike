import { robotCareerHighlights, extendedCareerRecordSummary, createRobotSnapshot } from '../src/systems/recordSystem.js?v=4.7';

function robot(id, {wins=0,losses=0,abilities=0,custom=0,awakenings=0,reliability=70,peak=90}={}) {
  return {
    id, nickname:id, manufacturerId:'kirishima', manufacturerName:'霧島重工', seriesId:'x', seriesNameKana:'試験系列', serial:id,
    weaponKey:'blade', weaponName:'ブレード', reliability,
    stats:{drive:{'瞬間出力':peak}}, weaponStats:{power:80},
    specialAbilities:Array.from({length:abilities},(_,i)=>`A${i}`), customHistory:Array.from({length:custom},(_,i)=>({i})), awakenings:Array.from({length:awakenings},(_,i)=>({i})),
    record:{wins,losses},
  };
}
const ace=robot('ACE',{wins:34,losses:6,abilities:8,custom:9,awakenings:2,reliability:95,peak:158});
const steady=robot('STEADY',{wins:18,losses:10,reliability:99,peak:112});
const state={roster:[],retired:[ace,steady]};
const tags=robotCareerHighlights(ace);
const ext=extendedCareerRecordSummary(state);
const snap=createRobotSnapshot(ace);
if (!tags.includes('歴戦のエース') || !tags.includes('重改修')) throw new Error(`highlight mismatch: ${tags.join(',')}`);
if (ext.mostCustomizations?.id !== 'ACE' || ext.mostAwakenings?.id !== 'ACE' || ext.highestReliability?.id !== 'STEADY') throw new Error('leader mismatch');
if (snap.id !== 'ACE' || snap.record.wins !== 34 || snap.customHistory.length !== 9) throw new Error('snapshot mismatch');
console.log(JSON.stringify({ok:true,tags,leaders:{custom:ext.mostCustomizations.id,awakenings:ext.mostAwakenings.id,reliability:ext.highestReliability.id},snapshot:true},null,2));

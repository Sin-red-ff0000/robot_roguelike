import { generateCohort } from '../src/systems/robotGenerator.js';
import { preMatchPairingInsight } from '../src/systems/teamMatchSystem.js';
const a=generateCohort({year:1,cohortYear:1,count:1})[0], b=generateCohort({year:1,cohortYear:1,count:1})[0];
const l2=preMatchPairingInsight(a,b,2), l3=preMatchPairingInsight(a,b,3), l4=preMatchPairingInsight(a,b,4), l5=preMatchPairingInsight(a,b,5);
if(l2) throw new Error('Lv2以下で個別相性が露出');
if(!l3.includes('相手')) throw new Error('Lv3相手耐性情報なし');
if(!l4.includes('自機')) throw new Error('Lv4被攻撃耐性情報なし');
if(!l5.includes('運用焦点')) throw new Error('Lv5ドクトリン情報なし');
console.log(JSON.stringify({lv2:l2,lv3:l3,lv4:l4,lv5:l5},null,2));

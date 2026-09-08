// LIBIDO FRAME LAB: creator-first body architecture -> incidental combat aptitude.
// These are deliberately small tendencies. The creator/series profile remains the primary source of identity.
const ARCHETYPES = [
  {id:'adult_humanoid',label:'成人女性型ヒューマノイド',groups:{control:1,ai:1},growth:{control:.006,ai:.006},weapons:{rifle:1,beamBlade:1},tags:['汎用姿勢','対人AI'],role:'人格と身体の一体感をそのまま精密戦闘へ転用する均整型'},
  {id:'lamia',label:'ラミア型',groups:{output:2,control:2,sensor:1,mobility:-1},growth:{output:.008,control:.01,sensor:.006},weapons:{blade:2,lance:1,rifle:1},tags:['長大多関節','静音蛇行','分散感覚'],role:'長大な蛇身の高出力・静音性・全身感覚を使う潜伏白兵型'},
  {id:'harpy',label:'ハーピー型',groups:{mobility:2,sensor:2,output:-1},growth:{mobility:.011,sensor:.008},weapons:{rifle:2,missile:1,laser:1},tags:['翼肢制御','立体索敵','軽量骨格'],role:'翼と軽量構造を活かして射線を作る高速索敵型'},
  {id:'arachne',label:'アラクネ型',groups:{control:2,sensor:2,mobility:1},growth:{control:.01,sensor:.009},weapons:{drone:2,machineGun:1,rifle:1},tags:['多脚安定','多方向感覚','姿勢自由度'],role:'多脚の接地安定と多方向感覚で地形を支配する制圧型'},
  {id:'slime',label:'スライム型',groups:{control:2,ai:1,engine:1},growth:{control:.01,engine:.006},weapons:{emp:2,beamBlade:1},tags:['可変形状','分散駆動','衝撃逃がし'],role:'形状変化と荷重分散で定型姿勢を外す変則型'},
  {id:'beastkin',label:'獣人型',groups:{mobility:2,sensor:2},growth:{mobility:.009,sensor:.009},weapons:{blade:2,rifle:1},tags:['瞬発肢','耳尾感覚','追跡'],role:'瞬発力と鋭敏な感覚器をそのまま追跡戦へ使う猟犬型'},
  {id:'dragonnewt',label:'ドラゴニュート型',groups:{output:2,engine:2,mobility:-1},growth:{output:.01,engine:.009},weapons:{hammer:2,beamCannon:1},tags:['高荷重骨格','放熱余裕','尾部支持'],role:'大出力を受け止める骨格と放熱余裕を活かす重撃型'},
  {id:'aquatic',label:'水棲人型',groups:{mobility:1,sensor:2,engine:1},growth:{sensor:.009,mobility:.006},weapons:{laser:2,missile:1},tags:['流体姿勢','耐環境','低騒音'],role:'流体環境向けの静粛性と感覚補正を地上戦にも持ち込む環境適応型'},
  {id:'multiarm',label:'多腕人型',groups:{control:3,compute:1},growth:{control:.012,compute:.006},weapons:{machineGun:2,blade:1,drone:1},tags:['多肢協調','並列操作','武器保持'],role:'複数肢の協調制御を多兵装運用へ転用する手数型'},
  {id:'plant',label:'植物人型',groups:{sensor:2,engine:1,ai:1},growth:{sensor:.008,ai:.006},weapons:{drone:2,laser:1},tags:['環境感知','低活動待機','広域表皮'],role:'広い表面感覚と低活動待機を利用する待伏せ観測型'},
  {id:'crustacean',label:'甲殻人型',groups:{output:1,engine:2,mobility:-1},growth:{engine:.009,output:.006},weapons:{cannon:2,hammer:1},tags:['外殻支持','荷重分散','局所交換'],role:'外殻そのものを支持構造に使い重兵装を安定させる砲撃型'},
  {id:'centaur',label:'ケンタウロス型',groups:{mobility:2,output:1,control:1},growth:{mobility:.01,control:.006},weapons:{lance:2,rifle:1},tags:['四脚走行','大型支持面','突進姿勢'],role:'四脚の支持面と加速力を射撃・突撃双方へ変換する機動型'},
  {id:'demon',label:'悪魔・サキュバス型',groups:{ai:2,control:1,sensor:1},growth:{ai:.01,control:.006},weapons:{emp:2,beamBlade:1},tags:['表情肢','対人予測','尾翼協調'],role:'表情・尾・翼まで統合した対人予測と撹乱を得意とする欺瞞型'},
  {id:'spectral',label:'幽体・半実体型',groups:{control:2,compute:2,output:-1},growth:{control:.009,compute:.009},weapons:{laser:2,emp:1},tags:['半実体表現','分散投影','低慣性'],role:'分散投影と低慣性部位を利用して照準を外す電子戦型'},
  {id:'anomalous',label:'完全異形可変型',groups:{control:2,compute:1,ai:1},growth:{control:.009,compute:.007},weapons:{drone:1,emp:1,blade:1},tags:['非定型骨格','可変支持','作者専用規格'],role:'定型戦術へ寄せず作者固有の可変構造そのものを武器にする変則型'},
];

const WEAPON_KEYS=['blade','hammer','lance','beamBlade','rifle','machineGun','cannon','laser','beamCannon','missile','emp','drone'];
const round3=n=>Number(Number(n||0).toFixed(3));
const add=(a={},b={},scale=1)=>{const o={...a};for(const [k,v] of Object.entries(b))o[k]=round3(Number(o[k]||0)+Number(v)*scale);return o;};

export function getLibidoBodyMechanics(seriesNumber=1, generation=1, salt=0){
  const index=Math.abs((Number(seriesNumber)||1)*7+(Number(generation)||1)*11+(Number(salt)||0)*13)%ARCHETYPES.length;
  const base=ARCHETYPES[index];
  // Same species does not mean same combat role: rotate one creator-specific secondary aptitude.
  const secondary=['output','mobility','control','engine','compute','sensor','ai'][(seriesNumber+generation+salt)%7];
  const groups=add(base.groups,{[secondary]:1});
  const preferred=Object.entries(base.weapons).sort((a,b)=>b[1]-a[1]).map(([k])=>k).filter(k=>WEAPON_KEYS.includes(k));
  return {...base,groups,preferredWeapons:preferred,creatorSecondary:secondary};
}

export function applyLibidoBodyMechanics(series, scale=1){
  const m=getLibidoBodyMechanics(series.seriesNumber,series.refitGeneration||1,series.collaborationPartnerId?.length||0);
  return {
    ...series,
    groupAdjustments:add(series.groupAdjustments,m.groups,scale),
    growthAdjustments:add(series.growthAdjustments,m.growth,scale),
    weaponAdjustments:add(series.weaponAdjustments,m.weapons,scale),
    preferredWeapons:[...new Set([...(series.preferredWeapons||[]),...m.preferredWeapons])].slice(0,4),
    libidoBodyArchetypeId:m.id,
    libidoBodyArchetype:m.label,
    libidoBodyCombatRole:m.role,
    libidoBodyFeatureTags:m.tags,
    libidoBodyMechanicsScale:scale,
  };
}

export const LIBIDO_BODY_ARCHETYPES=ARCHETYPES;

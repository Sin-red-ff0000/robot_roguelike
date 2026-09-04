// v3.7 sixth-generation catalog: series 101-120 for every manufacturer.
// The sixth generation focuses on "operational doctrine": not simply stronger machines,
// but series whose three-year growth, customization response and preferred battle plan
// are deliberately tied together.

import { MANUFACTURERS } from './manufacturers.js?v=4.8';
import { FIFTH_WAVE_SERIES_DEFINITIONS } from './seriesFifthWaveDefinitions.js?v=4.8';
import { WEAPON_CATEGORIES } from './weaponDefinitions.js?v=4.8';

const MAKER_MAP = new Map(MANUFACTURERS.map((maker) => [maker.id, maker]));
const GROUP_LABEL = { output:'出力', mobility:'駆動', control:'制御', engine:'機関', compute:'演算', sensor:'センサー', ai:'AI' };
const WEAPON_KEYS = Object.keys(WEAPON_CATEGORIES);
const WEAPON_LABEL = Object.fromEntries(Object.entries(WEAPON_CATEGORIES).map(([key,value]) => [key,value.label]));

const CURVE_LABEL={steady:'均等成長',early:'早熟型',middle:'中盤型',late:'晩成型',finalburst:'最終年爆発型',frontloaded:'完成品型',catchup:'弱点補正型',ignition:'遅延点火型',plateau:'初期頂点型',rebound:'再加速型',pulse:'中年次急伸型',doublepeak:'二段加速型',rebuild:'再構築型',highplateau:'高原維持型',fielddeepen:'運用深化型'};
const CUSTOM_LABEL={balanced:'標準適合',modular:'高モジュール適合',overresponsive:'過敏応答',conservative:'保守的適合',manufacturer:'純正適合',trial:'試供品適合',weapon:'兵装改修適合',structural:'構造改修適合',electronic:'電子改修適合',precision:'精密改修適合',blank:'未完成素体適合',weaponExtreme:'単兵装改修適合',riskLab:'危険試験適合',manufacturerPlus:'純正深化適合'};

const SUFFIXES = [
  'CONVERGE','ADAPT','DUAL','REBUILD','PLATEAU','LOOP','SYNC','LINK','SURPLUS','STABLE',
  'LEARN','CONTROLLED','TURNAROUND','NUCLEUS','FORESIGHT','CERTAINTY','RECODE','MIRROR','FUSION','SIGNATURE',
];

const ROLES = [
  { id:'convergence', label:'収束完成', archetypeId:'precision', tier:'standard', curve:'steady', custom:'precision', trait:'precisionSeed', main:5, sub:4, weak:-2, reliability:6, summary:'三年間の調整で性能のばらつきを収束させ、最後まで扱いやすさを崩さない。' },
  { id:'adaptiveFrame', label:'可変骨格', archetypeId:'adaptive', tier:'standard', curve:'catchup', custom:'modular', trait:'modularFrame', main:2, sub:3, weak:1, growth:.035, summary:'不得意分野を残したまま納入し、運用で必要になった方向へ骨格を寄せていく。' },
  { id:'dualPeak', label:'二段加速', archetypeId:'burstAssault', tier:'specialized', curve:'doublepeak', custom:'overresponsive', trait:'overdriveLearning', main:7, sub:1, weak:-6, reliability:-4, summary:'初年度と最終年度に二度の性能ピークを作り、中間年を再調整期間として使う。' },
  { id:'rebuildCycle', label:'再構築循環', archetypeId:'growthProject', tier:'experimental', curve:'rebuild', custom:'blank', trait:'customMonster', main:-3, sub:1, weak:-3, growth:.06, reliability:-2, summary:'2年目に一度構成を崩して再設定し、3年目に大きく作り直すことを前提とする。' },
  { id:'highPlateau', label:'高原維持', archetypeId:'reliable', tier:'mass', curve:'highplateau', custom:'conservative', trait:'maturePlatform', main:3, sub:3, weak:0, reliability:10, summary:'突出した瞬間を狙わず、三年間ずっと高い練習効率と再現性を維持する。' },
  { id:'counterLoop', label:'対策循環', archetypeId:'countermeasure', tier:'specialized', curve:'catchup', custom:'structural', trait:'weaknessLearner', main:1, sub:2, weak:3, resistance:4, summary:'弱点が見つかるたびに次の改修対象へ移り、同じ穴を二度残さないことを目的にする。' },
  { id:'weaponSync', label:'兵装同調', archetypeId:'weaponSavant', tier:'specialized', curve:'middle', custom:'weaponExtreme', trait:'weaponPurist', main:2, sub:1, weak:-3, weapon:11, avoid:-6, summary:'兵装と機体の調整周期を一致させ、2年目に特定兵装の扱いを一気に完成させる。' },
  { id:'domainLink', label:'二領域連結', archetypeId:'hybridRanged', tier:'standard', curve:'steady', custom:'weapon', trait:'adaptiveWeapons', main:3, sub:4, weak:-2, weapon:5, weapon2:5, summary:'異なる二つの戦闘領域を一つの制御則で接続し、相手に応じて比較軸を変える。' },
  { id:'surplusTransfer', label:'余剰転用', archetypeId:'overengineered', tier:'standard', curve:'late', custom:'structural', trait:'slowForge', main:5, sub:4, weak:-3, resistance:3, summary:'普段は余っている出力・冷却・構造余裕を、後半の育成で不足分野へ移し替える。' },
  { id:'stableExperiment', label:'安定実験', archetypeId:'volatileExperimental', tier:'experimental', curve:'highplateau', custom:'trial', trait:'precisionSeed', main:5, sub:2, weak:-5, reliability:1, summary:'実験系列でありながら試験条件を徹底固定し、危険な技術を再現可能な範囲へ閉じ込める。' },
  { id:'fieldLearning', label:'運用深化', archetypeId:'longSeller', tier:'mass', curve:'fielddeepen', custom:'balanced', trait:'maturePlatform', main:1, sub:2, weak:0, growth:.025, reliability:5, summary:'現場で使われるほど設計意図が明確になり、後半ほど基礎能力全体の伸びが良くなる。' },
  { id:'managedVolatility', label:'管理変動', archetypeId:'lottery', tier:'rare', curve:'rebound', custom:'riskLab', trait:'volatileCore', main:8, sub:1, weak:-8, reliability:-7, variance:1.2, summary:'大きな個体差を残しつつ、外れ方の範囲だけは設計側で管理する選抜前提系列。' },
  { id:'turnaround', label:'弱点反転', archetypeId:'counterDesign', tier:'specialized', curve:'catchup', custom:'electronic', trait:'weaknessLearner', main:-4, sub:5, weak:5, summary:'メーカーが歴代で苦手としてきた領域を主題にし、弱点を育成目標そのものへ反転する。' },
  { id:'modularNucleus', label:'中核モジュール', archetypeId:'minimalist', tier:'standard', curve:'steady', custom:'blank', trait:'modularFrame', main:1, sub:1, weak:-2, growth:.02, summary:'最低限の中核だけを完成させ、残りの性能はカスタムパーツで機体ごとに定義する。' },
  { id:'foresight', label:'先読み駆動', archetypeId:'aiAnomaly', tier:'experimental', curve:'middle', custom:'electronic', trait:'autonomousMaturation', main:5, sub:6, weak:-5, reliability:-2, summary:'反応してから動くのではなく、予測した状態へ先に機体を置くことで実動作の遅れを消す。' },
  { id:'certainty', label:'確実性頂点', archetypeId:'flagship', tier:'rare', curve:'frontloaded', custom:'manufacturerPlus', trait:'finishedProduct', main:6, sub:5, weak:-2, reliability:11, summary:'最高値より「表示された性能が本当に出ること」を旗艦性能として極端に追求する。' },
  { id:'recode', label:'旧式再符号化', archetypeId:'retro', tier:'standard', curve:'rebound', custom:'manufacturer', trait:'maturePlatform', main:2, sub:4, weak:-1, summary:'古い系列の構造を残しつつ、制御則と部品規格だけを現代仕様へ書き換える。' },
  { id:'mirror', label:'対抗鏡像', archetypeId:'counterDesign', tier:'specialized', curve:'pulse', custom:'precision', trait:'weaknessLearner', main:4, sub:4, weak:-4, summary:'競合機の長所をそのままコピーせず、自社の強みで同じ結果を出す鏡像的対抗系列。' },
  { id:'lineageFusion', label:'系譜統合', archetypeId:'balanced', tier:'rare', curve:'steady', custom:'manufacturerPlus', trait:'balancedCeiling', main:4, sub:4, weak:0, reliability:4, summary:'別々に進化した歴代系列の設計要素を一つへ戻し、企業史そのものを一機へまとめる。' },
  { id:'signature', label:'最終署名', archetypeId:'apex', tier:'rare', curve:'plateau', custom:'overresponsive', trait:'finalYearBurst', main:10, sub:2, weak:-7, reliability:-3, summary:'メーカーを象徴する一能力を、欠点を隠さず最後まで押し通す第6世代の極端な署名機。' },
];

const TIER_WEIGHT={mass:1.60,standard:1.0,specialized:.56,experimental:.27,rare:.13};

function topGroups(maker) {
  const entries=Object.entries(maker?.profile?.groupBias ?? {}).sort((a,b)=>Number(b[1])-Number(a[1]));
  return [entries[0]?.[0] ?? 'control', entries[1]?.[0] ?? 'engine', entries.at(-1)?.[0] ?? 'output'];
}
function previousRoot(nameLatin, manufacturerId) {
  if (manufacturerId === 'bureau13') return 'CASE';
  const tokens=String(nameLatin ?? '').split('-');
  return tokens.length > 1 ? tokens.slice(0,-1).join('-') : String(nameLatin ?? 'SERIES');
}
function slug(value) { return String(value).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }
function weaponPair(manufacturerId,index,predecessor) {
  const seed=[...manufacturerId].reduce((sum,ch)=>sum+ch.charCodeAt(0),0)+index*7;
  const p1=predecessor.preferredWeapons?.[0] ?? WEAPON_KEYS[seed%WEAPON_KEYS.length];
  const p2=predecessor.preferredWeapons?.[1] ?? WEAPON_KEYS[(seed+5)%WEAPON_KEYS.length];
  let avoid=predecessor.avoidedWeapons?.[0] ?? WEAPON_KEYS[(seed+9)%WEAPON_KEYS.length];
  if (avoid===p1 || avoid===p2) avoid=WEAPON_KEYS[(seed+11)%WEAPON_KEYS.length];
  return [p1,p2,avoid];
}
function groupAdjustments(maker,role) {
  const [primary,secondary,weak]=topGroups(maker);
  const out={};
  if(role.main) out[primary]=(out[primary]??0)+role.main;
  if(role.sub) out[secondary]=(out[secondary]??0)+role.sub;
  if(role.weak) out[weak]=(out[weak]??0)+role.weak;
  return out;
}
function growthAdjustments(maker,role) {
  const [primary,secondary]=topGroups(maker);
  const out={};
  const g=Number(role.growth ?? .02);
  if(g) out[primary]=g;
  if(role.sub>0) out[secondary]=Math.max(.01,Math.min(.045,g*.7 || .018));
  return out;
}

export const SIXTH_WAVE_SERIES_DEFINITIONS = FIFTH_WAVE_SERIES_DEFINITIONS.map((predecessor, globalIndex) => {
  const idx=globalIndex%20;
  const role=ROLES[idx];
  const maker=MAKER_MAP.get(predecessor.manufacturerId);
  const root=previousRoot(predecessor.nameLatin,predecessor.manufacturerId);
  const seriesNumber=101+idx;
  const suffix=SUFFIXES[idx];
  const nameLatin=predecessor.manufacturerId==='bureau13' ? `CASE-${seriesNumber}` : `${root}-${suffix}`;
  const [primary,secondary,weak]=topGroups(maker);
  const [preferred,preferred2,avoided]=weaponPair(predecessor.manufacturerId,idx,predecessor);
  const preferredWeapons=role.weapon2 ? [preferred,preferred2] : [preferred];
  const weaponAdjustments={ [preferred]: Number(role.weapon ?? 4) };
  const weaponGrowthAdjustments={ [preferred]: role.weapon ? .075 : .04 };
  if(role.weapon2){ weaponAdjustments[preferred2]=role.weapon2; weaponGrowthAdjustments[preferred2]=.06; }
  if(role.avoid){ weaponAdjustments[avoided]=role.avoid; weaponGrowthAdjustments[avoided]=-.05; }
  const primaryLabel=GROUP_LABEL[primary]??primary;
  const secondaryLabel=GROUP_LABEL[secondary]??secondary;
  const concept=`${nameLatin}は「${role.label}」を主題にした第6世代系列。${role.summary} ${maker?.name ?? predecessor.manufacturerId}の「${maker?.philosophy ?? '設計思想'}」を、初期性能だけでなく三年間の運用手順へ落とし込んでいる。`;
  const namingConcept=`前身${predecessor.nameLatin}の名称系統を継ぎながら「${suffix}」の副名称を与えた。第6世代では副名称が性能ランクではなく、運用・育成・改修の手順を示す設計記号として使われる。`;
  const developmentBackground=`第5世代で成長曲線とカスタム適性を製品仕様へ組み込んだ結果を受け、次段階では「いつ、何を伸ばし、どこで構成を変えるか」まで系列側から提案する方針へ進んだ。前身#${predecessor.seriesNumber}の長所を残しつつ、${role.label}という運用思想を追加している。`;
  const engineeringNotes=`${primaryLabel}と${secondaryLabel}を基本軸とするが、${role.id==='turnaround'?'従来の弱点側を意図的に主役へ引き上げる':role.id==='managedVolatility'?'個体差を消さず、外れ方の範囲だけを管理する':role.id==='modularNucleus'?'完成時に空白を残し、改修後の姿を正式仕様とみなす':'得意分野の数値だけでなく、三年間の性能推移そのものを設計対象とする'}。弱点は${GROUP_LABEL[weak]??weak}側に残りやすく、そこを補うか設計意図として受け入れるかで育成方針が分かれる。`;
  const trainingNotes=`成長曲線は「${CURVE_LABEL[role.curve] ?? role.curve}」、カスタム適性は「${CUSTOM_LABEL[role.custom] ?? role.custom}」を採用。${role.id==='dualPeak'||role.id==='rebuildCycle'?'年度ごとの伸び方が大きく変わるため、毎年同じ練習方針を続けるより時期に合わせて重点を変える方が系列思想に合う。':'初期総合評価だけではなく、3年目までの到達像から練習方針を逆算することを想定している。'}`;
  const weaponDoctrine=`推奨兵装は${preferredWeapons.map(k=>WEAPON_LABEL[k]??k).join(' / ')}。${role.id==='weaponSync'?'兵装同調そのものが設計目標で、現在兵装の個別練習と兵装パーツが特に重要になる':role.id==='domainLink'?'二つの兵装系統を使い分け、相手によって比較軸を変える':'兵装は固定職ではなく、この系列が狙う運用手順を完成させるための中心装備として扱う'}。非推奨は${WEAPON_LABEL[avoided]??avoided}。`;
  return {
    id:`${predecessor.manufacturerId}-${slug(nameLatin)}`,
    manufacturerId:predecessor.manufacturerId,
    seriesNumber,
    nameKana:nameLatin,
    nameLatin,
    archetypeId:role.archetypeId,
    summary:`${role.label}。${role.summary}`,
    concept,namingConcept,developmentBackground,engineeringNotes,trainingNotes,weaponDoctrine,
    marketPosition:`${role.label} / 第6世代`,
    productionTier:role.tier,
    availabilityWeight:TIER_WEIGHT[role.tier],
    predecessorNumber:81+idx,
    individualityTrait:role.id==='managedVolatility'?'jackpot':role.id==='weaponSync'?'weaponSwing':role.id==='rebuildCycle'?'growthSwing':role.id==='highPlateau'||role.id==='certainty'?'uniform':'normal',
    growthCurveId:role.curve,
    customAptitudeId:role.custom,
    intrinsicTraitId:role.trait,
    sixthGeneration:true,
    refitGeneration:6,
    refitVersion:'3.7',
    preferredWeapons,
    avoidedWeapons:[avoided],
    abilityTendencyTags:[primary,secondary,preferred,role.id==='foresight'?'ai':role.id==='stableExperiment'?'reliability':role.id==='counterLoop'?'resistance':'official'],
    abilityTendencyMultiplier:['weaponSync','signature','managedVolatility'].includes(role.id)?1.52:1.40,
    annualVolatility:role.tier==='experimental'||role.tier==='rare'?1.28:role.tier==='mass'?.78:1,
    groupAdjustments:groupAdjustments(maker,role),
    growthAdjustments:growthAdjustments(maker,role),
    reliabilityAdjustment:Number(role.reliability??0),
    resistanceAdjustment:Number(role.resistance??0),
    weaponAdjustments,
    weaponGrowthAdjustments,
    statVarianceMultiplier:Number(role.variance ?? ((role.id==='highPlateau'||role.id==='certainty') ? .82 : 1)),
    growthVarianceMultiplier:role.id==='rebuildCycle' ? 1.20 : role.id==='highPlateau' ? .86 : 1,
    eccentricBonusAdjustment:role.id==='managedVolatility'?.06:0,
  };
});

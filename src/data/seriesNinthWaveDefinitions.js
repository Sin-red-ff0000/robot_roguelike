// v4.0 ninth-generation catalog: series 161-180 for every manufacturer.
// The ninth generation continues clean-sheet naming and explicitly forbids inherited-name subtitles/suffixes.
// Every series uses a standalone clean-sheet name: no inherited stem and no subtitle/suffix.

import { MANUFACTURERS } from './manufacturers.js?v=4.6';
import { EIGHTH_WAVE_SERIES_DEFINITIONS } from './seriesEighthWaveDefinitions.js?v=4.6';
import { WEAPON_CATEGORIES } from './weaponDefinitions.js?v=4.6';

const MAKER_MAP = new Map(MANUFACTURERS.map((maker) => [maker.id, maker]));
const MAKER_INDEX = new Map(MANUFACTURERS.map((maker, index) => [maker.id, index]));
const GROUP_LABEL = { output:'出力', mobility:'駆動', control:'制御', engine:'機関', compute:'演算', sensor:'センサー', ai:'AI' };
const WEAPON_KEYS = Object.keys(WEAPON_CATEGORIES);
const WEAPON_LABEL = Object.fromEntries(Object.entries(WEAPON_CATEGORIES).map(([key,value]) => [key,value.label]));
const CURVE_LABEL={steady:'均等成長',early:'早熟型',middle:'中盤型',late:'晩成型',finalburst:'最終年爆発型',frontloaded:'完成品型',catchup:'弱点補正型',ignition:'遅延点火型',plateau:'初期頂点型',rebound:'再加速型',pulse:'中年次急伸型',doublepeak:'二段加速型',rebuild:'再構築型',highplateau:'高原維持型',fielddeepen:'運用深化型'};
const CUSTOM_LABEL={balanced:'標準適合',modular:'高モジュール適合',overresponsive:'過敏応答',conservative:'保守的適合',manufacturer:'純正適合',trial:'試供品適合',weapon:'兵装改修適合',structural:'構造改修適合',electronic:'電子改修適合',precision:'精密改修適合',blank:'未完成素体適合',weaponExtreme:'単兵装改修適合',riskLab:'危険試験適合',manufacturerPlus:'純正深化適合'};

const NAME_START = [
  ['QUA','クア'],['BRI','ブリ'],['CIR','シル'],['DRE','ドレ'],['EVA','エヴァ'],['FAL','ファル'],['GRA','グラ'],['HYL','ヒル'],['IZA','イザ'],['JUR','ジュル'],
  ['KRE','クレ'],['LYA','リア'],['MOR','モル'],['NYX','ニクス'],['OVA','オヴァ'],['PRA','プラ'],['RHE','レ'],['SYL','シルヴァ'],['TYR','ティル'],['ZEA','ゼア'],
];
const NAME_CORE = [
  ['NEX','ネクス'],['AUR','アウル'],['VEL','ヴェル'],['ION','イオン'],['RUM','ルム'],['CEL','セル'],['DYN','ディン'],['ORA','オラ'],['KEL','ケル'],['MYR','ミル'],
  ['SOL','ソル'],['TRI','トリ'],['VEX','ヴェクス'],['LUM','ルム'],['ARC','アルク'],['NEM','ネム'],['PHY','フィ'],['RHO','ロ'],['TAL','タル'],['ZEN','ゼン'],
];
const NAME_END = [
  ['OR','オル'],['A','ア'],['EN','エン'],['IS','イス'],['UM','ウム'],['EL','エル'],['ON','オン'],['AR','アル'],['IA','イア'],['OS','オス'],
  ['IX','イクス'],['ER','エル'],['AN','アン'],['EA','エア'],['US','ウス'],['IR','イル'],['OM','オム'],['ET','エト'],['YN','イン'],['AS','アス'],
];

const ROLES = [
  { id:'axiomCore', label:'公理中核', archetypeId:'precision', tier:'standard', curve:'steady', custom:'precision', trait:'precisionSeed', main:6, sub:3, weak:-2, reliability:7, motif:'余計な機能を足すのではなく、絶対に崩さない一つの設計公理から機体全体を組み上げる', image:'一本の太い基準線から全機構が派生する構造図' },
  { id:'swarmLattice', label:'群格子', archetypeId:'adaptive', tier:'specialized', curve:'middle', custom:'modular', trait:'adaptiveWeapons', main:2, sub:5, weak:-2, growth:.025, motif:'単独機構の強さより小さな機能単位の連携で性能を作り、用途に応じて結び替える', image:'細かな節点が格子状につながるネットワーク' },
  { id:'phaseFrame', label:'位相骨格', archetypeId:'mobile', tier:'specialized', curve:'doublepeak', custom:'overresponsive', trait:'overdriveLearning', main:7, sub:2, weak:-6, reliability:-3, motif:'同じ骨格を保ったまま運用段階ごとに得意領域を切り替え、性能ピークを複数回作る', image:'一つの輪郭が時間差で重なって見える多相フレーム' },
  { id:'elasticReserve', label:'弾性余白', archetypeId:'overengineered', tier:'standard', curve:'late', custom:'structural', trait:'slowForge', main:4, sub:4, weak:-2, resistance:4, motif:'初期状態では使い切らない構造余力を残し、後年の育成や改修で必要な方向へ変換する', image:'荷重を受けても戻る弓形の支持構造' },
  { id:'blindspotHunter', label:'盲点狩り', archetypeId:'countermeasure', tier:'specialized', curve:'catchup', custom:'electronic', trait:'weaknessLearner', main:1, sub:4, weak:4, motif:'既知の長所ではなく、相手と自機の見落とされた弱点を探して勝ち筋に変える', image:'死角を塗り潰す走査線と照準環' },
  { id:'distributedMind', label:'分散知性', archetypeId:'ai', tier:'experimental', curve:'fielddeepen', custom:'electronic', trait:'autonomousMaturation', main:3, sub:7, weak:-4, reliability:-1, motif:'判断を一つの中枢へ集中させず、複数の局所制御が合議して機体を動かす', image:'複数の小さな脳核が輪状に接続された制御系' },
  { id:'thermalRhythm', label:'熱律動', archetypeId:'engine', tier:'standard', curve:'pulse', custom:'structural', trait:'maturePlatform', main:6, sub:3, weak:-3, reliability:3, motif:'発熱を欠点として抑え込むのではなく、加熱と冷却の周期そのものを戦闘テンポへ組み込む', image:'脈拍のような温度波形と熱交換器' },
  { id:'silentVector', label:'静粛ベクトル', archetypeId:'control', tier:'standard', curve:'frontloaded', custom:'precision', trait:'finishedProduct', main:5, sub:5, weak:-3, reliability:6, motif:'大きな動きや補正を減らし、最短の姿勢遷移と小さな制御入力だけで狙った結果へ到達する', image:'無駄のない一本の軌跡と収束する矢印' },
  { id:'recursiveShell', label:'再帰外殻', archetypeId:'reliable', tier:'mass', curve:'rebuild', custom:'conservative', trait:'maturePlatform', main:3, sub:3, weak:1, resistance:6, motif:'損耗・失敗・改修結果を次の構造更新へ戻し、使うほど防御設計の穴を減らしていく', image:'殻の内側に同形の殻が何層も続く断面' },
  { id:'predictiveBalance', label:'予測均衡', archetypeId:'balanced', tier:'rare', curve:'highplateau', custom:'manufacturerPlus', trait:'balancedCeiling', main:5, sub:5, weak:0, reliability:8, motif:'平均化ではなく未来の負荷分布を予測して先回りし、全系統の余力を均衡させ続ける', image:'傾く前に重心が移動する天秤' },
  { id:'asymmetricTwin', label:'非対称双生', archetypeId:'hybridRanged', tier:'specialized', curve:'steady', custom:'weapon', trait:'adaptiveWeapons', main:4, sub:5, weak:-4, weapon:6, weapon2:6, motif:'似ていない二つの戦闘領域を意図的に同居させ、片方の弱点をもう片方の得意で埋める', image:'左右で形の違う二枚翼が一つの中心を共有する姿' },
  { id:'sparseMachine', label:'疎構成', archetypeId:'minimalist', tier:'standard', curve:'steady', custom:'blank', trait:'modularFrame', main:0, sub:2, weak:-4, growth:.035, motif:'完成度を部品数で稼がず、少ない中核機能と大きな改修空間だけを残して用途を後決めする', image:'余白の多い回路図に最小限の節点だけが残る構成' },
  { id:'resonanceDrive', label:'共振駆動', archetypeId:'burstAssault', tier:'experimental', curve:'ignition', custom:'overresponsive', trait:'volatileCore', main:9, sub:1, weak:-8, reliability:-6, motif:'複数機構の周期を一点で重ね、短時間だけ通常設計では届かない出力密度を作る', image:'複数の波が同位相で重なり一つの大波になる瞬間' },
  { id:'faultMesh', label:'耐故障網', archetypeId:'reliable', tier:'mass', curve:'highplateau', custom:'conservative', trait:'finishedProduct', main:3, sub:4, weak:1, reliability:12, resistance:3, motif:'一部が壊れても機能を迂回させ、性能低下を局所化して戦闘継続を優先する', image:'切れた経路を周囲の線が自動的に迂回する網目' },
  { id:'opportunityLoad', label:'機会負荷', archetypeId:'lottery', tier:'rare', curve:'rebound', custom:'riskLab', trait:'customMonster', main:7, sub:2, weak:-7, reliability:-5, variance:1.18, motif:'安定した平均値より、条件が揃った瞬間だけ余力を一点へ集中して上振れを取りに行く', image:'普段は閉じた蓄積器が一瞬だけ全開になる機構' },
  { id:'hardCertainty', label:'硬質確定', archetypeId:'flagship', tier:'rare', curve:'plateau', custom:'manufacturerPlus', trait:'precisionSeed', main:8, sub:4, weak:-3, reliability:13, motif:'理論最高値ではなく「この条件なら必ずこの値を出す」という再現性を最上級性能と定義する', image:'揺れのない一本の測定線と固定された基準器' },
  { id:'emergentBehavior', label:'創発挙動', archetypeId:'aiAnomaly', tier:'experimental', curve:'fielddeepen', custom:'trial', trait:'autonomousMaturation', main:2, sub:8, weak:-6, reliability:-4, growth:.035, motif:'設計者が細かな行動を規定せず、局所ルールの積み重ねから戦術そのものを発生させる', image:'単純な点群から複雑な軌道が立ち上がるシミュレーション' },
  { id:'localOptimum', label:'局所最適', archetypeId:'weaponSavant', tier:'specialized', curve:'middle', custom:'weaponExtreme', trait:'weaponPurist', main:3, sub:2, weak:-5, weapon:13, avoid:-7, motif:'全用途を狙わず、一つの兵装・距離・状況へ性能資源を集中して狭い条件で最大効率を取る', image:'広い地形の中で一点だけ深く掘り下げられた性能曲面' },
  { id:'reversibleFrame', label:'可逆構造', archetypeId:'adaptive', tier:'standard', curve:'catchup', custom:'modular', trait:'modularFrame', main:3, sub:5, weak:-2, motif:'改修を一方向の固定化にせず、運用途中でも構成を戻し別方向へ組み替えられることを価値にする', image:'裏返しても噛み合う対称ジョイントと交換骨格' },
  { id:'zeroOrigin', label:'零起点', archetypeId:'apex', tier:'rare', curve:'finalburst', custom:'blank', trait:'finalYearBurst', main:10, sub:3, weak:-8, reliability:-3, growth:.045, motif:'歴代系列の名前・外形・定石を意図的に捨て、メーカーが今作るなら何を最初の一線に置くかをゼロから問い直す', image:'既存図面を消した白紙に最初の一本だけが引かれる瞬間' },
];
const TIER_WEIGHT={mass:1.55,standard:1.0,specialized:.54,experimental:.25,rare:.12};

function topGroups(maker) {
  const entries=Object.entries(maker?.profile?.groupBias ?? {}).sort((a,b)=>Number(b[1])-Number(a[1]));
  return [entries[0]?.[0] ?? 'control', entries[1]?.[0] ?? 'engine', entries.at(-1)?.[0] ?? 'output'];
}
function coinedName(manufacturerId, roleIndex) {
  const makerIndex=MAKER_INDEX.get(manufacturerId) ?? 0;
  const start=NAME_START[makerIndex % NAME_START.length];
  const core=NAME_CORE[roleIndex % NAME_CORE.length];
  const end=NAME_END[(makerIndex*7+roleIndex*3)%NAME_END.length];
  return { latin:`${start[0]}${core[0]}${end[0]}`, kana:`${start[1]}${core[1]}${end[1]}` };
}
function slug(value) { return String(value).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }
function weaponPair(manufacturerId,index,predecessor) {
  const seed=[...manufacturerId].reduce((sum,ch)=>sum+ch.charCodeAt(0),0)+index*11;
  const p1=predecessor.preferredWeapons?.[index%Math.max(1,predecessor.preferredWeapons?.length ?? 0)] ?? WEAPON_KEYS[seed%WEAPON_KEYS.length];
  let p2=WEAPON_KEYS[(seed+5)%WEAPON_KEYS.length];
  if(p2===p1) p2=WEAPON_KEYS[(seed+7)%WEAPON_KEYS.length];
  let avoid=predecessor.avoidedWeapons?.[0] ?? WEAPON_KEYS[(seed+9)%WEAPON_KEYS.length];
  if(avoid===p1 || avoid===p2) avoid=WEAPON_KEYS[(seed+13)%WEAPON_KEYS.length];
  return [p1,p2,avoid];
}
function groupAdjustments(maker,role) {
  const [primary,secondary,weak]=topGroups(maker); const out={};
  if(role.main) out[primary]=(out[primary]??0)+role.main;
  if(role.sub) out[secondary]=(out[secondary]??0)+role.sub;
  if(role.weak) out[weak]=(out[weak]??0)+role.weak;
  return out;
}
function growthAdjustments(maker,role) {
  const [primary,secondary]=topGroups(maker); const out={}; const g=Number(role.growth ?? .02);
  if(g) out[primary]=g;
  if(role.sub>0) out[secondary]=Math.max(.01,Math.min(.05,g*.72 || .018));
  return out;
}

export const NINTH_WAVE_SERIES_DEFINITIONS = EIGHTH_WAVE_SERIES_DEFINITIONS.map((predecessor, globalIndex) => {
  const idx=globalIndex%20;
  const role=ROLES[idx];
  const maker=MAKER_MAP.get(predecessor.manufacturerId);
  const seriesNumber=161+idx;
  const coined=coinedName(predecessor.manufacturerId,idx);
  const nameLatin=coined.latin;
  const nameKana=coined.kana;
  const [primary,secondary,weak]=topGroups(maker);
  const [preferred,preferred2,avoided]=weaponPair(predecessor.manufacturerId,idx,predecessor);
  const preferredWeapons=role.weapon2 ? [preferred,preferred2] : [preferred];
  const weaponAdjustments={ [preferred]: Number(role.weapon ?? 4) };
  const weaponGrowthAdjustments={ [preferred]: role.weapon ? .08 : .04 };
  if(role.weapon2){ weaponAdjustments[preferred2]=role.weapon2; weaponGrowthAdjustments[preferred2]=.065; }
  if(role.avoid){ weaponAdjustments[avoided]=role.avoid; weaponGrowthAdjustments[avoided]=-.055; }
  const primaryLabel=GROUP_LABEL[primary]??primary;
  const secondaryLabel=GROUP_LABEL[secondary]??secondary;
  const weakLabel=GROUP_LABEL[weak]??weak;
  const concept=`${nameKana}（${nameLatin}）は「${role.label}」を主題にした第9世代系列。${role.motif}。${maker?.name ?? predecessor.manufacturerId}の設計思想を受け継ぐ一方、第9世代では前身の外形や名称を守ること自体を目的にせず、必要な機能関係から機体を組み直すクリーンシート設計を採用した。`;
  const namingConcept=`名称「${nameKana} / ${nameLatin}」は前身${predecessor.nameKana ?? predecessor.nameLatin}の語幹・型式名・副名称を一切流用しない第9世代専用の新造語。既存名の後ろへ語を足す副名称方式も使用せず、「${role.label}」という設計像から音と綴りを新しく与えている。設計モチーフは「${role.image}」。名称と外観上のイメージを、性能ランクではなく機構の考え方へ直接結び付けることで、名前だけでも従来系列の延長ではないことが伝わるようにしている。`;
  const developmentBackground=`第8世代までに育成・改修・兵装選択を製品仕様へ深く組み込んだ結果、系列名まで前身へ依存すると「新しい運用思想なのに旧型の派生に見える」という問題が生まれた。そこで第9世代では、系譜上の系譜上の前身#${predecessor.seriesNumber}はデータとして保持しながら、商品名・設計モチーフ・基本構成を独立させる方針へ転換。${role.label}を最初の設計条件に置き、そこから必要な構造を逆算している。`;
  const engineeringNotes=`基礎設計は${primaryLabel}と${secondaryLabel}を中心に組むが、単純な二軸強化ではない。${role.motif}という考え方を成立させるため、${weakLabel}側には意図的な不足や調整余地が残りやすい。第9世代では「弱点を消して万能化する」より、どの条件で設計思想が最大効率になるかを明確にする方が完成形に近い。`;
  const trainingNotes=`成長曲線は「${CURVE_LABEL[role.curve] ?? role.curve}」、カスタム適性は「${CUSTOM_LABEL[role.custom] ?? role.custom}」。初期能力だけで採用を判断せず、3年間の成長曲線と改修適性を合わせて完成時の役割を決める。特に第9世代はクリーンシート設計のため、前身系列と同じ育成メニューを機械的に引き継ぐより、個体の基礎倍率・成長倍率・兵装適性を見て新しい運用を組む方が強みを引き出しやすい。`;
  const weaponDoctrine=`推奨兵装は${preferredWeapons.map(k=>WEAPON_LABEL[k]??k).join(' / ')}。${role.id==='asymmetricTwin'?'二つの兵装を同じ役割へ寄せず、異なる距離・比較軸を担当させる':role.id==='localOptimum'?'一兵装へ集中し、狭い条件で最大効率を取る':'系列の設計モチーフを戦闘中に最も再現しやすい兵装として選定されている'}。非推奨は${WEAPON_LABEL[avoided]??avoided}だが装備禁止ではなく、基礎能力やパーツで不足を補えば別路線も成立する。`;
  return {
    id:`${predecessor.manufacturerId}-${slug(nameLatin)}`,
    manufacturerId:predecessor.manufacturerId,
    seriesNumber,
    nameKana,
    nameLatin,
    archetypeId:role.archetypeId,
    summary:`${role.label}。${role.motif}。`,
    concept,namingConcept,developmentBackground,engineeringNotes,trainingNotes,weaponDoctrine,
    marketPosition:`${role.label} / 第9世代クリーンシート`,
    productionTier:role.tier,
    availabilityWeight:TIER_WEIGHT[role.tier],
    predecessorNumber:141+idx,
    individualityTrait:role.id==='opportunityLoad'?'jackpot':role.id==='localOptimum'?'weaponSwing':role.id==='emergentBehavior'?'growthSwing':role.id==='hardCertainty'||role.id==='faultMesh'?'uniform':'normal',
    growthCurveId:role.curve,
    customAptitudeId:role.custom,
    intrinsicTraitId:role.trait,
    ninthGeneration:true,
    refitGeneration:9,
    refitVersion:'4.0',
    cleanSheetNaming:true,
    preferredWeapons,
    avoidedWeapons:[avoided],
    abilityTendencyTags:[primary,secondary,preferred,role.id==='emergentBehavior'?'ai':role.id==='blindspotHunter'?'sensor':role.id==='thermalRhythm'?'engine':'official'],
    abilityTendencyMultiplier:['resonanceDrive','localOptimum','opportunityLoad','zeroOrigin'].includes(role.id)?1.54:1.42,
    annualVolatility:role.tier==='experimental'||role.tier==='rare'?1.30:role.tier==='mass'?.76:1,
    groupAdjustments:groupAdjustments(maker,role),
    growthAdjustments:growthAdjustments(maker,role),
    reliabilityAdjustment:Number(role.reliability??0),
    resistanceAdjustment:Number(role.resistance??0),
    weaponAdjustments,
    weaponGrowthAdjustments,
    statVarianceMultiplier:Number(role.variance ?? ((role.id==='hardCertainty'||role.id==='faultMesh') ? .80 : 1)),
    growthVarianceMultiplier:role.id==='emergentBehavior' ? 1.18 : role.id==='hardCertainty' ? .84 : 1,
    eccentricBonusAdjustment:role.id==='opportunityLoad'?.065:0,
  };
});

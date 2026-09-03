// v3.3 third-generation refit: series 41-60 of every manufacturer.
// The third wave already had strong numerical identities; this layer brings its
// lore, growth identity, customization doctrine, and lineage explanation up to
// the same standard as the v3.1/v3.2 refits without inflating raw performance.

import { THIRD_WAVE_SERIES_DEFINITIONS } from './seriesThirdWaveDefinitions.js?v=3.5';
import { MANUFACTURERS } from './manufacturers.js?v=3.5';

const MAKER_MAP = new Map(MANUFACTURERS.map((item) => [item.id, item]));
const GROUP_LABELS = { output:'出力系', mobility:'駆動系', control:'制御系', engine:'機関系', compute:'演算系', sensor:'センサー系', ai:'AI系' };
const WEAPON_LABELS = { blade:'ブレード', hammer:'ハンマー', lance:'ランス', beamBlade:'ビームブレード', rifle:'ライフル', machineGun:'マシンガン', cannon:'キャノン', laser:'レーザー', beamCannon:'ビーム砲', missile:'ミサイル', emp:'EMP', drone:'ドローン' };

const THEME_LENS = {
  '山':'山の高さ・稜線・火山活動・地形の複雑さを、負荷経路、ピーク性能、構造余裕、性能発現条件へ読み替える',
  '花':'開花時期、繁殖、生育環境、花弁構造、香りや耐候性を、成長曲線、運用環境、性能の現れ方へ読み替える',
  '鉱石':'硬さ、靭性、比重、結晶構造、熱・電気特性を、構造材、機関、出力、耐性の設計言語へ読み替える',
  '動物':'身体構造、感覚、捕食・回避、群れ、運動様式を、駆動特性とAI行動原理へ読み替える',
  '神話':'神格や怪物の役割、逸話、象徴、権能を「この機体は何を成すべきか」という設計目標へ読み替える',
  '天体':'軌道、周期、光度、質量、観測、重力関係を、予測、安定性、性能周期、情報処理へ読み替える',
  '色':'色相、明度、彩度、混色、視認性、対比を、能力同士の相互作用や情報処理の構造へ読み替える',
  '気象・自然現象':'発生条件、持続、急変、局地性、拡散を、瞬発・持続・環境適応・性能変動へ読み替える',
  '特殊':'名称を通常の製品名ではなく、研究命題、実験条件、観測された法則を示す短い識別子として扱う',
};

const MAKER_LENS = {
  kirishima:'第2世代で用途別に尖らせた設計を、第三世代では実際の製品系列として持続可能な形へまとめ直す。強さより「その仕事を毎回やり切れるか」を最後まで判断基準にする',
  mizuho:'第2世代の運用データをさらに蓄積し、評価された癖は残し、不満が集中した部分だけを狙って改修する。第三世代は設計室より現場の声が強く見える世代になった',
  gogaku:'過剰設計を単なる重量増にせず、何に余裕を残すかを用途別に最適化した。軽量機にも高速機にも「壊れないための余白」を別の形で残す',
  yashima:'どんな条件でも万能にするのではなく、環境が崩れた時に最低限何を残すかを系列ごとに決めた。第三世代はフェイルセーフの思想が性能配分そのものへ表れる',
  hokushin:'第2世代で測定可能にしたピーキーさを、第三世代では量産・運用可能な許容範囲へ定義し直した。高性能ほど校正条件と再現条件が厳密になる',
  shinonome:'情報系を単に高性能化するのではなく、情報を「減らす」「捨てる」「統合する」設計まで含めて系列化した。物理性能との交換関係も明示される',
  amagi:'第2世代で作った動きの癖を、第三世代では戦闘中の行動パターンへつなげた。速さだけでなく、止まり方、向き直り方、攻め直し方まで系列の個性になる',
  kamishiro:'異端技術を試す段階から、一つの理想像を製品として成立させる段階へ進んだ。常識外れな配分でも、神話名が示す役割を果たすなら設計を正当化する',
  lancaster:'第2世代で細分化した市場を、第三世代では価格帯・顧客像・運用コストまで含む商品として整理した。系列ごとの「誰が買うのか」が最も明確な世代',
  steinwald:'構造を先に成立させる原則を守りながら、第三世代ではその構造が生む運動や情報の癖まで設計対象にした。電子補正は最後の仕上げに留める',
  cromwell:'相互作用を設計する思想をさらに進め、第三世代では強みと弱みを別系統で相殺するのではなく、複数系統が同時に働いた時だけ最大性能が出る構成を好む',
  rhenium:'特殊素材や加工法を「高級だから強い」で終わらせず、その材料でしか成立しない用途へ割り当てる。第三世代は代替不能性を商品価値として前面に出す',
  hawthorne:'系列ごとの行動哲学をさらに明確化し、能力値より「どう判断する機械か」を差別化する。第三世代では同じ性能でも選ぶ行動が違うことを狙う',
  arcadia:'理想像から逆算する姿勢を保ちつつ、第三世代では理想を一つの数値ではなく運用シーンとして定義する。理想場面では圧倒的、外れると弱点も大きい',
  solberg:'シミュレーションで予測した性能分布を製品仕様へ落とし込み、第三世代では平均だけでなく上振れ・下振れまで設計値として扱う',
  grayson:'試作的な構成を大量生産工程へ落とし込む技術が成熟し、第三世代では「変わった機体を千機同じ品質で作る」こと自体が差別化になる',
  laplace:'個別の数理モデルを実証した第2世代から、第三世代では複数モデルを実戦の意思決定へ結びつける。名称は計算手法ではなく戦闘をどう捉えるかという仮説に近い',
  bureau13:'CASE-41以降も共通思想は持たず、要求仕様に対して必要な技術だけを選ぶ。ただし過去CASEの失敗・成功は部品選定や捨てる要件に静かに反映されている',
  eidolon:'個体差を残すだけでなく「どの方向へ外れるか」まで設計対象にした。第三世代は当たり外れではなく、異なる正解を同一系列内へ許容する',
  logos:'系列間の因果関係は公表されないが、第三世代では過去系列との数値的な対応や反復パターンがより明瞭になる。目的は依然として不明のまま',
};

const ARCH = {
  longSeller:{ role:'主力量産・ロングセラー', design:'長期運用で見つかった小さな不満を潰し、突出より故障しにくい総合完成度へ収束させる', weakness:'派手な一芸や大きな当たり個体は出にくく、最新の尖った専門系列との一点勝負では譲る', growth:'steady', custom:'conservative', trait:'maturePlatform', individuality:'uniform', tags:['reliability'] },
  flagship:{ role:'フラッグシップ', design:'企業の看板として複数系統を高水準でまとめ、弱点を目立たせない完成品へ仕上げる', weakness:'初期完成度が高いぶん育成による劇的な性格変更は起こりにくく、特化機の最高値には届かない場合がある', growth:'frontloaded', custom:'precision', trait:'finishedProduct', individuality:'stableGrowth', tags:['official','reliability'] },
  budget:{ role:'廉価量産', design:'部品点数と製造工数を削りつつ、役割に必要な能力だけは落とさない最小限の製品構成を作る', weakness:'用途外へ転用した時の余白が少なく、カスタムで大きく方向転換すると元設計の弱点が出やすい', growth:'steady', custom:'conservative', trait:'minimalResponse', individuality:'uniform', tags:['reliability'] },
  glassCannon:{ role:'一点突破・瞬間決戦', design:'一つの勝ち筋へ資源を集中し、短時間だけ同格を大きく上回る性能を作る', weakness:'得意条件を外すと耐性・持続性・汎用性の不足が表面化しやすい', growth:'early', custom:'overresponsive', trait:'overdriveLearning', individuality:'statSwing', tags:['output','result'] },
  growthProject:{ role:'育成前提', design:'納入時の完成度を抑え、学習・調整・改修で性能が変わる余白を意図的に残す', weakness:'育成方針が散ると未完成のまま終わり、初年度の即戦力性も低い', growth:'late', custom:'modular', trait:'slowForge', individuality:'growthSwing', tags:['ai'] },
  retro:{ role:'復刻・旧思想再解釈', design:'過去の単純で明快な設計原理を現代部品で作り直し、複雑化で失われた長所を取り戻す', weakness:'旧思想が想定していなかった複合運用や新型兵装では柔軟性を欠くことがある', growth:'steady', custom:'manufacturer', trait:'maturePlatform', individuality:'uniform', tags:['reliability'] },
  counterDesign:{ role:'他社対抗・対策設計', design:'想定する競合や苦手状況を先に定め、その相手への回答として性能配分を組む', weakness:'対策対象がいない戦場では投資の一部が遊びやすく、純粋な万能性は低い', growth:'catchup', custom:'modular', trait:'weaknessLearner', individuality:'stableGrowth', tags:['resistance','result'] },
  weaponSavant:{ role:'兵装専用級', design:'特定兵装の反応・制御・効率を引き出すために機体全体を合わせ込み、兵装側の数字以上の運用性を狙う', weakness:'得意兵装から外れると系列価値が急落し、対策を読まれた時の逃げ道が少ない', growth:'steady', custom:'weapon', trait:'weaponPurist', individuality:'weaponSwing', tags:['weapon'] },
  aiAnomaly:{ role:'AI異端', design:'物理性能を平均域に置き、判断や予測の癖を極端化して通常とは違う勝ち筋を作る', weakness:'AI判断が噛み合わない相手には物理的な余裕がなく、個体差で挙動も変わりやすい', growth:'middle', custom:'electronic', trait:'autonomousMaturation', individuality:'growthSwing', tags:['ai'] },
  lottery:{ role:'高個体差・大当たり系列', design:'平均を整えるより、少数の突出個体が生まれる余地を残し、設計限界を量産個体から探る', weakness:'同じ系列名だけでは実力を読めず、外れ個体は育成で埋め切れない弱点を持つこともある', growth:'middle', custom:'trial', trait:'eccentricLegacy', individuality:'jackpot', tags:['result'] },
  reliable:{ role:'高信頼・安定運用', design:'最高値よりロット差と試合時のブレを抑え、同じ仕事を繰り返せることを優先する', weakness:'上振れによる番狂わせや急成長は起きにくく、純粋な上限値は専門機に譲る', growth:'frontloaded', custom:'precision', trait:'precisionSeed', individuality:'uniform', tags:['reliability'] },
  ultraMobile:{ role:'超機動', design:'重量・慣性・制御経路を削り、反応と加速で有利な状態へ先に入る', weakness:'重装備・耐性・長期稼働の余裕が小さく、止められた時の立て直しが難しい', growth:'early', custom:'modular', trait:'minimalResponse', individuality:'statSwing', tags:['mobility','control'] },
  fortress:{ role:'要塞・耐久特化', design:'構造、熱容量、負荷耐性へ余裕を集中し、多少不利な条件でも性能を崩さない', weakness:'機動と先手性能を犠牲にしやすく、相手に展開を選ばれると硬さだけでは主導権を取れない', growth:'steady', custom:'structural', trait:'survivalDoctrine', individuality:'uniform', tags:['engine','resistance'] },
  dataGlass:{ role:'情報一点・脆弱高性能', design:'演算・センサー・AIの連鎖へ極端に投資し、物理性能の不足を情報優位で先回りして補う', weakness:'情報優位を崩されると耐性や機関の余裕不足が一気に露出する', growth:'middle', custom:'electronic', trait:'dataDoctrine', individuality:'statSwing', tags:['compute','sensor','ai'] },
  adaptive:{ role:'運用適応', design:'役割を一つに固定せず、育成や実戦データに応じて弱点を補いながら仕事を変えられる余白を残す', weakness:'方針を決めずに育てると器用貧乏になりやすく、初期状態では強さが見えにくい', growth:'catchup', custom:'modular', trait:'weaknessLearner', individuality:'stableGrowth', tags:['ai'] },
  volatileExperimental:{ role:'高変動・実験', design:'未知の相互作用をあえて残し、平均性能より成功時の突出と新しい挙動を観測する', weakness:'個体差と副作用が大きく、同系列でも運用法を使い回しにくい', growth:'middle', custom:'trial', trait:'volatileCore', individuality:'jackpot', tags:['result'] },
  massProduction:{ role:'超量産・工程最適化', design:'部品公差、組立順序、校正時間まで含めて性能を工程化し、大量配備でも個体差を抑える', weakness:'工程外の特殊改修や極端な一点特化には対応しにくく、設計余白は計画的に絞られている', growth:'frontloaded', custom:'manufacturer', trait:'precisionSeed', individuality:'uniform', tags:['reliability'] },
  lateGrowth:{ role:'晩成・長期調整', design:'初期値より内部余力と学習効率を重視し、三年間の終盤で完成するよう設計する', weakness:'短期評価では弱く見えやすく、育成機会を失うと設計価値そのものが消える', growth:'finalburst', custom:'modular', trait:'finalYearBurst', individuality:'growthSwing', tags:['ai'] },
  overengineered:{ role:'過剰設計・余裕重視', design:'必要値を超える構造・熱・電力余裕を残し、想定外の負荷で性能が崩れないことを狙う', weakness:'重量とコストに相当する配分を使うため、機動や一点火力の効率では専門機に劣る', growth:'steady', custom:'structural', trait:'survivalDoctrine', individuality:'uniform', tags:['engine','resistance','reliability'] },
  apex:{ role:'限定最上位・到達点', design:'企業が持つ複数技術を一機へ統合し、弱点を減らした上で高い上限を目指す', weakness:'希少で完成度が高く、育成による劇的な変化より初期性能を活かす運用になりやすい', growth:'frontloaded', custom:'precision', trait:'balancedCeiling', individuality:'stableGrowth', tags:['official','reliability'] },
};

function unique(items=[]) { return [...new Set(items.filter(Boolean))]; }
function topKeys(map={}, positive=true, count=2) {
  return Object.entries(map).filter(([,v]) => positive ? Number(v)>0 : Number(v)<0)
    .sort((a,b)=>positive ? Number(b[1])-Number(a[1]) : Number(a[1])-Number(b[1])).slice(0,count).map(([k])=>k);
}
function groupText(keys, fallback) { return keys.length ? keys.map((k)=>GROUP_LABELS[k]??k).join('・') : fallback; }
function weaponText(keys) { return keys?.length ? unique(keys).map((k)=>WEAPON_LABELS[k]??k).join(' / ') : '特定兵装へ固定しない'; }
function makerNamingLens(maker) {
  if (maker?.id==='laplace') return '数理概念を、戦闘現象を切り分けるモデルや予測条件へ対応させる';
  if (maker?.id==='bureau13') return 'CASE番号そのものを要求仕様への技術回答の識別子として扱い、愛称を与えない';
  if (maker?.id==='eidolon') return '幻影・記憶・境界の揺らぎを、個体差や認識の不確実性へ対応させる';
  if (maker?.id==='logos') return '概念語を目的説明ではなく、観測される設計法則のラベルとして用いる';
  return THEME_LENS[maker?.theme] ?? THEME_LENS['特殊'];
}

function makeRefit(series) {
  const maker = MAKER_MAP.get(series.manufacturerId);
  const arch = ARCH[series.archetypeId] ?? ARCH.adaptive;
  const strongKeys = topKeys(series.groupAdjustments, true);
  const weakKeys = topKeys(series.groupAdjustments, false);
  const strong = groupText(strongKeys, '系列の主目的に直結する領域');
  const weak = groupText(weakKeys, '数値だけでは見えにくい運用余力');
  const preferred = unique(series.preferredWeapons ?? []);
  const avoided = unique(series.avoidedWeapons ?? []).filter((k)=>!preferred.includes(k));
  const preferredText = weaponText(preferred);
  const avoidedText = avoided.length ? weaponText(avoided) : '明確な非推奨兵装は設けない';
  const predecessor = Number(series.predecessorNumber ?? 0);
  const predecessorText = predecessor ? `第${predecessor}系列` : '第2世代の設計資産';
  const makerLens = MAKER_LENS[maker?.id] ?? maker?.philosophy ?? '';
  const namingLens = makerNamingLens(maker);
  const reliability = Number(series.reliabilityAdjustment ?? 0);
  const resistance = Number(series.resistanceAdjustment ?? 0);
  const reliText = reliability >= 3 ? '信頼性側にも余裕を与え、性能を再現しやすくした' : reliability <= -2 ? '再現性の一部を削ってでも狙った性能を優先した' : '信頼性は用途に必要な標準域へ置いた';
  const resistText = resistance >= 2 ? '耐性にも設計余力を残す' : resistance <= -2 ? '耐性の一部を割り切って他系統へ資源を回す' : '耐性は大きく偏らせない';

  const concept = `${series.nameKana} / ${series.nameLatin} は、第3世代の${arch.role}として再整理した系列。${series.concept ?? arch.design}。${predecessorText}から受け継いだ設計資産をそのまま高性能化するのではなく、実際の市場・運用・育成で役割が重複しないよう「何を残し、何を捨てるか」を再定義した。${maker?.name ?? 'メーカー'}の「${maker?.philosophy ?? ''}」という企業思想を、${arch.design}という一見意外な形も含めて具体化している。`;
  const namingConcept = `名称「${series.nameKana} / ${series.nameLatin}」は、${namingLens}という読み方を前提にしている。第3世代では名称モチーフを外観の飾りではなく、性能が立ち上がる条件、強みが続く時間、弱点の置き場所、育成後の姿を共有する設計言語として扱う。この系列では特に「${arch.role}」という立場へモチーフを結び付け、名前から設計の癖を連想できるようにした。`;
  const developmentBackground = `開発背景には、第2世代の尖った系列が実戦で十分な成果を出した一方、用途の狭さ、整備性、育成難度、競合との差別化といった別の問題が見えたことがある。${makerLens}。そこで${series.nameKana}では${predecessorText}の長所を核にしつつ、${arch.design}ことを第三世代の回答とした。${arch.weakness}という代償も仕様の一部として明記し、万能化で個性を消すより「弱点まで含めて選ぶ理由がある機体」を目指している。`;
  const engineeringNotes = `設計上の署名は${strong}へ現れやすく、${weak}には意図的な余白不足が残りやすい。${reliText}うえで、${resistText}。${preferred.length ? `${preferredText}は機体側の強みと同時に働くよう合わせ込まれている。` : '兵装を固定せず、個体ごとの適性分布から運用を決められる余地を残す。'} ${avoided.length ? `${avoidedText}は設計思想と噛み合いにくく、使う場合は基礎能力やパーツで補う必要がある。` : ''}${arch.weakness}。その欠点を消し切らないことが、同メーカー内の別系列との差別化になっている。`;
  const trainingNotes = `育成曲線は「${arch.growth==='early'?'早熟':arch.growth==='late'?'晩成':arch.growth==='finalburst'?'最終年爆発':arch.growth==='frontloaded'?'完成品':arch.growth==='catchup'?'弱点補正':arch.growth==='middle'?'中盤型':'均等'}」を明確な前提にする。${arch.growth==='early'?'1年目から得意分野へ集中し、早い段階で勝ち筋を完成させたい。':arch.growth==='late'?'初年度の総合値だけで判断せず、2～3年目へ投資を残すほど系列らしさが出る。':arch.growth==='finalburst'?'1～2年目は土台を作り、3年目に得意系統へ一気に寄せると設計余力を活かしやすい。':arch.growth==='frontloaded'?'初期完成度を利用し、弱点を全部直すより既に高い領域を実戦水準へ早く仕上げる方が効率的。':arch.growth==='catchup'?'最も低い基礎グループを先に補い、その後に役割を決めると適応設計が働きやすい。':arch.growth==='middle'?'1年目に方向性を決め、2年目の伸びを主戦場として完成形を作る。':'3年間で一つの軸を崩さず育てると安定する。'} カスタムは${arch.custom==='weapon'?'兵装系':arch.custom==='electronic'?'電子系':arch.custom==='structural'?'構造・耐性系':arch.custom==='trial'?'挑戦的な試供品を含む実験系':arch.custom==='precision'?'精密・再現性重視':arch.custom==='manufacturer'?'純正メーカー系':arch.custom==='overresponsive'?'高反応・高副作用系':arch.custom==='conservative'?'副作用を抑える保守系':'用途変更に強いモジュール系'}と相性が良い。`;
  const weaponDoctrine = preferred.length
    ? `${preferredText}を主軸に、${arch.design}という設計思想を兵装運用へ直接つなげる。${avoided.length ? `${avoidedText}は非推奨。` : ''}単純な兵装平均より、機体側の基礎能力と兵装6項目が同時に強くなる構成を優先する。`
    : `特定兵装へ固定せず、${arch.design}という設計思想を満たせる兵装を個体ごとに選択する。全兵装適性を比較し、基礎能力との相乗が最も大きい構成へ寄せる。`;

  return {
    id: series.id,
    thirdGenerationRefit: true,
    refitGeneration: 3,
    refitVersion: '3.3',
    summary: `${arch.role}。${String(series.concept ?? arch.design).split('。')[0]}。第3世代では系譜上の役割と育て方まで明文化した。`,
    concept, namingConcept, developmentBackground, engineeringNotes, trainingNotes, weaponDoctrine,
    marketPosition: `${arch.role} / 第3世代成熟群`,
    individualityTrait: arch.individuality,
    growthCurveId: arch.growth,
    customAptitudeId: arch.custom,
    intrinsicTraitId: arch.trait,
    abilityTendencyTags: unique([...(arch.tags ?? []), ...preferred, ...strongKeys]),
    abilityTendencyMultiplier: ['volatileExperimental','lottery','aiAnomaly'].includes(series.archetypeId) ? 1.30 : 1.25,
    avoidedWeapons: avoided,
  };
}

export const THIRD_GENERATION_REFIT_OVERRIDES = THIRD_WAVE_SERIES_DEFINITIONS.map(makeRefit);

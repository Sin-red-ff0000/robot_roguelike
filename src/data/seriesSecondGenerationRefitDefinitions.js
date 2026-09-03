// v3.2 second-generation refit: series 21-40 of every manufacturer.
// The original v2.8 expansion remains the numerical foundation, while this layer
// gives all 400 second-generation series explicit lore, training identity, and
// customization doctrine at the same descriptive density as the v3.1 legacy refit.

import { EXPANDED_SERIES_DEFINITIONS } from './seriesExpansionDefinitions.js?v=3.2';
import { MANUFACTURERS } from './manufacturers.js?v=3.2';

const MAKER_MAP = new Map(MANUFACTURERS.map((item) => [item.id, item]));

const GROUP_LABELS = {
  output: '出力系', mobility: '駆動系', control: '制御系', engine: '機関系',
  compute: '演算系', sensor: 'センサー系', ai: 'AI系',
};

const WEAPON_LABELS = {
  blade: 'ブレード', hammer: 'ハンマー', lance: 'ランス', beamBlade: 'ビームブレード',
  rifle: 'ライフル', machineGun: 'マシンガン', cannon: 'キャノン', laser: 'レーザー',
  beamCannon: 'ビームキャノン', missile: 'ミサイル', emp: 'EMP', drone: 'ドローン',
};

const THEME_LENSES = {
  '山': '山容・地形・標高差を、荷重の受け方、ピーク性能、登攀経路、足場の安定といった工学的な比喩へ読み替える',
  '花': '花の生育、開花、姿形、香り、季節性を、成長曲線や使用環境、機体の見せる性能変化へ読み替える',
  '鉱石': '鉱物や元素の硬さ、靭性、比重、導電性、結晶構造といった物性を、機体構造と性能配分へ読み替える',
  '気象・自然現象': '現象の発生条件、持続時間、急変、拡散、局地性を、戦闘中の性能発現と環境適応へ読み替える',
  '天体': '軌道、周期、質量、光度、観測精度といった天文学的性質を、挙動予測と性能配分のモデルへ読み替える',
  '色': '色相、明度、彩度、混色、視認性の差を、複数能力の組み合わせ方や情報処理の設計言語へ読み替える',
  '動物': '身体構造、運動様式、感覚器、捕食・回避行動を、機体の動き方とAIの行動原理へ読み替える',
  '神話': '神話上の役割、逸話、象徴、権能を、機体に持たせる理想像や運用上の役割へ読み替える',
  '特殊': '名称そのものを、通常企業では採用しにくい研究仮説や設計命題の短縮記号として扱う',
};

const MAKER_LENSES = {
  kirishima: '第1世代で得た「要求仕様を狭く定義すれば、尖った設計でも再現性を持たせられる」という知見を使い、用途を敢えて限定することで極端な系列を量産設計の言葉へ落とし込んだ',
  mizuho: '第1世代の運用ログを大量に回収し、現場で実際に困った点と、逆に想定以上に評価された挙動を次世代設計へ直接反映した。机上の理想より「使われた結果」を設計根拠にする',
  gogaku: '余裕を重さだけで表現せず、熱、出力、構造、駆動のどこへ余裕を置くかを分解した世代。軽量・高速型でさえ「壊れない余白を残した上で速い」という同工廠なりの逆説を狙った',
  yashima: '環境適応を単なる耐久性ではなく「条件が変わったときに、どの機能を残すか」という優先順位設計へ発展させた。極端な系列でも最低限の仕事を続けられる逃げ道を必ず持たせる',
  hokushin: 'ピーキーな性能を禁止するのではなく、ピーキーさの発生条件と誤差を測定可能にすることで採用可能にした。極端な性能ほど校正手順と再現条件が細かく定義されている',
  shinonome: 'センサー、演算、AIを一体化する思想をさらに進め、物理性能の不足を情報処理で補う系列と、逆に電子系を極端に絞って情報の純度を上げる系列の両方を試した',
  amagi: '動物の見た目ではなく「どう動き、どこで止まり、何を見て判断するか」を機構へ写す段階へ進んだ。第2世代では運動特性そのものに明確な癖を与えることを重視する',
  kamishiro: '既存規格への疑問をさらに強め、神話モチーフを「この機体は何者であるべきか」という設計仮説として先に置き、通常なら避けるアンバランスさまで含めて理想像へ近づけた',
  lancaster: '市場ごとの用途をより細かく分け、性能表を見ただけで販売先が分かるほど製品キャラクターを明確化した。極端な機体も「誰が買うのか」が説明できる限り製品として成立させる',
  steinwald: '電子補正へ逃げず、フレーム、関節配置、重量配分、放熱経路といった物理構造を先に決める原則を維持したまま、通常は電子制御で解く高速・情報系の課題へ挑んだ',
  cromwell: '単一部品の最高値ではなく、複数系統の相互作用を設計する思想を先鋭化した世代。強みは必ず別の能力と連動し、弱点も別系統で吸収できるよう「組み合わせ」に意味を持たせる',
  rhenium: '希少材料と少量生産技術の価値を、単なる高性能ではなく「他の系列では成立しない一芸」へ集中させた。製造効率より、特定用途で代替不可能になることを重視する',
  hawthorne: '自律機械の行動哲学を、動物の行動様式へより直接的に結びつけた。能力値だけでなく「何を危険と見なし、何を好機と判断するか」という挙動の癖まで系列の設計対象にする',
  arcadia: '先に理想像を宣言し、それに現実を合わせる企業思想をさらに徹底した。神話名が示す役割を満たすためなら、既存の均衡や製造上の常識を崩すことも許容される',
  solberg: 'シミュレーションで予測できるなら尖った設計も採用できる、という立場を明確化した世代。極端な性能配分ほど、モデル上で成立条件と破綻条件を厳密に分けている',
  grayson: '量産できることを前提に、従来なら試作機で終わる極端な構成を工程へ落とし込んだ。部品公差や組立順序まで含めて再現性を確保し「変な機体を大量に同じ品質で作る」方向へ進んだ',
  laplace: '十分な情報があれば結果は予測できるという命題を、個別の数理モデルへ分解した世代。各系列は一つの数学概念を戦闘判断や制御へ実装した実験モデルとして扱われる',
  bureau13: '系列名を持たず、CASE番号ごとに異なる要求仕様へ回答する。第2世代というより21件の要求から40件目までの技術回答集であり、共通思想より「要求に対して何を捨てたか」が重要になる',
  eidolon: '個体差を欠陥ではなく可能性とみなす方針をさらに進め、同一系列でも性能の現れ方が異なる設計を意図的に残した。系列傾向は平均値ではなく「どんな外れ方をするか」で定義される',
  logos: '外見上は無関係な設計群に同じ法則が反復して現れる。第2世代も開発目的は公表されず、名称となる概念と能力配置の対応だけが観測されている',
};

const ARCHETYPE = {
  apex: {
    role: '象徴的フラッグシップ', design: '弱点を減らしながら複数系統を高水準で接続し、系列そのものを企業の到達点として見せる',
    weakness: '突出した一芸へ全資源を振る機体には一点勝負で届かないことがあり、完成度の高さゆえ育成による性格変更も小さめ',
    growthCurveId: 'frontloaded', customAptitudeId: 'precision', intrinsicTraitId: 'balancedCeiling', individualityTrait: 'uniform',
    abilityTags: ['official', 'reliability'], avoidedWeapons: [],
  },
  glassCannon: {
    role: '限界出力・瞬間決戦系列', design: '持続性や余裕を意図的に削り、一瞬の出力・反応・攻撃効率へ資源を集中する',
    weakness: '長引くほど熱、信頼性、耐性の不足が表面化しやすく、得意な時間帯を外すと総合値以上に脆い',
    growthCurveId: 'early', customAptitudeId: 'overresponsive', intrinsicTraitId: 'overdriveLearning', individualityTrait: 'statSwing',
    abilityTags: ['output', 'upset'], avoidedWeapons: ['drone'],
  },
  ultraMobile: {
    role: '超軽量・高機動系列', design: '重量と慣性を減らし、反応、加速、姿勢遷移の速さで先に有利な状態へ入る',
    weakness: '耐性と持続運用の余裕が少なく、重量級兵装や長い消耗戦では構造上の割り切りが露出する',
    growthCurveId: 'early', customAptitudeId: 'modular', intrinsicTraitId: 'minimalResponse', individualityTrait: 'statSwing',
    abilityTags: ['mobility', 'control'], avoidedWeapons: ['cannon', 'beamCannon'],
  },
  fortress: {
    role: '要塞・生存特化系列', design: '機動力の一部を切り、構造余力、熱容量、耐性、姿勢保持を積み重ねて崩れにくさを作る',
    weakness: '先手を取る能力と急な方針転換は不得意で、相手に得意距離を選ばれると硬さだけでは主導権を取り返しにくい',
    growthCurveId: 'steady', customAptitudeId: 'structural', intrinsicTraitId: 'survivalDoctrine', individualityTrait: 'uniform',
    abilityTags: ['engine', 'resistance'], avoidedWeapons: ['lance'],
  },
  precision: {
    role: '精密・再現性追求系列', design: '最大値より誤差の小ささを優先し、制御、観測、兵装同期を揃えて狙った動作を外さない',
    weakness: '粗い高出力運用や想定外の乱戦では設計余力を使いづらく、性能の振れによる大当たりも起きにくい',
    growthCurveId: 'frontloaded', customAptitudeId: 'precision', intrinsicTraitId: 'precisionSeed', individualityTrait: 'uniform',
    abilityTags: ['control', 'sensor', 'reliability'], avoidedWeapons: ['hammer'],
  },
  lateGrowth: {
    role: '育成・調整余地重視系列', design: '納入時の完成度を抑え、制御余白と学習余地を残して三年間の調整で真価を出す',
    weakness: '初年度は同格の完成品に見劣りしやすく、育成方針が散ると余白を活かし切れないまま卒業することもある',
    growthCurveId: 'late', customAptitudeId: 'modular', intrinsicTraitId: 'slowForge', individualityTrait: 'growthSwing',
    abilityTags: ['growth', 'adaptation'], avoidedWeapons: [],
  },
  volatileExperimental: {
    role: '高変動・実験系列', design: '平均値より成功時の突出を優先し、個体差、制御余白、未知の相互作用を意図的に残す',
    weakness: '同じ系列でも扱い方が大きく変わり、信頼性や成長率の外れ個体では設計意図そのものを再現できない',
    growthCurveId: 'middle', customAptitudeId: 'trial', intrinsicTraitId: 'eccentricLegacy', individualityTrait: 'jackpot',
    abilityTags: ['upset', 'awakening'], avoidedWeapons: [],
  },
  hybridClose: {
    role: '近接複合兵装系列', design: '一種類の近接兵装へ固定せず、姿勢制御と装備同期を使って複数の近接手段を滑らかに切り替える',
    weakness: '遠距離から一方的に情報差を作られる展開には弱く、複数兵装へ投資するぶん一芸特化の上限は低くなりやすい',
    growthCurveId: 'steady', customAptitudeId: 'weapon', intrinsicTraitId: 'adaptiveWeapons', individualityTrait: 'weaponSwing',
    abilityTags: ['blade', 'lance', 'beamBlade'], avoidedWeapons: ['beamCannon'],
  },
  hybridRanged: {
    role: '射撃複合兵装系列', design: '実体弾とエネルギー射撃の差を制御・観測側で吸収し、距離や相手に応じて射撃手段を選び直せるようにする',
    weakness: '近接で姿勢を崩されると情報処理と兵装切替の利点が薄れ、純粋な重砲型ほど一射の圧力も高くない',
    growthCurveId: 'steady', customAptitudeId: 'weapon', intrinsicTraitId: 'adaptiveWeapons', individualityTrait: 'weaponSwing',
    abilityTags: ['rifle', 'laser', 'missile'], avoidedWeapons: ['hammer'],
  },
  electronicWarfare: {
    role: '電子戦・情報干渉系列', design: '直接火力だけでなく、探知、更新、演算、AI判断の連鎖で相手より先に正しい情報へ到達する',
    weakness: '物理的な押し合いと単純な耐久勝負では投資先が噛み合わず、情報優位を作れない相手には基礎性能差が露出する',
    growthCurveId: 'middle', customAptitudeId: 'electronic', intrinsicTraitId: 'dataDoctrine', individualityTrait: 'stableGrowth',
    abilityTags: ['compute', 'sensor', 'ai', 'emp'], avoidedWeapons: ['hammer'],
  },
  weaponSavant: {
    role: '特定兵装サヴァン系列', design: '機体全体を万能化せず、選んだ兵装の反応・制御・効率を異常なほど高く引き出すことへ設計余力を集中する',
    weakness: '得意兵装から外れた瞬間に系列価値が薄くなり、対策を読まれたときの逃げ道も少ない',
    growthCurveId: 'steady', customAptitudeId: 'weapon', intrinsicTraitId: 'weaponPurist', individualityTrait: 'weaponSwing',
    abilityTags: ['weapon'], avoidedWeapons: [],
  },
  countermeasure: {
    role: '対策・弱点補正系列', design: '第1世代で明確になった苦手状況を一つ選び、その穴を埋めるために性能配分を組み替える',
    weakness: '対策対象と無関係な相手には投資の一部が遊びやすく、万能機として見ると中途半端な部分も残る',
    growthCurveId: 'catchup', customAptitudeId: 'modular', intrinsicTraitId: 'weaknessLearner', individualityTrait: 'stableGrowth',
    abilityTags: ['adaptation', 'resistance'], avoidedWeapons: [],
  },
  reliable: {
    role: '高信頼・ロングユース系列', design: '最高性能を追わず、ロット差、熱変動、制御誤差を抑えて同じ挙動を何度でも再現する',
    weakness: '大当たり個体や急激な成長は起きにくく、尖った相手に対して性能上限だけで押し返すのは苦手',
    growthCurveId: 'frontloaded', customAptitudeId: 'conservative', intrinsicTraitId: 'precisionSeed', individualityTrait: 'uniform',
    abilityTags: ['reliability', 'control'], avoidedWeapons: [],
  },
  burstAssault: {
    role: '短時間突撃系列', design: '開幕から短い時間に出力・駆動・攻撃判断を集中し、相手が態勢を整える前に勝負を傾ける',
    weakness: '初動を止められると熱と余力の不足が残り、後半ほど普通の機体へ戻っていく',
    growthCurveId: 'early', customAptitudeId: 'overresponsive', intrinsicTraitId: 'overdriveLearning', individualityTrait: 'statSwing',
    abilityTags: ['output', 'mobility', 'upset'], avoidedWeapons: ['drone'],
  },
  adaptive: {
    role: '運用適応・汎用再構成系列', design: '初期の得意分野を固定せず、実際の運用と育成内容に応じて弱点を補いながら役割を変えられる余白を持つ',
    weakness: '育成方針が曖昧なままだと器用貧乏になりやすく、初期状態だけでは系列の強さが分かりにくい',
    growthCurveId: 'catchup', customAptitudeId: 'modular', intrinsicTraitId: 'weaknessLearner', individualityTrait: 'stableGrowth',
    abilityTags: ['adaptation', 'ai'], avoidedWeapons: [],
  },
  dataGlass: {
    role: '情報一点・脆弱高性能系列', design: '演算、センサー、AIの情報連鎖へ極端に投資し、物理性能の不足を判断速度と予測精度で先回りして補う',
    weakness: '情報優位が崩れた瞬間の物理的な余裕が少なく、耐性や機関系を突かれると極端に脆い',
    growthCurveId: 'middle', customAptitudeId: 'electronic', intrinsicTraitId: 'dataDoctrine', individualityTrait: 'statSwing',
    abilityTags: ['compute', 'sensor', 'ai'], avoidedWeapons: ['hammer', 'cannon'],
  },
  overengineered: {
    role: '過剰設計・余裕重視系列', design: '必要値を超える構造・熱・電力余裕を意図的に持たせ、想定外の負荷でも性能低下を小さくする',
    weakness: '重量とコストに相当する性能配分が必要で、軽快さや一点火力では同世代の専用機に譲る',
    growthCurveId: 'steady', customAptitudeId: 'structural', intrinsicTraitId: 'survivalDoctrine', individualityTrait: 'uniform',
    abilityTags: ['engine', 'resistance', 'reliability'], avoidedWeapons: [],
  },
  minimalist: {
    role: '最小構成・応答最優先系列', design: '機能を足すより不要な経路を削り、短い信号経路と軽い構造で応答速度を稼ぐ',
    weakness: '削った機能を後から必要とする状況に弱く、複雑なカスタムや重装備では設計上の利点を失いやすい',
    growthCurveId: 'early', customAptitudeId: 'conservative', intrinsicTraitId: 'minimalResponse', individualityTrait: 'uniform',
    abilityTags: ['mobility', 'control'], avoidedWeapons: ['cannon', 'drone'],
  },
  balanced: {
    role: '第2世代標準汎用系列', design: '第1世代の弱点を整理し、突出を作りすぎず全能力の接続と運用の自由度を高める',
    weakness: '専門機との一点勝負では譲りやすく、育成で明確な軸を作らないと平均的なまま終わる',
    growthCurveId: 'steady', customAptitudeId: 'balanced', intrinsicTraitId: 'maturePlatform', individualityTrait: 'normal',
    abilityTags: ['adaptation'], avoidedWeapons: [],
  },
};

function unique(items = []) {
  return [...new Set(items.filter(Boolean))];
}

function topGroups(map = {}, count = 2, positive = true) {
  const rows = Object.entries(map).filter(([, value]) => positive ? Number(value) > 0 : Number(value) < 0);
  rows.sort((a, b) => positive ? Number(b[1]) - Number(a[1]) : Number(a[1]) - Number(b[1]));
  return rows.slice(0, count).map(([key]) => GROUP_LABELS[key] ?? key);
}

function topGroupKeys(map = {}, count = 2) {
  return Object.entries(map)
    .filter(([, value]) => Number(value) > 0)
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .slice(0, count)
    .map(([key]) => key);
}

function groupPhrase(groups, fallback) {
  return groups.length ? groups.join('・') : fallback;
}

function weaponPhrase(keys = []) {
  const names = unique(keys).map((key) => WEAPON_LABELS[key] ?? key);
  return names.length ? names.join(' / ') : '特定兵装へ固定しない';
}

function makerNamingLens(maker) {
  if (maker.id === 'laplace') return '数理概念の意味や振る舞いを、そのまま予測・制御アルゴリズムの設計命題へ置き換える';
  if (maker.id === 'bureau13') return '固有名を与えずCASE番号だけを残すことで、機体の人格より要求仕様と技術回答を前面に出す';
  if (maker.id === 'eidolon') return '幻影・記憶・境界現象の「見え方の揺らぎ」を、個体差や認識系の不確実性へ対応させる';
  if (maker.id === 'logos') return '哲学・論理学の概念語を、設計目的が不明なまま観測される共通法則の識別子として用いる';
  return THEME_LENSES[maker.theme] ?? THEME_LENSES['特殊'];
}

function productionTierFromWeight(weight) {
  const value = Number(weight ?? 1);
  if (value >= 1.15) return 'mass';
  if (value <= 0.5) return 'experimental';
  if (value <= 0.75) return 'specialized';
  return 'standard';
}

function avoidedWeaponsFor(series, arch) {
  const preferred = unique(series.preferredWeapons ?? []);
  return unique(arch.avoidedWeapons ?? []).filter((key) => !preferred.includes(key));
}

function summaryFor(series, arch) {
  const firstSentence = String(series.concept ?? '').split('。')[0].trim();
  const core = firstSentence || arch.design;
  return `${arch.role}。${core}。第2世代では役割を明確化し、得意条件と捨てる条件を意図的に分けた。`;
}

function makeRefit(series) {
  const maker = MAKER_MAP.get(series.manufacturerId);
  const arch = ARCHETYPE[series.archetypeId] ?? ARCHETYPE.balanced;
  const strong = topGroups(series.groupAdjustments, 2, true);
  const weak = topGroups(series.groupAdjustments, 2, false);
  const strongText = groupPhrase(strong, '系列本来の得意領域');
  const weakText = groupPhrase(weak, '直接数値には出にくい運用余力');
  const preferred = unique(series.preferredWeapons ?? []);
  const avoided = avoidedWeaponsFor(series, arch);
  const preferredText = weaponPhrase(preferred);
  const avoidedText = avoided.length ? weaponPhrase(avoided) : '明確な禁止兵装は設けない';
  const makerLens = MAKER_LENSES[maker?.id] ?? maker?.philosophy ?? '';
  const namingLens = makerNamingLens(maker ?? { id: '', theme: '特殊' });
  const reli = Number(series.reliabilityAdjustment ?? 0);
  const resist = Number(series.resistanceAdjustment ?? 0);
  const reliabilityText = reli >= 4 ? '信頼性には明確な余裕を与える' : reli <= -4 ? '信頼性を削ってでも狙った性能を優先する' : '信頼性は役割に必要な範囲へ留める';
  const resistanceText = resist >= 3 ? '耐性側にも余裕を残す' : resist <= -2 ? '耐性は割り切って軽量化・機能集中へ回す' : '耐性は標準域から大きく外さない';

  const concept = `${series.nameKana} / ${series.nameLatin} は、第2世代の${arch.role}として再整理された系列。${series.concept ?? arch.design}。第1世代で蓄積した運用結果を受け、単に平均性能を上げるのではなく「どの条件なら強く、どの条件は捨てるか」を明文化している。${maker?.name ?? 'メーカー'}の企業思想である「${maker?.philosophy ?? ''}」を、${arch.design}という形で具体化し、同社の中でも役割が重複しにくいよう設計境界をはっきりさせた。`;

  const namingConcept = `「${series.nameKana} / ${series.nameLatin}」という名称は、${namingLens}という第2世代の命名運用に沿う。名前は単なる製品愛称ではなく、設計会議で優先順位を共有するための短い設計言語として使われる。この系列では、そのモチーフから${arch.design}という方向を抽出し、外見的な連想ではなく、性能が現れる条件・時間・弱点の置き方まで名称の意味に結びつけている。`;

  const developmentBackground = `開発の背景には、第1世代で「汎用機を少し強くするだけでは、専門用途で競合の尖った系列に届かない」という問題が見え始めたことがある。${makerLens}。そのため${series.nameKana}では、${arch.role}としての役割を先に固定し、${arch.design}ことを開発目標にした。一方で${arch.weakness}という代償は隠さず、設計上の弱点として運用側へ明示する。第2世代らしく、強みだけでなく「何をしない機体なのか」まで製品定義に含めた系列である。`;

  const engineeringNotes = `設計上の署名は${strongText}に現れやすく、反対に${weakText}は余裕を削られやすい。${reliabilityText}一方で、${resistanceText}。基本設計は「${arch.design}」であり、数値が高い項目を並べるより、強みが同時に働くよう各系統の接続順序を調整している。${preferred.length ? `${preferredText}はその思想を最も素直に引き出す兵装として想定される。` : '兵装は個体の能力分布に合わせて選べる余地を残している。'} ${arch.weakness}。この長短が同居すること自体を、第2世代系列の個性として意図的に残している。`;

  const trainingNotes = `育成は「${arch.growthCurveId === 'early' ? '序盤で得意分野を完成させる' : arch.growthCurveId === 'late' ? '初年度の弱さを受け入れ、2～3年目の伸びを最大化する' : arch.growthCurveId === 'catchup' ? '弱点補強を先に行い、その後に得意分野を伸ばす' : arch.growthCurveId === 'middle' ? '1年目に土台を作り、2年目の伸びを主戦場にする' : arch.growthCurveId === 'frontloaded' ? '初期完成度を活かし、過剰な弱点修正より得意分野の完成を急ぐ' : '3年間を通して一貫した軸を作る'}」方針が噛み合う。カスタムは${arch.customAptitudeId === 'weapon' ? '兵装系改修' : arch.customAptitudeId === 'electronic' ? '電子系改修' : arch.customAptitudeId === 'structural' ? '構造・耐性系改修' : arch.customAptitudeId === 'trial' ? '挑戦的な試供品を含む実験改修' : arch.customAptitudeId === 'overresponsive' ? '強化と副作用を同時に受け入れる高出力改修' : arch.customAptitudeId === 'precision' ? '精密で再現性の高い改修' : arch.customAptitudeId === 'conservative' ? '副作用を抑えた保守的改修' : '用途変更に合わせたモジュール改修'}と相性が良い。${preferred.length ? `まず${preferredText}を軸にすると系列らしさが出やすい。` : '装備は固定せず、個体ごとの得意兵装を見て決める。'} ${avoided.length ? `${avoidedText}は設計余力と噛み合いにくいため、使うなら基礎能力側から補う必要がある。` : '別路線へ育てる場合も禁止構成はないが、系列の強みが同時に働く組み合わせを意識したい。'}`;

  const weaponDoctrine = preferred.length
    ? `${preferredText}を主軸に、${arch.design}という系列思想を兵装運用へ落とし込む。${avoided.length ? `${avoidedText}は非推奨。` : ''}兵装そのものの最大値より、機体側の得意系統と同時に働くことを優先する。`
    : `特定兵装へ固定せず、${arch.design}という系列思想を満たせる兵装を個体ごとに選ぶ。系列名だけで装備を決めず、基礎能力と成長率の偏りを見て運用を組み立てる。`;

  return {
    id: series.id,
    secondGenerationRefit: true,
    refitGeneration: 2,
    refitVersion: '3.2',
    summary: summaryFor(series, arch),
    concept,
    namingConcept,
    developmentBackground,
    engineeringNotes,
    trainingNotes,
    marketPosition: `${arch.role} / 第2世代派生群`,
    individualityTrait: arch.individualityTrait,
    growthCurveId: arch.growthCurveId,
    customAptitudeId: arch.customAptitudeId,
    intrinsicTraitId: arch.intrinsicTraitId,
    abilityTendencyTags: unique([...(arch.abilityTags ?? []), ...preferred, ...topGroupKeys(series.groupAdjustments)]),
    abilityTendencyMultiplier: series.archetypeId === 'volatileExperimental' ? 1.30 : 1.25,
    weaponDoctrine,
    avoidedWeapons: avoided,
  };
}

export const SECOND_GENERATION_REFIT_OVERRIDES = EXPANDED_SERIES_DEFINITIONS.map(makeRefit);

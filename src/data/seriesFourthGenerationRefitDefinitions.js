// v3.4 fourth-generation refit: series 61-80 of every manufacturer.
// This layer reviews the v3.0 fourth wave after the first three generations were
// brought to a higher lore/identity standard. It preserves the numerical role
// of each series while making the name motif, development logic, growth curve,
// customization aptitude and deliberate weaknesses explicit.

import { FOURTH_WAVE_SERIES_DEFINITIONS } from './seriesFourthWaveDefinitions.js?v=4.0';
import { MANUFACTURERS } from './manufacturers.js?v=4.0';

const MAKER_MAP = new Map(MANUFACTURERS.map((item) => [item.id, item]));
const GROUP_LABELS = { output:'出力系', mobility:'駆動系', control:'制御系', engine:'機関系', compute:'演算系', sensor:'センサー系', ai:'AI系' };
const WEAPON_LABELS = { blade:'ブレード', hammer:'ハンマー', lance:'ランス', beamBlade:'ビームブレード', rifle:'ライフル', machineGun:'マシンガン', cannon:'キャノン', laser:'レーザー', beamCannon:'ビーム砲', missile:'ミサイル', emp:'EMP', drone:'ドローン' };

const MAKER_LENS = {
  kirishima:'用途を曖昧にせず、要求性能を何度でも再現できる製品へ落とし込む霧島重工らしさを、第四世代では「極端な役割であっても仕事として成立させる」方向へ押し進めた',
  mizuho:'運用現場の反応を設計へ戻す瑞穂産業らしく、第四世代は過去系列の評価ログを大胆に読み替え、人気の癖や不満点を次の個性へ転換した',
  gogaku:'余裕は性能という剛岳工廠の思想を、重装だけでなく高速・精密・情報型にも応用し、どこへ余裕を置くかそのものを系列差にした',
  yashima:'条件が崩れても仕事を続ける八洲重機の思想を、万能化ではなく「何が壊れても最後に残す能力」を系列ごとに決める形で実装した',
  hokushin:'誤差には必ず原因があるという北辰精機の姿勢を、第四世代ではピーキーさや個体差さえ校正可能な設計変数として扱うところまで進めた',
  shinonome:'情報処理を機体設計そのものと考える東雲電子技研らしく、第四世代では取得量よりも情報の捨て方・圧縮・優先順位まで性能として設計した',
  amagi:'動きには性格があるという天城機工の考えを、第四世代では名称モチーフとなる生物の加減速・旋回・間合いの取り方へさらに直接結び付けた',
  kamishiro:'既存常識を疑う神代技研らしく、第四世代では神話名が示す役割を成立させるなら標準的な能力配分から外れることを恐れない',
  lancaster:'性能を商品として売るLancasterらしく、第四世代では顧客が一目で用途を理解できる強い商品性と、敢えて尖らせた市場ポジションを重視した',
  steinwald:'構造の正しさを先に置くSteinwaldらしく、第四世代の奇抜な役割も電子補正で誤魔化さず、骨格・配置・負荷経路から成立させる',
  cromwell:'個々の最高値より相互作用を設計するCromwellらしく、第四世代では複数系統が同時に働く瞬間だけ異常に強い構成や、逆に一部を捨てた連成設計を増やした',
  rhenium:'少量でも代替不能な技術に価値を置くRheniumらしく、第四世代では特殊素材や加工法を一つの用途へ徹底的に寄せ、量産性より存在理由を優先した',
  hawthorne:'自律機には行動哲学が必要というHawthorneらしく、第四世代は同じ能力値でも何を優先して判断するかが系列ごとに違うよう設計した',
  arcadia:'理想を先に定義するArcadiaらしく、第四世代では理想状態をより狭く鮮明にし、その場面へ到達した時の完成度と外れた時の脆さを同時に受け入れた',
  solberg:'予測可能性を重視するSolbergらしく、第四世代では平均値だけでなく成長曲線や改修反応まで事前モデルの対象とし、育成後の姿を設計値として扱う',
  grayson:'千機同じものを作れることを価値とするGraysonらしく、第四世代では本来一点物になりそうな尖った設計を量産工程で再現すること自体を技術課題にした',
  laplace:'十分な情報があれば結果は予測できるというラプラス機関らしく、第四世代は数学名を単なる名称ではなく、戦闘状態をどうモデル化するかという仮説へ対応させる',
  bureau13:'固定思想を持たない第十三技術局らしく、CASE-61以降も要求達成のためなら過去の成功形式を捨て、必要な性能だけを残す。系列間の共通性は結果としてのみ現れる',
  eidolon:'個体差を可能性として保存するエイドロン研究所らしく、第四世代では平均性能より「どの方向へ外れ得るか」「改修で何に化けるか」を設計対象にした',
  logos:'LOGOSの第四世代も開発目的は公開されない。名称概念と能力配分、成長曲線、改修反応の間に反復する規則だけが観測され、理由は説明されない',
};

const GROWTH_TEXT = {
  steady:'三年間を均等に使う前提で、早い完成にも終盤の一発にも依存しない。毎年同じ軸を積み上げるほど設計意図が崩れにくい',
  early:'初年度の吸収が大きい。早い段階で勝ち筋を決めて得意分野へ投資し、二年目以降は完成した長所を維持しながら穴を限定的に補う',
  middle:'一年目に方向を決め、二年目を主な伸長期として使う。初年度に散らすと中盤の伸びを活かし切れないため、育成方針の決断が重要になる',
  late:'納入時と初年度を未完成状態として受け入れ、二～三年目の伸びへ投資する。短期評価より最終到達点を優先する系列に向く',
  finalburst:'一～二年目で土台を作り、三年目に設計余力を一気に解放する。三年目の訓練配分が完成形を大きく左右する',
  frontloaded:'初期完成度と初年度の伸びを重視する。既に高い領域を早く実戦水準へ仕上げるほど強く、三年目の大改造には向きにくい',
  catchup:'最も低い基礎グループへ追加の学習効率を与える。弱点を放置せず埋めてから長所を伸ばすことで、適応型としての総合力が出る',
};
const CUSTOM_TEXT = {
  balanced:'標準的な反応。特定種類のパーツへ依存せず、元の数値をそのまま判断材料にしやすい',
  modular:'強化側を広く受け止める余白が大きく、多用途のカスタムで効果を少し引き上げる。改造前提の系列ほど恩恵が大きい',
  overresponsive:'強化効果も副作用も大きく出る。安全な微調整より、明確な長所と代償を同時に受け入れる改修に向く',
  conservative:'パーツの効き方自体を穏やかにし、副作用をより強く抑える。大幅な方向転換より完成度の維持に向く',
  manufacturer:'同メーカー製パーツで効果が上がる。設計公差や接続規格を純正系へ合わせ込んだ系列として扱う',
  trial:'挑戦的な試供品で正負両方の反応が強まる。結果の安定より未知の上振れを試す系列に向く',
  weapon:'兵装系パーツの効果が高い。機体そのものより特定兵装の性能を伸ばすことで完成形へ近づく',
  structural:'基礎・耐性・信頼性改修との相性が良い。骨格や機関の余白を利用し、機体側の土台を強くする',
  electronic:'基礎強化全般がやや効きやすく、特に演算・センサー・AI系で大きく反応する。電子系の再構成に余裕を持つ',
  precision:'強化を安定して高効率に受け、副作用は少し抑える。狙った方向へ小さな誤差で仕上げる系列に向く',
};
const TRAIT_TEXT = {
  maturePlatform:'派手な補正より全体練習を安定して吸収し、長期間の積み上げで完成度を上げる',
  lateApex:'三年目にさらに学習効率が上がり、晩成曲線と重なった時に最終到達点が大きく伸びる',
  customMonster:'数値上の素体余力を改修へ回しており、パーツ効果そのものを追加で引き上げる',
  weaponPurist:'現在装備中の兵装を個別練習した時の吸収が高く、一兵装へ寄せた育成ほど成果が出る',
  weaknessLearner:'最も低い基礎グループを学習しやすく、意図的な弱点を後から補う設計になっている',
  finishedProduct:'一年目の練習吸収が良く、納入直後から完成度を上げやすい',
  finalYearBurst:'三年目の練習効率がさらに高まり、終盤で一段性能を引き出す',
  precisionSeed:'練習成果の乱数幅が小さく、同じ育成方針なら結果を再現しやすい',
  volatileCore:'練習成果の振れ幅を大きく残し、平均から外れた成長を許容する',
  modularFrame:'カスタム効果を追加で引き上げ、改修による方向転換を受け止める',
  dataDoctrine:'演算・センサー・AI系の練習効率を同時に底上げし、情報三系統の連成を作る',
  survivalDoctrine:'機関系の練習効率を高め、長時間性能を維持する土台を作る',
  overdriveLearning:'出力系の練習効率が高く、高負荷運用へ寄せるほど系列らしさが出る',
  slowForge:'三年目の基礎練習効率を追加で高め、時間をかけた調整で完成する',
  adaptiveWeapons:'兵装個別練習を吸収しやすく、装備変更後も兵装側を育て直しやすい',
  autonomousMaturation:'AI系の練習効率が高く、運用経験を判断性能へ変換する',
  minimalResponse:'一年目と駆動系の伸びを高め、軽量・単純化した初期応答をすぐ戦力化する',
  trialMagnet:'カスタム全般をやや強く受け、特に試供品を使う前提の実験改修と噛み合う',
  balancedCeiling:'全体練習の吸収を底上げし、極端な穴を作らず総合到達点を高める',
  eccentricLegacy:'練習成果の個体差を大きく残し、同系列でも異なる完成形を許容する',
};

function unique(items=[]) { return [...new Set(items.filter(Boolean))]; }
function topKeys(map={}, positive=true, count=2) {
  return Object.entries(map).filter(([,v]) => positive ? Number(v)>0 : Number(v)<0)
    .sort((a,b)=>positive ? Number(b[1])-Number(a[1]) : Number(a[1])-Number(b[1])).slice(0,count).map(([k])=>k);
}
function groupText(keys, fallback) { return keys.length ? keys.map((k)=>GROUP_LABELS[k]??k).join('・') : fallback; }
function weaponText(keys=[]) { return keys.length ? unique(keys).map((k)=>WEAPON_LABELS[k]??k).join(' / ') : '特定兵装へ固定しない'; }
function motifText(series, maker) {
  if (maker?.id==='bureau13') return `名称はCASE識別子として扱い、意味を持たせない。その代わりCASE-${series.seriesNumber}という番号が、要求仕様に対する一度きりの技術回答を示す。`;
  if (maker?.id==='laplace') return `${series.nameLatin}という数理・解析概念を、戦闘状態をどう予測・近似・更新するかという制御モデルへ読み替える。`;
  if (maker?.id==='eidolon') return `${series.nameLatin}という幻影的な名称を、個体差・認識差・成長後の分岐という「一つに定まらない性能」へ対応させる。`;
  if (maker?.id==='logos') return `${series.nameLatin}という概念語と性能配置の対応だけが確認される。設計者が名称を先に置いたのか、観測後に名付けたのかも不明。`;
  const theme = maker?.theme ?? '名称モチーフ';
  return `${series.nameKana} / ${series.nameLatin}という${theme}由来のモチーフを、外観ではなく性能発現条件・成長の形・改修反応へ置き換えている。名称から連想される「強さの出方」を系列の設計言語として使う。`;
}

function makeRefit(series) {
  const maker = MAKER_MAP.get(series.manufacturerId);
  const strongKeys = topKeys(series.groupAdjustments, true);
  const weakKeys = topKeys(series.groupAdjustments, false);
  const strong = groupText(strongKeys, '役割に直結する主能力');
  const weak = groupText(weakKeys, '用途外の能力');
  const preferred = unique(series.preferredWeapons ?? []);
  const avoided = unique(series.avoidedWeapons ?? []).filter((key)=>!preferred.includes(key));
  const traitId = series.intrinsicTraitId ?? 'maturePlatform';
  const growthId = series.growthCurveId ?? 'steady';
  const customId = series.customAptitudeId ?? 'balanced';
  const role = series.marketPosition ?? '第4世代特化系列';
  const predecessor = Number(series.predecessorNumber ?? (series.seriesNumber - 20));
  const makerLens = MAKER_LENS[maker?.id] ?? maker?.philosophy ?? '';
  const reliability = Number(series.reliabilityAdjustment ?? 0);
  const resistance = Number(series.resistanceAdjustment ?? 0);
  const reliText = reliability >= 4 ? '信頼性にも明確な余裕を残した' : reliability <= -4 ? '安定性を削ってでも役割性能へ資源を振った' : '信頼性は役割を阻害しない範囲へ置いた';
  const resistText = resistance >= 4 ? '耐性側にも大きな余裕がある' : resistance <= -3 ? '耐性の一部を割り切った' : '耐性は極端に偏らせない';
  const preferredText = weaponText(preferred);
  const avoidedText = avoided.length ? weaponText(avoided) : '明確な非推奨兵装なし';

  const summary = `${role}。${series.concept?.split('。')[0] ?? `${series.nameKana}の名称モチーフを設計へ反映した第四世代系列`}。v3.4再点検で成長・改修・弱点まで明文化。`;
  const concept = `${series.nameKana} / ${series.nameLatin} は、${maker?.name ?? 'メーカー'}の第4世代第${series.seriesNumber}系列として、${role}という明確な立場を与えられた機体である。前身となる第${predecessor}系列の設計資産をそのまま上位化するのではなく、第四世代では「同じ系譜を別の育て方で完成させる」ことを重視した。${makerLens}。そのため初期値だけを見れば似た前身があっても、成長曲線、カスタム適性、固有特性が噛み合った三年間の完成形は別物になるよう整理している。`;
  const namingConcept = `${motifText(series, maker)} この系列では特に${role}という立場へ名称イメージを結び付け、名前の由来が「何が高いか」だけでなく「いつ伸びるか」「どんな改修を受けるか」「どの弱点を敢えて残すか」にまで反映されるようにした。後期系列ほど説明が長くなっていたため、v3.4では第四世代全400系列を同じ基準で再点検し、この設計上の対応関係を明文化している。`;
  const developmentBackground = `開発背景には、第一～第三世代で同メーカーの主力・特化・対抗系列が一通り揃い、単純な性能上昇だけでは新系列を作る理由が薄くなったことがある。そこで第四世代では第${predecessor}系列を起点に、性能値そのものより育成後の役割、改修との相性、個体差を含む運用体験を差別化対象へ広げた。${makerLens}という企業思想を守りながらも、あえて一見逆方向に見える${role}を成立させることで、同じメーカー内に「定番」と「変わり種」が共存することを狙っている。`;
  const engineeringNotes = `設計上の署名は${strong}に出やすい一方、${weak}には明確な余裕不足が残る。${reliText}うえ、${resistText}。固有特性「${TRAIT_TEXT[traitId] ?? '系列独自の学習特性を持つ'}」が数値配分とは別に育成時の挙動へ作用するため、初期総合評価だけで系列価値を判断すると見誤りやすい。${preferred.length ? `兵装は${preferredText}を優先設計し、` : '兵装は一つへ固定せず、'}${avoided.length ? `${avoidedText}は機体側の余力と噛み合いにくい。` : '個体ごとの兵装適性を見て選べる余地を残す。'} 弱点を完全に消すのではなく、役割の代償として残すことも第四世代の差別化要素である。`;
  const trainingNotes = `成長曲線は「${GROWTH_TEXT[growthId] ?? GROWTH_TEXT.steady}」。これは表示上のフレーバーではなく、実際の1年目・2年目・3年目の練習成長量へ倍率として適用される。さらに固有特性側の年次補正や得意グループ補正が重なる場合があり、同じ初期能力でも育成年次によって最適な練習順が変わる。カスタム適性は「${CUSTOM_TEXT[customId] ?? CUSTOM_TEXT.balanced}」。パーツの正負効果に実倍率として作用するため、同じパーツでも系列によって最終的な上昇・低下量が変わる。${preferred.length ? `育成では${preferredText}と${strong}を同時に伸ばし、系列固有の相乗を作ると完成形が分かりやすい。` : `育成では${strong}を軸にしつつ、個体ごとの兵装適性を見て完成形を決める。`}`;
  const weaponDoctrine = preferred.length
    ? `${preferredText}を主要候補とし、機体の${strong}と同時に働く構成を優先する。${avoided.length ? `${avoidedText}は非推奨だが装備禁止ではなく、基礎能力やパーツで不足を埋めれば別路線へ育てることも可能。` : '非推奨兵装は固定せず、全兵装適性を比較して個体差を拾う。'} 系列名だけで装備を固定するのではなく、兵装6軸と成長倍率まで見て最終選択する設計である。`
    : `特定兵装に系列価値を固定しない。全12兵装の初期適性と成長倍率を比較し、その個体で最も基礎能力と噛み合う兵装を選ぶ。第四世代では「同系列でも違う武器で完成する」余地も個性として残している。`;

  return {
    id: series.id,
    fourthGenerationRefit: true,
    refitGeneration: 4,
    refitVersion: '3.4',
    summary,
    concept,
    namingConcept,
    developmentBackground,
    engineeringNotes,
    trainingNotes,
    weaponDoctrine,
    marketPosition: `${role} / 第4世代完成群`,
    abilityTendencyMultiplier: Math.max(1.24, Number(series.abilityTendencyMultiplier ?? 1.25)),
    abilityTendencyTags: unique([...(series.abilityTendencyTags ?? []), ...strongKeys, ...preferred]),
    avoidedWeapons: avoided,
  };
}

export const FOURTH_GENERATION_REFIT_OVERRIDES = FOURTH_WAVE_SERIES_DEFINITIONS.map(makeRefit);

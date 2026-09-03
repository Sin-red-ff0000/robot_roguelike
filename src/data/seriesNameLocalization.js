// Japanese display helper for series names.
// The catalog stores an original/Latin name separately.  When the Japanese display mode
// is selected, every series must resolve to a Japanese-readable label even if an older
// generation accidentally stored the Latin name in nameKana.

const TOKEN_KANA = {
  // Common catalog suffixes / development names
  FOUNDATION:'ファウンデーション', ASCENT:'アセント', MOD:'モッド', EDGE:'エッジ', CROWN:'クラウン', LAST:'ラスト',
  FRAME:'フレーム', SIGNAL:'シグナル', FORGE:'フォージ', FLEX:'フレックス', LITE:'ライト', LEGACY:'レガシー',
  ZENITH:'ゼニス', BLANK:'ブランク', MONO:'モノ', INVERSE:'インバース', PRIME:'プライム', HAZARD:'ハザード',
  CITADEL:'シタデル', VECTOR:'ベクター', IGNITION:'イグニッション', CALIBER:'キャリバー', FIELD:'フィールド',
  AEGIS:'イージス', MOTION:'モーション', RESERVE:'リザーブ', ORACLE:'オラクル', ECONO:'エコノ', REVIVAL:'リバイバル',
  CROSS:'クロス', FORTUNA:'フォルトゥナ', ABSOLUTE:'アブソリュート',
  CONVERGE:'コンバージ', ADAPT:'アダプト', DUAL:'デュアル', REBUILD:'リビルド', PLATEAU:'プラトー',
  LOOP:'ループ', SYNC:'シンク', LINK:'リンク', SURPLUS:'サープラス', STABLE:'ステイブル', LEARN:'ラーン',
  CONTROLLED:'コントロールド', TURNAROUND:'ターンアラウンド', NUCLEUS:'ニュークリアス', FORESIGHT:'フォーサイト',
  CERTAINTY:'サーテンティ', RECODE:'リコード', MIRROR:'ミラー', FUSION:'フュージョン', SIGNATURE:'シグネチャー',

  // Common English words that appear as series roots
  SUNFLOWER:'サンフラワー', WISTERIA:'ウィステリア', DANDELION:'ダンデライオン', THISTLE:'シスル', MOONFLOWER:'ムーンフラワー',
  GARDENIA:'ガーデニア', HYACINTH:'ヒヤシンス', TULIP:'チューリップ', BLUEBELL:'ブルーベル', FOXGLOVE:'フォックスグローブ',
  SNOWDROP:'スノードロップ', HELLEBORE:'ヘレボルス', LUPINE:'ルピナス', BEGONIA:'ベゴニア', GERANIUM:'ゼラニウム',
  PANSY:'パンジー', PETUNIA:'ペチュニア', CARNATION:'カーネーション', HONEYSUCKLE:'ハニーサックル', ZINNIA:'ジニア',
  ORCHID:'オーキッド', MARIGOLD:'マリーゴールド', CROCUS:'クロッカス', FREESIA:'フリージア', GLADIOLUS:'グラジオラス',
  DAFFODIL:'ダフォディル', SNAPDRAGON:'スナップドラゴン', HEATHER:'ヘザー', AZALEA:'アザレア', YARROW:'ヤロウ',

  ULTRAMARINE:'ウルトラマリン', VERMILION:'バーミリオン', TURQUOISE:'ターコイズ', LILAC:'ライラック', CORAL:'コーラル',
  MINT:'ミント', OLIVE:'オリーブ', NAVY:'ネイビー', COPPER:'カッパー', GOLD:'ゴールド', PLATINUM:'プラチナ',
  BLACK:'ブラック', WHITE:'ホワイト', CHARTREUSE:'シャルトルーズ', MAUVE:'モーブ', TAUPE:'トープ', SEPIA:'セピア',
  SALMON:'サーモン', ROSEWOOD:'ローズウッド', SLATE:'スレート', CERULEAN:'セルリアン', JADE:'ジェイド',
  SAFFRON:'サフラン', SIENNA:'シエナ', UMBER:'アンバー', PLUM:'プラム', BURGUNDY:'バーガンディ', ALABASTER:'アラバスター',


  VANADIUM:'バナジウム', NIOBIUM:'ニオブ', TANTALUM:'タンタル', HAFNIUM:'ハフニウム', ZIRCONIUM:'ジルコニウム',
  OSMIUM:'オスミウム', IRIDIUM:'イリジウム', RUTHENIUM:'ルテニウム', RHODIUM:'ロジウム', PALLADIUM:'パラジウム',
  BISMUTH:'ビスマス', ANTIMONY:'アンチモン', TELLURIUM:'テルル', SELENIUM:'セレン', GALLIUM:'ガリウム',
  INDIUM:'インジウム', SCANDIUM:'スカンジウム', YTTRIUM:'イットリウム', THORIUM:'トリウム',

  ALEXANDRITE:'アレキサンドライト', TANZANITE:'タンザナイト', MOONSTONE:'ムーンストーン', SUNSTONE:'サンストーン',
  LABRADORITE:'ラブラドライト', JASPER:'ジャスパー', CHRYSOBERYL:'クリソベリル', AQUAMARINE:'アクアマリン',
  MORGANITE:'モルガナイト', RHODONITE:'ロードナイト', HEMATITE:'ヘマタイト', PYRITE:'パイライト', FLUORITE:'フローライト',
  CALCITE:'カルサイト', FELDSPAR:'フェルドスパー', OLIVINE:'オリビン', CORUNDUM:'コランダム', LAPIS:'ラピス',
  AZURITE:'アズライト', TIGEREYE:'タイガーアイ', SPINEL:'スピネル', CITRINE:'シトリン', IOLITE:'アイオライト',
  KUNZITE:'クンツァイト', LARIMAR:'ラリマー', AGATE:'アゲート', CHALCEDONY:'カルセドニー', CARNELIAN:'カーネリアン',
  BLOODSTONE:'ブラッドストーン', AMBER:'アンバー', PEARL:'パール', GOSHENITE:'ゴシェナイト', ANDALUSITE:'アンダルサイト',
  SILLIMANITE:'シリマナイト', DIOPSIDE:'ダイオプサイド', APATITE:'アパタイト', CELESTITE:'セレスタイト',

  CHEETAH:'チーター', GOAT:'ゴート', RHINO:'ライノ', KINGFISHER:'キングフィッシャー', OWL:'アウル', RABBIT:'ラビット',
  MAMBA:'マンバ', DOLPHIN:'ドルフィン', WHALE:'ホエール', DRAGONFLY:'ドラゴンフライ', BEE:'ビー', SWALLOW:'スワロー',
  RACCOON:'ラクーン', BOAR:'ボア', TORTOISE:'トータス', OTTER:'オッター', WOLVERINE:'ウルヴァリン', CRAB:'クラブ', SHARK:'シャーク', BAT:'バット',
  TIGER:'タイガー', LION:'ライオン', GORILLA:'ゴリラ', BABOON:'バブーン', MANDRILL:'マンドリル', HYENA:'ハイエナ', JACKAL:'ジャッカル',
  IBEX:'アイベックス', GAZELLE:'ガゼル', MONGOOSE:'マングース', MEERKAT:'ミーアキャット', PANGOLIN:'センザンコウ', ARMADILLO:'アルマジロ',
  OSPREY:'オスプレイ', KESTREL:'ケストレル', CONDOR:'コンドル', ALBATROSS:'アルバトロス', BARRACUDA:'バラクーダ', MANTA:'マンタ', NAUTILUS:'ノーチラス',

  ZEUS:'ゼウス', HEPHAESTUS:'ヘファイストス', HERMES:'ヘルメス', HADES:'ハデス', MINERVA:'ミネルヴァ', HEBE:'ヘーベー',
  DIONYSUS:'ディオニュソス', ACHILLES:'アキレウス', ODYSSEUS:'オデュッセウス', THOTH:'トート', HERCULES:'ヘラクレス',
  MEDUSA:'メドゥーサ', BASTET:'バステト', BALDUR:'バルドル', FENRIR:'フェンリル', HEIMDALL:'ヘイムダル', OSIRIS:'オシリス',
  ISIS:'イシス', VALKYRIE:'ヴァルキリー', PROMETHEUS:'プロメテウス', ATLAS:'アトラス', HERACLES:'ヘラクレス',
  PERSEPHONE:'ペルセポネ', DEMETER:'デメテル', HESTIA:'ヘスティア', NIKE:'ニケ', NEMESIS:'ネメシス', JANUS:'ヤヌス',
  MARS:'マルス', VENUS:'ウェヌス', MERCURY:'メルクリウス', SET:'セト', SEKHMET:'セクメト',

  POISSON:'ポアソン', RIEMANN:'リーマン', KALMAN:'カルマン', MONTECARLO:'モンテカルロ', EIGEN:'アイゲン',
  LEBESGUE:'ルベーグ', GALOIS:'ガロア', POINCARE:'ポアンカレ', HERMITE:'エルミート', JACOBI:'ヤコビ', BESSEL:'ベッセル',
  SCHRODINGER:'シュレーディンガー', HEISENBERG:'ハイゼンベルク', MAXWELL:'マクスウェル', PEARSON:'ピアソン',
  KOLMOGOROV:'コルモゴロフ', WIENER:'ウィーナー', SHANNON:'シャノン', NYQUIST:'ナイキスト', CHURCH:'チャーチ',
  GODEL:'ゲーデル', CANTOR:'カントール', MANDELBROT:'マンデルブロ', LORENTZ:'ローレンツ', FIBONACCI:'フィボナッチ',

  LOGAN:'ローガン', VINSON:'ヴィンソン', DAMAVAND:'ダマーヴァンド', KOSCIUSZKO:'コジオスコ', AORAKI:'アオラキ', RAINIER:'レーニア',
  SHASTA:'シャスタ', WHITNEY:'ホイットニー', KENYA:'ケニア', PARNASSUS:'パルナッソス', VENTOUX:'ヴァントゥー', TRIGLAV:'トリグラウ',
  BENNEVIS:'ベンネビス', SNOWDON:'スノードン', MAKALU:'マカルー', LHOTSE:'ローツェ', CHO:'チョー', OYU:'オユー',
  ANNAPURNA:'アンナプルナ', NANGA:'ナンガ', MANASLU:'マナスル', KANCHENJUNGA:'カンチェンジュンガ', DHAULAGIRI:'ダウラギリ',
  GASHERBRUM:'ガッシャーブルム', BROADPEAK:'ブロードピーク', SHISHAPANGMA:'シシャパンマ', KAMET:'カメット', NANDADEVI:'ナンダデヴィ',
  GROSSGLOCKNER:'グロースグロックナー', ZUGSPITZE:'ツークシュピッツェ', ETNA:'エトナ', VESUVIUS:'ヴェスヴィオ',
  RAINIER:'レーニア', ROBSON:'ロブソン',

  POLARVORTEX:'ポーラーボルテックス', ROSSBYWAVE:'ロスビーウェーブ', JETSTREAK:'ジェットストリーク', FRONTOGENESIS:'フロントジェネシス',
  OCCLUSION:'オクルージョン', SQUALLLINE:'スコールライン', BOWECHO:'ボウエコー', GUSTFRONT:'ガストフロント', VIRGA:'ヴァーガ',
  GRAUPEL:'グラウペル', RIME:'ライム', ICEPELLET:'アイスペレット', BLACKICE:'ブラックアイス', SUNSHOWER:'サンシャワー',
  FOGBOW:'フォグボウ', GLORY:'グローリー', HALO:'ハロー', HEATBURST:'ヒートバースト', THERMAL:'サーマル',
  SQUALL:'スコール', GALE:'ゲイル', TEMPEST:'テンペスト', SLEET:'スリート', FREEZINGRAIN:'フリージングレイン',
  UPDRAFT:'アップドラフト', JETSTREAM:'ジェットストリーム', TRADEWIND:'トレードウインド', SEABREEZE:'シーブリーズ', LANDBREEZE:'ランドブリーズ',
  CATSPAW:'キャッツポー', CLOUDBURST:'クラウドバースト', RAINSHADOW:'レインシャドウ', ATMOSPHERICRIVER:'アトモスフェリックリバー',

  APPARITION:'アパリション', SHADE:'シェイド', GHOSTLIGHT:'ゴーストライト', ECHO:'エコー', DOPPELGANGER:'ドッペルゲンガー',
  SIMULACRUM:'シミュラクラム', HALLUCINATION:'ハルシネーション', PHANTASM:'ファンタズム', SOMNIA:'ソムニア', LUCID:'ルーシッド',
  NIGHTTERROR:'ナイトテラー', DEJAVU:'デジャヴ', JAMAISVU:'ジャメヴ', FALSEAWAKENING:'フォルスアウェイクニング',
  MEMORYPALACE:'メモリーパレス', DREAMWALKER:'ドリームウォーカー', VEIL:'ヴェイル', VOIDIMAGE:'ヴォイドイメージ', RESIDUAL:'レジデュアル', REMNANT:'レムナント',

  FORMA:'フォルマ', SUBSTANTIA:'スブスタンティア', ACTUS:'アクトゥス', POTENTIA:'ポテンティア', IDENTITAS:'イデンティタス',
  DIFFERENTIA:'ディフェレンティア', NECESSITAS:'ネケシタス', CONTINGENTIA:'コンティンゲンティア', UNIVERSALE:'ウニヴェルサーレ',
  PARTICULARE:'パルティクラーレ', INFINITAS:'インフィニタス', FINITAS:'フィニタス', TEMPUS:'テンプス', SPATIUM:'スパティウム',
  MOTUS:'モトゥス', QUIES:'クイエス', LEX:'レクス', MENS:'メンス', CORPUS:'コルプス', SYNTHESIS:'シンセシス',
  RATIO:'ラティオ', APORIA:'アポリア', ESSENTIA:'エッセンティア', DETERMINATIO:'デテルミナティオ',
};

const SYLLABLES = {
  kya:'キャ',kyu:'キュ',kyo:'キョ',gya:'ギャ',gyu:'ギュ',gyo:'ギョ',sha:'シャ',shu:'シュ',sho:'ショ',
  cha:'チャ',chu:'チュ',cho:'チョ',nya:'ニャ',nyu:'ニュ',nyo:'ニョ',hya:'ヒャ',hyu:'ヒュ',hyo:'ヒョ',
  mya:'ミャ',myu:'ミュ',myo:'ミョ',rya:'リャ',ryu:'リュ',ryo:'リョ',bya:'ビャ',byu:'ビュ',byo:'ビョ',
  pya:'ピャ',pyu:'ピュ',pyo:'ピョ',ja:'ジャ',ju:'ジュ',jo:'ジョ',shi:'シ',chi:'チ',tsu:'ツ',fu:'フ',
  ti:'ティ',di:'ディ',tu:'トゥ',du:'ドゥ',fa:'ファ',fi:'フィ',fe:'フェ',fo:'フォ',va:'ヴァ',vi:'ヴィ',vu:'ヴ',ve:'ヴェ',vo:'ヴォ',
  ka:'カ',ki:'キ',ku:'ク',ke:'ケ',ko:'コ',ga:'ガ',gi:'ギ',gu:'グ',ge:'ゲ',go:'ゴ',
  sa:'サ',si:'シ',su:'ス',se:'セ',so:'ソ',za:'ザ',zi:'ジ',zu:'ズ',ze:'ゼ',zo:'ゾ',
  ta:'タ',te:'テ',to:'ト',da:'ダ',de:'デ',do:'ド',na:'ナ',ni:'ニ',nu:'ヌ',ne:'ネ',no:'ノ',
  ha:'ハ',hi:'ヒ',he:'ヘ',ho:'ホ',ba:'バ',bi:'ビ',bu:'ブ',be:'ベ',bo:'ボ',pa:'パ',pi:'ピ',pu:'プ',pe:'ペ',po:'ポ',
  ma:'マ',mi:'ミ',mu:'ム',me:'メ',mo:'モ',ya:'ヤ',yu:'ユ',yo:'ヨ',ra:'ラ',ri:'リ',ru:'ル',re:'レ',ro:'ロ',
  wa:'ワ',wi:'ウィ',we:'ウェ',wo:'ウォ',a:'ア',i:'イ',u:'ウ',e:'エ',o:'オ',
};
const CONSONANT_FILL = {b:'ブ',c:'ク',d:'ド',f:'フ',g:'グ',h:'フ',j:'ジ',k:'ク',l:'ル',m:'ム',n:'ン',p:'プ',q:'ク',r:'ル',s:'ス',t:'ト',v:'ヴ',w:'ウ',x:'クス',y:'イ',z:'ズ'};

function roughRomanToKatakana(token) {
  let source = String(token ?? '').toLowerCase();
  if (!source) return '';
  source = source
    .replaceAll('sch','sh')
    .replaceAll('tch','ch')
    .replaceAll('ph','f')
    .replaceAll('th','s')
    .replaceAll('ck','k')
    .replaceAll('qu','kw')
    .replaceAll('tion','shon')
    .replaceAll('sion','shon')
    .replaceAll('dge','ji')
    .replaceAll('gh','g');
  let out='';
  for (let i=0;i<source.length;) {
    if (/\d/.test(source[i])) { out += source[i]; i+=1; continue; }
    if (source[i] === "'") { i+=1; continue; }
    if (source[i] === 'n' && (i === source.length-1 || !'aiueoy'.includes(source[i+1]))) { out+='ン'; i+=1; continue; }
    if (i+1 < source.length && source[i] === source[i+1] && !'aiueon'.includes(source[i])) { out+='ッ'; i+=1; continue; }
    let matched=false;
    for (const len of [3,2,1]) {
      const part=source.slice(i,i+len);
      if (SYLLABLES[part]) { out+=SYLLABLES[part]; i+=len; matched=true; break; }
    }
    if (matched) continue;
    const ch=source[i];
    if (CONSONANT_FILL[ch]) out+=CONSONANT_FILL[ch];
    i+=1;
  }
  return out || token;
}

function tokenKana(token) {
  const raw=String(token ?? '').trim();
  if (!raw) return '';
  const upper=raw.toUpperCase();
  if (/^\d+$/.test(upper)) return upper;
  if (/^[IVX]+$/.test(upper)) return upper;
  if (TOKEN_KANA[upper]) return TOKEN_KANA[upper];
  if (/^CASE\d+$/.test(upper)) return `ケース${upper.slice(4)}`;
  return roughRomanToKatakana(upper);
}

function hasUnlocalizedLatin(value) {
  // Roman numerals appended to an otherwise Japanese label are accepted.
  const stripped=String(value ?? '').replace(/[IVX]+/g,'');
  return /[A-Za-z]/.test(stripped);
}

export function localizeSeriesName(nameLatin, providedKana = '', aliases = null) {
  const existing=String(providedKana ?? '').trim();
  if (existing && !hasUnlocalizedLatin(existing)) return existing;
  const latin=String(nameLatin ?? existing ?? '').trim();
  if (!latin) return 'シリーズ';
  if (/^CASE[-・ ]?\d+$/i.test(latin)) return `ケース${latin.match(/\d+/)?.[0] ?? ''}`;
  const upper=latin.toUpperCase();
  if (aliases?.get) {
    const exact=aliases.get(upper);
    if (exact) return exact;
    const prefixes=[...aliases.keys()]
      .filter((key)=>upper.startsWith(`${key}-`))
      .sort((a,b)=>b.length-a.length);
    if (prefixes.length) {
      const prefix=prefixes[0];
      const rest=upper.slice(prefix.length+1);
      const restKana=rest.split(/[-・/\s]+/).filter(Boolean).map(tokenKana).join('・');
      return `${aliases.get(prefix)}${restKana ? `・${restKana}` : ''}`;
    }
  }
  return latin
    .split(/[-・/\s]+/)
    .filter(Boolean)
    .map(tokenKana)
    .join('・');
}

export function seriesJapaneseDisplayIsValid(value) {
  return !hasUnlocalizedLatin(value);
}

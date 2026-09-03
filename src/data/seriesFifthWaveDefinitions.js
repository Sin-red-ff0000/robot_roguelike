// v3.5 fifth-generation catalog: series 81-100 for every manufacturer.
// 20 manufacturers x 20 series = 400 additional series.
// Fifth-generation entries are intentionally concept-heavy: they combine a name motif,
// a manufacturer philosophy twist, a three-year growth shape, and a concrete customization doctrine.

const ROOT_NAMES = {
  kirishima:['AKAGI','HARUNA','MYOGI','KAIKOMA','SENJO','AINO','SHIO','UTSUGI','KISOKOMA','EBOSHI','KARAMATSU','GORYU','KASHIMAYARI','JONEN','OREN','HIJIRI','TEKARI','WARUSAWA','ARAGAWA','HOUOU'],
  mizuho:['SUMIRE','KIKU','SUIREN','AJISAI','COSMOS','KASUMISO','SUZURAN','MOKUREN','TSUKIMISO','OMINAESHI','SHAGA','MIMOSA','KALMIA','NEMOPHILA','CLEMATIS','LUPIN','DELPHINIUM','MARGARET','GERANIUM','KASABLANCA'],
  gogaku:['VANADIUM','NIOBIUM','TANTALUM','HAFNIUM','ZIRCONIUM','OSMIUM','IRIDIUM','PLATINUM','RUTHENIUM','RHODIUM','PALLADIUM','BISMUTH','ANTIMONY','TELLURIUM','SELENIUM','GALLIUM','INDIUM','SCANDIUM','YTTRIUM','THORIUM'],
  yashima:['SQUALL','GALE','TEMPEST','SLEET','FREEZINGRAIN','VIRGA','HALO','GLORY','FOGBOW','RIME','GRAUPEL','THERMAL','UPDRAFT','JETSTREAM','TRADEWIND','SEABREEZE','LANDBREEZE','CATSPAW','CLOUDBURST','RAINSHADOW'],
  hokushin:['ACHERNAR','HADAR','ACRUX','GACRUX','SHAULA','SCHEDAR','DENEBOLA','ALNILAM','ALNITAK','MINTAKA','SAIPH','RASALGETHI','ENIF','ALPHARD','MIRFAK','MENKAR','UNUKALHAI','ZUBENELGENUBI','WEZEN','AVIOR'],
  shinonome:['AI','KACHIIRO','RURI','ASAGI','HANADA','TOKIWA','UGUISU','ROKUSHO','BENI','KOUBAI','SUOH','KURIUME','NIBIIRO','NEZUMI','AONIBI','KESHIZUMI','USUZUMI','KINCHA','KIHADA','MIZUASAGI'],
  amagi:['SERVAL','CARACAL','JAGUAR','HYENA','JACKAL','GAZELLE','IMPALA','PRONGHORN','IBEX','MOOSE','YAK','TAPIR','PANGOLIN','ARMADILLO','MONGOOSE','MEERKAT','OSPREY','KESTREL','SWIFT','ALBATROSS'],
  kamishiro:['IZANAGI','IZANAMI','OMOIKANE','AMENOTAJIKARAO','TAMANOYA','ISHIKORIDOME','WATATSUMI','TOYOTAMAHIME','TAMAYORIHIME','UKEMOCHI','OGETSUHIME','SHINATSUHIKO','KANAYAMAHIKO','MIZUHANOME','KUKUNOCHI','OYAMATSUMI','HODERI','HOORI','NINIGI','AMENOWAKAHIKO'],
  lancaster:['TULIP','ORCHID','MARIGOLD','CROCUS','FREESIA','HYACINTH','GLADIOLUS','CARNATION','DAFFODIL','BEGONIA','PETUNIA','SNAPDRAGON','WISTERIA','BLUEBELL','HEATHER','PANSY','GERANIUM','AZALEA','CLEMATIS','YARROW'],
  steinwald:['KANCHENJUNGA','DHAULAGIRI','GASHERBRUM','BROADPEAK','SHISHAPANGMA','KAMET','NANDADEVI','TRIGLAV','GROSSGLOCKNER','ZUGSPITZE','BENNEVIS','ETNA','VESUVIUS','AORAKI','KOSCIUSZKO','RAINIER','WHITNEY','SHASTA','HOOD','ROBSON'],
  cromwell:['CERULEAN','TURQUOISE','JADE','MINT','CHARTREUSE','LIME','SAFFRON','GOLD','COPPER','TAUPE','SIENNA','UMBER','MAUVE','LILAC','PLUM','BURGUNDY','CORAL','SALMON','ROSEWOOD','ALABASTER'],
  rhenium:['ALEXANDRITE','SPINEL','CHRYSOBERYL','CITRINE','IOLITE','KUNZITE','LARIMAR','JASPER','AGATE','CHALCEDONY','CARNELIAN','BLOODSTONE','AMBER','PEARL','GOSHENITE','ANDALUSITE','SILLIMANITE','DIOPSIDE','APATITE','CELESTITE'],
  hawthorne:['TIGER','LION','GORILLA','BABOON','MANDRILL','HYENA','JACKAL','IBEX','GAZELLE','MONGOOSE','MEERKAT','PANGOLIN','ARMADILLO','OSPREY','KESTREL','CONDOR','ALBATROSS','BARRACUDA','MANTA','NAUTILUS'],
  arcadia:['PROMETHEUS','ATLAS','HERACLES','ACHILLES','PERSEPHONE','DEMETER','HESTIA','DIONYSUS','NIKE','NEMESIS','JANUS','MINERVA','MARS','VENUS','MERCURY','SET','ISIS','THOTH','BASTET','SEKHMET'],
  solberg:['ACRUX','GACRUX','SHAULA','DENEBOLA','ALNILAM','ALNITAK','MINTAKA','SAIPH','ENIF','ALPHARD','MIRFAK','MENKAR','WEZEN','AVIOR','ATRIA','PEACOCK','KAUSAUSTRALIS','SARGAS','KOCHAB','PHERKAD'],
  grayson:['ATMOSPHERICRIVER','POLARVORTEX','ROSSBYWAVE','JETSTREAK','FRONTOGENESIS','OCCLUSION','SQUALLLINE','BOWECHO','GUSTFRONT','VIRGA','GRAUPEL','RIME','ICEPELLET','BLACKICE','SUNSHOWER','FOGBOW','GLORY','HALO','HEATBURST','THERMAL'],
  laplace:['LEBESGUE','GALOIS','POINCARE','HERMITE','JACOBI','BESSEL','SCHRODINGER','HEISENBERG','MAXWELL','PEARSON','KOLMOGOROV','WIENER','SHANNON','NYQUIST','CHURCH','GODEL','CANTOR','MANDELBROT','LORENTZ','FIBONACCI'],
  bureau13:Array.from({length:20},(_,i)=>`CASE-${81+i}`),
  eidolon:['APPARITION','SHADE','GHOSTLIGHT','ECHO','DOPPELGANGER','SIMULACRUM','HALLUCINATION','PHANTASM','SOMNIA','LUCID','NIGHTTERROR','DEJAVU','JAMAISVU','FALSEAWAKENING','MEMORYPALACE','DREAMWALKER','VEIL','VOIDIMAGE','RESIDUAL','REMNANT'],
  logos:['FORMA','SUBSTANTIA','ACTUS','POTENTIA','IDENTITAS','DIFFERENTIA','NECESSITAS','CONTINGENTIA','UNIVERSALE','PARTICULARE','INFINITAS','FINITAS','TEMPUS','SPATIUM','MOTUS','QUIES','LEX','MENS','CORPUS','SYNTHESIS'],
};

const SUFFIXES=['ZENITH','BLANK','MONO','INVERSE','PRIME','HAZARD','CITADEL','VECTOR','IGNITION','CALIBER','FIELD','AEGIS','MOTION','RESERVE','ORACLE','ECONO','REVIVAL','CROSS','FORTUNA','ABSOLUTE'];

const MAKER = {
  kirishima:{theme:'山岳名が持つ頂・稜線・地形差',lens:'要求された仕事を確実に終わらせるため、用途を狭めることも恐れない',primary:'output',secondary:'control',twist:'完成度の高さを「万能」ではなく、狭い目的へ過剰に合わせ込むことで表現する'},
  mizuho:{theme:'花名が持つ開花・季節・環境適応',lens:'運用結果を次の設計へ戻し、現場で完成させる',primary:'control',secondary:'ai',twist:'初期の未完成さすら、現場から学ぶための設計余地として商品化する'},
  gogaku:{theme:'元素・鉱物名が持つ硬度・密度・耐熱性',lens:'余裕そのものを性能として扱う',primary:'engine',secondary:'output',twist:'重く頑丈にするだけでなく、余裕を速度・応答・改修幅へ変換する'},
  yashima:{theme:'気象名が示す急変・持続・境界・乱流',lens:'条件が変わっても仕事を止めない',primary:'engine',secondary:'control',twist:'対策を積むのではなく、性能の崩れ方そのものを穏やかにすることで継続性を作る'},
  hokushin:{theme:'恒星・天体名が示す位置・周期・明るさ',lens:'誤差の原因を測定し予測可能にする',primary:'control',secondary:'sensor',twist:'ピーキーさを排除せず、ピーキーになる条件を完全に把握することで採用可能にする'},
  shinonome:{theme:'色名が示す明度・彩度・対比・混色',lens:'情報処理を機体構造と同じ階層で設計する',primary:'compute',secondary:'sensor',twist:'物理性能を上げず、情報の見せ方・捨て方・統合順序だけで挙動を変える'},
  amagi:{theme:'動物名が示す運動様式・姿勢・感覚',lens:'加減速や姿勢遷移まで含めて「動きの性格」を作る',primary:'mobility',secondary:'control',twist:'最高速度より、動作の入りと抜け、止まり方までを武器にする'},
  kamishiro:{theme:'神名・神話が象徴する権能・逸話・禁忌',lens:'現在の常識を過去の成功例として疑う',primary:'ai',secondary:'output',twist:'業界で避けられてきた構成を、前提条件そのものを変えて成立させる'},
  lancaster:{theme:'花名が持つ姿・香り・市場イメージ',lens:'性能を「選ばれる商品」として成立させる',primary:'output',secondary:'control',twist:'技術的最適より、明確な顧客像に刺さる一つの価値を最大化する'},
  steinwald:{theme:'山岳名が示す地形・稜線・支持構造',lens:'構造が正しければ性能は後から付いてくる',primary:'engine',secondary:'control',twist:'電子補正に見える機能まで、重量配置や機械構造の段階で先に解決する'},
  cromwell:{theme:'色名が持つ対比・混色・階調',lens:'単体性能ではなく相互作用を設計する',primary:'control',secondary:'compute',twist:'一つの数値を突出させず、二つ以上の平凡な機構を組み合わせて異常な結果を作る'},
  rhenium:{theme:'宝石・鉱物名が示す希少性・結晶性・材質差',lens:'量産できない技術にも価値を認める',primary:'output',secondary:'engine',twist:'整備性や価格を犠牲にしてでも、他社が量産工程では採れない一つの物性を使い切る'},
  hawthorne:{theme:'動物名が示す行動様式・狩り方・群れ方',lens:'自律機の行動哲学を設計の中心に置く',primary:'ai',secondary:'mobility',twist:'命令への忠実さではなく、何を危険と見なし何を好機と見るかをシリーズ差にする'},
  arcadia:{theme:'神話名が象徴する理想・権能・物語',lens:'理想像を先に描き現実をそこへ近づける',primary:'ai',secondary:'output',twist:'現実的な平均点ではなく、まず極端な完成像を定義し、欠点を後から許容範囲へ押し戻す'},
  solberg:{theme:'恒星名が示す観測・周期・座標関係',lens:'性能分布まで予測可能にする',primary:'compute',secondary:'sensor',twist:'強さより「どの条件で何%の性能が出るか」を先に保証し、その保証の中で尖らせる'},
  grayson:{theme:'気象現象名が示す再現条件・発生過程・規模',lens:'千機作っても同じ性能を出せる工程を重視する',primary:'engine',secondary:'control',twist:'本来一品物になりがちな危険な設計を、工程管理の力で量産可能な規格へ押し込む'},
  laplace:{theme:'数学者・理論名が示す推定・変換・確率・構造',lens:'十分な情報があれば結果は予測できると考える',primary:'compute',secondary:'ai',twist:'機体を強くするより、比較項目のどこで勝つかを事前に狭め、勝率を計算しやすくする'},
  bureau13:{theme:'CASE番号だけで管理される要求仕様',lens:'目的達成に不要な思想を持たない',primary:'control',secondary:'output',twist:'系列の共通性すら捨て、要求ごとに何を犠牲にしたかだけが設計上の一貫性になる'},
  eidolon:{theme:'幻影・記憶・知覚現象が持つ曖昧さ',lens:'個体差を欠陥ではなく可能性として観測する',primary:'ai',secondary:'sensor',twist:'平均値を整えるのではなく、どの方向へ外れた個体を残すかまで含めて系列化する'},
  logos:{theme:'哲学・論理概念が示す関係そのもの',lens:'設計思想は非公開で、結果に共通法則だけが残る',primary:'compute',secondary:'control',twist:'名称と能力配置の対応は見えるが、その因果だけは最後まで説明されない'},
};

const ROLES = [
  {id:'constraintApex',label:'制約内頂点',archetypeId:'apex',tier:'rare',individuality:'uniform',curve:'plateau',custom:'precision',trait:'balancedCeiling',summary:'用途を一つに絞り、その制約内だけで完成度の上限を狙う。',main:7,sub:4,weak:-3,reliability:5,resistance:2},
  {id:'blankForge',label:'未完成素体',archetypeId:'growthProject',tier:'specialized',individuality:'growthSwing',curve:'ignition',custom:'blank',trait:'customBorn',summary:'納入時の完成度を意図的に落とし、三年間の育成と改修で別物へ変える。',main:-2,sub:-2,weak:-2,growth:.055,reliability:-2},
  {id:'monoWeapon',label:'単兵装純化',archetypeId:'weaponSavant',tier:'specialized',individuality:'weaponSwing',curve:'steady',custom:'weaponExtreme',trait:'monoweapon',summary:'一種類の兵装だけを機体設計の中心に置き、他用途をほぼ切り捨てる。',main:3,sub:2,weapon:12,avoid:-7},
  {id:'inverseDoctrine',label:'逆説設計',archetypeId:'counterDesign',tier:'experimental',individuality:'statSwing',curve:'rebound',custom:'overresponsive',trait:'weaknessLearner',summary:'メーカーの通常解を一度反転し、不得意領域から企業思想を証明する。',main:-5,sub:8,weak:4,reliability:-4},
  {id:'massPerfect',label:'量産完成形',archetypeId:'massProduction',tier:'mass',individuality:'uniform',curve:'frontloaded',custom:'conservative',trait:'batchMastery',summary:'派手な伸びを捨て、初期状態から多数の個体が同じ結果を出せることを強さにする。',main:3,sub:3,weak:1,reliability:9,resistance:2},
  {id:'dangerLab',label:'危険実証機',archetypeId:'volatileExperimental',tier:'experimental',individuality:'jackpot',curve:'pulse',custom:'riskLab',trait:'volatileCore',summary:'不安定さを消さず、当たり個体と高負荷改修の上振れを研究対象にする。',main:7,sub:2,weak:-7,reliability:-9,variance:1.18},
  {id:'movingFortress',label:'動く要塞',archetypeId:'fortress',tier:'specialized',individuality:'uniform',curve:'rebound',custom:'structural',trait:'survivalDoctrine',summary:'防御のために止まるのではなく、構造余裕を利用して重いまま動き続ける。',main:5,sub:5,weak:-4,resistance:8,reliability:4},
  {id:'dataPredator',label:'情報捕食',archetypeId:'dataGlass',tier:'specialized',individuality:'statSwing',curve:'middle',custom:'electronic',trait:'dataDoctrine',summary:'物理性能を抑え、相手より早く正しい比較項目へ辿り着く情報優位へ賭ける。',main:6,sub:7,weak:-6,resistance:-3},
  {id:'lateMonster',label:'遅延完成',archetypeId:'lateGrowth',tier:'rare',individuality:'growthSwing',curve:'ignition',custom:'blank',trait:'delayedIgnition',summary:'最初の二年を準備期間として扱い、三年目に初期設計とは別水準へ到達する。',main:-3,sub:-3,weak:-2,growth:.065,reliability:-1},
  {id:'overfitPrecision',label:'過適合精密',archetypeId:'precision',tier:'standard',individuality:'uniform',curve:'steady',custom:'precision',trait:'precisionSeed',summary:'狭い条件では異常に正確だが、条件外では長所が薄れるほど目的へ合わせ込む。',main:7,sub:5,weak:-4,reliability:8},
  {id:'fieldGeneralist',label:'現場汎用',archetypeId:'adaptive',tier:'mass',individuality:'normal',curve:'steady',custom:'balanced',trait:'maturePlatform',summary:'最高点よりも、どの育成方針へ途中変更しても破綻しにくい現場適応を優先する。',main:2,sub:2,weak:1,reliability:4},
  {id:'counterShell',label:'対策外殻',archetypeId:'countermeasure',tier:'specialized',individuality:'stableGrowth',curve:'catchup',custom:'structural',trait:'weaknessLearner',summary:'得意分野を伸ばすより、相手に突かれやすい穴を練習と構造で埋め続ける。',main:2,sub:2,weak:3,resistance:6,reliability:3},
  {id:'pureMotion',label:'運動純化',archetypeId:'ultraMobile',tier:'specialized',individuality:'statSwing',curve:'plateau',custom:'precision',trait:'minimalResponse',summary:'防御や余裕を削り、動作開始・加速・停止の連続性だけを一つの武器にする。',main:9,sub:5,weak:-8,resistance:-5,reliability:-3},
  {id:'powerReserve',label:'余力蓄積',archetypeId:'overengineered',tier:'standard',individuality:'uniform',curve:'rebound',custom:'structural',trait:'slowForge',summary:'平時に使わない余力を大量に持ち、後半育成や高負荷兵装へ転用する。',main:6,sub:4,weak:-3,resistance:4,reliability:6},
  {id:'aiOracle',label:'自律予見',archetypeId:'aiAnomaly',tier:'experimental',individuality:'jackpot',curve:'ignition',custom:'electronic',trait:'autonomousMaturation',summary:'機体性能より判断器の成熟を主役にし、経験を積むほど挙動が別系列のように変わる。',main:9,sub:6,weak:-7,reliability:-5,variance:1.12},
  {id:'budgetProdigy',label:'廉価異才',archetypeId:'budget',tier:'mass',individuality:'statSwing',curve:'catchup',custom:'modular',trait:'weaknessLearner',summary:'安価な初期構成を前提に、弱点を見極めて必要箇所だけ育てることで高級機へ迫る。',main:-2,sub:-2,weak:-3,growth:.045,reliability:1},
  {id:'retroRebuild',label:'旧式再構成',archetypeId:'retro',tier:'standard',individuality:'uniform',curve:'steady',custom:'manufacturerPlus',trait:'maturePlatform',summary:'古い構成を懐古で残すのではなく、現代の加工精度で余計な複雑さを削り直す。',main:3,sub:2,weak:0,reliability:7},
  {id:'crossDomain',label:'領域横断',archetypeId:'hybridRanged',tier:'standard',individuality:'weaponSwing',curve:'pulse',custom:'weapon',trait:'adaptiveWeapons',summary:'二つの兵装思想を同一制御系へ統合し、単一特化では取れない比較項目を拾う。',main:3,sub:4,weak:-2,weapon:7,weapon2:7},
  {id:'fortuneExtreme',label:'極端個体',archetypeId:'lottery',tier:'rare',individuality:'jackpot',curve:'rebound',custom:'riskLab',trait:'eccentricLegacy',summary:'平均値を製品価値とせず、数十機に一機だけ現れる異常個体まで含めて系列価値とする。',main:5,sub:1,weak:-5,reliability:-7,variance:1.25},
  {id:'absoluteSignature',label:'絶対署名',archetypeId:'glassCannon',tier:'rare',individuality:'statSwing',curve:'frontloaded',custom:'overresponsive',trait:'overdriveLearning',summary:'メーカーが最も象徴したい一能力へ全資源を集め、弱点ごとブランドとして受け入れる。',main:13,sub:5,weak:-10,reliability:-7,weapon:10},
];

const TIER_WEIGHT={mass:1.58,standard:1.0,specialized:.58,experimental:.28,rare:.14};
const WEAPONS=['blade','hammer','lance','beamBlade','rifle','machineGun','cannon','laser','beamCannon','missile','emp','drone'];
const GROUPS=['output','mobility','control','engine','compute','sensor','ai'];
const GROUP_LABEL={output:'出力',mobility:'駆動',control:'制御',engine:'機関',compute:'演算',sensor:'センサー',ai:'AI'};
const WEAPON_LABEL={blade:'ブレード',hammer:'ハンマー',lance:'ランス',beamBlade:'ビームブレード',rifle:'ライフル',machineGun:'マシンガン',cannon:'キャノン',laser:'レーザー',beamCannon:'ビーム砲',missile:'ミサイル',emp:'EMP',drone:'ドローン'};
const CURVE_LABEL={steady:'均等成長',early:'早熟型',middle:'中盤型',late:'晩成型',finalburst:'最終年爆発型',frontloaded:'完成品型',catchup:'弱点補正型',ignition:'遅延点火型',plateau:'初期頂点型',rebound:'再加速型',pulse:'2年目急伸型'};
const CUSTOM_LABEL={balanced:'標準適合',modular:'高モジュール適合',overresponsive:'過敏応答',conservative:'保守的適合',manufacturer:'純正適合',trial:'試供品適合',weapon:'兵装改修適合',structural:'構造改修適合',electronic:'電子改修適合',precision:'精密改修適合',blank:'未完成素体適合',weaponExtreme:'単兵装改修適合',riskLab:'危険試験適合',manufacturerPlus:'純正深化適合'};

function slug(value){return String(value).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}
function groupOpposite(primary,secondary,idx){return GROUPS[(GROUPS.indexOf(primary)+3+idx)%GROUPS.length]===secondary?GROUPS[(GROUPS.indexOf(primary)+4+idx)%GROUPS.length]:GROUPS[(GROUPS.indexOf(primary)+3+idx)%GROUPS.length];}
function groupAdjustments(maker,role,idx){
  const primary=maker.primary;
  const secondary=maker.secondary;
  const weak=groupOpposite(primary,secondary,idx);
  const out={};
  if(role.main) out[primary]=role.main;
  if(role.sub) out[secondary]=role.sub;
  if(role.weak) out[weak]=(out[weak]??0)+role.weak;
  if(role.id==='inverseDoctrine') { out[primary]=-6; out[weak]=8; }
  if(role.id==='dataPredator') { out.compute=(out.compute??0)+5; out.sensor=(out.sensor??0)+5; out.ai=(out.ai??0)+3; }
  if(role.id==='pureMotion') { out.mobility=(out.mobility??0)+8; out.control=(out.control??0)+3; }
  if(role.id==='aiOracle') { out.ai=(out.ai??0)+8; out.compute=(out.compute??0)+4; }
  return out;
}
function growthAdjustments(maker,role){
  const out={};
  if(role.growth){ for(const group of GROUPS) out[group]=role.growth; }
  if(['blankForge','lateMonster','budgetProdigy'].includes(role.id)) { out[maker.primary]=(out[maker.primary]??0)+.025; out[maker.secondary]=(out[maker.secondary]??0)+.02; }
  if(role.id==='dataPredator'){out.compute=.05;out.sensor=.05;out.ai=.035;}
  if(role.id==='pureMotion'){out.mobility=.045;out.control=.025;}
  if(role.id==='aiOracle'){out.ai=.06;out.compute=.035;}
  return out;
}
function weaponPair(manufacturerId,idx){
  const seed=[...manufacturerId].reduce((s,c)=>s+c.charCodeAt(0),0);
  const a=(seed+idx*5)%WEAPONS.length;
  let b=(a+4+(idx%3))%WEAPONS.length;
  if(b===a)b=(b+1)%WEAPONS.length;
  return [WEAPONS[a],WEAPONS[b],WEAPONS[(a+7)%WEAPONS.length]];
}
function roleEngineering(role,maker,preferred,avoided){
  const primary=GROUP_LABEL[maker.primary]; const secondary=GROUP_LABEL[maker.secondary];
  const text={
    constraintApex:`${primary}と${secondary}を高い精度で揃え、用途外の余剰機能を整理する。数字を均等化するのではなく、狭い任務の中で必要な比較項目がほぼ欠けないことを狙う。`,
    blankForge:`初期状態では意図的に余白が多く、基礎値だけなら同社の完成品系列に劣る。成長倍率とパーツ受容性を設計資産として扱い、育成者が方向を決めて初めて完成する。`,
    monoWeapon:`${preferred}を基準に重心、電力供給、装備制御まで合わせ込む。そのため${avoided}など別系統へ換装すると、個々の部品性能以上に機体全体の噛み合わせが崩れる。`,
    inverseDoctrine:`通常なら${primary}を伸ばすメーカー設計をあえて抑え、別系統を主役にする。それでも「${maker.lens}」という企業思想だけは残るため、他社の同型特化とは育ち方が異なる。`,
    massPerfect:`部品公差、配線長、制御遅延まで量産状態を前提に揃える。上振れを狙わない代わりに、配備された個体の大半がカタログ値に近い挙動を示す。`,
    dangerLab:`限界域でしか観測できない現象を残すため、安全側の補正を一部外している。信頼性の低さは欠陥というより試験条件で、挑戦的な試供品を入れた時ほど系列の意図が表に出る。`,
    movingFortress:`構造余裕を静止耐久だけに使わず、姿勢変化中の負荷吸収へ回す。重いまま動くため駆動効率は高くないが、動作中に性能が崩れにくい。`,
    dataPredator:`センサー入力を増やすだけではなく、不要情報を切り捨てる順番まで固定する。物理的な弱点を情報優位で先に露出させないことを狙う。`,
    lateMonster:`初年度の性能を抑え、機体内部に調整幅を残す。二年目までは目立たないが、三年目に制御限界と学習率が同時に解放される。`,
    overfitPrecision:`想定条件の誤差モデルを細かく持ち、その範囲では異常な再現性を示す。逆に条件外では補正テーブルが利益を生まず、万能精密機ではない。`,
    fieldGeneralist:`一つの強みではなく、育成途中で方針変更しても既存投資が死ににくい接続余地を持つ。チーム事情に合わせて役割を変えやすい。`,
    counterShell:`系列自身の弱点を把握し、その弱点側の学習効率を高める。完成時の形を固定せず、育成で欠点を削ることを設計手順に含めている。`,
    pureMotion:`動作の開始から停止までを一続きの性能として扱い、静的な耐性や余剰容量を削る。数値上の脆さと引き換えに、駆動・制御の立ち上がりを極端に尖らせる。`,
    powerReserve:`通常運用では使わない電力・熱・構造余力を保持する。育成後半や大型パーツ導入で初めて余力を性能へ変換するため、初期値だけでは設計意図が見えにくい。`,
    aiOracle:`AI判断を固定ロジックではなく経験蓄積型に寄せる。初期の判断は荒いが、運用データが増えるほど選択傾向が整理され、三年目の伸びが大きい。`,
    budgetProdigy:`安価な標準部品を使い、弱点を明確に残す。全部を直すのではなく、育成で最も悪い部分だけを順に改善することで費用対効果を成立させる。`,
    retroRebuild:`旧式設計の単純さを残しつつ、加工精度と現代素材だけ更新する。古いから弱いのではなく、不要な制御層が少ないため調整結果が読みやすい。`,
    crossDomain:`${preferred}と第二兵装系を同じ姿勢・電力・照準制御へ接続する。最高適性は純化機に及ばないが、相手に応じて比較軸をずらせる。`,
    fortuneExtreme:`製造公差を平均へ寄せず、特性が大きく外れた個体も出荷基準内へ残す。平均個体は扱いづらい一方、稀な大当たりは同社の通常系列を明確に超える。`,
    absoluteSignature:`${primary}を系列の署名と定義し、それ以外を守るための余裕まで投入する。弱点は設計ミスではなく、象徴性能を成立させるため明示的に支払った代償である。`,
  };
  return text[role.id];
}

export const FIFTH_WAVE_SERIES_DEFINITIONS = Object.entries(ROOT_NAMES).flatMap(([manufacturerId, roots]) => roots.map((root, idx) => {
  const maker=MAKER[manufacturerId];
  const role=ROLES[idx];
  const suffix=manufacturerId==='bureau13'?'':`-${SUFFIXES[idx]}`;
  const nameLatin=`${root}${suffix}`;
  const [preferred,preferred2,avoided]=weaponPair(manufacturerId,idx);
  const preferredWeapons=role.weapon2?[preferred,preferred2]:[preferred];
  const weaponAdjustments={}; const weaponGrowthAdjustments={};
  if(role.weapon){weaponAdjustments[preferred]=role.weapon;weaponGrowthAdjustments[preferred]=.075;}
  if(role.weapon2){weaponAdjustments[preferred2]=role.weapon2;weaponGrowthAdjustments[preferred2]=.06;}
  if(role.avoid){weaponAdjustments[avoided]=role.avoid;weaponGrowthAdjustments[avoided]=-.05;}
  if(!role.weapon){weaponAdjustments[preferred]=4;weaponGrowthAdjustments[preferred]=.04;}
  if(['monoWeapon','absoluteSignature'].includes(role.id)){weaponAdjustments[avoided]=-7;weaponGrowthAdjustments[avoided]=-.06;}
  const seriesNumber=81+idx;
  const predecessorNumber=61+idx;
  const primaryLabel=GROUP_LABEL[maker.primary];
  const secondaryLabel=GROUP_LABEL[maker.secondary];
  const namingConcept=`${manufacturerId==='bureau13'?root:`${root}という名称`}と「${SUFFIXES[idx]}」の副名称を、${maker.theme}から読み替えた。第5世代では名称を単なる識別子にせず、「${role.label}」という育成上の性格まで名前に含ませている。`;
  const developmentBackground=`前身となる第${predecessorNumber}系列で得られた実運用データを基礎に、第五世代では完成時の数値ではなく三年間の変化そのものを製品仕様へ組み込んだ。${maker.lens}という企業思想を守りながら、今回は${maker.twist}という逆説的な開発方針を採用している。`;
  const engineeringNotes=roleEngineering(role,maker,WEAPON_LABEL[preferred]??preferred,WEAPON_LABEL[avoided]??avoided);
  const trainingNotes=`成長曲線は「${CURVE_LABEL[role.curve]??role.curve}」、カスタムは「${CUSTOM_LABEL[role.custom]??role.custom}」を前提とする。${primaryLabel}・${secondaryLabel}の初期傾向だけで評価せず、${role.id==='blankForge'||role.id==='lateMonster'||role.id==='aiOracle'?'三年目まで育て切った時の変化量':'得意分野を伸ばすか、意図的な弱点を補うか'}で判断すると系列の狙いが見えやすい。`;
  const weaponDoctrine=`推奨兵装は${preferredWeapons.map((key)=>WEAPON_LABEL[key]??key).join(' / ')}。${role.id==='crossDomain'?'二系統を切り替えて比較軸を変えることを前提とする':role.id==='monoWeapon'||role.id==='absoluteSignature'?'兵装そのものを機体構造の一部として扱うため、非推奨兵装への変更は明確な遠回りになる':'兵装適性は固定職ではなく育成の方向付けとして働く'}。非推奨は${WEAPON_LABEL[avoided]??avoided}。`;
  const concept=`${nameLatin}は${role.label}を主題にした第5世代系列。${role.summary} ${maker.theme}を性能配置へ結びつけ、${maker.lens}という企業思想を通常とは異なる方向から実証する。初期総合評価だけでは価値が読めないよう、成長曲線・カスタム適性・兵装嗜好の組み合わせまで含めて一つの設計としている。`;
  return {
    id:`${manufacturerId}-${slug(nameLatin)}`,
    manufacturerId,seriesNumber,nameKana:nameLatin.replaceAll('-','・'),nameLatin,
    archetypeId:role.archetypeId,
    summary:`${role.label}。${role.summary}`,
    concept,namingConcept,developmentBackground,engineeringNotes,trainingNotes,weaponDoctrine,
    marketPosition:`${role.label} / 第5世代`,productionTier:role.tier,availabilityWeight:TIER_WEIGHT[role.tier],predecessorNumber,
    individualityTrait:role.individuality,growthCurveId:role.curve,customAptitudeId:role.custom,intrinsicTraitId:role.trait,
    fifthGeneration:true,refitGeneration:5,refitVersion:'3.5',
    preferredWeapons,avoidedWeapons:[avoided],
    abilityTendencyTags:[maker.primary,maker.secondary,preferred,role.id.includes('ai')?'ai':role.id.includes('data')?'compute':role.id.includes('fortress')?'resistance':'result'],
    abilityTendencyMultiplier:role.id==='monoWeapon'||role.id==='absoluteSignature'?1.52:1.38,
    annualVolatility:role.tier==='experimental'||role.tier==='rare'?1.3:role.tier==='mass'?.78:1,
    groupAdjustments:groupAdjustments(maker,role,idx),growthAdjustments:growthAdjustments(maker,role),
    reliabilityAdjustment:role.reliability??0,resistanceAdjustment:role.resistance??0,
    weaponAdjustments,weaponGrowthAdjustments,
    statVarianceMultiplier:role.variance??(role.individuality==='uniform'?.82:role.individuality==='jackpot'?1.12:1),
    growthVarianceMultiplier:role.individuality==='growthSwing'?1.18:role.individuality==='uniform'?.9:1,
    eccentricBonusAdjustment:role.id==='fortuneExtreme'?.08:role.id==='dangerLab'?.04:0,
  };
}));

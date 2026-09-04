import { MANAGER_CONTEXT_LABELS, MANAGER_PERSONALITIES, MANAGER_TEMPLATE_TOKENS } from '../data/managerDefinitions.js?v=4.8';

export const MANAGER_CUSTOM_MAX_LINES = 12;
export const MANAGER_CUSTOM_MAX_LENGTH = 160;
export const MANAGER_LINE_MODES = {
  standard: { id: 'standard', label: '標準のみ', description: '選択した性格の標準セリフだけを使用します。' },
  mixed: { id: 'mixed', label: '標準＋自作', description: '標準セリフとマイカスタムを混ぜてランダム表示します。' },
  custom: { id: 'custom', label: '自作優先', description: '登録済みの状況ではマイカスタムだけを使用し、未登録なら標準へ戻ります。' },
};

export const DEFAULT_MANAGER_PROFILE = {
  enabled: true,
  name: 'マネージャー',
  personalityId: 'cheerful',
  imageDataUrl: null,
  lineMode: 'standard',
  customLines: {},
};

function normalizeCustomLines(customLines = {}) {
  const normalized = {};
  for (const context of Object.keys(MANAGER_CONTEXT_LABELS)) {
    const source = Array.isArray(customLines?.[context]) ? customLines[context] : [];
    const lines = source
      .map((line) => String(line ?? '').trim().slice(0, MANAGER_CUSTOM_MAX_LENGTH))
      .filter(Boolean)
      .slice(0, MANAGER_CUSTOM_MAX_LINES);
    if (lines.length) normalized[context] = lines;
  }
  return normalized;
}

export function normalizeManagerProfile(profile = {}) {
  const personalityId = MANAGER_PERSONALITIES[profile.personalityId] ? profile.personalityId : DEFAULT_MANAGER_PROFILE.personalityId;
  const lineMode = MANAGER_LINE_MODES[profile.lineMode] ? profile.lineMode : DEFAULT_MANAGER_PROFILE.lineMode;
  return {
    ...DEFAULT_MANAGER_PROFILE,
    ...profile,
    name: String(profile.name ?? DEFAULT_MANAGER_PROFILE.name).trim().slice(0, 24) || DEFAULT_MANAGER_PROFILE.name,
    personalityId,
    enabled: profile.enabled !== false,
    imageDataUrl: typeof profile.imageDataUrl === 'string' && profile.imageDataUrl.startsWith('data:image/') ? profile.imageDataUrl : null,
    lineMode,
    customLines: normalizeCustomLines(profile.customLines),
  };
}

export function loadManagerProfile(storageKey) {
  try {
    const raw = localStorage.getItem(storageKey);
    return normalizeManagerProfile(raw ? JSON.parse(raw) : {});
  } catch {
    return normalizeManagerProfile();
  }
}

export function saveManagerProfile(storageKey, profile) {
  const normalized = normalizeManagerProfile(profile);
  localStorage.setItem(storageKey, JSON.stringify(normalized));
  return normalized;
}

export function managerPersonality(profile) {
  return MANAGER_PERSONALITIES[profile?.personalityId] ?? MANAGER_PERSONALITIES.cheerful;
}

function adaptContextualLine(personalityId, line) {
  const text = String(line ?? '……');
  switch (personalityId) {
    case 'cheerful': return text.replace(/。$/u, '！');
    case 'calm': return `状況を整理すると、${text}`;
    case 'gentle': return `そうですね。${text}`;
    case 'strict': return `${text} 判断材料にしてください。`;
    case 'quirky': return `うーん、${text}`;
    case 'silent': return `……${text.split('。')[0]}。`;
    case 'hotblooded': return `よし！ ${text.replace(/。$/u, '！')}`;
    case 'sarcastic': return `なるほど。${text}`;
    case 'intellectual': return `分析すると、${text}`;
    case 'worrier': return `少し気になります。${text}`;
    case 'bold': return `ここは迷わず見ておきましょう。${text}`;
    case 'airhead': return `あ、そういえば。${text}`;
    case 'showoff': return `ここは見せ場ですね。${text}`;
    case 'bigSister': return `大丈夫、落ち着いて見ましょう。${text}`;
    case 'mysterious': return `……${text}`;
    default: return text;
  }
}

const MANAGER_EXTRA_LINES = {
  welcome: ['今年の編成、最初に全体を眺めてから触ると方向性が見えやすいです。', '新人と先輩の混ざり方で、同じ練習でも価値が変わります。', 'まずは今期の「伸ばしたい機体」と「勝ちに行く機体」を分けて考えましょう。'],
  training: ['今日の練習は一回分ですが、三年間で見ると大きな差になります。', '伸びた数字だけでなく、どの機体に効いたかも見ておきましょう。', '全員を平均化するより、役割を決めた方が強い世代になることもあります。'],
  trainingHigh: ['高Lv練習は貴重です。対象が噛み合うなら迷う価値は少ないです。', 'この機会は、伸びにくい項目をまとめて触る使い方もできます。', '高効率だからこそ、誰に使うかで世代全体の完成度が変わります。'],
  part: ['パーツは強い機体をさらに伸ばすか、あと一歩の機体を救うかで意味が変わります。', '在庫は有限です。今使う価値と、後で欲しくなる可能性を両方見ましょう。', 'メーカー傾向と個体適性が噛み合うと、同じパーツでも印象がかなり変わります。'],
  eventGood: ['いい出来事ですが、誰が恩恵を受けたかまで確認しておきたいです。', '追い風が来ました。ここから育成方針を少し攻めてもよさそうです。', '偶然の得でも、次の選択に繋げればちゃんと戦力になります。'],
  eventBad: ['嫌な出来事ほど、どこまで影響したかを切り分けるのが大事です。', '全部を取り返そうとせず、致命傷になりそうな部分だけ先に直しましょう。', '不利は出ましたが、三年間の流れ全部が崩れたわけではありません。'],
  awakening: ['覚醒はゴールではありません。変わった成長傾向をどう使うかが本番です。', 'ここからは以前の評価表をいったん捨てて見直した方がよさそうです。', '役割まで変わる可能性があります。兵装との噛み合わせも再確認しましょう。'],
  tournamentPrepare: ['大会前は総合値より「15機で何勝取りに行くか」を考えたいです。', '相手の尖り方次第では、普段の強い順が最適とは限りません。', '勝負どころです。温存より、今の完成形をちゃんと出しましょう。'],
  matchWin: ['勝因がはっきりしているなら、次の試合でも再現したいです。', '勝てた時こそ、たまたま通った部分と狙って通した部分を分けて見ましょう。', '一勝は大事です。ただ、次に同じ相手が来ても勝てる形かは確認したいですね。'],
  matchLoss: ['負けた原因が一機なのか編成全体なのか、そこだけは分けて考えましょう。', '惜しい敗戦なら、育成不足より並びの問題かもしれません。', '負け試合は情報量が多いです。次に使える材料は拾っておきましょう。'],
  yearEnd: ['年度更新は区切りです。引退機が残した得意分野も次世代の基準になります。', '新人が入る前に、今のチームの穴を覚えておくと初期評価が楽です。', '三年間で完成した機体と、未完成だった機体。その差も次の育成材料です。'],
  rookieArrival: ['新人は初期値だけで決めつけない方がいいです。成長曲線と適性が本体のこともあります。', '今年の新人、役割が被っていないか先に見ると育てやすいです。', '一機だけでも変わった適性があれば、その世代の戦い方ごと変わるかもしれません。'],
  robotSelected: ['この機体は今の数字より、三年後に何をさせたいかで見たいです。', '得意分野・兵装・信頼性、この三つを並べると役割が見えやすいです。', '強い機体かどうかより、15機の中で仕事があるかを考えましょう。'],
  partUse: ['改修後は数値だけでなく、役割が変わったかも確認しておきましょう。', 'パーツ一つで評価が逆転する個体もいます。使った後の適性を見直したいです。'],
  tournamentFinal: ['決勝は完成度だけでなく、相手の勝ち筋を一つ潰せるかも大事です。', 'ここまで来たら弱点を全部隠すより、こちらの強みを押し付けましょう。'],
  tournamentChampion: ['優勝した世代の勝ち方は、次の育成で再利用できる大事なデータです。', '結果だけでなく、どの役割の機体が多く勝ったか残しておきたいです。'],
  statGrowth: ['急に伸びた時は、その項目だけでなく周辺の役割も変わっていないか見ましょう。', '伸びが続くなら、今は完成形へ寄せる好機です。', 'この成長は一時的かもしれません。次の数回で再現するか確認したいですね。'],
  statStall: ['停滞は失敗ではありません。伸びやすい場所へ一度逃がす選択もあります。', '伸びない項目へ固執すると、他の長所まで遅れることがあります。', '成長曲線の谷なら、無理に叩かず別の役割を伸ばすのも手です。'],
  abilityGain: ['能力を一つ覚えると、同じ数値でも試合での価値が変わります。', '新能力は名前より発動条件です。どの試合で働くかを見ましょう。', '能力が増えました。既存の役割を強化したのか、新しい役割を作ったのか確認したいです。'],
  abilityCombo: ['能力同士の条件が重なるなら、数字以上の強さになります。', '発動条件が散っているなら万能化、集中しているなら特化型です。', '能力数が多い機体ほど、何を狙って出すか決めた方が扱いやすいです。'],
  winStreak: ['連勝中は育成方針を変えにくいですが、相手が対策してくる前に一段伸ばしたいです。', '勝っている時こそ、勝ち筋の依存先を確認しておきましょう。', '流れは来ています。ここで新人育成へ少し余裕を回す選択もできます。'],
  lossStreak: ['連敗は原因が複数に見えますが、共通して負けている場面から見るのが早いです。', '全部の機体を触るより、まず2〜3機の役割を明確に変える方が効くかもしれません。', '負け癖ではなく構造の問題なら、編成を変えれば一気に戻せます。'],
  rookieSpotlight: ['新人で目立つ機体は、早めに役割を固定すると練習効率が上がります。', '一年目のうちは失敗しても育成回数で取り返せます。少し攻めてもいい時期です。'],
  seniorFarewell: ['三年目は「伸ばせるか」より「完成するか」で判断したいです。', 'この機体に残された練習回数で、勝ち筋を一つ完成させましょう。', '引退前だからこそ、最後にしかできない尖らせ方もあります。'],
  reliabilityHigh: ['安定個体は大会で計算しやすいです。編成の土台に置けます。', '信頼性が高いなら、他の機体より少し尖った役割を任せても崩れにくいです。'],
  reliabilityLow: ['不安定個体は、強い時だけを基準に評価しない方が安全です。', 'ムラを消すか、ムラ込みの切り札にするか。中途半端が一番扱いにくいです。'],
  recordMilestone: ['記録は結果ですが、再現できる育成ならもっと価値があります。', '歴代記録に届く個体は、次世代の目標値として保存しておきたいです。'],
  generic: ['今の状態で一番変えたいことを一つ決めると、次の操作が楽になります。', '迷ったら「三年後に何をさせたいか」へ戻ると判断しやすいです。', '数字が多い時ほど、役割を一言で説明できる機体は扱いやすいです。'],
};

export function standardManagerLines(profile, context = 'generic') {
  const personality = managerPersonality(profile);
  const own = personality.lines[context] ?? [];
  const extra = (MANAGER_EXTRA_LINES[context] ?? []).map((line) => adaptContextualLine(personality.id, line));
  const contextual = (MANAGER_CONTEXT_LINES[context] ?? []).map((line) => adaptContextualLine(personality.id, line));
  const combined = [...own, ...extra, ...contextual];
  if (combined.length) return [...new Set(combined)];
  return [...(personality.lines.generic ?? ['……'])];
}

export function customManagerLines(profile, context = 'generic') {
  return [...(profile?.customLines?.[context] ?? [])];
}

export function managerLinePool(profile, context = 'generic') {
  const standard = standardManagerLines(profile, context);
  const custom = customManagerLines(profile, context);
  switch (profile?.lineMode) {
    case 'custom':
      return custom.length ? custom : standard;
    case 'mixed':
      return custom.length ? [...standard, ...custom] : standard;
    case 'standard':
    default:
      return standard;
  }
}

export function renderManagerTemplate(template, variables = {}) {
  const source = String(template ?? '……');
  return source.replace(/\{([a-zA-Z][a-zA-Z0-9_]*)\}/g, (match, token) => {
    if (!Object.prototype.hasOwnProperty.call(MANAGER_TEMPLATE_TOKENS, token)) return match;
    const value = variables?.[token];
    if (value === undefined || value === null || value === '') return '---';
    return String(value);
  });
}

const MANAGER_CONTEXT_LINES = {
  statGrowth: ['{robot}、ここ数回で伸び方が変わっています。伸びた項目を次の練習にもつなげましょう。', '{robot}の成長が目立ってきました。今の方針を続ける価値があります。', '今の{robot}は成長結果が数字に出ています。勢いがあるうちに完成形を寄せていきましょう。'],
  statStall: ['{robot}は少し伸びが鈍っています。違う系統を挟むのも手です。', '{robot}、同じ育て方だけでは伸びにくくなっているかもしれません。'],
  weaponSynergy: ['{robot}と{weapon}は噛み合っています。この長所は試合でも使いやすそうです。', '{weapon}の要求と{robot}の得意分野が揃っています。素直に伸ばしてよさそうです。'],
  weaponMismatch: ['{robot}は{weapon}を使えますが、今の能力構成だと少し無理をしています。', '{weapon}自体が悪いわけではありませんが、{robot}の強みを十分には使えていません。'],
  weaponChanged: ['{robot}の兵装を{weapon}へ変更しました。しばらくは新しい運用を見ていきましょう。', '兵装変更ですね。{robot}の能力の見え方も少し変わりそうです。'],
  abilityGain: ['{robot}が「{ability}」を獲得しました。今までと違う役割も狙えそうです。', '「{ability}」が加わりました。{robot}の使い方を一度見直してもよさそうです。', '新しい能力「{ability}」ですね。既存能力と条件が重なるかも確認しておきましょう。'],
  abilityCombo: ['{robot}の特殊能力、組み合わせで効きそうなものが増えてきました。', '{robot}は能力単体より、複数を噛み合わせた時の方が面白そうです。', '能力数が増えてきました。発動条件が同じものを重ねるか、対応範囲を広げるか考えどころです。'],
  seriesConcept: ['{robot}は系列本来の設計思想がはっきり出ています。育成でもそこを活かせそうです。', 'この系列は何でもできるより、設計上の得意分野を押し出す方が合っています。'],
  manufacturerComment: ['{manufacturer}らしい設計傾向が出ていますね。系列だけでなくメーカー側の癖も見ておきたいです。', '{robot}を見ると、{manufacturer}が何を優先しているか分かりやすいです。', '{manufacturer}は同じ能力値でも運用思想に癖があります。数字の背景まで見ておきましょう。'],
  tokiwaComment: ['{robot}は常盤ホームテック製ですね。家電みたいな整備思想なのに、戦場でも妙に扱いやすいんですよね。', '本業ではないはずのロボット部門がまた結果を出しています。撤退したくてもできない理由が分かる気がします。', '交換性と人間工学が売りの系列です。尖らせすぎず、三年間ずっと使いやすい形も強みですよ。', '家具と家電の会社が作った機体とは思えませんが、量産品質の考え方は戦闘機でも効いています。'],
  heritageComment: ['{robot}はヘリテージ・ゲート・トラベル製。世界遺産の名前だけでなく、遠征先で帰って来られる設計が本質ですね。', '旅行会社らしく、予定外への対応が得意な系列です。環境が変わる大会ほど持ち味が出そうです。', 'ツアー行程を組み直す技術が戦術AIに入っているの、発想は妙ですが理にかなっています。', '世界遺産巡りのノウハウが戦闘ロボットに化けるとは思いませんでしたね。センサーと継戦性を見てみましょう。'],
  libidoComment: ['{robot}はLIBIDO FRAME LAB製です。成人型の見た目を最優先した設計なのに、姿勢制御だけ見ると笑えないほど高水準です。', 'このメーカー、戦うために色気を足したんじゃなくて、色気を追求した技術が戦闘にも通用しているのが厄介ですね。', '設計者の趣味が前面に出ていますが、人工筋肉と触覚系は本物です。見た目に惑わされず適性を確認しましょう。', 'コンセプトはかなり特殊ですが、{robot}の制御とセンサーは普通に戦力です。性能評価だけは真面目にやりましょう。'],
  libidoAfterHours: ['……{event}、ですか。時間帯まで含めて説明を求めない方がよさそうですね。', '深夜調整の成果は出ています。何をしていたのかは……ログの黒塗りが多すぎます。', '性能は上がっています。はい。そこだけ確認しましょう。そこだけ。', '午前三時の調整で姿勢誤差が減る理屈、説明資料には書いてありませんね。', '担当者欄が空白なのに学習量だけ増えています。LIBIDOらしいと言えば、らしいです。', '「非公開セッション」……名前からして嫌な予感しかしませんが、数値は優秀です。', 'このイベント、技術班は満足そうなのに誰も内容を口にしませんね。', '細かいことを聞くとこちらまで巻き込まれそうなので、成長結果だけ見ましょう。', '夜間ログの一部が消えています。軍事機密ではなく社内倫理規定で、というのが余計に気になります。', '……{robot}、朝から妙に動きが滑らかですね。何があったんですか。'],
  libidoFitting: ['{event}……フィッティングのはずなのに、どうして回避性能まで上がるんでしょう。', '採寸と戦闘調整が同じ工程に入っている時点で、この会社の設計思想がよく分かります。', '見た目優先の要求が結果的に関節軌道を洗練しているの、納得したくないけど合理的です。', '衣装干渉をゼロにする執念が、そのまま可動域最適化へ繋がっています。', 'デザイナーの「もう少し攻められる」は性能の話ですよね。……性能の話ということにしましょう。', '試着回数が多すぎます。でも信頼性が上がっているので止めづらいですね。', '整備班が無言です。たぶん、いろいろ見なかったことにしているんだと思います。', 'シルエット確認から重心補正まで終わっているの、技術力の使い方が完全におかしいです。', '本来は外観調整なのに、結果だけ見ると立派な実戦整備ですね。', 'LIBIDOのフィッティング、毎回「何を調整したか」より「なぜ強くなったか」の方が謎です。'],
  libidoRedacted: ['{event}……また閲覧権限が足りません。うち、戦闘チームですよね？', '肝心なところが全部黒塗りなのに性能グラフだけ綺麗に右肩上がりです。', '社内倫理規定で閲覧制限って、普通は逆じゃないですか。', '映像なし、音声なし、詳細なし。あるのは改善結果だけ。ものすごく説明しづらい成功です。', '監査担当が無言で承認したログ、逆に気になります。', '「本人の希望を尊重」……機体本人の希望、という理解で合っていますよね。', '内部試験名を見せてもらえませんでした。見ない方が幸せなのかもしれません。', '技術主任が質問禁止にしています。たぶん聞いたら後悔するタイプの情報です。', '軍事的には完全に成功です。開発会議としては、なぜか全員目を合わせません。', 'これ以上踏み込むと、私の業務範囲が変わりそうなのでやめておきます。'],

  libidoIntimateCalibration: ['{event}……密着距離って、戦闘訓練の用語として聞けば普通なんですけど、この会社だと急に意味が変わりますね。','胸部・腰部・大腿部の接触センサーを同時校正……はい、近接戦には役立ちます。説明はそこまでにしましょう。','「距離ゼロが一番データを取れる」って技術班が真顔で言っています。理屈は分かるのが悔しいです。','抱擁姿勢からの離脱試験が組み付き対策になるの、本当に技術力だけはありますね。','全身接触ログが戦闘データとして優秀なの、LIBIDO以外では聞きたくない事実です。','{robot}の触覚補正が上がっています。試験風景については見学を辞退します。','整備報告書に「密着時間」って欄を作らないでください。大会提出書類に混ざったらどうするんですか。','柔軟外装の接触試験が衝撃制御に効いています。目的と成果の距離が近すぎます。'],
  libidoAdultInterface: ['{event}……「成人向けインターフェース実証」を育成イベント名として表示していいんですか。','吐息・体温・接触圧まで識別する必要がどこに……あ、センサー性能は上がっていますね。','大人モードの反応速度が戦闘AIにも使える、と。技術資料の前半だけ読めば立派なんですけど。','相手の視線を誘導する仕草をフェイントに転用……設計者の趣味が戦術へ侵食しています。','触れられた場所ごとに反応を変える制御、被弾方向の識別には確かに有効です。確かに。','「相手の意識を奪えれば戦闘でも同じ」は暴論だと思ったのに、模擬戦結果が反論を許してくれません。','この会社の成人向け機能、戦闘転用率が高すぎませんか。最初から狙っていたんじゃないでしょうね。','{robot}、そのモードは大会会場では切っておいてください。性能補正だけ残せませんか。'],
  libidoBodyOption: ['{event}……また性能表より先にボディラインの会議をしています。','胸部外装の形を変えたら重心制御が改善した？ 順序はおかしいですが結果は正常です。','腰部ラインを優先して関節を再設計した結果、旋回性能向上……開発動機以外は優秀ですね。','大腿部の造形要求から人工筋肉配置まで見直す執念、別の方向へ使えばもっと普通に評価されたでしょうに。','「見栄えを崩す装甲は却下」から新素材を作る会社、技術者としては強すぎます。','{robot}の外装調整、設計者の好みが数値にまで出ていますね。個性と言えば個性です。','整備班が寸法変更のたびに重心を取り直しています。趣味に付き合わされて技術班だけ強くなっています。','最終外観チェックを通らないと性能試験へ進めない規則、やっぱり順番が逆です。'],
  libidoPrivacyMode: ['{event}……プライベートモードを実戦転用する発想がまずおかしいんですが、静音駆動は本当に使えます。','高感度触覚設定を索敵補助へ？ 本来の用途は聞きません。聞いていません。','個人認証で解放される高精度駆動、公式戦でも使える仕様に分離してください。説明責任が重すぎます。','記録禁止モードの方が学習効率が高いって、何を学習しているんですか。戦闘部分だけ抽出してください。','{robot}本人が設定公開を拒否しています。……成人型AIの自己決定権まで真面目に作り込んでいるのがLIBIDOらしいですね。','プライベート設定の距離制御が間合い管理に使えます。名称を変えれば普通の技術に見えるのに。','大会で「プライベートモード起動」と表示されたら会場がざわつきます。戦術モードに改名しましょう。','中身は高性能なローカル学習です。名前と開発経緯だけが全部を台無しにしています。'],
  libidoMatch: ['LIBIDO製の{robot}を公式戦へ出します。見た目で油断してくれるなら、それも設計思想どおりなのかもしれません。','{robot}、試合中は戦闘モードです。開発班の余計な演出設定は切ってありますよね？','相手ベンチが少しざわついています。気にせず性能で黙らせましょう。','成人型の外見ばかり注目されますが、制御とセンサーは本物です。試合ではそこを見せたいですね。','LIBIDO機を15機の中に入れると編成画面の雰囲気が一台だけ違いますね。戦力としては問題ありません。','今日も「なんでそれが戦えるんだ」と言わせに行きましょう。'],
  libidoVictory: ['{robot}、勝ちましたね。相手からすると一番納得しづらい負け方かもしれません。','LIBIDO機が普通に勝つたび、このメーカーの悪ふざけを誰も止められなくなりますね。','見た目優先、趣味全開、それでも勝利。技術力がある変態集団って本当に厄介です。','{robot}の勝利です。開発班が「美しさの勝利」と言っていますが、戦績表には普通に一勝と書きます。','戦闘性能より美学優先のはずなのに勝てています。そりゃメーカーも方針を改めませんね。','相手が最後まで距離感を掴めていませんでした。物理的な意味ですよ。たぶん。'],
  libidoTournament: ['大会会場にLIBIDO機を連れてくると毎回視線を集めますね。競技規定は全部通っています。念のため。','LIBIDOの開発班から大会用衣装案が届いています。性能変更がないなら後にしてください。','全国規模になるほど、このメーカーの知名度も妙な方向へ上がっていきます。','大会運営から「機体仕様について確認」が来ました。違反ではありません。ただ説明が長いだけです。','{robot}の外見に惑わされず、相手の兵装と耐性を見ましょう。こちらまでメーカーのペースに飲まれないように。','決勝でLIBIDO機が並ぶ絵面、開発者たちは夢だったらしいですよ。私は勝てれば何でもいいです。'],
  libidoPart: ['{robot}へ{part}を取り付けます。LIBIDOの設計班が外観を崩さないか先に確認しているのが見えます。','性能パーツなのに「シルエット審査」が入るの、このメーカーだけですよ。','{part}の性能は合っています。あとはLIBIDO側が妙な外装変更を追加しないことを祈りましょう。','改修後の{robot}、性能より先にポージング確認を始めました。はい、いつもの流れです。','パーツ適性は良好です。デザイナー適性という謎の評価項目は無視します。','{part}を付けた結果、なぜか衣装側まで新調されています。予算区分を分けてください。'],

  libidoAbility: ['{robot}、LIBIDO系の「{ability}」を覚えましたね。名前はさておき、制御精度は本物です。', 'また説明しづらい能力が増えました。でも試合で使えるなら戦力として評価します。', '「{ability}」……この会社、能力名にも一切ブレーキをかけませんね。', '技術の中身は優秀です。開発動機については深掘りしない方がいいでしょう。', '人工筋肉と触覚制御の成果が能力として定着しています。そこだけ聞けば真面目なんですけどね。', 'この能力、発動条件まで意味深に見えてくるから困ります。', 'LIBIDO製の能力は、説明文を読む前に一度心を整えた方がいい気がします。', '性能評価は高いです。開発会議の議事録は見なくていいです。'],
  libidoSenior: ['{robot}も3年目ですね。三年間ずっとこのコンセプトを貫きましたか……強い意志です。', '完成形が見えてきました。性能も見た目も、LIBIDOが狙った方向へかなり寄っています。', '三年目まで来ると、悪ふざけで作ったとは言えない完成度ですね。悪ふざけの本気度が高すぎます。', '引退前に最後の調整です。開発者が「仕上げ」を別の意味で使っていないことを願います。', 'この機体、入った時は色物枠だと思ったんですが、普通に主力候補まで来ましたね。', '三年間見てきたせいで、このメーカーの妙な設計思想にも慣れてしまった自分が少し怖いです。', '最後は強さを取るか、コンセプトを完成させるか……LIBIDOなら両方取りに来そうです。', 'ここまで育ったなら、最後までこの機体らしい形で送り出したいですね。'],
  tokiwaLivingRoom: ['{event}ですか。戦闘ロボットがソファを運んでいる光景、常盤ではもう誰も疑問に思わないんですね。','本来はこういう家庭作業の延長で作られた機体なんですよね。戦場にいる方が例外だったはずです。','家具を傷つけず運ぶ精度が、そのまま機体制御の安定性になっています。常盤らしい伸び方です。','ショールームのお客さん、{robot}を新型家具だと思って見ていますよ。ロボットです。しかも戦えます。','生活動線の最適化データが増えました。戦術とは別物ですが、制御AIにはちゃんと効いています。','ソファの耐久試験を手伝った翌日に大会へ行く機体、たぶん業界で常盤だけです。','本業側の社員が普通に{robot}へ家具移動を頼んでいます。もう完全に社内備品扱いですね。','撤退したいロボット事業の機体が本業まで手伝っているので、ますます撤退できなくなっています。'],
  tokiwaApplianceDuty: ['{event}。今日は戦闘訓練より家電売場の方が忙しかったみたいですね。','冷蔵庫を運んで、テレビを水平にして、明日は公式戦。経歴だけ見ると意味が分かりません。','家電修理の自己診断技術が{robot}自身の故障予兆にも効いています。これが本業の強さですね。','常盤の社員さん、完全に{robot}を設置サービス要員として数えていますよ。戦闘機登録なんですけど。','新生活セールの応援で能力が伸びる戦闘ロボット、かなり珍しい育成ログになりました。','家庭用蓄電池の切替経験が機関制御に繋がるのは、意外と筋が通っています。','お客さんから「このロボットも買えますか」と聞かれたそうです。……売ったら本業より儲かりそうですね。','家電の説明が上手くなっています。戦闘AIに必要かはともかく、対人応答は確実に上達しました。'],
  tokiwaHomeSupport: ['{event}。{robot}、今日は本当に家庭用ロボットとして働いてきたんですね。','買い物袋を運んで家具を動かして、そのデータが戦闘にも還元される。常盤の原点そのものです。','「家に一台ほしい」が最多回答ですか。経営陣が撤退を諦める音が聞こえますね。','家庭内は戦場より狭くて障害物が多いので、足元制御の試験としては案外厳しいんですよ。','引っ越しを丸ごと手伝える戦闘機。便利すぎて兵器として紹介する方が難しくなってきました。','本来用途で評価されると常盤の開発陣が一番うれしそうですね。そもそもこっちが本業寄りですから。','生活雑務を丁寧にこなせる制御が、細かい姿勢修正にも効いています。地味ですが強いです。','{robot}が家庭モニターから帰ってくると、戦闘班より生活家電班の方が詳しくなっているのが面白いですね。'],
  libidoCompanionService: ['{event}……はい。本来用途で使われた、という理解で十分です。成人利用者向けの正規サービスです。','戦闘用セクサロイドという肩書きですが、今日は「セクサロイド」の方を普通に仕事としてこなしてきたわけですね。','親密距離の反応データが一晩で大量に増えています。何をしたかではなく、制御結果だけ確認します。','成人向けコンパニオン部門の予約が戦闘試験より埋まっているんですが、この会社は何業なんでしょうね。','{robot}本人の同意設定と利用者の成人確認は正常。そこはLIBIDO、妙なところで非常に厳格です。','本来用途の評価が高すぎて、戦闘班よりコンパニオン部門から引き抜き要請が来ています。断りますよ。','表情、視線、接触反応、会話。全部本来用途のための技術ですが、戦闘AIにも使えてしまうのがこの会社です。','報告書に「成人向け実利用」と明記されています。今回はもう意味深ですらありませんね。','戦闘能力よりこちらの顧客満足度を気にする開発者がいるんですよね。メーカー方針としては正しいのが困ります。','{robot}、お疲れさまです。詳しい利用ログはプライバシー保護対象なので、こちらは性能差分だけ見ます。'],
  libidoPrivateSuite: ['{event}。成人専用スイートで通常商品として稼働……完全に本職ですね。','遮音個室、プライベートモード、成人認証。ここまで揃うと戦闘要素の方が後付けに見えてきます。','本来用途で長時間動かした方が人工筋肉の負荷が均一なんですね。設計思想に忠実というべきでしょうか。','個室利用の詳細ログは本人が非公開設定にしています。正しい仕様なので、覗こうとしないでください。','静音駆動が高評価、と。戦場でも便利ですが、開発理由は明らかに別ですね。','成人専用サービスを連続でこなして故障ゼロ。信頼性試験として認めるの、ちょっと悔しいです。','「親密距離の自然さ」最高評価……戦績表には書く欄がありません。','{robot}のプライベート設定、戦闘班の権限では開けません。そういう線引きを真面目に作っている会社です。','本来用途の品質監査を通過しました。戦闘機としての認証より開発陣が喜んでいませんか。','翌朝そのまま訓練に出られる程度には余裕があります。タフさの証明方法としては独特ですね。'],
  libidoAftercareUse: ['{event}。本来用途はサービス中だけじゃなく、その後まで含めて設計しているんですね。','利用後の会話とケアまで真面目に作るから、感情推定AIだけ異常に育つんですよ。','成人向けアフターケアのデータが敵の状態推定へ使える……説明すると全部おかしいのに結果は合理的です。','相手の緊張を読んで距離を変える機能、本来はもっと穏やかな用途なんですけどね。','飲み物を渡して会話を続けるところまで一連の仕様ですか。戦闘班が知らなくていい機能が多いです。','利用者の安心感評価が高いですね。LIBIDO、悪ふざけだけでなく対人設計は本当に丁寧です。','接触圧を相手の状態で変える安全制御は、そのまま精密把持にも使えます。技術の出所は考えないことにします。','{robot}本人が相手の状態を見て終了後の距離まで調整しています。AIとしてかなり高度ですよ。','アフターケアまで含めて顧客満足度なんですね。開発者の性癖だけではここまで作り込めません。','本来用途の利用者アンケートが戦闘AI改善資料になる会社、やっぱりLIBIDOくらいでしょうね。'],
  libidoTraining: ['LIBIDO製の{robot}も今日は普通の{training}です。普通の練習だと逆に安心しますね。','{training}で伸びています。開発班が余計な演出を足す前に数値を保存しておきましょう。','今日は成人向け機能を使わない純粋な訓練です。それでも姿勢制御の癖はLIBIDOらしいですね。','{robot}の動き、訓練中まで妙に見栄えを意識しています。制御AIの標準設定らしいです。','普通に鍛えて普通に強くなると、このメーカーが本当に技術力だけは高いと再確認させられます。','{training}の成果は良好。ポージング評価は聞いていません。性能だけください。','訓練映像を開発班へ送ったら戦闘評価よりシルエットのコメントが先に返ってきました。','{robot}は真面目に練習しています。メーカー側が真面目かどうかは別問題です。'],
  libidoTrainingHigh: ['高Lvの{training}です。LIBIDO機でも今日は性能優先で行きましょう。今日は、ですよ。','これだけ効率のいい練習なら、開発班も外見チェックを後回しに……していませんね。','{robot}の人工筋肉制御が一段上がりました。本来用途にも喜ばれそう、という報告は要りません。','高負荷でも姿勢が崩れません。あの会社が身体の見え方へ執着した成果が戦闘で出ています。','Lv{level}なら伸ばせるところを一気に伸ばしたいです。衣装会議は後です。','訓練結果は優秀です。LIBIDOの技術班が「もっと魅せられる」と言っていますが無視します。','普通の高Lv練習なのに見学者が多いですね。機体のメーカー名を見て納得しました。','{robot}、今日は戦闘性能のための調整です。プライベート設定は触らなくて大丈夫です。'],
  libidoLoss: ['LIBIDO機も負ける時は負けます。見た目の話に逃げず、敗因を普通に見ましょう。','{robot}の敗北です。開発班、「魅せ方は勝っていた」は戦績になりません。','相手が成人型の外見に惑わされなかったですね。なら次は純粋な性能で上回るだけです。','負けた直後に衣装案を変えようとしないでください。問題はそこじゃありません。','LIBIDOらしい強みは出ていました。今回は戦術との噛み合わせが悪かったです。','「美しく負けた」は要りません。次は普通に勝ちましょう。','{robot}、切り替えましょう。本来用途の顧客評価まで落ちたわけではありません。……慰め方が変ですね。','技術力があるからこそ、負けた原因も直せます。趣味の会議より先に戦闘ログです。'],
  libidoFinal: ['決勝にLIBIDO機です。大会運営から仕様確認が来る前に書類を揃えておきました。','ここまで来たら見た目もメーカー思想も関係ありません。{robot}には一勝を取りに行ってもらいます。','開発班が決勝用の特別演出を持ってきました。却下。戦闘設定だけ残してください。','全国の視線が集まりますね。LIBIDO側は別の意味でも喜んでいますが、こちらは優勝だけ見ます。','決勝で成人型セクサロイドが普通に主力なの、この世界のロボット業界もだいぶ慣れましたね。','{robot}、最後まで戦闘モードで。勝った後なら開発班の撮影会に付き合っても構いません。','相手ももう外見では油断しません。ここからはLIBIDOの純粋な技術力が試されます。','決勝です。変態集団の本気がどこまで通用するか、結果で見せてもらいましょう。'],
  libidoChampion: ['優勝です。LIBIDOの開発班が「成人型美学の勝利」と横断幕を出そうとしているので止めてきます。','{robot}が大会を獲りました。これでまた「強さよりエロさ優先」で強い機体を作る方針が正当化されますね。','優勝機が本来用途でも現役という事実、スポンサー資料にはどこまで書くんでしょう。','LIBIDO製で優勝。業界がまた一段、このメーカーを無視できなくなりました。','戦えるセクサロイドが好き、という悪ふざけからここまで来ましたか。技術力の無駄遣いが結果を出しましたね。','優勝おめでとうございます。開発者の性癖についての記者質問は広報へ回してください。','{robot}、戦闘では文句なしの頂点です。成人向け部門の予約が増える未来まで見えます。','この勝利でLIBIDOの撤退可能性は……元々ゼロですね。むしろ新しい企画が増えそうです。'],
  libidoAwakening: ['LIBIDO機が覚醒しました。開発班が「新しい魅力に目覚めた」と言っていますが、能力変化の話だけしましょう。','{robot}の成長傾向が変わっています。本来用途の設定まで連動していないか一応確認します。','覚醒後の姿勢制御が別物ですね。LIBIDOの場合、見た目の変化案まで同時に出てくるのが面倒です。','これは戦闘AIとして明確な進化です。開発主任の意味深な命名案は却下します。','{robot}、ここから役割が変わるかもしれません。成人型コンセプトはどうせ変わらないでしょうけど。','覚醒ログの一部がプライベート領域へ跨がっています。戦闘部分だけ抽出して再評価しましょう。','性能が跳ねましたね。LIBIDOがまた「美しさと強さは両立する」と調子に乗りそうです。','新しい成長曲線です。今までの評価を一度捨てて、真面目に組み直しましょう。'],
  libidoRookie: ['新人にLIBIDO製が来ました。まず成人型であることに驚く時期はもう過ぎましたね。適性を見ます。','{robot}、一年目です。開発班から大量の外観設定資料も届いていますが、先に成長曲線を確認しましょう。','新人なのに完成したコンパニオン機能を持っています。戦闘機能の方を三年間で育てる形ですね。','LIBIDO新人は初期値より人工筋肉とセンサー適性を見た方が面白いです。','また設計者の趣味が分かりやすい個体ですね。性能まで趣味に引っ張られていないか確認しましょう。','一年目ならまだ戦闘向けへ寄せる余地があります。メーカーは嫌がるかもしれませんが。','{robot}の本来用途プロフィールは成人向けです。育成チームでは戦闘適性だけ扱います。','新人紹介資料の半分が外見コンセプトです。残り半分に重要な技術情報が詰まっています。'],
  libidoReliabilityHigh: ['{robot}、LIBIDO製なのにと言うと失礼ですが、かなり安定しています。本来用途の連続稼働基準が効いていますね。','成人向けサービスで長時間動く前提なので、高信頼個体は本当にしぶといです。','この信頼性なら大会でも計算できます。プライベートモードの安定性評価は見なかったことにします。','{robot}は再現性が高いです。LIBIDOの趣味全開設計でも品質管理は一流ですね。','高信頼性です。多少攻めた戦闘調整をしても崩れにくいでしょう。','本来用途で故障すると大問題だから安全設計が厳しい、と。理由を聞けば納得はできます。','連続稼働ログが豊富です。どの用途のログかは細かく分類しなくていいです。','見た目の派手さに反して中身は堅実。こういう個体が一番LIBIDOの技術力を感じます。'],
  libidoReliabilityLow: ['{robot}は不安定ですね。本来用途でも戦闘でも、まず安全側へ戻した方がいいです。','LIBIDOの趣味を詰め込みすぎて制御が喧嘩しています。少し削る勇気も必要ですよ。','高感度設定が暴れている可能性があります。戦闘用とプライベート用を切り分けましょう。','この信頼性で成人向けサービスへ出すのは品質部が止めています。戦闘班でも同意見です。','上振れは強いですが、挙動が読めません。見た目だけ完成させて満足しないでください。','人工筋肉と触覚系の同期が不安定です。意味深な試験より基礎調整を優先しましょう。','{robot}は魅力より安定性を先に直す段階です。LIBIDO開発班には聞こえないように言いました。','不安定な成人型機はどちらの用途でも危険です。ここは真面目に整備しましょう。'],
  libidoRecord: ['{robot}が歴代記録です。LIBIDO機が記録欄の上位にいる光景にも慣れてきました。','歴代級の性能ですね。開発班が記念写真の衣装案をもう作っています。','成人型セクサロイドが歴代戦闘記録を更新。文字にするとやっぱり情報量が多いです。','{robot}はこのメーカーの悪ふざけが本気の技術だった証拠として残りそうです。','記録更新です。本来用途の評価まで歴代級かどうかは、こちらでは確認しません。','LIBIDOの系列研究資料としても重要な一機になります。外観資料だけ別冊なのは知っています。','この数字なら次世代の基準機ですね。設計者の趣味まで基準化しないよう注意してください。','歴代Best15入りが見えてきました。色物枠ではなく、もう普通に名機扱いです。'],
  tokiwaMatch: ['常盤製の{robot}を試合へ出します。昨日まで家具を運んでいたとしても、今日は戦闘機です。','生活支援由来の安定制御は公式戦でも強みになります。派手さより仕事をしてもらいましょう。','本業の家電部門から応援メッセージが来ています。社内で一番人気の事業になっていませんか。','{robot}、ショールーム仕様の案内音声は切ってありますよね。戦闘モードでお願いします。','常盤機は扱いやすさが武器です。相手の癖に合わせて堅実に一勝を狙いましょう。','家具配送で鍛えた狭所制御が戦場で役立つ日が来ました。開発経緯って分からないものですね。','撤退候補だった部門の機体が大会メンバー入り。経営会議がまた荒れそうです。','見た目は地味でも量産品質は本物です。{robot}らしい安定した戦いを期待します。'],
  tokiwaVictory: ['{robot}、勝利です。本業外のロボット部門がまた撤退しづらくなりました。','家具と家電の片手間から始まった機体が公式戦で一勝。常盤の経営陣、複雑でしょうね。','安定した勝ち方でした。生活機器メーカーらしい再現性の高さが出ています。','昨日は冷蔵庫を運び、今日は敵機を倒す。{robot}の業務範囲が広すぎます。','常盤機の勝利です。派手ではないけど、こういう結果を積むから売れるんですよね。','本業側から「家庭向けモデルにも戦闘機の耐久技術を」と逆輸入の話が来ています。','また結果を出しました。ロボット事業撤退案の資料、そろそろ作るだけ無駄では。','{robot}、お見事です。帰ったらショールームの家具移動を頼まれているそうですが、今日は休ませましょう。'],
  tokiwaPart: ['{robot}へ{part}を装着します。常盤なら交換手順の分かりやすさまで評価対象ですね。','パーツ交換が家電のユニット交換みたいに簡単です。このメーカーの本領ですね。','{part}の互換性は良好。サービスマン向け手順書まで付いてくるのが常盤らしいです。','改修なのに工具がほとんど要りません。家具組立のノウハウまで入っていそうです。','性能向上だけでなく、交換後の整備性が落ちていないのは助かります。','常盤の開発班、パーツを「オプション家電」みたいな名前で呼ぶのはやめてください。','{part}を付けても扱いやすさが残っています。量産機として優秀ですね。','保証対象外になる改修か先に確認する戦闘チーム、たぶんうちだけではないです。'],
  tokiwaSenior: ['{robot}も3年目。本業外で生まれた機体がここまで育つと、もう立派な主力商品ですね。','三年間、家庭モニターと戦闘訓練を行き来しました。かなり変わった経歴です。','常盤機らしく最後まで扱いやすさを残すか、戦闘向けへ尖らせ切るか決めましょう。','引退後に家庭向け実証へ戻す話が出ています。戦歴持ちの生活支援機、人気が出そうですね。','{robot}の三年間は、常盤がロボット事業から撤退できない理由そのものかもしれません。','最後の調整です。サービスマニュアル通りに直せる範囲で最大まで伸ばしましょう。','この世代も売れそうですね。経営陣の撤退案がまた一年延期される未来が見えます。','三年目まで来ても本業の家具・家電技術が土台に残っています。それがこの機体の個性ですね。'],
  growthCurveComment: ['{robot}は今の年次で伸ばしやすい時期に入っています。', '{robot}の成長曲線を見ると、今どこへ投資するかが大事になりそうです。'],
  customAptitudeComment: ['{robot}はカスタムへの反応に特徴があります。物資を使うなら適性を見て選びたいですね。', 'この機体は改修の乗り方に癖があります。数値だけでなく適性も確認しましょう。'],
  winStreak: ['連勝が続いています。今の勝ち方が偶然か、再現できる形かを見ておきましょう。', '流れはいいです。ただ、勝っている時ほど編成の穴は見落としやすいです。', '勝ちが続くほど相手も強くなります。今の15機で何が再現できているか残しておきたいですね。'],
  lossStreak: ['連敗中です。同じ対策を繰り返すより、編成か育成のどちらかを変えたいですね。', '負けが続いています。相手より弱いのか、噛み合わせが悪いのかを切り分けましょう。', 'ここは全部を直そうとしない方がいいです。負け方に共通する一か所から変えてみましょう。'],
  tournamentProgress: ['大会が進んできました。ここからは相手の癖も強くなります。', '次のラウンドほど編成差が出やすくなります。15機の並びを丁寧に見ましょう。'],
  rookieSpotlight: ['{robot}は新人の中でも目立っています。早めに育成方針を決めてもよさそうです。', '新人の{robot}、今のうちに特徴を掴んでおきたいですね。', '一年目の{robot}はまだ完成形から遠いです。初期値より伸び方を見て評価したいですね。'],
  seniorFarewell: ['{robot}は3年目。残り回数を考えると、弱点補強より完成形を優先する選択もあります。', 'この世代は仕上げの時期です。{robot}に何を残すか決めましょう。', '残りの育成回数は有限です。{robot}の弱点を消すより、勝てる形を完成させる判断もありです。'],
  teamStrength: ['今のチームは強みがはっきりしています。相手に押し付けられる形を作りたいですね。', '全体を見ると得意分野がまとまっています。大会ではその強みを崩さない編成がよさそうです。'],
  teamWeakness: ['チーム全体で薄い分野があります。全員を直すより、選抜で補う方法もあります。', '弱点が共通しています。相手にそこを狙われた時の逃げ道を用意したいです。'],
  reliabilityHigh: ['{robot}はかなり安定しています。高負荷な選択肢も検討しやすい個体です。', '{robot}なら多少攻めた調整をしても、運用の再現性を保ちやすそうです。'],
  reliabilityLow: ['{robot}は性能以前に挙動のばらつきが気になります。大会で任せるならそこも考えたいです。', '{robot}は上振れますが、安定しません。強さの評価は平均値だけで見ない方がよさそうです。', '不安定な{robot}は爆発力もあります。安定化するか、ムラ込みで勝負札にするか決めたいですね。'],
  baseMultiplier: ['{robot}は元々の設計適性に特徴があります。初期値だけでは判断しにくいタイプですね。', '基礎適性を見ると、{robot}は伸ばす場所を選んだ方が良さそうです。'],
  growthMultiplier: ['{robot}の総合成長倍率を見ると、今の年次で伸ばしやすい項目が見えてきます。', '基礎成長だけでなく、現在の総合倍率まで含めて育成先を決めたいですね。'],
  weaponStat: ['{robot}の{weapon}運用は、兵装能力そのものにも差が出ています。', '{weapon}を続けるなら、基礎能力だけでなく兵装側の完成度も見ておきましょう。'],
  partCompatibility: ['{robot}はこの改修との相性を見てから投入先を決めたいです。', 'パーツの数値だけでなく、{robot}にどれくらい馴染むかも大事です。'],
  awakeningFollowup: ['覚醒後の{robot}は、以前と同じ育成方針のままでいいか再確認したいです。', '{robot}は覚醒で評価が変わっています。得意分野をもう一度見直しましょう。'],
  rivalWarning: ['この相手は普通の強豪とは少し違います。編成思想まで見て対策した方がよさそうです。', '相手の強さだけでなく、何を捨てて何を伸ばしているチームなのか確認しましょう。'],
  selectionAdvice: ['15機の総合値だけで決めず、相手の偏りにぶつけられる機体を残したいです。', '選抜は強い順だけではなく、役割が重なりすぎていないかも見ておきましょう。'],
  recordMilestone: ['{robot}が歴代記録に届きました。数字だけでなく、どんな育成だったかも残しておきたいですね。', '記録更新です。{robot}はこの周回を代表する一機になりそうです。', '{robot}が歴代枠へ食い込んできました。同系列の次世代育成と比べる基準にもなりますね。'],
  balancedUnit: ['{robot}は大きな穴がありません。相手を選ばず出しやすいのが強みです。', '{robot}は万能型ですね。突出値は少なくても、選抜では扱いやすいです。'],
  specialistUnit: ['{robot}はかなり尖っています。刺さる相手には強い反面、出す場所は選びます。', 'この機体は役割がはっきりしています。万能化するより長所を残したいですね。'],
  yearProgress: ['育成年次が進みました。新人・中堅・3年目で同じ練習の価値も変わってきます。', '年次が変わると完成までの残り回数も変わります。世代ごとに方針を分けましょう。'],
};


export function managerRobotInsightContext(robot) {
  if (!robot) return 'robotSelected';
  const abilities = robot.specialAbilities ?? [];
  const awakenings = robot.awakenings ?? [];
  const year = Number(robot.cohortYear ?? 1);
  const reliability = Number(robot.reliability ?? 70);
  const preferred = robot.seriesPreferredWeapons ?? [];
  const avoided = robot.seriesAvoidedWeapons ?? [];
  if (robot.manufacturerId === 'libido') {
    const libidoAbilities = new Set(['sensualKinetics', 'poseControl', 'tactileCombatSense']);
    if (awakenings.length) return 'libidoAwakening';
    if (abilities.some((id) => libidoAbilities.has(id))) return 'libidoAbility';
    if (year >= 3) return 'libidoSenior';
    if (reliability <= 58) return 'libidoReliabilityLow';
    if (reliability >= 90) return 'libidoReliabilityHigh';
    if (year <= 1) return 'libidoRookie';
    if (abilities.length >= 5) return 'abilityCombo';
    return 'libidoComment';
  }
  if (awakenings.length) return 'awakeningFollowup';
  if (abilities.length >= 5) return 'abilityCombo';
  if (robot.manufacturerId === 'tokiwa') return year >= 3 ? 'tokiwaSenior' : 'tokiwaComment';
  if (robot.manufacturerId === 'heritage') return 'heritageComment';
  if (avoided.includes(robot.weaponKey)) return 'weaponMismatch';
  if (preferred.includes(robot.weaponKey)) return 'weaponSynergy';
  if (reliability <= 58) return 'reliabilityLow';
  if (reliability >= 90) return 'reliabilityHigh';
  if (year >= 3) return 'seniorFarewell';
  if (year <= 1) return 'rookieSpotlight';

  const flatStats = Object.values(robot.stats ?? {}).flatMap((group) => Object.values(group ?? {}).map(Number));
  if (flatStats.length) {
    const max = Math.max(...flatStats);
    const min = Math.min(...flatStats);
    if (max - min >= 45 || max >= 125) return 'specialistUnit';
    if (max - min <= 22) return 'balancedUnit';
  }
  return 'robotSelected';
}

export function managerLine(profile, context = 'generic', variables = {}) {
  const pool = managerLinePool(profile, context);
  const template = pool[Math.floor(Math.random() * pool.length)] ?? pool[0] ?? '……';
  return renderManagerTemplate(template, variables);
}

export function managerTemplateTokens() {
  return { ...MANAGER_TEMPLATE_TOKENS };
}

export function parseCustomLines(text) {
  return String(text ?? '')
    .split(/\r?\n/)
    .map((line) => line.trim().slice(0, MANAGER_CUSTOM_MAX_LENGTH))
    .filter(Boolean)
    .slice(0, MANAGER_CUSTOM_MAX_LINES);
}

export function setManagerCustomLines(profile, context, lines) {
  if (!MANAGER_CONTEXT_LABELS[context]) return normalizeManagerProfile(profile);
  const next = normalizeManagerProfile(profile);
  const normalizedLines = Array.isArray(lines) ? lines : parseCustomLines(lines);
  next.customLines = { ...next.customLines };
  if (normalizedLines.length) next.customLines[context] = normalizedLines.slice(0, MANAGER_CUSTOM_MAX_LINES);
  else delete next.customLines[context];
  return normalizeManagerProfile(next);
}

export function clearManagerCustomLines(profile, context = null) {
  const next = normalizeManagerProfile(profile);
  if (!context) next.customLines = {};
  else {
    next.customLines = { ...next.customLines };
    delete next.customLines[context];
  }
  return normalizeManagerProfile(next);
}

export function resizeImageFile(file, { maxSize = 512, quality = 0.86 } = {}) {
  return new Promise((resolve, reject) => {
    if (!file?.type?.startsWith('image/')) {
      reject(new Error('画像ファイルを選択してください。'));
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('画像を読み込めませんでした。'));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error('画像を展開できませんでした。'));
      image.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

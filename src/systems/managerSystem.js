import { MANAGER_CONTEXT_LABELS, MANAGER_PERSONALITIES, MANAGER_TEMPLATE_TOKENS } from '../data/managerDefinitions.js?v=4.7';

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

export function standardManagerLines(profile, context = 'generic') {
  const personality = managerPersonality(profile);
  const own = personality.lines[context];
  if (own?.length) return [...own];
  const contextual = MANAGER_CONTEXT_LINES[context];
  if (contextual?.length) return contextual.map((line) => adaptContextualLine(personality.id, line));
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
  statGrowth: ['{robot}、ここ数回で伸び方が変わっています。伸びた項目を次の練習にもつなげましょう。', '{robot}の成長が目立ってきました。今の方針を続ける価値があります。'],
  statStall: ['{robot}は少し伸びが鈍っています。違う系統を挟むのも手です。', '{robot}、同じ育て方だけでは伸びにくくなっているかもしれません。'],
  weaponSynergy: ['{robot}と{weapon}は噛み合っています。この長所は試合でも使いやすそうです。', '{weapon}の要求と{robot}の得意分野が揃っています。素直に伸ばしてよさそうです。'],
  weaponMismatch: ['{robot}は{weapon}を使えますが、今の能力構成だと少し無理をしています。', '{weapon}自体が悪いわけではありませんが、{robot}の強みを十分には使えていません。'],
  weaponChanged: ['{robot}の兵装を{weapon}へ変更しました。しばらくは新しい運用を見ていきましょう。', '兵装変更ですね。{robot}の能力の見え方も少し変わりそうです。'],
  abilityGain: ['{robot}が「{ability}」を獲得しました。今までと違う役割も狙えそうです。', '「{ability}」が加わりました。{robot}の使い方を一度見直してもよさそうです。'],
  abilityCombo: ['{robot}の特殊能力、組み合わせで効きそうなものが増えてきました。', '{robot}は能力単体より、複数を噛み合わせた時の方が面白そうです。'],
  seriesConcept: ['{robot}は系列本来の設計思想がはっきり出ています。育成でもそこを活かせそうです。', 'この系列は何でもできるより、設計上の得意分野を押し出す方が合っています。'],
  manufacturerComment: ['{manufacturer}らしい設計傾向が出ていますね。系列だけでなくメーカー側の癖も見ておきたいです。', '{robot}を見ると、{manufacturer}が何を優先しているか分かりやすいです。'],
  growthCurveComment: ['{robot}は今の年次で伸ばしやすい時期に入っています。', '{robot}の成長曲線を見ると、今どこへ投資するかが大事になりそうです。'],
  customAptitudeComment: ['{robot}はカスタムへの反応に特徴があります。物資を使うなら適性を見て選びたいですね。', 'この機体は改修の乗り方に癖があります。数値だけでなく適性も確認しましょう。'],
  winStreak: ['連勝が続いています。今の勝ち方が偶然か、再現できる形かを見ておきましょう。', '流れはいいです。ただ、勝っている時ほど編成の穴は見落としやすいです。'],
  lossStreak: ['連敗中です。同じ対策を繰り返すより、編成か育成のどちらかを変えたいですね。', '負けが続いています。相手より弱いのか、噛み合わせが悪いのかを切り分けましょう。'],
  tournamentProgress: ['大会が進んできました。ここからは相手の癖も強くなります。', '次のラウンドほど編成差が出やすくなります。15機の並びを丁寧に見ましょう。'],
  rookieSpotlight: ['{robot}は新人の中でも目立っています。早めに育成方針を決めてもよさそうです。', '新人の{robot}、今のうちに特徴を掴んでおきたいですね。'],
  seniorFarewell: ['{robot}は3年目。残り回数を考えると、弱点補強より完成形を優先する選択もあります。', 'この世代は仕上げの時期です。{robot}に何を残すか決めましょう。'],
  teamStrength: ['今のチームは強みがはっきりしています。相手に押し付けられる形を作りたいですね。', '全体を見ると得意分野がまとまっています。大会ではその強みを崩さない編成がよさそうです。'],
  teamWeakness: ['チーム全体で薄い分野があります。全員を直すより、選抜で補う方法もあります。', '弱点が共通しています。相手にそこを狙われた時の逃げ道を用意したいです。'],
  reliabilityHigh: ['{robot}はかなり安定しています。高負荷な選択肢も検討しやすい個体です。', '{robot}なら多少攻めた調整をしても、運用の再現性を保ちやすそうです。'],
  reliabilityLow: ['{robot}は性能以前に挙動のばらつきが気になります。大会で任せるならそこも考えたいです。', '{robot}は上振れますが、安定しません。強さの評価は平均値だけで見ない方がよさそうです。'],
  baseMultiplier: ['{robot}は元々の設計適性に特徴があります。初期値だけでは判断しにくいタイプですね。', '基礎適性を見ると、{robot}は伸ばす場所を選んだ方が良さそうです。'],
  growthMultiplier: ['{robot}の総合成長倍率を見ると、今の年次で伸ばしやすい項目が見えてきます。', '基礎成長だけでなく、現在の総合倍率まで含めて育成先を決めたいですね。'],
  weaponStat: ['{robot}の{weapon}運用は、兵装能力そのものにも差が出ています。', '{weapon}を続けるなら、基礎能力だけでなく兵装側の完成度も見ておきましょう。'],
  partCompatibility: ['{robot}はこの改修との相性を見てから投入先を決めたいです。', 'パーツの数値だけでなく、{robot}にどれくらい馴染むかも大事です。'],
  awakeningFollowup: ['覚醒後の{robot}は、以前と同じ育成方針のままでいいか再確認したいです。', '{robot}は覚醒で評価が変わっています。得意分野をもう一度見直しましょう。'],
  rivalWarning: ['この相手は普通の強豪とは少し違います。編成思想まで見て対策した方がよさそうです。', '相手の強さだけでなく、何を捨てて何を伸ばしているチームなのか確認しましょう。'],
  selectionAdvice: ['15機の総合値だけで決めず、相手の偏りにぶつけられる機体を残したいです。', '選抜は強い順だけではなく、役割が重なりすぎていないかも見ておきましょう。'],
  recordMilestone: ['{robot}が歴代記録に届きました。数字だけでなく、どんな育成だったかも残しておきたいですね。', '記録更新です。{robot}はこの周回を代表する一機になりそうです。'],
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
  if (awakenings.length) return 'awakeningFollowup';
  if (abilities.length >= 5) return 'abilityCombo';
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

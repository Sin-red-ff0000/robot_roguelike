import { MANAGER_CONTEXT_LABELS, MANAGER_PERSONALITIES, MANAGER_TEMPLATE_TOKENS } from '../data/managerDefinitions.js?v=2.9';

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

export function standardManagerLines(profile, context = 'generic') {
  const personality = managerPersonality(profile);
  return [...(personality.lines[context] ?? personality.lines.generic ?? ['……'])];
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

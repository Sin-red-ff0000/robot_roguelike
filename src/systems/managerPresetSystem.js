import { normalizeManagerProfile } from './managerSystem.js?v=3.5';

export const MANAGER_PRESET_LIMIT = 12;
export const MANAGER_EXPORT_TYPE = 'robot-roguelike-manager-profile';
export const MANAGER_EXPORT_VERSION = 1;

function safeLabel(value, fallback = 'マイ人格') {
  return String(value ?? '').trim().slice(0, 32) || fallback;
}

function makePresetId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `manager-preset-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function normalizeManagerPreset(preset = {}) {
  const normalizedProfile = normalizeManagerProfile({
    personalityId: preset.personalityId,
    lineMode: preset.lineMode,
    customLines: preset.customLines,
  });
  return {
    id: String(preset.id ?? makePresetId()).slice(0, 80),
    label: safeLabel(preset.label),
    personalityId: normalizedProfile.personalityId,
    lineMode: normalizedProfile.lineMode,
    customLines: normalizedProfile.customLines,
    createdAt: String(preset.createdAt ?? new Date().toISOString()),
    updatedAt: String(preset.updatedAt ?? new Date().toISOString()),
  };
}

export function createManagerPreset(profile, label, { id = null, createdAt = null } = {}) {
  const normalized = normalizeManagerProfile(profile);
  return normalizeManagerPreset({
    id: id ?? makePresetId(),
    label,
    personalityId: normalized.personalityId,
    lineMode: normalized.lineMode,
    customLines: normalized.customLines,
    createdAt: createdAt ?? new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

export function applyManagerPreset(profile, preset) {
  const base = normalizeManagerProfile(profile);
  const normalizedPreset = normalizeManagerPreset(preset);
  return normalizeManagerProfile({
    ...base,
    personalityId: normalizedPreset.personalityId,
    lineMode: normalizedPreset.lineMode,
    customLines: normalizedPreset.customLines,
  });
}

export function normalizeManagerPresets(presets = []) {
  if (!Array.isArray(presets)) return [];
  const seen = new Set();
  const result = [];
  for (const raw of presets) {
    const preset = normalizeManagerPreset(raw);
    if (seen.has(preset.id)) continue;
    seen.add(preset.id);
    result.push(preset);
    if (result.length >= MANAGER_PRESET_LIMIT) break;
  }
  return result;
}

export function loadManagerPresets(storageKey) {
  try {
    const raw = localStorage.getItem(storageKey);
    return normalizeManagerPresets(raw ? JSON.parse(raw) : []);
  } catch {
    return [];
  }
}

export function saveManagerPresets(storageKey, presets) {
  const normalized = normalizeManagerPresets(presets);
  localStorage.setItem(storageKey, JSON.stringify(normalized));
  return normalized;
}

export function upsertManagerPreset(presets, preset) {
  const normalized = normalizeManagerPreset(preset);
  const next = normalizeManagerPresets(presets).filter((item) => item.id !== normalized.id);
  next.push(normalized);
  return normalizeManagerPresets(next);
}

export function removeManagerPreset(presets, id) {
  return normalizeManagerPresets(presets).filter((preset) => preset.id !== id);
}

export function serializeManagerProfile(profile) {
  return JSON.stringify({
    type: MANAGER_EXPORT_TYPE,
    version: MANAGER_EXPORT_VERSION,
    exportedAt: new Date().toISOString(),
    profile: normalizeManagerProfile(profile),
  }, null, 2);
}

export function parseManagerProfileText(text) {
  let parsed;
  try {
    parsed = JSON.parse(String(text ?? ''));
  } catch {
    throw new Error('JSONとして読み取れませんでした。');
  }
  if (parsed?.type && parsed.type !== MANAGER_EXPORT_TYPE) {
    throw new Error('マネージャー設定ファイルではありません。');
  }
  const profile = parsed?.profile ?? parsed;
  if (!profile || typeof profile !== 'object' || Array.isArray(profile)) {
    throw new Error('マネージャー設定の形式が不正です。');
  }
  return normalizeManagerProfile(profile);
}

export function downloadManagerProfile(profile) {
  const text = serializeManagerProfile(profile);
  const blob = new Blob([text], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  const safeName = String(profile?.name ?? 'manager').replace(/[\\/:*?"<>|]+/g, '_').slice(0, 40) || 'manager';
  anchor.href = url;
  anchor.download = `manager_${safeName}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

export async function readManagerProfileFile(file) {
  if (!file) throw new Error('ファイルが選択されていません。');
  const text = await file.text();
  return parseManagerProfileText(text);
}

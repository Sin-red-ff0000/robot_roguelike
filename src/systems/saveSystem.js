import { GAME_CONFIG } from '../config.js';

export function saveFileName(state) {
  const year = Number(state?.year ?? 1);
  return `robot-roguelike-save-v${GAME_CONFIG.version}-year${year}.json`;
}

export function serializeSave(state) {
  return JSON.stringify({
    format: 'robot-roguelike-save',
    exportedAt: new Date().toISOString(),
    version: GAME_CONFIG.version,
    state,
  }, null, 2);
}

export function parseSaveText(text) {
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error('JSONとして読み込めませんでした。');
  }

  const candidate = parsed?.format === 'robot-roguelike-save' ? parsed.state : parsed;
  if (!candidate || typeof candidate !== 'object') throw new Error('セーブデータの形式が正しくありません。');
  if (!Array.isArray(candidate.roster)) throw new Error('所属機体データが見つかりません。');
  if (!Number.isFinite(Number(candidate.year)) || Number(candidate.year) < 1) throw new Error('年度データが正しくありません。');
  return candidate;
}

export function downloadSave(state) {
  const blob = new Blob([serializeSave(state)], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = saveFileName(state);
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

export async function readSaveFile(file) {
  if (!file) throw new Error('ファイルが選択されていません。');
  const text = await file.text();
  return parseSaveText(text);
}

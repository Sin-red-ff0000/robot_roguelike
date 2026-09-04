import { GAME_CONFIG } from '../config.js?v=4.8';

export const UPSET_PRESETS = {
  ability: { 1: 0.68, 3: 0.82, 5: 0.92, 7: 0.97, 9: 0.995 },
  standard: { ...GAME_CONFIG.battleFavoredWinChanceByMargin },
  volatile: { 1: 0.55, 3: 0.64, 5: 0.74, 7: 0.84, 9: 0.92 },
};

export function defaultSettings() {
  return {
    growthMode: 'facility',
    seriesLabelMode: 'kana',
    manufacturerLabelMode: 'localized',
    upsetMode: 'standard',
    customUpset: { ...GAME_CONFIG.battleFavoredWinChanceByMargin },
    eventFrequency: 'standard',
    trainingTurns: GAME_CONFIG.trainingTurnsPerYear,
  };
}

export function normalizeSettings(settings = {}) {
  const base = defaultSettings();
  const merged = { ...base, ...settings };
  merged.customUpset = { ...base.customUpset, ...(settings.customUpset ?? {}) };
  const turns = Number(merged.trainingTurns);
  if (turns === 30) merged.trainingTurns = 36;
  else if (![12, 24, 36, 48, 60].includes(turns)) merged.trainingTurns = GAME_CONFIG.trainingTurnsPerYear;
  return merged;
}

export function battleWinTable(settings) {
  const normalized = normalizeSettings(settings);
  if (normalized.upsetMode === 'custom') return normalized.customUpset;
  return UPSET_PRESETS[normalized.upsetMode] ?? UPSET_PRESETS.standard;
}

export function eventChanceMultiplier(settings) {
  const mode = normalizeSettings(settings).eventFrequency;
  if (mode === 'low') return 0.65;
  if (mode === 'high') return 1.4;
  return 1;
}

export function trainingTurnsForState(state) {
  return normalizeSettings(state?.settings).trainingTurns;
}

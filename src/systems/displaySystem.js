import { MANUFACTURERS } from '../data/manufacturers.js?v=3.8';
import { localizeSeriesName } from '../data/seriesNameLocalization.js?v=3.8';

const MANUFACTURER_MAP = new Map(MANUFACTURERS.map((item) => [item.id, item]));

export function manufacturerDisplayName(robot, settings = {}) {
  const def = MANUFACTURER_MAP.get(robot.manufacturerId);
  if (!def) return robot.manufacturerName ?? '---';
  if (settings.manufacturerLabelMode === 'original') return def.originalName ?? def.name;
  return def.name;
}

export function seriesDisplayName(robot, settings = {}) {
  if (settings.seriesLabelMode === 'latin') {
    return robot.seriesNameLatin ?? robot.seriesName ?? 'SERIES';
  }
  return localizeSeriesName(robot.seriesNameLatin ?? robot.seriesName, robot.seriesNameKana ?? robot.seriesName) ?? 'シリーズ';
}

export function robotFormalName(robot, settings = {}) {
  return `${manufacturerDisplayName(robot, settings)} ${seriesDisplayName(robot, settings)}`;
}

export function robotDisplayName(robot, settings = {}) {
  const nickname = String(robot?.nickname ?? '').trim();
  return nickname || robotFormalName(robot, settings);
}

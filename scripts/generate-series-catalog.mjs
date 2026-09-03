import { writeFile } from 'node:fs/promises';
import { MANUFACTURERS } from '../src/data/manufacturers.js';
import { SERIES_DEFINITIONS, getSeriesForManufacturer, resolveSeriesProfile } from '../src/data/seriesDefinitions.js';
import { WEAPON_CATEGORIES } from '../src/data/weaponDefinitions.js';

const weaponNames = (keys = []) => keys.length ? keys.map((key) => WEAPON_CATEGORIES[key]?.label ?? key).join(' / ') : '指定なし';
const escapeCell = (value) => String(value ?? '').replaceAll('|', '｜').replaceAll('\n', ' ');
const lines = [
  '# SERIES CATALOG v2.9',
  '',
  `20メーカー × 60シリーズ = 合計${SERIES_DEFINITIONS.length}シリーズ。`,
  '',
  '- 1～20番：初代系列',
  '- 21～40番：第2世代系列',
  '- 41～60番：第3世代系列（v2.9追加）',
  '- 生産区分は新人加入時の出現しやすさへ反映',
  '- 個体差特性は初期能力・成長率・兵装適性・信頼性のばらつきへ反映',
  '- 各製造年度には通常改訂に加えて、稀に「名機年 / 好評年 / 不作年 / 問題年」が発生',
  '',
];

for (const maker of MANUFACTURERS) {
  const seriesList = getSeriesForManufacturer(maker.id).sort((a, b) => a.seriesNumber - b.seriesNumber);
  const tierCount = {};
  for (const series of seriesList) {
    const p = resolveSeriesProfile(series);
    tierCount[p.productionTierLabel] = (tierCount[p.productionTierLabel] ?? 0) + 1;
  }
  lines.push(`## ${maker.name}`);
  lines.push('');
  lines.push(`**企業思想:** ${maker.philosophy}`);
  lines.push('');
  lines.push(`**生産構成:** ${Object.entries(tierCount).map(([label, count]) => `${label} ${count}`).join(' / ')}`);
  lines.push('');
  lines.push('| # | シリーズ | 立場 | 生産区分 | 系譜 | 個体差 | 推奨兵装 | 非推奨 | コンセプト |');
  lines.push('|---:|---|---|---|---|---|---|---|---|');
  for (const series of seriesList) {
    const p = resolveSeriesProfile(series);
    const predecessor = p.predecessorNameKana ? `前身:${p.predecessorNameKana}` : '始祖';
    lines.push(`| ${series.seriesNumber} | ${escapeCell(series.nameKana)} / ${escapeCell(series.nameLatin)} | ${escapeCell(p.marketPosition)} | ${escapeCell(p.productionTierLabel)} | ${escapeCell(p.lineageLabel)}・${escapeCell(predecessor)} | ${escapeCell(p.individualityLabel)} | ${escapeCell(weaponNames(p.preferredWeapons))} | ${escapeCell(weaponNames(p.avoidedWeapons))} | ${escapeCell(p.concept)} |`);
  }
  lines.push('');
}

await writeFile(new URL('../SERIES_CATALOG.md', import.meta.url), `${lines.join('\n')}\n`, 'utf8');
console.log(`SERIES_CATALOG.md generated: ${SERIES_DEFINITIONS.length} series`);

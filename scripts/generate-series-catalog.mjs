import { writeFile } from 'node:fs/promises';
import { MANUFACTURERS } from '../src/data/manufacturers.js';
import { SERIES_DEFINITIONS, getSeriesForManufacturer, resolveSeriesProfile } from '../src/data/seriesDefinitions.js';
import { WEAPON_CATEGORIES } from '../src/data/weaponDefinitions.js';

const weaponNames = (keys = []) => keys.length ? keys.map((key) => WEAPON_CATEGORIES[key]?.label ?? key).join(' / ') : '指定なし';
const escapeCell = (value) => String(value ?? '').replaceAll('|', '｜').replaceAll('\n', ' ');
const lines = [
  '# SERIES CATALOG v3.6',
  '',
  `20メーカー × 100シリーズ = 合計${SERIES_DEFINITIONS.length}シリーズ。`,
  '',
  '- 1～20番：初代系列（v3.1で全面再設計 / 詳細解説・育成個性を追加）',
  '- 21～40番：第2世代系列（v3.2で全面再点検 / 開発背景・名称モチーフ・育成思想を追加）',
  '- 41～60番：第3世代系列（v3.3で全面再点検 / 系譜・名称モチーフ・育成思想を追加）',
  '- 61～80番：第4世代系列（v3.4で全面再点検 / 名称由来・系譜・成長・改修思想を明文化）',
  '- 81～100番：第5世代系列（v3.5新規 / 極端な育成曲線・改造思想・企業思想の逆説解釈を強化）',
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
  lines.push('| # | シリーズ | 立場 | 生産区分 | 系譜 | 個体差 | 固有特性 | 成長曲線 | カスタム適性 | 能力傾向 | 推奨兵装 | 非推奨 | 要約 |');
  lines.push('|---:|---|---|---|---|---|---|---|---|---|---|---|---|');
  for (const series of seriesList) {
    const p = resolveSeriesProfile(series);
    const predecessor = p.predecessorNameKana ? `前身:${p.predecessorNameKana}` : '始祖';
    lines.push(`| ${series.seriesNumber} | ${escapeCell(series.nameKana)} / ${escapeCell(series.nameLatin)} | ${escapeCell(p.marketPosition)} | ${escapeCell(p.productionTierLabel)} | ${escapeCell(p.lineageLabel)}・${escapeCell(predecessor)} | ${escapeCell(p.individualityLabel)} | ${escapeCell(p.intrinsicTrait?.label)} | ${escapeCell(p.growthCurve?.label)} | ${escapeCell(p.customAptitude?.label)} | ${escapeCell((p.abilityTendencyTags ?? []).join(' / '))} | ${escapeCell(weaponNames(p.preferredWeapons))} | ${escapeCell(weaponNames(p.avoidedWeapons))} | ${escapeCell(p.summary)} |`);
  }
  lines.push('');
  lines.push('### 初代20系列 詳細解説（v3.1再設計）');
  lines.push('');
  for (const series of seriesList.filter((item) => item.seriesNumber <= 20)) {
    const p = resolveSeriesProfile(series);
    lines.push(`#### #${series.seriesNumber} ${series.nameKana} / ${series.nameLatin}`);
    lines.push('');
    lines.push(`**立ち位置:** ${p.marketPosition} / ${p.label}`);
    lines.push('');
    if (p.namingConcept) lines.push(`**名称と設計モチーフ:** ${p.namingConcept}`);
    lines.push('');
    if (p.developmentBackground) lines.push(`**開発背景:** ${p.developmentBackground}`);
    lines.push('');
    if (p.engineeringNotes) lines.push(`**設計上の癖:** ${p.engineeringNotes}`);
    lines.push('');
    if (p.trainingNotes) lines.push(`**育成・改修:** ${p.trainingNotes}`);
    lines.push('');
    if (p.weaponDoctrine) lines.push(`**兵装ドクトリン:** ${p.weaponDoctrine}`);
    lines.push('');
  }
  lines.push('### 第2世代20系列 詳細解説（v3.2再設計）');
  lines.push('');
  for (const series of seriesList.filter((item) => item.seriesNumber >= 21 && item.seriesNumber <= 40)) {
    const p = resolveSeriesProfile(series);
    lines.push(`#### #${series.seriesNumber} ${series.nameKana} / ${series.nameLatin}`);
    lines.push('');
    lines.push(`**立ち位置:** ${p.marketPosition} / ${p.label}`);
    lines.push('');
    if (p.namingConcept) lines.push(`**名称と設計モチーフ:** ${p.namingConcept}`);
    lines.push('');
    if (p.developmentBackground) lines.push(`**開発背景:** ${p.developmentBackground}`);
    lines.push('');
    if (p.engineeringNotes) lines.push(`**設計上の癖:** ${p.engineeringNotes}`);
    lines.push('');
    if (p.trainingNotes) lines.push(`**育成・改修:** ${p.trainingNotes}`);
    lines.push('');
    if (p.weaponDoctrine) lines.push(`**兵装ドクトリン:** ${p.weaponDoctrine}`);
    lines.push('');
  }
  lines.push('### 第3世代20系列 詳細解説（v3.3再設計）');
  lines.push('');
  for (const series of seriesList.filter((item) => item.seriesNumber >= 41 && item.seriesNumber <= 60)) {
    const p = resolveSeriesProfile(series);
    lines.push(`#### #${series.seriesNumber} ${series.nameKana} / ${series.nameLatin}`);
    lines.push('');
    lines.push(`**立ち位置:** ${p.marketPosition} / ${p.label}`);
    lines.push('');
    if (p.namingConcept) lines.push(`**名称と設計モチーフ:** ${p.namingConcept}`);
    lines.push('');
    if (p.developmentBackground) lines.push(`**開発背景:** ${p.developmentBackground}`);
    lines.push('');
    if (p.engineeringNotes) lines.push(`**設計上の癖:** ${p.engineeringNotes}`);
    lines.push('');
    if (p.trainingNotes) lines.push(`**育成・改修:** ${p.trainingNotes}`);
    lines.push('');
    if (p.weaponDoctrine) lines.push(`**兵装ドクトリン:** ${p.weaponDoctrine}`);
    lines.push('');
  }
  lines.push('### 第4世代20系列 詳細解説（v3.4再設計）');
  lines.push('');
  for (const series of seriesList.filter((item) => item.seriesNumber >= 61 && item.seriesNumber <= 80)) {
    const p = resolveSeriesProfile(series);
    lines.push(`#### #${series.seriesNumber} ${series.nameKana} / ${series.nameLatin}`);
    lines.push('');
    lines.push(`**立ち位置:** ${p.marketPosition} / ${p.label}`);
    lines.push('');
    if (p.namingConcept) lines.push(`**名称と設計モチーフ:** ${p.namingConcept}`);
    lines.push('');
    if (p.developmentBackground) lines.push(`**開発背景:** ${p.developmentBackground}`);
    lines.push('');
    if (p.engineeringNotes) lines.push(`**設計上の癖:** ${p.engineeringNotes}`);
    lines.push('');
    if (p.trainingNotes) lines.push(`**育成・改修:** ${p.trainingNotes}`);
    lines.push('');
    if (p.weaponDoctrine) lines.push(`**兵装ドクトリン:** ${p.weaponDoctrine}`);
    lines.push('');
  }
  lines.push('### 第5世代20系列 詳細解説（v3.5新設計）');
  lines.push('');
  for (const series of seriesList.filter((item) => item.seriesNumber >= 81 && item.seriesNumber <= 100)) {
    const p = resolveSeriesProfile(series);
    lines.push(`#### #${series.seriesNumber} ${series.nameKana} / ${series.nameLatin}`);
    lines.push('');
    lines.push(`**立ち位置:** ${p.marketPosition} / ${p.label}`);
    lines.push('');
    if (p.namingConcept) lines.push(`**名称と設計モチーフ:** ${p.namingConcept}`);
    lines.push('');
    if (p.developmentBackground) lines.push(`**開発背景:** ${p.developmentBackground}`);
    lines.push('');
    if (p.engineeringNotes) lines.push(`**設計上の癖:** ${p.engineeringNotes}`);
    lines.push('');
    if (p.trainingNotes) lines.push(`**育成・改修:** ${p.trainingNotes}`);
    lines.push('');
    if (p.weaponDoctrine) lines.push(`**兵装ドクトリン:** ${p.weaponDoctrine}`);
    lines.push('');
  }
}

await writeFile(new URL('../SERIES_CATALOG.md', import.meta.url), `${lines.join('\n')}\n`, 'utf8');
console.log(`SERIES_CATALOG.md generated: ${SERIES_DEFINITIONS.length} series`);

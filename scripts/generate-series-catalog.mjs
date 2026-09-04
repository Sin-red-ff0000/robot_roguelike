import { writeFile } from 'node:fs/promises';
import { MANUFACTURERS } from '../src/data/manufacturers.js';
import { SERIES_DEFINITIONS, getSeriesForManufacturer, resolveSeriesProfile } from '../src/data/seriesDefinitions.js';
import { WEAPON_CATEGORIES } from '../src/data/weaponDefinitions.js';

const SERIES_PER_GENERATION = 20;
const generationCount = 11;
const generationOf = (series) => Number(series.seriesNumber ?? 1) >= 201 ? 11 : Math.ceil(Number(series.seriesNumber ?? 1) / SERIES_PER_GENERATION);
const maxSeriesNumber = Math.max(...SERIES_DEFINITIONS.map((s)=>Number(s.seriesNumber??0)));
const weaponNames = (keys = []) => keys.length ? keys.map((key) => WEAPON_CATEGORIES[key]?.label ?? key).join(' / ') : '指定なし';
const escapeCell = (value) => String(value ?? '').replaceAll('|', '｜').replaceAll('\n', ' ');
const generationVersion = { 1:'v3.1再設計', 2:'v3.2再設計', 3:'v3.3再設計', 4:'v3.4再設計', 5:'v3.5新設計', 6:'v3.7新設計', 7:'v3.8新設計', 8:'v3.9クリーンシート設計', 9:'v4.0クリーンシート設計', 10:'v4.7品質改修版', 11:'v4.8企業間共同開発' };

const lines = [
  '# SERIES CATALOG v4.8',
  '',
  `${MANUFACTURERS.length}メーカー × ${SERIES_DEFINITIONS.length / MANUFACTURERS.length}シリーズ = 合計${SERIES_DEFINITIONS.length}シリーズ。`,
  '',
  ...Array.from({ length: generationCount }, (_, i) => {
    const gen = i + 1;
    const start = i * SERIES_PER_GENERATION + 1;
    const end = gen === 11 ? maxSeriesNumber : start + SERIES_PER_GENERATION - 1;
    return `- ${start}～${end}番：第${gen}世代系列（${generationVersion[gen] ?? '現行設計'}）`;
  }),
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
  lines.push(`## ${maker.name}`, '', `**企業思想:** ${maker.philosophy}`, '', `**生産構成:** ${Object.entries(tierCount).map(([label, count]) => `${label} ${count}`).join(' / ')}`, '');
  lines.push('| # | シリーズ | 立場 | 生産区分 | 系譜 | 個体差 | 固有特性 | 成長曲線 | カスタム適性 | 能力傾向 | 推奨兵装 | 非推奨 | 要約 |');
  lines.push('|---:|---|---|---|---|---|---|---|---|---|---|---|---|');
  for (const series of seriesList) {
    const p = resolveSeriesProfile(series);
    const predecessor = p.predecessorNameKana ? `前身:${p.predecessorNameKana}` : '始祖';
    lines.push(`| ${series.seriesNumber} | ${escapeCell(series.nameKana)} / ${escapeCell(series.nameLatin)} | ${escapeCell(p.marketPosition)} | ${escapeCell(p.productionTierLabel)} | ${escapeCell(p.lineageLabel)}・${escapeCell(predecessor)} | ${escapeCell(p.individualityLabel)} | ${escapeCell(p.intrinsicTrait?.label)} | ${escapeCell(p.growthCurve?.label)} | ${escapeCell(p.customAptitude?.label)} | ${escapeCell((p.abilityTendencyTags ?? []).join(' / '))} | ${escapeCell(weaponNames(p.preferredWeapons))} | ${escapeCell(weaponNames(p.avoedWeapons ?? p.avoidedWeapons))} | ${escapeCell(p.summary)} |`);
  }
  lines.push('');

  for (let gen = 1; gen <= generationCount; gen += 1) {
    const min = (gen - 1) * SERIES_PER_GENERATION + 1;
    const max = gen === 11 ? maxSeriesNumber : min + SERIES_PER_GENERATION - 1;
    const genItems = seriesList.filter((item) => generationOf(item) === gen);
    lines.push(`### 第${gen}世代${genItems.length}系列 詳細解説（${generationVersion[gen] ?? '現行設計'}）`, '');
    for (const series of genItems) {
      const p = resolveSeriesProfile(series);
      lines.push(`#### #${series.seriesNumber} ${series.nameKana} / ${series.nameLatin}`, '');
      lines.push(`**立ち位置:** ${p.marketPosition} / ${p.label}`, '');
      if (p.namingConcept) lines.push(`**名称と設計モチーフ:** ${p.namingConcept}`, '');
      if (p.developmentBackground) lines.push(`**開発背景:** ${p.developmentBackground}`, '');
      if (p.engineeringNotes) lines.push(`**設計上の癖:** ${p.engineeringNotes}`, '');
      if (p.trainingNotes) lines.push(`**育成・改修:** ${p.trainingNotes}`, '');
      if (p.weaponDoctrine) lines.push(`**兵装ドクトリン:** ${p.weaponDoctrine}`, '');
    }
  }
}

await writeFile(new URL('../SERIES_CATALOG.md', import.meta.url), `${lines.join('\n')}\n`, 'utf8');
console.log(`SERIES_CATALOG.md generated: ${SERIES_DEFINITIONS.length} series / ${generationCount} generations`);

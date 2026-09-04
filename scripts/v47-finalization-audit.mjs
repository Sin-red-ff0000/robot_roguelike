import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SERIES_DEFINITIONS } from '../src/data/seriesDefinitions.js';
import { MANUFACTURERS } from '../src/data/manufacturers.js';
import { EVENT_EXPANSION_TEMPLATES, EVENT_EXPANSION_FAMILY_COUNT } from '../src/data/eventExpansionDefinitions.js';
import { MANAGER_CONTEXT_LABELS, MANAGER_PERSONALITIES } from '../src/data/managerDefinitions.js';
import { managerLine, managerRobotInsightContext, normalizeManagerProfile } from '../src/systems/managerSystem.js';
import { createInitialState } from '../src/systems/gameState.js';
import { resolvePostTrainingEvent } from '../src/systems/eventSystem.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const g10 = SERIES_DEFINITIONS.filter((s) => s.seriesNumber >= 181 && s.seriesNumber <= 200);
const expectedG10 = MANUFACTURERS.length * 20;
const expectedPerMaker = 200 + MANUFACTURERS.length;
const expectedTotal = MANUFACTURERS.length * expectedPerMaker;
const expectedG11 = MANUFACTURERS.length * MANUFACTURERS.length;
if (g10.length !== expectedG10) throw new Error(`第10世代系列数が${expectedG10}ではありません: ${g10.length}`);
if (new Set(g10.map((s) => s.nameKana)).size !== expectedG10) throw new Error('第10世代の日本語名に重複があります');
if (new Set(g10.map((s) => s.nameLatin)).size !== expectedG10) throw new Error('第10世代のLatin名に重複があります');
if (g10.some((s) => /[^\x00-\x7F]/.test(s.nameLatin))) throw new Error('第10世代Latin名に非ASCII文字があります');
if (g10.some((s) => new RegExp(`^${s.manufacturerId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-?\\d+$`, 'i').test(s.nameLatin))) throw new Error('第10世代Latin名にメーカーID仮置きが残っています');
for (const field of ['summary','concept','namingConcept','developmentBackground','engineeringNotes','trainingNotes']) {
  const short = g10.filter((s) => String(s[field] ?? '').length < (field === 'summary' ? 35 : 70));
  if (short.length) throw new Error(`第10世代 ${field} が短すぎます: ${short.slice(0,3).map((s)=>s.id).join(', ')}`);
}

if (EVENT_EXPANSION_TEMPLATES.length !== 330 || EVENT_EXPANSION_FAMILY_COUNT !== 33) throw new Error('拡張イベント定義数が不正です');
if (new Set(EVENT_EXPANSION_TEMPLATES.map((e) => e.title)).size !== 330) throw new Error('拡張イベントタイトルが330件すべて固有ではありません');

const managerIds = Object.keys(MANAGER_PERSONALITIES);
const contexts = Object.keys(MANAGER_CONTEXT_LABELS);
if (managerIds.length !== 15) throw new Error(`マネージャー性格数 ${managerIds.length}`);
if (contexts.length < 45) throw new Error(`マネージャー状況数 ${contexts.length}`);
const internalLeak = /\b(statGrowth|weaponSynergy|weaponMismatch|growthMultiplier|recordMilestone|rivalWarning|selectionAdvice)\b/;
for (const id of managerIds) {
  const profile = normalizeManagerProfile({ personalityId: id });
  for (const context of contexts) {
    const line = managerLine(profile, context, { robot:'試験機', weapon:'ライフル', manufacturer:'霧島重工', ability:'集中照準', year:2, turn:12 });
    if (!line || internalLeak.test(line)) throw new Error(`マネージャー文言異常 ${id}/${context}: ${line}`);
  }
}
const insightCases = [
  [{ cohortYear:3, reliability:70, specialAbilities:[], awakenings:[], seriesPreferredWeapons:[], seriesAvoidedWeapons:[], stats:{} }, 'seniorFarewell'],
  [{ cohortYear:2, reliability:45, specialAbilities:[], awakenings:[], seriesPreferredWeapons:[], seriesAvoidedWeapons:[], stats:{} }, 'reliabilityLow'],
  [{ cohortYear:2, reliability:70, specialAbilities:['a','b','c','d','e'], awakenings:[], seriesPreferredWeapons:[], seriesAvoidedWeapons:[], stats:{} }, 'abilityCombo'],
  [{ cohortYear:2, reliability:70, specialAbilities:[], awakenings:[{}], seriesPreferredWeapons:[], seriesAvoidedWeapons:[], stats:{} }, 'awakeningFollowup'],
];
for (const [robot, expected] of insightCases) {
  const actual = managerRobotInsightContext(robot);
  if (actual !== expected) throw new Error(`マネージャー状況判定 ${expected} != ${actual}`);
}

const state = createInitialState();
state.settings.eventFrequency = 'high';
const expanded = [];
for (let i = 0; i < 7000; i += 1) {
  const event = resolvePostTrainingEvent(state);
  if (event?.type === 'operational-study') expanded.push(event);
}
if (expanded.length < 80) throw new Error(`拡張イベント到達数不足 ${expanded.length}`);
let sameFamilyAdjacent = 0;
let exactRecentRepeat = 0;
for (let i=1;i<expanded.length;i+=1) {
  if (expanded[i].expansionFamily === expanded[i-1].expansionFamily) sameFamilyAdjacent += 1;
  const recent = expanded.slice(Math.max(0,i-5), i).some((e)=>e.expansionEventId===expanded[i].expansionEventId);
  if (recent) exactRecentRepeat += 1;
}
const familyRepeatRate = sameFamilyAdjacent / Math.max(1, expanded.length - 1);
const exactRecentRate = exactRecentRepeat / Math.max(1, expanded.length - 1);
if (familyRepeatRate > 0.22) throw new Error(`拡張イベント系統の連続率が高すぎます ${familyRepeatRate.toFixed(3)}`);
if (exactRecentRate > 0.08) throw new Error(`同一イベントの短期再発率が高すぎます ${exactRecentRate.toFixed(3)}`);


const catalogText = fs.readFileSync(path.join(root, 'SERIES_CATALOG.md'), 'utf8');
if (!catalogText.startsWith('# SERIES CATALOG v4.8')) throw new Error('系列カタログの版表記がv4.8ではありません');
if (!catalogText.includes(`${MANUFACTURERS.length}メーカー × ${expectedPerMaker}シリーズ = 合計${expectedTotal}シリーズ。`)) throw new Error('系列カタログの収録数表記が現行系列数と一致しません');
if ((catalogText.match(/### 第10世代20系列 詳細解説/g) ?? []).length !== MANUFACTURERS.length) throw new Error(`系列カタログに第10世代詳細が${MANUFACTURERS.length}メーカー分ありません`);
if (catalogText.includes('系譜上の系譜上の')) throw new Error('系列カタログに重複文言が残っています');
const readmeText = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
if (!readmeText.includes(`第10世代（各メーカー181～200番）${expectedG10}系列`)) throw new Error('READMEの第10世代範囲表記が現行仕様と一致しません');
if (!readmeText.includes(`第11世代（各メーカー201～${expectedPerMaker}番）${expectedG11}系列`)) throw new Error('READMEの第11世代範囲表記が現行仕様と一致しません');
if (!readmeText.includes(`${MANUFACTURERS.length}メーカー × ${expectedPerMaker}系列 = 合計${expectedTotal}系列`)) throw new Error('READMEの系列総数表記が現行仕様と一致しません');

const staleTargets = ['index.html','sw.js','README.md','ROADMAP.md','BALANCE.md','SERIES_CATALOG.md','src/systems/managerSystem.js','src/systems/eventSystem.js','src/data/seriesTenthWaveDefinitions.js'];
const stale = [];
for (const rel of staleTargets) {
  const text = fs.readFileSync(path.join(root, rel), 'utf8');
  if (/v4\.6|\?v=4\.6|V43_CONTEXT_LINES/.test(text)) stale.push(rel);
}
if (stale.length) throw new Error(`旧版表記が残っています: ${stale.join(', ')}`);

console.log(JSON.stringify({
  ok:true,
  generation10:{series:g10.length,uniqueKana:expectedG10,uniqueLatin:expectedG10},
  manager:{personalities:managerIds.length,contexts:contexts.length},
  events:{templates:EVENT_EXPANSION_TEMPLATES.length,observed:expanded.length,familyRepeatRate:Number(familyRepeatRate.toFixed(3)),exactRecentRate:Number(exactRecentRate.toFixed(3))},
  staleVersionTargets:stale.length,
}, null, 2));

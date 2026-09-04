import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const main = fs.readFileSync(path.join(root, 'src/main.js'), 'utf8');
const css = fs.readFileSync(path.join(root, 'src/styles.css'), 'utf8');
const gameState = fs.readFileSync(path.join(root, 'src/systems/gameState.js'), 'utf8');

const requiredGuideLabels = [
  '全体練習を1回選ぶ',
  '機体詳細で能力を見る',
  'カスタムパーツを1個使う',
  '15機編成で公式戦を経験する',
  '設備と歴代記録を確認する',
];
for (const label of requiredGuideLabels) {
  if (!main.includes(label)) throw new Error(`first-play guide missing: ${label}`);
}

const facilityDiscovery = ['練習引き直し', '練習保留', '試験兵装指定', '対戦枠分析', '選択式調達', '歴代ベスト15'];
for (const label of facilityDiscovery) {
  if (!main.includes(label)) throw new Error(`facility discovery hint missing: ${label}`);
}

if (!main.includes('戦闘研究棟が発展すると戦闘思想・主力兵装・耐性との噛み合わせ')) {
  throw new Error('tutorial still does not explain progressive rival analysis');
}
if (main.includes('内部ステータスの解説はありません')) {
  throw new Error('outdated tutorial wording remains');
}
if (main.includes('function renderSeasonOverview()')) {
  throw new Error('dead empty renderSeasonOverview remains');
}
if (!main.includes("state.onboarding.unitViewed = true")) {
  throw new Error('unit-detail discovery milestone is not persisted');
}
if (!gameState.includes("onboarding: { completed: false, step: 0 }")) {
  throw new Error('new-game onboarding state missing');
}
if (!css.includes('.dashboard-guide-item') || !css.includes('.dashboard-feature-tip')) {
  throw new Error('guide UI styles missing');
}
if (!css.includes('@media (max-width: 760px)')) {
  throw new Error('guide mobile layout coverage missing');
}

console.log(JSON.stringify({
  ok: true,
  firstPlayMilestones: requiredGuideLabels.length,
  facilityDiscoveryHints: facilityDiscovery.length,
  outdatedTutorialText: 0,
  emptySeasonOverview: 0,
}, null, 2));

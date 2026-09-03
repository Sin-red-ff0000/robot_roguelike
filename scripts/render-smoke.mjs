globalThis.window = {
  navigator: { standalone: false, userAgent: 'Node', platform: 'Linux', maxTouchPoints: 0 },
  location: { hostname: 'localhost' },
  isSecureContext: true,
  __robotLabPwaPrompt: null,
  matchMedia() { return { matches: false }; },
  addEventListener() {},
};

const app = {
  html: '',
  set innerHTML(value) { this.html = value; },
  get innerHTML() { return this.html; },
};

function fakeButton(dataset = {}) {
  return {
    dataset,
    listener: null,
    addEventListener(type, callback) {
      if (type === 'click') this.listener = callback;
    },
    click() { this.listener?.({ target: this }); },
  };
}

const trainingViewButton = fakeButton({ view: 'training' });
const unitViewButton = fakeButton({ view: 'unit' });
const customViewButton = fakeButton({ view: 'custom' });
const historyViewButton = fakeButton({ view: 'history' });
const settingsViewButton = fakeButton({ view: 'settings' });
const weaponTabButton = fakeButton({ unitDetailTab: 'weapons' });
const teamRadarButton = fakeButton();

globalThis.localStorage = {
  store: new Map(),
  getItem(key) { return this.store.get(key) ?? null; },
  setItem(key, value) { this.store.set(key, String(value)); },
  removeItem(key) { this.store.delete(key); },
};

globalThis.document = {
  querySelector(selector) {
    if (selector === '#app') return app;
    if (selector === '#team-radar-open') return teamRadarButton;
    return null;
  },
  querySelectorAll(selector) {
    if (selector === '.view-tab') return [trainingViewButton, unitViewButton, customViewButton, historyViewButton, settingsViewButton];
    if (selector === '[data-unit-detail-tab]') return [weaponTabButton];
    return [];
  },
  createElement() {
    return {
      getContext() { return { drawImage() {} }; },
      toDataURL() { return 'data:image/jpeg;base64,'; },
    };
  },
};

globalThis.confirm = () => true;
globalThis.alert = () => {};
globalThis.prompt = () => null;
globalThis.FileReader = class {};
globalThis.Image = class {};

// Start at the first tournament checkpoint so the hard training lock is rendered.
const { createInitialState } = await import('../src/systems/gameState.js');
const { tournamentAvailableTurn, ensureTournamentYear } = await import('../src/systems/tournamentSystem.js');
const { GAME_CONFIG } = await import('../src/config.js');
const checkpointState = createInitialState();
checkpointState.onboarding.completed = true;
checkpointState.turn = tournamentAvailableTurn(checkpointState, 'early');
ensureTournamentYear(checkpointState);
localStorage.setItem(GAME_CONFIG.saveKey, JSON.stringify(checkpointState));

await import('../src/main.js');

if (!app.html.includes('manager-strip')) throw new Error('manager compact render missing');
if (!app.html.includes('manager-expand')) throw new Error('manager expand control missing');
if (!app.html.includes('dashboard-hero')) throw new Error('dashboard render missing');
if (!app.html.includes('app-sidebar')) throw new Error('sidebar render missing');
if (!app.html.includes('global-robot-selector')) throw new Error('global robot selector missing');
if (!app.html.includes('training-lock-notice')) throw new Error('forced tournament training lock missing');
const tabCount = (app.html.match(/data-view="/g) ?? []).length;
if (tabCount < 7) throw new Error(`navigation controls missing: ${tabCount}`);

trainingViewButton.click();
if (!app.html.includes('training-action-grid')) throw new Error('training priority layout missing');
if (app.html.includes('UNIT DETAIL</p><h2>機体詳細')) throw new Error('heavy unit detail still rendered on training screen');
if (!app.html.includes('roster-tools')) throw new Error('roster filters missing');
if (app.html.indexOf('id="training-section"') > app.html.indexOf('id="roster-section"')) throw new Error('training cards should appear before roster');
if (!app.html.includes('チーム傾向を見る')) throw new Error('team radar trigger missing');
teamRadarButton.click();
if (!app.html.includes('team-radar-modal')) throw new Error('team radar modal missing');
if (!app.html.includes('チーム全体の能力傾向')) throw new Error('team radar title missing');

customViewButton.click();
if (!app.html.includes('custom-unit-switcher')) throw new Error('custom previous/next switcher missing');
if (!app.html.includes('overall-score-big')) throw new Error('custom overall score missing');

historyViewButton.click();
if (!app.html.includes('シリーズ図鑑・シリーズ別戦績')) throw new Error('series encyclopedia missing');
if (!app.html.includes('series-dex-summary')) throw new Error('series encyclopedia summary missing');
if (!app.html.includes('series-dex-search') || !app.html.includes('series-dex-discovery') || !app.html.includes('series-dex-generation')) throw new Error('series encyclopedia search/filter controls missing');
if (!app.html.includes('メーカー比較') || !app.html.includes('series-compare-a') || !app.html.includes('series-compare-b')) throw new Error('manufacturer comparison missing');
if (!app.html.includes('第7世代 (#121～140)')) throw new Error('seventh generation filter missing');
if (!app.html.includes('第8世代 (#141～160)')) throw new Error('eighth generation filter missing');

settingsViewButton.click();
if (!app.html.includes('能力解説') || !app.html.includes('ステータス・戦闘指標を詳しく見る')) throw new Error('status guide missing');
if (!app.html.includes('基礎能力 7グループ / 41項目')) throw new Error('detailed base stat guide missing');

unitViewButton.click();
if (!app.html.includes('unit-detail-tabs')) throw new Error('unit detail screen missing');
if (!app.html.includes('data-unit-nav=')) throw new Error('unit previous/next navigation missing');
if (!app.html.includes('robot-nickname')) throw new Error('nickname editor missing');
if (!app.html.includes('data-unit-detail-tab="weapons"')) throw new Error('weapon aptitude tab missing');
if (!app.html.includes('radar-chart')) throw new Error('unit radar chart missing');
if (!app.html.includes('metric-bar-chart')) throw new Error('unit base bar chart missing');
if (!app.html.includes('基礎 ×')) throw new Error('base ability multiplier missing');
if (!app.html.includes('unit-detail-selector')) throw new Error('unit detail selector missing');
if (!app.html.includes('unit-overview-dashboard')) throw new Error('compact unit overview dashboard missing');
if (!app.html.includes('基礎7グループ平均 68%') || !app.html.includes('試合時の性能ブレ')) throw new Error('clear overall/reliability explanation missing');
if (!app.html.includes('生産・系譜')) throw new Error('series production/lineage detail missing');
if (!app.html.includes('個体差・兵装嗜好')) throw new Error('series individuality/weapon preference detail missing');
if (!app.html.includes('固有特性') || !app.html.includes('成長曲線') || !app.html.includes('カスタム適性') || !app.html.includes('特殊能力傾向')) throw new Error('v3 series identity detail missing');
if (!app.html.includes('series-lore-details') || !app.html.includes('シリーズ設計解説')) throw new Error('v3.1 detailed series lore panel missing');
if (app.html.includes('selected-unit-bar')) throw new Error('duplicate global selected unit bar rendered on unit detail');

weaponTabButton.click();
const weaponCards = (app.html.match(/weapon-aptitude-card/g) ?? []).length;
if (weaponCards < 12) throw new Error(`all weapon aptitude cards missing: ${weaponCards}`);
if (!app.html.includes('この兵装を使用')) throw new Error('weapon direct-equip controls missing');
if (!app.html.includes('全兵装適性グラフ')) throw new Error('weapon aptitude bar chart missing');

console.log(JSON.stringify({ ok: true, htmlLength: app.html.length, tabCount, weaponCards }, null, 2));

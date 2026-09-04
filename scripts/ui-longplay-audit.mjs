import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const main = fs.readFileSync(path.join(root, 'src/main.js'), 'utf8');
const css = fs.readFileSync(path.join(root, 'src/styles.css'), 'utf8');

const checks = {
  retirementDefaultCap50: /retirementHistoryExpanded[\s\S]*Math\.min\(unlockedLimit, 50\)/.test(main),
  retirementToggle: main.includes('retirement-history-toggle') && main.includes('売却履歴をすべて表示'),
  rivalDefaultCap40: /rivalArchiveExpanded[\s\S]*Math\.min\(baseLimit, 40\)/.test(main),
  rivalToggle: main.includes('rival-archive-toggle') && main.includes('ライバル記録をすべて表示'),
  recordHorizontalScroll: /\.record-table-wrap\s*\{[\s\S]*overflow-x:\s*auto/.test(css),
  stickyLongRecordHeader: /\.long-record-table \.record-table thead th\s*\{[\s\S]*position:\s*sticky/.test(css),
  mobileHistoryStack: /@media \(max-width: 620px\)[\s\S]*\.retirement-row\s*\{[\s\S]*grid-template-columns:\s*1fr 1fr/.test(css),
  mobileControlsStack: /@media \(max-width: 760px\)[\s\S]*\.exhibition-controls[\s\S]*flex-direction:\s*column/.test(css),
  mobileLineupViewport: /\.lineup-list\s*\{[^}]*max-height:\s*min\(680px, 66vh\)/.test(css),
  touchPrimaryAction: /official-toolbar\.enhanced > \.battle-button[^{]*\{[^}]*min-height:\s*46px/.test(css),
};

const failed = Object.entries(checks).filter(([, ok]) => !ok).map(([key]) => key);
if (failed.length) {
  console.error(JSON.stringify({ ok: false, failed, checks }, null, 2));
  process.exit(1);
}
console.log(JSON.stringify({
  ok: true,
  checks,
  longPlayDefaults: { retirementHistory: 50, rivalArchive: 40 },
  mobileBreakpoints: [760, 620, 430],
}, null, 2));

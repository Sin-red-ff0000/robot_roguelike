import { spawnSync } from 'node:child_process';

const checks = [
  'smoke',
  'g11-audit',
  'quirky-maker-audit',
  'render-smoke',
  'localization-audit',
  'series-mechanics',
  'training-audit',
  'context-training-audit',
  'training-control-audit',
  'facility-audit',
  'analysis-weapons-audit',
  'weapon-doctrine-audit',
  'combat-prep-audit',
  'ability-audit',
  'content-audit',
  'rival-audit',
  'best15-audit',
  'history-record-audit',
  'exhibition-audit',
  'finalization-audit',
  'reachability-audit',
  'ui-longplay-audit',
  'journey-audit',
  'balance',
  'longrun',
];
const results = [];
for (const name of checks) {
  const result = spawnSync('npm', ['run', name], { encoding: 'utf8', shell: false });
  if (result.status !== 0) {
    process.stderr.write(result.stdout ?? '');
    process.stderr.write(result.stderr ?? '');
    throw new Error(`release readiness failed: ${name}`);
  }
  const output = String(result.stdout ?? '').trim().split('\n').slice(-12).join('\n');
  results.push({ name, ok: true, output });
}
console.log(JSON.stringify({ ok: true, version: '4.8', checks: results.map((r) => r.name), passed: results.length }, null, 2));

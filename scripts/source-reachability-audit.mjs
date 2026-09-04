import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcRoot = path.join(root, 'src');
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && entry.name.endsWith('.js')) files.push(path.resolve(full));
  }
}
walk(srcRoot);
const fileSet = new Set(files);
const seen = new Set();
const stack = [path.resolve(srcRoot, 'main.js')];
const importPattern = /(?:import|export)\s+(?:[^'\"]*?\s+from\s+)?['\"]([^'\"]+)['\"]|import\(['\"]([^'\"]+)['\"]\)/g;
while (stack.length) {
  const current = stack.pop();
  if (seen.has(current) || !fileSet.has(current)) continue;
  seen.add(current);
  const text = fs.readFileSync(current, 'utf8');
  for (const match of text.matchAll(importPattern)) {
    const spec = String(match[1] ?? match[2] ?? '').split('?')[0];
    if (!spec.startsWith('.')) continue;
    let target = path.resolve(path.dirname(current), spec);
    if (!path.extname(target)) target += '.js';
    if (fileSet.has(target) && !seen.has(target)) stack.push(target);
  }
}
const orphaned = files.filter((file) => !seen.has(file)).map((file) => path.relative(root, file));
if (orphaned.length) throw new Error(`main.jsから到達しないsrcモジュールがあります: ${orphaned.join(', ')}`);
console.log(JSON.stringify({ ok: true, sourceModules: files.length, reachableModules: seen.size, orphaned: 0 }, null, 2));

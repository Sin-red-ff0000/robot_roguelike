import { WEAPON_DOCTRINE_RULES } from '../src/data/battleRules.js';
import { WEAPON_KEYS } from '../src/data/weaponDefinitions.js';
const missing = WEAPON_KEYS.filter((key) => !WEAPON_DOCTRINE_RULES[key]);
const labels = new Set(Object.values(WEAPON_DOCTRINE_RULES).map((r) => r.label));
const descriptions = new Set(Object.values(WEAPON_DOCTRINE_RULES).map((r) => r.description));
if (missing.length) throw new Error(`兵装ドクトリン欠落: ${missing.join(',')}`);
if (labels.size !== WEAPON_KEYS.length) throw new Error(`ドクトリン名重複: ${labels.size}/${WEAPON_KEYS.length}`);
if (descriptions.size !== WEAPON_KEYS.length) throw new Error(`説明重複: ${descriptions.size}/${WEAPON_KEYS.length}`);
for (const key of WEAPON_KEYS) {
  const r=WEAPON_DOCTRINE_RULES[key];
  if (!r.primaryAxes?.length || !r.bonus || !r.description) throw new Error(`定義不足: ${key}`);
}
console.log(JSON.stringify({ weapons:WEAPON_KEYS.length, uniqueLabels:labels.size, uniqueDescriptions:descriptions.size }, null, 2));

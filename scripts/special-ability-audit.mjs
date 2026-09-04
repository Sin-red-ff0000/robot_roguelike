import { SPECIAL_ABILITIES, NORMAL_POSITIVE_ABILITY_IDS, NEGATIVE_ABILITY_IDS } from '../src/data/specialAbilities.js?v=4.7';
import { STAT_GROUPS } from '../src/data/statDefinitions.js?v=4.7';

const abilities = Object.values(SPECIAL_ABILITIES);
const badText = abilities.filter((a) => /\b(?:OUTPUT|MOBILITY|CONTROL|ENGINE|COMPUTE|SENSOR)\b|系統不調\d|条件成立時に全比較値を補強|系基礎項目選出時に性能を補強|の(?:威力|精度|制御|応答|安定|効率)軸を補強/.test(`${a.name} ${a.description}`));
const baseNames = new Set(Object.values(STAT_GROUPS).flatMap((g) => g.stats));
const baseStatEffects = abilities.filter((a) => a.effect?.kind === 'baseStat');
const invalidBaseStat = baseStatEffects.filter((a) => !baseNames.has(a.effect.statName));
const weakNames = NEGATIVE_ABILITY_IDS.filter((id) => /^v41Weakness/.test(id)).map((id) => SPECIAL_ABILITIES[id]?.name);
const result = {
  ok: abilities.length === 192 && badText.length === 0 && invalidBaseStat.length === 0 && new Set(weakNames).size === weakNames.length,
  abilities: abilities.length,
  normalPositive: NORMAL_POSITIVE_ABILITY_IDS.length,
  negative: NEGATIVE_ABILITY_IDS.length,
  baseStatEffects: baseStatEffects.length,
  badText: badText.map((a) => a.id),
  invalidBaseStat: invalidBaseStat.map((a) => a.id),
  uniqueExpandedWeaknessNames: new Set(weakNames).size,
};
console.log(JSON.stringify(result, null, 2));
if (!result.ok) process.exit(1);

import { GROUP_KEYS, STAT_GROUPS } from '../data/statDefinitions.js?v=3.1';
import { WEAPON_CATEGORIES, WEAPON_KEYS } from '../data/weaponDefinitions.js?v=3.1';
import { MANUFACTURER_MAP } from '../data/manufacturers.js?v=3.1';
import { getSeriesDefinition, resolveSeriesProfile } from '../data/seriesDefinitions.js?v=3.1';

function hashString(text) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function mulberry32(seed) {
  let t = seed >>> 0;
  return () => {
    t += 0x6D2B79F5;
    let r = t;
    r = Math.imul(r ^ (r >>> 15), r | 1);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffled(values, random) {
  const list = [...values];
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function add(map, key, amount) {
  map[key] = Number(((map[key] ?? 0) + amount).toFixed(3));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function roundMap(map, min, max, digits = 2) {
  return Object.fromEntries(Object.entries(map).map(([key, value]) => [key, Number(clamp(value, min, max).toFixed(digits))]));
}

export function getAnnualTrend(year, manufacturerId, seriesId = null) {
  const normalizedYear = Number.isFinite(Number(year)) ? Math.trunc(Number(year)) : 1;
  const manufacturer = MANUFACTURER_MAP.get(manufacturerId);
  const series = getSeriesDefinition(seriesId);
  const seriesProfile = resolveSeriesProfile(series);
  const sensitivity = Number(manufacturer?.profile?.annualSensitivity ?? 1);

  const groupModifiers = Object.fromEntries(GROUP_KEYS.map((key) => [key, 0]));
  const growthModifiers = Object.fromEntries(GROUP_KEYS.map((key) => [key, 0]));
  const weaponModifiers = Object.fromEntries(WEAPON_KEYS.map((key) => [key, 0]));
  const weaponGrowthModifiers = Object.fromEntries(WEAPON_KEYS.map((key) => [key, 0]));

  // Industry-wide climate: zero-sum-ish yearly changes. No cumulative power creep.
  const industryRandom = mulberry32(hashString(`industry:${normalizedYear}`));
  const industryGroups = shuffled(GROUP_KEYS, industryRandom);
  add(groupModifiers, industryGroups[0], 3.0);
  add(groupModifiers, industryGroups[1], 2.0);
  add(groupModifiers, industryGroups[2], -2.0);
  add(groupModifiers, industryGroups[3], -3.0);
  add(growthModifiers, industryGroups[0], 0.025);
  add(growthModifiers, industryGroups[3], -0.02);

  const industryWeapons = shuffled(WEAPON_KEYS, industryRandom);
  add(weaponModifiers, industryWeapons[0], 2.0);
  add(weaponModifiers, industryWeapons[1], 1.5);
  add(weaponModifiers, industryWeapons[2], -1.5);
  add(weaponModifiers, industryWeapons[3], -2.0);
  add(weaponGrowthModifiers, industryWeapons[0], 0.02);
  add(weaponGrowthModifiers, industryWeapons[3], -0.015);
  let reliabilityModifier = Math.round((industryRandom() * 4) - 2);
  let resistanceModifier = Math.round((industryRandom() * 2) - 1);

  // Company yearly engineering focus. Stable makers react less, experimental makers more.
  const makerRandom = mulberry32(hashString(`maker:${manufacturerId}:${normalizedYear}`));
  const makerGroups = shuffled(GROUP_KEYS, makerRandom);
  add(groupModifiers, makerGroups[0], 2.2 * sensitivity);
  add(groupModifiers, makerGroups[1], -1.4 * sensitivity);
  add(growthModifiers, makerGroups[0], 0.018 * sensitivity);
  add(growthModifiers, makerGroups[1], -0.01 * sensitivity);
  const makerWeapons = shuffled(WEAPON_KEYS, makerRandom);
  add(weaponModifiers, makerWeapons[0], 1.7 * sensitivity);
  add(weaponModifiers, makerWeapons[1], -1.0 * sensitivity);
  add(weaponGrowthModifiers, makerWeapons[0], 0.015 * sensitivity);
  reliabilityModifier += Math.round(((makerRandom() * 4) - 2) * sensitivity);

  // Series revision: small year-to-year adjustment, so the same series can have a "good year".
  if (series) {
    const seriesRandom = mulberry32(hashString(`series:${series.id}:${normalizedYear}`));
    const revisionGroups = shuffled(GROUP_KEYS, seriesRandom);
    add(groupModifiers, revisionGroups[0], 1.4);
    add(groupModifiers, revisionGroups[1], -0.9);
    add(growthModifiers, revisionGroups[0], 0.012);
    if (seriesProfile?.preferredWeapons?.length) {
      const preferred = seriesProfile.preferredWeapons[Math.floor(seriesRandom() * seriesProfile.preferredWeapons.length)];
      add(weaponModifiers, preferred, 1.4);
      add(weaponGrowthModifiers, preferred, 0.012);
    } else {
      add(weaponModifiers, WEAPON_KEYS[Math.floor(seriesRandom() * WEAPON_KEYS.length)], 1.0);
    }
    reliabilityModifier += Math.round((seriesRandom() * 2) - 1);
  }

  let seriesYearEvent = { type: 'normal', label: '通常改訂', description: '大きな当たり外れのない通常年度。', score: 0 };
  if (series) {
    const qualityRandom = mulberry32(hashString(`quality:${series.id}:${normalizedYear}`));
    const volatility = clamp(Number(seriesProfile?.annualVolatility ?? 1), 0.6, 1.6);
    const majorChance = 0.025 * volatility;
    const minorChance = 0.065 * volatility;
    const roll = qualityRandom();
    let score = 0;
    let type = 'normal';
    if (roll < majorChance) { type = 'masterpiece'; score = 2; }
    else if (roll < majorChance + minorChance) { type = 'good'; score = 1; }
    else if (roll > 1 - majorChance) { type = 'problem'; score = -2; }
    else if (roll > 1 - majorChance - minorChance) { type = 'rough'; score = -1; }

    if (score !== 0) {
      const rankedSeriesGroups = [...GROUP_KEYS].sort((a, b) => Number(seriesProfile?.groupBias?.[b] ?? 0) - Number(seriesProfile?.groupBias?.[a] ?? 0));
      const focus = rankedSeriesGroups[0];
      const secondary = rankedSeriesGroups[1];
      const preferredWeapon = seriesProfile?.preferredWeapons?.[0] ?? WEAPON_KEYS[Math.floor(qualityRandom() * WEAPON_KEYS.length)];
      const major = Math.abs(score) === 2;
      const direction = Math.sign(score);
      add(groupModifiers, focus, direction * (major ? 4.6 : 2.4));
      add(groupModifiers, secondary, direction * (major ? 2.5 : 1.2));
      add(growthModifiers, focus, direction * (major ? 0.032 : 0.016));
      add(weaponModifiers, preferredWeapon, direction * (major ? 3.5 : 1.8));
      add(weaponGrowthModifiers, preferredWeapon, direction * (major ? 0.026 : 0.012));
      reliabilityModifier += direction * (major ? 4 : 2);
      resistanceModifier += direction * (major ? 2 : 1);
      const focusLabel = STAT_GROUPS[focus]?.label ?? focus;
      const weaponLabel = WEAPON_CATEGORIES[preferredWeapon]?.label ?? preferredWeapon;
      const labels = {
        masterpiece: ['名機年', `${focusLabel}系改修と${weaponLabel}統合が大成功し、シリーズ史でも評価の高い年度。`],
        good: ['好評年', `${focusLabel}系の改修が順調で、${weaponLabel}運用も安定した年度。`],
        rough: ['不作年', `${focusLabel}系の設計変更が噛み合わず、${weaponLabel}適性にも小さな不調を残した年度。`],
        problem: ['問題年', `${focusLabel}系の大幅改修が裏目に出て、${weaponLabel}統合にも問題を抱えた年度。`],
      };
      seriesYearEvent = { type, label: labels[type][0], description: labels[type][1], score };
    }
  }

  const finalGroups = roundMap(groupModifiers, -10, 10, 2);
  const finalGrowth = roundMap(growthModifiers, -0.09, 0.09, 3);
  const finalWeapons = roundMap(weaponModifiers, -8, 8, 2);
  const finalWeaponGrowth = roundMap(weaponGrowthModifiers, -0.08, 0.08, 3);
  reliabilityModifier = clamp(reliabilityModifier, -9, 9);
  resistanceModifier = clamp(resistanceModifier, -5, 5);

  const sortedGroups = [...GROUP_KEYS].sort((a, b) => finalGroups[b] - finalGroups[a]);
  const best = sortedGroups[0];
  const second = sortedGroups[1];
  const worst = sortedGroups.at(-1);
  const qualitySuffix = seriesYearEvent.type === 'normal' ? '' : ` / ${seriesYearEvent.label}`;
  const label = `${normalizedYear}年度：${STAT_GROUPS[best].label}・${STAT_GROUPS[second].label}が追い風 / ${STAT_GROUPS[worst].label}は逆風${qualitySuffix}`;

  return {
    year: normalizedYear,
    manufacturerId,
    seriesId: series?.id ?? null,
    label,
    groupModifiers: finalGroups,
    growthModifiers: finalGrowth,
    weaponModifiers: finalWeapons,
    weaponGrowthModifiers: finalWeaponGrowth,
    reliabilityModifier,
    resistanceModifier,
    strongestGroups: [best, second],
    weakestGroup: worst,
    seriesYearEvent,
  };
}

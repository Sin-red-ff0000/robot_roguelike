import { GAME_CONFIG } from '../config.js?v=3.4';
import { MANUFACTURERS } from '../data/manufacturers.js?v=3.4';
import { getSeriesForManufacturer, resolveSeriesProfile } from '../data/seriesDefinitions.js?v=3.4';
import { GROUP_KEYS, RESISTANCE_STATS, STAT_GROUPS } from '../data/statDefinitions.js?v=3.4';
import { WEAPON_AXES, WEAPON_CATEGORIES, WEAPON_KEYS } from '../data/weaponDefinitions.js?v=3.4';
import { clamp, pick, randomFloat, randomInt, weightedPick } from '../utils/random.js?v=3.4';
import { NEGATIVE_ABILITY_IDS, NORMAL_POSITIVE_ABILITY_IDS, SPECIAL_ABILITIES } from '../data/specialAbilities.js?v=3.4';
import { getAnnualTrend } from './annualTrendSystem.js?v=3.4';

const makeRobotId = () => {
  if (globalThis.crypto?.randomUUID) return `robot-${globalThis.crypto.randomUUID()}`;
  return `robot-${Date.now()}-${randomInt(100000, 999999)}`;
};

const makeSerial = (manufacturer, year, index) => {
  const prefix = manufacturer.name.replace(/[・\s]/g, '').slice(0, 2).toUpperCase();
  return `${prefix}-${String(year).padStart(2, '0')}-${String(index).padStart(2, '0')}`;
};

function average(values) {
  return values.reduce((sum, value) => sum + Number(value || 0), 0) / Math.max(1, values.length);
}

function groupBias(profile, seriesProfile, annualTrend, groupKey) {
  const seriesIntensity = Number(profile?.seriesIntensity ?? 1);
  return Number(profile?.groupBias?.[groupKey] ?? 0)
    + Number(seriesProfile?.groupBias?.[groupKey] ?? 0) * seriesIntensity
    + Number(annualTrend?.groupModifiers?.[groupKey] ?? 0);
}

function growthBias(profile, seriesProfile, annualTrend, groupKey) {
  const seriesIntensity = Number(profile?.seriesIntensity ?? 1);
  return Number(profile?.growthBias?.[groupKey] ?? 0)
    + Number(seriesProfile?.growthBias?.[groupKey] ?? 0) * seriesIntensity
    + Number(annualTrend?.growthModifiers?.[groupKey] ?? 0);
}

function weaponBias(profile, seriesProfile, annualTrend, weaponKey) {
  const seriesIntensity = Number(profile?.seriesIntensity ?? 1);
  const avoidedPenalty = seriesProfile?.avoidedWeapons?.includes(weaponKey) ? -6 : 0;
  return Number(profile?.weaponBias?.[weaponKey] ?? 0)
    + (Number(seriesProfile?.weaponBias?.[weaponKey] ?? 0) + avoidedPenalty) * seriesIntensity
    + Number(annualTrend?.weaponModifiers?.[weaponKey] ?? 0);
}

function weaponGrowthBias(profile, seriesProfile, annualTrend, weaponKey) {
  const seriesIntensity = Number(profile?.seriesIntensity ?? 1);
  const avoidedPenalty = seriesProfile?.avoidedWeapons?.includes(weaponKey) ? -0.05 : 0;
  return Number(profile?.weaponGrowthBias?.[weaponKey] ?? 0)
    + (Number(seriesProfile?.weaponGrowthBias?.[weaponKey] ?? 0) + avoidedPenalty) * seriesIntensity
    + Number(annualTrend?.weaponGrowthModifiers?.[weaponKey] ?? 0);
}

function generateGroup(profile, seriesProfile, annualTrend, groupKey) {
  const variance = clamp(
    Number(profile?.statVariance ?? 1) * Number(seriesProfile?.statVariance ?? 1),
    0.5,
    1.8,
  );
  return {
    base: randomFloat(42, 75) + groupBias(profile, seriesProfile, annualTrend, groupKey),
    variance,
  };
}

function generateWeaponData(weaponKey, profile, seriesProfile, annualTrend) {
  const base = randomFloat(42, 77) + weaponBias(profile, seriesProfile, annualTrend, weaponKey);
  const statVariance = clamp(Number(profile?.statVariance ?? 1) * Number(seriesProfile?.statVariance ?? 1) * Number(seriesProfile?.weaponStatVariance ?? 1), 0.45, 2.2);
  const growthVariance = clamp(Number(profile?.growthVariance ?? 1) * Number(seriesProfile?.growthVariance ?? 1) * Number(seriesProfile?.weaponGrowthVariance ?? 1), 0.5, 2.2);
  const weaponStats = {};
  const weaponGrowthMultipliers = {};
  for (const axis of WEAPON_AXES) {
    weaponStats[axis] = clamp(
      Math.round(base + randomFloat(-14, 14) * statVariance),
      GAME_CONFIG.weaponStatMin,
      GAME_CONFIG.weaponStatMax,
    );
    const rawGrowth = 1.02 + randomFloat(-0.40, 0.40) * growthVariance
      + weaponGrowthBias(profile, seriesProfile, annualTrend, weaponKey);
    weaponGrowthMultipliers[axis] = Number(clamp(
      rawGrowth,
      GAME_CONFIG.growthMultiplierMin,
      GAME_CONFIG.growthMultiplierMax,
    ).toFixed(2));
  }
  return { weaponStats, weaponGrowthMultipliers };
}

function rollGenerationTrait(manufacturer, seriesProfile) {
  const weights = { standard: 78, promising: 12, lateBloom: 7, eccentric: 3, ...(manufacturer?.profile?.traitWeights ?? {}) };
  if (seriesProfile?.eccentricBonus) {
    weights.eccentric += Math.round(seriesProfile.eccentricBonus * 100);
    weights.standard = Math.max(25, weights.standard - Math.round(seriesProfile.eccentricBonus * 70));
  }
  return weightedPick(Object.entries(weights).map(([value, weight]) => ({ value, weight: Math.max(0, Number(weight) || 0) })));
}

function averageGrowthForGroup(growthMultipliers, groupKey) {
  return average(Object.values(growthMultipliers[groupKey] ?? {}));
}

function applyGenerationTrait(stats, growthMultipliers, weaponCategoryGrowthMultipliers, trait) {
  const shuffledGroups = [...GROUP_KEYS].sort(() => Math.random() - 0.5);
  if (trait === 'promising') {
    for (const groupKey of shuffledGroups.slice(0, 2)) {
      for (const statName of STAT_GROUPS[groupKey].stats) {
        stats[groupKey][statName] = clamp(stats[groupKey][statName] + randomInt(3, 7), GAME_CONFIG.statMin, GAME_CONFIG.statMax);
        growthMultipliers[groupKey][statName] = Number(clamp(growthMultipliers[groupKey][statName] + randomFloat(0.08, 0.18), GAME_CONFIG.growthMultiplierMin, 1.75).toFixed(2));
      }
    }
  }
  if (trait === 'lateBloom') {
    const weakGroup = shuffledGroups[0];
    for (const statName of STAT_GROUPS[weakGroup].stats) {
      stats[weakGroup][statName] = clamp(stats[weakGroup][statName] - randomInt(3, 7), GAME_CONFIG.statMin, GAME_CONFIG.statMax);
    }
    for (const groupKey of shuffledGroups.slice(1, 3)) {
      for (const statName of STAT_GROUPS[groupKey].stats) {
        growthMultipliers[groupKey][statName] = Number(clamp(growthMultipliers[groupKey][statName] + randomFloat(0.15, 0.30), GAME_CONFIG.growthMultiplierMin, 1.85).toFixed(2));
      }
    }
  }
  if (trait === 'eccentric') {
    const weaponKey = pick(WEAPON_KEYS);
    for (const axis of WEAPON_AXES) {
      weaponCategoryGrowthMultipliers[weaponKey][axis] = Number(clamp(
        weaponCategoryGrowthMultipliers[weaponKey][axis] + randomFloat(0.25, 0.45),
        GAME_CONFIG.growthMultiplierMin,
        2.00,
      ).toFixed(2));
    }
    return weaponKey;
  }
  return null;
}

function applySeriesJackpot(stats, growthMultipliers, weaponCategoryStats, weaponCategoryGrowthMultipliers, seriesProfile) {
  const chance = Number(seriesProfile?.jackpotChance ?? 0);
  if (chance <= 0 || Math.random() >= chance) return null;
  const groupKey = pick(GROUP_KEYS);
  for (const statName of STAT_GROUPS[groupKey].stats) {
    stats[groupKey][statName] = clamp(stats[groupKey][statName] + randomInt(5, 10), GAME_CONFIG.statMin, GAME_CONFIG.statMax);
    growthMultipliers[groupKey][statName] = Number(clamp(
      growthMultipliers[groupKey][statName] + randomFloat(0.08, 0.16),
      GAME_CONFIG.growthMultiplierMin,
      1.9,
    ).toFixed(2));
  }
  const preferred = seriesProfile?.preferredWeapons?.length ? seriesProfile.preferredWeapons : WEAPON_KEYS;
  const weaponKey = pick(preferred);
  for (const axis of WEAPON_AXES) {
    weaponCategoryStats[weaponKey][axis] = clamp(weaponCategoryStats[weaponKey][axis] + randomInt(5, 10), GAME_CONFIG.weaponStatMin, GAME_CONFIG.weaponStatMax);
    weaponCategoryGrowthMultipliers[weaponKey][axis] = Number(clamp(
      weaponCategoryGrowthMultipliers[weaponKey][axis] + randomFloat(0.08, 0.15),
      GAME_CONFIG.growthMultiplierMin,
      1.95,
    ).toFixed(2));
  }
  return { groupKey, weaponKey, label: `${STAT_GROUPS[groupKey].label}・${WEAPON_CATEGORIES[weaponKey].label}の大当たり個体` };
}

function weightedAbilityPick(ids, seriesProfile) {
  const tags = new Set(seriesProfile?.abilityTendencyTags ?? []);
  const mult = Number(seriesProfile?.abilityTendencyMultiplier ?? 1.18);
  return weightedPick(ids.map((id) => {
    const abilityTags = SPECIAL_ABILITIES[id]?.tags ?? [];
    const overlap = abilityTags.filter((tag) => tags.has(tag)).length;
    return { value: id, weight: overlap ? Math.pow(mult, overlap) : 1 };
  }));
}

function initialAbilities(manufacturer, seriesProfile) {
  const abilities = [];
  const experimental = manufacturer?.region === 'special' || seriesProfile?.archetypeId === 'volatileExperimental';
  const positiveChance = 0.07 + (experimental ? 0.025 : 0);
  const negativeChance = 0.045 + (experimental ? 0.025 : 0);
  if (Math.random() < positiveChance) abilities.push(weightedAbilityPick(NORMAL_POSITIVE_ABILITY_IDS, seriesProfile));
  if (Math.random() < negativeChance) {
    const negative = pick(NEGATIVE_ABILITY_IDS);
    if (!abilities.includes(negative)) abilities.push(negative);
  }
  return abilities;
}

function pickSeries(manufacturer) {
  const list = getSeriesForManufacturer(manufacturer.id);
  if (!list.length) return null;
  return weightedPick(list.map((series) => ({
    value: series,
    weight: Math.max(0.01, Number(series.availabilityWeight ?? 1)),
  })));
}

function chooseWeapon(weaponCategoryStats, weaponCategoryGrowthMultipliers, seriesProfile, eccentricWeaponKey) {
  if (eccentricWeaponKey) return eccentricWeaponKey;
  const preferred = new Set(seriesProfile?.preferredWeapons ?? []);
  const avoided = new Set(seriesProfile?.avoidedWeapons ?? []);
  const entries = WEAPON_KEYS.map((weaponKey) => {
    const statAvg = average(Object.values(weaponCategoryStats[weaponKey] ?? {}));
    const growthAvg = average(Object.values(weaponCategoryGrowthMultipliers[weaponKey] ?? {}));
    const preferenceBonus = preferred.has(weaponKey) ? 18 : avoided.has(weaponKey) ? -14 : 0;
    return { value: weaponKey, weight: Math.max(1, statAvg - 38 + growthAvg * 9 + preferenceBonus) };
  });
  return weightedPick(entries);
}

function generateReliability(manufacturer, seriesProfile, annualTrend, generationTrait) {
  const min = GAME_CONFIG.reliabilityMin;
  const max = GAME_CONFIG.reliabilityMax;
  const midpoint = (min + max) / 2;
  const raw = (randomFloat(min, max) + randomFloat(min, max)) / 2;
  const variance = clamp(Number(manufacturer?.profile?.reliabilityVariance ?? 1) * Number(seriesProfile?.reliabilityVariance ?? 1), 0.4, 2.2);
  const seriesIntensity = Number(manufacturer?.profile?.seriesIntensity ?? 1);
  const bias = Number(manufacturer?.profile?.reliabilityBias ?? 0)
    + Number(seriesProfile?.reliabilityBias ?? 0) * seriesIntensity
    + Number(annualTrend?.reliabilityModifier ?? 0)
    + (generationTrait === 'eccentric' ? randomInt(-8, 3) : 0);
  return clamp(Math.round(midpoint + (raw - midpoint) * variance + bias), 35, 100);
}

export function generateRobot({ year, cohortYear = 1, index = 1 } = {}) {
  const manufacturer = pick(MANUFACTURERS);
  const series = pickSeries(manufacturer);
  const seriesProfile = resolveSeriesProfile(series);
  const productionYear = Math.max(1, Number(year ?? 1) - Number(cohortYear ?? 1) + 1);
  const annualTrend = getAnnualTrend(productionYear, manufacturer.id, series?.id ?? null);
  const stats = {};
  const growthMultipliers = {};

  for (const groupKey of GROUP_KEYS) {
    const group = STAT_GROUPS[groupKey];
    const groupData = generateGroup(manufacturer.profile, seriesProfile, annualTrend, groupKey);
    stats[groupKey] = {};
    growthMultipliers[groupKey] = {};

    for (const statName of group.stats) {
      stats[groupKey][statName] = clamp(
        Math.round(groupData.base + randomFloat(-13, 13) * groupData.variance),
        GAME_CONFIG.statMin,
        GAME_CONFIG.statMax,
      );
      const growthVariance = clamp(Number(manufacturer.profile?.growthVariance ?? 1) * Number(seriesProfile?.growthVariance ?? 1), 0.55, 1.8);
      const rawGrowth = 1.01 + randomFloat(-0.40, 0.40) * growthVariance
        + growthBias(manufacturer.profile, seriesProfile, annualTrend, groupKey);
      growthMultipliers[groupKey][statName] = Number(clamp(
        rawGrowth,
        GAME_CONFIG.growthMultiplierMin,
        GAME_CONFIG.growthMultiplierMax,
      ).toFixed(2));
    }
  }

  const seriesIntensity = Number(manufacturer.profile?.seriesIntensity ?? 1);
  const resistanceBaseBias = Number(manufacturer.profile?.resistanceBias ?? 0)
    + Number(seriesProfile?.resistanceBias ?? 0) * seriesIntensity
    + Number(annualTrend?.resistanceModifier ?? 0);
  const resistances = Object.fromEntries(
    RESISTANCE_STATS.map((name) => [name, clamp(Math.round(randomFloat(35, 90) + resistanceBaseBias + randomFloat(-4, 4)), 20, 100)]),
  );

  const weaponCategoryStats = {};
  const weaponCategoryGrowthMultipliers = {};
  for (const key of WEAPON_KEYS) {
    const generated = generateWeaponData(key, manufacturer.profile, seriesProfile, annualTrend);
    weaponCategoryStats[key] = generated.weaponStats;
    weaponCategoryGrowthMultipliers[key] = generated.weaponGrowthMultipliers;
  }

  const generationTrait = rollGenerationTrait(manufacturer, seriesProfile);
  const eccentricWeaponKey = applyGenerationTrait(stats, growthMultipliers, weaponCategoryGrowthMultipliers, generationTrait);
  const seriesJackpot = applySeriesJackpot(stats, growthMultipliers, weaponCategoryStats, weaponCategoryGrowthMultipliers, seriesProfile);
  const weaponKey = chooseWeapon(weaponCategoryStats, weaponCategoryGrowthMultipliers, seriesProfile, eccentricWeaponKey ?? seriesJackpot?.weaponKey ?? null);
  const updatedGroupAverages = Object.fromEntries(GROUP_KEYS.map((groupKey) => [groupKey, average(Object.values(stats[groupKey]))]));
  const favoriteGroup = [...GROUP_KEYS].sort((a, b) =>
    (updatedGroupAverages[b] + averageGrowthForGroup(growthMultipliers, b) * 12)
    - (updatedGroupAverages[a] + averageGrowthForGroup(growthMultipliers, a) * 12)
  )[0];
  const weaponDef = WEAPON_CATEGORIES[weaponKey];
  const weaponStats = { ...weaponCategoryStats[weaponKey] };
  const weaponGrowthMultipliers = { ...weaponCategoryGrowthMultipliers[weaponKey] };
  const seriesNumber = Number(series?.seriesNumber ?? 1);
  const seriesNameKana = series?.nameKana ?? `シリーズ-${String(seriesNumber).padStart(2, '0')}`;
  const seriesNameLatin = series?.nameLatin ?? `SERIES-${String(seriesNumber).padStart(2, '0')}`;

  return {
    id: makeRobotId(),
    nickname: '',
    manufacturerId: manufacturer.id,
    manufacturerName: manufacturer.name,
    seriesId: series?.id ?? null,
    seriesArchetypeId: seriesProfile?.archetypeId ?? 'balanced',
    seriesTrendLabel: seriesProfile?.label ?? '標準汎用',
    seriesTrendSummary: seriesProfile?.summary ?? '',
    seriesConcept: seriesProfile?.concept ?? seriesProfile?.summary ?? '',
    seriesNamingConcept: seriesProfile?.namingConcept ?? '',
    seriesDevelopmentBackground: seriesProfile?.developmentBackground ?? '',
    seriesEngineeringNotes: seriesProfile?.engineeringNotes ?? '',
    seriesTrainingNotes: seriesProfile?.trainingNotes ?? '',
    seriesLegacyRefit: Boolean(seriesProfile?.legacyRefit),
    seriesRefitGeneration: Number(seriesProfile?.refitGeneration ?? (seriesProfile?.legacyRefit ? 1 : 0)),
    seriesRefitVersion: seriesProfile?.refitVersion ?? (seriesProfile?.legacyRefit ? '3.1' : ''),
    seriesMarketPosition: seriesProfile?.marketPosition ?? '',
    seriesProductionTierId: seriesProfile?.productionTierId ?? 'standard',
    seriesProductionTierLabel: seriesProfile?.productionTierLabel ?? '標準生産',
    seriesIndividualityTraitId: seriesProfile?.individualityTraitId ?? 'normal',
    seriesIndividualityLabel: seriesProfile?.individualityLabel ?? '標準個体差',
    seriesIndividualitySummary: seriesProfile?.individualitySummary ?? '',
    seriesLineageLabel: seriesProfile?.lineageLabel ?? '',
    seriesLineageRootId: seriesProfile?.lineageRootId ?? null,
    seriesPredecessorId: seriesProfile?.predecessorId ?? null,
    seriesPredecessorNameKana: seriesProfile?.predecessorNameKana ?? '',
    seriesPredecessorNameLatin: seriesProfile?.predecessorNameLatin ?? '',
    seriesPreferredWeapons: [...(seriesProfile?.preferredWeapons ?? [])],
    seriesAvoidedWeapons: [...(seriesProfile?.avoidedWeapons ?? [])],
    seriesWeaponDoctrine: seriesProfile?.weaponDoctrine ?? '',
    seriesIntrinsicTraitId: seriesProfile?.intrinsicTraitId ?? 'maturePlatform',
    seriesIntrinsicTrait: { ...(seriesProfile?.intrinsicTrait ?? {}) },
    seriesGrowthCurveId: seriesProfile?.growthCurveId ?? 'steady',
    seriesGrowthCurve: { ...(seriesProfile?.growthCurve ?? {}) },
    seriesCustomAptitudeId: seriesProfile?.customAptitudeId ?? 'balanced',
    seriesCustomAptitude: JSON.parse(JSON.stringify(seriesProfile?.customAptitude ?? {})),
    seriesAbilityTendencyTags: [...(seriesProfile?.abilityTendencyTags ?? [])],
    seriesAbilityTendencyMultiplier: Number(seriesProfile?.abilityTendencyMultiplier ?? 1.18),
    seriesJackpot,
    seriesNumber,
    seriesNameKana,
    seriesNameLatin,
    seriesName: seriesNameKana,
    serial: makeSerial(manufacturer, productionYear, index),
    productionYear,
    annualTrend,
    yearJoined: productionYear,
    cohortYear,
    stats,
    resistances,
    reliability: generateReliability(manufacturer, seriesProfile, annualTrend, generationTrait),
    growthMultipliers,
    favoriteGroup,
    individualTrainingTarget: `group:${favoriteGroup}`,
    weaponKey,
    weaponName: weaponDef.label,
    weaponStats,
    weaponGrowthMultipliers,
    weaponCategoryStats,
    weaponCategoryGrowthMultipliers,
    generationTrait,
    specialAbilities: initialAbilities(manufacturer, seriesProfile),
    customHistory: [],
    record: { wins: 0, losses: 0 },
  };
}

export function generateCohort({ year, cohortYear, count }) {
  return Array.from({ length: count }, (_, index) => generateRobot({ year, cohortYear, index: index + 1 }));
}

import { GAME_CONFIG } from '../config.js';
import { MANUFACTURERS } from '../data/manufacturers.js';
import { GROUP_KEYS, RESISTANCE_STATS, STAT_GROUPS } from '../data/statDefinitions.js';
import { WEAPON_AXES, WEAPON_CATEGORIES, WEAPON_KEYS } from '../data/weaponDefinitions.js';
import { clamp, pick, randomFloat, randomInt, weightedPick } from '../utils/random.js';
import { NEGATIVE_ABILITY_IDS, NORMAL_POSITIVE_ABILITY_IDS } from '../data/specialAbilities.js';

const makeRobotId = () => {
  if (globalThis.crypto?.randomUUID) return `robot-${globalThis.crypto.randomUUID()}`;
  return `robot-${Date.now()}-${randomInt(100000, 999999)}`;
};

const SERIES_THEME_LATIN = { '山': 'MOUNTAIN', '花': 'FLOWER', '鉱石': 'MINERAL', '気象・自然現象': 'WEATHER', '天体': 'CELESTIAL', '色': 'COLOR', '動物': 'ANIMAL', '神話': 'MYTH', '特殊': 'SPECIAL' };

const makeSerial = (manufacturer, year, index) => {
  const prefix = manufacturer.name.replace(/[・\s]/g, '').slice(0, 2).toUpperCase();
  return `${prefix}-${String(year).padStart(2, '0')}-${String(index).padStart(2, '0')}`;
};

const generateGroup = () => ({ base: randomFloat(45, 78) });

function generateWeaponData(weaponKey) {
  const weaponDef = WEAPON_CATEGORIES[weaponKey];
  const base = randomFloat(44, 80);
  const weaponStats = {};
  const weaponGrowthMultipliers = {};
  for (const axis of WEAPON_AXES) {
    weaponStats[axis] = clamp(
      Math.round(base + randomFloat(-14, 14)),
      GAME_CONFIG.weaponStatMin,
      GAME_CONFIG.weaponStatMax,
    );
    weaponGrowthMultipliers[axis] = Number(
      randomFloat(GAME_CONFIG.growthMultiplierMin, GAME_CONFIG.growthMultiplierMax).toFixed(2),
    );
  }
  return { weaponDef, weaponStats, weaponGrowthMultipliers };
}


function rollGenerationTrait() {
  return weightedPick([
    { value: 'standard', weight: 78 },
    { value: 'promising', weight: 12 },
    { value: 'lateBloom', weight: 7 },
    { value: 'eccentric', weight: 3 },
  ]);
}

function averageGrowthForGroup(growthMultipliers, groupKey) {
  const values = Object.values(growthMultipliers[groupKey]);
  return values.reduce((sum, value) => sum + value, 0) / Math.max(1, values.length);
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

function initialAbilities() {
  const abilities = [];
  if (Math.random() < 0.07) abilities.push(pick(NORMAL_POSITIVE_ABILITY_IDS));
  if (Math.random() < 0.045) {
    const negative = pick(NEGATIVE_ABILITY_IDS);
    if (!abilities.includes(negative)) abilities.push(negative);
  }
  return abilities;
}

export function generateRobot({ year, cohortYear = 1, index = 1 } = {}) {
  const manufacturer = pick(MANUFACTURERS);
  const stats = {};
  const growthMultipliers = {};

  for (const groupKey of GROUP_KEYS) {
    const group = STAT_GROUPS[groupKey];
    const groupData = generateGroup();
    stats[groupKey] = {};
    growthMultipliers[groupKey] = {};

    for (const statName of group.stats) {
      const value = clamp(
        Math.round(groupData.base + randomFloat(-13, 13)),
        GAME_CONFIG.statMin,
        GAME_CONFIG.statMax,
      );
      stats[groupKey][statName] = value;
      growthMultipliers[groupKey][statName] = Number(
        randomFloat(GAME_CONFIG.growthMultiplierMin, GAME_CONFIG.growthMultiplierMax).toFixed(2),
      );
    }
  }

  const resistances = Object.fromEntries(
    RESISTANCE_STATS.map((name) => [name, randomInt(35, 90)]),
  );

  const groupAverages = Object.fromEntries(
    GROUP_KEYS.map((groupKey) => {
      const values = Object.values(stats[groupKey]);
      return [groupKey, values.reduce((sum, value) => sum + value, 0) / values.length];
    }),
  );

  const weaponCategoryStats = {};
  const weaponCategoryGrowthMultipliers = {};
  for (const key of WEAPON_KEYS) {
    const generated = generateWeaponData(key);
    weaponCategoryStats[key] = generated.weaponStats;
    weaponCategoryGrowthMultipliers[key] = generated.weaponGrowthMultipliers;
  }
  const generationTrait = rollGenerationTrait();
  const eccentricWeaponKey = applyGenerationTrait(stats, growthMultipliers, weaponCategoryGrowthMultipliers, generationTrait);
  const weaponKey = eccentricWeaponKey ?? pick(WEAPON_KEYS);
  const updatedGroupAverages = Object.fromEntries(GROUP_KEYS.map((groupKey) => {
    const values = Object.values(stats[groupKey]);
    return [groupKey, values.reduce((sum, value) => sum + value, 0) / values.length];
  }));
  const favoriteGroup = [...GROUP_KEYS].sort((a, b) =>
    (updatedGroupAverages[b] + averageGrowthForGroup(growthMultipliers, b) * 12)
    - (updatedGroupAverages[a] + averageGrowthForGroup(growthMultipliers, a) * 12)
  )[0];
  const weaponDef = WEAPON_CATEGORIES[weaponKey];
  const weaponStats = { ...weaponCategoryStats[weaponKey] };
  const weaponGrowthMultipliers = { ...weaponCategoryGrowthMultipliers[weaponKey] };
  const seriesNumber = randomInt(1, 12);
  const seriesNameKana = `${manufacturer.theme}-${String(seriesNumber).padStart(2, '0')}`;
  const seriesNameLatin = `${SERIES_THEME_LATIN[manufacturer.theme] ?? 'SERIES'}-${String(seriesNumber).padStart(2, '0')}`;

  return {
    id: makeRobotId(),
    nickname: '',
    manufacturerId: manufacturer.id,
    manufacturerName: manufacturer.name,
    seriesNumber,
    seriesNameKana,
    seriesNameLatin,
    seriesName: seriesNameKana,
    serial: makeSerial(manufacturer, year, index),
    yearJoined: year - cohortYear + 1,
    cohortYear,
    stats,
    resistances,
    reliability: clamp(randomInt(GAME_CONFIG.reliabilityMin, GAME_CONFIG.reliabilityMax) + (generationTrait === 'eccentric' ? randomInt(-8, 3) : 0), 35, 100),
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
    specialAbilities: initialAbilities(),
    customHistory: [],
    record: { wins: 0, losses: 0 },
  };
}

export function generateCohort({ year, cohortYear, count }) {
  return Array.from({ length: count }, (_, index) =>
    generateRobot({ year, cohortYear, index: index + 1 }),
  );
}

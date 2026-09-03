import { GAME_CONFIG } from '../config.js?v=3.4';
import { MANUFACTURERS } from '../data/manufacturers.js?v=3.4';
import { MANUFACTURER_PART_PROFILES, PART_RARITIES, PART_RARITY_KEYS } from '../data/partDefinitions.js?v=3.4';
import { PART_GRANTABLE_ABILITY_IDS, SPECIAL_ABILITIES } from '../data/specialAbilities.js?v=3.4';
import { GROUP_KEYS, RESISTANCE_STATS, STAT_GROUPS } from '../data/statDefinitions.js?v=3.4';
import { WEAPON_AXES, WEAPON_CATEGORIES } from '../data/weaponDefinitions.js?v=3.4';
import { clamp, pick, randomFloat, randomInt } from '../utils/random.js?v=3.4';

function weightedPick(entries) {
  const total = entries.reduce((sum, [, weight]) => sum + weight, 0);
  let roll = Math.random() * total;
  for (const [value, weight] of entries) {
    roll -= weight;
    if (roll <= 0) return value;
  }
  return entries.at(-1)[0];
}

function partId() {
  if (globalThis.crypto?.randomUUID) return `part-${globalThis.crypto.randomUUID()}`;
  return `part-${Date.now()}-${randomInt(100000, 999999)}`;
}

function chooseRarity(forcedRarity, rarityBias = 0) {
  if (forcedRarity && PART_RARITIES[forcedRarity]) return forcedRarity;
  const ordered = PART_RARITY_KEYS;
  return weightedPick(ordered.map((key, index) => {
    const base = PART_RARITIES[key].weight;
    const highTierBoost = 1 + Math.max(0, index - 1) * rarityBias * 0.22;
    const lowTierPenalty = index <= 1 ? Math.max(0.35, 1 - rarityBias * 0.16) : 1;
    return [key, base * highTierBoost * lowTierPenalty];
  }));
}

function targetPool(manufacturerId) {
  const profile = MANUFACTURER_PART_PROFILES[manufacturerId] ?? { groups: [], weapons: [] };
  const pool = [];

  for (const groupKey of GROUP_KEYS) {
    for (const statName of STAT_GROUPS[groupKey].stats) {
      const focused = profile.groups.includes(groupKey);
      pool.push({ kind: 'base', groupKey, statName, label: statName, weight: focused ? 6 : 1 });
    }
  }

  for (const [weaponKey, weapon] of Object.entries(WEAPON_CATEGORIES)) {
    for (const axis of WEAPON_AXES) {
      const focused = profile.weapons.includes(weaponKey);
      pool.push({ kind: 'weapon', weaponKey, axis, label: `${weapon.label}：${weapon.stats[axis]}`, weight: focused ? 5 : 0.65 });
    }
  }

  for (const resistance of RESISTANCE_STATS) {
    pool.push({ kind: 'resistance', resistance, label: resistance, weight: 0.55 });
  }
  pool.push({ kind: 'reliability', label: '信頼性', weight: 0.4 });
  return pool;
}

function pickTarget(pool, usedKeys) {
  const candidates = pool.filter((target) => {
    const key = targetKey(target);
    return !usedKeys.has(key);
  });
  if (!candidates.length) return null;
  const chosen = weightedPick(candidates.map((target) => [target, target.weight]));
  usedKeys.add(targetKey(chosen));
  return { ...chosen };
}

function targetKey(target) {
  if (target.kind === 'base') return `base:${target.groupKey}:${target.statName}`;
  if (target.kind === 'weapon') return `weapon:${target.weaponKey}:${target.axis}`;
  if (target.kind === 'resistance') return `resistance:${target.resistance}`;
  return 'reliability';
}

function suggestedAbilities(effects, manufacturerId) {
  const tags = new Set();
  const profile = MANUFACTURER_PART_PROFILES[manufacturerId] ?? { groups: [], weapons: [] };
  for (const effect of effects) {
    if (effect.kind === 'base') tags.add(effect.groupKey);
    if (effect.kind === 'weapon') {
      tags.add(effect.weaponKey);
      const weapon = WEAPON_CATEGORIES[effect.weaponKey];
      if (weapon?.range === '遠距離') tags.add('ranged');
      if (weapon?.type === 'エネルギー') tags.add('energy');
      if (effect.axis === 'accuracy') tags.add('accuracy');
    }
    if (effect.kind === 'resistance') tags.add('resistance');
    if (effect.kind === 'reliability') tags.add('reliability');
  }
  profile.groups.forEach((tag) => tags.add(tag));
  profile.weapons.forEach((tag) => tags.add(tag));

  const weighted = PART_GRANTABLE_ABILITY_IDS.map((id) => {
    const ability = SPECIAL_ABILITIES[id];
    const overlap = ability.tags.filter((tag) => tags.has(tag)).length;
    return [id, 1 + overlap * 5];
  });
  return weightedPick(weighted);
}

function partCode(manufacturerId, challenge) {
  const prefix = manufacturerId.slice(0, 3).toUpperCase();
  return `${challenge ? 'EX' : 'CP'}-${prefix}-${randomInt(10, 99)}`;
}

export function generateCustomPart({ manufacturerId = null, rarityKey = null, challenge = null, rarityBias = 0, forceAbility = false } = {}) {
  const manufacturer = manufacturerId
    ? MANUFACTURERS.find((item) => item.id === manufacturerId) ?? pick(MANUFACTURERS)
    : pick(MANUFACTURERS);
  const rarityId = chooseRarity(rarityKey, rarityBias);
  const rarity = PART_RARITIES[rarityId];
  const isChallenge = challenge ?? (Math.random() < GAME_CONFIG.challengePartChance);
  const count = randomInt(rarity.itemCount[0], rarity.itemCount[1]);
  const pool = targetPool(manufacturer.id);
  const used = new Set();
  const effects = [];

  for (let index = 0; index < count; index += 1) {
    const target = pickTarget(pool, used);
    if (!target) break;
    let amount = randomInt(rarity.amount[0], rarity.amount[1]);
    if (isChallenge) amount = Math.max(amount + 1, Math.round(amount * GAME_CONFIG.challengePartPositiveMultiplier));
    effects.push({ ...target, amount });
  }

  const negatives = [];
  if (isChallenge) {
    const negativeCount = randomInt(1, rarityId === 'elite' || rarityId === 'bespoke' ? 3 : 2);
    for (let index = 0; index < negativeCount; index += 1) {
      const target = pickTarget(pool, used);
      if (!target) break;
      negatives.push({ ...target, amount: -randomInt(3, 8) });
    }
  }

  const abilityChance = clamp(
    rarity.abilityChance + (isChallenge ? GAME_CONFIG.challengePartAbilityBonus : 0),
    0,
    0.85,
  );
  const abilityId = (forceAbility || Math.random() < abilityChance) ? suggestedAbilities(effects, manufacturer.id) : null;

  return {
    id: partId(),
    manufacturerId: manufacturer.id,
    manufacturerName: manufacturer.name,
    rarityId,
    rarityLabel: rarity.label,
    challenge: isChallenge,
    name: `${manufacturer.name} ${isChallenge ? '挑戦的試供品' : 'カスタムパーツ'}：${partCode(manufacturer.id, isChallenge)}`,
    effects,
    negatives,
    abilityId,
  };
}

function effectivePartAmount(robot, part, effect) {
  const aptitude = robot.seriesCustomAptitude ?? {};
  const positive = Number(effect.amount) >= 0;
  let mult = positive ? Number(aptitude.positive ?? 1) : Number(aptitude.negative ?? 1);
  if (part?.manufacturerId && part.manufacturerId === robot.manufacturerId) mult *= Number(aptitude.sameMaker ?? 1);
  if (part?.challenge) mult *= positive ? Number(aptitude.challengePositive ?? 1) : Number(aptitude.challengeNegative ?? 1);
  mult *= Number(aptitude.kind?.[effect.kind] ?? 1);
  if (effect.kind === 'base') mult *= Number(aptitude.groups?.[effect.groupKey] ?? 1);
  mult *= Number(robot.seriesIntrinsicTrait?.custom ?? 1);
  const scaled = Number(effect.amount) * mult;
  if (!scaled) return 0;
  // v3.4: keep one decimal place so a 8-15% series aptitude is not erased by integer rounding
  // on common +2/+3/+4 parts. This makes every aptitude meaningfully observable.
  const rounded = Math.round(scaled * 10) / 10;
  if (rounded !== 0) return rounded;
  return scaled > 0 ? 0.1 : -0.1;
}

export function adjustedCustomPartEffects(robot, part) {
  return [...(part?.effects ?? []), ...(part?.negatives ?? [])]
    .map((effect) => ({ ...effect, amount: effectivePartAmount(robot, part, effect) }));
}

function applyEffect(robot, effect) {
  if (effect.kind === 'base') {
    robot.stats[effect.groupKey][effect.statName] = clamp(
      robot.stats[effect.groupKey][effect.statName] + effect.amount,
      GAME_CONFIG.statMin,
      GAME_CONFIG.customPartStatCap,
    );
    return;
  }
  if (effect.kind === 'weapon') {
    // パーツは武器カテゴリ固有値を直接改造する。現在装備と異なるカテゴリも将来用データとして保持。
    robot.weaponCategoryStats ??= {};
    robot.weaponCategoryStats[effect.weaponKey] ??= {};
    const current = robot.weaponCategoryStats[effect.weaponKey][effect.axis]
      ?? (robot.weaponKey === effect.weaponKey ? robot.weaponStats[effect.axis] : 50);
    const next = clamp(current + effect.amount, GAME_CONFIG.weaponStatMin, GAME_CONFIG.customPartStatCap);
    robot.weaponCategoryStats[effect.weaponKey][effect.axis] = next;
    if (robot.weaponKey === effect.weaponKey) robot.weaponStats[effect.axis] = next;
    return;
  }
  if (effect.kind === 'resistance') {
    robot.resistances[effect.resistance] = clamp(robot.resistances[effect.resistance] + effect.amount, 0, 150);
    return;
  }
  if (effect.kind === 'reliability') {
    robot.reliability = clamp(robot.reliability + effect.amount, 20, 100);
  }
}

export function useCustomPart(robot, part) {
  const appliedEffects = adjustedCustomPartEffects(robot, part);
  for (const effect of appliedEffects) applyEffect(robot, effect);
  robot.specialAbilities ??= [];
  let gainedAbility = null;
  if (part.abilityId && !robot.specialAbilities.includes(part.abilityId)) {
    robot.specialAbilities.push(part.abilityId);
    gainedAbility = part.abilityId;
  }
  robot.customHistory ??= [];
  robot.customHistory.push({
    partName: part.name,
    effects: appliedEffects.map((effect) => ({ ...effect })),
    abilityId: gainedAbility,
  });
  return { gainedAbility };
}


export function generateMemorialPart(robot) {
  const wins = robot.record?.wins ?? 0;
  const losses = robot.record?.losses ?? 0;
  const positiveAbilities = (robot.specialAbilities ?? []).filter((id) => SPECIAL_ABILITIES[id]?.polarity === 'positive');
  const rarityKey = wins >= 20 || positiveAbilities.length >= 6 ? 'bespoke' : wins >= 10 || positiveAbilities.length >= 3 ? 'elite' : 'high';
  const part = generateCustomPart({
    manufacturerId: robot.manufacturerId,
    rarityKey,
    challenge: false,
    forceAbility: true,
  });
  const bonus = randomInt(GAME_CONFIG.retirementMemorialBonusMin, GAME_CONFIG.retirementMemorialBonusMax);
  part.effects = part.effects.map((effect) => ({ ...effect, amount: effect.amount + bonus }));
  if (positiveAbilities.length) part.abilityId = pick(positiveAbilities);
  part.name = robot.nickname
    ? `${robot.manufacturerName} 特注記念パーツ：「${robot.nickname}」`
    : `${robot.manufacturerName} 特注記念パーツ：${robot.seriesName}-${robot.serial}`;
  part.memorial = true;
  part.sourceRobot = {
    id: robot.id,
    nickname: robot.nickname ?? '',
    manufacturerName: robot.manufacturerName,
    seriesName: robot.seriesName,
    serial: robot.serial,
    wins,
    losses,
  };
  return part;
}

export function generateInitialPartInventory(count = 10) {
  return Array.from({ length: count }, () => generateCustomPart());
}

export function maybeGeneratePartSupply() {
  if (Math.random() >= GAME_CONFIG.partSupplyEventChance) return [];
  const amount = Math.random() < 0.12 ? randomInt(2, 4) : 1;
  return Array.from({ length: amount }, () => generateCustomPart());
}

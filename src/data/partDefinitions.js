export const PART_RARITIES = {
  common: { id: 'common', label: '一般', itemCount: [1, 2], amount: [2, 6], abilityChance: 0.02, weight: 42 },
  good: { id: 'good', label: '良質', itemCount: [2, 3], amount: [3, 8], abilityChance: 0.06, weight: 28 },
  high: { id: 'high', label: '高級', itemCount: [3, 5], amount: [4, 10], abilityChance: 0.12, weight: 18 },
  elite: { id: 'elite', label: '特級', itemCount: [5, 7], amount: [5, 12], abilityChance: 0.25, weight: 9 },
  bespoke: { id: 'bespoke', label: '特注', itemCount: [6, 9], amount: [6, 15], abilityChance: 0.50, weight: 3 },
};

export const PART_RARITY_KEYS = Object.keys(PART_RARITIES);

// シリーズ性能とは別枠の「カスタム部門が得意とする加工領域」。
export const MANUFACTURER_PART_PROFILES = {
  kirishima: { groups: ['control', 'engine'], weapons: ['cannon', 'beamCannon'] },
  mizuho: { groups: ['ai', 'sensor'], weapons: ['rifle', 'drone'] },
  gogaku: { groups: ['output', 'control'], weapons: ['hammer', 'cannon'] },
  yashima: { groups: ['engine', 'mobility'], weapons: ['machineGun', 'missile'] },
  hokushin: { groups: ['control', 'sensor'], weapons: ['rifle', 'laser'] },
  shinonome: { groups: ['compute', 'sensor'], weapons: ['laser', 'emp'] },
  amagi: { groups: ['mobility', 'control'], weapons: ['blade', 'lance'] },
  kamishiro: { groups: ['compute', 'ai'], weapons: ['beamBlade', 'beamCannon'] },
  lancaster: { groups: ['control', 'ai'], weapons: ['rifle', 'blade'] },
  steinwald: { groups: ['output', 'engine'], weapons: ['cannon', 'hammer'] },
  cromwell: { groups: ['control', 'compute'], weapons: ['missile', 'laser'] },
  rhenium: { groups: ['output', 'control'], weapons: ['lance', 'beamBlade'] },
  hawthorne: { groups: ['ai', 'mobility'], weapons: ['drone', 'blade'] },
  arcadia: { groups: ['output', 'compute'], weapons: ['beamCannon', 'emp'] },
  solberg: { groups: ['compute', 'sensor'], weapons: ['laser', 'missile'] },
  grayson: { groups: ['engine', 'control'], weapons: ['machineGun', 'cannon'] },
  laplace: { groups: ['compute', 'ai'], weapons: ['missile', 'emp'] },
  bureau13: { groups: ['output', 'engine'], weapons: ['hammer', 'beamCannon'] },
  eidolon: { groups: ['mobility', 'ai'], weapons: ['blade', 'drone'] },
  logos: { groups: ['sensor', 'compute'], weapons: ['beamBlade', 'laser'] },
};

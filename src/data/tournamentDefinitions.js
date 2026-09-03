export const TOURNAMENTS = {
  early: {
    id: 'early',
    name: '前期選手権',
    shortName: '前期',
    availableTurn: 6,
    availableRatio: 0.20,
    description: '新年度最初の公式大会。新人を試しつつ、早い段階で世代の手応えを測る大会。',
    rounds: [
      { name: '地区1回戦', difficulty: -2, prestige: 1, rewardRarity: 'good' },
      { name: '地区準決勝', difficulty: 1, prestige: 2, rewardRarity: 'good' },
      { name: '地区決勝', difficulty: 4, prestige: 3, rewardRarity: 'high' },
    ],
    championRewardRarity: 'elite',
  },
  summer: {
    id: 'summer',
    name: '夏季全国選手権',
    shortName: '夏季',
    availableTurn: 14,
    availableRatio: 0.47,
    description: '年間最大規模の大会。全国へ進むほど強豪が増え、報酬も大きくなる。',
    rounds: [
      { name: '地域1回戦', difficulty: 0, prestige: 2, rewardRarity: 'good' },
      { name: '地域決勝', difficulty: 3, prestige: 3, rewardRarity: 'high' },
      { name: '全国1回戦', difficulty: 5, prestige: 4, rewardRarity: 'high' },
      { name: '全国準決勝', difficulty: 7, prestige: 5, rewardRarity: 'elite' },
      { name: '全国決勝', difficulty: 9, prestige: 6, rewardRarity: 'elite' },
    ],
    championRewardRarity: 'bespoke',
  },
  late: {
    id: 'late',
    name: '後期選手権',
    shortName: '後期',
    availableTurn: 23,
    availableRatio: 0.77,
    description: '年度終盤の公式大会。3年目機にとって最後の大舞台になりやすい。',
    rounds: [
      { name: 'ブロック1回戦', difficulty: 1, prestige: 2, rewardRarity: 'good' },
      { name: 'ブロック決勝', difficulty: 4, prestige: 3, rewardRarity: 'high' },
      { name: '全国準決勝', difficulty: 7, prestige: 5, rewardRarity: 'elite' },
      { name: '全国決勝', difficulty: 10, prestige: 6, rewardRarity: 'elite' },
    ],
    championRewardRarity: 'bespoke',
  },
};

export const TOURNAMENT_IDS = Object.keys(TOURNAMENTS);

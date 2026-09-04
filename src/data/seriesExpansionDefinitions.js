// v2.8 expanded formal series catalog: 20 manufacturers x 20 additional series = 400 new series.
// These entries are deliberately more extreme and concept-driven than the original catalog.

export const EXPANDED_SERIES_DEFINITIONS = [
  {
    "id": "kirishima-fuji",
    "manufacturerId": "kirishima",
    "seriesNumber": 21,
    "nameKana": "フジ",
    "nameLatin": "FUJI",
    "archetypeId": "apex",
    "concept": "最高峰を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kirishima-myoko",
    "manufacturerId": "kirishima",
    "seriesNumber": 22,
    "nameKana": "ミョウコウ",
    "nameLatin": "MYOKO",
    "archetypeId": "glassCannon",
    "concept": "噴火峰を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "kirishima-norikura",
    "manufacturerId": "kirishima",
    "seriesNumber": 23,
    "nameKana": "ノリクラ",
    "nameLatin": "NORIKURA",
    "archetypeId": "ultraMobile",
    "concept": "長い稜線を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 6
    },
    "weaponGrowthAdjustments": {
      "lance": 0.07
    },
    "preferredWeapons": [
      "lance"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "kirishima-tsurugi",
    "manufacturerId": "kirishima",
    "seriesNumber": 24,
    "nameKana": "ツルギ",
    "nameLatin": "TSURUGI",
    "archetypeId": "fortress",
    "concept": "岩峰を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "kirishima-gassan",
    "manufacturerId": "kirishima",
    "seriesNumber": 25,
    "nameKana": "ガッサン",
    "nameLatin": "GASSAN",
    "archetypeId": "precision",
    "concept": "雪山を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kirishima-yakushi",
    "manufacturerId": "kirishima",
    "seriesNumber": 26,
    "nameKana": "ヤクシ",
    "nameLatin": "YAKUSHI",
    "archetypeId": "lateGrowth",
    "concept": "薬師の名が示す調整余地を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1.12,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kirishima-tanigawa",
    "manufacturerId": "kirishima",
    "seriesNumber": 27,
    "nameKana": "タニガワ",
    "nameLatin": "TANIGAWA",
    "archetypeId": "volatileExperimental",
    "concept": "険しい谷を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "kirishima-yatsugatake",
    "manufacturerId": "kirishima",
    "seriesNumber": 28,
    "nameKana": "ヤツガタケ",
    "nameLatin": "YATSUGATAKE",
    "archetypeId": "hybridClose",
    "concept": "連峰を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "blade": 6
    },
    "weaponGrowthAdjustments": {
      "blade": 0.07
    },
    "preferredWeapons": [
      "blade"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kirishima-rishiri",
    "manufacturerId": "kirishima",
    "seriesNumber": 29,
    "nameKana": "リシリ",
    "nameLatin": "RISHIRI",
    "archetypeId": "hybridRanged",
    "concept": "孤島峰を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kirishima-nantai",
    "manufacturerId": "kirishima",
    "seriesNumber": 30,
    "nameKana": "ナンタイ",
    "nameLatin": "NANTAI",
    "archetypeId": "electronicWarfare",
    "concept": "霊峰を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 9,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kirishima-akagi",
    "manufacturerId": "kirishima",
    "seriesNumber": 31,
    "nameKana": "アカギ",
    "nameLatin": "AKAGI",
    "archetypeId": "weaponSavant",
    "concept": "火山群を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "kirishima-haruna",
    "manufacturerId": "kirishima",
    "seriesNumber": 32,
    "nameKana": "ハルナ",
    "nameLatin": "HARUNA",
    "archetypeId": "weaponSavant",
    "concept": "二峰の対照を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "kirishima-kinpu",
    "manufacturerId": "kirishima",
    "seriesNumber": 33,
    "nameKana": "キンプ",
    "nameLatin": "KINPU",
    "archetypeId": "countermeasure",
    "concept": "金峰の硬質感を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kirishima-kumotori",
    "manufacturerId": "kirishima",
    "seriesNumber": 34,
    "nameKana": "クモトリ",
    "nameLatin": "KUMOTORI",
    "archetypeId": "reliable",
    "concept": "雲を抜く高所を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kirishima-daisetsu",
    "manufacturerId": "kirishima",
    "seriesNumber": 35,
    "nameKana": "ダイセツ",
    "nameLatin": "DAISETSU",
    "archetypeId": "burstAssault",
    "concept": "大雪山の極寒を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "kirishima-amakazari",
    "manufacturerId": "kirishima",
    "seriesNumber": 36,
    "nameKana": "アマカザリ",
    "nameLatin": "AMAKAZARI",
    "archetypeId": "adaptive",
    "concept": "鋭い山容を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kirishima-kasagatake",
    "manufacturerId": "kirishima",
    "seriesNumber": 37,
    "nameKana": "カサガタケ",
    "nameLatin": "KASAGATAKE",
    "archetypeId": "dataGlass",
    "concept": "笠のような荷重分散を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "kirishima-aino",
    "manufacturerId": "kirishima",
    "seriesNumber": 38,
    "nameKana": "アイノ",
    "nameLatin": "AINO",
    "archetypeId": "overengineered",
    "concept": "主峰を支える縦走を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kirishima-shiretoko",
    "manufacturerId": "kirishima",
    "seriesNumber": 39,
    "nameKana": "シレトコ",
    "nameLatin": "SHIRETOKO",
    "archetypeId": "minimalist",
    "concept": "複雑な山系を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kirishima-iide",
    "manufacturerId": "kirishima",
    "seriesNumber": 40,
    "nameKana": "イイデ",
    "nameLatin": "IIDE",
    "archetypeId": "volatileExperimental",
    "concept": "長大な山塊を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。霧島重工らしく、用途を明確に限定してでも実機で再現できる完成度へ落とし込む。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.15,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.62
  },
  {
    "id": "mizuho-himawari",
    "manufacturerId": "mizuho",
    "seriesNumber": 21,
    "nameKana": "ヒマワリ",
    "nameLatin": "HIMAWARI",
    "archetypeId": "apex",
    "concept": "太陽を追う花を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "mizuho-fuji",
    "manufacturerId": "mizuho",
    "seriesNumber": 22,
    "nameKana": "フジ",
    "nameLatin": "FUJI",
    "archetypeId": "glassCannon",
    "concept": "蔓が絡む柔軟さを設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "mizuho-tanpopo",
    "manufacturerId": "mizuho",
    "seriesNumber": 23,
    "nameKana": "タンポポ",
    "nameLatin": "TANPOPO",
    "archetypeId": "ultraMobile",
    "concept": "種を広く飛ばす繁殖性を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "drone": 6
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "mizuho-ibara",
    "manufacturerId": "mizuho",
    "seriesNumber": 24,
    "nameKana": "イバラ",
    "nameLatin": "IBARA",
    "archetypeId": "fortress",
    "concept": "棘を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "blade": 6
    },
    "weaponGrowthAdjustments": {
      "blade": 0.07
    },
    "preferredWeapons": [
      "blade"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "mizuho-yugao",
    "manufacturerId": "mizuho",
    "seriesNumber": 25,
    "nameKana": "ユウガオ",
    "nameLatin": "YUGAO",
    "archetypeId": "precision",
    "concept": "夜に開く花を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "mizuho-kinmokusei",
    "manufacturerId": "mizuho",
    "seriesNumber": 26,
    "nameKana": "キンモクセイ",
    "nameLatin": "KINMOKUSEI",
    "archetypeId": "lateGrowth",
    "concept": "香りで存在を知らせる花を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1.12,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "mizuho-mokuren",
    "manufacturerId": "mizuho",
    "seriesNumber": 27,
    "nameKana": "モクレン",
    "nameLatin": "MOKUREN",
    "archetypeId": "volatileExperimental",
    "concept": "厚い花弁を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "mizuho-suisen",
    "manufacturerId": "mizuho",
    "seriesNumber": 28,
    "nameKana": "スイセン",
    "nameLatin": "SUISEN",
    "archetypeId": "hybridClose",
    "concept": "球根で次期へ備える花を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "machineGun": 6
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.07
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "mizuho-tsuyukusa",
    "manufacturerId": "mizuho",
    "seriesNumber": 29,
    "nameKana": "ツユクサ",
    "nameLatin": "TSUYUKUSA",
    "archetypeId": "hybridRanged",
    "concept": "朝露に強い草花を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "mizuho-hotarubukuro",
    "manufacturerId": "mizuho",
    "seriesNumber": 30,
    "nameKana": "ホタルブクロ",
    "nameLatin": "HOTARUBUKURO",
    "archetypeId": "electronicWarfare",
    "concept": "袋状の花を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 9,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "mizuho-sakuraso",
    "manufacturerId": "mizuho",
    "seriesNumber": 31,
    "nameKana": "サクラソウ",
    "nameLatin": "SAKURASO",
    "archetypeId": "weaponSavant",
    "concept": "小さく群生する花を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "mizuho-hanamizuki",
    "manufacturerId": "mizuho",
    "seriesNumber": 32,
    "nameKana": "ハナミズキ",
    "nameLatin": "HANAMIZUKI",
    "archetypeId": "weaponSavant",
    "concept": "街路でも耐える花木を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "mizuho-cosmos",
    "manufacturerId": "mizuho",
    "seriesNumber": 33,
    "nameKana": "コスモス",
    "nameLatin": "COSMOS",
    "archetypeId": "countermeasure",
    "concept": "一斉開花を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "mizuho-kuchinashi",
    "manufacturerId": "mizuho",
    "seriesNumber": 34,
    "nameKana": "クチナシ",
    "nameLatin": "KUCHINASHI",
    "archetypeId": "reliable",
    "concept": "香りは強いが実は地味を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "mizuho-suzuran",
    "manufacturerId": "mizuho",
    "seriesNumber": 35,
    "nameKana": "スズラン",
    "nameLatin": "SUZURAN",
    "archetypeId": "burstAssault",
    "concept": "小型で耐寒性の高い花を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "mizuho-shibazakura",
    "manufacturerId": "mizuho",
    "seriesNumber": 36,
    "nameKana": "シバザクラ",
    "nameLatin": "SHIBAZAKURA",
    "archetypeId": "adaptive",
    "concept": "面で広がる花を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "mizuho-renge",
    "manufacturerId": "mizuho",
    "seriesNumber": 37,
    "nameKana": "レンゲ",
    "nameLatin": "RENGE",
    "archetypeId": "dataGlass",
    "concept": "根を広げて群生する花を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "mizuho-cattleya",
    "manufacturerId": "mizuho",
    "seriesNumber": 38,
    "nameKana": "カトレア",
    "nameLatin": "CATTLEYA",
    "archetypeId": "overengineered",
    "concept": "大輪の高級花を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "mizuho-geranium",
    "manufacturerId": "mizuho",
    "seriesNumber": 39,
    "nameKana": "ゼラニウム",
    "nameLatin": "GERANIUM",
    "archetypeId": "minimalist",
    "concept": "環境適応力の高い園芸種を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "machineGun": 6
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.07
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "mizuho-azami",
    "manufacturerId": "mizuho",
    "seriesNumber": 40,
    "nameKana": "アザミ",
    "nameLatin": "AZAMI",
    "archetypeId": "volatileExperimental",
    "concept": "棘と耐寒性を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。瑞穂産業らしく、現場の運用データで弱点を修正し続けることを前提にしている。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.15,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.62
  },
  {
    "id": "gogaku-magnetite",
    "manufacturerId": "gogaku",
    "seriesNumber": 21,
    "nameKana": "ジテッコウ",
    "nameLatin": "MAGNETITE",
    "archetypeId": "apex",
    "concept": "磁性を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "gogaku-hematite",
    "manufacturerId": "gogaku",
    "seriesNumber": 22,
    "nameKana": "セキテッコウ",
    "nameLatin": "HEMATITE",
    "archetypeId": "glassCannon",
    "concept": "高密度の鉄鉱を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "gogaku-pyrite",
    "manufacturerId": "gogaku",
    "seriesNumber": 23,
    "nameKana": "オウテッコウ",
    "nameLatin": "PYRITE",
    "archetypeId": "ultraMobile",
    "concept": "硫化鉱の鋭い結晶を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "lance": 6
    },
    "weaponGrowthAdjustments": {
      "lance": 0.07
    },
    "preferredWeapons": [
      "lance"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "gogaku-fluorite",
    "manufacturerId": "gogaku",
    "seriesNumber": 24,
    "nameKana": "ホタルイシ",
    "nameLatin": "FLUORITE",
    "archetypeId": "fortress",
    "concept": "蛍光を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "gogaku-calcite",
    "manufacturerId": "gogaku",
    "seriesNumber": 25,
    "nameKana": "ホウカイセキ",
    "nameLatin": "CALCITE",
    "archetypeId": "precision",
    "concept": "割れやすい結晶を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "gogaku-feldspar",
    "manufacturerId": "gogaku",
    "seriesNumber": 26,
    "nameKana": "チョウセキ",
    "nameLatin": "FELDSPAR",
    "archetypeId": "lateGrowth",
    "concept": "結晶格子を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1.12,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "gogaku-bismuth",
    "manufacturerId": "gogaku",
    "seriesNumber": 27,
    "nameKana": "ビスマス",
    "nameLatin": "BISMUTH",
    "archetypeId": "volatileExperimental",
    "concept": "低融点金属を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "gogaku-tungsten",
    "manufacturerId": "gogaku",
    "seriesNumber": 28,
    "nameKana": "タングステン",
    "nameLatin": "TUNGSTEN",
    "archetypeId": "hybridClose",
    "concept": "超高融点を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "blade": 6
    },
    "weaponGrowthAdjustments": {
      "blade": 0.07
    },
    "preferredWeapons": [
      "blade"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "gogaku-titanium",
    "manufacturerId": "gogaku",
    "seriesNumber": 29,
    "nameKana": "チタン",
    "nameLatin": "TITANIUM",
    "archetypeId": "hybridRanged",
    "concept": "比強度を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "beamCannon": 6
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.07
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "gogaku-platinum",
    "manufacturerId": "gogaku",
    "seriesNumber": 30,
    "nameKana": "ハクキン",
    "nameLatin": "PLATINUM",
    "archetypeId": "electronicWarfare",
    "concept": "腐食しにくさを設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 9,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "gogaku-gold",
    "manufacturerId": "gogaku",
    "seriesNumber": 31,
    "nameKana": "キン",
    "nameLatin": "GOLD",
    "archetypeId": "weaponSavant",
    "concept": "展延性を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "gogaku-silver",
    "manufacturerId": "gogaku",
    "seriesNumber": 32,
    "nameKana": "ギン",
    "nameLatin": "SILVER",
    "archetypeId": "weaponSavant",
    "concept": "導電性を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "gogaku-copper",
    "manufacturerId": "gogaku",
    "seriesNumber": 33,
    "nameKana": "ドウ",
    "nameLatin": "COPPER",
    "archetypeId": "countermeasure",
    "concept": "熱伝導を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "gogaku-cobalt",
    "manufacturerId": "gogaku",
    "seriesNumber": 34,
    "nameKana": "コバルト",
    "nameLatin": "COBALT",
    "archetypeId": "reliable",
    "concept": "耐熱合金を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "gogaku-nickel",
    "manufacturerId": "gogaku",
    "seriesNumber": 35,
    "nameKana": "ニッケル",
    "nameLatin": "NICKEL",
    "archetypeId": "burstAssault",
    "concept": "耐食合金を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "gogaku-chromium",
    "manufacturerId": "gogaku",
    "seriesNumber": 36,
    "nameKana": "クロム",
    "nameLatin": "CHROMIUM",
    "archetypeId": "adaptive",
    "concept": "表面硬化を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "gogaku-molybdenum",
    "manufacturerId": "gogaku",
    "seriesNumber": 37,
    "nameKana": "モリブデン",
    "nameLatin": "MOLYBDENUM",
    "archetypeId": "dataGlass",
    "concept": "高温強度を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "drone": 6
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "gogaku-lithium",
    "manufacturerId": "gogaku",
    "seriesNumber": 38,
    "nameKana": "リチウム",
    "nameLatin": "LITHIUM",
    "archetypeId": "overengineered",
    "concept": "軽元素の反応性を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "beamCannon": 6
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.07
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "gogaku-uranium",
    "manufacturerId": "gogaku",
    "seriesNumber": 39,
    "nameKana": "ウラン",
    "nameLatin": "URANIUM",
    "archetypeId": "minimalist",
    "concept": "高エネルギー密度を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "gogaku-manganese",
    "manufacturerId": "gogaku",
    "seriesNumber": 40,
    "nameKana": "マンガン",
    "nameLatin": "MANGANESE",
    "archetypeId": "volatileExperimental",
    "concept": "合金添加による粘りを設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。剛岳工廠らしく、必要値を超える「余裕」を特定分野へ大胆に集中させる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.15,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.62
  },
  {
    "id": "yashima-tatsumaki",
    "manufacturerId": "yashima",
    "seriesNumber": 21,
    "nameKana": "タツマキ",
    "nameLatin": "TATSUMAKI",
    "archetypeId": "apex",
    "concept": "竜巻を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "yashima-sekiu",
    "manufacturerId": "yashima",
    "seriesNumber": 22,
    "nameKana": "セキウ",
    "nameLatin": "SEKIU",
    "archetypeId": "glassCannon",
    "concept": "積乱雲の豪雨を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "yashima-raiu",
    "manufacturerId": "yashima",
    "seriesNumber": 23,
    "nameKana": "ライウ",
    "nameLatin": "RAIU",
    "archetypeId": "ultraMobile",
    "concept": "雷雨を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "machineGun": 6
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.07
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "yashima-gekiu",
    "manufacturerId": "yashima",
    "seriesNumber": 24,
    "nameKana": "ゲキウ",
    "nameLatin": "GEKIU",
    "archetypeId": "fortress",
    "concept": "局地的な激しい雨を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "yashima-hyou",
    "manufacturerId": "yashima",
    "seriesNumber": 25,
    "nameKana": "ヒョウ",
    "nameLatin": "HYOU",
    "archetypeId": "precision",
    "concept": "雹を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "yashima-yukikaze",
    "manufacturerId": "yashima",
    "seriesNumber": 26,
    "nameKana": "ユキカゼ",
    "nameLatin": "YUKIKAZE",
    "archetypeId": "lateGrowth",
    "concept": "雪を伴う風を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1.12,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "yashima-shinkiro",
    "manufacturerId": "yashima",
    "seriesNumber": 27,
    "nameKana": "シンキロウ",
    "nameLatin": "SHINKIRO",
    "archetypeId": "volatileExperimental",
    "concept": "蜃気楼を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "yashima-unkai",
    "manufacturerId": "yashima",
    "seriesNumber": 28,
    "nameKana": "ウンカイ",
    "nameLatin": "UNKAI",
    "archetypeId": "hybridClose",
    "concept": "雲海を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "drone": 6
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "yashima-amagumo",
    "manufacturerId": "yashima",
    "seriesNumber": 29,
    "nameKana": "アマグモ",
    "nameLatin": "AMAGUMO",
    "archetypeId": "hybridRanged",
    "concept": "厚い雨雲を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "yashima-tsumuji",
    "manufacturerId": "yashima",
    "seriesNumber": 30,
    "nameKana": "ツムジ",
    "nameLatin": "TSUMUJI",
    "archetypeId": "electronicWarfare",
    "concept": "小規模旋風を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 9,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "yashima-sunaarashi",
    "manufacturerId": "yashima",
    "seriesNumber": 31,
    "nameKana": "スナアラシ",
    "nameLatin": "SUNAARASHI",
    "archetypeId": "weaponSavant",
    "concept": "砂嵐を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "yashima-downburst",
    "manufacturerId": "yashima",
    "seriesNumber": 32,
    "nameKana": "ダウンバースト",
    "nameLatin": "DOWNBURST",
    "archetypeId": "weaponSavant",
    "concept": "下降気流を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "yashima-halo",
    "manufacturerId": "yashima",
    "seriesNumber": 33,
    "nameKana": "ハロ",
    "nameLatin": "HALO",
    "archetypeId": "countermeasure",
    "concept": "光輪を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "yashima-aurora",
    "manufacturerId": "yashima",
    "seriesNumber": 34,
    "nameKana": "オーロラ",
    "nameLatin": "AURORA",
    "archetypeId": "reliable",
    "concept": "極光を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "yashima-shike",
    "manufacturerId": "yashima",
    "seriesNumber": 35,
    "nameKana": "シケ",
    "nameLatin": "SHIKE",
    "archetypeId": "burstAssault",
    "concept": "荒天の海を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "yashima-uneri",
    "manufacturerId": "yashima",
    "seriesNumber": 36,
    "nameKana": "ウネリ",
    "nameLatin": "UNERI",
    "archetypeId": "adaptive",
    "concept": "長周期のうねりを設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "yashima-kaimu",
    "manufacturerId": "yashima",
    "seriesNumber": 37,
    "nameKana": "カイム",
    "nameLatin": "KAIMU",
    "archetypeId": "dataGlass",
    "concept": "海霧を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "yashima-hourai",
    "manufacturerId": "yashima",
    "seriesNumber": 38,
    "nameKana": "ホウライ",
    "nameLatin": "HOURAI",
    "archetypeId": "overengineered",
    "concept": "蓬莱の変転する気象を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "yashima-kanpa",
    "manufacturerId": "yashima",
    "seriesNumber": 39,
    "nameKana": "カンパ",
    "nameLatin": "KANPA",
    "archetypeId": "minimalist",
    "concept": "寒波を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "yashima-foehn",
    "manufacturerId": "yashima",
    "seriesNumber": 40,
    "nameKana": "フェーン",
    "nameLatin": "FOEHN",
    "archetypeId": "volatileExperimental",
    "concept": "山越えの乾燥風を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。八洲重機らしく、主目的が崩れた時にも最低限の戦力を残す冗長性を持つ。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.15,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.62
  },
  {
    "id": "hokushin-polaris-ii",
    "manufacturerId": "hokushin",
    "seriesNumber": 21,
    "nameKana": "ポラリスII",
    "nameLatin": "POLARIS-II",
    "archetypeId": "apex",
    "concept": "基準星を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hokushin-nova",
    "manufacturerId": "hokushin",
    "seriesNumber": 22,
    "nameKana": "ノヴァ",
    "nameLatin": "NOVA",
    "archetypeId": "glassCannon",
    "concept": "新星爆発を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "hokushin-pulsar",
    "manufacturerId": "hokushin",
    "seriesNumber": 23,
    "nameKana": "パルサー",
    "nameLatin": "PULSAR",
    "archetypeId": "ultraMobile",
    "concept": "周期信号を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 6
    },
    "weaponGrowthAdjustments": {
      "lance": 0.07
    },
    "preferredWeapons": [
      "lance"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "hokushin-magnetar",
    "manufacturerId": "hokushin",
    "seriesNumber": 24,
    "nameKana": "マグネター",
    "nameLatin": "MAGNETAR",
    "archetypeId": "fortress",
    "concept": "強磁場天体を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "hokushin-eclipse",
    "manufacturerId": "hokushin",
    "seriesNumber": 25,
    "nameKana": "エクリプス",
    "nameLatin": "ECLIPSE",
    "archetypeId": "precision",
    "concept": "食を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hokushin-protostar",
    "manufacturerId": "hokushin",
    "seriesNumber": 26,
    "nameKana": "プロトスター",
    "nameLatin": "PROTOSTAR",
    "archetypeId": "lateGrowth",
    "concept": "原始星を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1.12,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hokushin-quasar",
    "manufacturerId": "hokushin",
    "seriesNumber": 27,
    "nameKana": "クエーサー",
    "nameLatin": "QUASAR",
    "archetypeId": "volatileExperimental",
    "concept": "遠方の高輝度天体を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "hokushin-binary",
    "manufacturerId": "hokushin",
    "seriesNumber": 28,
    "nameKana": "バイナリ",
    "nameLatin": "BINARY",
    "archetypeId": "hybridClose",
    "concept": "連星を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hokushin-nebula",
    "manufacturerId": "hokushin",
    "seriesNumber": 29,
    "nameKana": "ネビュラ",
    "nameLatin": "NEBULA",
    "archetypeId": "hybridRanged",
    "concept": "星雲を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hokushin-zenith",
    "manufacturerId": "hokushin",
    "seriesNumber": 30,
    "nameKana": "ゼニス",
    "nameLatin": "ZENITH",
    "archetypeId": "electronicWarfare",
    "concept": "天頂を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 9,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hokushin-phobos",
    "manufacturerId": "hokushin",
    "seriesNumber": 31,
    "nameKana": "フェボス",
    "nameLatin": "PHOBOS",
    "archetypeId": "weaponSavant",
    "concept": "高速衛星を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "hokushin-deimos",
    "manufacturerId": "hokushin",
    "seriesNumber": 32,
    "nameKana": "デイモス",
    "nameLatin": "DEIMOS",
    "archetypeId": "weaponSavant",
    "concept": "不規則衛星を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "hokushin-europa",
    "manufacturerId": "hokushin",
    "seriesNumber": 33,
    "nameKana": "エウロパ",
    "nameLatin": "EUROPA",
    "archetypeId": "countermeasure",
    "concept": "氷衛星を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hokushin-titan",
    "manufacturerId": "hokushin",
    "seriesNumber": 34,
    "nameKana": "タイタン",
    "nameLatin": "TITAN",
    "archetypeId": "reliable",
    "concept": "巨大衛星を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hokushin-luna",
    "manufacturerId": "hokushin",
    "seriesNumber": 35,
    "nameKana": "ルナ",
    "nameLatin": "LUNA",
    "archetypeId": "burstAssault",
    "concept": "月を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "hokushin-sol",
    "manufacturerId": "hokushin",
    "seriesNumber": 36,
    "nameKana": "ソル",
    "nameLatin": "SOL",
    "archetypeId": "adaptive",
    "concept": "太陽を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hokushin-ganymede",
    "manufacturerId": "hokushin",
    "seriesNumber": 37,
    "nameKana": "ガニメデ",
    "nameLatin": "GANYMEDE",
    "archetypeId": "dataGlass",
    "concept": "大型衛星を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "hokushin-triton",
    "manufacturerId": "hokushin",
    "seriesNumber": 38,
    "nameKana": "トリトン",
    "nameLatin": "TRITON",
    "archetypeId": "overengineered",
    "concept": "外縁衛星を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "beamCannon": 6
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.07
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hokushin-equinox",
    "manufacturerId": "hokushin",
    "seriesNumber": 39,
    "nameKana": "エクイノックス",
    "nameLatin": "EQUINOX",
    "archetypeId": "minimalist",
    "concept": "昼夜が釣り合う瞬間を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hokushin-solstice",
    "manufacturerId": "hokushin",
    "seriesNumber": 40,
    "nameKana": "ソルスティス",
    "nameLatin": "SOLSTICE",
    "archetypeId": "glassCannon",
    "concept": "季節の極点を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。北辰精機らしく、極端な性能でも誤差と再現性を測定・管理できる範囲に収める。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "shinonome-rokusho",
    "manufacturerId": "shinonome",
    "seriesNumber": 21,
    "nameKana": "ロクショウ",
    "nameLatin": "ROKUSHO",
    "archetypeId": "apex",
    "concept": "緑青を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "shinonome-enji",
    "manufacturerId": "shinonome",
    "seriesNumber": 22,
    "nameKana": "エンジ",
    "nameLatin": "ENJI",
    "archetypeId": "glassCannon",
    "concept": "深い臙脂を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamCannon": 6
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.07
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "shinonome-kachi",
    "manufacturerId": "shinonome",
    "seriesNumber": 23,
    "nameKana": "カチ",
    "nameLatin": "KACHI",
    "archetypeId": "ultraMobile",
    "concept": "勝色を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 6
    },
    "weaponGrowthAdjustments": {
      "lance": 0.07
    },
    "preferredWeapons": [
      "lance"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "shinonome-shion",
    "manufacturerId": "shinonome",
    "seriesNumber": 24,
    "nameKana": "シオン",
    "nameLatin": "SHION",
    "archetypeId": "fortress",
    "concept": "紫苑色を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 3,
      "missile": 2,
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "shinonome-kikyo",
    "manufacturerId": "shinonome",
    "seriesNumber": 25,
    "nameKana": "キキョウ",
    "nameLatin": "KIKYO",
    "archetypeId": "precision",
    "concept": "桔梗色を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "shinonome-akane",
    "manufacturerId": "shinonome",
    "seriesNumber": 26,
    "nameKana": "アカネ",
    "nameLatin": "AKANE",
    "archetypeId": "lateGrowth",
    "concept": "茜色を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1.12,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "shinonome-kuriume",
    "manufacturerId": "shinonome",
    "seriesNumber": 27,
    "nameKana": "クリウメ",
    "nameLatin": "KURIUME",
    "archetypeId": "volatileExperimental",
    "concept": "暗い紅梅を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "shinonome-suoh",
    "manufacturerId": "shinonome",
    "seriesNumber": 28,
    "nameKana": "スオウ",
    "nameLatin": "SUOH",
    "archetypeId": "hybridClose",
    "concept": "蘇芳を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "shinonome-matsuba",
    "manufacturerId": "shinonome",
    "seriesNumber": 29,
    "nameKana": "マツバ",
    "nameLatin": "MATSUBA",
    "archetypeId": "hybridRanged",
    "concept": "松葉色を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "beamCannon": 6
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.07
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "shinonome-usuhana",
    "manufacturerId": "shinonome",
    "seriesNumber": 30,
    "nameKana": "ウスハナ",
    "nameLatin": "USUHANA",
    "archetypeId": "electronicWarfare",
    "concept": "淡い青を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 9,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "shinonome-namari",
    "manufacturerId": "shinonome",
    "seriesNumber": 31,
    "nameKana": "ナマリ",
    "nameLatin": "NAMARI",
    "archetypeId": "weaponSavant",
    "concept": "鉛色を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "drone": 6
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "shinonome-kurotsurubami",
    "manufacturerId": "shinonome",
    "seriesNumber": 32,
    "nameKana": "クロツルバミ",
    "nameLatin": "KUROTSURUBAMI",
    "archetypeId": "weaponSavant",
    "concept": "ほぼ黒に近い褐色を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "shinonome-shiracha",
    "manufacturerId": "shinonome",
    "seriesNumber": 33,
    "nameKana": "シラチャ",
    "nameLatin": "SHIRACHA",
    "archetypeId": "countermeasure",
    "concept": "白茶を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "shinonome-rikancha",
    "manufacturerId": "shinonome",
    "seriesNumber": 34,
    "nameKana": "リカンチャ",
    "nameLatin": "RIKANCHA",
    "archetypeId": "reliable",
    "concept": "複雑な茶色を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "shinonome-hai",
    "manufacturerId": "shinonome",
    "seriesNumber": 35,
    "nameKana": "ハイ",
    "nameLatin": "HAI",
    "archetypeId": "burstAssault",
    "concept": "灰色を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "shinonome-keshi",
    "manufacturerId": "shinonome",
    "seriesNumber": 36,
    "nameKana": "ケシ",
    "nameLatin": "KESHI",
    "archetypeId": "adaptive",
    "concept": "芥子色を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "shinonome-hiwamoegi",
    "manufacturerId": "shinonome",
    "seriesNumber": 37,
    "nameKana": "ヒワモエギ",
    "nameLatin": "HIWAMOEGI",
    "archetypeId": "dataGlass",
    "concept": "黄緑を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "shinonome-benihi",
    "manufacturerId": "shinonome",
    "seriesNumber": 38,
    "nameKana": "ベニヒ",
    "nameLatin": "BENIHI",
    "archetypeId": "overengineered",
    "concept": "鮮烈な紅を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 3,
      "missile": 2,
      "beamCannon": 6
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.07
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "shinonome-usukou",
    "manufacturerId": "shinonome",
    "seriesNumber": 39,
    "nameKana": "ウスコウ",
    "nameLatin": "USUKOU",
    "archetypeId": "minimalist",
    "concept": "薄香色を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "shinonome-shinbashi",
    "manufacturerId": "shinonome",
    "seriesNumber": 40,
    "nameKana": "シンバシ",
    "nameLatin": "SHINBASHI",
    "archetypeId": "volatileExperimental",
    "concept": "青緑を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。東雲電子技研らしく、機械構造より情報の見方と処理配分で性格を作る。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.15,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.62
  },
  {
    "id": "amagi-cheetah",
    "manufacturerId": "amagi",
    "seriesNumber": 21,
    "nameKana": "チーター",
    "nameLatin": "CHEETAH",
    "archetypeId": "apex",
    "concept": "瞬発する走者を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "amagi-yagi",
    "manufacturerId": "amagi",
    "seriesNumber": 22,
    "nameKana": "ヤギ",
    "nameLatin": "YAGI",
    "archetypeId": "glassCannon",
    "concept": "崖を登る脚を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "amagi-sai",
    "manufacturerId": "amagi",
    "seriesNumber": 23,
    "nameKana": "サイ",
    "nameLatin": "SAI",
    "archetypeId": "ultraMobile",
    "concept": "重量を押し返す突進を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "blade": 6
    },
    "weaponGrowthAdjustments": {
      "blade": 0.07
    },
    "preferredWeapons": [
      "blade"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "amagi-kawasemi",
    "manufacturerId": "amagi",
    "seriesNumber": 24,
    "nameKana": "カワセミ",
    "nameLatin": "KAWASEMI",
    "archetypeId": "fortress",
    "concept": "一点を見逃さない捕食を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "amagi-fukurou",
    "manufacturerId": "amagi",
    "seriesNumber": 25,
    "nameKana": "フクロウ",
    "nameLatin": "FUKUROU",
    "archetypeId": "precision",
    "concept": "静かな夜行性を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "amagi-usagi",
    "manufacturerId": "amagi",
    "seriesNumber": 26,
    "nameKana": "ウサギ",
    "nameLatin": "USAGI",
    "archetypeId": "lateGrowth",
    "concept": "跳躍と急旋回を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1.12,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "amagi-mamushi",
    "manufacturerId": "amagi",
    "seriesNumber": 27,
    "nameKana": "マムシ",
    "nameLatin": "MAMUSHI",
    "archetypeId": "volatileExperimental",
    "concept": "一撃の毒を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "lance": 6
    },
    "weaponGrowthAdjustments": {
      "lance": 0.07
    },
    "preferredWeapons": [
      "lance"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "amagi-iruka",
    "manufacturerId": "amagi",
    "seriesNumber": 28,
    "nameKana": "イルカ",
    "nameLatin": "IRUKA",
    "archetypeId": "hybridClose",
    "concept": "水中での群れ制御を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "blade": 6
    },
    "weaponGrowthAdjustments": {
      "blade": 0.07
    },
    "preferredWeapons": [
      "blade"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "amagi-kujira",
    "manufacturerId": "amagi",
    "seriesNumber": 29,
    "nameKana": "クジラ",
    "nameLatin": "KUJIRA",
    "archetypeId": "hybridRanged",
    "concept": "巨大だが滑らかな運動を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "amagi-tonbo",
    "manufacturerId": "amagi",
    "seriesNumber": 30,
    "nameKana": "トンボ",
    "nameLatin": "TONBO",
    "archetypeId": "electronicWarfare",
    "concept": "空中での急停止を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 9,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "amagi-hachi",
    "manufacturerId": "amagi",
    "seriesNumber": 31,
    "nameKana": "ハチ",
    "nameLatin": "HACHI",
    "archetypeId": "weaponSavant",
    "concept": "群れで役割分担を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "amagi-ginyanma",
    "manufacturerId": "amagi",
    "seriesNumber": 32,
    "nameKana": "ギンヤンマ",
    "nameLatin": "GINYANMA",
    "archetypeId": "weaponSavant",
    "concept": "高速巡航する昆虫を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "amagi-tanuki",
    "manufacturerId": "amagi",
    "seriesNumber": 33,
    "nameKana": "タヌキ",
    "nameLatin": "TANUKI",
    "archetypeId": "countermeasure",
    "concept": "状況に応じて行動を変える雑食を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "amagi-inoshishi",
    "manufacturerId": "amagi",
    "seriesNumber": 34,
    "nameKana": "イノシシ",
    "nameLatin": "INOSHISHI",
    "archetypeId": "reliable",
    "concept": "一直線の突進を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "amagi-kame",
    "manufacturerId": "amagi",
    "seriesNumber": 35,
    "nameKana": "カメ",
    "nameLatin": "KAME",
    "archetypeId": "burstAssault",
    "concept": "殻で守りを固めるを設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "amagi-rakko",
    "manufacturerId": "amagi",
    "seriesNumber": 36,
    "nameKana": "ラッコ",
    "nameLatin": "RAKKO",
    "archetypeId": "adaptive",
    "concept": "柔らかな姿勢制御を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "amagi-hakubishin",
    "manufacturerId": "amagi",
    "seriesNumber": 37,
    "nameKana": "ハクビシン",
    "nameLatin": "HAKUBISHIN",
    "archetypeId": "dataGlass",
    "concept": "狭所を抜ける柔軟さを設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "amagi-kani",
    "manufacturerId": "amagi",
    "seriesNumber": 38,
    "nameKana": "カニ",
    "nameLatin": "KANI",
    "archetypeId": "overengineered",
    "concept": "横方向の安定を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "amagi-same",
    "manufacturerId": "amagi",
    "seriesNumber": 39,
    "nameKana": "サメ",
    "nameLatin": "SAME",
    "archetypeId": "fortress",
    "concept": "前進し続ける捕食を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "amagi-koumori",
    "manufacturerId": "amagi",
    "seriesNumber": 40,
    "nameKana": "コウモリ",
    "nameLatin": "KOUMORI",
    "archetypeId": "volatileExperimental",
    "concept": "音で空間を把握を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。天城機工らしく、その生物の「動き方」を駆動・姿勢制御へ翻訳している。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.15,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.62
  },
  {
    "id": "kamishiro-amenominakanushi",
    "manufacturerId": "kamishiro",
    "seriesNumber": 21,
    "nameKana": "アメノミナカヌシ",
    "nameLatin": "AMENOMINAKANUSHI",
    "archetypeId": "apex",
    "concept": "世界の中心を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kamishiro-kanayago",
    "manufacturerId": "kamishiro",
    "seriesNumber": 22,
    "nameKana": "カナヤゴ",
    "nameLatin": "KANAYAGO",
    "archetypeId": "glassCannon",
    "concept": "鍛冶を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "kamishiro-amenotajikarao",
    "manufacturerId": "kamishiro",
    "seriesNumber": 23,
    "nameKana": "アメノタヂカラオ",
    "nameLatin": "AMENOTAJIKARAO",
    "archetypeId": "ultraMobile",
    "concept": "怪力を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 6
    },
    "weaponGrowthAdjustments": {
      "lance": 0.07
    },
    "preferredWeapons": [
      "lance"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "kamishiro-iwanagahime",
    "manufacturerId": "kamishiro",
    "seriesNumber": 24,
    "nameKana": "イワナガヒメ",
    "nameLatin": "IWANAGAHIME",
    "archetypeId": "fortress",
    "concept": "永続性を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "kamishiro-futsunushi",
    "manufacturerId": "kamishiro",
    "seriesNumber": 25,
    "nameKana": "フツヌシ",
    "nameLatin": "FUTSUNUSHI",
    "archetypeId": "precision",
    "concept": "武神を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kamishiro-sukunabikona",
    "manufacturerId": "kamishiro",
    "seriesNumber": 26,
    "nameKana": "スクナビコナ",
    "nameLatin": "SUKUNABIKONA",
    "archetypeId": "lateGrowth",
    "concept": "小さな知恵を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1.12,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kamishiro-kuebiko",
    "manufacturerId": "kamishiro",
    "seriesNumber": 27,
    "nameKana": "クエビコ",
    "nameLatin": "KUEBIKO",
    "archetypeId": "volatileExperimental",
    "concept": "知識を持つ案山子を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "kamishiro-watatsumi",
    "manufacturerId": "kamishiro",
    "seriesNumber": 28,
    "nameKana": "ワタツミ",
    "nameLatin": "WATATSUMI",
    "archetypeId": "hybridClose",
    "concept": "海神を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kamishiro-tamayori",
    "manufacturerId": "kamishiro",
    "seriesNumber": 29,
    "nameKana": "タマヨリ",
    "nameLatin": "TAMAYORI",
    "archetypeId": "hybridRanged",
    "concept": "依代を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kamishiro-shinatsuhiko",
    "manufacturerId": "kamishiro",
    "seriesNumber": 30,
    "nameKana": "シナツヒコ",
    "nameLatin": "SHINATSUHIKO",
    "archetypeId": "electronicWarfare",
    "concept": "風神を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 9,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kamishiro-amenowakahiko",
    "manufacturerId": "kamishiro",
    "seriesNumber": 31,
    "nameKana": "アメノワカヒコ",
    "nameLatin": "AMENOWAKAHIKO",
    "archetypeId": "weaponSavant",
    "concept": "使命を帯びた使者を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "kamishiro-ooyamatsumi",
    "manufacturerId": "kamishiro",
    "seriesNumber": 32,
    "nameKana": "オオヤマツミ",
    "nameLatin": "OOYAMATSUMI",
    "archetypeId": "weaponSavant",
    "concept": "山神を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "kamishiro-ukemochi",
    "manufacturerId": "kamishiro",
    "seriesNumber": 33,
    "nameKana": "ウケモチ",
    "nameLatin": "UKEMOCHI",
    "archetypeId": "countermeasure",
    "concept": "食物神を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kamishiro-amenokoyane",
    "manufacturerId": "kamishiro",
    "seriesNumber": 34,
    "nameKana": "アメノコヤネ",
    "nameLatin": "AMENOKOYANE",
    "archetypeId": "reliable",
    "concept": "祭祀を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kamishiro-takeminakata",
    "manufacturerId": "kamishiro",
    "seriesNumber": 35,
    "nameKana": "タケミナカタ",
    "nameLatin": "TAKEMINAKATA",
    "archetypeId": "burstAssault",
    "concept": "勝負神を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "kamishiro-amenohohi",
    "manufacturerId": "kamishiro",
    "seriesNumber": 36,
    "nameKana": "アメノホヒ",
    "nameLatin": "AMENOHOHI",
    "archetypeId": "adaptive",
    "concept": "天上からの監視を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kamishiro-mizuhanome",
    "manufacturerId": "kamishiro",
    "seriesNumber": 37,
    "nameKana": "ミヅハノメ",
    "nameLatin": "MIZUHANOME",
    "archetypeId": "dataGlass",
    "concept": "水神を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "kamishiro-kayanohime",
    "manufacturerId": "kamishiro",
    "seriesNumber": 38,
    "nameKana": "カヤノヒメ",
    "nameLatin": "KAYANOHIME",
    "archetypeId": "overengineered",
    "concept": "草野の神を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kamishiro-toyouke",
    "manufacturerId": "kamishiro",
    "seriesNumber": 39,
    "nameKana": "トヨウケ",
    "nameLatin": "TOYOUKE",
    "archetypeId": "minimalist",
    "concept": "豊穣を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "kamishiro-amenotorifune",
    "manufacturerId": "kamishiro",
    "seriesNumber": 40,
    "nameKana": "アメノトリフネ",
    "nameLatin": "AMENOTORIFUNE",
    "archetypeId": "volatileExperimental",
    "concept": "天を駆ける船を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。神代技研らしく、神話上の役割を既存常識に縛られない機構で再解釈する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.15,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.62
  },
  {
    "id": "lancaster-sunflower",
    "manufacturerId": "lancaster",
    "seriesNumber": 21,
    "nameKana": "SUNFLOWER",
    "nameLatin": "SUNFLOWER",
    "archetypeId": "apex",
    "concept": "太陽へ向く花を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "lancaster-wisteria",
    "manufacturerId": "lancaster",
    "seriesNumber": 22,
    "nameKana": "WISTERIA",
    "nameLatin": "WISTERIA",
    "archetypeId": "glassCannon",
    "concept": "しなやかな蔓を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "lancaster-dandelion",
    "manufacturerId": "lancaster",
    "seriesNumber": 23,
    "nameKana": "DANDELION",
    "nameLatin": "DANDELION",
    "archetypeId": "ultraMobile",
    "concept": "種子拡散を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "drone": 6
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "lancaster-thistle",
    "manufacturerId": "lancaster",
    "seriesNumber": 24,
    "nameKana": "THISTLE",
    "nameLatin": "THISTLE",
    "archetypeId": "fortress",
    "concept": "棘を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "blade": 6
    },
    "weaponGrowthAdjustments": {
      "blade": 0.07
    },
    "preferredWeapons": [
      "blade"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "lancaster-moonflower",
    "manufacturerId": "lancaster",
    "seriesNumber": 25,
    "nameKana": "MOONFLOWER",
    "nameLatin": "MOONFLOWER",
    "archetypeId": "precision",
    "concept": "夜咲きを設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "lancaster-gardenia",
    "manufacturerId": "lancaster",
    "seriesNumber": 26,
    "nameKana": "GARDENIA",
    "nameLatin": "GARDENIA",
    "archetypeId": "lateGrowth",
    "concept": "強い芳香を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1.12,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "lancaster-hyacinth",
    "manufacturerId": "lancaster",
    "seriesNumber": 27,
    "nameKana": "HYACINTH",
    "nameLatin": "HYACINTH",
    "archetypeId": "volatileExperimental",
    "concept": "密集花序を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "lancaster-tulip",
    "manufacturerId": "lancaster",
    "seriesNumber": 28,
    "nameKana": "TULIP",
    "nameLatin": "TULIP",
    "archetypeId": "hybridClose",
    "concept": "球根を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "machineGun": 6
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.07
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "lancaster-bluebell",
    "manufacturerId": "lancaster",
    "seriesNumber": 29,
    "nameKana": "BLUEBELL",
    "nameLatin": "BLUEBELL",
    "archetypeId": "hybridRanged",
    "concept": "群生する青花を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "lancaster-foxglove",
    "manufacturerId": "lancaster",
    "seriesNumber": 30,
    "nameKana": "FOXGLOVE",
    "nameLatin": "FOXGLOVE",
    "archetypeId": "electronicWarfare",
    "concept": "毒性を持つ花を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 9,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "lancaster-snowdrop",
    "manufacturerId": "lancaster",
    "seriesNumber": 31,
    "nameKana": "SNOWDROP",
    "nameLatin": "SNOWDROP",
    "archetypeId": "weaponSavant",
    "concept": "寒冷地の早咲きを設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "lancaster-hellebore",
    "manufacturerId": "lancaster",
    "seriesNumber": 32,
    "nameKana": "HELLEBORE",
    "nameLatin": "HELLEBORE",
    "archetypeId": "weaponSavant",
    "concept": "冬咲きを設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "lancaster-lupine",
    "manufacturerId": "lancaster",
    "seriesNumber": 33,
    "nameKana": "LUPINE",
    "nameLatin": "LUPINE",
    "archetypeId": "countermeasure",
    "concept": "長い花穂を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "lancaster-begonia",
    "manufacturerId": "lancaster",
    "seriesNumber": 34,
    "nameKana": "BEGONIA",
    "nameLatin": "BEGONIA",
    "archetypeId": "reliable",
    "concept": "肉厚な花を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "lancaster-geranium",
    "manufacturerId": "lancaster",
    "seriesNumber": 35,
    "nameKana": "GERANIUM",
    "nameLatin": "GERANIUM",
    "archetypeId": "burstAssault",
    "concept": "環境適応の良い花を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "lancaster-pansy",
    "manufacturerId": "lancaster",
    "seriesNumber": 36,
    "nameKana": "PANSY",
    "nameLatin": "PANSY",
    "archetypeId": "adaptive",
    "concept": "小型で親しみやすい花を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "lancaster-petunia",
    "manufacturerId": "lancaster",
    "seriesNumber": 37,
    "nameKana": "PETUNIA",
    "nameLatin": "PETUNIA",
    "archetypeId": "dataGlass",
    "concept": "大量に咲く園芸花を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "lancaster-carnation",
    "manufacturerId": "lancaster",
    "seriesNumber": 38,
    "nameKana": "CARNATION",
    "nameLatin": "CARNATION",
    "archetypeId": "overengineered",
    "concept": "贈答の定番を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "lancaster-honeysuckle",
    "manufacturerId": "lancaster",
    "seriesNumber": 39,
    "nameKana": "HONEYSUCKLE",
    "nameLatin": "HONEYSUCKLE",
    "archetypeId": "minimalist",
    "concept": "絡みつく蔓を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "machineGun": 6
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.07
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "lancaster-zinnia",
    "manufacturerId": "lancaster",
    "seriesNumber": 40,
    "nameKana": "ZINNIA",
    "nameLatin": "ZINNIA",
    "archetypeId": "volatileExperimental",
    "concept": "鮮色で丈夫な花を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。ランカスターらしく、性能だけでなく「誰が選ぶ商品か」が一目で伝わるブランド設計にしている。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.15,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.62
  },
  {
    "id": "steinwald-logan",
    "manufacturerId": "steinwald",
    "seriesNumber": 21,
    "nameKana": "LOGAN",
    "nameLatin": "LOGAN",
    "archetypeId": "apex",
    "concept": "巨大山塊を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "steinwald-vinson",
    "manufacturerId": "steinwald",
    "seriesNumber": 22,
    "nameKana": "VINSON",
    "nameLatin": "VINSON",
    "archetypeId": "glassCannon",
    "concept": "孤立峰を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "steinwald-damavand",
    "manufacturerId": "steinwald",
    "seriesNumber": 23,
    "nameKana": "DAMAVAND",
    "nameLatin": "DAMAVAND",
    "archetypeId": "ultraMobile",
    "concept": "火山を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 6
    },
    "weaponGrowthAdjustments": {
      "lance": 0.07
    },
    "preferredWeapons": [
      "lance"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "steinwald-kosciuszko",
    "manufacturerId": "steinwald",
    "seriesNumber": 24,
    "nameKana": "KOSCIUSZKO",
    "nameLatin": "KOSCIUSZKO",
    "archetypeId": "fortress",
    "concept": "大陸最高峰を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "steinwald-aoraki",
    "manufacturerId": "steinwald",
    "seriesNumber": 25,
    "nameKana": "AORAKI",
    "nameLatin": "AORAKI",
    "archetypeId": "precision",
    "concept": "氷雪峰を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "steinwald-rainier",
    "manufacturerId": "steinwald",
    "seriesNumber": 26,
    "nameKana": "RAINIER",
    "nameLatin": "RAINIER",
    "archetypeId": "lateGrowth",
    "concept": "火山性成層を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1.12,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "steinwald-shasta",
    "manufacturerId": "steinwald",
    "seriesNumber": 27,
    "nameKana": "SHASTA",
    "nameLatin": "SHASTA",
    "archetypeId": "volatileExperimental",
    "concept": "火山と雪を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "steinwald-whitney",
    "manufacturerId": "steinwald",
    "seriesNumber": 28,
    "nameKana": "WHITNEY",
    "nameLatin": "WHITNEY",
    "archetypeId": "hybridClose",
    "concept": "高原から伸びる峰を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "blade": 6
    },
    "weaponGrowthAdjustments": {
      "blade": 0.07
    },
    "preferredWeapons": [
      "blade"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "steinwald-kenya",
    "manufacturerId": "steinwald",
    "seriesNumber": 29,
    "nameKana": "KENYA",
    "nameLatin": "KENYA",
    "archetypeId": "hybridRanged",
    "concept": "独立峰を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "steinwald-parnassus",
    "manufacturerId": "steinwald",
    "seriesNumber": 30,
    "nameKana": "PARNASSUS",
    "nameLatin": "PARNASSUS",
    "archetypeId": "dataGlass",
    "concept": "神話的霊峰を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "steinwald-ventoux",
    "manufacturerId": "steinwald",
    "seriesNumber": 31,
    "nameKana": "VENTOUX",
    "nameLatin": "VENTOUX",
    "archetypeId": "weaponSavant",
    "concept": "長い舗装登坂を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "steinwald-triglav",
    "manufacturerId": "steinwald",
    "seriesNumber": 32,
    "nameKana": "TRIGLAV",
    "nameLatin": "TRIGLAV",
    "archetypeId": "weaponSavant",
    "concept": "岩山の稜線を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "steinwald-bennevis",
    "manufacturerId": "steinwald",
    "seriesNumber": 33,
    "nameKana": "BENNEVIS",
    "nameLatin": "BENNEVIS",
    "archetypeId": "countermeasure",
    "concept": "湿潤な高地を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "steinwald-snowdon",
    "manufacturerId": "steinwald",
    "seriesNumber": 34,
    "nameKana": "SNOWDON",
    "nameLatin": "SNOWDON",
    "archetypeId": "reliable",
    "concept": "荒天の丘陵を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "steinwald-makalu",
    "manufacturerId": "steinwald",
    "seriesNumber": 35,
    "nameKana": "MAKALU",
    "nameLatin": "MAKALU",
    "archetypeId": "burstAssault",
    "concept": "8000m級の巨峰を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "steinwald-lhotse",
    "manufacturerId": "steinwald",
    "seriesNumber": 36,
    "nameKana": "LHOTSE",
    "nameLatin": "LHOTSE",
    "archetypeId": "adaptive",
    "concept": "切り立つ高峰を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "steinwald-cho-oyu",
    "manufacturerId": "steinwald",
    "seriesNumber": 37,
    "nameKana": "CHO-OYU",
    "nameLatin": "CHO-OYU",
    "archetypeId": "ultraMobile",
    "concept": "長大な高所を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "drone": 6
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "steinwald-annapurna",
    "manufacturerId": "steinwald",
    "seriesNumber": 38,
    "nameKana": "ANNAPURNA",
    "nameLatin": "ANNAPURNA",
    "archetypeId": "overengineered",
    "concept": "雪崩地形を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "steinwald-nanga",
    "manufacturerId": "steinwald",
    "seriesNumber": 39,
    "nameKana": "NANGA",
    "nameLatin": "NANGA",
    "archetypeId": "minimalist",
    "concept": "難攻不落の岩峰を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "steinwald-manaslu",
    "manufacturerId": "steinwald",
    "seriesNumber": 40,
    "nameKana": "MANASLU",
    "nameLatin": "MANASLU",
    "archetypeId": "volatileExperimental",
    "concept": "均整の取れた高峰を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。シュタインヴァルトらしく、電子補正より先にフレーム・重量配分・機関配置だけで成立させる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.15,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.62
  },
  {
    "id": "cromwell-ultramarine",
    "manufacturerId": "cromwell",
    "seriesNumber": 21,
    "nameKana": "ULTRAMARINE",
    "nameLatin": "ULTRAMARINE",
    "archetypeId": "apex",
    "concept": "深い青を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "cromwell-vermilion",
    "manufacturerId": "cromwell",
    "seriesNumber": 22,
    "nameKana": "VERMILION",
    "nameLatin": "VERMILION",
    "archetypeId": "glassCannon",
    "concept": "高彩度の赤を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamCannon": 6
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.07
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "cromwell-turquoise",
    "manufacturerId": "cromwell",
    "seriesNumber": 23,
    "nameKana": "TURQUOISE",
    "nameLatin": "TURQUOISE",
    "archetypeId": "ultraMobile",
    "concept": "青緑を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 6
    },
    "weaponGrowthAdjustments": {
      "lance": 0.07
    },
    "preferredWeapons": [
      "lance"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "cromwell-lilac",
    "manufacturerId": "cromwell",
    "seriesNumber": 24,
    "nameKana": "LILAC",
    "nameLatin": "LILAC",
    "archetypeId": "fortress",
    "concept": "淡紫を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "cromwell-coral",
    "manufacturerId": "cromwell",
    "seriesNumber": 25,
    "nameKana": "CORAL",
    "nameLatin": "CORAL",
    "archetypeId": "precision",
    "concept": "暖色の珊瑚を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "cromwell-mint",
    "manufacturerId": "cromwell",
    "seriesNumber": 26,
    "nameKana": "MINT",
    "nameLatin": "MINT",
    "archetypeId": "lateGrowth",
    "concept": "薄緑を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1.12,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "cromwell-olive",
    "manufacturerId": "cromwell",
    "seriesNumber": 27,
    "nameKana": "OLIVE",
    "nameLatin": "OLIVE",
    "archetypeId": "volatileExperimental",
    "concept": "くすんだ緑を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "cromwell-navy",
    "manufacturerId": "cromwell",
    "seriesNumber": 28,
    "nameKana": "NAVY",
    "nameLatin": "NAVY",
    "archetypeId": "hybridClose",
    "concept": "濃紺を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "cromwell-copper",
    "manufacturerId": "cromwell",
    "seriesNumber": 29,
    "nameKana": "COPPER",
    "nameLatin": "COPPER",
    "archetypeId": "hybridRanged",
    "concept": "赤みの金属色を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "beamCannon": 6
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.07
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "cromwell-gold",
    "manufacturerId": "cromwell",
    "seriesNumber": 30,
    "nameKana": "GOLD",
    "nameLatin": "GOLD",
    "archetypeId": "electronicWarfare",
    "concept": "強い反射色を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 9,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "cromwell-platinum",
    "manufacturerId": "cromwell",
    "seriesNumber": 31,
    "nameKana": "PLATINUM",
    "nameLatin": "PLATINUM",
    "archetypeId": "weaponSavant",
    "concept": "白銀色を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "cromwell-black",
    "manufacturerId": "cromwell",
    "seriesNumber": 32,
    "nameKana": "BLACK",
    "nameLatin": "BLACK",
    "archetypeId": "glassCannon",
    "concept": "完全な暗色を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 3,
      "missile": 2,
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "cromwell-white",
    "manufacturerId": "cromwell",
    "seriesNumber": 33,
    "nameKana": "WHITE",
    "nameLatin": "WHITE",
    "archetypeId": "countermeasure",
    "concept": "完全な明色を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "cromwell-chartreuse",
    "manufacturerId": "cromwell",
    "seriesNumber": 34,
    "nameKana": "CHARTREUSE",
    "nameLatin": "CHARTREUSE",
    "archetypeId": "reliable",
    "concept": "黄緑の高彩度を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "cromwell-mauve",
    "manufacturerId": "cromwell",
    "seriesNumber": 35,
    "nameKana": "MAUVE",
    "nameLatin": "MAUVE",
    "archetypeId": "burstAssault",
    "concept": "灰紫を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "cromwell-taupe",
    "manufacturerId": "cromwell",
    "seriesNumber": 36,
    "nameKana": "TAUPE",
    "nameLatin": "TAUPE",
    "archetypeId": "adaptive",
    "concept": "灰褐色を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "cromwell-sepia",
    "manufacturerId": "cromwell",
    "seriesNumber": 37,
    "nameKana": "SEPIA",
    "nameLatin": "SEPIA",
    "archetypeId": "dataGlass",
    "concept": "古写真の褐色を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "cromwell-salmon",
    "manufacturerId": "cromwell",
    "seriesNumber": 38,
    "nameKana": "SALMON",
    "nameLatin": "SALMON",
    "archetypeId": "overengineered",
    "concept": "暖かな桃色を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "cromwell-rosewood",
    "manufacturerId": "cromwell",
    "seriesNumber": 39,
    "nameKana": "ROSEWOOD",
    "nameLatin": "ROSEWOOD",
    "archetypeId": "minimalist",
    "concept": "暗い木質赤を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 3,
      "missile": 2,
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "cromwell-slate",
    "manufacturerId": "cromwell",
    "seriesNumber": 40,
    "nameKana": "SLATE",
    "nameLatin": "SLATE",
    "archetypeId": "volatileExperimental",
    "concept": "青灰色を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。クロムウェルらしく、単独の最高値より複数能力が同時に働いた時の相互作用を狙う。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.15,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.62
  },
  {
    "id": "rhenium-alexandrite",
    "manufacturerId": "rhenium",
    "seriesNumber": 21,
    "nameKana": "ALEXANDRITE",
    "nameLatin": "ALEXANDRITE",
    "archetypeId": "apex",
    "concept": "光で色が変わる宝石を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "rhenium-tanzanite",
    "manufacturerId": "rhenium",
    "seriesNumber": 22,
    "nameKana": "TANZANITE",
    "nameLatin": "TANZANITE",
    "archetypeId": "glassCannon",
    "concept": "青紫の希少石を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "rhenium-moonstone",
    "manufacturerId": "rhenium",
    "seriesNumber": 23,
    "nameKana": "MOONSTONE",
    "nameLatin": "MOONSTONE",
    "archetypeId": "ultraMobile",
    "concept": "月光のような光彩を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 6
    },
    "weaponGrowthAdjustments": {
      "lance": 0.07
    },
    "preferredWeapons": [
      "lance"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "rhenium-sunstone",
    "manufacturerId": "rhenium",
    "seriesNumber": 24,
    "nameKana": "SUNSTONE",
    "nameLatin": "SUNSTONE",
    "archetypeId": "fortress",
    "concept": "強い閃光を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "beamCannon": 6
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.07
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "rhenium-labradorite",
    "manufacturerId": "rhenium",
    "seriesNumber": 25,
    "nameKana": "LABRADORITE",
    "nameLatin": "LABRADORITE",
    "archetypeId": "precision",
    "concept": "角度で色が変化を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "rhenium-jasper",
    "manufacturerId": "rhenium",
    "seriesNumber": 26,
    "nameKana": "JASPER",
    "nameLatin": "JASPER",
    "archetypeId": "lateGrowth",
    "concept": "堅牢な石を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1.12,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "rhenium-chrysoberyl",
    "manufacturerId": "rhenium",
    "seriesNumber": 27,
    "nameKana": "CHRYSOBERYL",
    "nameLatin": "CHRYSOBERYL",
    "archetypeId": "volatileExperimental",
    "concept": "硬度の高い結晶を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "rhenium-aquamarine",
    "manufacturerId": "rhenium",
    "seriesNumber": 28,
    "nameKana": "AQUAMARINE",
    "nameLatin": "AQUAMARINE",
    "archetypeId": "hybridClose",
    "concept": "水色の透明感を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "blade": 6
    },
    "weaponGrowthAdjustments": {
      "blade": 0.07
    },
    "preferredWeapons": [
      "blade"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "rhenium-morganite",
    "manufacturerId": "rhenium",
    "seriesNumber": 29,
    "nameKana": "MORGANITE",
    "nameLatin": "MORGANITE",
    "archetypeId": "hybridRanged",
    "concept": "淡桃の宝石を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "rhenium-rhodonite",
    "manufacturerId": "rhenium",
    "seriesNumber": 30,
    "nameKana": "RHODONITE",
    "nameLatin": "RHODONITE",
    "archetypeId": "electronicWarfare",
    "concept": "層状の模様を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 9,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "rhenium-hematite",
    "manufacturerId": "rhenium",
    "seriesNumber": 31,
    "nameKana": "HEMATITE",
    "nameLatin": "HEMATITE",
    "archetypeId": "weaponSavant",
    "concept": "高密度鉄鉱を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "rhenium-pyrite",
    "manufacturerId": "rhenium",
    "seriesNumber": 32,
    "nameKana": "PYRITE",
    "nameLatin": "PYRITE",
    "archetypeId": "weaponSavant",
    "concept": "金属光沢の硫化鉱を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamCannon": 6
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.07
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "rhenium-fluorite",
    "manufacturerId": "rhenium",
    "seriesNumber": 33,
    "nameKana": "FLUORITE",
    "nameLatin": "FLUORITE",
    "archetypeId": "countermeasure",
    "concept": "蛍光を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "rhenium-calcite",
    "manufacturerId": "rhenium",
    "seriesNumber": 34,
    "nameKana": "CALCITE",
    "nameLatin": "CALCITE",
    "archetypeId": "reliable",
    "concept": "劈開しやすい結晶を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "rhenium-feldspar",
    "manufacturerId": "rhenium",
    "seriesNumber": 35,
    "nameKana": "FELDSPAR",
    "nameLatin": "FELDSPAR",
    "archetypeId": "burstAssault",
    "concept": "母岩を作る鉱物を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "rhenium-olivine",
    "manufacturerId": "rhenium",
    "seriesNumber": 36,
    "nameKana": "OLIVINE",
    "nameLatin": "OLIVINE",
    "archetypeId": "ultraMobile",
    "concept": "高温に耐える結晶を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "rhenium-corundum",
    "manufacturerId": "rhenium",
    "seriesNumber": 37,
    "nameKana": "CORUNDUM",
    "nameLatin": "CORUNDUM",
    "archetypeId": "dataGlass",
    "concept": "非常に高い硬度を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "rhenium-lapis",
    "manufacturerId": "rhenium",
    "seriesNumber": 38,
    "nameKana": "LAPIS",
    "nameLatin": "LAPIS",
    "archetypeId": "overengineered",
    "concept": "深い青を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "rhenium-azurite",
    "manufacturerId": "rhenium",
    "seriesNumber": 39,
    "nameKana": "AZURITE",
    "nameLatin": "AZURITE",
    "archetypeId": "minimalist",
    "concept": "青色の銅鉱を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "rhenium-tigereye",
    "manufacturerId": "rhenium",
    "seriesNumber": 40,
    "nameKana": "TIGEREYE",
    "nameLatin": "TIGEREYE",
    "archetypeId": "dataGlass",
    "concept": "縞模様の石を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。レニウムらしく、量産性を犠牲にしてでも一つの素材特性・加工法を極端に引き出す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "hawthorne-cheetah",
    "manufacturerId": "hawthorne",
    "seriesNumber": 21,
    "nameKana": "CHEETAH",
    "nameLatin": "CHEETAH",
    "archetypeId": "apex",
    "concept": "短距離疾走を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hawthorne-goat",
    "manufacturerId": "hawthorne",
    "seriesNumber": 22,
    "nameKana": "GOAT",
    "nameLatin": "GOAT",
    "archetypeId": "glassCannon",
    "concept": "断崖を登るを設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "hawthorne-rhino",
    "manufacturerId": "hawthorne",
    "seriesNumber": 23,
    "nameKana": "RHINO",
    "nameLatin": "RHINO",
    "archetypeId": "ultraMobile",
    "concept": "正面突破を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "blade": 6
    },
    "weaponGrowthAdjustments": {
      "blade": 0.07
    },
    "preferredWeapons": [
      "blade"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "hawthorne-kingfisher",
    "manufacturerId": "hawthorne",
    "seriesNumber": 24,
    "nameKana": "KINGFISHER",
    "nameLatin": "KINGFISHER",
    "archetypeId": "fortress",
    "concept": "高速で一点へ飛び込むを設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "hawthorne-owl-ii",
    "manufacturerId": "hawthorne",
    "seriesNumber": 25,
    "nameKana": "OWL-II",
    "nameLatin": "OWL-II",
    "archetypeId": "precision",
    "concept": "静止して観察する夜行性を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hawthorne-rabbit",
    "manufacturerId": "hawthorne",
    "seriesNumber": 26,
    "nameKana": "RABBIT",
    "nameLatin": "RABBIT",
    "archetypeId": "lateGrowth",
    "concept": "跳躍と回避を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1.12,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hawthorne-mamba",
    "manufacturerId": "hawthorne",
    "seriesNumber": 27,
    "nameKana": "MAMBA",
    "nameLatin": "MAMBA",
    "archetypeId": "volatileExperimental",
    "concept": "毒で相手の行動を制限を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "hawthorne-dolphin",
    "manufacturerId": "hawthorne",
    "seriesNumber": 28,
    "nameKana": "DOLPHIN",
    "nameLatin": "DOLPHIN",
    "archetypeId": "hybridClose",
    "concept": "群れで情報共有を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "blade": 6
    },
    "weaponGrowthAdjustments": {
      "blade": 0.07
    },
    "preferredWeapons": [
      "blade"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hawthorne-whale",
    "manufacturerId": "hawthorne",
    "seriesNumber": 29,
    "nameKana": "WHALE",
    "nameLatin": "WHALE",
    "archetypeId": "hybridRanged",
    "concept": "巨体でも省エネ移動を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hawthorne-dragonfly",
    "manufacturerId": "hawthorne",
    "seriesNumber": 30,
    "nameKana": "DRAGONFLY",
    "nameLatin": "DRAGONFLY",
    "archetypeId": "electronicWarfare",
    "concept": "急旋回する飛翔を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hawthorne-bee",
    "manufacturerId": "hawthorne",
    "seriesNumber": 31,
    "nameKana": "BEE",
    "nameLatin": "BEE",
    "archetypeId": "weaponSavant",
    "concept": "分業する群れを設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "hawthorne-swallow",
    "manufacturerId": "hawthorne",
    "seriesNumber": 32,
    "nameKana": "SWALLOW",
    "nameLatin": "SWALLOW",
    "archetypeId": "weaponSavant",
    "concept": "長距離飛行を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "hawthorne-raccoon",
    "manufacturerId": "hawthorne",
    "seriesNumber": 33,
    "nameKana": "RACCOON",
    "nameLatin": "RACCOON",
    "archetypeId": "countermeasure",
    "concept": "臨機応変な採食を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hawthorne-boar",
    "manufacturerId": "hawthorne",
    "seriesNumber": 34,
    "nameKana": "BOAR",
    "nameLatin": "BOAR",
    "archetypeId": "countermeasure",
    "concept": "突進を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hawthorne-tortoise",
    "manufacturerId": "hawthorne",
    "seriesNumber": 35,
    "nameKana": "TORTOISE",
    "nameLatin": "TORTOISE",
    "archetypeId": "burstAssault",
    "concept": "甲羅で守るを設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "hawthorne-otter",
    "manufacturerId": "hawthorne",
    "seriesNumber": 36,
    "nameKana": "OTTER",
    "nameLatin": "OTTER",
    "archetypeId": "adaptive",
    "concept": "道具を使う器用さを設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hawthorne-wolverine",
    "manufacturerId": "hawthorne",
    "seriesNumber": 37,
    "nameKana": "WOLVERINE",
    "nameLatin": "WOLVERINE",
    "archetypeId": "dataGlass",
    "concept": "執拗な追跡を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "hawthorne-crab",
    "manufacturerId": "hawthorne",
    "seriesNumber": 38,
    "nameKana": "CRAB",
    "nameLatin": "CRAB",
    "archetypeId": "overengineered",
    "concept": "横歩きを設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "hawthorne-shark",
    "manufacturerId": "hawthorne",
    "seriesNumber": 39,
    "nameKana": "SHARK",
    "nameLatin": "SHARK",
    "archetypeId": "fortress",
    "concept": "索敵し続ける捕食を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "hawthorne-bat",
    "manufacturerId": "hawthorne",
    "seriesNumber": 40,
    "nameKana": "BAT",
    "nameLatin": "BAT",
    "archetypeId": "volatileExperimental",
    "concept": "反響定位を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。ホーソーンらしく、その動物の行動原理をAI判断と機体挙動へ一体化する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.15,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.62
  },
  {
    "id": "arcadia-zeus",
    "manufacturerId": "arcadia",
    "seriesNumber": 21,
    "nameKana": "ZEUS",
    "nameLatin": "ZEUS",
    "archetypeId": "apex",
    "concept": "雷霆の主神を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "arcadia-hephaestus",
    "manufacturerId": "arcadia",
    "seriesNumber": 22,
    "nameKana": "HEPHAESTUS",
    "nameLatin": "HEPHAESTUS",
    "archetypeId": "glassCannon",
    "concept": "鍛冶神を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "arcadia-hermes-ii",
    "manufacturerId": "arcadia",
    "seriesNumber": 23,
    "nameKana": "HERMES-II",
    "nameLatin": "HERMES-II",
    "archetypeId": "ultraMobile",
    "concept": "神速の伝令を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 6
    },
    "weaponGrowthAdjustments": {
      "lance": 0.07
    },
    "preferredWeapons": [
      "lance"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "arcadia-hades",
    "manufacturerId": "arcadia",
    "seriesNumber": 24,
    "nameKana": "HADES",
    "nameLatin": "HADES",
    "archetypeId": "fortress",
    "concept": "冥府の王を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "arcadia-minerva",
    "manufacturerId": "arcadia",
    "seriesNumber": 25,
    "nameKana": "MINERVA",
    "nameLatin": "MINERVA",
    "archetypeId": "precision",
    "concept": "知恵と戦術を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "arcadia-hebe",
    "manufacturerId": "arcadia",
    "seriesNumber": 26,
    "nameKana": "HEBE",
    "nameLatin": "HEBE",
    "archetypeId": "lateGrowth",
    "concept": "若さの象徴を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1.12,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "arcadia-dionysus",
    "manufacturerId": "arcadia",
    "seriesNumber": 27,
    "nameKana": "DIONYSUS",
    "nameLatin": "DIONYSUS",
    "archetypeId": "volatileExperimental",
    "concept": "陶酔と予測不能を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "arcadia-achilles",
    "manufacturerId": "arcadia",
    "seriesNumber": 28,
    "nameKana": "ACHILLES",
    "nameLatin": "ACHILLES",
    "archetypeId": "hybridClose",
    "concept": "一点突破の英雄を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "arcadia-odysseus",
    "manufacturerId": "arcadia",
    "seriesNumber": 29,
    "nameKana": "ODYSSEUS",
    "nameLatin": "ODYSSEUS",
    "archetypeId": "hybridRanged",
    "concept": "策略家を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "arcadia-thoth",
    "manufacturerId": "arcadia",
    "seriesNumber": 30,
    "nameKana": "THOTH",
    "nameLatin": "THOTH",
    "archetypeId": "electronicWarfare",
    "concept": "知識神を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 9,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "arcadia-hercules",
    "manufacturerId": "arcadia",
    "seriesNumber": 31,
    "nameKana": "HERCULES",
    "nameLatin": "HERCULES",
    "archetypeId": "weaponSavant",
    "concept": "怪力英雄を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "arcadia-medusa",
    "manufacturerId": "arcadia",
    "seriesNumber": 32,
    "nameKana": "MEDUSA",
    "nameLatin": "MEDUSA",
    "archetypeId": "weaponSavant",
    "concept": "視線で相手を封じる怪物を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "arcadia-bastet",
    "manufacturerId": "arcadia",
    "seriesNumber": 33,
    "nameKana": "BASTET",
    "nameLatin": "BASTET",
    "archetypeId": "countermeasure",
    "concept": "しなやかな守護神を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "arcadia-baldur",
    "manufacturerId": "arcadia",
    "seriesNumber": 34,
    "nameKana": "BALDUR",
    "nameLatin": "BALDUR",
    "archetypeId": "minimalist",
    "concept": "光の神を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "arcadia-fenrir",
    "manufacturerId": "arcadia",
    "seriesNumber": 35,
    "nameKana": "FENRIR",
    "nameLatin": "FENRIR",
    "archetypeId": "burstAssault",
    "concept": "破滅的な獣を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "arcadia-heimdall",
    "manufacturerId": "arcadia",
    "seriesNumber": 36,
    "nameKana": "HEIMDALL",
    "nameLatin": "HEIMDALL",
    "archetypeId": "adaptive",
    "concept": "境界を見張る神を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "arcadia-osiris",
    "manufacturerId": "arcadia",
    "seriesNumber": 37,
    "nameKana": "OSIRIS",
    "nameLatin": "OSIRIS",
    "archetypeId": "dataGlass",
    "concept": "死と再生を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "arcadia-isis",
    "manufacturerId": "arcadia",
    "seriesNumber": 38,
    "nameKana": "ISIS",
    "nameLatin": "ISIS",
    "archetypeId": "overengineered",
    "concept": "保護と再生を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "arcadia-valkyrie",
    "manufacturerId": "arcadia",
    "seriesNumber": 39,
    "nameKana": "VALKYRIE",
    "nameLatin": "VALKYRIE",
    "archetypeId": "minimalist",
    "concept": "空から降りる戦士を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "arcadia-chaos",
    "manufacturerId": "arcadia",
    "seriesNumber": 40,
    "nameKana": "CHAOS",
    "nameLatin": "CHAOS",
    "archetypeId": "volatileExperimental",
    "concept": "秩序以前の混沌を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。アルカディアらしく、神話上の理想像を先に定義し、現実の技術をそこへ無理にでも近づける。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "solberg-canopus",
    "manufacturerId": "solberg",
    "seriesNumber": 21,
    "nameKana": "CANOPUS",
    "nameLatin": "CANOPUS",
    "archetypeId": "apex",
    "concept": "全天で二番目に明るい恒星を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "solberg-achernar",
    "manufacturerId": "solberg",
    "seriesNumber": 22,
    "nameKana": "ACHERNAR",
    "nameLatin": "ACHERNAR",
    "archetypeId": "glassCannon",
    "concept": "高速自転星を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamCannon": 6
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.07
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "solberg-acrux",
    "manufacturerId": "solberg",
    "seriesNumber": 23,
    "nameKana": "ACRUX",
    "nameLatin": "ACRUX",
    "archetypeId": "ultraMobile",
    "concept": "南十字の主星を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 6
    },
    "weaponGrowthAdjustments": {
      "lance": 0.07
    },
    "preferredWeapons": [
      "lance"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "solberg-hadar",
    "manufacturerId": "solberg",
    "seriesNumber": 24,
    "nameKana": "HADAR",
    "nameLatin": "HADAR",
    "archetypeId": "fortress",
    "concept": "青色巨星を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "solberg-shaula",
    "manufacturerId": "solberg",
    "seriesNumber": 25,
    "nameKana": "SHAULA",
    "nameLatin": "SHAULA",
    "archetypeId": "precision",
    "concept": "高温の青白色星を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "solberg-gacrux",
    "manufacturerId": "solberg",
    "seriesNumber": 26,
    "nameKana": "GACRUX",
    "nameLatin": "GACRUX",
    "archetypeId": "lateGrowth",
    "concept": "赤色巨星を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1.12,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "solberg-alnilam",
    "manufacturerId": "solberg",
    "seriesNumber": 27,
    "nameKana": "ALNILAM",
    "nameLatin": "ALNILAM",
    "archetypeId": "volatileExperimental",
    "concept": "三つ星中央を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "solberg-alnair",
    "manufacturerId": "solberg",
    "seriesNumber": 28,
    "nameKana": "ALNAIR",
    "nameLatin": "ALNAIR",
    "archetypeId": "hybridClose",
    "concept": "南天の恒星を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "solberg-mirfak",
    "manufacturerId": "solberg",
    "seriesNumber": 29,
    "nameKana": "MIRFAK",
    "nameLatin": "MIRFAK",
    "archetypeId": "hybridRanged",
    "concept": "若い星団の主星を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "beamCannon": 6
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.07
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "solberg-dubhe",
    "manufacturerId": "solberg",
    "seriesNumber": 30,
    "nameKana": "DUBHE",
    "nameLatin": "DUBHE",
    "archetypeId": "electronicWarfare",
    "concept": "北斗の指極星を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 9,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "solberg-merak",
    "manufacturerId": "solberg",
    "seriesNumber": 31,
    "nameKana": "MERAK",
    "nameLatin": "MERAK",
    "archetypeId": "weaponSavant",
    "concept": "北斗の基準星を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "solberg-alioth",
    "manufacturerId": "solberg",
    "seriesNumber": 32,
    "nameKana": "ALIOTH",
    "nameLatin": "ALIOTH",
    "archetypeId": "weaponSavant",
    "concept": "北斗の中軸を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "solberg-mizar",
    "manufacturerId": "solberg",
    "seriesNumber": 33,
    "nameKana": "MIZAR",
    "nameLatin": "MIZAR",
    "archetypeId": "countermeasure",
    "concept": "連星の主星を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "solberg-alcor",
    "manufacturerId": "solberg",
    "seriesNumber": 34,
    "nameKana": "ALCOR",
    "nameLatin": "ALCOR",
    "archetypeId": "reliable",
    "concept": "伴星を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "solberg-schedar",
    "manufacturerId": "solberg",
    "seriesNumber": 35,
    "nameKana": "SCHEDAR",
    "nameLatin": "SCHEDAR",
    "archetypeId": "glassCannon",
    "concept": "カシオペヤ座の主星を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "solberg-caph",
    "manufacturerId": "solberg",
    "seriesNumber": 36,
    "nameKana": "CAPH",
    "nameLatin": "CAPH",
    "archetypeId": "adaptive",
    "concept": "カシオペヤ座の端を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "solberg-hamal",
    "manufacturerId": "solberg",
    "seriesNumber": 37,
    "nameKana": "HAMAL",
    "nameLatin": "HAMAL",
    "archetypeId": "dataGlass",
    "concept": "牡羊座の主星を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "solberg-menkar",
    "manufacturerId": "solberg",
    "seriesNumber": 38,
    "nameKana": "MENKAR",
    "nameLatin": "MENKAR",
    "archetypeId": "overengineered",
    "concept": "赤色巨星を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "solberg-zuben",
    "manufacturerId": "solberg",
    "seriesNumber": 39,
    "nameKana": "ZUBEN",
    "nameLatin": "ZUBEN",
    "archetypeId": "minimalist",
    "concept": "天秤の恒星を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "solberg-rasalhague",
    "manufacturerId": "solberg",
    "seriesNumber": 40,
    "nameKana": "RASALHAGUE",
    "nameLatin": "RASALHAGUE",
    "archetypeId": "volatileExperimental",
    "concept": "蛇遣い座の明るい星を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。ソルベルグらしく、極端な設計でもシミュレーションで予測可能なら商品化する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.15,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.62
  },
  {
    "id": "grayson-derecho",
    "manufacturerId": "grayson",
    "seriesNumber": 21,
    "nameKana": "DERECHO",
    "nameLatin": "DERECHO",
    "archetypeId": "apex",
    "concept": "長大な直線風を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "grayson-haboob",
    "manufacturerId": "grayson",
    "seriesNumber": 22,
    "nameKana": "HABOOB",
    "nameLatin": "HABOOB",
    "archetypeId": "glassCannon",
    "concept": "砂塵壁を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "machineGun": 6
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.07
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "grayson-supercell",
    "manufacturerId": "grayson",
    "seriesNumber": 23,
    "nameKana": "SUPERCELL",
    "nameLatin": "SUPERCELL",
    "archetypeId": "ultraMobile",
    "concept": "巨大積乱雲を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 6
    },
    "weaponGrowthAdjustments": {
      "lance": 0.07
    },
    "preferredWeapons": [
      "lance"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "grayson-microburst",
    "manufacturerId": "grayson",
    "seriesNumber": 24,
    "nameKana": "MICROBURST",
    "nameLatin": "MICROBURST",
    "archetypeId": "fortress",
    "concept": "局所的な下降気流を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "grayson-noreaster",
    "manufacturerId": "grayson",
    "seriesNumber": 25,
    "nameKana": "NOREASTER",
    "nameLatin": "NOREASTER",
    "archetypeId": "precision",
    "concept": "北東暴風を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "grayson-sirocco",
    "manufacturerId": "grayson",
    "seriesNumber": 26,
    "nameKana": "SIROCCO",
    "nameLatin": "SIROCCO",
    "archetypeId": "lateGrowth",
    "concept": "熱い砂漠風を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1.12,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "grayson-mistral",
    "manufacturerId": "grayson",
    "seriesNumber": 27,
    "nameKana": "MISTRAL",
    "nameLatin": "MISTRAL",
    "archetypeId": "volatileExperimental",
    "concept": "乾いた強風を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "grayson-chinook",
    "manufacturerId": "grayson",
    "seriesNumber": 28,
    "nameKana": "CHINOOK",
    "nameLatin": "CHINOOK",
    "archetypeId": "volatileExperimental",
    "concept": "暖気を運ぶ下降風を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "machineGun": 6
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.07
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "grayson-bora",
    "manufacturerId": "grayson",
    "seriesNumber": 29,
    "nameKana": "BORA",
    "nameLatin": "BORA",
    "archetypeId": "hybridRanged",
    "concept": "冷たい局地風を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "grayson-santaana",
    "manufacturerId": "grayson",
    "seriesNumber": 30,
    "nameKana": "SANTAANA",
    "nameLatin": "SANTAANA",
    "archetypeId": "electronicWarfare",
    "concept": "乾燥した強風を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 9,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "grayson-waterspout",
    "manufacturerId": "grayson",
    "seriesNumber": 31,
    "nameKana": "WATERSPOUT",
    "nameLatin": "WATERSPOUT",
    "archetypeId": "weaponSavant",
    "concept": "海上竜巻を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "grayson-icestorm",
    "manufacturerId": "grayson",
    "seriesNumber": 32,
    "nameKana": "ICESTORM",
    "nameLatin": "ICESTORM",
    "archetypeId": "weaponSavant",
    "concept": "着氷を伴う嵐を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "grayson-sleet",
    "manufacturerId": "grayson",
    "seriesNumber": 33,
    "nameKana": "SLEET",
    "nameLatin": "SLEET",
    "archetypeId": "countermeasure",
    "concept": "氷粒混じりの雨を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "grayson-rainband",
    "manufacturerId": "grayson",
    "seriesNumber": 34,
    "nameKana": "RAINBAND",
    "nameLatin": "RAINBAND",
    "archetypeId": "reliable",
    "concept": "帯状降雨を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "grayson-sunshower",
    "manufacturerId": "grayson",
    "seriesNumber": 35,
    "nameKana": "SUNSHOWER",
    "nameLatin": "SUNSHOWER",
    "archetypeId": "burstAssault",
    "concept": "晴天の通り雨を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "grayson-heatburst",
    "manufacturerId": "grayson",
    "seriesNumber": 36,
    "nameKana": "HEATBURST",
    "nameLatin": "HEATBURST",
    "archetypeId": "adaptive",
    "concept": "突発的な熱風を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "grayson-thundersnow",
    "manufacturerId": "grayson",
    "seriesNumber": 37,
    "nameKana": "THUNDERSNOW",
    "nameLatin": "THUNDERSNOW",
    "archetypeId": "dataGlass",
    "concept": "雷を伴う雪を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "grayson-firewhirl",
    "manufacturerId": "grayson",
    "seriesNumber": 38,
    "nameKana": "FIREWHIRL",
    "nameLatin": "FIREWHIRL",
    "archetypeId": "glassCannon",
    "concept": "火災旋風を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "grayson-seafog",
    "manufacturerId": "grayson",
    "seriesNumber": 39,
    "nameKana": "SEAFOG",
    "nameLatin": "SEAFOG",
    "archetypeId": "minimalist",
    "concept": "海霧を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "grayson-cloudburst",
    "manufacturerId": "grayson",
    "seriesNumber": 40,
    "nameKana": "CLOUDBURST",
    "nameLatin": "CLOUDBURST",
    "archetypeId": "volatileExperimental",
    "concept": "短時間の集中豪雨を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。グレイソンらしく、特殊な現象を一機限りの芸ではなく大量生産で再現可能な工程へ落とし込む。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.15,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.62
  },
  {
    "id": "laplace-poisson",
    "manufacturerId": "laplace",
    "seriesNumber": 21,
    "nameKana": "POISSON",
    "nameLatin": "POISSON",
    "archetypeId": "minimalist",
    "label": "数理実証",
    "concept": "離散事象の確率分布を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "laplace-bernoulli",
    "manufacturerId": "laplace",
    "seriesNumber": 22,
    "nameKana": "BERNOULLI",
    "nameLatin": "BERNOULLI",
    "archetypeId": "glassCannon",
    "label": "数理実証",
    "concept": "二項確率を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "laplace-newton",
    "manufacturerId": "laplace",
    "seriesNumber": 23,
    "nameKana": "NEWTON",
    "nameLatin": "NEWTON",
    "archetypeId": "ultraMobile",
    "label": "数理実証",
    "concept": "運動法則を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 6
    },
    "weaponGrowthAdjustments": {
      "lance": 0.07
    },
    "preferredWeapons": [
      "lance"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "laplace-riemann",
    "manufacturerId": "laplace",
    "seriesNumber": 24,
    "nameKana": "RIEMANN",
    "nameLatin": "RIEMANN",
    "archetypeId": "fortress",
    "label": "数理実証",
    "concept": "曲率を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "laplace-lagrange",
    "manufacturerId": "laplace",
    "seriesNumber": 25,
    "nameKana": "LAGRANGE",
    "nameLatin": "LAGRANGE",
    "archetypeId": "precision",
    "label": "数理実証",
    "concept": "最適化を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "laplace-pascal",
    "manufacturerId": "laplace",
    "seriesNumber": 26,
    "nameKana": "PASCAL",
    "nameLatin": "PASCAL",
    "archetypeId": "lateGrowth",
    "label": "数理実証",
    "concept": "組合せを設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1.12,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "laplace-fermat",
    "manufacturerId": "laplace",
    "seriesNumber": 27,
    "nameKana": "FERMAT",
    "nameLatin": "FERMAT",
    "archetypeId": "volatileExperimental",
    "label": "数理実証",
    "concept": "極値を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.62
  },
  {
    "id": "laplace-leibniz",
    "manufacturerId": "laplace",
    "seriesNumber": 28,
    "nameKana": "LEIBNIZ",
    "nameLatin": "LEIBNIZ",
    "archetypeId": "hybridClose",
    "label": "数理実証",
    "concept": "微積分体系を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "laplace-dirac",
    "manufacturerId": "laplace",
    "seriesNumber": 29,
    "nameKana": "DIRAC",
    "nameLatin": "DIRAC",
    "archetypeId": "hybridRanged",
    "label": "数理実証",
    "concept": "量子状態を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "beamCannon": 6
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.07
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "laplace-maxwell",
    "manufacturerId": "laplace",
    "seriesNumber": 30,
    "nameKana": "MAXWELL",
    "nameLatin": "MAXWELL",
    "archetypeId": "electronicWarfare",
    "label": "数理実証",
    "concept": "場の方程式を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 9,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "laplace-hamilton",
    "manufacturerId": "laplace",
    "seriesNumber": 31,
    "nameKana": "HAMILTON",
    "nameLatin": "HAMILTON",
    "archetypeId": "weaponSavant",
    "label": "数理実証",
    "concept": "位相空間を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.78
  },
  {
    "id": "laplace-kalman",
    "manufacturerId": "laplace",
    "seriesNumber": 32,
    "nameKana": "KALMAN",
    "nameLatin": "KALMAN",
    "archetypeId": "weaponSavant",
    "label": "数理実証",
    "concept": "状態推定を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.78
  },
  {
    "id": "laplace-mandelbrot",
    "manufacturerId": "laplace",
    "seriesNumber": 33,
    "nameKana": "MANDELBROT",
    "nameLatin": "MANDELBROT",
    "archetypeId": "countermeasure",
    "label": "数理実証",
    "concept": "自己相似を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "laplace-julia",
    "manufacturerId": "laplace",
    "seriesNumber": 34,
    "nameKana": "JULIA",
    "nameLatin": "JULIA",
    "archetypeId": "reliable",
    "label": "数理実証",
    "concept": "複素反復を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "laplace-montecarlo",
    "manufacturerId": "laplace",
    "seriesNumber": 35,
    "nameKana": "MONTECARLO",
    "nameLatin": "MONTECARLO",
    "archetypeId": "volatileExperimental",
    "label": "数理実証",
    "concept": "乱数試行を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 3,
      "missile": 2,
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "laplace-stochastic",
    "manufacturerId": "laplace",
    "seriesNumber": 36,
    "nameKana": "STOCHASTIC",
    "nameLatin": "STOCHASTIC",
    "archetypeId": "adaptive",
    "label": "数理実証",
    "concept": "確率過程を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "laplace-gradient",
    "manufacturerId": "laplace",
    "seriesNumber": 37,
    "nameKana": "GRADIENT",
    "nameLatin": "GRADIENT",
    "archetypeId": "dataGlass",
    "label": "数理実証",
    "concept": "最急降下を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.62
  },
  {
    "id": "laplace-eigen",
    "manufacturerId": "laplace",
    "seriesNumber": 38,
    "nameKana": "EIGEN",
    "nameLatin": "EIGEN",
    "archetypeId": "overengineered",
    "label": "数理実証",
    "concept": "固有値を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "laplace-chaosmap",
    "manufacturerId": "laplace",
    "seriesNumber": 39,
    "nameKana": "CHAOSMAP",
    "nameLatin": "CHAOSMAP",
    "archetypeId": "minimalist",
    "label": "数理実証",
    "concept": "非線形写像を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "laplace-optimum",
    "manufacturerId": "laplace",
    "seriesNumber": 40,
    "nameKana": "OPTIMUM",
    "nameLatin": "OPTIMUM",
    "archetypeId": "apex",
    "label": "数理実証",
    "concept": "目的関数の最小化を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。ラプラス機関らしく、見栄えの良い数値ではなく勝敗への寄与率を数理的に最大化する。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 9,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.95
  },
  {
    "id": "bureau13-case-21",
    "manufacturerId": "bureau13",
    "seriesNumber": 21,
    "nameKana": "CASE-21",
    "nameLatin": "CASE-21",
    "archetypeId": "apex",
    "label": "要求仕様",
    "concept": "要求仕様CASE-21を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1.375,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.7789999999999999
  },
  {
    "id": "bureau13-case-22",
    "manufacturerId": "bureau13",
    "seriesNumber": 22,
    "nameKana": "CASE-22",
    "nameLatin": "CASE-22",
    "archetypeId": "glassCannon",
    "label": "要求仕様",
    "concept": "要求仕様CASE-22を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1.1880000000000002,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.5084
  },
  {
    "id": "bureau13-case-23",
    "manufacturerId": "bureau13",
    "seriesNumber": 23,
    "nameKana": "CASE-23",
    "nameLatin": "CASE-23",
    "archetypeId": "ultraMobile",
    "label": "要求仕様",
    "concept": "要求仕様CASE-23を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 6
    },
    "weaponGrowthAdjustments": {
      "lance": 0.07
    },
    "preferredWeapons": [
      "lance"
    ],
    "statVarianceMultiplier": 1.1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.6396
  },
  {
    "id": "bureau13-case-24",
    "manufacturerId": "bureau13",
    "seriesNumber": 24,
    "nameKana": "CASE-24",
    "nameLatin": "CASE-24",
    "archetypeId": "fortress",
    "label": "要求仕様",
    "concept": "要求仕様CASE-24を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "beamCannon": 6
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.07
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "statVarianceMultiplier": 0.902,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.6396
  },
  {
    "id": "bureau13-case-25",
    "manufacturerId": "bureau13",
    "seriesNumber": 25,
    "nameKana": "CASE-25",
    "nameLatin": "CASE-25",
    "archetypeId": "precision",
    "label": "要求仕様",
    "concept": "要求仕様CASE-25を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.792,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.7789999999999999
  },
  {
    "id": "bureau13-case-26",
    "manufacturerId": "bureau13",
    "seriesNumber": 26,
    "nameKana": "CASE-26",
    "nameLatin": "CASE-26",
    "archetypeId": "lateGrowth",
    "label": "要求仕様",
    "concept": "要求仕様CASE-26を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1.375,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.7789999999999999
  },
  {
    "id": "bureau13-case-27",
    "manufacturerId": "bureau13",
    "seriesNumber": 27,
    "nameKana": "CASE-27",
    "nameLatin": "CASE-27",
    "archetypeId": "volatileExperimental",
    "label": "要求仕様",
    "concept": "要求仕様CASE-27を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.375,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.5084
  },
  {
    "id": "bureau13-case-28",
    "manufacturerId": "bureau13",
    "seriesNumber": 28,
    "nameKana": "CASE-28",
    "nameLatin": "CASE-28",
    "archetypeId": "hybridClose",
    "label": "要求仕様",
    "concept": "要求仕様CASE-28を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "blade": 6
    },
    "weaponGrowthAdjustments": {
      "blade": 0.07
    },
    "preferredWeapons": [
      "blade"
    ],
    "statVarianceMultiplier": 1.1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.7789999999999999
  },
  {
    "id": "bureau13-case-29",
    "manufacturerId": "bureau13",
    "seriesNumber": 29,
    "nameKana": "CASE-29",
    "nameLatin": "CASE-29",
    "archetypeId": "hybridRanged",
    "label": "要求仕様",
    "concept": "要求仕様CASE-29を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 0.935,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.7789999999999999
  },
  {
    "id": "bureau13-case-30",
    "manufacturerId": "bureau13",
    "seriesNumber": 30,
    "nameKana": "CASE-30",
    "nameLatin": "CASE-30",
    "archetypeId": "electronicWarfare",
    "label": "要求仕様",
    "concept": "要求仕様CASE-30を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1.1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.7789999999999999
  },
  {
    "id": "bureau13-case-31",
    "manufacturerId": "bureau13",
    "seriesNumber": 31,
    "nameKana": "CASE-31",
    "nameLatin": "CASE-31",
    "archetypeId": "weaponSavant",
    "label": "要求仕様",
    "concept": "要求仕様CASE-31を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.375,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.6396
  },
  {
    "id": "bureau13-case-32",
    "manufacturerId": "bureau13",
    "seriesNumber": 32,
    "nameKana": "CASE-32",
    "nameLatin": "CASE-32",
    "archetypeId": "weaponSavant",
    "label": "要求仕様",
    "concept": "要求仕様CASE-32を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.276,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.6396
  },
  {
    "id": "bureau13-case-33",
    "manufacturerId": "bureau13",
    "seriesNumber": 33,
    "nameKana": "CASE-33",
    "nameLatin": "CASE-33",
    "archetypeId": "countermeasure",
    "label": "要求仕様",
    "concept": "要求仕様CASE-33を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1.1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.7789999999999999
  },
  {
    "id": "bureau13-case-34",
    "manufacturerId": "bureau13",
    "seriesNumber": 34,
    "nameKana": "CASE-34",
    "nameLatin": "CASE-34",
    "archetypeId": "reliable",
    "label": "要求仕様",
    "concept": "要求仕様CASE-34を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.935,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.7789999999999999
  },
  {
    "id": "bureau13-case-35",
    "manufacturerId": "bureau13",
    "seriesNumber": 35,
    "nameKana": "CASE-35",
    "nameLatin": "CASE-35",
    "archetypeId": "burstAssault",
    "label": "要求仕様",
    "concept": "要求仕様CASE-35を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.276,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.04,
    "availabilityWeight": 0.6396
  },
  {
    "id": "bureau13-case-36",
    "manufacturerId": "bureau13",
    "seriesNumber": 36,
    "nameKana": "CASE-36",
    "nameLatin": "CASE-36",
    "archetypeId": "adaptive",
    "label": "要求仕様",
    "concept": "要求仕様CASE-36を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1.375,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.7789999999999999
  },
  {
    "id": "bureau13-case-37",
    "manufacturerId": "bureau13",
    "seriesNumber": 37,
    "nameKana": "CASE-37",
    "nameLatin": "CASE-37",
    "archetypeId": "dataGlass",
    "label": "要求仕様",
    "concept": "要求仕様CASE-37を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1.1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.5084
  },
  {
    "id": "bureau13-case-38",
    "manufacturerId": "bureau13",
    "seriesNumber": 38,
    "nameKana": "CASE-38",
    "nameLatin": "CASE-38",
    "archetypeId": "overengineered",
    "label": "要求仕様",
    "concept": "要求仕様CASE-38を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1.1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.7789999999999999
  },
  {
    "id": "bureau13-case-39",
    "manufacturerId": "bureau13",
    "seriesNumber": 39,
    "nameKana": "CASE-39",
    "nameLatin": "CASE-39",
    "archetypeId": "minimalist",
    "label": "要求仕様",
    "concept": "要求仕様CASE-39を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.792,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0,
    "availabilityWeight": 0.7789999999999999
  },
  {
    "id": "bureau13-case-40",
    "manufacturerId": "bureau13",
    "seriesNumber": 40,
    "nameKana": "CASE-40",
    "nameLatin": "CASE-40",
    "archetypeId": "volatileExperimental",
    "label": "要求仕様",
    "concept": "要求仕様CASE-40を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。第十三技術局らしく、シリーズ間の統一感を捨て、CASEごとの要求仕様だけを正解とする。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.265,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.5084
  },
  {
    "id": "eidolon-poltergeist",
    "manufacturerId": "eidolon",
    "seriesNumber": 21,
    "nameKana": "POLTERGEIST",
    "nameLatin": "POLTERGEIST",
    "archetypeId": "apex",
    "label": "個体差実験",
    "concept": "物理現象としての怪異を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1.5,
    "growthVarianceMultiplier": 1.4375,
    "eccentricBonusAdjustment": 0.16,
    "availabilityWeight": 0.741
  },
  {
    "id": "eidolon-apparition",
    "manufacturerId": "eidolon",
    "seriesNumber": 22,
    "nameKana": "APPARITION",
    "nameLatin": "APPARITION",
    "archetypeId": "glassCannon",
    "label": "個体差実験",
    "concept": "輪郭だけの幻影を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamCannon": 6
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.07
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "statVarianceMultiplier": 1.296,
    "growthVarianceMultiplier": 1.15,
    "eccentricBonusAdjustment": 0.06,
    "availabilityWeight": 0.48400000000000003
  },
  {
    "id": "eidolon-nightmare",
    "manufacturerId": "eidolon",
    "seriesNumber": 23,
    "nameKana": "NIGHTMARE",
    "nameLatin": "NIGHTMARE",
    "archetypeId": "ultraMobile",
    "label": "個体差実験",
    "concept": "悪夢を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 6
    },
    "weaponGrowthAdjustments": {
      "lance": 0.07
    },
    "preferredWeapons": [
      "lance"
    ],
    "statVarianceMultiplier": 1.2,
    "growthVarianceMultiplier": 1.15,
    "eccentricBonusAdjustment": 0.06,
    "availabilityWeight": 0.6084
  },
  {
    "id": "eidolon-oneiros",
    "manufacturerId": "eidolon",
    "seriesNumber": 24,
    "nameKana": "ONEIROS",
    "nameLatin": "ONEIROS",
    "archetypeId": "fortress",
    "label": "個体差実験",
    "concept": "夢そのものを設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1.5,
    "growthVarianceMultiplier": 1.4375,
    "eccentricBonusAdjustment": 0.16,
    "availabilityWeight": 0.6084
  },
  {
    "id": "eidolon-hypnos",
    "manufacturerId": "eidolon",
    "seriesNumber": 25,
    "nameKana": "HYPNOS",
    "nameLatin": "HYPNOS",
    "archetypeId": "precision",
    "label": "個体差実験",
    "concept": "眠りを設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.864,
    "growthVarianceMultiplier": 0.9429999999999998,
    "eccentricBonusAdjustment": 0.06,
    "availabilityWeight": 0.741
  },
  {
    "id": "eidolon-mneme",
    "manufacturerId": "eidolon",
    "seriesNumber": 26,
    "nameKana": "MNEME",
    "nameLatin": "MNEME",
    "archetypeId": "lateGrowth",
    "label": "個体差実験",
    "concept": "記憶単位を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {
      "output": -2,
      "mobility": -2,
      "control": -2,
      "engine": -2,
      "compute": -2,
      "sensor": -2,
      "ai": -2
    },
    "growthAdjustments": {
      "output": 0.03,
      "mobility": 0.03,
      "control": 0.03,
      "engine": 0.03,
      "compute": 0.03,
      "sensor": 0.03,
      "ai": 0.03
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1.2,
    "growthVarianceMultiplier": 1.288,
    "eccentricBonusAdjustment": 0.06,
    "availabilityWeight": 0.741
  },
  {
    "id": "eidolon-vestige",
    "manufacturerId": "eidolon",
    "seriesNumber": 27,
    "nameKana": "VESTIGE",
    "nameLatin": "VESTIGE",
    "archetypeId": "volatileExperimental",
    "label": "個体差実験",
    "concept": "残滓を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.5,
    "growthVarianceMultiplier": 1.4375,
    "eccentricBonusAdjustment": 0.16,
    "availabilityWeight": 0.48400000000000003
  },
  {
    "id": "eidolon-shadow",
    "manufacturerId": "eidolon",
    "seriesNumber": 28,
    "nameKana": "SHADOW",
    "nameLatin": "SHADOW",
    "archetypeId": "hybridClose",
    "label": "個体差実験",
    "concept": "影を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.2,
    "growthVarianceMultiplier": 1.15,
    "eccentricBonusAdjustment": 0.06,
    "availabilityWeight": 0.741
  },
  {
    "id": "eidolon-whisper",
    "manufacturerId": "eidolon",
    "seriesNumber": 29,
    "nameKana": "WHISPER",
    "nameLatin": "WHISPER",
    "archetypeId": "hybridRanged",
    "label": "個体差実験",
    "concept": "囁きを設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.02,
    "growthVarianceMultiplier": 1.035,
    "eccentricBonusAdjustment": 0.06,
    "availabilityWeight": 0.741
  },
  {
    "id": "eidolon-facade",
    "manufacturerId": "eidolon",
    "seriesNumber": 30,
    "nameKana": "FACADE",
    "nameLatin": "FACADE",
    "archetypeId": "electronicWarfare",
    "label": "個体差実験",
    "concept": "外面を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.5,
    "growthVarianceMultiplier": 1.4375,
    "eccentricBonusAdjustment": 0.16,
    "availabilityWeight": 0.741
  },
  {
    "id": "eidolon-mask",
    "manufacturerId": "eidolon",
    "seriesNumber": 31,
    "nameKana": "MASK",
    "nameLatin": "MASK",
    "archetypeId": "weaponSavant",
    "label": "個体差実験",
    "concept": "仮面を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.296,
    "growthVarianceMultiplier": 1.15,
    "eccentricBonusAdjustment": 0.06,
    "availabilityWeight": 0.6084
  },
  {
    "id": "eidolon-mirror",
    "manufacturerId": "eidolon",
    "seriesNumber": 32,
    "nameKana": "MIRROR",
    "nameLatin": "MIRROR",
    "archetypeId": "weaponSavant",
    "label": "個体差実験",
    "concept": "鏡像を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.392,
    "growthVarianceMultiplier": 1.242,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.6084
  },
  {
    "id": "eidolon-ghost",
    "manufacturerId": "eidolon",
    "seriesNumber": 33,
    "nameKana": "GHOST",
    "nameLatin": "GHOST",
    "archetypeId": "countermeasure",
    "label": "個体差実験",
    "concept": "幽霊を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1.5,
    "growthVarianceMultiplier": 1.4375,
    "eccentricBonusAdjustment": 0.16,
    "availabilityWeight": 0.741
  },
  {
    "id": "eidolon-veil",
    "manufacturerId": "eidolon",
    "seriesNumber": 34,
    "nameKana": "VEIL",
    "nameLatin": "VEIL",
    "archetypeId": "reliable",
    "label": "個体差実験",
    "concept": "境界を隠す幕を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1.02,
    "growthVarianceMultiplier": 1.035,
    "eccentricBonusAdjustment": 0.06,
    "availabilityWeight": 0.741
  },
  {
    "id": "eidolon-trace",
    "manufacturerId": "eidolon",
    "seriesNumber": 35,
    "nameKana": "TRACE",
    "nameLatin": "TRACE",
    "archetypeId": "burstAssault",
    "label": "個体差実験",
    "concept": "痕跡を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.392,
    "growthVarianceMultiplier": 1.242,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.6084
  },
  {
    "id": "eidolon-afterglow",
    "manufacturerId": "eidolon",
    "seriesNumber": 36,
    "nameKana": "AFTERGLOW",
    "nameLatin": "AFTERGLOW",
    "archetypeId": "adaptive",
    "label": "個体差実験",
    "concept": "残光を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1.5,
    "growthVarianceMultiplier": 1.4375,
    "eccentricBonusAdjustment": 0.16,
    "availabilityWeight": 0.741
  },
  {
    "id": "eidolon-delusion",
    "manufacturerId": "eidolon",
    "seriesNumber": 37,
    "nameKana": "DELUSION",
    "nameLatin": "DELUSION",
    "archetypeId": "dataGlass",
    "label": "個体差実験",
    "concept": "誤認を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1.2,
    "growthVarianceMultiplier": 1.15,
    "eccentricBonusAdjustment": 0.06,
    "availabilityWeight": 0.48400000000000003
  },
  {
    "id": "eidolon-reverie",
    "manufacturerId": "eidolon",
    "seriesNumber": 38,
    "nameKana": "REVERIE",
    "nameLatin": "REVERIE",
    "archetypeId": "overengineered",
    "label": "個体差実験",
    "concept": "白昼夢を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1.2,
    "growthVarianceMultiplier": 1.15,
    "eccentricBonusAdjustment": 0.06,
    "availabilityWeight": 0.741
  },
  {
    "id": "eidolon-liminal",
    "manufacturerId": "eidolon",
    "seriesNumber": 39,
    "nameKana": "LIMINAL",
    "nameLatin": "LIMINAL",
    "archetypeId": "minimalist",
    "label": "個体差実験",
    "concept": "境界状態を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 1.5,
    "growthVarianceMultiplier": 1.4375,
    "eccentricBonusAdjustment": 0.16,
    "availabilityWeight": 0.741
  },
  {
    "id": "eidolon-phantasm",
    "manufacturerId": "eidolon",
    "seriesNumber": 40,
    "nameKana": "PHANTASM",
    "nameLatin": "PHANTASM",
    "archetypeId": "volatileExperimental",
    "label": "個体差実験",
    "concept": "幻像を設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。エイドロン研究所らしく、個体差を欠陥ではなく意図的な研究変数として残す。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.38,
    "growthVarianceMultiplier": 1.265,
    "eccentricBonusAdjustment": 0.11,
    "availabilityWeight": 0.48400000000000003
  },
  {
    "id": "logos-ratio",
    "manufacturerId": "logos",
    "seriesNumber": 21,
    "nameKana": "RATIO",
    "nameLatin": "RATIO",
    "archetypeId": "balanced",
    "label": "不明体系",
    "concept": "比と理性を設計モチーフに、象徴そのものを「完成形」とみなし、弱点を減らしながら全体水準を引き上げる。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1.15,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.6839999999999999
  },
  {
    "id": "logos-dynamis",
    "manufacturerId": "logos",
    "seriesNumber": 22,
    "nameKana": "DYNAMIS",
    "nameLatin": "DYNAMIS",
    "archetypeId": "glassCannon",
    "label": "不明体系",
    "concept": "可能態を設計モチーフに、爆発的な一瞬を優先し、平時の余裕を切り捨てて最大出力へ振り切る。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {
      "output": 3,
      "control": 2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamCannon": 6
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.07
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "statVarianceMultiplier": 1.08,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.44639999999999996
  },
  {
    "id": "logos-energeia",
    "manufacturerId": "logos",
    "seriesNumber": 23,
    "nameKana": "ENERGEIA",
    "nameLatin": "ENERGEIA",
    "archetypeId": "ultraMobile",
    "label": "不明体系",
    "concept": "現実態を設計モチーフに、軽さと速度を最優先し、追いつかれる前に勝負を決める。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 6
    },
    "weaponGrowthAdjustments": {
      "lance": 0.07
    },
    "preferredWeapons": [
      "lance"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.5616
  },
  {
    "id": "logos-hyle",
    "manufacturerId": "logos",
    "seriesNumber": 24,
    "nameKana": "HYLE",
    "nameLatin": "HYLE",
    "archetypeId": "fortress",
    "label": "不明体系",
    "concept": "素材を設計モチーフに、動かない代わりに崩れないことを価値とし、耐性と機関余力を積み上げる。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 5,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 0.82,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.5616
  },
  {
    "id": "logos-morphe",
    "manufacturerId": "logos",
    "seriesNumber": 25,
    "nameKana": "MORPHE",
    "nameLatin": "MORPHE",
    "archetypeId": "precision",
    "label": "不明体系",
    "concept": "形相を設計モチーフに、わずかな誤差も許さず、精度・制御・観測の揃い方で勝つ。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.6839999999999999
  },
  {
    "id": "logos-monas",
    "manufacturerId": "logos",
    "seriesNumber": 26,
    "nameKana": "MONAS",
    "nameLatin": "MONAS",
    "archetypeId": "lateGrowth",
    "label": "不明体系",
    "concept": "単一性を設計モチーフに、納入時の完成度より調整余地を残し、三年間で真価が現れる。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1.15,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.6839999999999999
  },
  {
    "id": "logos-apeiron",
    "manufacturerId": "logos",
    "seriesNumber": 27,
    "nameKana": "APEIRON",
    "nameLatin": "APEIRON",
    "archetypeId": "volatileExperimental",
    "label": "不明体系",
    "concept": "無限を設計モチーフに、成功時の突出だけを狙い、個体差と不安定さを意図的に許容する。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.15000000000000002,
    "availabilityWeight": 0.44639999999999996
  },
  {
    "id": "logos-peras",
    "manufacturerId": "logos",
    "seriesNumber": 28,
    "nameKana": "PERAS",
    "nameLatin": "PERAS",
    "archetypeId": "hybridClose",
    "label": "不明体系",
    "concept": "限界を設計モチーフに、複数の近接兵装を切り替えても動きの連続性が崩れないよう設計する。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {
      "mobility": 4,
      "control": 2,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.6839999999999999
  },
  {
    "id": "logos-cosmos",
    "manufacturerId": "logos",
    "seriesNumber": 29,
    "nameKana": "COSMOS",
    "nameLatin": "COSMOS",
    "archetypeId": "hybridRanged",
    "label": "不明体系",
    "concept": "秩序ある宇宙を設計モチーフに、射撃方式を問わず一定の結果を出せるよう、観測と制御を均衡させる。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {
      "beamCannon": 6
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.07
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.6839999999999999
  },
  {
    "id": "logos-chaos",
    "manufacturerId": "logos",
    "seriesNumber": 30,
    "nameKana": "CHAOS",
    "nameLatin": "CHAOS",
    "archetypeId": "electronicWarfare",
    "label": "不明体系",
    "concept": "混沌を設計モチーフに、直接火力より相手の得意条件を崩すことを優先し、情報戦へ比重を置く。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 9,
      "drone": 3,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.6839999999999999
  },
  {
    "id": "logos-doxa",
    "manufacturerId": "logos",
    "seriesNumber": 31,
    "nameKana": "DOXA",
    "nameLatin": "DOXA",
    "archetypeId": "dataGlass",
    "label": "不明体系",
    "concept": "意見を設計モチーフに、機体本体は平凡でも一つの兵装だけ常識外の適性を持たせる。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 6
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.07
    },
    "preferredWeapons": [
      "hammer"
    ],
    "statVarianceMultiplier": 1.15,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.44639999999999996
  },
  {
    "id": "logos-episteme",
    "manufacturerId": "logos",
    "seriesNumber": 32,
    "nameKana": "EPISTEME",
    "nameLatin": "EPISTEME",
    "archetypeId": "weaponSavant",
    "label": "不明体系",
    "concept": "知識を設計モチーフに、一点の兵装性能を極端に研ぎ澄まし、それ以外の使い勝手を割り切る。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "laser": 6
    },
    "weaponGrowthAdjustments": {
      "laser": 0.07
    },
    "preferredWeapons": [
      "laser"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.09,
    "availabilityWeight": 0.5616
  },
  {
    "id": "logos-techne",
    "manufacturerId": "logos",
    "seriesNumber": 33,
    "nameKana": "TECHNE",
    "nameLatin": "TECHNE",
    "archetypeId": "countermeasure",
    "label": "不明体系",
    "concept": "技術知を設計モチーフに、相手の長所を受け止めて無効化するため、耐性・観測・判断を厚くする。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {
      "sensor": 3,
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 4,
    "resistanceAdjustment": 7,
    "weaponAdjustments": {
      "missile": 6
    },
    "weaponGrowthAdjustments": {
      "missile": 0.07
    },
    "preferredWeapons": [
      "missile"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.6839999999999999
  },
  {
    "id": "logos-poiesis",
    "manufacturerId": "logos",
    "seriesNumber": 34,
    "nameKana": "POIESIS",
    "nameLatin": "POIESIS",
    "archetypeId": "reliable",
    "label": "不明体系",
    "concept": "制作を設計モチーフに、派手さより再現性を優先し、毎試合同じ仕事ができることを価値にする。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": 5,
    "resistanceAdjustment": 2,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 0.85,
    "growthVarianceMultiplier": 0.9,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.6839999999999999
  },
  {
    "id": "logos-gnosis",
    "manufacturerId": "logos",
    "seriesNumber": 35,
    "nameKana": "GNOSIS",
    "nameLatin": "GNOSIS",
    "archetypeId": "burstAssault",
    "label": "不明体系",
    "concept": "認識を設計モチーフに、短時間の突進性能へ集中し、長期稼働を前提から外す。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -7,
    "resistanceAdjustment": -4,
    "weaponAdjustments": {
      "beamBlade": 6
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.07
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "statVarianceMultiplier": 1.16,
    "growthVarianceMultiplier": 1.08,
    "eccentricBonusAdjustment": 0.09,
    "availabilityWeight": 0.5616
  },
  {
    "id": "logos-krisis",
    "manufacturerId": "logos",
    "seriesNumber": 36,
    "nameKana": "KRISIS",
    "nameLatin": "KRISIS",
    "archetypeId": "countermeasure",
    "label": "不明体系",
    "concept": "判断を設計モチーフに、一つの勝ち筋に依存せず、不利な抽選でも最低性能を残す。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -2,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "statVarianceMultiplier": 1.15,
    "growthVarianceMultiplier": 1.1,
    "eccentricBonusAdjustment": 0.1,
    "availabilityWeight": 0.6839999999999999
  },
  {
    "id": "logos-syntaxis",
    "manufacturerId": "logos",
    "seriesNumber": 37,
    "nameKana": "SYNTAXIS",
    "nameLatin": "SYNTAXIS",
    "archetypeId": "dataGlass",
    "label": "不明体系",
    "concept": "構文を設計モチーフに、機械的な強さを削ってでも情報取得・演算・判断の優位を最大化する。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {
      "compute": 4,
      "sensor": 4,
      "ai": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 3,
      "drone": 9,
      "missile": 2
    },
    "weaponGrowthAdjustments": {
      "drone": 0.07
    },
    "preferredWeapons": [
      "drone"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.44639999999999996
  },
  {
    "id": "logos-semeion",
    "manufacturerId": "logos",
    "seriesNumber": 38,
    "nameKana": "SEMEION",
    "nameLatin": "SEMEION",
    "archetypeId": "overengineered",
    "label": "不明体系",
    "concept": "記号を設計モチーフに、要求値を大きく超える余裕を持たせ、過剰なほど堅実に成立させる。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {
      "output": 4,
      "engine": 4,
      "mobility": -4
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 6
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.07
    },
    "preferredWeapons": [
      "cannon"
    ],
    "statVarianceMultiplier": 1,
    "growthVarianceMultiplier": 1,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.6839999999999999
  },
  {
    "id": "logos-dialectic",
    "manufacturerId": "logos",
    "seriesNumber": 39,
    "nameKana": "DIALECTIC",
    "nameLatin": "DIALECTIC",
    "archetypeId": "minimalist",
    "label": "不明体系",
    "concept": "対話的矛盾を設計モチーフに、余計な機能を捨て、少数の能力だけを高効率・高再現でまとめる。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 8,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 6
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.07
    },
    "preferredWeapons": [
      "rifle"
    ],
    "statVarianceMultiplier": 0.72,
    "growthVarianceMultiplier": 0.82,
    "eccentricBonusAdjustment": 0.05,
    "availabilityWeight": 0.6839999999999999
  },
  {
    "id": "logos-aporia",
    "manufacturerId": "logos",
    "seriesNumber": 40,
    "nameKana": "APORIA",
    "nameLatin": "APORIA",
    "archetypeId": "volatileExperimental",
    "label": "不明体系",
    "concept": "解けない問いを設計モチーフに、企業の定石をあえて反転させ、普段なら避ける設計を試験的に採用する。LOGOSらしく、設計理由は公開されず、能力配置に不可解な共通法則だけが現れる。",
    "groupAdjustments": {},
    "growthAdjustments": {},
    "reliabilityAdjustment": -10,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 6
    },
    "weaponGrowthAdjustments": {
      "emp": 0.07
    },
    "preferredWeapons": [
      "emp"
    ],
    "statVarianceMultiplier": 1.25,
    "growthVarianceMultiplier": 1.25,
    "eccentricBonusAdjustment": 0.15000000000000002,
    "availabilityWeight": 0.44639999999999996
  }
];

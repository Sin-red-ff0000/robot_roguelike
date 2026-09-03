// v2.9 third-wave formal series catalog: 20 manufacturers x 20 additional series = 400 new series.
// Series 41-60 form third-generation lineages descended from series 21-40.

export const THIRD_WAVE_SERIES_DEFINITIONS = [
  {
    "id": "kirishima-kaimon",
    "manufacturerId": "kirishima",
    "seriesNumber": 41,
    "nameKana": "カイモン",
    "nameLatin": "KAIMON",
    "archetypeId": "longSeller",
    "concept": "独立峰を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "kirishima-unzen",
    "manufacturerId": "kirishima",
    "seriesNumber": 42,
    "nameKana": "ウンゼン",
    "nameLatin": "UNZEN",
    "archetypeId": "flagship",
    "concept": "火山群を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "mobility": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "kirishima-iwate",
    "manufacturerId": "kirishima",
    "seriesNumber": 43,
    "nameKana": "イワテ",
    "nameLatin": "IWATE",
    "archetypeId": "budget",
    "concept": "長大な山体を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "kirishima-adatara",
    "manufacturerId": "kirishima",
    "seriesNumber": 44,
    "nameKana": "アダタラ",
    "nameLatin": "ADATARA",
    "archetypeId": "glassCannon",
    "concept": "火口原を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kirishima-azuma",
    "manufacturerId": "kirishima",
    "seriesNumber": 45,
    "nameKana": "アヅマ",
    "nameLatin": "AZUMA",
    "archetypeId": "growthProject",
    "concept": "連峰を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {
      "compute": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamCannon": 5
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.055
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "ビーム砲を中心に機体側から兵装へ合わせ込む。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kirishima-nasu",
    "manufacturerId": "kirishima",
    "seriesNumber": 46,
    "nameKana": "ナス",
    "nameLatin": "NASU",
    "archetypeId": "retro",
    "concept": "火山帯を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kirishima-tanzawa",
    "manufacturerId": "kirishima",
    "seriesNumber": 47,
    "nameKana": "タンザワ",
    "nameLatin": "TANZAWA",
    "archetypeId": "counterDesign",
    "concept": "複雑な山稜を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kirishima-hakone",
    "manufacturerId": "kirishima",
    "seriesNumber": 48,
    "nameKana": "ハコネ",
    "nameLatin": "HAKONE",
    "archetypeId": "weaponSavant",
    "concept": "外輪山を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "lance": 5
    },
    "weaponGrowthAdjustments": {
      "lance": 0.055
    },
    "preferredWeapons": [
      "lance"
    ],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "ランスを中心に機体側から兵装へ合わせ込む。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kirishima-hira",
    "manufacturerId": "kirishima",
    "seriesNumber": 49,
    "nameKana": "ヒラ",
    "nameLatin": "HIRA",
    "archetypeId": "aiAnomaly",
    "concept": "急峻な稜線を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "kirishima-odaigahara",
    "manufacturerId": "kirishima",
    "seriesNumber": 50,
    "nameKana": "オオダイガハラ",
    "nameLatin": "ODAIGAHARA",
    "archetypeId": "lottery",
    "concept": "高原台地を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "kirishima-senjo",
    "manufacturerId": "kirishima",
    "seriesNumber": 51,
    "nameKana": "センジョウ",
    "nameLatin": "SENJO",
    "archetypeId": "reliable",
    "concept": "大きな山容を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "kirishima-akadake",
    "manufacturerId": "kirishima",
    "seriesNumber": 52,
    "nameKana": "アカダケ",
    "nameLatin": "AKADAKE",
    "archetypeId": "ultraMobile",
    "concept": "岩峰を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kirishima-kisokoma",
    "manufacturerId": "kirishima",
    "seriesNumber": 53,
    "nameKana": "キソコマ",
    "nameLatin": "KISOKOMA",
    "archetypeId": "fortress",
    "concept": "主峰を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kirishima-utsugi",
    "manufacturerId": "kirishima",
    "seriesNumber": 54,
    "nameKana": "ウツギ",
    "nameLatin": "UTSUGI",
    "archetypeId": "dataGlass",
    "concept": "縦走峰を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 5
    },
    "weaponGrowthAdjustments": {
      "lance": 0.055
    },
    "preferredWeapons": [
      "lance"
    ],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "ランスを中心に機体側から兵装へ合わせ込む。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kirishima-eboshi",
    "manufacturerId": "kirishima",
    "seriesNumber": 55,
    "nameKana": "エボシ",
    "nameLatin": "EBOSHI",
    "archetypeId": "adaptive",
    "concept": "尖峰を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kirishima-kashimayari",
    "manufacturerId": "kirishima",
    "seriesNumber": 56,
    "nameKana": "カシマヤリ",
    "nameLatin": "KASHIMAYARI",
    "archetypeId": "volatileExperimental",
    "concept": "双耳峰を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "kirishima-tsubakuro",
    "manufacturerId": "kirishima",
    "seriesNumber": 57,
    "nameKana": "ツバクロ",
    "nameLatin": "TSUBAKURO",
    "archetypeId": "massProduction",
    "concept": "花崗岩峰を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "kirishima-omine",
    "manufacturerId": "kirishima",
    "seriesNumber": 58,
    "nameKana": "オオミネ",
    "nameLatin": "OMINE",
    "archetypeId": "lateGrowth",
    "concept": "修験山地を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {
      "engine": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kirishima-hiuchi",
    "manufacturerId": "kirishima",
    "seriesNumber": 59,
    "nameKana": "ヒウチ",
    "nameLatin": "HIUCHI",
    "archetypeId": "overengineered",
    "concept": "火打石を思わせる山名を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "kirishima-miune",
    "manufacturerId": "kirishima",
    "seriesNumber": 60,
    "nameKana": "ミウネ",
    "nameLatin": "MIUNE",
    "archetypeId": "apex",
    "concept": "三つの峰を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。霧島重工はここで「用途を明確に絞り、要求性能を実機で再現できる完成度へ落とし込む」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "sensor": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "mizuho-katakuri",
    "manufacturerId": "mizuho",
    "seriesNumber": 41,
    "nameKana": "カタクリ",
    "nameLatin": "KATAKURI",
    "archetypeId": "longSeller",
    "concept": "早春に短く咲く花を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "mizuho-mizubasho",
    "manufacturerId": "mizuho",
    "seriesNumber": 42,
    "nameKana": "ミズバショウ",
    "nameLatin": "MIZUBASHO",
    "archetypeId": "flagship",
    "concept": "湿地に広がる群生を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "mizuho-kobushi",
    "manufacturerId": "mizuho",
    "seriesNumber": 43,
    "nameKana": "コブシ",
    "nameLatin": "KOBUSHI",
    "archetypeId": "budget",
    "concept": "春先に目立つ白花を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "mizuho-enreiso",
    "manufacturerId": "mizuho",
    "seriesNumber": 44,
    "nameKana": "エンレイソウ",
    "nameLatin": "ENREISO",
    "archetypeId": "glassCannon",
    "concept": "林床で育つ多年草を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "mizuho-tsuwabuki",
    "manufacturerId": "mizuho",
    "seriesNumber": 45,
    "nameKana": "ツワブキ",
    "nameLatin": "TSUWABUKI",
    "archetypeId": "growthProject",
    "concept": "丈夫な常緑草を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {
      "sensor": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "drone": 5
    },
    "weaponGrowthAdjustments": {
      "drone": 0.055
    },
    "preferredWeapons": [
      "drone"
    ],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "ドローンを中心に機体側から兵装へ合わせ込む。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "mizuho-sanshuyu",
    "manufacturerId": "mizuho",
    "seriesNumber": 46,
    "nameKana": "サンシュユ",
    "nameLatin": "SANSHUYU",
    "archetypeId": "retro",
    "concept": "早春の黄色花を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "mizuho-housenka",
    "manufacturerId": "mizuho",
    "seriesNumber": 47,
    "nameKana": "ホウセンカ",
    "nameLatin": "HOUSENKA",
    "archetypeId": "counterDesign",
    "concept": "弾ける種子を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "mizuho-sweetpea",
    "manufacturerId": "mizuho",
    "seriesNumber": 48,
    "nameKana": "スイートピー",
    "nameLatin": "SWEETPEA",
    "archetypeId": "weaponSavant",
    "concept": "軽やかな花弁を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "machineGun": 5
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.055
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "マシンガンを中心に機体側から兵装へ合わせ込む。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "mizuho-mimosa",
    "manufacturerId": "mizuho",
    "seriesNumber": 49,
    "nameKana": "ミモザ",
    "nameLatin": "MIMOSA",
    "archetypeId": "aiAnomaly",
    "concept": "小花の集合を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "mizuho-nemophila",
    "manufacturerId": "mizuho",
    "seriesNumber": 50,
    "nameKana": "ネモフィラ",
    "nameLatin": "NEMOPHILA",
    "archetypeId": "lottery",
    "concept": "広く面を染める花を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "mizuho-delphinium",
    "manufacturerId": "mizuho",
    "seriesNumber": 51,
    "nameKana": "デルフィニウム",
    "nameLatin": "DELPHINIUM",
    "archetypeId": "reliable",
    "concept": "高く伸びる花穂を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "compute": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "mizuho-lantana",
    "manufacturerId": "mizuho",
    "seriesNumber": 52,
    "nameKana": "ランタナ",
    "nameLatin": "LANTANA",
    "archetypeId": "ultraMobile",
    "concept": "色が変化する花を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "mizuho-salvia",
    "manufacturerId": "mizuho",
    "seriesNumber": 53,
    "nameKana": "サルビア",
    "nameLatin": "SALVIA",
    "archetypeId": "fortress",
    "concept": "長期に咲く花穂を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "mizuho-freesia",
    "manufacturerId": "mizuho",
    "seriesNumber": 54,
    "nameKana": "フリージア",
    "nameLatin": "FREESIA",
    "archetypeId": "dataGlass",
    "concept": "香りの強い花を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "machineGun": 5
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.055
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "マシンガンを中心に機体側から兵装へ合わせ込む。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "mizuho-clematis",
    "manufacturerId": "mizuho",
    "seriesNumber": 55,
    "nameKana": "クレマチス",
    "nameLatin": "CLEMATIS",
    "archetypeId": "adaptive",
    "concept": "蔓で広がる花を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "mizuho-amaryllis",
    "manufacturerId": "mizuho",
    "seriesNumber": 56,
    "nameKana": "アマリリス",
    "nameLatin": "AMARYLLIS",
    "archetypeId": "volatileExperimental",
    "concept": "大輪の花を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "mizuho-poinsettia",
    "manufacturerId": "mizuho",
    "seriesNumber": 57,
    "nameKana": "ポインセチア",
    "nameLatin": "POINSETTIA",
    "archetypeId": "massProduction",
    "concept": "葉色を魅せる植物を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "mizuho-chamomile",
    "manufacturerId": "mizuho",
    "seriesNumber": 58,
    "nameKana": "カモミール",
    "nameLatin": "CHAMOMILE",
    "archetypeId": "lateGrowth",
    "concept": "実用性を持つ小花を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {
      "compute": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "mizuho-forgetmenot",
    "manufacturerId": "mizuho",
    "seriesNumber": 59,
    "nameKana": "ワスレナグサ",
    "nameLatin": "FORGETMENOT",
    "archetypeId": "overengineered",
    "concept": "小型で群生する花を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "mizuho-edelweiss",
    "manufacturerId": "mizuho",
    "seriesNumber": 60,
    "nameKana": "エーデルワイス",
    "nameLatin": "EDELWEISS",
    "archetypeId": "apex",
    "concept": "高地に耐える花を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。瑞穂産業はここで「現場の運用データを拾い、使われ方から設計を逆算する」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "gogaku-osmium",
    "manufacturerId": "gogaku",
    "seriesNumber": 41,
    "nameKana": "オスミウム",
    "nameLatin": "OSMIUM",
    "archetypeId": "longSeller",
    "concept": "高密度金属を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "gogaku-iridium",
    "manufacturerId": "gogaku",
    "seriesNumber": 42,
    "nameKana": "イリジウム",
    "nameLatin": "IRIDIUM",
    "archetypeId": "flagship",
    "concept": "高耐食金属を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "gogaku-vanadium",
    "manufacturerId": "gogaku",
    "seriesNumber": 43,
    "nameKana": "バナジウム",
    "nameLatin": "VANADIUM",
    "archetypeId": "budget",
    "concept": "合金添加元素を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "gogaku-niobium",
    "manufacturerId": "gogaku",
    "seriesNumber": 44,
    "nameKana": "ニオブ",
    "nameLatin": "NIOBIUM",
    "archetypeId": "glassCannon",
    "concept": "耐熱合金元素を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "gogaku-tantalum",
    "manufacturerId": "gogaku",
    "seriesNumber": 45,
    "nameKana": "タンタル",
    "nameLatin": "TANTALUM",
    "archetypeId": "growthProject",
    "concept": "高耐食レアメタルを名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {
      "ai": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "lance": 5
    },
    "weaponGrowthAdjustments": {
      "lance": 0.055
    },
    "preferredWeapons": [
      "lance"
    ],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "ランスを中心に機体側から兵装へ合わせ込む。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "gogaku-zirconium",
    "manufacturerId": "gogaku",
    "seriesNumber": 46,
    "nameKana": "ジルコニウム",
    "nameLatin": "ZIRCONIUM",
    "archetypeId": "retro",
    "concept": "耐熱・耐食金属を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "gogaku-hafnium",
    "manufacturerId": "gogaku",
    "seriesNumber": 47,
    "nameKana": "ハフニウム",
    "nameLatin": "HAFNIUM",
    "archetypeId": "counterDesign",
    "concept": "高融点元素を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "gogaku-rhodium",
    "manufacturerId": "gogaku",
    "seriesNumber": 48,
    "nameKana": "ロジウム",
    "nameLatin": "RHODIUM",
    "archetypeId": "weaponSavant",
    "concept": "硬質貴金属を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamCannon": 5
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.055
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "ビーム砲を中心に機体側から兵装へ合わせ込む。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "gogaku-palladium",
    "manufacturerId": "gogaku",
    "seriesNumber": 49,
    "nameKana": "パラジウム",
    "nameLatin": "PALLADIUM",
    "archetypeId": "aiAnomaly",
    "concept": "触媒性を持つ貴金属を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "gogaku-ruthenium",
    "manufacturerId": "gogaku",
    "seriesNumber": 50,
    "nameKana": "ルテニウム",
    "nameLatin": "RUTHENIUM",
    "archetypeId": "lottery",
    "concept": "硬さを加える金属を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "gogaku-scheelite",
    "manufacturerId": "gogaku",
    "seriesNumber": 51,
    "nameKana": "シーライト",
    "nameLatin": "SCHEELITE",
    "archetypeId": "reliable",
    "concept": "タングステン鉱を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "sensor": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "gogaku-galena",
    "manufacturerId": "gogaku",
    "seriesNumber": 52,
    "nameKana": "ガレナ",
    "nameLatin": "GALENA",
    "archetypeId": "ultraMobile",
    "concept": "方鉛鉱を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "gogaku-bauxite",
    "manufacturerId": "gogaku",
    "seriesNumber": 53,
    "nameKana": "ボーキサイト",
    "nameLatin": "BAUXITE",
    "archetypeId": "fortress",
    "concept": "アルミニウム鉱石を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "gogaku-magnesite",
    "manufacturerId": "gogaku",
    "seriesNumber": 54,
    "nameKana": "マグネサイト",
    "nameLatin": "MAGNESITE",
    "archetypeId": "dataGlass",
    "concept": "耐火材原料を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "beamCannon": 5
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.055
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "ビーム砲を中心に機体側から兵装へ合わせ込む。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "gogaku-apatite",
    "manufacturerId": "gogaku",
    "seriesNumber": 55,
    "nameKana": "アパタイト",
    "nameLatin": "APATITE",
    "archetypeId": "adaptive",
    "concept": "燐灰石を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "gogaku-barite",
    "manufacturerId": "gogaku",
    "seriesNumber": 56,
    "nameKana": "バライト",
    "nameLatin": "BARITE",
    "archetypeId": "volatileExperimental",
    "concept": "高比重鉱物を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "gogaku-celestite",
    "manufacturerId": "gogaku",
    "seriesNumber": 57,
    "nameKana": "セレスタイト",
    "nameLatin": "CELESTITE",
    "archetypeId": "massProduction",
    "concept": "天青石を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "gogaku-monazite",
    "manufacturerId": "gogaku",
    "seriesNumber": 58,
    "nameKana": "モナザイト",
    "nameLatin": "MONAZITE",
    "archetypeId": "lateGrowth",
    "concept": "希土類鉱物を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {
      "sensor": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "gogaku-spodumene",
    "manufacturerId": "gogaku",
    "seriesNumber": 59,
    "nameKana": "スポジュメン",
    "nameLatin": "SPODUMENE",
    "archetypeId": "overengineered",
    "concept": "リチウム鉱物を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "gogaku-cassiterite",
    "manufacturerId": "gogaku",
    "seriesNumber": 60,
    "nameKana": "キャシテライト",
    "nameLatin": "CASSITERITE",
    "archetypeId": "apex",
    "concept": "錫石を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。剛岳工廠はここで「過剰な構造余裕を単なる重装ではなく別の性能へ転換する」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "output": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "yashima-haruichiban",
    "manufacturerId": "yashima",
    "seriesNumber": 41,
    "nameKana": "ハルイチバン",
    "nameLatin": "HARUICHIBAN",
    "archetypeId": "longSeller",
    "concept": "季節を変える強風を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "yashima-kitsuneame",
    "manufacturerId": "yashima",
    "seriesNumber": 42,
    "nameKana": "キツネアメ",
    "nameLatin": "KITSUNEAME",
    "archetypeId": "flagship",
    "concept": "晴天時の雨を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "compute": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "yashima-shunrai",
    "manufacturerId": "yashima",
    "seriesNumber": 43,
    "nameKana": "シュンライ",
    "nameLatin": "SHUNRAI",
    "archetypeId": "budget",
    "concept": "春の雷を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "yashima-nagasame",
    "manufacturerId": "yashima",
    "seriesNumber": 44,
    "nameKana": "ナガサメ",
    "nameLatin": "NAGASAME",
    "archetypeId": "glassCannon",
    "concept": "長く続く雨を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "yashima-samidare",
    "manufacturerId": "yashima",
    "seriesNumber": 45,
    "nameKana": "サミダレ",
    "nameLatin": "SAMIDARE",
    "archetypeId": "growthProject",
    "concept": "断続する長雨を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {
      "output": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "machineGun": 5
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.055
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "マシンガンを中心に機体側から兵装へ合わせ込む。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "yashima-arare",
    "manufacturerId": "yashima",
    "seriesNumber": 46,
    "nameKana": "アラレ",
    "nameLatin": "ARARE",
    "archetypeId": "retro",
    "concept": "細かな氷粒を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "yashima-mizore",
    "manufacturerId": "yashima",
    "seriesNumber": 47,
    "nameKana": "ミゾレ",
    "nameLatin": "MIZORE",
    "archetypeId": "counterDesign",
    "concept": "雨雪混合を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "yashima-yamase",
    "manufacturerId": "yashima",
    "seriesNumber": 48,
    "nameKana": "ヤマセ",
    "nameLatin": "YAMASE",
    "archetypeId": "weaponSavant",
    "concept": "冷湿な季節風を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "drone": 5
    },
    "weaponGrowthAdjustments": {
      "drone": 0.055
    },
    "preferredWeapons": [
      "drone"
    ],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "ドローンを中心に機体側から兵装へ合わせ込む。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "yashima-oroshi",
    "manufacturerId": "yashima",
    "seriesNumber": 49,
    "nameKana": "オロシ",
    "nameLatin": "OROSHI",
    "archetypeId": "aiAnomaly",
    "concept": "山から吹く強風を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "yashima-yamajikaze",
    "manufacturerId": "yashima",
    "seriesNumber": 50,
    "nameKana": "ヤマジカゼ",
    "nameLatin": "YAMAJIKAZE",
    "archetypeId": "lottery",
    "concept": "局地的な強風を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "yashima-jetstream",
    "manufacturerId": "yashima",
    "seriesNumber": 51,
    "nameKana": "ジェットストリーム",
    "nameLatin": "JETSTREAM",
    "archetypeId": "reliable",
    "concept": "上空の高速気流を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "yashima-squallline",
    "manufacturerId": "yashima",
    "seriesNumber": 52,
    "nameKana": "スコールライン",
    "nameLatin": "SQUALLLINE",
    "archetypeId": "ultraMobile",
    "concept": "線状に発達する雷雨を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "yashima-rainshadow",
    "manufacturerId": "yashima",
    "seriesNumber": 53,
    "nameKana": "レインシャドウ",
    "nameLatin": "RAINSHADOW",
    "archetypeId": "fortress",
    "concept": "地形で生じる乾燥域を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "yashima-karman",
    "manufacturerId": "yashima",
    "seriesNumber": 54,
    "nameKana": "カルマン",
    "nameLatin": "KARMAN",
    "archetypeId": "dataGlass",
    "concept": "周期的な渦列を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "drone": 5
    },
    "weaponGrowthAdjustments": {
      "drone": 0.055
    },
    "preferredWeapons": [
      "drone"
    ],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "ドローンを中心に機体側から兵装へ合わせ込む。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "yashima-katabatic",
    "manufacturerId": "yashima",
    "seriesNumber": 55,
    "nameKana": "カタバチック",
    "nameLatin": "KATABATIC",
    "archetypeId": "adaptive",
    "concept": "斜面を下る冷気流を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "yashima-anabatic",
    "manufacturerId": "yashima",
    "seriesNumber": 56,
    "nameKana": "アナバチック",
    "nameLatin": "ANABATIC",
    "archetypeId": "volatileExperimental",
    "concept": "斜面を上る暖気流を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "yashima-seabreeze",
    "manufacturerId": "yashima",
    "seriesNumber": 57,
    "nameKana": "シー・ブリーズ",
    "nameLatin": "SEABREEZE",
    "archetypeId": "massProduction",
    "concept": "海陸の温度差風を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "yashima-landbreeze",
    "manufacturerId": "yashima",
    "seriesNumber": 58,
    "nameKana": "ランド・ブリーズ",
    "nameLatin": "LANDBREEZE",
    "archetypeId": "lateGrowth",
    "concept": "夜間の陸風を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {
      "ai": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "yashima-sunpillar",
    "manufacturerId": "yashima",
    "seriesNumber": 59,
    "nameKana": "サンピラー",
    "nameLatin": "SUNPILLAR",
    "archetypeId": "overengineered",
    "concept": "光柱現象を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "yashima-brocken",
    "manufacturerId": "yashima",
    "seriesNumber": 60,
    "nameKana": "ブロッケン",
    "nameLatin": "BROCKEN",
    "archetypeId": "apex",
    "concept": "霧に映る巨大な影を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。八洲重機はここで「条件変化の中でも仕事を止めないという思想を別角度から解釈する」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "mobility": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "hokushin-lyra",
    "manufacturerId": "hokushin",
    "seriesNumber": 41,
    "nameKana": "リラ",
    "nameLatin": "LYRA",
    "archetypeId": "longSeller",
    "concept": "こと座を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "hokushin-cygnus",
    "manufacturerId": "hokushin",
    "seriesNumber": 42,
    "nameKana": "シグナス",
    "nameLatin": "CYGNUS",
    "archetypeId": "flagship",
    "concept": "はくちょう座を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "sensor": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "hokushin-draco",
    "manufacturerId": "hokushin",
    "seriesNumber": 43,
    "nameKana": "ドラコ",
    "nameLatin": "DRACO",
    "archetypeId": "budget",
    "concept": "りゅう座を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "hokushin-aquila",
    "manufacturerId": "hokushin",
    "seriesNumber": 44,
    "nameKana": "アクィラ",
    "nameLatin": "AQUILA",
    "archetypeId": "glassCannon",
    "concept": "わし座を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hokushin-scorpius",
    "manufacturerId": "hokushin",
    "seriesNumber": 45,
    "nameKana": "スコーピウス",
    "nameLatin": "SCORPIUS",
    "archetypeId": "growthProject",
    "concept": "さそり座を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {
      "mobility": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamCannon": 5
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.055
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "ビーム砲を中心に機体側から兵装へ合わせ込む。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hokushin-taurus",
    "manufacturerId": "hokushin",
    "seriesNumber": 46,
    "nameKana": "タウルス",
    "nameLatin": "TAURUS",
    "archetypeId": "retro",
    "concept": "おうし座を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hokushin-gemini",
    "manufacturerId": "hokushin",
    "seriesNumber": 47,
    "nameKana": "ジェミニ",
    "nameLatin": "GEMINI",
    "archetypeId": "counterDesign",
    "concept": "ふたご座を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hokushin-pleiades",
    "manufacturerId": "hokushin",
    "seriesNumber": 48,
    "nameKana": "プレアデス",
    "nameLatin": "PLEIADES",
    "archetypeId": "weaponSavant",
    "concept": "散開星団を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "lance": 5
    },
    "weaponGrowthAdjustments": {
      "lance": 0.055
    },
    "preferredWeapons": [
      "lance"
    ],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "ランスを中心に機体側から兵装へ合わせ込む。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hokushin-hyades",
    "manufacturerId": "hokushin",
    "seriesNumber": 49,
    "nameKana": "ヒアデス",
    "nameLatin": "HYADES",
    "archetypeId": "aiAnomaly",
    "concept": "散開星団を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "hokushin-vesta",
    "manufacturerId": "hokushin",
    "seriesNumber": 50,
    "nameKana": "ベスタ",
    "nameLatin": "VESTA",
    "archetypeId": "lottery",
    "concept": "小惑星を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "hokushin-ceres",
    "manufacturerId": "hokushin",
    "seriesNumber": 51,
    "nameKana": "セレス",
    "nameLatin": "CERES",
    "archetypeId": "reliable",
    "concept": "準惑星を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "output": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "hokushin-io",
    "manufacturerId": "hokushin",
    "seriesNumber": 52,
    "nameKana": "イオ",
    "nameLatin": "IO",
    "archetypeId": "ultraMobile",
    "concept": "木星衛星を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hokushin-callisto",
    "manufacturerId": "hokushin",
    "seriesNumber": 53,
    "nameKana": "カリスト",
    "nameLatin": "CALLISTO",
    "archetypeId": "fortress",
    "concept": "木星衛星を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hokushin-enceladus",
    "manufacturerId": "hokushin",
    "seriesNumber": 54,
    "nameKana": "エンケラドゥス",
    "nameLatin": "ENCELADUS",
    "archetypeId": "dataGlass",
    "concept": "土星衛星を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 5
    },
    "weaponGrowthAdjustments": {
      "lance": 0.055
    },
    "preferredWeapons": [
      "lance"
    ],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "ランスを中心に機体側から兵装へ合わせ込む。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hokushin-rhea",
    "manufacturerId": "hokushin",
    "seriesNumber": 55,
    "nameKana": "レア",
    "nameLatin": "RHEA",
    "archetypeId": "adaptive",
    "concept": "土星衛星を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hokushin-charon",
    "manufacturerId": "hokushin",
    "seriesNumber": 56,
    "nameKana": "カロン",
    "nameLatin": "CHARON",
    "archetypeId": "volatileExperimental",
    "concept": "冥王星衛星を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "hokushin-eris",
    "manufacturerId": "hokushin",
    "seriesNumber": 57,
    "nameKana": "エリス",
    "nameLatin": "ERIS",
    "archetypeId": "massProduction",
    "concept": "準惑星を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "hokushin-makemake",
    "manufacturerId": "hokushin",
    "seriesNumber": 58,
    "nameKana": "マケマケ",
    "nameLatin": "MAKEMAKE",
    "archetypeId": "lateGrowth",
    "concept": "準惑星を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {
      "output": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hokushin-haumea",
    "manufacturerId": "hokushin",
    "seriesNumber": 59,
    "nameKana": "ハウメア",
    "nameLatin": "HAUMEA",
    "archetypeId": "overengineered",
    "concept": "準惑星を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "hokushin-oort",
    "manufacturerId": "hokushin",
    "seriesNumber": 60,
    "nameKana": "オールト",
    "nameLatin": "OORT",
    "archetypeId": "apex",
    "concept": "オールトの雲を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。北辰精機はここで「ピーキーな設計であっても誤差要因を分解し再現可能にする」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "shinonome-aonibi",
    "manufacturerId": "shinonome",
    "seriesNumber": 41,
    "nameKana": "アオニビ",
    "nameLatin": "AONIBI",
    "archetypeId": "longSeller",
    "concept": "青みを帯びた鈍色を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "shinonome-tokiwa",
    "manufacturerId": "shinonome",
    "seriesNumber": 42,
    "nameKana": "トキワ",
    "nameLatin": "TOKIWA",
    "archetypeId": "flagship",
    "concept": "常緑の深い緑を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "shinonome-koiai",
    "manufacturerId": "shinonome",
    "seriesNumber": 43,
    "nameKana": "コイアイ",
    "nameLatin": "KOIAI",
    "archetypeId": "budget",
    "concept": "濃い藍色を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "shinonome-kokihi",
    "manufacturerId": "shinonome",
    "seriesNumber": 44,
    "nameKana": "コキヒ",
    "nameLatin": "KOKIHI",
    "archetypeId": "glassCannon",
    "concept": "深い緋色を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "shinonome-kuwazome",
    "manufacturerId": "shinonome",
    "seriesNumber": 45,
    "nameKana": "クワゾメ",
    "nameLatin": "KUWAZOME",
    "archetypeId": "growthProject",
    "concept": "桑の実を思わせる色を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {
      "control": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "drone": 5
    },
    "weaponGrowthAdjustments": {
      "drone": 0.055
    },
    "preferredWeapons": [
      "drone"
    ],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "ドローンを中心に機体側から兵装へ合わせ込む。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "shinonome-asahanada",
    "manufacturerId": "shinonome",
    "seriesNumber": 46,
    "nameKana": "アサハナダ",
    "nameLatin": "ASAHANADA",
    "archetypeId": "retro",
    "concept": "薄い縹色を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "shinonome-tsukishiro",
    "manufacturerId": "shinonome",
    "seriesNumber": 47,
    "nameKana": "ツキシロ",
    "nameLatin": "TSUKISHIRO",
    "archetypeId": "counterDesign",
    "concept": "月光のような白を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "shinonome-hanada",
    "manufacturerId": "shinonome",
    "seriesNumber": 48,
    "nameKana": "ハナダ",
    "nameLatin": "HANADA",
    "archetypeId": "weaponSavant",
    "concept": "明るい青を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "machineGun": 5
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.055
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "マシンガンを中心に機体側から兵装へ合わせ込む。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "shinonome-nae",
    "manufacturerId": "shinonome",
    "seriesNumber": 49,
    "nameKana": "ナエ",
    "nameLatin": "NAE",
    "archetypeId": "aiAnomaly",
    "concept": "若苗の黄緑を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "shinonome-kurumizome",
    "manufacturerId": "shinonome",
    "seriesNumber": 50,
    "nameKana": "クルミゾメ",
    "nameLatin": "KURUMIZOME",
    "archetypeId": "lottery",
    "concept": "胡桃染めの褐色を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "shinonome-utsubushi",
    "manufacturerId": "shinonome",
    "seriesNumber": 51,
    "nameKana": "ウツブシ",
    "nameLatin": "UTSUBUSHI",
    "archetypeId": "reliable",
    "concept": "暗い青紫を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "mobility": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "shinonome-tamamushi",
    "manufacturerId": "shinonome",
    "seriesNumber": 52,
    "nameKana": "タマムシ",
    "nameLatin": "TAMAMUSHI",
    "archetypeId": "ultraMobile",
    "concept": "見る角度で変わる玉虫色を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "shinonome-kakishibu",
    "manufacturerId": "shinonome",
    "seriesNumber": 53,
    "nameKana": "カキシブ",
    "nameLatin": "KAKISHIBU",
    "archetypeId": "fortress",
    "concept": "渋い赤褐色を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "shinonome-rurikon",
    "manufacturerId": "shinonome",
    "seriesNumber": 54,
    "nameKana": "ルリコン",
    "nameLatin": "RURIKON",
    "archetypeId": "dataGlass",
    "concept": "瑠璃紺を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "machineGun": 5
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.055
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "マシンガンを中心に機体側から兵装へ合わせ込む。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "shinonome-kurobeni",
    "manufacturerId": "shinonome",
    "seriesNumber": 55,
    "nameKana": "クロベニ",
    "nameLatin": "KUROBENI",
    "archetypeId": "adaptive",
    "concept": "黒みの深紅を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "shinonome-usuao",
    "manufacturerId": "shinonome",
    "seriesNumber": 56,
    "nameKana": "ウスアオ",
    "nameLatin": "USUAO",
    "archetypeId": "volatileExperimental",
    "concept": "淡い青緑を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "shinonome-kincha",
    "manufacturerId": "shinonome",
    "seriesNumber": 57,
    "nameKana": "キンチャ",
    "nameLatin": "KINCHA",
    "archetypeId": "massProduction",
    "concept": "金茶色を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "shinonome-ginnezu",
    "manufacturerId": "shinonome",
    "seriesNumber": 58,
    "nameKana": "ギンネズ",
    "nameLatin": "GINNEZU",
    "archetypeId": "lateGrowth",
    "concept": "銀鼠を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {
      "mobility": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "shinonome-akagane",
    "manufacturerId": "shinonome",
    "seriesNumber": 59,
    "nameKana": "アカガネ",
    "nameLatin": "AKAGANE",
    "archetypeId": "overengineered",
    "concept": "赤銅色を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "shinonome-shirafuji",
    "manufacturerId": "shinonome",
    "seriesNumber": 60,
    "nameKana": "シラフジ",
    "nameLatin": "SHIRAFUJI",
    "archetypeId": "apex",
    "concept": "白藤色を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。東雲電子技研はここで「情報処理を機体性能そのものとして扱い、電子側から機械の性格を作る」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "amagi-gazelle",
    "manufacturerId": "amagi",
    "seriesNumber": 41,
    "nameKana": "ガゼル",
    "nameLatin": "GAZELLE",
    "archetypeId": "longSeller",
    "concept": "急加速する草食獣を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "amagi-ibex",
    "manufacturerId": "amagi",
    "seriesNumber": 42,
    "nameKana": "アイベックス",
    "nameLatin": "IBEX",
    "archetypeId": "flagship",
    "concept": "岩場を登る山羊を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "output": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "amagi-serval",
    "manufacturerId": "amagi",
    "seriesNumber": 43,
    "nameKana": "サーバル",
    "nameLatin": "SERVAL",
    "archetypeId": "budget",
    "concept": "跳躍力の高い猫科を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "amagi-caracal",
    "manufacturerId": "amagi",
    "seriesNumber": 44,
    "nameKana": "カラカル",
    "nameLatin": "CARACAL",
    "archetypeId": "glassCannon",
    "concept": "鋭い方向転換をする猫科を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "amagi-puma",
    "manufacturerId": "amagi",
    "seriesNumber": 45,
    "nameKana": "ピューマ",
    "nameLatin": "PUMA",
    "archetypeId": "growthProject",
    "concept": "長距離を走る大型猫を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {
      "engine": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "lance": 5
    },
    "weaponGrowthAdjustments": {
      "lance": 0.055
    },
    "preferredWeapons": [
      "lance"
    ],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "ランスを中心に機体側から兵装へ合わせ込む。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "amagi-jaguar",
    "manufacturerId": "amagi",
    "seriesNumber": 46,
    "nameKana": "ジャガー",
    "nameLatin": "JAGUAR",
    "archetypeId": "retro",
    "concept": "短距離の強襲型捕食者を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "amagi-osprey",
    "manufacturerId": "amagi",
    "seriesNumber": 47,
    "nameKana": "オスプレイ",
    "nameLatin": "OSPREY",
    "archetypeId": "counterDesign",
    "concept": "急降下する猛禽を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "amagi-kestrel",
    "manufacturerId": "amagi",
    "seriesNumber": 48,
    "nameKana": "ケストレル",
    "nameLatin": "KESTREL",
    "archetypeId": "weaponSavant",
    "concept": "空中静止する小型猛禽を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamCannon": 5
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.055
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "ビーム砲を中心に機体側から兵装へ合わせ込む。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "amagi-albatross",
    "manufacturerId": "amagi",
    "seriesNumber": 49,
    "nameKana": "アルバトロス",
    "nameLatin": "ALBATROSS",
    "archetypeId": "aiAnomaly",
    "concept": "長距離滑空鳥を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "amagi-peregrine",
    "manufacturerId": "amagi",
    "seriesNumber": 50,
    "nameKana": "ペレグリン",
    "nameLatin": "PEREGRINE",
    "archetypeId": "lottery",
    "concept": "高速急降下する隼を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "amagi-gecko",
    "manufacturerId": "amagi",
    "seriesNumber": 51,
    "nameKana": "ゲッコー",
    "nameLatin": "GECKO",
    "archetypeId": "reliable",
    "concept": "壁面に張り付く爬虫類を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "amagi-iguana",
    "manufacturerId": "amagi",
    "seriesNumber": 52,
    "nameKana": "イグアナ",
    "nameLatin": "IGUANA",
    "archetypeId": "ultraMobile",
    "concept": "安定した四肢移動を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "amagi-axolotl",
    "manufacturerId": "amagi",
    "seriesNumber": 53,
    "nameKana": "アホロートル",
    "nameLatin": "AXOLOTL",
    "archetypeId": "fortress",
    "concept": "損傷再生で知られる生物を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "amagi-marlin",
    "manufacturerId": "amagi",
    "seriesNumber": 54,
    "nameKana": "マーリン",
    "nameLatin": "MARLIN",
    "archetypeId": "dataGlass",
    "concept": "高速遊泳魚を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "beamCannon": 5
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.055
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "ビーム砲を中心に機体側から兵装へ合わせ込む。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "amagi-barracuda",
    "manufacturerId": "amagi",
    "seriesNumber": 55,
    "nameKana": "バラクーダ",
    "nameLatin": "BARRACUDA",
    "archetypeId": "adaptive",
    "concept": "直線加速する魚を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "amagi-manta",
    "manufacturerId": "amagi",
    "seriesNumber": 56,
    "nameKana": "マンタ",
    "nameLatin": "MANTA",
    "archetypeId": "volatileExperimental",
    "concept": "滑るように泳ぐ大型魚を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "amagi-squid",
    "manufacturerId": "amagi",
    "seriesNumber": 57,
    "nameKana": "スクイッド",
    "nameLatin": "SQUID",
    "archetypeId": "massProduction",
    "concept": "噴射推進する頭足類を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "amagi-octopus",
    "manufacturerId": "amagi",
    "seriesNumber": 58,
    "nameKana": "オクトパス",
    "nameLatin": "OCTOPUS",
    "archetypeId": "lateGrowth",
    "concept": "多肢協調する頭足類を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {
      "control": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "amagi-firefly",
    "manufacturerId": "amagi",
    "seriesNumber": 59,
    "nameKana": "ホタル",
    "nameLatin": "FIREFLY",
    "archetypeId": "overengineered",
    "concept": "発光で情報を伝える昆虫を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "amagi-ant",
    "manufacturerId": "amagi",
    "seriesNumber": 60,
    "nameKana": "アント",
    "nameLatin": "ANT",
    "archetypeId": "apex",
    "concept": "集団協調する昆虫を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。天城機工はここで「生物の動き方を模倣するのではなく、加減速と姿勢遷移の性格へ翻訳する」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "compute": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "kamishiro-amenooshihomimi",
    "manufacturerId": "kamishiro",
    "seriesNumber": 41,
    "nameKana": "アメノオシホミミ",
    "nameLatin": "AMENOOSHIHOMIMI",
    "archetypeId": "longSeller",
    "concept": "天孫系の神を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "kamishiro-takuhata",
    "manufacturerId": "kamishiro",
    "seriesNumber": 42,
    "nameKana": "タクハタチヂヒメ",
    "nameLatin": "TAKUHATA",
    "archetypeId": "flagship",
    "concept": "機織りの神格を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "mobility": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "kamishiro-ishikoridome",
    "manufacturerId": "kamishiro",
    "seriesNumber": 43,
    "nameKana": "イシコリドメ",
    "nameLatin": "ISHIKORIDOME",
    "archetypeId": "budget",
    "concept": "鏡作りの神を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "kamishiro-tamanoya",
    "manufacturerId": "kamishiro",
    "seriesNumber": 44,
    "nameKana": "タマノオヤ",
    "nameLatin": "TAMANOYA",
    "archetypeId": "glassCannon",
    "concept": "玉造りの神を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kamishiro-futodama",
    "manufacturerId": "kamishiro",
    "seriesNumber": 45,
    "nameKana": "フトダマ",
    "nameLatin": "FUTODAMA",
    "archetypeId": "growthProject",
    "concept": "祭祀を司る神を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {
      "compute": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "machineGun": 5
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.055
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "マシンガンを中心に機体側から兵装へ合わせ込む。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kamishiro-amenouwaharu",
    "manufacturerId": "kamishiro",
    "seriesNumber": 46,
    "nameKana": "アメノウワハル",
    "nameLatin": "AMENOUWAHARU",
    "archetypeId": "retro",
    "concept": "開拓神を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kamishiro-shiotsuchi",
    "manufacturerId": "kamishiro",
    "seriesNumber": 47,
    "nameKana": "シオツチ",
    "nameLatin": "SHIOTSUCHI",
    "archetypeId": "counterDesign",
    "concept": "海路を導く神を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kamishiro-toyotamahiko",
    "manufacturerId": "kamishiro",
    "seriesNumber": 48,
    "nameKana": "トヨタマヒコ",
    "nameLatin": "TOYOTAMAHIKO",
    "archetypeId": "weaponSavant",
    "concept": "海神の神格を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "drone": 5
    },
    "weaponGrowthAdjustments": {
      "drone": 0.055
    },
    "preferredWeapons": [
      "drone"
    ],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "ドローンを中心に機体側から兵装へ合わせ込む。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kamishiro-ajisuki",
    "manufacturerId": "kamishiro",
    "seriesNumber": 49,
    "nameKana": "アジスキタカヒコネ",
    "nameLatin": "AJISUKI",
    "archetypeId": "aiAnomaly",
    "concept": "雷と農耕の神を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "kamishiro-shitateruhime",
    "manufacturerId": "kamishiro",
    "seriesNumber": 50,
    "nameKana": "シタテルヒメ",
    "nameLatin": "SHITATERUHIME",
    "archetypeId": "lottery",
    "concept": "歌と光の神格を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "kamishiro-amenosagume",
    "manufacturerId": "kamishiro",
    "seriesNumber": 51,
    "nameKana": "アメノサグメ",
    "nameLatin": "AMENOSAGUME",
    "archetypeId": "reliable",
    "concept": "天邪鬼の原型神を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "kamishiro-hiruko",
    "manufacturerId": "kamishiro",
    "seriesNumber": 52,
    "nameKana": "ヒルコ",
    "nameLatin": "HIRUKO",
    "archetypeId": "ultraMobile",
    "concept": "漂流する神を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kamishiro-wakumusubi",
    "manufacturerId": "kamishiro",
    "seriesNumber": 53,
    "nameKana": "ワクムスビ",
    "nameLatin": "WAKUMUSUBI",
    "archetypeId": "fortress",
    "concept": "生成の神を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kamishiro-oogetsuhime",
    "manufacturerId": "kamishiro",
    "seriesNumber": 54,
    "nameKana": "オオゲツヒメ",
    "nameLatin": "OOGETSUHIME",
    "archetypeId": "dataGlass",
    "concept": "食物の神を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "drone": 5
    },
    "weaponGrowthAdjustments": {
      "drone": 0.055
    },
    "preferredWeapons": [
      "drone"
    ],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "ドローンを中心に機体側から兵装へ合わせ込む。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kamishiro-miketsukami",
    "manufacturerId": "kamishiro",
    "seriesNumber": 55,
    "nameKana": "ミケツカミ",
    "nameLatin": "MIKETSUKAMI",
    "archetypeId": "adaptive",
    "concept": "食を司る神格を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kamishiro-kuraokami",
    "manufacturerId": "kamishiro",
    "seriesNumber": 56,
    "nameKana": "クラオカミ",
    "nameLatin": "KURAOKAMI",
    "archetypeId": "volatileExperimental",
    "concept": "水と谷の神を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "kamishiro-takaokami",
    "manufacturerId": "kamishiro",
    "seriesNumber": 57,
    "nameKana": "タカオカミ",
    "nameLatin": "TAKAOKAMI",
    "archetypeId": "massProduction",
    "concept": "水と山の神を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "kamishiro-haniyasu",
    "manufacturerId": "kamishiro",
    "seriesNumber": 58,
    "nameKana": "ハニヤス",
    "nameLatin": "HANIYASU",
    "archetypeId": "lateGrowth",
    "concept": "土の神を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {
      "engine": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "kamishiro-kanayamahiko",
    "manufacturerId": "kamishiro",
    "seriesNumber": 59,
    "nameKana": "カナヤマヒコ",
    "nameLatin": "KANAYAMAHIKO",
    "archetypeId": "overengineered",
    "concept": "鉱山と金属の神を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "kamishiro-amenomikage",
    "manufacturerId": "kamishiro",
    "seriesNumber": 60,
    "nameKana": "アメノミカゲ",
    "nameLatin": "AMENOMIKAGE",
    "archetypeId": "apex",
    "concept": "鍛冶に連なる神格を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。神代技研はここで「業界標準を疑い、普通なら採用されない方式をあえて実機へ持ち込む」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "sensor": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "lancaster-acacia",
    "manufacturerId": "lancaster",
    "seriesNumber": 41,
    "nameKana": "アカシア",
    "nameLatin": "ACACIA",
    "archetypeId": "longSeller",
    "concept": "乾燥地にも強い花木を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "lancaster-alyssum",
    "manufacturerId": "lancaster",
    "seriesNumber": 42,
    "nameKana": "アリッサム",
    "nameLatin": "ALYSSUM",
    "archetypeId": "flagship",
    "concept": "低く広がる小花を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "lancaster-amaranth",
    "manufacturerId": "lancaster",
    "seriesNumber": 43,
    "nameKana": "アマランス",
    "nameLatin": "AMARANTH",
    "archetypeId": "budget",
    "concept": "長く色を保つ花穂を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "lancaster-bluebonnet",
    "manufacturerId": "lancaster",
    "seriesNumber": 44,
    "nameKana": "ブルーボネット",
    "nameLatin": "BLUEBONNET",
    "archetypeId": "glassCannon",
    "concept": "地域ブランド性の強い花を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "lancaster-buttercup",
    "manufacturerId": "lancaster",
    "seriesNumber": 45,
    "nameKana": "バターカップ",
    "nameLatin": "BUTTERCUP",
    "archetypeId": "growthProject",
    "concept": "親しみやすい黄色花を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {
      "sensor": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamCannon": 5
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.055
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "ビーム砲を中心に機体側から兵装へ合わせ込む。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "lancaster-chrysanthemum",
    "manufacturerId": "lancaster",
    "seriesNumber": 46,
    "nameKana": "クリサンセマム",
    "nameLatin": "CHRYSANTHEMUM",
    "archetypeId": "retro",
    "concept": "多様な品種を持つ菊を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "lancaster-clover",
    "manufacturerId": "lancaster",
    "seriesNumber": 47,
    "nameKana": "クローバー",
    "nameLatin": "CLOVER",
    "archetypeId": "counterDesign",
    "concept": "広く普及する野花を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "lancaster-daffodil",
    "manufacturerId": "lancaster",
    "seriesNumber": 48,
    "nameKana": "ダフォディル",
    "nameLatin": "DAFFODIL",
    "archetypeId": "weaponSavant",
    "concept": "春の代表的な花を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "lance": 5
    },
    "weaponGrowthAdjustments": {
      "lance": 0.055
    },
    "preferredWeapons": [
      "lance"
    ],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "ランスを中心に機体側から兵装へ合わせ込む。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "lancaster-edelweiss",
    "manufacturerId": "lancaster",
    "seriesNumber": 49,
    "nameKana": "エーデルワイス",
    "nameLatin": "EDELWEISS",
    "archetypeId": "aiAnomaly",
    "concept": "高山に咲く希少花を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "lancaster-gentian",
    "manufacturerId": "lancaster",
    "seriesNumber": 50,
    "nameKana": "ゲンチアン",
    "nameLatin": "GENTIAN",
    "archetypeId": "lottery",
    "concept": "鮮やかな青花を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "lancaster-heather",
    "manufacturerId": "lancaster",
    "seriesNumber": 51,
    "nameKana": "ヘザー",
    "nameLatin": "HEATHER",
    "archetypeId": "reliable",
    "concept": "荒地に群生する花を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "compute": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "lancaster-hollyhock",
    "manufacturerId": "lancaster",
    "seriesNumber": 52,
    "nameKana": "ホリーホック",
    "nameLatin": "HOLLYHOCK",
    "archetypeId": "ultraMobile",
    "concept": "高く伸びる花茎を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "lancaster-larkspur",
    "manufacturerId": "lancaster",
    "seriesNumber": 53,
    "nameKana": "ラークスパー",
    "nameLatin": "LARKSPUR",
    "archetypeId": "fortress",
    "concept": "縦に連なる花穂を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "lancaster-morningglory",
    "manufacturerId": "lancaster",
    "seriesNumber": 54,
    "nameKana": "モーニンググローリー",
    "nameLatin": "MORNINGGLORY",
    "archetypeId": "dataGlass",
    "concept": "朝に開く花を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 5
    },
    "weaponGrowthAdjustments": {
      "lance": 0.055
    },
    "preferredWeapons": [
      "lance"
    ],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "ランスを中心に機体側から兵装へ合わせ込む。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "lancaster-narcissus",
    "manufacturerId": "lancaster",
    "seriesNumber": 55,
    "nameKana": "ナルシサス",
    "nameLatin": "NARCISSUS",
    "archetypeId": "adaptive",
    "concept": "明確な造形を持つ花を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "lancaster-ranunculus",
    "manufacturerId": "lancaster",
    "seriesNumber": 56,
    "nameKana": "ラナンキュラス",
    "nameLatin": "RANUNCULUS",
    "archetypeId": "volatileExperimental",
    "concept": "多層の花弁を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "lancaster-snapdragon",
    "manufacturerId": "lancaster",
    "seriesNumber": 57,
    "nameKana": "スナップドラゴン",
    "nameLatin": "SNAPDRAGON",
    "archetypeId": "massProduction",
    "concept": "口状の花を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "lancaster-yarrow",
    "manufacturerId": "lancaster",
    "seriesNumber": 58,
    "nameKana": "ヤロウ",
    "nameLatin": "YARROW",
    "archetypeId": "lateGrowth",
    "concept": "小花が集合する薬草を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {
      "compute": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "lancaster-phlox",
    "manufacturerId": "lancaster",
    "seriesNumber": 59,
    "nameKana": "フロックス",
    "nameLatin": "PHLOX",
    "archetypeId": "overengineered",
    "concept": "群生で面を作る花を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "lancaster-cornflower",
    "manufacturerId": "lancaster",
    "seriesNumber": 60,
    "nameKana": "コーンフラワー",
    "nameLatin": "CORNFLOWER",
    "archetypeId": "apex",
    "concept": "鮮烈な青を持つ花を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。ランカスター・ダイナミクスはここで「明確な顧客像と商品価値から逆算し、売れる理由まで設計に含める」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "steinwald-kangchenjunga",
    "manufacturerId": "steinwald",
    "seriesNumber": 41,
    "nameKana": "カンチェンジュンガ",
    "nameLatin": "KANGCHENJUNGA",
    "archetypeId": "longSeller",
    "concept": "巨大山塊を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "steinwald-dhaulagiri",
    "manufacturerId": "steinwald",
    "seriesNumber": 42,
    "nameKana": "ダウラギリ",
    "nameLatin": "DHAULAGIRI",
    "archetypeId": "flagship",
    "concept": "高峰を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "steinwald-gasherbrum",
    "manufacturerId": "steinwald",
    "seriesNumber": 43,
    "nameKana": "ガッシャーブルム",
    "nameLatin": "GASHERBRUM",
    "archetypeId": "budget",
    "concept": "複数峰の山群を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "steinwald-broadpeak",
    "manufacturerId": "steinwald",
    "seriesNumber": 44,
    "nameKana": "ブロードピーク",
    "nameLatin": "BROADPEAK",
    "archetypeId": "glassCannon",
    "concept": "幅広い頂稜を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "steinwald-shishapangma",
    "manufacturerId": "steinwald",
    "seriesNumber": 45,
    "nameKana": "シシャパンマ",
    "nameLatin": "SHISHAPANGMA",
    "archetypeId": "growthProject",
    "concept": "高原に立つ峰を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {
      "ai": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "drone": 5
    },
    "weaponGrowthAdjustments": {
      "drone": 0.055
    },
    "preferredWeapons": [
      "drone"
    ],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "ドローンを中心に機体側から兵装へ合わせ込む。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "steinwald-pumori",
    "manufacturerId": "steinwald",
    "seriesNumber": 46,
    "nameKana": "プモリ",
    "nameLatin": "PUMORI",
    "archetypeId": "retro",
    "concept": "鋭い独立峰を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "steinwald-amadablam",
    "manufacturerId": "steinwald",
    "seriesNumber": 47,
    "nameKana": "アマダブラム",
    "nameLatin": "AMADABLAM",
    "archetypeId": "counterDesign",
    "concept": "均整の取れた山容を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "steinwald-meru",
    "manufacturerId": "steinwald",
    "seriesNumber": 48,
    "nameKana": "メルー",
    "nameLatin": "MERU",
    "archetypeId": "weaponSavant",
    "concept": "急峻な岩壁を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "machineGun": 5
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.055
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "マシンガンを中心に機体側から兵装へ合わせ込む。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "steinwald-fitzroy",
    "manufacturerId": "steinwald",
    "seriesNumber": 49,
    "nameKana": "フィッツロイ",
    "nameLatin": "FITZROY",
    "archetypeId": "aiAnomaly",
    "concept": "花崗岩の岩峰を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "steinwald-cerrotorre",
    "manufacturerId": "steinwald",
    "seriesNumber": 50,
    "nameKana": "セロトーレ",
    "nameLatin": "CERROTORRE",
    "archetypeId": "lottery",
    "concept": "針のような岩塔を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "steinwald-tablemountain",
    "manufacturerId": "steinwald",
    "seriesNumber": 51,
    "nameKana": "テーブル",
    "nameLatin": "TABLEMOUNTAIN",
    "archetypeId": "reliable",
    "concept": "平坦な頂部を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "sensor": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "steinwald-athos",
    "manufacturerId": "steinwald",
    "seriesNumber": 52,
    "nameKana": "アトス",
    "nameLatin": "ATHOS",
    "archetypeId": "ultraMobile",
    "concept": "独立した山塊を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "steinwald-pyrenees",
    "manufacturerId": "steinwald",
    "seriesNumber": 53,
    "nameKana": "ピレネー",
    "nameLatin": "PYRENEES",
    "archetypeId": "fortress",
    "concept": "長い山脈を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "steinwald-himalaya",
    "manufacturerId": "steinwald",
    "seriesNumber": 54,
    "nameKana": "ヒマラヤ",
    "nameLatin": "HIMALAYA",
    "archetypeId": "dataGlass",
    "concept": "巨大山系を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "machineGun": 5
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.055
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "マシンガンを中心に機体側から兵装へ合わせ込む。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "steinwald-rockies",
    "manufacturerId": "steinwald",
    "seriesNumber": 55,
    "nameKana": "ロッキー",
    "nameLatin": "ROCKIES",
    "archetypeId": "adaptive",
    "concept": "広大な山脈を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "steinwald-appalachia",
    "manufacturerId": "steinwald",
    "seriesNumber": 56,
    "nameKana": "アパラチア",
    "nameLatin": "APPALACHIA",
    "archetypeId": "volatileExperimental",
    "concept": "古い褶曲山地を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "steinwald-balkan",
    "manufacturerId": "steinwald",
    "seriesNumber": 57,
    "nameKana": "バルカン",
    "nameLatin": "BALKAN",
    "archetypeId": "massProduction",
    "concept": "複雑な山地を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "steinwald-caucasus",
    "manufacturerId": "steinwald",
    "seriesNumber": 58,
    "nameKana": "コーカサス",
    "nameLatin": "CAUCASUS",
    "archetypeId": "lateGrowth",
    "concept": "高低差の大きい山系を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {
      "sensor": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "steinwald-zagros",
    "manufacturerId": "steinwald",
    "seriesNumber": 59,
    "nameKana": "ザグロス",
    "nameLatin": "ZAGROS",
    "archetypeId": "overengineered",
    "concept": "長大な褶曲山脈を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "steinwald-atlasrange",
    "manufacturerId": "steinwald",
    "seriesNumber": 60,
    "nameKana": "アトラス",
    "nameLatin": "ATLASRANGE",
    "archetypeId": "apex",
    "concept": "乾燥地の山脈を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。シュタインヴァルト・インダストリーズはここで「電子補正に逃げず、構造と配置そのものから狙った挙動を成立させる」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "output": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "cromwell-periwinkle",
    "manufacturerId": "cromwell",
    "seriesNumber": 41,
    "nameKana": "ペリウィンクル",
    "nameLatin": "PERIWINKLE",
    "archetypeId": "longSeller",
    "concept": "青紫の中間色を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "cromwell-celadon",
    "manufacturerId": "cromwell",
    "seriesNumber": 42,
    "nameKana": "セラドン",
    "nameLatin": "CELADON",
    "archetypeId": "flagship",
    "concept": "灰みの青緑を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "compute": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "cromwell-ecru",
    "manufacturerId": "cromwell",
    "seriesNumber": 43,
    "nameKana": "エクリュ",
    "nameLatin": "ECRU",
    "archetypeId": "budget",
    "concept": "生成り色を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "cromwell-fuchsia",
    "manufacturerId": "cromwell",
    "seriesNumber": 44,
    "nameKana": "フクシア",
    "nameLatin": "FUCHSIA",
    "archetypeId": "glassCannon",
    "concept": "鮮烈な赤紫を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "cromwell-lemon",
    "manufacturerId": "cromwell",
    "seriesNumber": 45,
    "nameKana": "レモン",
    "nameLatin": "LEMON",
    "archetypeId": "growthProject",
    "concept": "高明度の黄色を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {
      "output": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "lance": 5
    },
    "weaponGrowthAdjustments": {
      "lance": 0.055
    },
    "preferredWeapons": [
      "lance"
    ],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "ランスを中心に機体側から兵装へ合わせ込む。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "cromwell-mustard",
    "manufacturerId": "cromwell",
    "seriesNumber": 46,
    "nameKana": "マスタード",
    "nameLatin": "MUSTARD",
    "archetypeId": "retro",
    "concept": "くすんだ黄を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "cromwell-plum",
    "manufacturerId": "cromwell",
    "seriesNumber": 47,
    "nameKana": "プラム",
    "nameLatin": "PLUM",
    "archetypeId": "counterDesign",
    "concept": "深い赤紫を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "cromwell-rust",
    "manufacturerId": "cromwell",
    "seriesNumber": 48,
    "nameKana": "ラスト",
    "nameLatin": "RUST",
    "archetypeId": "weaponSavant",
    "concept": "錆色を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamCannon": 5
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.055
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "ビーム砲を中心に機体側から兵装へ合わせ込む。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "cromwell-sand",
    "manufacturerId": "cromwell",
    "seriesNumber": 49,
    "nameKana": "サンド",
    "nameLatin": "SAND",
    "archetypeId": "aiAnomaly",
    "concept": "砂色を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "cromwell-smoke",
    "manufacturerId": "cromwell",
    "seriesNumber": 50,
    "nameKana": "スモーク",
    "nameLatin": "SMOKE",
    "archetypeId": "lottery",
    "concept": "煙の灰色を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "cromwell-steelblue",
    "manufacturerId": "cromwell",
    "seriesNumber": 51,
    "nameKana": "スチールブルー",
    "nameLatin": "STEELBLUE",
    "archetypeId": "reliable",
    "concept": "鋼を思わせる青を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "cromwell-tan",
    "manufacturerId": "cromwell",
    "seriesNumber": 52,
    "nameKana": "タン",
    "nameLatin": "TAN",
    "archetypeId": "ultraMobile",
    "concept": "淡い褐色を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "cromwell-wine",
    "manufacturerId": "cromwell",
    "seriesNumber": 53,
    "nameKana": "ワイン",
    "nameLatin": "WINE",
    "archetypeId": "fortress",
    "concept": "濃い赤紫を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "cromwell-cinnabar",
    "manufacturerId": "cromwell",
    "seriesNumber": 54,
    "nameKana": "シナバー",
    "nameLatin": "CINNABAR",
    "archetypeId": "dataGlass",
    "concept": "朱砂色を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "beamCannon": 5
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.055
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "ビーム砲を中心に機体側から兵装へ合わせ込む。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "cromwell-coquelicot",
    "manufacturerId": "cromwell",
    "seriesNumber": 55,
    "nameKana": "コクリコ",
    "nameLatin": "COQUELICOT",
    "archetypeId": "adaptive",
    "concept": "鮮やかな赤を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "cromwell-glacier",
    "manufacturerId": "cromwell",
    "seriesNumber": 56,
    "nameKana": "グレイシャー",
    "nameLatin": "GLACIER",
    "archetypeId": "volatileExperimental",
    "concept": "氷河の淡青を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "cromwell-midnight",
    "manufacturerId": "cromwell",
    "seriesNumber": 57,
    "nameKana": "ミッドナイト",
    "nameLatin": "MIDNIGHT",
    "archetypeId": "massProduction",
    "concept": "夜の濃紺を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "cromwell-moss",
    "manufacturerId": "cromwell",
    "seriesNumber": 58,
    "nameKana": "モス",
    "nameLatin": "MOSS",
    "archetypeId": "lateGrowth",
    "concept": "苔の緑を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {
      "ai": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "cromwell-ice",
    "manufacturerId": "cromwell",
    "seriesNumber": 59,
    "nameKana": "アイス",
    "nameLatin": "ICE",
    "archetypeId": "overengineered",
    "concept": "冷たい淡色を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "cromwell-ink",
    "manufacturerId": "cromwell",
    "seriesNumber": 60,
    "nameKana": "インク",
    "nameLatin": "INK",
    "archetypeId": "apex",
    "concept": "深い青黒を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。クロムウェル・システムズはここで「単項目の最高値ではなく、複数系統の噛み合わせで結果を作る」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "mobility": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "rhenium-kunzite",
    "manufacturerId": "rhenium",
    "seriesNumber": 41,
    "nameKana": "クンツァイト",
    "nameLatin": "KUNZITE",
    "archetypeId": "longSeller",
    "concept": "淡紫の宝石を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "rhenium-iolite",
    "manufacturerId": "rhenium",
    "seriesNumber": 42,
    "nameKana": "アイオライト",
    "nameLatin": "IOLITE",
    "archetypeId": "flagship",
    "concept": "青紫の宝石を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "sensor": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "rhenium-tsavorite",
    "manufacturerId": "rhenium",
    "seriesNumber": 43,
    "nameKana": "ツァボライト",
    "nameLatin": "TSAVORITE",
    "archetypeId": "budget",
    "concept": "緑色ガーネットを名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "rhenium-demantoid",
    "manufacturerId": "rhenium",
    "seriesNumber": 44,
    "nameKana": "デマントイド",
    "nameLatin": "DEMANTOID",
    "archetypeId": "glassCannon",
    "concept": "高輝度ガーネットを名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "rhenium-chalcedony",
    "manufacturerId": "rhenium",
    "seriesNumber": 45,
    "nameKana": "カルセドニー",
    "nameLatin": "CHALCEDONY",
    "archetypeId": "growthProject",
    "concept": "微細結晶石英を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {
      "mobility": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "machineGun": 5
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.055
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "マシンガンを中心に機体側から兵装へ合わせ込む。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "rhenium-carnelian",
    "manufacturerId": "rhenium",
    "seriesNumber": 46,
    "nameKana": "カーネリアン",
    "nameLatin": "CARNELIAN",
    "archetypeId": "retro",
    "concept": "赤橙色の玉髄を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "rhenium-sodalite",
    "manufacturerId": "rhenium",
    "seriesNumber": 47,
    "nameKana": "ソーダライト",
    "nameLatin": "SODALITE",
    "archetypeId": "counterDesign",
    "concept": "青色鉱物を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "rhenium-amazonite",
    "manufacturerId": "rhenium",
    "seriesNumber": 48,
    "nameKana": "アマゾナイト",
    "nameLatin": "AMAZONITE",
    "archetypeId": "weaponSavant",
    "concept": "青緑色長石を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "drone": 5
    },
    "weaponGrowthAdjustments": {
      "drone": 0.055
    },
    "preferredWeapons": [
      "drone"
    ],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "ドローンを中心に機体側から兵装へ合わせ込む。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "rhenium-prehnite",
    "manufacturerId": "rhenium",
    "seriesNumber": 49,
    "nameKana": "プレナイト",
    "nameLatin": "PREHNITE",
    "archetypeId": "aiAnomaly",
    "concept": "淡緑色鉱物を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "rhenium-larimar",
    "manufacturerId": "rhenium",
    "seriesNumber": 50,
    "nameKana": "ラリマー",
    "nameLatin": "LARIMAR",
    "archetypeId": "lottery",
    "concept": "青色ペクトライトを名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "rhenium-serpentine",
    "manufacturerId": "rhenium",
    "seriesNumber": 51,
    "nameKana": "サーペンティン",
    "nameLatin": "SERPENTINE",
    "archetypeId": "reliable",
    "concept": "蛇紋石を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "output": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "rhenium-chrysocolla",
    "manufacturerId": "rhenium",
    "seriesNumber": 52,
    "nameKana": "クリソコラ",
    "nameLatin": "CHRYSOCOLLA",
    "archetypeId": "ultraMobile",
    "concept": "青緑色鉱物を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "rhenium-jet",
    "manufacturerId": "rhenium",
    "seriesNumber": 53,
    "nameKana": "ジェット",
    "nameLatin": "JET",
    "archetypeId": "fortress",
    "concept": "黒玉を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "rhenium-moldavite",
    "manufacturerId": "rhenium",
    "seriesNumber": 54,
    "nameKana": "モルダバイト",
    "nameLatin": "MOLDAVITE",
    "archetypeId": "dataGlass",
    "concept": "天然ガラスを名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "drone": 5
    },
    "weaponGrowthAdjustments": {
      "drone": 0.055
    },
    "preferredWeapons": [
      "drone"
    ],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "ドローンを中心に機体側から兵装へ合わせ込む。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "rhenium-rhodochrosite",
    "manufacturerId": "rhenium",
    "seriesNumber": 55,
    "nameKana": "ロードクロサイト",
    "nameLatin": "RHODOCHROSITE",
    "archetypeId": "adaptive",
    "concept": "紅色鉱物を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "rhenium-aventurine",
    "manufacturerId": "rhenium",
    "seriesNumber": 56,
    "nameKana": "アベンチュリン",
    "nameLatin": "AVENTURINE",
    "archetypeId": "volatileExperimental",
    "concept": "砂金石英を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "rhenium-moissanite",
    "manufacturerId": "rhenium",
    "seriesNumber": 57,
    "nameKana": "モアサナイト",
    "nameLatin": "MOISSANITE",
    "archetypeId": "massProduction",
    "concept": "高硬度結晶を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "rhenium-sphene",
    "manufacturerId": "rhenium",
    "seriesNumber": 58,
    "nameKana": "スフェーン",
    "nameLatin": "SPHENE",
    "archetypeId": "lateGrowth",
    "concept": "強い分散光を持つ宝石を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {
      "output": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "rhenium-benitoite",
    "manufacturerId": "rhenium",
    "seriesNumber": 59,
    "nameKana": "ベニトアイト",
    "nameLatin": "BENITOITE",
    "archetypeId": "overengineered",
    "concept": "希少な青色宝石を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "rhenium-paraiba",
    "manufacturerId": "rhenium",
    "seriesNumber": 60,
    "nameKana": "パライバ",
    "nameLatin": "PARAIBA",
    "archetypeId": "apex",
    "concept": "鮮烈な青緑宝石を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。レニウム・ワークスはここで「少量生産だからこそ許される素材・加工・癖の強い構造を価値に変える」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "hawthorne-hyena",
    "manufacturerId": "hawthorne",
    "seriesNumber": 41,
    "nameKana": "ハイエナ",
    "nameLatin": "HYENA",
    "archetypeId": "longSeller",
    "concept": "集団で狩る捕食者を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "hawthorne-lion",
    "manufacturerId": "hawthorne",
    "seriesNumber": 42,
    "nameKana": "ライオン",
    "nameLatin": "LION",
    "archetypeId": "flagship",
    "concept": "群れを率いる大型猫を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "hawthorne-tiger",
    "manufacturerId": "hawthorne",
    "seriesNumber": 43,
    "nameKana": "タイガー",
    "nameLatin": "TIGER",
    "archetypeId": "budget",
    "concept": "単独強襲型の大型猫を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "hawthorne-gorilla",
    "manufacturerId": "hawthorne",
    "seriesNumber": 44,
    "nameKana": "ゴリラ",
    "nameLatin": "GORILLA",
    "archetypeId": "glassCannon",
    "concept": "高出力の霊長類を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hawthorne-baboon",
    "manufacturerId": "hawthorne",
    "seriesNumber": 45,
    "nameKana": "バブーン",
    "nameLatin": "BABOON",
    "archetypeId": "growthProject",
    "concept": "集団警戒に優れる霊長類を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {
      "control": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamCannon": 5
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.055
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "ビーム砲を中心に機体側から兵装へ合わせ込む。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hawthorne-moose",
    "manufacturerId": "hawthorne",
    "seriesNumber": 46,
    "nameKana": "ムース",
    "nameLatin": "MOOSE",
    "archetypeId": "retro",
    "concept": "大型で安定した草食獣を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hawthorne-elk",
    "manufacturerId": "hawthorne",
    "seriesNumber": 47,
    "nameKana": "エルク",
    "nameLatin": "ELK",
    "archetypeId": "counterDesign",
    "concept": "長距離移動する大型獣を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hawthorne-ferret",
    "manufacturerId": "hawthorne",
    "seriesNumber": 48,
    "nameKana": "フェレット",
    "nameLatin": "FERRET",
    "archetypeId": "weaponSavant",
    "concept": "狭所を走る小型獣を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "lance": 5
    },
    "weaponGrowthAdjustments": {
      "lance": 0.055
    },
    "preferredWeapons": [
      "lance"
    ],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "ランスを中心に機体側から兵装へ合わせ込む。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hawthorne-stoat",
    "manufacturerId": "hawthorne",
    "seriesNumber": 49,
    "nameKana": "ストート",
    "nameLatin": "STOAT",
    "archetypeId": "aiAnomaly",
    "concept": "俊敏な小型捕食者を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "hawthorne-mongoose",
    "manufacturerId": "hawthorne",
    "seriesNumber": 50,
    "nameKana": "マングース",
    "nameLatin": "MONGOOSE",
    "archetypeId": "lottery",
    "concept": "素早い対蛇行動を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "hawthorne-komodo",
    "manufacturerId": "hawthorne",
    "seriesNumber": 51,
    "nameKana": "コモド",
    "nameLatin": "KOMODO",
    "archetypeId": "reliable",
    "concept": "待ち伏せ型大型爬虫類を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "mobility": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "hawthorne-gator",
    "manufacturerId": "hawthorne",
    "seriesNumber": 52,
    "nameKana": "ゲーター",
    "nameLatin": "GATOR",
    "archetypeId": "ultraMobile",
    "concept": "水陸両用の待ち伏せ捕食者を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hawthorne-crocodile",
    "manufacturerId": "hawthorne",
    "seriesNumber": 53,
    "nameKana": "クロコダイル",
    "nameLatin": "CROCODILE",
    "archetypeId": "fortress",
    "concept": "瞬間的な噛み付き捕食者を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hawthorne-piranha",
    "manufacturerId": "hawthorne",
    "seriesNumber": 54,
    "nameKana": "ピラニア",
    "nameLatin": "PIRANHA",
    "archetypeId": "dataGlass",
    "concept": "群れで圧力をかける魚を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 5
    },
    "weaponGrowthAdjustments": {
      "lance": 0.055
    },
    "preferredWeapons": [
      "lance"
    ],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "ランスを中心に機体側から兵装へ合わせ込む。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hawthorne-swordfish",
    "manufacturerId": "hawthorne",
    "seriesNumber": 55,
    "nameKana": "ソードフィッシュ",
    "nameLatin": "SWORDFISH",
    "archetypeId": "adaptive",
    "concept": "高速で突進する魚を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hawthorne-stingray",
    "manufacturerId": "hawthorne",
    "seriesNumber": 56,
    "nameKana": "スティングレイ",
    "nameLatin": "STINGRAY",
    "archetypeId": "volatileExperimental",
    "concept": "平面機動する魚を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "hawthorne-hummingbird",
    "manufacturerId": "hawthorne",
    "seriesNumber": 57,
    "nameKana": "ハミングバード",
    "nameLatin": "HUMMINGBIRD",
    "archetypeId": "massProduction",
    "concept": "高速ホバリング鳥を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "hawthorne-magpie",
    "manufacturerId": "hawthorne",
    "seriesNumber": 58,
    "nameKana": "マグパイ",
    "nameLatin": "MAGPIE",
    "archetypeId": "lateGrowth",
    "concept": "学習性の高い鳥を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {
      "mobility": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "hawthorne-condor",
    "manufacturerId": "hawthorne",
    "seriesNumber": 59,
    "nameKana": "コンドル",
    "nameLatin": "CONDOR",
    "archetypeId": "overengineered",
    "concept": "長時間滑空する大型鳥を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "hawthorne-vulture",
    "manufacturerId": "hawthorne",
    "seriesNumber": 60,
    "nameKana": "ヴァルチャー",
    "nameLatin": "VULTURE",
    "archetypeId": "apex",
    "concept": "状況判断で機会を待つ鳥を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。ホーソーン・ロボティクスはここで「自律機械の行動原理を先に決め、その性格に合わせてハードを組む」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "arcadia-prometheus",
    "manufacturerId": "arcadia",
    "seriesNumber": 41,
    "nameKana": "プロメテウス",
    "nameLatin": "PROMETHEUS",
    "archetypeId": "longSeller",
    "concept": "火をもたらした神格を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "arcadia-icarus",
    "manufacturerId": "arcadia",
    "seriesNumber": 42,
    "nameKana": "イカロス",
    "nameLatin": "ICARUS",
    "archetypeId": "flagship",
    "concept": "限界へ飛んだ人物を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "output": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "arcadia-orpheus",
    "manufacturerId": "arcadia",
    "seriesNumber": 43,
    "nameKana": "オルフェウス",
    "nameLatin": "ORPHEUS",
    "archetypeId": "budget",
    "concept": "冥界へ赴いた詩人を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "arcadia-theseus",
    "manufacturerId": "arcadia",
    "seriesNumber": 44,
    "nameKana": "テセウス",
    "nameLatin": "THESEUS",
    "archetypeId": "glassCannon",
    "concept": "迷宮を攻略した英雄を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "arcadia-ariadne",
    "manufacturerId": "arcadia",
    "seriesNumber": 45,
    "nameKana": "アリアドネ",
    "nameLatin": "ARIADNE",
    "archetypeId": "growthProject",
    "concept": "迷宮の糸を与えた人物を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {
      "engine": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "drone": 5
    },
    "weaponGrowthAdjustments": {
      "drone": 0.055
    },
    "preferredWeapons": [
      "drone"
    ],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "ドローンを中心に機体側から兵装へ合わせ込む。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "arcadia-nemesis",
    "manufacturerId": "arcadia",
    "seriesNumber": 46,
    "nameKana": "ネメシス",
    "nameLatin": "NEMESIS",
    "archetypeId": "retro",
    "concept": "均衡と報いの女神を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "arcadia-eris",
    "manufacturerId": "arcadia",
    "seriesNumber": 47,
    "nameKana": "エリス",
    "nameLatin": "ERIS",
    "archetypeId": "counterDesign",
    "concept": "不和の女神を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "arcadia-gaia",
    "manufacturerId": "arcadia",
    "seriesNumber": 48,
    "nameKana": "ガイア",
    "nameLatin": "GAIA",
    "archetypeId": "weaponSavant",
    "concept": "大地の原初神を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "machineGun": 5
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.055
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "マシンガンを中心に機体側から兵装へ合わせ込む。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "arcadia-nyx",
    "manufacturerId": "arcadia",
    "seriesNumber": 49,
    "nameKana": "ニュクス",
    "nameLatin": "NYX",
    "archetypeId": "aiAnomaly",
    "concept": "夜の原初神を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "arcadia-eos",
    "manufacturerId": "arcadia",
    "seriesNumber": 50,
    "nameKana": "エオス",
    "nameLatin": "EOS",
    "archetypeId": "lottery",
    "concept": "暁の女神を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "arcadia-pan",
    "manufacturerId": "arcadia",
    "seriesNumber": 51,
    "nameKana": "パン",
    "nameLatin": "PAN",
    "archetypeId": "reliable",
    "concept": "野生の神を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "arcadia-cerberus",
    "manufacturerId": "arcadia",
    "seriesNumber": 52,
    "nameKana": "ケルベロス",
    "nameLatin": "CERBERUS",
    "archetypeId": "ultraMobile",
    "concept": "冥府の番犬を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "arcadia-hydra",
    "manufacturerId": "arcadia",
    "seriesNumber": 53,
    "nameKana": "ヒュドラ",
    "nameLatin": "HYDRA",
    "archetypeId": "fortress",
    "concept": "多頭の怪物を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "arcadia-pegasus",
    "manufacturerId": "arcadia",
    "seriesNumber": 54,
    "nameKana": "ペガサス",
    "nameLatin": "PEGASUS",
    "archetypeId": "dataGlass",
    "concept": "翼ある馬を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "machineGun": 5
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.055
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "マシンガンを中心に機体側から兵装へ合わせ込む。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "arcadia-chimera",
    "manufacturerId": "arcadia",
    "seriesNumber": 55,
    "nameKana": "キマイラ",
    "nameLatin": "CHIMERA",
    "archetypeId": "adaptive",
    "concept": "複合怪物を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "arcadia-sphinx",
    "manufacturerId": "arcadia",
    "seriesNumber": 56,
    "nameKana": "スフィンクス",
    "nameLatin": "SPHINX",
    "archetypeId": "volatileExperimental",
    "concept": "謎を課す怪物を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "arcadia-marduk",
    "manufacturerId": "arcadia",
    "seriesNumber": 57,
    "nameKana": "マルドゥク",
    "nameLatin": "MARDUK",
    "archetypeId": "massProduction",
    "concept": "都市国家の主神を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "arcadia-ishtar",
    "manufacturerId": "arcadia",
    "seriesNumber": 58,
    "nameKana": "イシュタル",
    "nameLatin": "ISHTAR",
    "archetypeId": "lateGrowth",
    "concept": "戦と愛の女神を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {
      "control": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "arcadia-enkidu",
    "manufacturerId": "arcadia",
    "seriesNumber": 59,
    "nameKana": "エンキドゥ",
    "nameLatin": "ENKIDU",
    "archetypeId": "overengineered",
    "concept": "野生から文明へ来た英雄を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "arcadia-gilgamesh",
    "manufacturerId": "arcadia",
    "seriesNumber": 60,
    "nameKana": "ギルガメシュ",
    "nameLatin": "GILGAMESH",
    "archetypeId": "apex",
    "concept": "王たる英雄を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。アルカディア・テクノロジーズはここで「理想像を先に置き、現実側を強引に追いつかせる」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "compute": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "solberg-sadr",
    "manufacturerId": "solberg",
    "seriesNumber": 41,
    "nameKana": "サドル",
    "nameLatin": "SADR",
    "archetypeId": "longSeller",
    "concept": "はくちょう座の恒星を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "solberg-albireo",
    "manufacturerId": "solberg",
    "seriesNumber": 42,
    "nameKana": "アルビレオ",
    "nameLatin": "ALBIREO",
    "archetypeId": "flagship",
    "concept": "色対比の美しい連星を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "mobility": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "solberg-alnitak",
    "manufacturerId": "solberg",
    "seriesNumber": 43,
    "nameKana": "アルニタク",
    "nameLatin": "ALNITAK",
    "archetypeId": "budget",
    "concept": "オリオン帯の恒星を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "solberg-mintaka",
    "manufacturerId": "solberg",
    "seriesNumber": 44,
    "nameKana": "ミンタカ",
    "nameLatin": "MINTAKA",
    "archetypeId": "glassCannon",
    "concept": "オリオン帯の恒星を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "solberg-saiph",
    "manufacturerId": "solberg",
    "seriesNumber": 45,
    "nameKana": "サイフ",
    "nameLatin": "SAIPH",
    "archetypeId": "growthProject",
    "concept": "オリオン座の恒星を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {
      "compute": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "lance": 5
    },
    "weaponGrowthAdjustments": {
      "lance": 0.055
    },
    "preferredWeapons": [
      "lance"
    ],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "ランスを中心に機体側から兵装へ合わせ込む。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "solberg-wezen",
    "manufacturerId": "solberg",
    "seriesNumber": 46,
    "nameKana": "ウェズン",
    "nameLatin": "WEZEN",
    "archetypeId": "retro",
    "concept": "おおいぬ座の恒星を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "solberg-adhara",
    "manufacturerId": "solberg",
    "seriesNumber": 47,
    "nameKana": "アダーラ",
    "nameLatin": "ADHARA",
    "archetypeId": "counterDesign",
    "concept": "おおいぬ座の恒星を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "solberg-avior",
    "manufacturerId": "solberg",
    "seriesNumber": 48,
    "nameKana": "アヴィオール",
    "nameLatin": "AVIOR",
    "archetypeId": "weaponSavant",
    "concept": "りゅうこつ座の恒星を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamCannon": 5
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.055
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "ビーム砲を中心に機体側から兵装へ合わせ込む。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "solberg-kaus",
    "manufacturerId": "solberg",
    "seriesNumber": 49,
    "nameKana": "カウス",
    "nameLatin": "KAUS",
    "archetypeId": "aiAnomaly",
    "concept": "いて座の恒星群を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "solberg-nunki",
    "manufacturerId": "solberg",
    "seriesNumber": 50,
    "nameKana": "ヌンキ",
    "nameLatin": "NUNKI",
    "archetypeId": "lottery",
    "concept": "いて座の恒星を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "solberg-unukalhai",
    "manufacturerId": "solberg",
    "seriesNumber": 51,
    "nameKana": "ウヌクアルハイ",
    "nameLatin": "UNUKALHAI",
    "archetypeId": "reliable",
    "concept": "へび座の恒星を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "solberg-alpheratz",
    "manufacturerId": "solberg",
    "seriesNumber": 52,
    "nameKana": "アルフェラッツ",
    "nameLatin": "ALPHERATZ",
    "archetypeId": "ultraMobile",
    "concept": "アンドロメダ座の恒星を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "solberg-markab",
    "manufacturerId": "solberg",
    "seriesNumber": 53,
    "nameKana": "マルカブ",
    "nameLatin": "MARKAB",
    "archetypeId": "fortress",
    "concept": "ペガスス座の恒星を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "solberg-enif",
    "manufacturerId": "solberg",
    "seriesNumber": 54,
    "nameKana": "エニフ",
    "nameLatin": "ENIF",
    "archetypeId": "dataGlass",
    "concept": "ペガスス座の恒星を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "beamCannon": 5
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.055
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "ビーム砲を中心に機体側から兵装へ合わせ込む。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "solberg-mirach",
    "manufacturerId": "solberg",
    "seriesNumber": 55,
    "nameKana": "ミラク",
    "nameLatin": "MIRACH",
    "archetypeId": "adaptive",
    "concept": "アンドロメダ座の恒星を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "solberg-kochab",
    "manufacturerId": "solberg",
    "seriesNumber": 56,
    "nameKana": "コカブ",
    "nameLatin": "KOCHAB",
    "archetypeId": "volatileExperimental",
    "concept": "こぐま座の恒星を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "solberg-pherkad",
    "manufacturerId": "solberg",
    "seriesNumber": 57,
    "nameKana": "フェルカド",
    "nameLatin": "PHERKAD",
    "archetypeId": "massProduction",
    "concept": "こぐま座の恒星を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "solberg-denebola",
    "manufacturerId": "solberg",
    "seriesNumber": 58,
    "nameKana": "デネボラ",
    "nameLatin": "DENEBOLA",
    "archetypeId": "lateGrowth",
    "concept": "しし座の恒星を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {
      "engine": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "solberg-vindemiatrix",
    "manufacturerId": "solberg",
    "seriesNumber": 59,
    "nameKana": "ヴィンデミアトリクス",
    "nameLatin": "VINDEMIATRIX",
    "archetypeId": "overengineered",
    "concept": "おとめ座の恒星を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "solberg-zosma",
    "manufacturerId": "solberg",
    "seriesNumber": 60,
    "nameKana": "ゾスマ",
    "nameLatin": "ZOSMA",
    "archetypeId": "apex",
    "concept": "しし座の恒星を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。ソルベルグ・エンジニアリングはここで「シミュレーションと理論モデルで挙動を予測可能にしてから製造へ移す」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "sensor": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "grayson-tradewind",
    "manufacturerId": "grayson",
    "seriesNumber": 41,
    "nameKana": "トレードウィンド",
    "nameLatin": "TRADEWIND",
    "archetypeId": "longSeller",
    "concept": "恒常的な貿易風を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "grayson-polarvortex",
    "manufacturerId": "grayson",
    "seriesNumber": 42,
    "nameKana": "ポーラーヴォルテックス",
    "nameLatin": "POLARVORTEX",
    "archetypeId": "flagship",
    "concept": "極渦を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "grayson-atmosphericriver",
    "manufacturerId": "grayson",
    "seriesNumber": 43,
    "nameKana": "アトモスフェリックリバー",
    "nameLatin": "ATMOSPHERICRIVER",
    "archetypeId": "budget",
    "concept": "大気の川を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "grayson-lakesnow",
    "manufacturerId": "grayson",
    "seriesNumber": 44,
    "nameKana": "レイクスノー",
    "nameLatin": "LAKESNOW",
    "archetypeId": "glassCannon",
    "concept": "湖効果雪を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "grayson-graupel",
    "manufacturerId": "grayson",
    "seriesNumber": 45,
    "nameKana": "グラウペル",
    "nameLatin": "GRAUPEL",
    "archetypeId": "growthProject",
    "concept": "霰状の雪粒を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {
      "sensor": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "machineGun": 5
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.055
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "マシンガンを中心に機体側から兵装へ合わせ込む。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "grayson-freezingrain",
    "manufacturerId": "grayson",
    "seriesNumber": 46,
    "nameKana": "フリージングレイン",
    "nameLatin": "FREEZINGRAIN",
    "archetypeId": "retro",
    "concept": "着氷性の雨を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "grayson-blackice",
    "manufacturerId": "grayson",
    "seriesNumber": 47,
    "nameKana": "ブラックアイス",
    "nameLatin": "BLACKICE",
    "archetypeId": "counterDesign",
    "concept": "透明な路面氷を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "grayson-rime",
    "manufacturerId": "grayson",
    "seriesNumber": 48,
    "nameKana": "ライム",
    "nameLatin": "RIME",
    "archetypeId": "weaponSavant",
    "concept": "霧氷を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "drone": 5
    },
    "weaponGrowthAdjustments": {
      "drone": 0.055
    },
    "preferredWeapons": [
      "drone"
    ],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "ドローンを中心に機体側から兵装へ合わせ込む。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "grayson-dewpoint",
    "manufacturerId": "grayson",
    "seriesNumber": 49,
    "nameKana": "デューポイント",
    "nameLatin": "DEWPOINT",
    "archetypeId": "aiAnomaly",
    "concept": "露点を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "grayson-virga",
    "manufacturerId": "grayson",
    "seriesNumber": 50,
    "nameKana": "ヴァーガ",
    "nameLatin": "VIRGA",
    "archetypeId": "lottery",
    "concept": "地上に届かない降水を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "grayson-mammatus",
    "manufacturerId": "grayson",
    "seriesNumber": 51,
    "nameKana": "マンマタス",
    "nameLatin": "MAMMATUS",
    "archetypeId": "reliable",
    "concept": "乳房雲を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "compute": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "grayson-rollcloud",
    "manufacturerId": "grayson",
    "seriesNumber": 52,
    "nameKana": "ロールクラウド",
    "nameLatin": "ROLLCLOUD",
    "archetypeId": "ultraMobile",
    "concept": "ロール状雲を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "grayson-wallcloud",
    "manufacturerId": "grayson",
    "seriesNumber": 53,
    "nameKana": "ウォールクラウド",
    "nameLatin": "WALLCLOUD",
    "archetypeId": "fortress",
    "concept": "壁雲を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "grayson-gustfront",
    "manufacturerId": "grayson",
    "seriesNumber": 54,
    "nameKana": "ガストフロント",
    "nameLatin": "GUSTFRONT",
    "archetypeId": "dataGlass",
    "concept": "突風前線を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "drone": 5
    },
    "weaponGrowthAdjustments": {
      "drone": 0.055
    },
    "preferredWeapons": [
      "drone"
    ],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "ドローンを中心に機体側から兵装へ合わせ込む。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "grayson-sundog",
    "manufacturerId": "grayson",
    "seriesNumber": 55,
    "nameKana": "サンドッグ",
    "nameLatin": "SUNDOG",
    "archetypeId": "adaptive",
    "concept": "幻日を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "grayson-glory",
    "manufacturerId": "grayson",
    "seriesNumber": 56,
    "nameKana": "グローリー",
    "nameLatin": "GLORY",
    "archetypeId": "volatileExperimental",
    "concept": "光輪現象を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "grayson-fogbow",
    "manufacturerId": "grayson",
    "seriesNumber": 57,
    "nameKana": "フォグボウ",
    "nameLatin": "FOGBOW",
    "archetypeId": "massProduction",
    "concept": "霧虹を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "grayson-crepuscular",
    "manufacturerId": "grayson",
    "seriesNumber": 58,
    "nameKana": "クレパスキュラー",
    "nameLatin": "CREPUSCULAR",
    "archetypeId": "lateGrowth",
    "concept": "薄明光線を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {
      "compute": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "grayson-greenflash",
    "manufacturerId": "grayson",
    "seriesNumber": 59,
    "nameKana": "グリーンフラッシュ",
    "nameLatin": "GREENFLASH",
    "archetypeId": "overengineered",
    "concept": "日没時の緑閃光を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "grayson-duststorm",
    "manufacturerId": "grayson",
    "seriesNumber": 60,
    "nameKana": "ダストストーム",
    "nameLatin": "DUSTSTORM",
    "archetypeId": "apex",
    "concept": "砂塵嵐を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。グレイソン・マニュファクチャリングはここで「一台の奇跡ではなく、量産工程で同じ性能を千台再現することを重視する」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "laplace-laplacian",
    "manufacturerId": "laplace",
    "seriesNumber": 41,
    "nameKana": "ラプラシアン",
    "nameLatin": "LAPLACIAN",
    "archetypeId": "longSeller",
    "concept": "ラプラス作用素を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "laplace-jacobian",
    "manufacturerId": "laplace",
    "seriesNumber": 42,
    "nameKana": "ヤコビアン",
    "nameLatin": "JACOBIAN",
    "archetypeId": "flagship",
    "concept": "ヤコビ行列を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "laplace-hessian",
    "manufacturerId": "laplace",
    "seriesNumber": 43,
    "nameKana": "ヘッシアン",
    "nameLatin": "HESSIAN",
    "archetypeId": "budget",
    "concept": "ヘッセ行列を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "laplace-kernel",
    "manufacturerId": "laplace",
    "seriesNumber": 44,
    "nameKana": "カーネル",
    "nameLatin": "KERNEL",
    "archetypeId": "glassCannon",
    "concept": "核関数を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "laplace-bayesnet",
    "manufacturerId": "laplace",
    "seriesNumber": 45,
    "nameKana": "ベイズネット",
    "nameLatin": "BAYESNET",
    "archetypeId": "growthProject",
    "concept": "ベイジアンネットワークを名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {
      "ai": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamCannon": 5
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.055
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "ビーム砲を中心に機体側から兵装へ合わせ込む。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "laplace-martingale",
    "manufacturerId": "laplace",
    "seriesNumber": 46,
    "nameKana": "マルチンゲール",
    "nameLatin": "MARTINGALE",
    "archetypeId": "retro",
    "concept": "確率過程を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "laplace-wiener",
    "manufacturerId": "laplace",
    "seriesNumber": 47,
    "nameKana": "ウィーナー",
    "nameLatin": "WIENER",
    "archetypeId": "counterDesign",
    "concept": "ウィーナー過程を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "laplace-brownian",
    "manufacturerId": "laplace",
    "seriesNumber": 48,
    "nameKana": "ブラウニアン",
    "nameLatin": "BROWNIAN",
    "archetypeId": "weaponSavant",
    "concept": "ブラウン運動を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "lance": 5
    },
    "weaponGrowthAdjustments": {
      "lance": 0.055
    },
    "preferredWeapons": [
      "lance"
    ],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "ランスを中心に機体側から兵装へ合わせ込む。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "laplace-ergodic",
    "manufacturerId": "laplace",
    "seriesNumber": 49,
    "nameKana": "エルゴード",
    "nameLatin": "ERGODIC",
    "archetypeId": "aiAnomaly",
    "concept": "エルゴード性を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "laplace-lyapunov",
    "manufacturerId": "laplace",
    "seriesNumber": 50,
    "nameKana": "リアプノフ",
    "nameLatin": "LYAPUNOV",
    "archetypeId": "lottery",
    "concept": "安定性解析を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "laplace-pareto",
    "manufacturerId": "laplace",
    "seriesNumber": 51,
    "nameKana": "パレート",
    "nameLatin": "PARETO",
    "archetypeId": "reliable",
    "concept": "パレート分布を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "sensor": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "laplace-fibonacci",
    "manufacturerId": "laplace",
    "seriesNumber": 52,
    "nameKana": "フィボナッチ",
    "nameLatin": "FIBONACCI",
    "archetypeId": "ultraMobile",
    "concept": "数列を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "laplace-galois",
    "manufacturerId": "laplace",
    "seriesNumber": 53,
    "nameKana": "ガロア",
    "nameLatin": "GALOIS",
    "archetypeId": "fortress",
    "concept": "群論を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "laplace-banach",
    "manufacturerId": "laplace",
    "seriesNumber": 54,
    "nameKana": "バナッハ",
    "nameLatin": "BANACH",
    "archetypeId": "dataGlass",
    "concept": "関数解析を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "lance": 5
    },
    "weaponGrowthAdjustments": {
      "lance": 0.055
    },
    "preferredWeapons": [
      "lance"
    ],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "ランスを中心に機体側から兵装へ合わせ込む。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "laplace-legendre",
    "manufacturerId": "laplace",
    "seriesNumber": 55,
    "nameKana": "ルジャンドル",
    "nameLatin": "LEGENDRE",
    "archetypeId": "adaptive",
    "concept": "直交多項式を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "laplace-bessel",
    "manufacturerId": "laplace",
    "seriesNumber": 56,
    "nameKana": "ベッセル",
    "nameLatin": "BESSEL",
    "archetypeId": "volatileExperimental",
    "concept": "特殊関数を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "laplace-feynman",
    "manufacturerId": "laplace",
    "seriesNumber": 57,
    "nameKana": "ファインマン",
    "nameLatin": "FEYNMAN",
    "archetypeId": "massProduction",
    "concept": "経路積分を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "laplace-shannon",
    "manufacturerId": "laplace",
    "seriesNumber": 58,
    "nameKana": "シャノン",
    "nameLatin": "SHANNON",
    "archetypeId": "lateGrowth",
    "concept": "情報理論を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {
      "sensor": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "laplace-kolmogorov",
    "manufacturerId": "laplace",
    "seriesNumber": 59,
    "nameKana": "コルモゴロフ",
    "nameLatin": "KOLMOGOROV",
    "archetypeId": "overengineered",
    "concept": "確率論を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "laplace-ramanujan",
    "manufacturerId": "laplace",
    "seriesNumber": 60,
    "nameKana": "ラマヌジャン",
    "nameLatin": "RAMANUJAN",
    "archetypeId": "apex",
    "concept": "数論を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。ラプラス機関はここで「十分な情報があれば結果は予測できるという前提を、機体設計へ直接適用する」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "output": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "bureau13-case-41",
    "manufacturerId": "bureau13",
    "seriesNumber": 41,
    "nameKana": "ケース-41",
    "nameLatin": "CASE-41",
    "archetypeId": "longSeller",
    "concept": "第41追加要求仕様を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "bureau13-case-42",
    "manufacturerId": "bureau13",
    "seriesNumber": 42,
    "nameKana": "ケース-42",
    "nameLatin": "CASE-42",
    "archetypeId": "flagship",
    "concept": "第42追加要求仕様を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "compute": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "bureau13-case-43",
    "manufacturerId": "bureau13",
    "seriesNumber": 43,
    "nameKana": "ケース-43",
    "nameLatin": "CASE-43",
    "archetypeId": "budget",
    "concept": "第43追加要求仕様を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "bureau13-case-44",
    "manufacturerId": "bureau13",
    "seriesNumber": 44,
    "nameKana": "ケース-44",
    "nameLatin": "CASE-44",
    "archetypeId": "glassCannon",
    "concept": "第44追加要求仕様を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "bureau13-case-45",
    "manufacturerId": "bureau13",
    "seriesNumber": 45,
    "nameKana": "ケース-45",
    "nameLatin": "CASE-45",
    "archetypeId": "growthProject",
    "concept": "第45追加要求仕様を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {
      "output": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "drone": 5
    },
    "weaponGrowthAdjustments": {
      "drone": 0.055
    },
    "preferredWeapons": [
      "drone"
    ],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "ドローンを中心に機体側から兵装へ合わせ込む。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "bureau13-case-46",
    "manufacturerId": "bureau13",
    "seriesNumber": 46,
    "nameKana": "ケース-46",
    "nameLatin": "CASE-46",
    "archetypeId": "retro",
    "concept": "第46追加要求仕様を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "bureau13-case-47",
    "manufacturerId": "bureau13",
    "seriesNumber": 47,
    "nameKana": "ケース-47",
    "nameLatin": "CASE-47",
    "archetypeId": "counterDesign",
    "concept": "第47追加要求仕様を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "bureau13-case-48",
    "manufacturerId": "bureau13",
    "seriesNumber": 48,
    "nameKana": "ケース-48",
    "nameLatin": "CASE-48",
    "archetypeId": "weaponSavant",
    "concept": "第48追加要求仕様を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "machineGun": 5
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.055
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "マシンガンを中心に機体側から兵装へ合わせ込む。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "bureau13-case-49",
    "manufacturerId": "bureau13",
    "seriesNumber": 49,
    "nameKana": "ケース-49",
    "nameLatin": "CASE-49",
    "archetypeId": "aiAnomaly",
    "concept": "第49追加要求仕様を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "bureau13-case-50",
    "manufacturerId": "bureau13",
    "seriesNumber": 50,
    "nameKana": "ケース-50",
    "nameLatin": "CASE-50",
    "archetypeId": "lottery",
    "concept": "第50追加要求仕様を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "bureau13-case-51",
    "manufacturerId": "bureau13",
    "seriesNumber": 51,
    "nameKana": "ケース-51",
    "nameLatin": "CASE-51",
    "archetypeId": "reliable",
    "concept": "第51追加要求仕様を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "bureau13-case-52",
    "manufacturerId": "bureau13",
    "seriesNumber": 52,
    "nameKana": "ケース-52",
    "nameLatin": "CASE-52",
    "archetypeId": "ultraMobile",
    "concept": "第52追加要求仕様を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "bureau13-case-53",
    "manufacturerId": "bureau13",
    "seriesNumber": 53,
    "nameKana": "ケース-53",
    "nameLatin": "CASE-53",
    "archetypeId": "fortress",
    "concept": "第53追加要求仕様を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "bureau13-case-54",
    "manufacturerId": "bureau13",
    "seriesNumber": 54,
    "nameKana": "ケース-54",
    "nameLatin": "CASE-54",
    "archetypeId": "dataGlass",
    "concept": "第54追加要求仕様を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "machineGun": 5
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.055
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "マシンガンを中心に機体側から兵装へ合わせ込む。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "bureau13-case-55",
    "manufacturerId": "bureau13",
    "seriesNumber": 55,
    "nameKana": "ケース-55",
    "nameLatin": "CASE-55",
    "archetypeId": "adaptive",
    "concept": "第55追加要求仕様を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "bureau13-case-56",
    "manufacturerId": "bureau13",
    "seriesNumber": 56,
    "nameKana": "ケース-56",
    "nameLatin": "CASE-56",
    "archetypeId": "volatileExperimental",
    "concept": "第56追加要求仕様を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "bureau13-case-57",
    "manufacturerId": "bureau13",
    "seriesNumber": 57,
    "nameKana": "ケース-57",
    "nameLatin": "CASE-57",
    "archetypeId": "massProduction",
    "concept": "第57追加要求仕様を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "bureau13-case-58",
    "manufacturerId": "bureau13",
    "seriesNumber": 58,
    "nameKana": "ケース-58",
    "nameLatin": "CASE-58",
    "archetypeId": "lateGrowth",
    "concept": "第58追加要求仕様を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {
      "ai": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "bureau13-case-59",
    "manufacturerId": "bureau13",
    "seriesNumber": 59,
    "nameKana": "ケース-59",
    "nameLatin": "CASE-59",
    "archetypeId": "overengineered",
    "concept": "第59追加要求仕様を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "bureau13-case-60",
    "manufacturerId": "bureau13",
    "seriesNumber": 60,
    "nameKana": "ケース-60",
    "nameLatin": "CASE-60",
    "archetypeId": "apex",
    "concept": "第60追加要求仕様を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。第十三技術局はここで「思想ではなく要求仕様だけを絶対条件とし、案件ごとに別物を作る」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "mobility": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "eidolon-dusk",
    "manufacturerId": "eidolon",
    "seriesNumber": 41,
    "nameKana": "ダスク",
    "nameLatin": "DUSK",
    "archetypeId": "longSeller",
    "concept": "昼夜の境界を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "eidolon-haze",
    "manufacturerId": "eidolon",
    "seriesNumber": 42,
    "nameKana": "ヘイズ",
    "nameLatin": "HAZE",
    "archetypeId": "flagship",
    "concept": "輪郭を曖昧にする霞を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "sensor": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "eidolon-shimmer",
    "manufacturerId": "eidolon",
    "seriesNumber": 43,
    "nameKana": "シマー",
    "nameLatin": "SHIMMER",
    "archetypeId": "budget",
    "concept": "揺らぐ像を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "eidolon-parallax",
    "manufacturerId": "eidolon",
    "seriesNumber": 44,
    "nameKana": "パララックス",
    "nameLatin": "PARALLAX",
    "archetypeId": "glassCannon",
    "concept": "視点で変わる位置を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "eidolon-dejavu",
    "manufacturerId": "eidolon",
    "seriesNumber": 45,
    "nameKana": "デジャヴ",
    "nameLatin": "DEJAVU",
    "archetypeId": "growthProject",
    "concept": "既視感を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {
      "mobility": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "lance": 5
    },
    "weaponGrowthAdjustments": {
      "lance": 0.055
    },
    "preferredWeapons": [
      "lance"
    ],
    "avoidedWeapons": [
      "beamCannon"
    ],
    "weaponDoctrine": "ランスを中心に機体側から兵装へ合わせ込む。ビーム砲は設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "eidolon-amnesia",
    "manufacturerId": "eidolon",
    "seriesNumber": 46,
    "nameKana": "アムネジア",
    "nameLatin": "AMNESIA",
    "archetypeId": "retro",
    "concept": "記憶欠落を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "eidolon-lacuna",
    "manufacturerId": "eidolon",
    "seriesNumber": 47,
    "nameKana": "ラクーナ",
    "nameLatin": "LACUNA",
    "archetypeId": "counterDesign",
    "concept": "空白を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "eidolon-palimpsest",
    "manufacturerId": "eidolon",
    "seriesNumber": 48,
    "nameKana": "パリンプセスト",
    "nameLatin": "PALIMPSEST",
    "archetypeId": "weaponSavant",
    "concept": "上書きされた記録を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamCannon": 5
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.055
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "ビーム砲を中心に機体側から兵装へ合わせ込む。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "eidolon-dreamer",
    "manufacturerId": "eidolon",
    "seriesNumber": 49,
    "nameKana": "ドリーマー",
    "nameLatin": "DREAMER",
    "archetypeId": "aiAnomaly",
    "concept": "夢を見る主体を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "eidolon-somnambule",
    "manufacturerId": "eidolon",
    "seriesNumber": 50,
    "nameKana": "ソムナンビュール",
    "nameLatin": "SOMNAMBULE",
    "archetypeId": "lottery",
    "concept": "夢遊者を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "eidolon-morpheus",
    "manufacturerId": "eidolon",
    "seriesNumber": 51,
    "nameKana": "モルフェウス",
    "nameLatin": "MORPHEUS",
    "archetypeId": "reliable",
    "concept": "夢の神格を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "output": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "eidolon-fatamorgana",
    "manufacturerId": "eidolon",
    "seriesNumber": 52,
    "nameKana": "ファタモルガナ",
    "nameLatin": "FATAMORGANA",
    "archetypeId": "ultraMobile",
    "concept": "複雑な蜃気楼を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "eidolon-echoes",
    "manufacturerId": "eidolon",
    "seriesNumber": 53,
    "nameKana": "エコーズ",
    "nameLatin": "ECHOES",
    "archetypeId": "fortress",
    "concept": "重なる残響を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "eidolon-retrograde",
    "manufacturerId": "eidolon",
    "seriesNumber": 54,
    "nameKana": "レトログレード",
    "nameLatin": "RETROGRADE",
    "archetypeId": "dataGlass",
    "concept": "逆行を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "beamCannon": 5
    },
    "weaponGrowthAdjustments": {
      "beamCannon": 0.055
    },
    "preferredWeapons": [
      "beamCannon"
    ],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "ビーム砲を中心に機体側から兵装へ合わせ込む。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "eidolon-null",
    "manufacturerId": "eidolon",
    "seriesNumber": 55,
    "nameKana": "ヌル",
    "nameLatin": "NULL",
    "archetypeId": "adaptive",
    "concept": "空値を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "emp": 5
    },
    "weaponGrowthAdjustments": {
      "emp": 0.055
    },
    "preferredWeapons": [
      "emp"
    ],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "EMPを中心に機体側から兵装へ合わせ込む。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "eidolon-astral",
    "manufacturerId": "eidolon",
    "seriesNumber": 56,
    "nameKana": "アストラル",
    "nameLatin": "ASTRAL",
    "archetypeId": "volatileExperimental",
    "concept": "非実体の星界を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "blade": 5
    },
    "weaponGrowthAdjustments": {
      "blade": 0.055
    },
    "preferredWeapons": [
      "blade"
    ],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "ブレードを中心に機体側から兵装へ合わせ込む。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "eidolon-ethereal",
    "manufacturerId": "eidolon",
    "seriesNumber": 57,
    "nameKana": "エセリアル",
    "nameLatin": "ETHEREAL",
    "archetypeId": "massProduction",
    "concept": "希薄で非現実的を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "eidolon-memento",
    "manufacturerId": "eidolon",
    "seriesNumber": 58,
    "nameKana": "メメント",
    "nameLatin": "MEMENTO",
    "archetypeId": "lateGrowth",
    "concept": "記憶の痕跡を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {
      "output": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "rifle": 5
    },
    "weaponGrowthAdjustments": {
      "rifle": 0.055
    },
    "preferredWeapons": [
      "rifle"
    ],
    "avoidedWeapons": [
      "emp"
    ],
    "weaponDoctrine": "ライフルを中心に機体側から兵装へ合わせ込む。EMPは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "eidolon-sleepwalker",
    "manufacturerId": "eidolon",
    "seriesNumber": 59,
    "nameKana": "スリープウォーカー",
    "nameLatin": "SLEEPWALKER",
    "archetypeId": "overengineered",
    "concept": "半覚醒の行動者を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "cannon": 5
    },
    "weaponGrowthAdjustments": {
      "cannon": 0.055
    },
    "preferredWeapons": [
      "cannon"
    ],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "キャノンを中心に機体側から兵装へ合わせ込む。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "eidolon-aftersight",
    "manufacturerId": "eidolon",
    "seriesNumber": 60,
    "nameKana": "アフターサイト",
    "nameLatin": "AFTERSIGHT",
    "archetypeId": "apex",
    "concept": "見た後に残る像を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。エイドロン研究所はここで「個体差を欠陥ではなく可能性として残し、同型機の差そのものを研究対象にする」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "control": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "logos-hypothesis",
    "manufacturerId": "logos",
    "seriesNumber": 41,
    "nameKana": "ヒュポテシス",
    "nameLatin": "HYPOTHESIS",
    "archetypeId": "longSeller",
    "concept": "仮説を名称モチーフにした主力量産・ロングセラー系列。長期運用で欠点を潰した定番系列。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第21系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "主力量産・ロングセラー",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 21,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "lance"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ランスは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "logos-antithesis",
    "manufacturerId": "logos",
    "seriesNumber": 42,
    "nameKana": "アンチテシス",
    "nameLatin": "ANTITHESIS",
    "archetypeId": "flagship",
    "concept": "反定立を名称モチーフにしたフラッグシップ系列。企業の看板として全体性能を高水準にまとめる。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第22系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "フラッグシップ",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 22,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "ai": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "logos-synthesis",
    "manufacturerId": "logos",
    "seriesNumber": 43,
    "nameKana": "シンテシス",
    "nameLatin": "SYNTHESIS",
    "archetypeId": "budget",
    "concept": "統合を名称モチーフにした廉価量産系列。部品点数と製造工数を削り、必要性能へ集中する。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第23系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "廉価量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 23,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "rifle"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ライフルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "logos-causa",
    "manufacturerId": "logos",
    "seriesNumber": 44,
    "nameKana": "カウサ",
    "nameLatin": "CAUSA",
    "archetypeId": "glassCannon",
    "concept": "原因を名称モチーフにした一点突破系列。一つの勝ち筋だけを極端に伸ばす。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第24系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "一点突破",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 24,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "logos-forma",
    "manufacturerId": "logos",
    "seriesNumber": 45,
    "nameKana": "フォルマ",
    "nameLatin": "FORMA",
    "archetypeId": "growthProject",
    "concept": "形相を名称モチーフにした育成前提系列。初期完成度を抑え、調整と学習で伸びる余地を残す。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第25系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "育成前提",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 25,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {
      "control": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "machineGun": 5
    },
    "weaponGrowthAdjustments": {
      "machineGun": 0.055
    },
    "preferredWeapons": [
      "machineGun"
    ],
    "avoidedWeapons": [
      "drone"
    ],
    "weaponDoctrine": "マシンガンを中心に機体側から兵装へ合わせ込む。ドローンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "logos-substantia",
    "manufacturerId": "logos",
    "seriesNumber": 46,
    "nameKana": "スブスタンティア",
    "nameLatin": "SUBSTANTIA",
    "archetypeId": "retro",
    "concept": "実体を名称モチーフにした復刻・旧思想再解釈系列。旧世代の単純な設計原理を現代技術で再構成する。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第26系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "復刻・旧思想再解釈",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 26,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "logos-potentia",
    "manufacturerId": "logos",
    "seriesNumber": 47,
    "nameKana": "ポテンティア",
    "nameLatin": "POTENTIA",
    "archetypeId": "counterDesign",
    "concept": "可能態を名称モチーフにした他社対抗系列。想定する競合構成への対策を最優先する。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第27系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "他社対抗",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 27,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "logos-actus",
    "manufacturerId": "logos",
    "seriesNumber": 48,
    "nameKana": "アクトゥス",
    "nameLatin": "ACTUS",
    "archetypeId": "weaponSavant",
    "concept": "現実態を名称モチーフにした兵装専用級系列。特定兵装へ機体全体を合わせ込む。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第28系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "兵装専用級",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 28,
    "individualityTrait": "weaponSwing",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "drone": 5
    },
    "weaponGrowthAdjustments": {
      "drone": 0.055
    },
    "preferredWeapons": [
      "drone"
    ],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "ドローンを中心に機体側から兵装へ合わせ込む。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "logos-universal",
    "manufacturerId": "logos",
    "seriesNumber": 49,
    "nameKana": "ウニヴェルサル",
    "nameLatin": "UNIVERSAL",
    "archetypeId": "aiAnomaly",
    "concept": "普遍を名称モチーフにしたAI偏重異端系列。判断系だけを異常に重視し、機械側を従わせる。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第29系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "AI偏重異端",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 29,
    "individualityTrait": "reliabilitySwing",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "logos-particular",
    "manufacturerId": "logos",
    "seriesNumber": 50,
    "nameKana": "パルティクラル",
    "nameLatin": "PARTICULAR",
    "archetypeId": "lottery",
    "concept": "個物を名称モチーフにした高性能・大個体差系列。当たり個体の突出を許容し、平均値では測れない系列。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第30系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "高性能・大個体差",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 30,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "logos-necessitas",
    "manufacturerId": "logos",
    "seriesNumber": 51,
    "nameKana": "ネケシタス",
    "nameLatin": "NECESSITAS",
    "archetypeId": "reliable",
    "concept": "必然を名称モチーフにした均質量産系列。ロット差を極端に抑え、同じ挙動を再現する。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第31系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "均質量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 31,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "mobility": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "blade"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "logos-contingens",
    "manufacturerId": "logos",
    "seriesNumber": 52,
    "nameKana": "コンティンゲンス",
    "nameLatin": "CONTINGENS",
    "archetypeId": "ultraMobile",
    "concept": "偶然性を名称モチーフにした超機動系列。防御余力を削り、運動性能へ極端に配分する。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第32系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "超機動",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 32,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "logos-identitas",
    "manufacturerId": "logos",
    "seriesNumber": 53,
    "nameKana": "イデンティタス",
    "nameLatin": "IDENTITAS",
    "archetypeId": "fortress",
    "concept": "同一性を名称モチーフにした要塞・継戦系列。停止しないことを最優先に余裕と耐性を積む。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第33系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "要塞・継戦",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 33,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "engine": 3,
      "ai": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 3,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "logos-differentia",
    "manufacturerId": "logos",
    "seriesNumber": 54,
    "nameKana": "ディフェレンティア",
    "nameLatin": "DIFFERENTIA",
    "archetypeId": "dataGlass",
    "concept": "差異を名称モチーフにした情報一点型系列。情報優位を作る代わりに物理余裕を切り詰める。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第34系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "情報一点型",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 34,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "compute": 3,
      "output": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": -2,
    "weaponAdjustments": {
      "drone": 5
    },
    "weaponGrowthAdjustments": {
      "drone": 0.055
    },
    "preferredWeapons": [
      "drone"
    ],
    "avoidedWeapons": [
      "machineGun"
    ],
    "weaponDoctrine": "ドローンを中心に機体側から兵装へ合わせ込む。マシンガンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "logos-relatio",
    "manufacturerId": "logos",
    "seriesNumber": 55,
    "nameKana": "レラティオ",
    "nameLatin": "RELATIO",
    "archetypeId": "adaptive",
    "concept": "関係を名称モチーフにした変化対応系列。相手や環境の変化へ追従できる余白を残す。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第35系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "変化対応",
    "productionTier": "standard",
    "availabilityWeight": 1.0,
    "predecessorNumber": 35,
    "individualityTrait": "stableGrowth",
    "groupAdjustments": {
      "sensor": 3,
      "mobility": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "hammer": 5
    },
    "weaponGrowthAdjustments": {
      "hammer": 0.055
    },
    "preferredWeapons": [
      "hammer"
    ],
    "avoidedWeapons": [
      "laser"
    ],
    "weaponDoctrine": "ハンマーを中心に機体側から兵装へ合わせ込む。レーザーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "logos-quantitas",
    "manufacturerId": "logos",
    "seriesNumber": 56,
    "nameKana": "クアンティタス",
    "nameLatin": "QUANTITAS",
    "archetypeId": "volatileExperimental",
    "concept": "量を名称モチーフにした挑戦的試作系列。失敗率を承知で通常設計では得られない突出を狙う。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第36系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "挑戦的試作",
    "productionTier": "experimental",
    "availabilityWeight": 0.3,
    "predecessorNumber": 36,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "ai": 3,
      "control": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": -4,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "beamBlade": 5
    },
    "weaponGrowthAdjustments": {
      "beamBlade": 0.055
    },
    "preferredWeapons": [
      "beamBlade"
    ],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "ビームブレードを中心に機体側から兵装へ合わせ込む。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "logos-qualitas",
    "manufacturerId": "logos",
    "seriesNumber": 57,
    "nameKana": "クアリタス",
    "nameLatin": "QUALITAS",
    "archetypeId": "massProduction",
    "concept": "質を名称モチーフにした輸出・広域量産系列。環境と運用者が変わっても扱える標準化を優先する。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第37系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "輸出・広域量産",
    "productionTier": "mass",
    "availabilityWeight": 1.65,
    "predecessorNumber": 37,
    "individualityTrait": "uniform",
    "groupAdjustments": {
      "output": 3,
      "engine": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 3,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "cannon"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。キャノンは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 0.8
  },
  {
    "id": "logos-motus",
    "manufacturerId": "logos",
    "seriesNumber": 58,
    "nameKana": "モトゥス",
    "nameLatin": "MOTUS",
    "archetypeId": "lateGrowth",
    "concept": "運動を名称モチーフにした晩成改修系列。配備後の改修と学習で完成へ近づく。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第38系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "晩成改修",
    "productionTier": "specialized",
    "availabilityWeight": 0.58,
    "predecessorNumber": 38,
    "individualityTrait": "growthSwing",
    "groupAdjustments": {
      "mobility": 3,
      "compute": -2
    },
    "growthAdjustments": {
      "mobility": 0.035
    },
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "laser": 5
    },
    "weaponGrowthAdjustments": {
      "laser": 0.055
    },
    "preferredWeapons": [
      "laser"
    ],
    "avoidedWeapons": [
      "hammer"
    ],
    "weaponDoctrine": "レーザーを中心に機体側から兵装へ合わせ込む。ハンマーは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.0
  },
  {
    "id": "logos-tempus",
    "manufacturerId": "logos",
    "seriesNumber": 59,
    "nameKana": "テンプス",
    "nameLatin": "TEMPUS",
    "archetypeId": "overengineered",
    "concept": "時間を名称モチーフにした社内異端・過剰設計系列。企業思想を過剰解釈し、普通なら削る余白まで残す。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第39系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "社内異端・過剰設計",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 39,
    "individualityTrait": "statSwing",
    "groupAdjustments": {
      "control": 3,
      "sensor": -2
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {
      "missile": 5
    },
    "weaponGrowthAdjustments": {
      "missile": 0.055
    },
    "preferredWeapons": [
      "missile"
    ],
    "avoidedWeapons": [
      "beamBlade"
    ],
    "weaponDoctrine": "ミサイルを中心に機体側から兵装へ合わせ込む。ビームブレードは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  },
  {
    "id": "logos-spatium",
    "manufacturerId": "logos",
    "seriesNumber": 60,
    "nameKana": "スパティウム",
    "nameLatin": "SPATIUM",
    "archetypeId": "apex",
    "concept": "空間を名称モチーフにした限定最上位系列。採算を無視して象徴性と最高到達点を追う。LOGOSはここで「目的も組織も不明なまま、異なる機体に共通する奇妙な法則だけを残す」という企業思想を、従来とは少し違う方向から反映している。第40系列の設計資産を引き継ぐ三代目にあたり、単なる性能向上ではなく役割の再定義を狙った。",
    "marketPosition": "限定最上位",
    "productionTier": "rare",
    "availabilityWeight": 0.16,
    "predecessorNumber": 40,
    "individualityTrait": "jackpot",
    "groupAdjustments": {
      "engine": 3
    },
    "growthAdjustments": {},
    "reliabilityAdjustment": 0,
    "resistanceAdjustment": 0,
    "weaponAdjustments": {},
    "weaponGrowthAdjustments": {},
    "preferredWeapons": [],
    "avoidedWeapons": [
      "missile"
    ],
    "weaponDoctrine": "推奨兵装を固定せず、運用側の構成に合わせる。ミサイルは設計上の優先度が低く、適性と成長が伸びにくい。",
    "statVarianceMultiplier": 1.0,
    "growthVarianceMultiplier": 1.0,
    "annualVolatility": 1.25
  }
];

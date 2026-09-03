export const MANUFACTURERS = [
  {
    "id": "kirishima",
    "name": "霧島重工",
    "originalName": "KIRISHIMA HEAVY INDUSTRIES",
    "region": "jp",
    "theme": "山",
    "philosophy": "要求された仕事を、要求以上の水準で完遂する。用途を明確に定め、実機で再現できる完成度を重視する総合重工。",
    "profile": {
      "groupBias": {
        "output": 2,
        "mobility": 0,
        "control": 2,
        "engine": 3,
        "compute": 0,
        "sensor": 0,
        "ai": 0
      },
      "growthBias": {
        "output": 0.01,
        "mobility": 0,
        "control": 0.02,
        "engine": 0.02,
        "compute": 0,
        "sensor": 0,
        "ai": 0
      },
      "reliabilityBias": 5,
      "resistanceBias": 2,
      "statVariance": 0.9,
      "growthVariance": 0.92,
      "reliabilityVariance": 0.85,
      "annualSensitivity": 0.9,
      "seriesIntensity": 0.95,
      "weaponBias": {
        "hammer": 2,
        "cannon": 2,
        "rifle": 1,
        "beamCannon": 1
      },
      "traitWeights": {
        "standard": 86,
        "promising": 9,
        "lateBloom": 4,
        "eccentric": 1
      }
    }
  },
  {
    "id": "mizuho",
    "name": "瑞穂産業",
    "originalName": "MIZUHO INDUSTRIES",
    "region": "jp",
    "theme": "花",
    "philosophy": "機械は使われて初めて完成する。運用データと現場の要望を世代更新へ素早く反映する総合メーカー。",
    "profile": {
      "groupBias": {
        "output": 0,
        "mobility": 1,
        "control": 1,
        "engine": 1,
        "compute": 1,
        "sensor": 1,
        "ai": 1
      },
      "growthBias": {
        "output": 0.01,
        "mobility": 0.01,
        "control": 0.01,
        "engine": 0.01,
        "compute": 0.01,
        "sensor": 0.01,
        "ai": 0.01
      },
      "reliabilityBias": 3,
      "resistanceBias": 1,
      "statVariance": 0.95,
      "growthVariance": 0.92,
      "reliabilityVariance": 0.9,
      "annualSensitivity": 1.2,
      "seriesIntensity": 0.9,
      "weaponBias": {},
      "traitWeights": {
        "standard": 82,
        "promising": 11,
        "lateBloom": 6,
        "eccentric": 1
      }
    }
  },
  {
    "id": "gogaku",
    "name": "剛岳工廠",
    "originalName": "GOGAKU ARSENAL",
    "region": "jp",
    "theme": "鉱石",
    "philosophy": "余裕は性能である。必要値ぎりぎりではなく、構造・出力・熱設計に余裕を残す過剰設計を是とする工廠。",
    "profile": {
      "groupBias": {
        "output": 6,
        "mobility": -4,
        "control": 2,
        "engine": 5,
        "compute": -2,
        "sensor": -2,
        "ai": -1
      },
      "growthBias": {
        "output": 0.04,
        "mobility": -0.02,
        "control": 0.01,
        "engine": 0.04,
        "compute": -0.01,
        "sensor": -0.01,
        "ai": 0
      },
      "reliabilityBias": 4,
      "resistanceBias": 5,
      "statVariance": 1.0,
      "growthVariance": 1.0,
      "reliabilityVariance": 0.95,
      "annualSensitivity": 0.8,
      "seriesIntensity": 1.05,
      "weaponBias": {
        "hammer": 6,
        "cannon": 6,
        "beamCannon": 4,
        "missile": 3,
        "lance": 2
      },
      "traitWeights": {
        "standard": 82,
        "promising": 9,
        "lateBloom": 6,
        "eccentric": 3
      }
    }
  },
  {
    "id": "yashima",
    "name": "八洲重機",
    "originalName": "YASHIMA HEAVY MACHINERY",
    "region": "jp",
    "theme": "気象・自然現象",
    "philosophy": "条件が変わっても仕事を続けられる機械を良しとする。環境変化や想定外に対する余力を重視する。",
    "profile": {
      "groupBias": {
        "output": 1,
        "mobility": 0,
        "control": 1,
        "engine": 3,
        "compute": 0,
        "sensor": 2,
        "ai": 2
      },
      "growthBias": {
        "output": 0,
        "mobility": 0,
        "control": 0.01,
        "engine": 0.02,
        "compute": 0,
        "sensor": 0.01,
        "ai": 0.01
      },
      "reliabilityBias": 5,
      "resistanceBias": 6,
      "statVariance": 0.88,
      "growthVariance": 0.9,
      "reliabilityVariance": 0.8,
      "annualSensitivity": 0.85,
      "seriesIntensity": 0.9,
      "weaponBias": {
        "missile": 2,
        "drone": 2,
        "rifle": 1,
        "machineGun": 1
      },
      "traitWeights": {
        "standard": 88,
        "promising": 7,
        "lateBloom": 4,
        "eccentric": 1
      }
    }
  },
  {
    "id": "hokushin",
    "name": "北辰精機",
    "originalName": "HOKUSHIN PRECISION",
    "region": "jp",
    "theme": "天体",
    "philosophy": "誤差には必ず原因がある。設計値と実測値の差を数値化し、予測できる精密さを最優先する。",
    "profile": {
      "groupBias": {
        "output": -2,
        "mobility": 1,
        "control": 6,
        "engine": 0,
        "compute": 4,
        "sensor": 5,
        "ai": 1
      },
      "growthBias": {
        "output": -0.01,
        "mobility": 0,
        "control": 0.04,
        "engine": 0,
        "compute": 0.03,
        "sensor": 0.04,
        "ai": 0.01
      },
      "reliabilityBias": 8,
      "resistanceBias": 0,
      "statVariance": 0.75,
      "growthVariance": 0.78,
      "reliabilityVariance": 0.65,
      "annualSensitivity": 0.75,
      "seriesIntensity": 0.95,
      "weaponBias": {
        "rifle": 5,
        "laser": 5,
        "beamCannon": 3,
        "missile": 2,
        "emp": 2
      },
      "traitWeights": {
        "standard": 91,
        "promising": 6,
        "lateBloom": 3,
        "eccentric": 0
      }
    }
  },
  {
    "id": "shinonome",
    "name": "東雲電子技研",
    "originalName": "SHINONOME ELECTRONICS LAB",
    "region": "jp",
    "theme": "色",
    "philosophy": "情報の扱い方が変われば同じ機体でも別の機械になる。電子制御・センサー・AIまでを一体設計する。",
    "profile": {
      "groupBias": {
        "output": -4,
        "mobility": -1,
        "control": 2,
        "engine": -1,
        "compute": 7,
        "sensor": 7,
        "ai": 6
      },
      "growthBias": {
        "output": -0.02,
        "mobility": 0,
        "control": 0.01,
        "engine": 0,
        "compute": 0.05,
        "sensor": 0.05,
        "ai": 0.04
      },
      "reliabilityBias": 2,
      "resistanceBias": -1,
      "statVariance": 0.95,
      "growthVariance": 1.0,
      "reliabilityVariance": 0.95,
      "annualSensitivity": 1.15,
      "seriesIntensity": 1.05,
      "weaponBias": {
        "laser": 6,
        "beamCannon": 4,
        "emp": 7,
        "drone": 6,
        "missile": 4
      },
      "traitWeights": {
        "standard": 80,
        "promising": 11,
        "lateBloom": 5,
        "eccentric": 4
      }
    }
  },
  {
    "id": "amagi",
    "name": "天城機工",
    "originalName": "AMAGI MACHINE WORKS",
    "region": "jp",
    "theme": "動物",
    "philosophy": "機械の動きには性格がある。加減速、姿勢遷移、応答の質をシリーズごとの個性として設計する。",
    "profile": {
      "groupBias": {
        "output": -1,
        "mobility": 7,
        "control": 5,
        "engine": -1,
        "compute": 0,
        "sensor": 1,
        "ai": 1
      },
      "growthBias": {
        "output": 0,
        "mobility": 0.05,
        "control": 0.04,
        "engine": 0,
        "compute": 0,
        "sensor": 0.01,
        "ai": 0.01
      },
      "reliabilityBias": 1,
      "resistanceBias": -1,
      "statVariance": 1.0,
      "growthVariance": 1.0,
      "reliabilityVariance": 1.0,
      "annualSensitivity": 1.0,
      "seriesIntensity": 1.05,
      "weaponBias": {
        "blade": 6,
        "lance": 5,
        "beamBlade": 5,
        "machineGun": 2
      },
      "traitWeights": {
        "standard": 80,
        "promising": 12,
        "lateBloom": 5,
        "eccentric": 3
      }
    }
  },
  {
    "id": "kamishiro",
    "name": "神代技研",
    "originalName": "KAMISHIRO ADVANCED LAB",
    "region": "jp",
    "theme": "神話",
    "philosophy": "現在の常識は過去の成功例に過ぎない。業界標準を疑い、新方式を実機へ持ち込む研究開発型企業。",
    "profile": {
      "groupBias": {
        "output": 1,
        "mobility": 1,
        "control": 0,
        "engine": -1,
        "compute": 3,
        "sensor": 1,
        "ai": 3
      },
      "growthBias": {
        "output": 0.02,
        "mobility": 0.02,
        "control": 0.01,
        "engine": 0,
        "compute": 0.03,
        "sensor": 0.01,
        "ai": 0.03
      },
      "reliabilityBias": -5,
      "resistanceBias": 0,
      "statVariance": 1.22,
      "growthVariance": 1.25,
      "reliabilityVariance": 1.25,
      "annualSensitivity": 1.35,
      "seriesIntensity": 1.15,
      "weaponBias": {
        "beamBlade": 3,
        "beamCannon": 4,
        "emp": 4,
        "drone": 4
      },
      "traitWeights": {
        "standard": 66,
        "promising": 14,
        "lateBloom": 8,
        "eccentric": 12
      }
    }
  },
  {
    "id": "lancaster",
    "name": "ランカスター・ダイナミクス",
    "originalName": "Lancaster Dynamics",
    "region": "overseas",
    "theme": "花",
    "philosophy": "性能は商品であり、選ばれなければ意味がない。用途と顧客層を明確化し、幅広い市場へ製品を出す。",
    "profile": {
      "groupBias": {
        "output": 1,
        "mobility": 1,
        "control": 1,
        "engine": 1,
        "compute": 1,
        "sensor": 1,
        "ai": 1
      },
      "growthBias": {
        "output": 0.01,
        "mobility": 0.01,
        "control": 0.01,
        "engine": 0.01,
        "compute": 0.01,
        "sensor": 0.01,
        "ai": 0.01
      },
      "reliabilityBias": 3,
      "resistanceBias": 1,
      "statVariance": 0.95,
      "growthVariance": 0.95,
      "reliabilityVariance": 0.9,
      "annualSensitivity": 1.15,
      "seriesIntensity": 0.95,
      "weaponBias": {},
      "traitWeights": {
        "standard": 83,
        "promising": 10,
        "lateBloom": 5,
        "eccentric": 2
      }
    }
  },
  {
    "id": "steinwald",
    "name": "シュタインヴァルト・インダストリーズ",
    "originalName": "Steinwald Industries",
    "region": "overseas",
    "theme": "山",
    "philosophy": "構造が正しければ性能は後からついてくる。機械構造・重量配分・機関配置を先に成立させる古典的工学思想。",
    "profile": {
      "groupBias": {
        "output": 4,
        "mobility": -3,
        "control": 4,
        "engine": 5,
        "compute": -2,
        "sensor": -1,
        "ai": -1
      },
      "growthBias": {
        "output": 0.02,
        "mobility": -0.01,
        "control": 0.03,
        "engine": 0.04,
        "compute": 0,
        "sensor": 0,
        "ai": 0
      },
      "reliabilityBias": 6,
      "resistanceBias": 5,
      "statVariance": 0.82,
      "growthVariance": 0.85,
      "reliabilityVariance": 0.75,
      "annualSensitivity": 0.7,
      "seriesIntensity": 1.0,
      "weaponBias": {
        "hammer": 4,
        "lance": 3,
        "cannon": 6,
        "rifle": 2
      },
      "traitWeights": {
        "standard": 89,
        "promising": 7,
        "lateBloom": 3,
        "eccentric": 1
      }
    }
  },
  {
    "id": "cromwell",
    "name": "クロムウェル・システムズ",
    "originalName": "Cromwell Systems",
    "region": "overseas",
    "theme": "色",
    "philosophy": "単体性能ではなく相互作用を設計する。複数の機構が互いの長所を引き出す統合設計を得意とする。",
    "profile": {
      "groupBias": {
        "output": 0,
        "mobility": 1,
        "control": 3,
        "engine": 1,
        "compute": 3,
        "sensor": 2,
        "ai": 2
      },
      "growthBias": {
        "output": 0,
        "mobility": 0.01,
        "control": 0.02,
        "engine": 0.01,
        "compute": 0.02,
        "sensor": 0.02,
        "ai": 0.02
      },
      "reliabilityBias": 3,
      "resistanceBias": 1,
      "statVariance": 0.88,
      "growthVariance": 0.88,
      "reliabilityVariance": 0.85,
      "annualSensitivity": 0.95,
      "seriesIntensity": 0.9,
      "weaponBias": {
        "rifle": 2,
        "laser": 2,
        "missile": 2,
        "drone": 2,
        "beamBlade": 1
      },
      "traitWeights": {
        "standard": 87,
        "promising": 8,
        "lateBloom": 4,
        "eccentric": 1
      }
    }
  },
  {
    "id": "rhenium",
    "name": "レニウム・ワークス",
    "originalName": "Rhenium Works",
    "region": "overseas",
    "theme": "鉱石",
    "philosophy": "大量生産できない技術にも価値はある。特殊素材・加工法・機構を製品化する高級工業メーカー。",
    "profile": {
      "groupBias": {
        "output": 2,
        "mobility": 0,
        "control": 2,
        "engine": 2,
        "compute": 1,
        "sensor": 0,
        "ai": 0
      },
      "growthBias": {
        "output": 0.02,
        "mobility": 0.01,
        "control": 0.02,
        "engine": 0.02,
        "compute": 0.01,
        "sensor": 0.01,
        "ai": 0.01
      },
      "reliabilityBias": -1,
      "resistanceBias": 3,
      "statVariance": 1.12,
      "growthVariance": 1.12,
      "reliabilityVariance": 1.1,
      "annualSensitivity": 1.0,
      "seriesIntensity": 1.15,
      "weaponBias": {
        "beamBlade": 2,
        "beamCannon": 3,
        "laser": 3,
        "cannon": 2
      },
      "traitWeights": {
        "standard": 72,
        "promising": 15,
        "lateBloom": 7,
        "eccentric": 6
      }
    }
  },
  {
    "id": "hawthorne",
    "name": "ホーソーン・ロボティクス",
    "originalName": "Hawthorne Robotics",
    "region": "overseas",
    "theme": "動物",
    "philosophy": "自律機械は命令を実行するだけの道具ではない。行動傾向そのものをシリーズ設計の中心に置く。",
    "profile": {
      "groupBias": {
        "output": -2,
        "mobility": 1,
        "control": 0,
        "engine": -1,
        "compute": 5,
        "sensor": 4,
        "ai": 8
      },
      "growthBias": {
        "output": 0,
        "mobility": 0.01,
        "control": 0.01,
        "engine": 0,
        "compute": 0.04,
        "sensor": 0.03,
        "ai": 0.06
      },
      "reliabilityBias": 1,
      "resistanceBias": 0,
      "statVariance": 1.0,
      "growthVariance": 1.05,
      "reliabilityVariance": 1.0,
      "annualSensitivity": 1.05,
      "seriesIntensity": 1.05,
      "weaponBias": {
        "drone": 7,
        "missile": 5,
        "emp": 4,
        "rifle": 2
      },
      "traitWeights": {
        "standard": 77,
        "promising": 12,
        "lateBloom": 6,
        "eccentric": 5
      }
    }
  },
  {
    "id": "arcadia",
    "name": "アルカディア・テクノロジーズ",
    "originalName": "Arcadia Technologies",
    "region": "overseas",
    "theme": "神話",
    "philosophy": "理想形を先に描き、現実をそこへ近づける。シリーズごとに明快な理想性能を設定する未来志向企業。",
    "profile": {
      "groupBias": {
        "output": 2,
        "mobility": 2,
        "control": 1,
        "engine": 0,
        "compute": 2,
        "sensor": 1,
        "ai": 2
      },
      "growthBias": {
        "output": 0.03,
        "mobility": 0.03,
        "control": 0.02,
        "engine": 0.01,
        "compute": 0.03,
        "sensor": 0.02,
        "ai": 0.03
      },
      "reliabilityBias": -4,
      "resistanceBias": 0,
      "statVariance": 1.15,
      "growthVariance": 1.18,
      "reliabilityVariance": 1.2,
      "annualSensitivity": 1.25,
      "seriesIntensity": 1.2,
      "weaponBias": {
        "beamCannon": 3,
        "laser": 3,
        "beamBlade": 3,
        "drone": 2
      },
      "traitWeights": {
        "standard": 68,
        "promising": 16,
        "lateBloom": 7,
        "eccentric": 9
      }
    }
  },
  {
    "id": "solberg",
    "name": "ソルベルグ・エンジニアリング",
    "originalName": "Solberg Engineering",
    "region": "overseas",
    "theme": "天体",
    "philosophy": "予測可能な性能こそ最高の性能である。大規模シミュレーションで性能分布まで設計する技術企業。",
    "profile": {
      "groupBias": {
        "output": -1,
        "mobility": 0,
        "control": 5,
        "engine": 1,
        "compute": 6,
        "sensor": 5,
        "ai": 2
      },
      "growthBias": {
        "output": 0,
        "mobility": 0,
        "control": 0.04,
        "engine": 0.01,
        "compute": 0.05,
        "sensor": 0.04,
        "ai": 0.02
      },
      "reliabilityBias": 8,
      "resistanceBias": 1,
      "statVariance": 0.72,
      "growthVariance": 0.75,
      "reliabilityVariance": 0.6,
      "annualSensitivity": 0.65,
      "seriesIntensity": 0.95,
      "weaponBias": {
        "rifle": 4,
        "laser": 5,
        "missile": 3,
        "beamCannon": 3,
        "emp": 2
      },
      "traitWeights": {
        "standard": 92,
        "promising": 6,
        "lateBloom": 2,
        "eccentric": 0
      }
    }
  },
  {
    "id": "grayson",
    "name": "グレイソン・マニュファクチャリング",
    "originalName": "Grayson Manufacturing",
    "region": "overseas",
    "theme": "気象・自然現象",
    "philosophy": "良い設計とは千機作っても良い設計である。大量生産時の再現性と工程安定性を最重要視する。",
    "profile": {
      "groupBias": {
        "output": 1,
        "mobility": 0,
        "control": 1,
        "engine": 2,
        "compute": 0,
        "sensor": 0,
        "ai": 0
      },
      "growthBias": {
        "output": 0,
        "mobility": 0,
        "control": 0.01,
        "engine": 0.01,
        "compute": 0,
        "sensor": 0,
        "ai": 0
      },
      "reliabilityBias": 10,
      "resistanceBias": 3,
      "statVariance": 0.68,
      "growthVariance": 0.72,
      "reliabilityVariance": 0.55,
      "annualSensitivity": 0.6,
      "seriesIntensity": 0.85,
      "weaponBias": {
        "rifle": 2,
        "machineGun": 3,
        "cannon": 2,
        "missile": 2
      },
      "traitWeights": {
        "standard": 94,
        "promising": 4,
        "lateBloom": 2,
        "eccentric": 0
      }
    }
  },
  {
    "id": "laplace",
    "name": "ラプラス機関",
    "originalName": "LAPLACE INSTITUTE",
    "region": "special",
    "theme": "特殊",
    "philosophy": "十分な情報があれば勝敗は計算できる。戦闘という現象を予測可能にするための実証機を送り出す。",
    "profile": {
      "groupBias": {
        "output": -5,
        "mobility": -2,
        "control": 2,
        "engine": -1,
        "compute": 9,
        "sensor": 8,
        "ai": 7
      },
      "growthBias": {
        "output": -0.02,
        "mobility": 0,
        "control": 0.02,
        "engine": 0,
        "compute": 0.07,
        "sensor": 0.06,
        "ai": 0.05
      },
      "reliabilityBias": 2,
      "resistanceBias": -1,
      "statVariance": 0.9,
      "growthVariance": 0.95,
      "reliabilityVariance": 0.9,
      "annualSensitivity": 1.1,
      "seriesIntensity": 1.15,
      "weaponBias": {
        "emp": 8,
        "drone": 6,
        "missile": 6,
        "laser": 4
      },
      "traitWeights": {
        "standard": 73,
        "promising": 14,
        "lateBloom": 6,
        "eccentric": 7
      }
    }
  },
  {
    "id": "bureau13",
    "name": "第十三技術局",
    "originalName": "BUREAU XIII",
    "region": "special",
    "theme": "特殊",
    "philosophy": "目的達成に不要な思想は持たない。要求仕様ごとに設計思想そのものを変えるため、組織名から性能を読めない。",
    "profile": {
      "groupBias": {
        "output": 0,
        "mobility": 0,
        "control": 0,
        "engine": 0,
        "compute": 0,
        "sensor": 0,
        "ai": 0
      },
      "growthBias": {
        "output": 0,
        "mobility": 0,
        "control": 0,
        "engine": 0,
        "compute": 0,
        "sensor": 0,
        "ai": 0
      },
      "reliabilityBias": 0,
      "resistanceBias": 0,
      "statVariance": 1.05,
      "growthVariance": 1.05,
      "reliabilityVariance": 1.05,
      "annualSensitivity": 0.85,
      "seriesIntensity": 1.25,
      "weaponBias": {},
      "traitWeights": {
        "standard": 72,
        "promising": 10,
        "lateBloom": 9,
        "eccentric": 9
      }
    }
  },
  {
    "id": "eidolon",
    "name": "エイドロン研究所",
    "originalName": "EIDOLON LABORATORY",
    "region": "special",
    "theme": "特殊",
    "philosophy": "機械の個体差は欠陥ではなく可能性である。同じ系列でも意図的に個体差を残し、未知の伸び方を観測する。",
    "profile": {
      "groupBias": {
        "output": 0,
        "mobility": 0,
        "control": 0,
        "engine": 0,
        "compute": 1,
        "sensor": 1,
        "ai": 2
      },
      "growthBias": {
        "output": 0.01,
        "mobility": 0.01,
        "control": 0.01,
        "engine": 0.01,
        "compute": 0.02,
        "sensor": 0.02,
        "ai": 0.03
      },
      "reliabilityBias": -3,
      "resistanceBias": 0,
      "statVariance": 1.55,
      "growthVariance": 1.5,
      "reliabilityVariance": 1.5,
      "annualSensitivity": 1.15,
      "seriesIntensity": 1.05,
      "weaponBias": {},
      "traitWeights": {
        "standard": 48,
        "promising": 17,
        "lateBloom": 15,
        "eccentric": 20
      }
    }
  },
  {
    "id": "logos",
    "name": "LOGOS",
    "originalName": "LOGOS",
    "region": "special",
    "theme": "特殊",
    "philosophy": "組織思想は非公開。無関係に見える機体群に共通する設計法則だけが確認されている。",
    "profile": {
      "groupBias": {
        "output": 1,
        "mobility": 1,
        "control": 1,
        "engine": 1,
        "compute": 1,
        "sensor": 1,
        "ai": 1
      },
      "growthBias": {
        "output": 0.01,
        "mobility": 0.01,
        "control": 0.01,
        "engine": 0.01,
        "compute": 0.01,
        "sensor": 0.01,
        "ai": 0.01
      },
      "reliabilityBias": -1,
      "resistanceBias": 1,
      "statVariance": 1.25,
      "growthVariance": 1.25,
      "reliabilityVariance": 1.25,
      "annualSensitivity": 1.45,
      "seriesIntensity": 1.2,
      "weaponBias": {},
      "traitWeights": {
        "standard": 58,
        "promising": 16,
        "lateBloom": 10,
        "eccentric": 16
      }
    }
  }
];

export const MANUFACTURER_MAP = new Map(MANUFACTURERS.map((item) => [item.id, item]));

export function manufacturerProfile(manufacturerId) {
  return MANUFACTURER_MAP.get(manufacturerId)?.profile ?? null;
}

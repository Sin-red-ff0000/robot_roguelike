export const FACILITY_DEFINITIONS = {
  analysis: {
    id: 'analysis',
    name: '成長解析設備',
    maxLevel: 4,
    levels: [
      { level: 0, description: '成長倍率は原則不明。機体の現在値は確認できるが、どの能力が将来伸びやすいかは実際に育成しながら推測する段階。' },
      { level: 1, description: '出力・駆動・制御など7グループ単位の成長傾向を表示。個別項目までは読めないが、機体をどの方向へ育てるべきか大まかに判断できる。' },
      { level: 2, description: '41の基礎能力と兵装能力について、個別項目を「伸びにくい / 普通 / 伸びやすい」で表示。系列平均ではなく、その個体自身の育成適性を見分けやすくなる。' },
      { level: 3, description: '個別項目の成長適性を5段階へ細分化。似た初期能力の機体同士でも、3年間の伸びしろを比較して育成対象を選びやすくなる。' },
      { level: 4, description: '内部成長倍率の実数値まで開示。シリーズ成長曲線など別枠の補正と組み合わせ、年度ごとの実効的な伸び方を最も精密に予測できる。' },
    ],
  },
  training: {
    id: 'training',
    name: '統合訓練設備',
    maxLevel: 3,
    levels: [
      { level: 0, description: '毎ターン提示される全体練習は3候補。限られた選択肢から、在籍機全体に最も利益が大きい練習を選ぶ基本環境。' },
      { level: 1, description: '全体練習の候補が4つに増加。欲しい能力群の練習を引ける確率が上がり、複数機の育成方針を両立しやすくなる。' },
      { level: 2, description: '高Lv練習の出現率が上昇。候補数だけでなく一回あたりの育成効率も改善し、中盤以降の伸びを作りやすくなる。' },
      { level: 3, description: '全体練習が5候補になり、高Lv練習率もさらに上昇。狙った能力を伸ばす選択性と一回の練習価値の両方が最大になる。' },
    ],
  },
  logistics: {
    id: 'logistics',
    name: '技術物資ネットワーク',
    maxLevel: 3,
    levels: [
      { level: 0, description: '標準的なパーツ提供環境。' },
      { level: 1, description: 'パーツ提供イベントで複数個届く確率が上昇。' },
      { level: 2, description: '高レアリティのカスタムパーツが少し出やすくなる。' },
      { level: 3, description: 'イベント由来のパーツで特級以上を引きやすくなる。' },
    ],
  },
  archive: {
    id: 'archive',
    name: '戦績・設計アーカイブ',
    maxLevel: 3,
    levels: [
      { level: 0, description: '直近3機の売却履歴を閲覧。' },
      { level: 1, description: '直近8機まで売却履歴を閲覧。' },
      { level: 2, description: '直近20機まで売却履歴を閲覧。' },
      { level: 3, description: '保存された全売却履歴を閲覧可能。' },
    ],
  },
};

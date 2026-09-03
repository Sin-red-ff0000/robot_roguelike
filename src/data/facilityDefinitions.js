export const FACILITY_DEFINITIONS = {
  analysis: {
    id: 'analysis',
    name: '成長解析設備',
    maxLevel: 4,
    levels: [
      { level: 0, description: '成長倍率は原則不明。' },
      { level: 1, description: 'グループ単位の成長傾向を表示できる。' },
      { level: 2, description: '個別項目を「伸びにくい / 普通 / 伸びやすい」で表示できる。' },
      { level: 3, description: '個別項目を5段階の成長適性で表示できる。' },
      { level: 4, description: '内部成長倍率の実数値まで確認できる。' },
    ],
  },
  training: {
    id: 'training',
    name: '統合訓練設備',
    maxLevel: 3,
    levels: [
      { level: 0, description: '全体練習は3候補。' },
      { level: 1, description: '全体練習の候補が4つになる。' },
      { level: 2, description: '高Lv練習が少し出やすくなる。' },
      { level: 3, description: '全体練習の候補が5つになり、高Lv練習率もさらに上昇。' },
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

export const STAT_GROUPS = {
  output: {
    label: '出力',
    stats: ['瞬間出力', '持続出力', '出力応答', '出力効率', '過負荷出力'],
  },
  mobility: {
    label: '駆動',
    stats: ['反応速度', '加速性能', '動作速度', '駆動精度', '駆動応答', '駆動効率'],
  },
  control: {
    label: '制御',
    stats: ['姿勢制御', '重心制御', '微細制御', '装備制御', '動作同期', '負荷制御'],
  },
  engine: {
    label: '機関',
    stats: ['発電性能', '電力供給', '電力効率', '冷却性能', '熱容量', '負荷耐性'],
  },
  compute: {
    label: '演算',
    stats: ['処理速度', '並列処理', '演算精度', '処理容量', '演算効率', '情報統合'],
  },
  sensor: {
    label: 'センサー',
    stats: ['探知性能', '識別性能', '追跡性能', '測距性能', '情報精度', '情報更新速度'],
  },
  ai: {
    label: 'AI',
    stats: ['状況判断', '行動予測', '判断速度', 'リスク判断', '戦術選択', '対応判断'],
  },
};

export const RESISTANCE_STATS = ['衝撃耐性', '貫通耐性', '切断耐性', '熱耐性', '爆発耐性', '電磁耐性'];

export const GROUP_KEYS = Object.keys(STAT_GROUPS);

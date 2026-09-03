import { STAT_GROUPS } from './statDefinitions.js?v=3.0';

const VARIANTS = {
  output: [
    { suffix: '基礎出力訓練', focusStats: [] },
    { suffix: '瞬発出力試験', focusStats: ['瞬間出力', '出力応答'] },
    { suffix: '高負荷稼働試験', focusStats: ['持続出力', '過負荷出力'] },
  ],
  mobility: [
    { suffix: '駆動基礎訓練', focusStats: [] },
    { suffix: '高応答演習', focusStats: ['反応速度', '駆動応答'] },
    { suffix: '高速運動演習', focusStats: ['加速性能', '動作速度'] },
  ],
  control: [
    { suffix: '制御基礎訓練', focusStats: [] },
    { suffix: '姿勢制御演習', focusStats: ['姿勢制御', '重心制御'] },
    { suffix: '精密操作演習', focusStats: ['微細制御', '装備制御'] },
  ],
  engine: [
    { suffix: '機関基礎訓練', focusStats: [] },
    { suffix: '電力供給試験', focusStats: ['発電性能', '電力供給'] },
    { suffix: '熱管理試験', focusStats: ['冷却性能', '熱容量'] },
  ],
  compute: [
    { suffix: '演算基礎訓練', focusStats: [] },
    { suffix: '高速処理演習', focusStats: ['処理速度', '演算精度'] },
    { suffix: '並列統合演習', focusStats: ['並列処理', '情報統合'] },
  ],
  sensor: [
    { suffix: 'センサー基礎訓練', focusStats: [] },
    { suffix: '追跡測距演習', focusStats: ['追跡性能', '測距性能'] },
    { suffix: '識別更新演習', focusStats: ['識別性能', '情報更新速度'] },
  ],
  ai: [
    { suffix: 'AI基礎訓練', focusStats: [] },
    { suffix: '即応判断演習', focusStats: ['判断速度', '状況判断'] },
    { suffix: '戦術予測演習', focusStats: ['行動予測', '戦術選択'] },
  ],
};

export const TRAINING_TYPES = Object.entries(STAT_GROUPS).flatMap(([groupKey, group]) =>
  (VARIANTS[groupKey] ?? [{ suffix: `${group.label}訓練`, focusStats: [] }]).map((variant, index) => ({
    id: `training_${groupKey}_${index + 1}`,
    groupKey,
    label: variant.suffix,
    focusStats: variant.focusStats,
    focusBonus: variant.focusStats.length ? 0.28 : 0,
  })),
);

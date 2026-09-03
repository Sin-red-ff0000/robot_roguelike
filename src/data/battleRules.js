export const BASE_SYNERGY_RULES = [
  { triggerStat: '瞬間出力', weaponAxis: 'power', weaponKeys: ['hammer', 'lance', 'cannon'], multiplier: 1.15, label: '瞬間出力' },
  { triggerStat: '持続出力', weaponAxis: 'power', weaponTypes: ['エネルギー'], multiplier: 1.10, label: '持続出力' },
  { triggerStat: '重心制御', weaponAxis: 'control', weaponKeys: ['hammer', 'cannon'], multiplier: 1.12, label: '重心制御' },
  { triggerStat: '姿勢制御', weaponAxis: 'stability', multiplier: 1.10, label: '姿勢制御' },
  { triggerStat: '追跡性能', weaponAxis: 'accuracy', weaponRanges: ['遠距離', '特殊兵装'], multiplier: 1.12, label: '追跡性能' },
  { triggerStat: '測距性能', weaponAxis: 'accuracy', weaponRanges: ['遠距離'], multiplier: 1.10, label: '測距性能' },
  { triggerStat: '演算精度', weaponAxis: 'accuracy', multiplier: 1.08, label: '演算精度' },
  { triggerStat: '並列処理', weaponAxis: 'efficiency', weaponKeys: ['missile', 'drone'], multiplier: 1.15, label: '並列処理' },
  { triggerStat: '情報統合', weaponAxis: 'control', weaponKeys: ['missile', 'drone', 'emp'], multiplier: 1.12, label: '情報統合' },
  { triggerStat: '判断速度', weaponAxis: 'response', multiplier: 1.08, label: '判断速度' },
  { triggerStat: '冷却性能', weaponAxis: 'stability', weaponTypes: ['エネルギー'], multiplier: 1.12, label: '冷却性能' },
  { triggerStat: '電力供給', weaponAxis: 'power', weaponTypes: ['エネルギー'], multiplier: 1.12, label: '電力供給' },
];

export const RESISTANCE_BANDS = [
  { min: 85, attackerMultiplier: 0.90, defenderMultiplier: 1.10, label: '非常に高い' },
  { min: 70, attackerMultiplier: 0.95, defenderMultiplier: 1.05, label: '高い' },
  { min: 40, attackerMultiplier: 1.00, defenderMultiplier: 1.00, label: '標準' },
  { min: 25, attackerMultiplier: 1.10, defenderMultiplier: 1.00, label: '低い' },
  { min: -Infinity, attackerMultiplier: 1.20, defenderMultiplier: 1.00, label: '非常に低い' },
];

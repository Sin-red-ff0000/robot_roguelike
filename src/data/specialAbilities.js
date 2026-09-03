export const SPECIAL_ABILITIES = {
  highResponse: { id: 'highResponse', name: '高応答○', tier: 'normal', polarity: 'positive', description: '「反応速度」または「駆動応答」が比較に選ばれた時、その項目の最終値×1.10。', tags: ['mobility', 'response'] },
  precisionControl: { id: 'precisionControl', name: '精密制御○', tier: 'normal', polarity: 'positive', description: '「駆動精度」または「微細制御」が比較に選ばれた時、その項目の最終値×1.10。', tags: ['mobility', 'control'] },
  heavyStrike: { id: 'heavyStrike', name: '重撃○', tier: 'normal', polarity: 'positive', description: 'ハンマー出力と「瞬間出力」が同時に比較へ選ばれた時、ハンマー出力×1.15。', tags: ['hammer', 'output'] },
  precisionFire: { id: 'precisionFire', name: '精密射撃○', tier: 'normal', polarity: 'positive', description: '遠距離兵装の精度系項目が選ばれた時、その項目の最終値×1.10。', tags: ['ranged', 'accuracy'] },
  thermalManagement: { id: 'thermalManagement', name: '熱管理○', tier: 'normal', polarity: 'positive', description: 'エネルギー兵装の安定性項目が選ばれた時、その項目の最終値×1.10。', tags: ['energy', 'engine'] },
  antiShock: { id: 'antiShock', name: '対衝撃○', tier: 'normal', polarity: 'positive', description: '衝撃耐性を参照する際、耐性値を+10して扱う。', tags: ['resistance', 'hammer'] },
  antiPierce: { id: 'antiPierce', name: '対貫通○', tier: 'normal', polarity: 'positive', description: '貫通耐性を参照する際、耐性値を+10して扱う。', tags: ['resistance', 'physical'] },
  antiCut: { id: 'antiCut', name: '対切断○', tier: 'normal', polarity: 'positive', description: '切断耐性を参照する際、耐性値を+10して扱う。', tags: ['resistance', 'blade'] },
  antiHeat: { id: 'antiHeat', name: '対熱○', tier: 'normal', polarity: 'positive', description: '熱耐性を参照する際、耐性値を+10して扱う。', tags: ['resistance', 'energy'] },
  antiBlast: { id: 'antiBlast', name: '対爆発○', tier: 'normal', polarity: 'positive', description: '爆発耐性を参照する際、耐性値を+10して扱う。', tags: ['resistance', 'missile'] },
  antiEM: { id: 'antiEM', name: '対電磁○', tier: 'normal', polarity: 'positive', description: '電磁耐性を参照する際、耐性値を+10して扱う。', tags: ['resistance', 'emp'] },
  adversity: { id: 'adversity', name: '逆境○', tier: 'normal', polarity: 'positive', description: '比較項目数で劣勢になった場合、最終勝率を+5%。', tags: ['result'] },
  giantKiller: { id: 'giantKiller', name: '格上○', tier: 'normal', polarity: 'positive', description: '相手の基礎総合性能が自機を上回る場合、全比較値×1.03。', tags: ['result'] },
  bigStage: { id: 'bigStage', name: '大舞台○', tier: 'normal', polarity: 'positive', description: '公式戦では全比較値×1.03。', tags: ['official'] },
  stableOperation: { id: 'stableOperation', name: '安定稼働○', tier: 'normal', polarity: 'positive', description: '信頼性による試合ごとの能力ブレを35%軽減する。', tags: ['reliability'] },
  outputTune: { id: 'outputTune', name: '高出力○', tier: 'normal', polarity: 'positive', description: '出力系項目が比較に選ばれた時、その項目の最終値×1.08。', tags: ['output'] },
  mobilityTune: { id: 'mobilityTune', name: '駆動調整○', tier: 'normal', polarity: 'positive', description: '駆動系項目が比較に選ばれた時、その項目の最終値×1.08。', tags: ['mobility'] },
  controlTune: { id: 'controlTune', name: '制御最適化○', tier: 'normal', polarity: 'positive', description: '制御系項目が比較に選ばれた時、その項目の最終値×1.08。', tags: ['control'] },
  engineTune: { id: 'engineTune', name: '機関調整○', tier: 'normal', polarity: 'positive', description: '機関系項目が比較に選ばれた時、その項目の最終値×1.08。', tags: ['engine'] },
  computeTune: { id: 'computeTune', name: '演算最適化○', tier: 'normal', polarity: 'positive', description: '演算系項目が比較に選ばれた時、その項目の最終値×1.08。', tags: ['compute'] },
  sensorTune: { id: 'sensorTune', name: '高感度センサー○', tier: 'normal', polarity: 'positive', description: 'センサー系項目が比較に選ばれた時、その項目の最終値×1.08。', tags: ['sensor'] },
  aiTune: { id: 'aiTune', name: '戦術AI○', tier: 'normal', polarity: 'positive', description: 'AI系項目が比較に選ばれた時、その項目の最終値×1.08。', tags: ['ai'] },
  weaponAdapt: { id: 'weaponAdapt', name: '兵装適応○', tier: 'normal', polarity: 'positive', description: '武器項目が比較に選ばれた時、その項目の最終値×1.05。', tags: ['weapon'] },

  moodSwing: { id: 'moodSwing', name: 'ムラっ気', tier: 'negative', polarity: 'negative', description: '信頼性による上振れ・下振れ幅が35%拡大する。', tags: ['reliability'] },
  bigStageX: { id: 'bigStageX', name: '大舞台×', tier: 'negative', polarity: 'negative', description: '公式戦では信頼性による能力ブレが25%拡大する。', tags: ['official', 'reliability'] },
  heatRunaway: { id: 'heatRunaway', name: '熱暴走傾向', tier: 'negative', polarity: 'negative', description: '冷却性能が比較に選ばれ、60未満の場合、エネルギー兵装の安定性×0.88。', tags: ['energy', 'engine'] },
  outputInstability: { id: 'outputInstability', name: '出力不安定', tier: 'negative', polarity: 'negative', description: '出力系項目が比較に選ばれた時、その項目の最終値×0.92。', tags: ['output'] },
  controlLag: { id: 'controlLag', name: '制御遅延', tier: 'negative', polarity: 'negative', description: '制御系項目が比較に選ばれた時、その項目の最終値×0.92。', tags: ['control'] },
  sensorNoise: { id: 'sensorNoise', name: 'センサーノイズ', tier: 'negative', polarity: 'negative', description: 'センサー系項目が比較に選ばれた時、その項目の最終値×0.92。', tags: ['sensor'] },
  aiHesitation: { id: 'aiHesitation', name: '判断遅滞', tier: 'negative', polarity: 'negative', description: 'AI系項目が比較に選ばれた時、その項目の最終値×0.92。', tags: ['ai'] },

  lightningSpeed: { id: 'lightningSpeed', name: '電光石火', tier: 'upper', polarity: 'positive', description: '駆動系の比較項目すべての最終値×1.12。', tags: ['mobility'] },
  hyperPrecision: { id: 'hyperPrecision', name: '超精密制御', tier: 'upper', polarity: 'positive', description: '「駆動精度」または「微細制御」が比較に選ばれた時、その項目の最終値×1.18。', tags: ['mobility', 'control'] },
  siegeBreaker: { id: 'siegeBreaker', name: '破城の一撃', tier: 'upper', polarity: 'positive', description: 'ハンマー出力と「瞬間出力」が同時選出された時、ハンマー出力×1.25。', tags: ['hammer', 'output'] },
  deadeye: { id: 'deadeye', name: '百発百中', tier: 'upper', polarity: 'positive', description: '遠距離兵装の精度系項目が選ばれた時、その項目の最終値×1.18。', tags: ['ranged', 'accuracy'] },
  thermalMaster: { id: 'thermalMaster', name: '完全熱制御', tier: 'upper', polarity: 'positive', description: 'エネルギー兵装の安定性項目が選ばれた時、その項目の最終値×1.18。', tags: ['energy', 'engine'] },
  fortressFrame: { id: 'fortressFrame', name: '鉄壁構造', tier: 'upper', polarity: 'positive', description: '衝撃耐性を参照する際、耐性値を+20して扱う。', tags: ['resistance', 'hammer'] },
  unyielding: { id: 'unyielding', name: '不屈', tier: 'upper', polarity: 'positive', description: '比較項目数で劣勢になった場合、最終勝率を+10%。', tags: ['result'] },
  upsetArtist: { id: 'upsetArtist', name: '番狂わせ', tier: 'upper', polarity: 'positive', description: '相手の基礎総合性能が自機を上回る場合、全比較値×1.06。', tags: ['result'] },
  clutchMaster: { id: 'clutchMaster', name: '勝負師', tier: 'upper', polarity: 'positive', description: '公式戦では全比較値×1.06。', tags: ['official'] },
  perfectOperation: { id: 'perfectOperation', name: '完全稼働', tier: 'upper', polarity: 'positive', description: '信頼性による試合ごとの能力ブレを75%軽減する。', tags: ['reliability'] },
  outputRelease: { id: 'outputRelease', name: '出力解放', tier: 'upper', polarity: 'positive', description: '出力系項目が比較に選ばれた時、その項目の最終値×1.15。', tags: ['output'] },
  completeDrive: { id: 'completeDrive', name: '完全駆動', tier: 'upper', polarity: 'positive', description: '駆動系項目が比較に選ばれた時、その項目の最終値×1.15。', tags: ['mobility'] },
  perfectControl: { id: 'perfectControl', name: '完全制御', tier: 'upper', polarity: 'positive', description: '制御系項目が比較に選ばれた時、その項目の最終値×1.15。', tags: ['control'] },
  coreMaster: { id: 'coreMaster', name: '機関掌握', tier: 'upper', polarity: 'positive', description: '機関系項目が比較に選ばれた時、その項目の最終値×1.15。', tags: ['engine'] },
  overclockMind: { id: 'overclockMind', name: '超演算', tier: 'upper', polarity: 'positive', description: '演算系項目が比較に選ばれた時、その項目の最終値×1.15。', tags: ['compute'] },
  omniscientSensor: { id: 'omniscientSensor', name: '全域知覚', tier: 'upper', polarity: 'positive', description: 'センサー系項目が比較に選ばれた時、その項目の最終値×1.15。', tags: ['sensor'] },
  tacticalForesight: { id: 'tacticalForesight', name: '戦術予見', tier: 'upper', polarity: 'positive', description: 'AI系項目が比較に選ばれた時、その項目の最終値×1.15。', tags: ['ai'] },
  weaponMastery: { id: 'weaponMastery', name: '武装の極致', tier: 'upper', polarity: 'positive', description: '武器項目が比較に選ばれた時、その項目の最終値×1.10。', tags: ['weapon'] },
};

export const PART_GRANTABLE_ABILITY_IDS = [
  'highResponse', 'precisionControl', 'heavyStrike', 'precisionFire', 'thermalManagement',
  'antiShock', 'antiPierce', 'antiCut', 'antiHeat', 'antiBlast', 'antiEM',
  'adversity', 'giantKiller', 'bigStage', 'stableOperation',
  'outputTune', 'mobilityTune', 'controlTune', 'engineTune', 'computeTune', 'sensorTune', 'aiTune', 'weaponAdapt',
];

export const NORMAL_POSITIVE_ABILITY_IDS = [...PART_GRANTABLE_ABILITY_IDS];
export const NEGATIVE_ABILITY_IDS = ['moodSwing', 'bigStageX', 'heatRunaway', 'outputInstability', 'controlLag', 'sensorNoise', 'aiHesitation'];
export const UPPER_ABILITY_IDS = [
  'lightningSpeed', 'hyperPrecision', 'siegeBreaker', 'deadeye', 'thermalMaster', 'fortressFrame',
  'unyielding', 'upsetArtist', 'clutchMaster', 'perfectOperation', 'outputRelease', 'completeDrive',
  'perfectControl', 'coreMaster', 'overclockMind', 'omniscientSensor', 'tacticalForesight', 'weaponMastery',
];

export const ABILITY_UPGRADES = {
  highResponse: 'lightningSpeed', precisionControl: 'hyperPrecision', heavyStrike: 'siegeBreaker',
  precisionFire: 'deadeye', thermalManagement: 'thermalMaster', antiShock: 'fortressFrame',
  adversity: 'unyielding', giantKiller: 'upsetArtist', bigStage: 'clutchMaster', stableOperation: 'perfectOperation',
  outputTune: 'outputRelease', mobilityTune: 'completeDrive', controlTune: 'perfectControl', engineTune: 'coreMaster',
  computeTune: 'overclockMind', sensorTune: 'omniscientSensor', aiTune: 'tacticalForesight', weaponAdapt: 'weaponMastery',
};

export const NEGATIVE_TO_POSITIVE = {
  moodSwing: 'stableOperation', bigStageX: 'bigStage', heatRunaway: 'thermalManagement',
  outputInstability: 'outputTune', controlLag: 'controlTune', sensorNoise: 'sensorTune', aiHesitation: 'aiTune',
};

export function abilityById(id) { return SPECIAL_ABILITIES[id] ?? null; }

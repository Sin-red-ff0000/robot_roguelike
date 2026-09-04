import { STAT_GROUPS } from './statDefinitions.js?v=4.7';

const GROUP_VARIANTS = {
  output: [['基礎出力訓練', [], '基礎', '安定'], ['瞬発出力試験', ['瞬間出力','出力応答'], '一点集中', '安定'], ['高負荷稼働試験', ['持続出力','過負荷出力'], '専門', '高振れ幅']],
  mobility: [['駆動基礎訓練', [], '基礎', '安定'], ['高応答演習', ['反応速度','駆動応答'], '一点集中', '安定'], ['高速運動演習', ['加速性能','動作速度'], '専門', '高振れ幅']],
  control: [['制御基礎訓練', [], '基礎', '安定'], ['姿勢制御演習', ['姿勢制御','重心制御'], '一点集中', '安定'], ['精密操作演習', ['微細制御','装備制御'], '専門', '安定']],
  engine: [['機関基礎訓練', [], '基礎', '安定'], ['電力供給試験', ['発電性能','電力供給'], '一点集中', '安定'], ['熱管理試験', ['冷却性能','熱容量'], '専門', '安定']],
  compute: [['演算基礎訓練', [], '基礎', '安定'], ['高速処理演習', ['処理速度','演算精度'], '一点集中', '安定'], ['並列統合演習', ['並列処理','情報統合'], '専門', '高振れ幅']],
  sensor: [['センサー基礎訓練', [], '基礎', '安定'], ['追跡測距演習', ['追跡性能','測距性能'], '一点集中', '安定'], ['識別更新演習', ['識別性能','情報更新速度'], '専門', '安定']],
  ai: [['AI基礎訓練', [], '基礎', '安定'], ['即応判断演習', ['判断速度','状況判断'], '一点集中', '安定'], ['戦術予測演習', ['行動予測','戦術選択'], '専門', '高振れ幅']],
};

const ADVANCED = {
  output: [['出力配分最適化',['持続出力','出力応答'],2,'複数項目','安定'],['限界出力試験',['瞬間出力','過負荷出力'],5,'極限','高振れ幅']],
  mobility: [['運動連携訓練',['加速性能','駆動応答'],2,'複数項目','安定'],['極限機動演習',['反応速度','動作速度'],5,'極限','高振れ幅']],
  control: [['複合姿勢制御',['姿勢制御','微細制御'],2,'複数項目','安定'],['限界精密制御',['重心制御','装備制御'],5,'極限','高振れ幅']],
  engine: [['機関負荷分散試験',['電力供給','冷却性能'],2,'複数項目','安定'],['極限熱負荷試験',['熱容量','発電性能'],5,'極限','高振れ幅']],
  compute: [['統合演算演習',['並列処理','演算精度'],2,'複数項目','安定'],['極限演算負荷',['処理速度','情報統合'],5,'極限','高振れ幅']],
  sensor: [['複合索敵演習',['追跡性能','識別性能'],2,'複数項目','安定'],['極限索敵試験',['測距性能','情報更新速度'],5,'極限','高振れ幅']],
  ai: [['戦況統合演習',['状況判断','戦術選択'],2,'複数項目','安定'],['極限戦術判断',['判断速度','行動予測'],5,'極限','高振れ幅']],
};

const base = Object.entries(STAT_GROUPS).flatMap(([groupKey, group]) =>
  (GROUP_VARIANTS[groupKey] ?? [[`${group.label}訓練`, [], '基礎', '安定']]).map((v, index) => ({
    id:`training_${groupKey}_${index+1}`, groupKey, label:v[0], focusStats:v[1], focusBonus:v[1].length?0.28:0,
    facilityLevel: index === 0 ? 0 : 1, nature:v[2], stability:v[3], rarity:index===0?'標準':'専門', source:'統合訓練設備',
  }))
);

const advanced = Object.entries(ADVANCED).flatMap(([groupKey, rows]) => rows.map((v,index)=>({
  id:`advanced_${groupKey}_${index+1}`, groupKey, label:v[0], focusStats:v[1], focusBonus:index?0.48:0.36,
  facilityLevel:v[2], nature:v[3], stability:v[4], rarity:index?'極低':'低', source:'統合訓練設備', advanced:true,
  minYear:index?2:1, risk:index?{ reliability:-1.2 }:null,
})));



const WEAPON_LAB_TRAINING = [
  { id:'weapon_lab_1', groupKey:'weaponLab', label:'兵装基礎試験', weaponsLabLevel:1, nature:'兵装連携', stability:'安定', rarity:'標準', weaponGrowth:0.72, linkedGrowth:0.28 },
  { id:'weapon_lab_2', groupKey:'weaponLab', label:'精密兵装試験', weaponsLabLevel:2, nature:'精密調整', stability:'安定', rarity:'専門', weaponGrowth:0.88, linkedGrowth:0.34 },
  { id:'weapon_lab_3', groupKey:'weaponLab', label:'実戦兵装評価', weaponsLabLevel:3, nature:'複合評価', stability:'中振れ幅', rarity:'低', weaponGrowth:1.00, linkedGrowth:0.42 },
  { id:'weapon_lab_4', groupKey:'weaponLab', label:'高負荷兵装試験', weaponsLabLevel:4, minYear:2, nature:'高負荷', stability:'高振れ幅', rarity:'低', weaponGrowth:1.18, linkedGrowth:0.48, risk:{ reliability:-1.4 } },
  { id:'weapon_lab_5', groupKey:'weaponLab', label:'兵装最適化試験', weaponsLabLevel:5, minYear:2, nature:'最適化', stability:'中振れ幅', rarity:'極低', weaponGrowth:1.08, linkedGrowth:0.55 },
].map(x=>({ ...x, facilityLevel:0, source:'兵装試験場', weaponLab:true, advanced:true }));


const SPECIAL_TRAINING = [
  { id:'special_weakness_1', groupKey:'weaknessCorrection', label:'弱点補強プログラム', facilityLevel:2, nature:'弱点補強', stability:'安定', rarity:'専門', source:'統合訓練設備', specialMode:'weakest', specialGrowth:0.72 },
  { id:'special_foundation_1', groupKey:'rookieFoundation', label:'新人基盤形成', facilityLevel:2, nature:'基礎作り', stability:'安定', rarity:'低', source:'統合訓練設備', specialMode:'rookieFoundation', specialGrowth:0.82 },
  { id:'special_strength_1', groupKey:'strengthSpecialization', label:'長所特化演習', facilityLevel:3, nature:'専門化', stability:'中振れ幅', rarity:'低', source:'統合訓練設備', specialMode:'favorite', specialGrowth:0.90 },
  { id:'special_reliability_1', groupKey:'reliabilityAdjustment', label:'安定稼働調整', facilityLevel:3, nature:'状態調整', stability:'安定', rarity:'専門', source:'統合訓練設備', specialMode:'reliability', reliabilityGain:[1,3] },
  { id:'special_final_1', groupKey:'finalTuning', label:'3年目最終調整', facilityLevel:4, nature:'最終仕上げ', stability:'安定', rarity:'低', source:'統合訓練設備', specialMode:'finalTune', specialGrowth:0.78 },
];


export const CONTEXTUAL_TRAINING_VARIANTS = [
  // 大会前後は最優先。結果直後だけ出るため、通常育成を長期間圧迫しない。
  { id:'context_tournament_win_output', groupKey:'output', label:'優勝仕様再現試験', nature:'大会成果定着', stability:'中振れ幅', rarity:'条件', source:'状況派生', focusStats:['持続出力','出力応答'], focusBonus:0.38, contextRule:'tournamentChampionRecent', contextPriority:100 },
  { id:'context_tournament_loss_control', groupKey:'control', label:'大会敗退再調整', nature:'大会後再設計', stability:'安定', rarity:'条件', source:'状況派生', focusStats:['姿勢制御','装備制御'], focusBonus:0.40, contextRule:'tournamentEliminatedRecent', contextPriority:100 },
  { id:'context_tournament_control', groupKey:'control', label:'大会前制御調整', nature:'大会前調整', stability:'安定', rarity:'条件', source:'状況派生', focusStats:['姿勢制御','装備制御'], focusBonus:0.34, contextRule:'tournamentUpcoming', contextPriority:90 },
  { id:'context_tournament_sensor', groupKey:'sensor', label:'大会前索敵調整', nature:'大会前調整', stability:'安定', rarity:'条件', source:'状況派生', focusStats:['追跡性能','識別性能'], focusBonus:0.34, contextRule:'tournamentUpcoming', contextPriority:90 },

  // 連勝/連敗と直近5戦は別判定。長い連続記録がなくても最近の傾向を拾える。
  { id:'context_win_streak_ai', groupKey:'ai', label:'勝勢維持演習', nature:'好調維持', stability:'安定', rarity:'条件', source:'状況派生', focusStats:['状況判断','戦術選択'], focusBonus:0.30, contextRule:'winStreak', contextPriority:75 },
  { id:'context_loss_streak_ai', groupKey:'ai', label:'戦術再構築演習', nature:'立て直し', stability:'中振れ幅', rarity:'条件', source:'状況派生', focusStats:['行動予測','戦術選択'], focusBonus:0.38, contextRule:'lossStreak', contextPriority:75 },
  { id:'context_recent_wins_compute', groupKey:'compute', label:'勝因再現演習', nature:'好調分析', stability:'安定', rarity:'条件', source:'状況派生', focusStats:['演算精度','情報統合'], focusBonus:0.32, contextRule:'recentWinHeavy', contextPriority:65 },
  { id:'context_recent_losses_sensor', groupKey:'sensor', label:'敗因検証演習', nature:'不調分析', stability:'安定', rarity:'条件', source:'状況派生', focusStats:['識別性能','情報更新速度'], focusBonus:0.36, contextRule:'recentLossHeavy', contextPriority:65 },

  // 現在のチーム構成を反映。兵装そのものを強制せず、関連基礎能力の連携を鍛える。
  { id:'context_close_weapon_mobility', groupKey:'mobility', label:'近接編隊連携', nature:'近距離編成', stability:'中振れ幅', rarity:'条件', source:'状況派生', focusStats:['駆動応答','動作速度'], focusBonus:0.32, contextRule:'closeWeaponHeavy', contextPriority:45 },
  { id:'context_ranged_weapon_sensor', groupKey:'sensor', label:'遠距離火器連携', nature:'遠距離編成', stability:'安定', rarity:'条件', source:'状況派生', focusStats:['追跡性能','測距性能'], focusBonus:0.32, contextRule:'rangedWeaponHeavy', contextPriority:45 },
  { id:'context_special_weapon_compute', groupKey:'compute', label:'特殊兵装統合演習', nature:'特殊兵装編成', stability:'中振れ幅', rarity:'条件', source:'状況派生', focusStats:['並列処理','情報統合'], focusBonus:0.34, contextRule:'specialWeaponHeavy', contextPriority:45 },

  { id:'context_senior_engine', groupKey:'engine', label:'最終仕様稼働試験', nature:'3年目仕上げ', stability:'中振れ幅', rarity:'条件', source:'状況派生', focusStats:['電力供給','冷却性能'], focusBonus:0.34, contextRule:'seniorHeavy', contextPriority:35 },
  { id:'context_rookie_compute', groupKey:'compute', label:'新人連携演習', nature:'新人育成', stability:'安定', rarity:'条件', source:'状況派生', focusStats:['並列処理','情報統合'], focusBonus:0.30, contextRule:'rookieHeavy', contextPriority:35 },
];

export const TRAINING_TYPES = [...base, ...advanced, ...WEAPON_LAB_TRAINING, ...SPECIAL_TRAINING];

export const WEAPON_CATEGORIES = {
  blade: {
    label: 'ブレード', range: '近距離', type: '物理', resistance: '切断耐性',
    stats: {
      power: 'ブレード出力', accuracy: 'ブレード精度', control: 'ブレード制御',
      response: 'ブレード速度', stability: 'ブレード安定性', efficiency: 'ブレード追従性',
    },
  },
  hammer: {
    label: 'ハンマー', range: '近距離', type: '物理', resistance: '衝撃耐性',
    stats: {
      power: 'ハンマー出力', accuracy: 'ハンマー精度', control: 'ハンマー制御',
      response: 'ハンマー加速', stability: 'ハンマー安定性', efficiency: 'ハンマー衝撃効率',
    },
  },
  lance: {
    label: 'ランス', range: '近距離', type: '物理', resistance: '貫通耐性',
    stats: {
      power: 'ランス出力', accuracy: 'ランス精度', control: 'ランス制御',
      response: 'ランス加速', stability: 'ランス安定性', efficiency: 'ランス貫徹性能',
    },
  },
  beamBlade: {
    label: 'ビームブレード', range: '近距離', type: 'エネルギー', resistance: '熱耐性',
    stats: {
      power: 'ビーム刃出力', accuracy: '刃形成精度', control: '出力制御',
      response: 'ビーム刃追従性', stability: 'ビーム刃安定性', efficiency: 'エネルギー効率',
    },
  },
  rifle: {
    label: 'ライフル', range: '遠距離', type: '物理', resistance: '貫通耐性',
    stats: {
      power: 'ライフル威力', accuracy: '射撃精度', control: '反動制御',
      response: '照準速度', stability: '射撃安定性', efficiency: '弾道補正',
    },
  },
  machineGun: {
    label: 'マシンガン', range: '遠距離', type: '物理', resistance: '貫通耐性',
    stats: {
      power: 'マシンガン威力', accuracy: '連射精度', control: '反動制御',
      response: '連射速度', stability: '連射安定性', efficiency: '追従性能',
    },
  },
  cannon: {
    label: 'キャノン', range: '遠距離', type: '物理', resistance: '貫通耐性',
    stats: {
      power: 'キャノン出力', accuracy: '砲撃精度', control: '反動吸収',
      response: '砲撃制御', stability: '発射安定性', efficiency: '砲撃効率',
    },
  },
  laser: {
    label: 'レーザー', range: '遠距離', type: 'エネルギー', resistance: '熱耐性',
    stats: {
      power: 'レーザー出力', accuracy: '照射精度', control: '収束性能',
      response: '照射追従性', stability: '出力安定性', efficiency: '照射効率',
    },
  },
  beamCannon: {
    label: 'ビーム砲', range: '遠距離', type: 'エネルギー', resistance: '熱耐性',
    stats: {
      power: 'ビーム出力', accuracy: '発射精度', control: 'ビーム収束',
      response: '出力制御', stability: '発射安定性', efficiency: 'エネルギー効率',
    },
  },
  missile: {
    label: 'ミサイル', range: '特殊兵装', type: '物理', resistance: '爆発耐性',
    stats: {
      power: '弾頭威力', accuracy: 'ロック性能', control: '誘導性能',
      response: '追尾精度', stability: '誘導安定性', efficiency: '多目標処理',
    },
  },
  emp: {
    label: 'EMP', range: '特殊兵装', type: 'エネルギー', resistance: '電磁耐性',
    stats: {
      power: 'EMP出力', accuracy: '干渉精度', control: '干渉制御',
      response: '電子攻撃性能', stability: 'EMP安定性', efficiency: 'システム解析',
    },
  },
  drone: {
    label: 'ドローン', range: '特殊兵装', type: '特殊', resistance: '電磁耐性',
    stats: {
      power: 'ドローン出力', accuracy: '操作精度', control: '同時制御',
      response: '展開速度', stability: '指令安定性', efficiency: '自律制御',
    },
  },
};

export const WEAPON_KEYS = Object.keys(WEAPON_CATEGORIES);
export const WEAPON_AXES = ['power', 'accuracy', 'control', 'response', 'stability', 'efficiency'];

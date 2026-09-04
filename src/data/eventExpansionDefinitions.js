import { GROUP_KEYS, STAT_GROUPS } from './statDefinitions.js?v=4.7';
import { WEAPON_CATEGORIES } from './weaponDefinitions.js?v=4.7';

const WEAPON_KEYS = Object.keys(WEAPON_CATEGORIES);

const FAMILIES = [
  { key:'baseReview', title:'基礎設計再検証', condition:'any', effect:'base', intros:['訓練ログを設計値と照合','長期計測結果を再集計','基礎動作ログを比較','各班の計測記録を統合','運用後の誤差傾向を解析','反復試験の記録を再評価','設計時想定との差分を検証','整備班の観測値を統合','基礎挙動の偏りを抽出','実機ログから改善余地を発見'] },
  { key:'weaponFamiliarity', title:'兵装習熟研究', condition:'weapon', effect:'weaponGrowth', intros:['長期使用で操作癖を把握','実戦ログから照準癖を解析','反復使用で入力補正を洗練','兵装制御の遅れを切り分け','操作履歴から最適手順を抽出','発射・駆動ログを再学習','兵装別の挙動差を比較','使用回数の蓄積から癖を発見','実戦投入時の誤差を整理','兵装制御AIを再調整'] },
  { key:'rookie', title:'新人適応プログラム', condition:'year1', effect:'weakFix', intros:['初年度データから弱点を早期発見','新人機の初期癖を整理','基礎適応の遅れを重点確認','初期運用ログを比較','新人世代のばらつきを分析','初年度のつまずきを補正','導入直後の学習ログを解析','基礎動作の未熟な部分を抽出','初年度向け調整表を更新','新人機の適応状況を再評価'] },
  { key:'senior', title:'最終年度仕上げ', condition:'year3', effect:'growth', intros:['三年目の蓄積を最終調整へ反映','引退前の運用ログを総括','完成形に向けた重点項目を抽出','三年間の成長履歴を再評価','最終年度の伸びしろを整理','大会仕様への仕上げ案を検討','熟成した制御癖を再学習','三年目機の長所を再確認','完成度を高める微調整を実施','最終年の運用方針を再構築'] },
  { key:'reliable', title:'高信頼運用深化', condition:'reliable', effect:'growth', intros:['安定稼働ログを利用して高精度化','再現性の高い挙動から限界を探索','安定動作を前提に調整幅を拡大','故障率の低さを活かして反復試験','ばらつきの少ないログを精密解析','高再現性を利用した微調整','安定個体の余力を検証','信頼性を維持した高度調整','長時間安定稼働から改善点を抽出','高信頼個体向け設定を更新'] },
  { key:'unstable', title:'不安定挙動対策', condition:'unstable', effect:'reliability', intros:['挙動のばらつきを原因別に分解','不安定ログから再現条件を特定','異常値の発生タイミングを追跡','制御誤差の発生源を切り分け','負荷変動時の挙動を再検証','ばらつきの大きい項目を重点調整','不安定要因を整備記録と照合','再現性低下の兆候を早期検出','不調時ログを正常時と比較','信頼性回復のため制御を再調整'] },
  { key:'ability', title:'AI特性連携研究', condition:'abilityRich', effect:'base', intros:['複数の特殊能力が干渉する場面を解析','AI特性同士の連携ログを整理','特殊能力発動前後の挙動を比較','能力構成に合わせ制御を再最適化','複数特性の同時運用を検証','特殊能力の重なり方を再評価','AI特性を基礎動作へ落とし込み','能力発動時の余剰性能を活用','特殊能力構成から新しい運用法を発見','AI特性の連動条件を精査'] },
  { key:'sameMaker', title:'同系統技術共有', condition:'sameMaker', effect:'weapon', intros:['同一メーカー機の整備知見を共有','共通部品の調整記録を横展開','メーカー固有の設計癖を比較','同社機体間で制御設定を共有','共通規格の運用ログを統合','メーカー別の調整ノウハウを集約','同系統機の成功例を横展開','共通設計思想から改善策を抽出','同社製機体の差分を比較','メーカー技術資料と実機ログを照合'] },
  { key:'highStat', title:'長所極限研究', condition:'highStat', effect:'growth', intros:['突出項目の限界域を再検証','長所をさらに実戦向けに研磨','高性能域の挙動を精密測定','突出能力を軸に運用手順を再構成','得意分野の余力を限界まで探索','長所の再現性を高める調整','高性能項目の連携先を検討','突出値を活かす制御設定を更新','得意分野中心の実戦ログを解析','強みを崩さず周辺項目を調整'] },
  { key:'lowStat', title:'弱点補正会議', condition:'lowStat', effect:'weakFix', intros:['最低評価項目の原因を洗い出し','弱点が他系統へ与える影響を検証','不得意項目の最低限ラインを再設定','低性能域の挙動を重点確認','弱点補正の優先順位を見直し','苦手項目の改善手順を簡素化','最低値付近のログを再分析','不得意分野の実戦影響を評価','弱点を補う制御設定を試験','低性能項目の底上げ案を採用'] },
  { key:'recentWin', title:'勝因再現分析', condition:'recentWin', effect:'weapon', intros:['直近勝利の決定要因を抽出','勝利試合の成功手順を再現','有効だった兵装運用を整理','勝ち試合のログから再現可能部分を選別','直近の好調要因を技術班で共有','勝利時の動作順序を再検証','成功した判断パターンを学習','勝ち筋に寄与した項目を特定','直近戦の優位場面を詳細解析','勝利パターンの再現性を高める'] },
  { key:'recentLoss', title:'敗因検証会', condition:'recentLoss', effect:'weakFix', intros:['直近敗戦の崩れ始めを特定','敗北ログから弱点露呈箇所を抽出','相手に突かれた穴を再検証','敗戦時の判断遅れを解析','負け試合の共通点を整理','崩れた能力連携を再構築','敗因を機体側と運用側に切り分け','不利場面のログを重点解析','直近戦で機能しなかった項目を修正','敗北から得た改善点を反映'] },
  { key:'tournament', title:'大会運用レビュー', condition:'tournament', effect:'weaponGrowth', intros:['大会で得た高負荷ログを整理','大会特有の連戦データを解析','本番環境での兵装挙動を再評価','大会中の判断パターンを比較','強豪戦で得た計測値を設計へ反映','大会ログから実戦適性を再計算','本番時だけ現れた癖を検証','大会運用の成功・失敗例を統合','高緊張環境での制御誤差を確認','大会経験を次の調整へ還元'] },
  { key:'manufacturerMix', title:'異種設計比較', condition:'mixedMaker', effect:'base', intros:['異なるメーカー思想を比較','複数社の設計手法から共通項を抽出','異種規格の運用差を検証','メーカーごとの強みを横断比較','設計思想の違いから新しい調整案を発見','複数社機体のログを同一基準で評価','異なる制御哲学の長所を比較','混成編成から技術的な相互補完を発見','メーカー差を活かす運用法を整理','異種設計の成功例を共有'] },
  { key:'doctrine', title:'兵装ドクトリン検証', condition:'weapon', effect:'weapon', intros:['兵装の定石を実戦ログで再検証','想定ドクトリンと実戦挙動を比較','兵装ごとの勝ち筋を再整理','運用思想と基礎能力の噛み合わせを検証','兵装特性を活かす判断順序を再構成','定石から外れた成功例を分析','兵装別の有利場面を再定義','ドクトリン上の優先能力を見直し','実戦結果から兵装運用指針を更新','兵装思想をチーム運用へ落とし込む'] },
];

function templateFor(family, index, globalIndex) {
  const groupKey = GROUP_KEYS[(globalIndex * 3 + index) % GROUP_KEYS.length];
  const weaponKey = WEAPON_KEYS[(globalIndex * 5 + index) % WEAPON_KEYS.length];
  const group = STAT_GROUPS[groupKey];
  const weapon = WEAPON_CATEGORIES[weaponKey];
  const intro = family.intros[index];
  return {
    id: `v47-event-${String(globalIndex + 1).padStart(3, '0')}`,
    family: family.key,
    title: `${family.title} ― ${family.intros[index]}`,
    description: `${intro}。${group.label}系と${weapon.label}の記録を照合し、次の育成に使える具体的な調整案がまとまった。`,
    groupKey,
    weaponKey,
    condition: family.condition,
    effect: family.effect,
    weight: 1 + ((globalIndex + index) % 3),
  };
}

export const EVENT_EXPANSION_TEMPLATES = FAMILIES.flatMap((family, familyIndex) =>
  family.intros.map((_, index) => templateFor(family, index, familyIndex * 10 + index))
);

export const EVENT_EXPANSION_FAMILY_COUNT = FAMILIES.length;


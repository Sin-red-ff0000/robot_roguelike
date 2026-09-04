import { MANUFACTURERS } from './manufacturers.js?v=4.7';
import { WEAPON_CATEGORIES, WEAPON_KEYS } from './weaponDefinitions.js?v=4.7';
import { GROUP_KEYS, STAT_GROUPS } from './statDefinitions.js?v=4.7';

const COLORS = ['蒼','紅','白','黒','銀','金','翠','紫','灰','藍','橙','群青'];
const NOUNS = ['機兵団','技術部','実証隊','競技班','研究会','工学部','選抜隊','戦術科','開発局','実験隊','機装部','演習班','特務班','競技会','技研'];
const ODDITIES = ['manufacturer','generation','series','singleWeapon','singleRange','superGroup','superStat','aceAndFodder','uniform','reliabilityTank','unstableMonster','abilityHeavy','abilityLight','oldGeneration','latestGeneration','mixedManufacturers'];

export const RIVAL_RANKS = [
  { id: 'local', label: '地方常連', score: 1 },
  { id: 'notable', label: '注目校', score: 2 },
  { id: 'strong', label: '強豪', score: 3 },
  { id: 'elite', label: '全国級', score: 4 },
  { id: 'legend', label: '名門', score: 5 },
];

const TOURNAMENT_AFFINITIES = ['early','early','middle','middle','late','any'];

const PHILOSOPHIES = [
  '勝てる形を一つ決め、全員をそこへ寄せる', '対策されても同じ型を押し通す', '個体差を捨てて編成全体の再現性を優先する',
  '上位機だけで勝ち切る前提で残りを割り切る', '兵装と基礎能力の噛み合わせだけを徹底して磨く', '弱点を消すより長所を伸ばし切る',
  '相手に合わせず、自分たちの得意条件を押し付ける', '試合ごとの安定性より最大性能を重視する', '突出値を作らず十五機全体の穴を減らす',
  '古い設計を現代運用へ最適化して使い続ける', '最新技術を短期間で実戦投入する', '異なるメーカー思想を混ぜて読みにくさを作る'
];
const SACRIFICES = [
  '柔軟な兵装変更', '能力構成の均衡', '信頼性', '特殊能力の幅', '個体ごとの役割分担', '短期的な対応力',
  '弱点補強', '長期戦の安定性', '編成の読みづらさ', '一部の基礎能力', '兵装の多様性', '育成効率の均一さ'
];
const COACH_STYLES = ['徹底反復型','実戦主義','数値最優先','選手固定型','一点突破型','分析偏重型','保守運用型','試験運用型'];

function traitFor(index) {
  const primary = ODDITIES[index % ODDITIES.length];
  const secondary = index % 3 === 0 ? ODDITIES[(index * 7 + 5) % ODDITIES.length] : null;
  return [...new Set([primary, secondary].filter(Boolean))];
}

function teamSeed(index) { return (index * 31 + 17) % 97; }

export const RIVAL_TEAMS = Array.from({ length: 240 }, (_, index) => {
  const manufacturer = MANUFACTURERS[index % MANUFACTURERS.length];
  const weaponKey = WEAPON_KEYS[(index * 5 + 2) % WEAPON_KEYS.length];
  const groupKey = GROUP_KEYS[(index * 3 + 1) % GROUP_KEYS.length];
  const statName = STAT_GROUPS[groupKey].stats[index % STAT_GROUPS[groupKey].stats.length];
  const generation = (index % 10) + 1;
  return {
    id: `rival-${String(index + 1).padStart(3,'0')}`,
    name: `${COLORS[index % COLORS.length]}${manufacturer.name.replace(/(重工|産業|工廠|重機|精機|技研|機工|機関|研究所)$/,'')}${NOUNS[(index * 7) % NOUNS.length]}`,
    traits: traitFor(index), manufacturerId: manufacturer.id, manufacturerName: manufacturer.name,
    generation, weaponKey, weaponName: WEAPON_CATEGORIES[weaponKey].label, groupKey,
    groupName: STAT_GROUPS[groupKey].label, statName,
    strength: 1 + (index % 5),
    rankId: RIVAL_RANKS[index % RIVAL_RANKS.length].id,
    rankLabel: RIVAL_RANKS[index % RIVAL_RANKS.length].label,
    rankScore: RIVAL_RANKS[index % RIVAL_RANKS.length].score,
    tournamentAffinity: TOURNAMENT_AFFINITIES[(index * 5 + Math.floor(index / 20)) % TOURNAMENT_AFFINITIES.length],
    signature: `${manufacturer.name}系の${STAT_GROUPS[groupKey].label}運用を軸にした${WEAPON_CATEGORIES[weaponKey].label}志向`,
    philosophy: PHILOSOPHIES[(index * 7 + generation) % PHILOSOPHIES.length],
    sacrifice: SACRIFICES[(index * 11 + groupKey.length) % SACRIFICES.length],
    scoutingFocus: `${STAT_GROUPS[groupKey].label}と${WEAPON_CATEGORIES[weaponKey].label}の連動`,
    counterHint: `${STAT_GROUPS[groupKey].label}の押し付けを正面から受けず、${WEAPON_CATEGORIES[weaponKey].label}が機能しにくい組み合わせへ誘導する`,
    coachStyle: COACH_STYLES[(index * 5 + teamSeed(index)) % COACH_STYLES.length],
  };
});

export function rivalById(id) { return RIVAL_TEAMS.find((team) => team.id === id) ?? null; }

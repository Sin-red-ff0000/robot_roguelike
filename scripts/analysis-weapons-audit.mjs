import { createInitialState, migrateState } from '../src/systems/gameState.js';
import { applyTrainingTurn } from '../src/systems/trainingSystem.js';
import { WEAPON_CATEGORIES, WEAPON_AXES } from '../src/data/weaponDefinitions.js';

const state = createInitialState();
state.facilities.analysis = 5;
state.facilities.weaponsLab = 5;
state.weaponsLabControl = { targetWeaponKey: 'emp' };
const migrated = migrateState(structuredClone(state));
if (migrated.weaponsLabControl?.targetWeaponKey !== 'emp') throw new Error('試験兵装指定がセーブ移行で保持されない');

const robot = migrated.roster[0];
const equipped = robot.weaponKey;
const target = equipped === 'emp' ? 'drone' : 'emp';
const equippedBefore = structuredClone(robot.weaponCategoryStats[equipped]);
const targetBefore = structuredClone(robot.weaponCategoryStats[target]);
const training = { id:'audit_weapon_test', label:'監査用兵装試験', level:3, weaponLab:true, weaponGrowth:1, linkedGrowth:0.35, testWeaponKey:target };
applyTrainingTurn([robot], training);
const targetAfter = robot.weaponCategoryStats[target];
const equippedAfter = robot.weaponCategoryStats[equipped];
const targetGrowth = WEAPON_AXES.some((axis) => Number(targetAfter[axis]) > Number(targetBefore[axis]));
if (!targetGrowth) throw new Error('非装備の試験指定兵装が成長していない');
if (equipped !== target && WEAPON_AXES.some((axis) => Number(equippedAfter[axis]) !== Number(equippedBefore[axis]))) throw new Error('指定試験で現在兵装まで成長している');
if (!WEAPON_CATEGORIES[target]) throw new Error('試験対象カテゴリ不正');

console.log(JSON.stringify({ ok:true, target, equipped, targetGrowth, retainedTarget:migrated.weaponsLabControl.targetWeaponKey }, null, 2));

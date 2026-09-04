import { createInitialState } from '../src/systems/gameState.js';
import { EVENT_EXPANSION_TEMPLATES, EVENT_EXPANSION_FAMILY_COUNT } from '../src/data/eventExpansionDefinitions.js';
import { MANAGER_CONTEXT_LABELS, MANAGER_PERSONALITIES } from '../src/data/managerDefinitions.js';
import { managerLine, managerLinePool, normalizeManagerProfile } from '../src/systems/managerSystem.js';
import { resolvePostTrainingEvent } from '../src/systems/eventSystem.js';

const badInternal = /(statGrowth|weaponSynergy|weaponMismatch|abilityGain|growthMultiplier|partCompatibility|recordMilestone)/;
if (EVENT_EXPANSION_TEMPLATES.length !== 330) throw new Error(`event count ${EVENT_EXPANSION_TEMPLATES.length}`);
if (EVENT_EXPANSION_FAMILY_COUNT !== 33) throw new Error(`family count ${EVENT_EXPANSION_FAMILY_COUNT}`);
if (new Set(EVENT_EXPANSION_TEMPLATES.map(x=>x.id)).size !== 330) throw new Error('event id duplication');
if (new Set(EVENT_EXPANSION_TEMPLATES.map(x=>x.title)).size !== 330) throw new Error('event title diversity too low');
if (EVENT_EXPANSION_TEMPLATES.some(x => /運用解析\s*\d|\b(output|mobility|control|engine|compute|sensor|ai)系統/.test(x.title+x.description))) throw new Error('placeholder/internal event text remains');
for (const family of ['homeTech','heritageTour','libidoLab','libidoAfterHours','libidoFitting','libidoRedacted','tokiwaLivingRoom','tokiwaApplianceDuty','tokiwaHomeSupport','libidoCompanionService','libidoPrivateSuite','libidoAftercareUse','improvisation','teamChemistry']) { if (!EVENT_EXPANSION_TEMPLATES.some(x => x.family === family)) throw new Error(`missing event family ${family}`); }
for (const context of ['tokiwaComment','heritageComment','libidoComment','libidoAfterHours','libidoFitting','libidoRedacted','libidoIntimateCalibration','libidoAdultInterface','libidoBodyOption','libidoPrivacyMode','libidoMatch','libidoVictory','libidoTournament','libidoPart','libidoAbility','libidoSenior','tokiwaLivingRoom','tokiwaApplianceDuty','tokiwaHomeSupport','libidoCompanionService','libidoPrivateSuite','libidoAftercareUse','libidoTraining','libidoTrainingHigh','libidoLoss','libidoFinal','libidoChampion','libidoAwakening','libidoRookie','libidoReliabilityHigh','libidoReliabilityLow','libidoRecord','tokiwaMatch','tokiwaVictory','tokiwaPart','tokiwaSenior']) { if (!MANAGER_CONTEXT_LABELS[context]) throw new Error(`missing manager context ${context}`); }
const expandedContexts = ['tokiwaLivingRoom','tokiwaApplianceDuty','tokiwaHomeSupport','libidoCompanionService','libidoPrivateSuite','libidoAftercareUse','libidoTraining','libidoTrainingHigh','libidoLoss','libidoFinal','libidoChampion','libidoAwakening','libidoRookie','libidoReliabilityHigh','libidoReliabilityLow','libidoRecord','tokiwaMatch','tokiwaVictory','tokiwaPart','tokiwaSenior'];
for (const personalityId of Object.keys(MANAGER_PERSONALITIES)) {
  const profile = normalizeManagerProfile({ personalityId });
  for (const context of expandedContexts) {
    if (managerLinePool(profile, context).length < 8) throw new Error(`manager variation too low ${personalityId}/${context}`);
  }
}
for (const [key,label] of Object.entries(MANAGER_CONTEXT_LABELS)) {
  if (badInternal.test(label) || label === key && key !== 'generic') throw new Error(`manager label leak ${key}:${label}`);
}
for (const personalityId of Object.keys(MANAGER_PERSONALITIES)) {
  const profile = normalizeManagerProfile({ personalityId });
  for (const context of Object.keys(MANAGER_CONTEXT_LABELS)) {
    const line = managerLine(profile, context, { robot:'テスト機', weapon:'ライフル', manufacturer:'霧島重工', ability:'集中照準' });
    if (badInternal.test(line)) throw new Error(`manager internal key leak ${personalityId}/${context}: ${line}`);
  }
}
let expanded = 0;
const state = createInitialState();
state.settings.eventFrequency = 'high';
for (let i=0;i<2500;i++) {
  const ev = resolvePostTrainingEvent(state);
  if (ev?.type === 'operational-study') expanded++;
}
if (expanded < 10) throw new Error(`expanded events not reachable ${expanded}`);
console.log(JSON.stringify({ok:true, events:EVENT_EXPANSION_TEMPLATES.length, families:EVENT_EXPANSION_FAMILY_COUNT, titles:new Set(EVENT_EXPANSION_TEMPLATES.map(x=>x.title)).size, personalities:Object.keys(MANAGER_PERSONALITIES).length, contexts:Object.keys(MANAGER_CONTEXT_LABELS).length, expandedReachability:expanded}, null, 2));

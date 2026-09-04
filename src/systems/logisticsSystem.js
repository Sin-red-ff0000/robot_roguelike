import { MANUFACTURERS } from '../data/manufacturers.js?v=4.8';
import { generateCustomPart } from './partSystem.js?v=4.8';
import { logisticsLevel } from './facilitySystem.js?v=4.8';

export const PROCUREMENT_ROUTES = {
  standard: { id:'standard', label:'標準調達', minLevel:1, description:'通常品を3候補比較する。' },
  maker: { id:'maker', label:'メーカー指定', minLevel:2, description:'指定メーカーの通常品を3候補比較する。' },
  challenge: { id:'challenge', label:'挑戦調達', minLevel:3, description:'挑戦的試供品を含む3候補から選ぶ。' },
  prototype: { id:'prototype', label:'試作物資', minLevel:4, description:'高位試作品4候補から選ぶ。' },
  special: { id:'special', label:'特別技術ルート', minLevel:5, description:'特殊能力候補を持つ最上位物資5候補から選ぶ。' },
};

function currentUsage(state) {
  state.logisticsProcurement ??= { year: Number(state.year ?? 1), used: 0, pending: null, history: [] };
  if (Number(state.logisticsProcurement.year) !== Number(state.year ?? 1)) {
    state.logisticsProcurement.year = Number(state.year ?? 1);
    state.logisticsProcurement.used = 0;
    state.logisticsProcurement.pending = null;
  }
  state.logisticsProcurement.history ??= [];
  return state.logisticsProcurement;
}

export function procurementLimit(state) {
  const level = logisticsLevel(state);
  if (level <= 0) return 0;
  return level >= 5 ? 2 : 1;
}

export function procurementStatus(state) {
  const usage = currentUsage(state);
  const limit = procurementLimit(state);
  return { level: logisticsLevel(state), used: usage.used, limit, remaining: Math.max(0, limit - usage.used), pending: usage.pending };
}

function candidateOptions(route, manufacturerId) {
  const maker = MANUFACTURERS.some((item) => item.id === manufacturerId) ? manufacturerId : null;
  if (route === 'maker') {
    return Array.from({ length: 3 }, () => generateCustomPart({ manufacturerId: maker, challenge:false }));
  }
  if (route === 'challenge') {
    return Array.from({ length: 3 }, (_, index) => generateCustomPart({ manufacturerId: maker, challenge:index > 0 }));
  }
  if (route === 'prototype') {
    return Array.from({ length: 4 }, (_, index) => generateCustomPart({ manufacturerId: maker, rarityKey:index === 3 ? 'bespoke' : 'elite', challenge:index === 2 }));
  }
  if (route === 'special') {
    return Array.from({ length: 5 }, (_, index) => generateCustomPart({ manufacturerId: maker, rarityKey:index >= 3 ? 'bespoke' : 'elite', challenge:index === 2, forceAbility:true }));
  }
  return Array.from({ length: 3 }, () => generateCustomPart({ challenge:false }));
}

export function requestProcurement(state, routeId='standard', manufacturerId=null) {
  const status = procurementStatus(state);
  const route = PROCUREMENT_ROUTES[routeId] ?? PROCUREMENT_ROUTES.standard;
  if (status.level < route.minLevel) return { ok:false, reason:'設備レベル不足' };
  if (status.remaining <= 0) return { ok:false, reason:'今年の調達依頼回数を使い切っています' };
  if (status.pending) return { ok:false, reason:'先に現在の調達候補から1つ選んでください' };
  if (routeId === 'maker' && !manufacturerId) return { ok:false, reason:'メーカーを指定してください' };
  const usage = currentUsage(state);
  const choices = candidateOptions(routeId, manufacturerId).map((part) => ({ ...part, source:'技術物資ネットワーク' }));
  usage.pending = {
    id:`proc-${state.year}-${Date.now()}`,
    routeId,
    routeLabel:route.label,
    manufacturerId: manufacturerId || null,
    choices,
  };
  usage.used += 1;
  return { ok:true, pending:usage.pending };
}

export function chooseProcurement(state, partId) {
  const usage = currentUsage(state);
  const pending = usage.pending;
  if (!pending) return { ok:false, reason:'選択中の調達候補がありません' };
  const part = pending.choices.find((item) => item.id === partId);
  if (!part) return { ok:false, reason:'候補が見つかりません' };
  state.partInventory ??= [];
  state.partInventory.push(part);
  usage.history.unshift({ year:state.year, routeId:pending.routeId, partId:part.id, partName:part.name });
  usage.history = usage.history.slice(0, 30);
  usage.pending = null;
  return { ok:true, part };
}

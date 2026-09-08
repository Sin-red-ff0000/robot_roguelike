import { SERIES_DEFINITIONS } from '../src/data/seriesDefinitions.js?v=4.8';
const libido=SERIES_DEFINITIONS.filter(s=>s.manufacturerId==='libido');
const partner=SERIES_DEFINITIONS.filter(s=>s.eleventhGeneration&&s.collaborationPartnerId==='libido'&&s.manufacturerId!=='libido');
const all=[...libido,...partner];
const missing=all.filter(s=>!s.libidoBodyArchetype||!s.libidoBodyCombatRole||!Array.isArray(s.libidoBodyFeatureTags));
const dist={}; for(const s of libido)dist[s.libidoBodyArchetype]=(dist[s.libidoBodyArchetype]||0)+1;
const result={ok:libido.length===226&&partner.length===25&&missing.length===0&&Object.keys(dist).length===15,libido:libido.length,libidoPartnerCollabs:partner.length,archetypes:Object.keys(dist).length,minPerArchetype:Math.min(...Object.values(dist)),maxPerArchetype:Math.max(...Object.values(dist)),missing:missing.length,distribution:dist};
console.log(JSON.stringify(result,null,2)); if(!result.ok)process.exit(1);

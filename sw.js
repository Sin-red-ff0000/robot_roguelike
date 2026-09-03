const CACHE_NAME = 'robot-lab-v2.6';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './src/config.js',
  './src/data/battleRules.js',
  './src/data/facilityDefinitions.js',
  './src/data/managerDefinitions.js',
  './src/data/manufacturers.js',
  './src/data/seriesDefinitions.js',
  './src/data/partDefinitions.js',
  './src/data/specialAbilities.js',
  './src/data/statDefinitions.js',
  './src/data/tournamentDefinitions.js',
  './src/data/trainingDefinitions.js',
  './src/data/weaponDefinitions.js',
  './src/main.js',
  './src/styles.css',
  './src/systems/annualTrendSystem.js',
  './src/systems/battleSystem.js',
  './src/systems/displaySystem.js',
  './src/systems/eventSystem.js',
  './src/systems/facilitySystem.js',
  './src/systems/gameState.js',
  './src/systems/managerPresetSystem.js',
  './src/systems/managerSystem.js',
  './src/systems/partSystem.js',
  './src/systems/pwaSystem.js',
  './src/systems/recordSystem.js',
  './src/systems/robotGenerator.js',
  './src/systems/saveSystem.js',
  './src/systems/settingsSystem.js',
  './src/systems/specialAbilitySystem.js',
  './src/systems/teamMatchSystem.js',
  './src/systems/tournamentSystem.js',
  './src/systems/trainingSystem.js',
  './src/utils/random.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => (await caches.match(request)) || caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});

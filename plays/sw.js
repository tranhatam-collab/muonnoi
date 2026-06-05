/* Muôn Nơi · Plays — Service Worker (offline cache) */
const CACHE = 'plays-v1';
const STATIC = [
  '/',
  '/index.html',
  '/detail.html',
  '/404.html',
  '/assets/plays.css',
  '/assets/catalog.js',
  '/assets/plays-sdk.js',
  '/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const isNav = e.request.mode === 'navigate';
  e.respondWith(
    caches.match(e.request).then(cached => {
      // Navigation: always fetch fresh first, fallback to cache
      if (isNav) {
        return fetch(e.request).then(res => {
          if (res && res.status === 200 && res.type === 'basic') {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return res;
        }).catch(() => cached);
      }
      // Static assets: cache first
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (!res || res.status !== 200 || res.type !== 'basic') return res;
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => cached);
    })
  );
});


self.addEventListener('install', (event) => {
  event.waitUntil(caches.open('orban-cache-v1').then(cache => {
    return cache.addAll([
      './smsv_orban_ministry.html',
      './manifest.webmanifest',
      './orban.png'
    ]);
  }));
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});

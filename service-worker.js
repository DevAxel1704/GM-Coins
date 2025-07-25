self.addEventListener('install', e => {
  e.waitUntil(caches.open('pwa-assets').then(cache => {
    return cache.addAll([
      '/',
      '/index.html',
      '/login.html',
      '/style.css',
      '/app.js',
      '/firebase-config.js'
    ]);
  }));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});

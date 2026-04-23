// Service Worker for PUPKIT
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Pass-through fetch (prevents caching freezes)
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});

let cache_name = 'unitext_v104'

let urls_to_cache = [
    '',
    '/',
    '/index.html',
    '/images/icon48.png',
    '/build/Desktop.data.unityweb',
    '/build/Desktop.json',
    '/build/Desktop.wasm.code.unityweb',
    '/build/Desktop.wasm.framework.unityweb',
    '/build/UnityLoader.js'

]
self.addEventListener('install', (e) => {
    console.log("Service install");
    self.skipWaiting();
    e.waitUntil(caches.open(cache_name).then((cache) => {
        return cache.addAll(urls_to_cache);
    }) )
});

self.addEventListener('activate', (e) => {
    console.log("Service activate");
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cache_name).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

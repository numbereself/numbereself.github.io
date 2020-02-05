let cache_name = 'unitext_v207'

let urls_to_cache = [
    '',
    '/',
    '/index.html',
    '/Build/webgl_207.data.unityweb',
    '/Build/webgl_207.json',
    '/Build/webgl_207.wasm.code.unityweb',
    '/Build/webgl_207.wasm.framework.unityweb',
    '/Build/UnityLoader.js'

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

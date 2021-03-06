let cache_name = 'unitext_v413'

let precache_urls = [
  '',
  '/',
  '/index.html',
  '/build/webgl_413.data.unityweb',
  '/build/webgl_413.json',
  '/build/webgl_413.wasm.code.unityweb',
  '/build/webgl_413.wasm.framework.unityweb',
  '/build/UnityLoader.js'

]

self.addEventListener('install', (e) => {
    console.log("Service install");
    event.waitUntil(
      caches.open(cache_name).then(function(cache) {
            return cache.addAll(precache_urls);
        }).then(function() {
          return self.skipWaiting();
        })
      );
});

self.addEventListener('activate', (e) => {
    console.log("Service activate");
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).then(function(response) {
      caches.open(cache_name).then(function(cache) {
        cache.put(event.request, response.clone());});
      return response;
    }).catch(function() {
      return caches.match(event.request);
    })
  );
});

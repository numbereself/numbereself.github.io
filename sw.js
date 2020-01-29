let cache_name = 'unitext_v101'

self.addEventListener('install', (e) => {
    console.log("Service install");
});

self.addEventListener('activate', (e) => {
    console.log("Service activate");
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cache_name).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        } || response);
      });
    })
  );
});

let cache_name = 'unitext_v102'

self.addEventListener('install', (e) => {
    console.log("Service install");
});

self.addEventListener('activate', (e) => {
    console.log("Service activate");
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cache_name).then(function(cache) {
      return fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
      }) || cache.match(event.request);
    })
  );
});

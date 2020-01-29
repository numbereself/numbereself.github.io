let cache_name = 'unitext_v1'

let urls_to_cache = [
    '/',
    '/images/icon48.png'
]
self.addEventListener('install', (e) => {
    console.log("Service installing");
    self.skipWaiting();
    e.waitUntil(caches.open(cache_name).then((cache) => {
        return cache.addAll(urls_to_cache);
    }) )
});

self.addEventListener('activate', (e) => {
    console.log("NEW Service activate");
});

self.addEventListener('fetch', (e) => {
    console.log("Fetching " + e.request.url)
    e.respondWith(caches.match(e.request).then((response) => {
     if(response)
     {
        return response
     }
     else
      return fetch(e.request)
    }) )
 });
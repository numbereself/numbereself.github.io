let cache_name = 'unitext_v1'

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
    console.log("NEW Service installing");
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
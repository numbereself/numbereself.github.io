let cache_name = 'mysite-v1'

let urls_to_cache = [
    '',
    '/images/icon48.png',
    '/Build/Desktop.data.unityweb',
    '/Build/Desktop.json',
    '/Build/Desktop.wasm.code.unityweb',
    '/Build/Desktop.wasm.framework.unityweb',
    '/Build/UnityLoader.js'

]
self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(cache_name).then((cache) => {
        return cache.addAll(urls_to_cache)
    }) )
})

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((response) => {
     if(response)
     {
         console.log(e.request);
        return response
     }
      
     else
      return fetch(e.request)
    }) )
   })
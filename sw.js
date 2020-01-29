let cache_name = 'mysite-v1'

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
    console.log("Service installing");
});

self.addEventListener('activate', (e) => {
    console.log("Service activate");
});
const VERSION='mi-camino-v2';
const APP_SHELL=['/','/manifest.webmanifest','/icon.svg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(VERSION).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==VERSION).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(caches.match(event.request).then(cached=>{const network=fetch(event.request).then(response=>{if(response.ok&&new URL(event.request.url).protocol.startsWith('http'))caches.open(VERSION).then(cache=>cache.put(event.request,response.clone()));return response});return cached||network.catch(()=>new Response('Sin conexión. Abre una pantalla que ya hayas visitado.',{status:503,headers:{'Content-Type':'text/plain;charset=utf-8'}}))}))});

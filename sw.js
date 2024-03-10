//serviceWorker
self.addEventListener('install', e=>{
    e.waitUntil(
        caches.open("Rafiz").then(cache => {
          // Our application only has two files here index.html and manifest.json
          // but you can add more such as style.css as your app grows
          return cache.addAll([
            './',
            './index.html',
            './manifest.json',
            './s.png',
            './c.png',
            './cse192.png',
            './cse512.png',
            './sw.js',
          ]);
        })
      );
}); //install
self.addEventListener('activate', e=>{}); //activate
self.addEventListener('fetch', e=>{

    e.respondWith(
        caches.open("Rafiz")
          .then(cache => cache.match(e.request, { ignoreSearch: true }))
          .then(response => {
            return response || fetch(e.request);
          })
      );

}); //fetch

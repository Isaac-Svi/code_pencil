self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('static').then((cache) => {
            return cache.addAll([
                './',
                './manifest.json',
                './images/test.webp',
                './images/cv.png',
                './images/me.jpg',
                './images/my-pic.jpg',
                './images/pencil.ico',
                './src/css/style.css',
                './src/css/about.css',
                './src/css/app.css',
                './src/css/global.css',
                './src/css/projectLink.css',
                './src/js/index.mjs',
                './src/js/App.mjs',
                './src/js/Router.mjs',
                './src/js/Element.mjs',
                './src/js/View.mjs',
            ])
        })
    )
})

self.addEventListener('fetch', (e) => {
    // console.log(`Intercepting fetch request for: ${e.request.url}`)

    e.respondWith(
        caches.match(e.request).then((response) => {
            // if response is defined, it means we don't have to
            // ask network for it.  otherwise, make request
            return response || fetch(e.request)
        })
    )
})

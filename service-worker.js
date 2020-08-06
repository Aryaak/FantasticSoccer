// CHACING

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    console.log(`Workbox berhasil dimuat`);
    workbox.core.setCacheNameDetails({
        prefix: "FSoccer",
        suffix: "",
        precache: "appshell",
        runtime: "runtime",
    });
    workbox.precaching.precacheAndRoute(
        [{
                url: '/',
                revision: '1'
            },
            {
                url: '/index.html',
                revision: '3'
            },
            {
                url: '/manifest.json',
                revision: '2'
            },
            {
                url: '/push.js',
                revision: '1'
            },
            {
                url: '/service-worker.js.js',
                revision: '1'
            },
            {
                url: '/pages/home.html',
                revision: '1'
            },
            {
                url: '/pages/standings.html',
                revision: '1'
            },
            {
                url: '/pages/favorite_clubs.html',
                revision: '1'
            },
            {
                url: '/templates/nav.html',
                revision: '1'
            },
            {
                url: '/assets/css/header_style.css',
                revision: '1'
            },
            {
                url: '/assets/css/main_style.css',
                revision: '1'
            },
            {
                url: '/assets/css/materialize.css',
                revision: '1'
            },
            {
                url: '/assets/css/responsive.css',
                revision: '1'
            },
            {
                url: '/assets/css/style.css',
                revision: '1'
            },
            {
                url: '/assets/js/data/api.js',
                revision: '1'
            },
            {
                url: '/assets/js/data/idb.js',
                revision: '1'
            },
            {
                url: '/assets/js/data/db.js',
                revision: '1'
            },
            {
                url: '/assets/js/data/premission.js',
                revision: '1'
            },
            {
                url: '/assets/js/view/materialize.js',
                revision: '1'
            },
            {
                url: '/assets/js/view/nav.js',
                revision: '2'
            },
            {
                url: '/assets/js/view/render.js',
                revision: '2'
            },
        ], {

            ignoreUrlParametersMatching: [/.*/],
        });

    workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg|svg)$/,
        workbox.strategies.cacheFirst({
            cacheName: "FSoccer-img",
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 50,
                    maxAgeSeconds: 7 * 24 * 60 * 60,
                }),
            ],
        })
    );

    workbox.routing.registerRoute(
        new RegExp("/pages/"),
        workbox.strategies.staleWhileRevalidate({
            cacheName: "PSoccer-pages",
        })
    );

    workbox.routing.registerRoute(
        new RegExp("https://api.football-data.org/v2/"),
        workbox.strategies.staleWhileRevalidate()
    );

} else {
    console.log(`Workbox gagal dimuat`);
}


// PUSH NOTIFICATION

self.addEventListener('push', function (event) {
    let body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    let options = {
        body: body,
        badge: "assets/img/icon.png",
        icon: "assets/img/icon.png",
        image: "assets/img/jumbotron_bg.jpg",
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Fantastic Soccer', options)
    );
});
// add an event listener to the service worker sw.js file
self.addEventListener('fetch', function(event) {
    console.log(event.request);
});


/* Wait for service worker to install, then add stuff to cache 
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('restaurant-app').then(function(cache) {
            return cache.addAll([
                '/',
                'js/main.js',
                'js/restaurant_info.js',
                'css/styles.css',
                'data/restaurants.json',
                'img/'
            ]);
        })
    );
});

/* use the cache to respond to event listeners 
self.addEventListener('fetch', function(event) {
    event.respondWith(
        // check cache for entry relating to the request
        caches.match(event.request).then(function(response) {
            // if entry exists, return its response
            if (response) return response;
            // otherwise fetch it from network
            return fetch(event.request);
        })
    );
});
*/
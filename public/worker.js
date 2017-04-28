self.addEventListener('install', (event) => {
  var offlineRequest = new Request('offline.html');
  event.waitUntil(
    fetch(offlineRequest)
      .then((response) => {
        return caches.open('offline')
      .then((cache) => {
        console.log('[oninstall] Cached offline page', response.url);
        return cache.put(offlineRequest, response);
      });
      })
  );
});

self.addEventListener('fetch', (event) => {
  var request = event.request;
  if (request.method === 'GET') {
    event.respondWith(
      fetch(request)
        .catch((error) => {
          console.error('[onfetch] Failed. Serving cached offline fallback ' + error);
          return caches.open('offline')
        .then((cache) => {
          return cache.match('offline.html');
        });
        })
    );
  }
});

caches.open('test-cache')
  .then((cache) => {
    cache.addAll(['http://ws.audioscrobbler.com/2.0/?format=json&method=user.getrecenttracks&user=PatBateman75&limit=undefined&api_key=ce36645ab9a1ec3fc807f3ef8ef729b7']);
    cache.keys()
      .then((cachedRequests) => {
        console.log(cachedRequests); // [Request, Request]
      });
  });
// on network event that matches the URL if true then I can decide to update the cache or serve the cache
// if it fails, I serve the cache
//

// const CACHE = 'network-or-cache';

// self.addEventListener('install', () => {
//   console.log('The service worker is being installed.');
// });

// self.addEventListener('fetch', (evt) => {
//   evt.respondWith(fromNetwork(evt.request).catch(function () {
//     return fromCache(evt.request);
//   }));
// });

// function updateCache(request, response) {
//   return caches.open(CACHE).then((cache) => {
//     return cache.put(request, response);
//   });
// }

// function fromNetwork(request) {
//   return new Promise( (fulfill, reject) => {
//     return fetch(request).then( (response) => {
//       updateCache(request, response).then(()=> {
//         fulfill(response);
//       });
//     }, reject);
//   });
// }

// function fromCache(request) {
//   return caches.open(CACHE).then( (cache) => {
//     return cache.match(request).then( (matching) =>{
//       return matching || Promise.reject('no-match');
//     });
//   });
// }


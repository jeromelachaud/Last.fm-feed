// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open('static-v1').then((cache) => {
//       return cache.addAll([
//         '/static/js/bundle.js',
//         '/static/media/logo.5627cecb.svg'
//       ]);
//     })
//   );
// });
//
// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response;
//     })
//   );
// });


self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open('mysite-dynamic')
    .then((cache) => {
      return cache.match(event.request)
      .then((response) => {
        return response || fetch(event.request)
        .then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

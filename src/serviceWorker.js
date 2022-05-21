// // importScripts('https://cdn.jsdelivr.net/npm/pouchdb@7.3.0/dist/pouchdb.min.js')
// // importScripts('js/sw-db.js')
// // importScripts('js/sw-utils.js')

// const STATIC_CACHE = 'static-v1'
// const DYNAMIC_CACHE = 'dynamic-v1'
// const INMUTABLE_CACHE = 'inmutable-v1'

// const APP_SHELL = [
//   'index.html',
//   'manifest.json',
//   'logo192.`png',
//   'logo512.png'
// ]

// const APP_SHELL_INMUTABLE = [
//   ''
// ]

// self.addEventListener('install', event => {
//   const cacheStatic = caches.open(STATIC_CACHE).then(cache =>
//     cache.addAll(APP_SHELL))

//   const cacheInmutable = caches.open(INMUTABLE_CACHE).then(cache =>
//     cache.addAll(APP_SHELL_INMUTABLE))

//   event.waitUntil(Promise.all([cacheStatic, cacheInmutable]))
// })

// // self.addEventListener('activate', e => {
// //   const respuesta = caches.keys().then(keys => {
// //     keys.forEach(key => {
// //       if (key !== STATIC_CACHE && key.includes('static')) {
// //         return caches.delete(key)
// //       }
// //       if (key !== DYNAMIC_CACHE && key.includes('dynamic')) {
// //         return caches.delete(key)
// //       }
// //     })
// //   })

// //   e.waitUntil(respuesta)
// // })

// // self.addEventListener('fetch', e => {
// //   if (e.request.url.includes('chrome-extension')) return
// //   let respuesta

// //   if (e.request.url.includes('/api')) {
// //     respuesta = apiMessagesApi(DYNAMIC_CACHE, e.request)
// //   } else {
// //     respuesta = caches.match(e.request).then(res => {
// //       if (res) {
// //         actualizaCacheStatico(STATIC_CACHE, e.request, APP_SHELL_INMUTABLE)
// //         return res
// //       } else {
// //         return fetch(e.request).then(newRes => {
// //           return actualizaCacheDinamico(DYNAMIC_CACHE, e.request, newRes)
// //         })
// //       }
// //     })
// //   }

// //   e.respondWith(respuesta)
// // })

// // self.addEventListener('sync', event => {
// //   console.log('WS: Sync')

// //   if (event.target === 'new-post') {
// //     const respond = postMessages()

// //     event.waitUntil(respond)
// //   }
// // })

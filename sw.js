var asset = ['index.html',
'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
'']
self.addEventListener('install',evt=>{
  evt.waitUntil(
    console.log('service worker installed')
    )
});
self.addEventListener('activate',evt=>{
  evt.waitUntil(
    console.log('service worker activated')
    )
});
self.addEventListener('fetch',evt=>{});
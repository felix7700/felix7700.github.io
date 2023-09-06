'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "82864f2472a220de26e4a18f1286885a",
"favicon%20copy.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "12c4f2d891e3f81383e8511fc3ba6ddb",
"/": "12c4f2d891e3f81383e8511fc3ba6ddb",
"c075001b96339384a97db4862b8ab8db.cache.dill.track.dill": "9c4d7d9e24776c5c8155429ccf91ab74",
"main.dart%20copy.js": "68aea41ed0f77992e73dc83fbe9643f8",
"CNAME": "5a3603af61fc32eae493a84f6e5844e4",
"version%20copy.json": "82864f2472a220de26e4a18f1286885a",
"main.dart.js": "361b8612a7a4a678e285b729f4dbc48e",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"assets%20copy/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets%20copy/NOTICES": "3d8dfb93b97b5870bee3e523bbf44bea",
"assets%20copy/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets%20copy/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets%20copy/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"manifest%20copy.json": "021dbdaa107c02b5895b36907e0e1fea",
"flutter_service_worker%20copy.js": "5155451fa4fd5a3cdc1e69182f7dd6e5",
"icons%20copy/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons%20copy/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons%20copy/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons%20copy/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "021dbdaa107c02b5895b36907e0e1fea",
".git/config": "de20c7cd110e915b33b299c9107c2ef5",
".git/objects/59/710cba177ec35c2d041f71bb03c16ce9aaa48d": "7440e205e573351dd2cb7bf45a04b30c",
".git/objects/92/87e28cf45a597f6166bbb3a045ab105f792c35": "fd26e0ef35cbd923fc74388b7ff325ee",
".git/objects/66/6d85b6c1ae40794067e8d4c429b39469330a9a": "765391c35202b9c7de4b3001a2e6d931",
".git/objects/32/845152508e4c507ff14b9c506fb6ded7bcd279": "fef1150d6624c62b1ecd9079c412238b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3d/65de046c3f716b471824b74285aa4bf40fe9f7": "e3d4fb8d25c2d0c27ab20b2e988b52da",
".git/objects/94/84f50354ac35abb76702e2437b21c0ec95ae5f": "0958a1049ea3488c3324b9be12e4ed1d",
".git/objects/60/5ca91562e71ae1f8b6a38950b592c44fc88bb0": "d2dfc4b047cb201a645027b5da0c0d46",
".git/objects/33/71919e199f9b4fe10e9f637367040e2c8193a9": "c1249ac2517a04f5b4d0046d133ece7f",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/ae/c5425f1ab4487315e8f077da820cd6d9917e7e": "16b94012f56d98e853bde14d58ac4d17",
".git/objects/ab/5f4f4e40256fe573d49e20e6485a5b30c74978": "7074ff01fa7dbb513aad14a33611c48a",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/40884a76b4cfac8a80971c4613a5f0b8cd8a87": "185b1d69f9e64a42a37b8314f2712b49",
".git/objects/f2/4ff66ca5e93371f026c9bcfaaba1bff4b86325": "8c1dfe8d0dfd650ac6a2644e0a28ac4a",
".git/objects/f2/2504239b15d89e6a2c167697e277e4c0438594": "a90c15e8d6f2c6eafb5deb4b8c6bd378",
".git/objects/f2/f56399b88a29b8486ef8efa60594d1d1e9f0b0": "bc4097948221dd42ecdd264fada8d9ca",
".git/objects/ca/dd31e0a564837fbba0f13c9ed0b780d73ecb13": "ad20d79eb5f9f1d9c366c1e6d670a994",
".git/objects/4b/e158828fdf3e23c7d6abe153c846824e40c296": "6be527e1b99d4243f3a1341ddeb1e4a0",
".git/objects/pack/pack-0ca39b43d00dd965cbf15d2325c280ee2cb02250.pack": "c34dc83b3f1ac4197488c346ca1008c9",
".git/objects/pack/pack-0ca39b43d00dd965cbf15d2325c280ee2cb02250.idx": "a46caf591042331e1dbecb5ec243b0ea",
".git/objects/42/44b088f3a4c8e50fbd8a8125a5d25e8d5636f4": "a6e3a311495522d3b33c25bf4f20c9fa",
".git/objects/1f/78a75a19733182123beb2e903dfdb5cf7446c6": "508541be2e5ed3630085f49b3b9778b3",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/4c/282cfe50e13e98df3af7e7237b5812ac68b2c4": "e5532476479a1ea34d8d05e293593112",
".git/objects/26/8754b0def52863c35cb4c8166742a3404bf3df": "956aa1a0cdc70f1bdc95c62a914b30ad",
".git/objects/26/c5daef799208a8242ba7854c18454c6dd36528": "9d512e6527c1b465584bbcd822dce70b",
".git/objects/81/c72b0eae9a843d2642a5703e49cbd51e3bed25": "ae33cb046e4a7c4a55309019ab5a2a6d",
".git/objects/43/abd222f4f79eb160ef224b115ecbdb8366c91b": "30621437c1705da7bbe6a9e4249522a2",
".git/objects/88/b0272ea9db4c85765fc9e1948bd6605981101e": "14c573d97f5e3bf9bdd0500d05c6f029",
".git/objects/6b/b849848f06fd41938e164f35781918a5e99e94": "0ee2c5a2209707fdc64cc9fe3834823e",
".git/objects/00/cf99eccf8ebeb2c417bcb5515844fe3dce101a": "45da39005f699ce7cddc15f872a9c53b",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/37/a23366bb68b1df86dedd930992576ac2eb3f47": "90186c51050711ef5b3ce45293e530a2",
".git/objects/0a/0ff24104e13f3f6e55b53f2cc7b63ba16d71c3": "2a7c3ee51e296ab403cd904f6ac626cf",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/a1/6643943003b3fb4956269571f3bf64e5bde163": "579b4e396c402fc6fd9ebe8d97692c78",
".git/objects/cc/3c2a9efaa3eaebdd74702fa35a1db3623cb0b4": "f8d8adfb97e120dd70f2a00e8b25e25b",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/e9/e3ce4786e349fed5ef25f7a95710179104bec2": "e72eac5a2c732995c90e2dd8ec441560",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/83/4104678329c911e2eda2cfa5e1fd9b7ba6e4a5": "e3e5ec58432ca04aedb952ae35771fc5",
".git/objects/84/49bb04aab0c436db4623d0255c9626f9f91be2": "1af1cf8fa229ea7253c82aff9dc6f3f4",
".git/objects/24/f04d3f13b25ab15c348bfa9f8b1bff7d95819d": "845eb1e5f1a1490559012556680a70c0",
".git/objects/4f/32e6b2898760c9b3999ff57dcb534a728eae9c": "dfb138610bae22e49112df6ad37c9139",
".git/objects/2b/151308dd4fad312d73f2e2e4262255f09c2a59": "702df7e610388f94cf295e33bdf41b3b",
".git/objects/47/eba0e04e005549176f3e2758291ad0d3e977c9": "087468ddf92f1894c5e8db4ddb73f63d",
".git/objects/7f/79e7233b841a345f8268f06450ead3f8a50c3a": "b70a209ccdb407b903f7e6cac753d7cf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "a6c0feceb94e417a34f4b56fc534c394",
".git/logs/refs/heads/main": "a6c0feceb94e417a34f4b56fc534c394",
".git/logs/refs/remotes/origin/HEAD": "0c32c0e2d91d5f405a2fce48441ab24f",
".git/logs/refs/remotes/origin/main": "c93150140ea553ff198746fdc06fd336",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "25d30e8100b539a99ca315cfd84a5e1b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "25d30e8100b539a99ca315cfd84a5e1b",
".git/index": "995f171aa312f8ca0f22d5e90044079a",
".git/packed-refs": "e541acc45f6919443c79ff070953f663",
".git/COMMIT_EDITMSG": "abc4f0f38a75cb4da257343345479a6c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "0233f5abd5ec31736c8e6c1c085885f2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "092b276032bc0404c11de6fd5683df6d",
"index%20copy.html": "49d0d7c179ef15ee84479bbd23dc46ed",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

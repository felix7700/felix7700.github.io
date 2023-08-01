'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "82864f2472a220de26e4a18f1286885a",
"favicon%20copy.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "4209bf037e300f1a922a1ddbd9981017",
"/": "4209bf037e300f1a922a1ddbd9981017",
"c075001b96339384a97db4862b8ab8db.cache.dill.track.dill": "9c4d7d9e24776c5c8155429ccf91ab74",
"main.dart%20copy.js": "68aea41ed0f77992e73dc83fbe9643f8",
"CNAME": "5a3603af61fc32eae493a84f6e5844e4",
"version%20copy.json": "82864f2472a220de26e4a18f1286885a",
"main.dart.js": "bbcac8b2cf2e58749e17741dbb5046dc",
"flutter.js": "a42c95080d221d30d7c051b448da6498",
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
".git/objects/51/0914eda542e31b9c59797fb8defe8236341336": "2d9bf012e5a71715e89ad83bca761416",
".git/objects/ae/9df689e8f00e19ceee11b676ade447941ba28f": "154dda0193e50ffc04f64aeebb5c621b",
".git/objects/ee/f78981b983420fbe5854bb4faa164b1e6a7b75": "aa4c6140fd8f98996f6b346b14c5b81b",
".git/objects/4e/a8f822c52b350f2b3ab7e114e74d8fdf543191": "783ff07db641dfebe3173ebda6bbe461",
".git/objects/pack/pack-e7b354f3a4916ef3d9d366871cad5a2007909f54.pack": "6332c6320256570f29071edc25c534fc",
".git/objects/pack/pack-e7b354f3a4916ef3d9d366871cad5a2007909f54.idx": "9547007cec2fba80f013e78f7bbe2f4d",
".git/objects/87/03fa15f123fc0869e3263e9b1669ac99ea54a0": "02cdf2b83437c93bc682ceabdd5c3fad",
".git/objects/06/d88902c98f33ca67a8b5a8abf59aca13083362": "74ebb35b62992179cbda1d32e4296310",
".git/objects/64/2b0f43f437dffdb7d8d8e05841c168b8768bd6": "3a1c9f21b66fb7df4b94a0027822330a",
".git/objects/d4/a59daa4b343c1644ce8e4de3b378b2cdf959bc": "afbd812fbf7fce8be8a6397af8c0e397",
".git/objects/d2/9fb36e492d8b02755972ad7057e9f9b0b9c7d9": "7e19c045ef71e356b454fa7531c1a2df",
".git/objects/f6/a628dbfbed3f0ac8cfe71407f7d8ea288a4d73": "55baebc4e66fd3f231b4cc65143487fa",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/2b/0b2c2195c3eb089f3f02cfa2e7229de88ecaa0": "0832290b12dbf3d7393b88a2be870ab9",
".git/objects/7a/771ddfa52354b6b26001b8132f8cdb28f73e38": "384588ed9ea8f12ae58cc600eff34aec",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "cfd5bbace62026f85b909a34d2a7bf6c",
".git/logs/refs/heads/main": "cfd5bbace62026f85b909a34d2a7bf6c",
".git/logs/refs/remotes/origin/HEAD": "70383a174058d453615ec0f69f2aed24",
".git/logs/refs/remotes/origin/main": "30b3402fe5f79b9a598a3271080ec801",
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
".git/refs/heads/main": "fa9f1bd2b6d56316d780211bcd23f29a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "fa9f1bd2b6d56316d780211bcd23f29a",
".git/index": "cecf471a24c7050f71ce0d02a0e1ee11",
".git/packed-refs": "57a626749623df980cb89a6d9358d04f",
".git/COMMIT_EDITMSG": "45240c8222d384626336ac41f441c10f",
".git/FETCH_HEAD": "7fef5a76ebbace09ec2d6343a05a98e0",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "3d8dfb93b97b5870bee3e523bbf44bea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"index%20copy.html": "49d0d7c179ef15ee84479bbd23dc46ed",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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

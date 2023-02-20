'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "82864f2472a220de26e4a18f1286885a",
"index.html": "2b457615c859b5ae9e018726005f472f",
"/": "2b457615c859b5ae9e018726005f472f",
"CNAME": "5a3603af61fc32eae493a84f6e5844e4",
"main.dart.js": "1ea3395eece3e72194fe6cc1ecd41d48",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "021dbdaa107c02b5895b36907e0e1fea",
".git/ORIG_HEAD": "af7d334b3e5ece7a6ca3763488851821",
".git/config": "6b12ef1c6dbb5092199bf8fca7182050",
".git/objects/95/94fca68fda5112a5880f646947125405734aa1": "7aa907145a2cf254ef63491496c7db36",
".git/objects/92/8198dd0d845cb1e2c8498197ff722382669416": "027d9a0973b0f3d4c266bf21018c4f88",
".git/objects/0c/8e9e2232221d2a27ef36cebf0d8a273be3cbb9": "dccfd6a145fa04ff88238bcd46a2d7db",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/573ed49b0828471baa67a734d5ebe0aed9298a": "23258843333c0da9054e754a802aae4d",
".git/objects/04/2046561b10e236304c818cf5c46893faafb37b": "105d65a68dd1ff9635a568519bd07ac2",
".git/objects/6a/d8615f1eeb7cf818809c604b4b2c281836a45e": "81428cd0b4691bdbb4074de67b16296b",
".git/objects/69/495e258b07aa5180d56eae49b4a78327408dd6": "19f82f0759f3860c35c2d08456176264",
".git/objects/58/7d51f5bda0cb99e782a5a5bb5acfb1d5a41cf7": "c6268b69c88b30c2868718cc6ecb4a8c",
".git/objects/58/bba632ffef60cf64eb4d4e63cfb186e8599d19": "da3eae45736352261ce32daecb430757",
".git/objects/93/d4f94a952dd463883cda03634768c36923f6d2": "61cfcd193456bbe40a543440f080b84e",
".git/objects/5f/a2433a43b3f7595b3e7e9b910a1164bf1552cf": "914fee3a216a418ff36e0239af8d9f9d",
".git/objects/05/bdd2d7bc5c423b82aabec3272b929c3f06971c": "846eb4c84c5359af101b076bb0c4a0d8",
".git/objects/d9/b048d5791d99b8ba9a70c2f0bb71d8707aba94": "e636de81008a1ce4021b6f89e7c4acf3",
".git/objects/d7/c0a2319b49891e3a9490720152f36e4756dffb": "af0dbcfd530360bc81c109bbe6825ee6",
".git/objects/b3/41b0d9d28e594700eb3b3379ff6e89013685d0": "db590637e9be4288c021b1752e71e5cc",
".git/objects/a5/8cd981853d53e6bedd9c72375432f291ad106e": "ab7069eb04675df09c56ea883c9aad4e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/2eaf4ff456f84f304f603f0840dd0f67ea60a6": "28f277fc3511acdbb8a63c07df06a1c5",
".git/objects/ae/f4b6022cb5f9a1378407e8b33769a94492e676": "1c8b3f24530b4f0cec1125262f6a5e79",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/5913af97d3c38dcb0957dca93e62ed99102fb4": "e94be30b3d044753fb39c0943c0148f3",
".git/objects/e2/d9eda7720e3bb840a53934ffb28c1d9c29ef3a": "60ff329f890b0b9db167a5445b6319b1",
".git/objects/f3/be2a00bd1cf91a99579ca0965bc20f3a6b9e55": "af36697acbab517dce81025e2de55ef3",
".git/objects/f3/1d149e8f2c7f2c706fce521f55e0fdef1a2baf": "45db614b904aeaa084baa196718976b3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/a90ceed52fcb892835f18c2b2983d5be852e37": "d3af21dcdb60088a6f74a37bc80b85ec",
".git/objects/f2/91f965d5745a177ba2838289be46d51dec5945": "7d4740906de88e50b433f48fda6950a4",
".git/objects/f5/e6743dcaf0ff1309e82b5e5a532477d82a2b8c": "68d35cad5b4f28206b053287db6056cf",
".git/objects/f5/8a794b3b22939ad47e170af4a96270e2692b30": "887d1070da0edfec829cdf8277941bb2",
".git/objects/cf/ea74847689913e30ff502f2d9b6cc652ca744a": "df3d7510c035d2c0e51948b0f4b35f55",
".git/objects/ca/0b0fedcab98e312841baf58eb5cd687472c487": "9bc5361b846a61c7ff02f6b0165c1212",
".git/objects/ca/ace2e5acd3c698a0ba29304aab368c3953ccad": "488859deea04ba7ee87e7204dd313d88",
".git/objects/ec/9a32728e4e44e64255b46991bf0fc6509de21b": "b47003619e0205b3073bb060c9bf75e9",
".git/objects/4e/6d942fccdc2f0db9e3bee6c4e1fb3eeb4db976": "73195552b4d621043ab8298c66f230a1",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/272f73f49d4bf98abdda7c07dde8eff6945936": "82e8e6e42091f558cb37f2a1641345b5",
".git/objects/29/4010d3257cbc3acbb7c7c274ca22816ac97be4": "ba35f8792e538e4b0349ef1833b5384b",
".git/objects/7c/096231befe4fac8b55d339cfeb461062c3369b": "1141f0e4b4bfe8c42437f4844925414a",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/16/bafb5ba367852696edef3d99cb47266c7f2d9f": "56504c05468c48e6613abbed69772266",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/e9b82707450ac0146ff03f3e931a05b8cbb280": "cf9c9e2190e141584e63435f31c6057b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/017428d3b467c7d8eaa588b4a05676f31598c9": "df716954d49bba42f4e7589eb0b5fc10",
".git/objects/86/6c1c558eb050ba4d630a773afc70dd83c76b2c": "59cb6265dfd223a72f6e939347b1ea9e",
".git/objects/44/91dcd90076e120e0ef937ef1b9aba243c33eeb": "bb6c8c40bb8282efb2f5f21c28f11590",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/54b82fdb3b0e9dddf260a282e1101a18a13293": "fb6b58708ed0a6b47492f226e1683e38",
".git/objects/54/ccb1fd584deed8a38a96fe27e6527fd2129a93": "ff0cb21fc06bf84ea9c19a0973aa4faf",
".git/objects/98/c8abcd4ca16c454c38dece38899537ff10d29e": "fe3e5185b16d10b65f39c4619a114524",
".git/objects/3f/8b2838ec0372a3971191b6b5bf6dbcc8f3a14f": "1722299c9a2b1784a0a338640e6a2942",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/6d/f79894ab2b47bbe9300b1ca7adba6e7f0cdf75": "a124b23948e7537b366056a9c661796c",
".git/objects/01/5d353168e5fb003cc12120d95a0bf7ac21d1a7": "7c49087403ea303016c83c40055d2e56",
".git/objects/06/9aca52427c8aa2a1053f0956c3b8162d2aede5": "377ff9ff9cf3b095dda92c3d5411c8e9",
".git/objects/06/0ca8f52a9f4c9e76de824ca89d1440d85ea787": "45087b38b8ed6e6eb325c3a73d2e6a7c",
".git/objects/52/985154bd6ff25af0e39e6d084814ed7422360e": "dee70c2f1b485f138e1b317055a4fab6",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/64/fb41e1363bc9a24ee1fb7d385b32691fc7a5da": "63a30049b864cf015aef011299365b59",
".git/objects/bf/c63e882eb50cb3f32eb25dbfd877d707be3065": "1283a3857ba8fa0e6008ad75e7e0c93b",
".git/objects/d4/9ef1fa882f3a31f3c6ff5c10cc0a6bfe34d864": "bc85752012c3ef65fba1e26492a92304",
".git/objects/d2/41e777c0292f4f40f8d07109730971d5920cf4": "eec4502143af4ea51776b3d74bd4ee1b",
".git/objects/aa/e60ee1f413f0c218179f4f025263e53f99eafa": "ca779bda0b2582d3fab976d33477a979",
".git/objects/aa/5a672e410c0bef8ebef5477a00915919e246d6": "ad63c3c9ad9b6019db03ff6d08a758da",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/44ee3d3af1a95c80dace7b894a035c6add94c3": "04507fdbab23af9a399eae5ef026ba0e",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/6e2edbe42c3a8b0083250f85ffa16e17043f0d": "ac9521207232e23f484c3de5501a931a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "0962b9188afe4ba188daff8ea5dca344",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/c23857a0fcc13c703a466f3a4e78dc87201a8b": "106809ab36f45a5e669c7db6fffc9d46",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e6/e162c4f21adb12351931a40e1441aba51912bb": "701167dba30dff28a4fed1012951a440",
".git/objects/f0/63a082a375181c5aa93e4fc428dc0bf045873e": "fda08473b68de003cfc58675d97897b8",
".git/objects/e8/68b13abad062ef14e5d7764d420f54b5cb047f": "16a9fc305de31af18c94d1d42a1ff01c",
".git/objects/e8/944d08cba319d8c732db593f356ac598e90c91": "71cbc0f20d24491e803cb4a854ff232a",
".git/objects/ff/d9dfa9b3d435c4ce3fef4d03ed447bbe37dd11": "f418ca2b0d85c26d816f3fcff590e2c3",
".git/objects/f1/22a3b9689086d2521ef3e8c10276ecbb1b429c": "5aec2ec926db50a2c2993c7b0f2d952b",
".git/objects/ce/f1f8e4371d6dc44c994315c5ef8136840920f0": "7463b8e7aa7f116dbb7f33a7ec24d7de",
".git/objects/ce/1d335e2b4e56e0dbb807513198fa0a4aa6c5c6": "2e145cfd952041a6029e3c33180296c1",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/00b78875c7208ae9d92a30803cea614d699368": "06c2931993be8a46c1157c5cdce57a3a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/17c67c7b99a30f532aa564d5de7f4d2376a774": "d80abb669a5bcc929f9bfab7e51fe19e",
".git/objects/77/a10c8af017761310fd1e0ba09ac6e21d932a62": "81df15e0f4ce0224058b3a3df5b10f90",
".git/objects/84/50fa1a0147b2a84b5615622f4b4cc1802051c6": "2237d9eae46d8104a877bf67d601efa7",
".git/objects/24/64f3c06e4401b9375787c470b5121cb18ab3ef": "c2fb5c1f395c9784091385ced5f90761",
".git/objects/23/246c69092da07a3b99e5f98937ee59e2a3be3b": "2be1d650df6ab552b03da0ed626b46f6",
".git/objects/8c/da241d1dde20d27688e061b2a8ff96249640a1": "2d86834e0c5620b73726460fdc85282f",
".git/objects/82/5bcf718944adf867fdcadd3c72bbb26c9df3da": "7a7747292de2ff7590fe12f6a55ebe92",
".git/objects/40/258903147c61b4a1b5b02369225a9862cdd958": "c53a627222a46469af4d3ac594809bae",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/78/fe64ce0e814e772bdd6d033a21554951c03499": "db5041cdd8177d9eaf1b3618b0fb75d6",
".git/objects/13/4768e1fcee80276493bcc9205ac7d7e2479e0f": "f0678435bdcf17b52ba0986a6c1150af",
".git/objects/13/0cd741fcfd78058f4467240f2e0ec970736c4c": "de7494b12080fcc4d2cd51ff7c22ec4f",
".git/objects/8e/985b532eabd2cf568e997778cb3aeb1fba1c0d": "cfed528b0535b34742062ae450d02cca",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "646646a09163c08bf0d1f80f3aa7ebd7",
".git/logs/refs/heads/main": "8f3739c978a1ab1a36af4e800dedd399",
".git/logs/refs/remotes/origin/main": "8bb0b0dbf825f1edb50e362f610aa0c8",
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
".git/refs/heads/main": "af7d334b3e5ece7a6ca3763488851821",
".git/refs/remotes/origin/main": "af7d334b3e5ece7a6ca3763488851821",
".git/index": "bd477424b190a9fba4c250c65d6d58ae",
".git/COMMIT_EDITMSG": "4765a8b653a9588d76bc1db3436e5480",
".git/FETCH_HEAD": "4dc2d40742dd21b4670725552868e6cf",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "493ca9e397be0465c715edc87bb8d633",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "9d411f488fd8b33f8d05552fc1eae452",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
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

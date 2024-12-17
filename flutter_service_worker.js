'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f8a586d86c4019b907c1d53bb6df1ff6",
"version.json": "f87e4c94597958d2930a763a16a7e3e0",
"index.html": "b0abe0ea1280a01f009b8c572b121f18",
"/": "b0abe0ea1280a01f009b8c572b121f18",
"main.dart.js": "eb4c6ef5a8348b779d599f88d97788c1",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2d2d5a4c60aa9fb171f8cd80a20d7bdf",
".git/config": "759a04a3f8ec572d6f93ecf4a2b1c50e",
".git/objects/3e/792a19b85e0dd6b6faf9b3ef44ed6cfdeb8ebd": "348d3e8dd32858956e838138c3045d42",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "60265b784d2ea959fbd56f66a72231eb",
".git/objects/68/27ac6d0928a1ea7b46e890cfe63e6d3ab72d84": "668fbdd946e680083d5f76b6f1bf1de9",
".git/objects/3b/85092a18aa04f652bc1bd9aa1f830caa99bc13": "78d7d1c4ce92a6394f3e9b76252a47ce",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "b2e6a63e9a41d8d133ad1e7709fdeddd",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "20d00032a58a8080d0edc77028918a9f",
".git/objects/35/83ada06bd9b3cbbc5ccc1b3101f03aa3894af2": "413aaa6e85b0a03ceb37f94e81190957",
".git/objects/51/94ed8c4eabec68970161077ec2976da64d6f98": "dad83ae97e48fc505ccc4ce8602a3172",
".git/objects/9c/c476cffee24494f438cbeb05a2c6dfcadcd2b6": "3fb69dc03e23a5cf9f9f3047cabdaa3c",
".git/objects/d7/329de5abe03aa3b3499cb23bae37a442fb9b5a": "72c263848cf50271d7ede3ddda6ba89c",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "7e1cf6fc15fda904171eddaa85ec5f26",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "cbecac4fb9c88089ed5f2f6a5be0066d",
".git/objects/a5/53ffbd497574941e4a78e40ed25139a3ae58d6": "a61b039b2b9e4457935eeb9801f70d93",
".git/objects/bd/1a5be1e3ee7ed6d92750abecb0c08ae499ceb7": "e2016fcdfbb1162b138e29cdf0e7ecf3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "d74964fe2aebc8ef610cb0ebaed790c4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "57482aedcb178afaf8187207582d4407",
".git/objects/eb/faefc95d50ff0b60e6c5b0c1938245a33dac49": "87ed77f8d5469fbea2c13c5e1d4baf4e",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "d27a421d02da140ff51fcc9bec5a14d5",
".git/objects/c7/d8cfa3978ffa388ca471970d332c4267663d58": "ba0b7fce71f99c82d37dee8c1f157ee8",
".git/objects/c9/8d95f2b2d5f416d7fee0b3ab21426ecf556a9f": "1f6aec90fafdc8c2a7f2451a225c980a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "e3fdd07709f0b19d8658a9719f12f094",
".git/objects/cf/f5547936904df9e1fd73febcaf7ad99d362a05": "aadaa12232485ff50c0c77411bf36388",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "d1372eb2da86b573cda5b10987e02069",
".git/objects/fb/ea61f4626b46056fd91fc3c3252201d4003a1a": "b963aad78cd121b6c88abe28997b5017",
".git/objects/18/0ac75e3841ad2f891ebed6db5106aabfa59aa6": "9374324fcecb05da5cb97efd8ca619c9",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "0dc6d358c11b5314141ac73123532e96",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "d82cef682daa26d71e0291eab359ce32",
".git/objects/7c/e2dd0f2aeb5c3724e612b43c32db5d346a1520": "fd93441725151434c83532f87e2c0d6a",
".git/objects/16/6c0b2282957e47ccbb1f43ebda30ba22353b18": "4a5f87b7cfac2232b1a630bfe63f48a0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "63b71fb81e3ad3e4beae6d7cc2c0cdf2",
".git/objects/19/dda624840216e9010d5355832ea24a4de91b4a": "9a9f3dedd1994e1f7f030d62c58da15b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "a602e45dc9025aab5274d613822835b5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "d3682a41b53b76774dc422a4488225c5",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "0b873857b258bb5a39538f464c9eea4f",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "0682024e9cbaa939c89c7cdd1b383426",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "0ed2f0a95bda44ec0bbcf64719003f86",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "26b996792c50aa26ef7fc23abd9130b2",
".git/objects/30/0a219c42d0bde9b61b7008857ada07e5cb3bee": "b3f1689b90daf102ea99a62153c4ca78",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "9031ce939267d740886670abbe1f9e2d",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "8b9c7d0b371afb873b6c7fe6f4caa1da",
".git/objects/55/137b5898ab875a91fbb3009d81732da5396a44": "12b8401c7a7d9b8ad270fb4678af529d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "b5f549496af337860fbc6e640a7dbce4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "743e7c2b0c1bc7f3aa033b156bad1aab",
".git/objects/a0/64405e23bb4241e5b3f5cb0a550c9cc7e02e07": "0b361e491edf9fdb06858e97d34afc8c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "d3b21bc2ab8a790ed14b2b47be4e34ad",
".git/objects/dc/00d12b7a1b386e60e563d805177ce5125f7aac": "e2a25226074e68475e21b9464c2d8002",
".git/objects/b6/8a2f6a6362ba2a387a8d5abb7fd364b7d299a1": "4d0f809102309e658456b0d23d70af0b",
".git/objects/b6/708f52534081ec8f5ba4a2c6fb18d1437d068f": "95d314cd4475464cbd35e94f63d580e0",
".git/objects/aa/d53c5fcbbf8313cb6177548eaa2bda7342065a": "038e45723747db60b62935ae021f89d9",
".git/objects/aa/ec8dc0099e4de73674297718fb7492075a0f61": "ef91a22380bde3258154cb5d765a3c79",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "55b9cd341cdb27ebb92439f73e9ef9a1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "680de322cbf53ae98c1ea95ec32d207c",
".git/objects/ea/be8d145bfd1f4ab513cd0d538420ba47c7e225": "c031f1bbd4744be7207266bdc4bccee6",
".git/objects/fa/bdce3fc15f51f8532b88d9583e0ec1740b424c": "e103b39c033d510a9ee94813027721fb",
".git/objects/fa/e93c4744869e3ed78fc8dc91c84ab7cbcaff55": "78abf76d419d4c67683f8d2f42ce9b21",
".git/objects/fa/eba622cb3cf4763aaf727ea7b42ff547b75e34": "2585ab0785862d8975c912a5e78f8527",
".git/objects/c5/9b7aea576a26c22eea918bdc9156b9fd67f236": "e88f013e340653bd597f0d45c7f03579",
".git/objects/e9/e5edaeaf38e7dfa70417795bb466f6a1494d29": "7c1e089e6189a590b29d4df9fce146d2",
".git/objects/cb/c0736966b64ff47e3e8d9fbedbd7dde0df398f": "04555b1eaf2f245272bc7abcd4a8ed16",
".git/objects/46/5015cc81c50b72d447adf9b307e3892f86fa01": "a195508ec65b3113ae1d58f6bc4da067",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "c574bbd475039136f93d34742ba9acb8",
".git/objects/2d/10313b1bde012bc165fff0ffcf7cd75e9d6ce0": "3b8f29d8f15967225ee0ae2e3e17c360",
".git/objects/77/dc2d5e9e774906bff30fa36047fde2d29d20f4": "dd522ee2fa5661196a49b6a390085f2b",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "9b125420b76c77ebacfdd66faf90655c",
".git/objects/24/b40cf552ebc744d75559f6681a7ef077da4f17": "419157848a3a724d4a518159b638de7b",
".git/objects/82/42090a0aa6d593a5775265c734ea9b023741bf": "371cba64dd495e3cdc6bff14f1e671bf",
".git/objects/2e/a34518b4cca8c2e301f7d5350f05ed59e05942": "81f10dd9ed67f566ae16405e4ed2b11d",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "ad7be6049fcb5a6f7377f70d40953bd8",
".git/objects/2b/49745e8a684d6f259b1b5eeb4c8b6b48da4394": "83f8e1872474f310a7a1ad3170d602fa",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "21746a89679c78268863c9d649588a8b",
".git/logs/refs/heads/main": "21746a89679c78268863c9d649588a8b",
".git/logs/refs/remotes/origin/main": "c48cadc9eaa30e5048d6195fb92522c1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a0e2f3bb3312aa3761c28535dca2ad93",
".git/refs/remotes/origin/main": "a0e2f3bb3312aa3761c28535dca2ad93",
".git/index": "516903391ca1914319061ccad285f5e1",
".git/COMMIT_EDITMSG": "e469462bb9432ae3c65b96c00fecdb9b",
".git/FETCH_HEAD": "c048a1897dc24a5ffa5596809a595e8d",
"assets/AssetManifest.json": "c43f0f4d064da187994be3b7c229510b",
"assets/NOTICES": "54f8feaff9d83dd99a83b2e3736ffee3",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "7a63205d4b6dfda2b600a7e8b0b012ce",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cd8c08ca023e32c03210f41a3ba4a457",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/Finder.png": "95381e5a3703402bdc00f7cce2d0a786",
"assets/assets/images/App%2520Store.png": "8b691dcfed8c05d2b36dc4069d939cd0",
"assets/assets/images/Notes.png": "d0c9af200665e5216608895950de45f3",
"assets/assets/images/Chrome.png": "197650b946e59bdea2b875e3cbbf14a0",
"assets/assets/images/Photos.webp": "ba441d6b2588c3814b0fcf503cdcc5fa",
"assets/assets/images/image.jpeg": "0c962d93b7a517641c7d87433c54dd85",
"assets/assets/images/Music.webp": "8a08277def8218a3a4e6db07c8721fca",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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

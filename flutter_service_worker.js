'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "955154e7ff21e623dd41d1cac94c6f48",
"assets/AssetManifest.json": "e31c4e0f4183a78fdae1b4be0c065f77",
"assets/FontManifest.json": "dc4c06ed84e17eb6bcf401b85a2a4ae7",
"assets/fonts/MaterialIcons-Regular.otf": "dd21c1313a2edf3cdbcdfd4eb5c395d6",
"assets/lib/assets/01.jpg": "05cf6401965aa76cbe88b01854785340",
"assets/lib/assets/02.jpg": "94e95df5aac06fc2e09c3e240c2e98d1",
"assets/lib/assets/03.jpg": "d167a645fb2c6bdb6f706596f8d9c67b",
"assets/lib/assets/04.jpg": "e488c12dba40e2699bdf49713df5dd0a",
"assets/lib/assets/05.jpg": "dd8e69744c7ebc4ebd60fe28ccd1021a",
"assets/lib/assets/06.jpg": "e268baaf05065307a28a94ef799d490f",
"assets/lib/assets/07.jpg": "438703edc1557b29846ea0cd713065b6",
"assets/lib/assets/08.jpg": "f1a4600b559286680c0ba119c3954734",
"assets/lib/assets/09.jpg": "758ebcefab2596c45151f762cb72bd7e",
"assets/lib/assets/10.jpg": "6b6a9fd1ca303504e467bf728c96dda4",
"assets/lib/assets/11.jpg": "dc2dc8d29488396a45a4668efcfd292e",
"assets/lib/assets/4x-Survival.jpg": "ae015c29c9549212556315fc2e27e02a",
"assets/lib/assets/Blog-1.jpg": "fe9cb79819b901315f488c5834d0311f",
"assets/lib/assets/blog-2.jpg": "8f3dae24787e65bcf5b68a87fbd90744",
"assets/lib/assets/blog-3.jpg": "05c05c2065427b4796b5dc898d225e2e",
"assets/lib/assets/circle.png": "0fd6be9207bf313761cef82a9aa333b2",
"assets/lib/assets/fb.png": "60ace5feac0e51ee2c7a12455a651d19",
"assets/lib/assets/ga.png": "7c3c7779b8f46d20ddb507d5195a4d4a",
"assets/lib/assets/Group%25204734.png": "a0448978ad97bd8d84c19d5c687a0065",
"assets/lib/assets/group.png": "ef03068c11a133e37043907e8cdb31d4",
"assets/lib/assets/insta.png": "6d4e8f2e7b946483b6374ed9603bdd63",
"assets/lib/assets/line.jpg": "bbc76b734ad9dbbefe5bb6b69a58cdb5",
"assets/lib/assets/line2.png": "3110c2b6145ecc4e0888f8b91fbcf6b3",
"assets/lib/assets/logopic.png": "d2ecf2be07a19ae37f45f6b004f36106",
"assets/lib/assets/m1.png": "6199901d043bf0916cb01027b2f6bd21",
"assets/lib/assets/m2.png": "1b384a11b3f07d1920ea72867d066c9f",
"assets/lib/assets/m3.png": "6b9cfa921c5ee84d4cb3ae2923562114",
"assets/lib/assets/m4.png": "4cdcb743b8dd1b53e44f8db162eea7c7",
"assets/lib/assets/main-banner.jpg": "814d0057c19960b7ecfb731d4c95047d",
"assets/lib/assets/NotoSans-Black.ttf": "4ae705e1503cdbbd516dc6b636829dfc",
"assets/lib/assets/NotoSans-BlackItalic.ttf": "f91e8fe157eef8f8996f170b0366d22a",
"assets/lib/assets/NotoSans-Bold.ttf": "24d5e8ab973d38b3a7e30bd632bca199",
"assets/lib/assets/NotoSans-BoldItalic.ttf": "074e53d6c18a38856bde494e7383340e",
"assets/lib/assets/NotoSans-ExtraBold.ttf": "e28fd1ec0d14930fbfd9ab37e6c589f5",
"assets/lib/assets/NotoSans-ExtraBoldItalic.ttf": "eef14b6d868f3560ea35e1ed4e821df4",
"assets/lib/assets/NotoSans-ExtraLight.ttf": "89c53a190bed780f35a3cfc867b513db",
"assets/lib/assets/NotoSans-ExtraLightItalic.ttf": "2b3cb9dd3036bf2bab4ee8a0fa242be3",
"assets/lib/assets/NotoSans-Italic.ttf": "faadc42c392f92b754b2a4322c5c4cb6",
"assets/lib/assets/NotoSans-Light.ttf": "ab0f4c473f235d2deb0567d380784263",
"assets/lib/assets/NotoSans-LightItalic.ttf": "768cdfc650fc1d771bb6be29f1729588",
"assets/lib/assets/NotoSans-Medium.ttf": "3bd7db14b9378adf7827b23af6f67501",
"assets/lib/assets/NotoSans-MediumItalic.ttf": "ddf1ccaf678de8f9c307bca3520554e2",
"assets/lib/assets/NotoSans-regular.ttf": "17b1a4cfa1a3397412f16eb1e271f44b",
"assets/lib/assets/NotoSans-SemiBold.ttf": "416842a7eed4bbba1685899d0b5a4046",
"assets/lib/assets/NotoSans-SemiBoldItalic.ttf": "16e225c87e28f6dae9c5ee69bbebb800",
"assets/lib/assets/NotoSans-Thin.ttf": "7f0f291b0de3e78a372a32717ff88a70",
"assets/lib/assets/NotoSans-ThinItalic.ttf": "20cbda03be29b3481bd51b53019102a3",
"assets/lib/assets/OFL.txt": "053f21bb22e6d0bee98b6610ec19d521",
"assets/lib/assets/pic1.png": "9fc013273883442d32dbb61d22db3625",
"assets/lib/assets/pic3.png": "e8f13745d053258a8c33f47d5a7b1301",
"assets/lib/assets/qr.jpg": "d67e9b9b4813afb8ec578684977fcb5d",
"assets/lib/assets/rename.png": "7e850bbb6a1e5570550a55db1fd33850",
"assets/lib/assets/risk.jpg": "6883a477335323809eb49a30d747a6e5",
"assets/lib/assets/small-blog4.jpg": "899c9e69cc2a93c3ecce2e2fb8a73906",
"assets/lib/assets/small-blog5.jpg": "e42a71db56c056df0517c9557aea1c00",
"assets/lib/assets/small-blog6.jpg": "623afa018f02bf92be0260bac8e2e307",
"assets/lib/assets/twitter.png": "b140ca3d5f022c5dae356d9871a02ad0",
"assets/lib/assets/violet.jpg": "7261c1b61303bd071fa53f6ea74037ef",
"assets/lib/assets/Women-wellness.jpg": "ae54a6c1bfe28078a78080ed3f89a1b7",
"assets/lib/assets/yt.png": "85c197f1a4ad8c57edcddfff43e13b26",
"assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "287c7f6e73cc1c2dcf5a3201c8e8cc5d",
"/": "287c7f6e73cc1c2dcf5a3201c8e8cc5d",
"main.dart.js": "72f92540008afa820a510bdf20562c5e",
"manifest.json": "de9d930d39a95b66e9c6d36e23069c8f",
"version.json": "08cbb8b9bfeebb8bddb1f503a0700232",
"web.zip": "b8f2ce2492fb3b399878bb665ed9665b"};
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

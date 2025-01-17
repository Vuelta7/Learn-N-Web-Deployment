'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "11262e31b6c0646e01503a2d1c83da14",
".git/config": "3cdc9ec47cd17d9ffeb4318d21d315d1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4506f34933d07e632c8d1ec7f404c0eb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91374eb4bb5d52e0b554fb31a0a102e6",
".git/logs/refs/heads/main": "5078961fe4ec1ef95316598d4848eb50",
".git/logs/refs/remotes/origin/main": "aa8a42156ed1c2e161bedc69d6ef3578",
".git/objects/00/a0caab5054fd152f9b530918fcf968dcced19a": "1a7bf9fb9f2184896b099261d30412c5",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/08/c112bd54e6cb72b11bb7408ea09540ff15b6e2": "db1850a6bba00cf96e79eee45e42817f",
".git/objects/0f/f36640f58c5f553b9d6b45d995e11be41b2585": "9ce05c9a15732f8c3ff50c8961e24239",
".git/objects/15/c1bb64daf26318bee7e49d14a731ba90aaad03": "d6de6c6ee2d653b83fee00d3bf2d20af",
".git/objects/19/32f6d9c5d965db436e158427cca3989da8302b": "1648078445fbc38ae6018e0089a12b76",
".git/objects/1a/b5a7d0e6ac44a97df712363aea8ad3d1554220": "35c6ad2f93ce282dcb799047698289b0",
".git/objects/1e/13d39652d08c8291e4f60fca7616dd852b314a": "e58b6d5ff5c8f194decb29a234d2bbd7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/3c28ce3fb27bd1f6a89a20b9b66c63e876e9db": "651e4c61d75ddd02112b52ac9f17f067",
".git/objects/24/42affbf6570d23c0b2b270cca8d49535df27bf": "538d932d1b9806e9100542b30c19db99",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/30/24fddeb8d19ecf30b57c6fa0d3a44b37bef5fe": "56349467c454e47b9219c4bee76a7f08",
".git/objects/40/205b40df8745d5e1ee72ac6ca03446d48bf2fc": "44ac152018df616bcb475076ea373ffb",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/d8f30ce50f72322f4c2953e3718b0d1dcf4e7c": "448dd8d5d76250da9be33d37009fc3ae",
".git/objects/51/07b30bb438f02f4d0acab3e16f99c1f5ac1614": "e554a46f6627cf318b7bed724428e331",
".git/objects/54/fdd57829b433d386289396efd0c3495bd21b7e": "5c648531df58b31ff63edc7f6ee0b0b1",
".git/objects/5a/1c3010008587dab5010c61e69d5b5cbd74c0c6": "3bfdbd08a16be97bc2baba54d77b6a0e",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5f/2083988e730267bdd357d66f1752b4d00a957c": "c25289aba82842bc981cfb16ab897f1b",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6a/0029c16d737c4ccdf374aafd33067554dc60cd": "23cc6bc68cc582caffef2933a366acbb",
".git/objects/6a/cfdb4fb327fa15cec36419753c4119dfbf9025": "75272930695fba989feaf14d2c8aa431",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/75fac54e010d89199eedc03af0e8e9e68cefb1": "1a0b286df04c4b13a99d21752ef9c800",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/96/5c85603f140e1f2989c37ed3b9eac3c37c05df": "fb2a37bfd3b909e5713af59cb97318b7",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/a4/b199d3b2e87a2667682b31e776a36b4f013424": "9c33e185544ec9913560eeea31358862",
".git/objects/a8/283a3fcd919e694bad3c7d1d1ccaa6618429bd": "7252636404b2d54dcadcdd829a4d7e2f",
".git/objects/a8/93fce5bca430bc89d9df325143535c1b12fa0a": "381c04034848d4fc7a714a2efb3af61b",
".git/objects/ae/59d405323ec5d8add103f523d19af4dc61d969": "aa53f557e836741afec07219cc7b0944",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/25d865e0ddae3fb53fd0c759419f31f2c8660d": "6c51ab13c81c7341a2d4d546802caacd",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/9470185cb8d28ac7e9f2c2e29bc25b980208ef": "e7c141b194651bbfd64361c531150ee9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/6de47f455a2a72706c27771678199038e814dd": "afc21a919f9d7e28d7f0d1bf40e23449",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c8/2d30a5dc43a1fc86265c085d211bd451b8acd5": "9625fefd95441c04d377176fcd8b80db",
".git/objects/d1/a92b6e1994c8c9a982a8352fb4723c42fc2c25": "855989b3037645f0438e5f5baf813a5e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0f6bfaffc1dedfe61f5275f11f638c159f2959": "f6f5f5e03adb2d5d8c06add07cfeccfb",
".git/objects/da/f1b6468cd6369b6f474a0db2222507d15675d1": "6ee6db3360a558d46520df5be65719de",
".git/objects/e4/493113bf3161f3119bfa7ccf96d45d1184edb8": "b22440a822173aaa3130f7bdb7f2271d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/a167a963318ec706adc98a01c541501f49a80b": "0966b84d014a02659fb98d7286573638",
".git/objects/f7/fc9f9a0d3d9ee2225f22571f2daae52467f425": "e74f05431339f995ae79519d1beae42e",
".git/objects/f9/c1ea20014bcd9d1de953dd8df54f8e668731f9": "4266ba8b57ae78621af1f1338058dba2",
".git/objects/fa/c8c3faa922ded67104e35429cbe3ebd8f2d430": "2303d489fe349ceff7649741880764af",
".git/objects/fc/46e799bf30fd7b71cb0a90ba11d34dcd334d2e": "6a3694ce3f03c6436dd49c9c04930b69",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/refs/heads/main": "3e4b6089109f02829c2d25cc555bc96b",
".git/refs/remotes/origin/main": "3e4b6089109f02829c2d25cc555bc96b",
"assets/AssetManifest.bin": "42f8936afce1e4e015edb5f0d65a0dac",
"assets/AssetManifest.bin.json": "147546dd143e2c559ecab46b3291a6b1",
"assets/AssetManifest.json": "f84bbc3a8655ee9c3f5d2ec4f2dfae87",
"assets/assets/correct_sf.mp3": "f81755c15cddb2be52d22e03a01f412f",
"assets/assets/fonts/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/assets/logo_icon.png": "0def42c7e50c87c28c427f8fb7cc4fe4",
"assets/assets/wrong_sf.mp3": "9b07b38674b610e3c46feae9ad646bcc",
"assets/FontManifest.json": "af72817180f1600c6ad8d83aa72f0a98",
"assets/fonts/MaterialIcons-Regular.otf": "f7ecbb010aa3387e5112baba869f00ea",
"assets/NOTICES": "e185a41398ec04b03f11a5cc03bc0436",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "171198789f68cee022e1c2d5010e4bb0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "10182065736c4c4904aff3dd9ed5712f",
"/": "10182065736c4c4904aff3dd9ed5712f",
"main.dart.js": "b0828b6538b44c86d4fae3007c78743d",
"manifest.json": "9d8d70277989c519c92de267227b00ad",
"version.json": "c344d4ec2a7481a952f560382c0822a6"};
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

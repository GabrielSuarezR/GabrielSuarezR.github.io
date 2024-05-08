'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "9ef0ba2fcd4b7f7ea6f356f95b0325a5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bbd3a6e3cc576153e78e9c58f804889c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cefd62073a70e5a9266c42494fcb1ca3",
".git/logs/refs/heads/main": "8393b4e1ed17844f1acdb56fe5195bab",
".git/logs/refs/remotes/origin/main": "6d58f4a254438729c1d01120d930bad9",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/b1d2e5654620a4ca130ac83d524594df581f09": "c86eb6f610751bebe3f14370992b9b5b",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/f0e2f2d8a4ef2a96cd20ee9cae60f67bb4b740": "cb4470238a4cbabcb631a43f1759bc06",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/24/542d7d772ba71d4c6d0be257ffba6759a6c0d1": "65c8a6c5eda8048e8b809cd8006a445f",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5e/4851f0ab7e0268da6ce903306e2f871ee19821": "175e3d630946dfb12bef53afeb623eb0",
".git/objects/60/d3c5a65d992fee13e3837495a25a740d42314f": "03640aa68cbf3ec2a596c7d2b15b1fb9",
".git/objects/62/3a56fae475a7363bd7503b71e18cd38f8870de": "14e67f469ca94459fad07e268c136b04",
".git/objects/62/87a09585270eeb2346195b21253883c7473af5": "899cb980a09100ae0f4b7592c1b05c78",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/b4449593db4baf37dec323183dcbf083010795": "09abe3009c507132ce8d5a50df9fec0d",
".git/objects/71/188f5cb2815547a5fb785f220910324ad8aa65": "4158e15d340e315750b92098952bd603",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/74/b481e6f7b3d93cabed38768cd59beaf101bc5a": "20d447ed8cd606c1375e6167e4c7e94b",
".git/objects/79/65af08cad527606cee842a673d225e2e77af8e": "4cb7140a78f07c9986538498479bed89",
".git/objects/83/b1c7e1f5413298f71b9e2b56d744cd22909944": "87eabfd4104871f0285a2eec8ae6196c",
".git/objects/84/62ffc48c3d0a5e42cb2b5312dace90e4d57304": "a384de722319d55fb6e548f636fb3126",
".git/objects/85/6394580e2ed5c98bb7217718b2ed8e40d678da": "0ee59745fe5d0d5e84396b9f09e30a4d",
".git/objects/86/8b91428895b75194c1dd2dbb56ee4137246e9a": "5b77a0d593ec8dfe22cd1ed9a3c554b0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ba9fca2cb106097c847b9ab10839d8b871924d": "72901dfbdfa6d6fd6ad5ece3592a31a3",
".git/objects/93/1c67fa29ca1783dc54e8c9c5b80ef37375ecb1": "fb7e87e6d98aa8793ea7bb620317460d",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/a0/1f3777a6fc284b7a720c0f8248a27066389ef9": "1ef5c3c4a04465246d17da73a0924833",
".git/objects/a2/6321b46fc81151777d6909826da408e59fa425": "7573eae42f855106640378091898fd58",
".git/objects/a6/7b088034ebd09528dfdd8ae226e84f3ec4faba": "2ea4b78ae7ccce5821e6f9b969833605",
".git/objects/aa/2ed6689a733643e04a27fee7b1c8d1e6ebfc4d": "ae3b208f0f430c52aa551a19f992d98f",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/7822baea48062bf11617ce763e8d623c3a9769": "c5b9e0f1b9ad3cf97e43c2702903275f",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a8c5c164bcf50decefedc964595261328cd9ed": "2e9cd8a2791cee1c8eef776d4f3345a6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/004d5ee7fe157fdc57e60867c2d0c88cf82f11": "5245a1a44e11ed392680700275ffb01b",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c8/acdfd358fd0feda02fab9cf1d1e2db4491bbf8": "b371fff92ce3d8a2c36eaa0e2dbfe504",
".git/objects/cb/3edec674a58cfdc06b18deea6493e16c835672": "9d34fbe3054c8479ab570b28bf963e9b",
".git/objects/d1/b4bb41ec7952a34e15744ef2e3efb4798bd8ad": "9d55fe20a2bca94e45912de467d5e81d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/618f260d5d6bd4f4f0755d8ab5a5c756a9097b": "c5150ed8929f04785ad15b54ebbf4de8",
".git/objects/dd/47b917620d1b8af3f43cef4ca083f58c389d6b": "2e52381f9c8aa0ddb931612c02ddf397",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/df/632317b5506608a26337f64921a7cb3934ce2f": "9844130962c768a111af65b54621a310",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/ba999d2079f0ffc133d1c9e664d87294d0259f": "1dce0459c1179b4037e94bac5a2fe55b",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/c7041e23ed1a61574efe48e8bc42441a401d6e": "aac2d0844d4ef275550a63d0347a8a86",
".git/objects/ee/a0dd92cc90654eb164fb9fa267985043fd24cc": "a59dda54ebd10821b8fa50adff5e5a0e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/objects/fd/ed83872bb1ab977a98deec7ca7cc8f5ef1fb76": "4ab8d07ecad9d63b7c138e315d203348",
".git/objects/fe/23eeb9c93a377d0f4ab003f1f77b555d19b1d1": "3d5a77b3829f7624a7acd6a67a20a19d",
".git/refs/heads/main": "c94ab914b98d3fa42814e068814e545f",
".git/refs/remotes/origin/main": "c94ab914b98d3fa42814e068814e545f",
"assets/AssetManifest.bin": "adcf229a4100da0fb495d1726a270164",
"assets/AssetManifest.bin.json": "70b9b6015dffd087e4eae723586bd395",
"assets/AssetManifest.json": "b6f281ade5aba301591b6bd39705001f",
"assets/assets/fonts/EBGaramond-Italic-VariableFont_wght.ttf": "63fdbef09d3486493711042a2afc69ec",
"assets/assets/fonts/EBGaramond-VariableFont_wght.ttf": "f85880cd4a0a2c60abef38ecc1acbfba",
"assets/assets/fonts/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/fonts/SawarabiGothic-Regular.ttf": "28d35b15cdc5fc9937335bfed22e1838",
"assets/assets/images/canchas2Picklebox.png": "bfc4eee7128d8c1e09c461a0d469a140",
"assets/assets/images/canchasPicklebox.png": "b2734fd5f917c6c1b330884e9171a509",
"assets/assets/images/Color_BGBlue.svg": "0d42fcf9a8a59d11238d88c8bcb4b57f",
"assets/assets/images/google_logo.png": "9bea034929cd0aa084d65cfe3e2e3d94",
"assets/assets/images/PadelBG.jpg": "0b36fda7c588a7371b90e5e7a171d635",
"assets/assets/images/pickleBallFondo.jpeg": "77c05dfdaf061d33daa2b47ce89a9a98",
"assets/assets/images/Picklebox.png": "0ed140ba0ec1ea641296d1f47195fb74",
"assets/assets/images/pickleboxLogo.svg": "0d42fcf9a8a59d11238d88c8bcb4b57f",
"assets/assets/images/smoothieBarPicklebox.png": "e37422d79a73940eb60c0bea128e9df9",
"assets/assets/images/TenisBG.jpg": "385d120b838912dae885b2354d222c88",
"assets/assets/images/tiendaPickleBox.png": "e342771738af97ee53db0065a0e8a5c1",
"assets/FontManifest.json": "2596318e36b9f398797be26e857401a2",
"assets/fonts/MaterialIcons-Regular.otf": "1f44ee292039c15b50e5af3e11524ff1",
"assets/NOTICES": "a347c7559e5e0fa0521d202753cdf11d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "361d65aa0687c88272327a76d8b0f645",
"/": "361d65aa0687c88272327a76d8b0f645",
"main.dart.js": "ff87916921fe5d610528defb173a5925",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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

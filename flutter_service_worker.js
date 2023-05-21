'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "2a01a0ff9fbb6a6b76649ef4f9b127d2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "774dc4da987e1eb32245608599173a53",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7ec29f37695b6a36f2a9a7d610640555",
".git/logs/refs/heads/master": "7ec29f37695b6a36f2a9a7d610640555",
".git/logs/refs/remotes/origin/master": "42b895178658077128a0e212c506b565",
".git/objects/02/e89ce6503e4671226c1de8bd08a3f6c09d0d3c": "d6e9220dfdf2c9e8069dd7adeb395993",
".git/objects/09/c6078b2fff0cf24c08ab758a3703b1070b4875": "94ad367082982b8de0461b2a8422ad79",
".git/objects/0b/593e970fb5d8d158ae30c0344c6781e7f9e0de": "84abe752a2f6f091332d6072f7215030",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/13/dd336ce9f0f37923ca0265899ea4aa15c826ca": "92c197244619f0440d80acedcac2d124",
".git/objects/17/81a322d058b53b0e40e5cf36393d606496d747": "09c8be4df191a172ada7c3a58561563d",
".git/objects/1a/151b97c8bf88560bb92d9f7416effa8de07f35": "102d7422da684520b4fa93c466db566e",
".git/objects/23/e6c5582475a357b5d233075bb83d8d363c2fb8": "2b496b0c8ac15bbad0bcbe70b19f495d",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/8e099494427231c6c79fc45ac6cf85694155e8": "27b99069f11dcc1c9312cc120904176a",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/cf19f0148dec6ddb13e13bef412821082f2284": "a4374a88bc75534b772c965d3a394037",
".git/objects/2d/9c4dfd9910a2d9844664c43294f7ce6a7120d2": "5c977ab5345018cc6e76210910c72e0a",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2f/882830fa9871b593b4be57430efac8c29d20fc": "471441582e3b8b63810a9406d5fc662e",
".git/objects/35/d6295e80ca5feb54755ab7610f99c14b63b7f0": "c091a755491c646f08fbb61377fde558",
".git/objects/35/fce79113fe7f502713f48b2f3521c8134e38a7": "47bc6c503c81e22f01b2e13c0f3366dc",
".git/objects/36/3665584e17c2862bae922935af5d189ae35269": "2d95af46515454393dfb2554e7568c61",
".git/objects/39/deb2e7b5de843c5aa177c4acbf21671c9de84a": "fef06a3050e8fec45ee99c1a31bcf3d4",
".git/objects/41/73507adef54b9c7877a4fbbee92086fd0593f8": "1267e90ad075804f555e8e30f0acbb2c",
".git/objects/42/901bef2319b87e8cb0861ed7fbab283f9c470d": "d40a35fa5f2d0d2caad071a416671fa5",
".git/objects/44/7e9295a08eb9a1b4f727223764b2e0a1bcea59": "b254c815097ee3205e9642d928272d54",
".git/objects/4a/13f2f4750797050e35f923b4cded641a322488": "67a45f8ef8e99ff88a0a81d8076390ed",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/34a38f65e02ec3370fdd9dbb0d9c91b186b074": "fc683e4c989c6256d235cd900fec13a0",
".git/objects/51/03b9aa583936906b74687a84f39b5957fead3d": "7b2515f904de1cd0b830dcc959d6e804",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/59/3af22697d17df86c9f8a9ca0ebe9dd1d49a470": "09a5971a493194f2f5f1e2011297eaf3",
".git/objects/5a/061d95b54d60f9f191698d42247f4354c2a52b": "1a783213f6496cdac2ce55000a0e3548",
".git/objects/5b/a97cd5ac6d76aa1ef2e8a380e275d0134a7964": "01063541401b3155d8d6f28810b487a7",
".git/objects/5b/b23b84335f596d70f6c84ab1aa66e771928c68": "a8e5e3e00a1de5c674b01fb09efc2bd1",
".git/objects/5d/a5a49bca2a51b1f3d9c63cd3d42f5b8fa40991": "3a6c578e003f20aeeeac9a344a416497",
".git/objects/5f/f956405783d9e9de89c7983237ce60af03162c": "79f22504de9e2ca6bdc5fa3b0542e5d3",
".git/objects/65/2ed38b5eec8a065f8904c2d10f0cfd1ee61612": "92659e30a152ff401ee68192e6f08cac",
".git/objects/65/4aa9062a199a951d394248068472b782540de1": "0443f257a293891e47bfe6136b5acda7",
".git/objects/66/b89eb6d7ad4de7f4eafb79e8946108b3a0f2fa": "a29a178e5357f52da03c8021133ad520",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/72/daa73ee26dd29908575d1ced032fc04bdbe5ec": "771ccfa606fde8e486e254e40602625a",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/6fc80de4360928ac79bfca8fb221443e702428": "c88308e027eb01e9e76d59f7c5c0a94a",
".git/objects/7f/e1ec6c34bd23db8901aa72b06545b859cfd0b9": "6d10ef725f9c026fe2cee0d83465981c",
".git/objects/84/8cc00c15e0818839235bf22d233d3d7fe72a1a": "49264b82afefcb7271de31364301e85e",
".git/objects/87/a216642f2f3c0e7aa6cd404dedbd13c84be170": "77f5515ffc922275ead29e40975ddae9",
".git/objects/89/dcb199a391d09398a4f017f5cf58bd63b1a03e": "393aa899475ffc1d07aaf318e5a72359",
".git/objects/8b/8ef790946c749d6f179ddc81c6016ccdb06d3d": "8ff2ba13bfb32c283868635dfa16a63b",
".git/objects/8b/ef68a05e75c5e198e09c78bf826f2b217706c0": "094472ec7e2ae4c31aa9e789bb471b9c",
".git/objects/8f/25defb4b64ae4da0a555848088e65628542f7d": "a765e1ad0a489859ad42532447e39b33",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/93/8e2a9ad7f7e5f8846ed57fed59b0181ddc64b0": "ba77535a74abc38876ee9424982dffb2",
".git/objects/94/89eb92fece4fce1bb63e25e98c3b4de62e91ad": "c1af63f5fba2229397e41d2edd09c927",
".git/objects/98/725b0d4a56aa820119d60ee7ae8fa376499e4c": "a80a300e71b9f092a3ec3ed03b6127dd",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/ca42d778f69b6f52d73e64a4763e094af9f4a8": "777db7a91026de89e517c854683e6a75",
".git/objects/a9/51c2553aef4959bf157593e9d1f48993fe2b25": "f911c973f1258e12f4d18a2402352326",
".git/objects/b9/24aab3de5d2b14212140b40360ef158d4a6399": "f96853eab9c6dabd715774a051ac345b",
".git/objects/bc/ea431e0c01a088880921eb3b61bb2badbf33a9": "ef706b0e75b5adcbd79de2a80deb1c15",
".git/objects/c3/92f19836f299ea5c88a365fb2036062d20cc5c": "5b9b4ae6bac4748bf27e53cac18397eb",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c6/cd87a63276c112f856f7579e51a45e2fe4144a": "509fbb3e1e8be12f638894cbdadf5432",
".git/objects/cd/3171aa62d06302b3d4ec32951803e835975db2": "f1a6474127e0912f10af5b3f4e484bcc",
".git/objects/ce/20d4d4a02b280e8ba59766103f618ab567f24c": "89db22b87e4ca9bc51d1de09461b7e2d",
".git/objects/d0/49b33ac55464400ec2ebaf6e0b438e6084d510": "6f5ce1ecac080e03cdaeb8fb53d6e8be",
".git/objects/dc/4685022ce69bc9823e933801b364c47018b66b": "8ae9dd6386bbf710cefd1ecad2be51f4",
".git/objects/de/823ffc6b2823e29dd7cd02b5c142b6531179c0": "193d37aef523f941ce170ece8e749b5b",
".git/objects/df/529523360ff8fe837ad0067cf12f729436d7e0": "dbd4015e7fce055c29bfb8e9dd20437d",
".git/objects/df/9b6f8169abe1e1e96bfe6b53f71b4319736246": "e7d7afa2d337dbdfe5c5be717e52773a",
".git/objects/e0/4495d193be442db0834eb593df9e794f07e59b": "f92b60a2ee62a6576788c335aff63223",
".git/objects/e3/ca171d909eb859b830d0ef86aa4b4281e0e63b": "b7afba2c9e40c4a35841853d4196199c",
".git/objects/e5/68b26842f5a06914d71ffc501ab76169972bbb": "5022d9ee30505dbc587e34ddb0451983",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/730e9dc0f3f4618c2526127d5d929ee266c14f": "9ff0306334334383e3a8bfe78924542d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f6/f6ad6a7898e01db1e3e6ae115f65326a7af457": "dcbc64f0114e2d35f37e0fee117d0f54",
".git/objects/fa/e3f952ce2e2514174ad31c097b0103987c75ad": "bb49457b1109ca575dcd31deb355ad00",
".git/objects/fc/3b893c1ef692021fbe8d68b0e8c86e0475f750": "ef321d4d8810f702affbbf0721ca4abd",
".git/objects/ff/942c0b90545c422ba002958a7a6ed6a3429969": "d00e86c8dd0ba392bc2bee8000b7e695",
".git/refs/heads/master": "fafd18953a996364ebf28389cfa78da6",
".git/refs/remotes/origin/master": "fafd18953a996364ebf28389cfa78da6",
"assets/AssetManifest.json": "2a5cea82ff72d843c4c5dccd78ff2e74",
"assets/assets/images/90973.jpg": "0f73b2bb0ada7642ee8db7a719ccb782",
"assets/assets/images/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/images/blob_bean_ash.png": "bc902ac538eedf1abc48457bbf064fd1",
"assets/assets/images/blob_black.png": "14198d608b7f0980998d329cd353e290",
"assets/assets/images/blob_drumstick_black.png": "381f70d9f8dd4fbbb720214fa02939a2",
"assets/assets/images/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/images/blob_small_bean_ash.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/images/blog_01.jpg": "1dd8d5b81fa6ab08975fc7a8954853a9",
"assets/assets/images/blog_02.jpg": "a52c33a054a60ec960a40ee57e1ccb9c",
"assets/assets/images/blog_03.jpg": "b249c26a9d231ab4295d66d6bcd36430",
"assets/assets/images/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/assets/images/box_cover_gold.png": "a58f0270c1fd04d7eae1217c7e5645b9",
"assets/assets/images/dev_aboutme.jpg": "ec232fe52017e7b51ec4985aa7c86eeb",
"assets/assets/images/dev_aboutme.png": "ccc8b48256d9422981bcea43c72cc277",
"assets/assets/images/dev_header.png": "b042aa88afb55d29cf1602dedc7b095e",
"assets/assets/images/dots_globe_grey.png": "bb16bba932c2e98f3dbe3e6b1b6a864b",
"assets/assets/images/dots_globe_yellow.png": "d908b032e1a46382b6e6c2baf92e188c",
"assets/assets/images/dots_globe_yellow2.png": "d1394584431e43b6973ca031de59a284",
"assets/assets/images/hi_there.png": "1ac6f5101b6a5511f4ad8f8965a49f89",
"assets/assets/images/icon_box.jpg": "7a18b9b091db5fe0fc16c76a3ffd5db2",
"assets/assets/images/License%2520free.txt": "03382b5e53b6751ae36dd08066d49617",
"assets/assets/images/License%2520premium.txt": "638b7f072b4aecfe9303dfaf33614a70",
"assets/assets/images/portfolio_01.jpg": "7046d331d8a2adc6face01cd641296c2",
"assets/assets/images/portfolio_010.jpg": "e33e2f0f25c820f51ab23d6de18b9556",
"assets/assets/images/portfolio_02.jpg": "8e89f385d1dff6bb435f05455dcad079",
"assets/assets/images/portfolio_022.jpg": "6214bf912c99ac48fcd541783b0002a1",
"assets/assets/images/portfolio_03.jpg": "03e897a7eb6105e7fe5d898ef1f25299",
"assets/assets/images/portfolio_04.jpg": "20f8a566c971178a161cd4f0aeabd5b3",
"assets/assets/images/portfolio_055.jpg": "cf4b86b1c7ace1155cfad7fb525fffae",
"assets/assets/images/portfolio_06.jpg": "002b6abf0958cc9ba0b3fbe3fbb62694",
"assets/assets/images/portfolio_07.jpg": "523827a2d2f77eab930e84a6f2792131",
"assets/assets/images/portfolio_09.jpg": "504b72ade2198a246ddbc90345806a44",
"assets/assets/images/unnamed.jpg": "f1d47af32746d006a45da7398ae99cee",
"assets/assets/images/unnameddfv.png": "0c025779f80135e69845717b29cb985f",
"assets/FontManifest.json": "cab905cb3aac16cd8f8b52a8d504c382",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "e3844b1170e40ef48b14a1e4866f83ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/feather_icons/fonts/feather.ttf": "ad5435302c3c2d1f23f275d0f22d36c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"icons/logo.png": "f2797c136a7738aa98ba3ecf9ae2a0e0",
"index.html": "e3b150a9bb8aa21c9f9766073b30b0c7",
"/": "e3b150a9bb8aa21c9f9766073b30b0c7",
"main.dart.js": "31de76dca646ce9d4007eabdb82e10d6",
"manifest.json": "4fe26f22df0764c2bf67395c35362a46",
"version.json": "e5c3a2e7c6ad8ca9d4b1da1be392d211"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

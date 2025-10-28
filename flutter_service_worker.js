'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b5bb7dfa26429c4ea20193a02eda1d61",
"assets/AssetManifest.bin.json": "db5a200284d4ac4d4ad1c698922df3b2",
"assets/AssetManifest.json": "788c9ba75f92830f6e68f5987f810667",
"assets/assets/animations/animation_person_2.jpg": "0ef79dc511001dbdefb8126ee12c5a59",
"assets/assets/animations/fireworks.json": "b278fa611481d5634a05ae6efa6e9b86",
"assets/assets/animations/loading.gif": "de11b5c9dc63a25c6fb415184701922b",
"assets/assets/icon/app-alsea-icon-original.png": "6c1d1c268d3f3178fe85aeb07893347f",
"assets/assets/icon/app-icon-2.jpg": "147990bb80dafbe92ed032722a923209",
"assets/assets/icon/app-icon-2.png": "8bca1346cec5f18ee2f1864274517ae3",
"assets/assets/icon/appstore-legacy.png": "7956f4990aee255a1a8607c92383b66d",
"assets/assets/icon/brand.png": "78908a88b39e475ac25d932b2506e07d",
"assets/assets/icon/GIFTARA-Color-1.png": "7f8d281c485071062f6fb6af09358e75",
"assets/assets/icon/icon.png": "4ff628c6dc9bfa0c2a354bd6194e348e",
"assets/assets/images/banners/categories/accesorios-1.jpg": "197589599c7fedd17903602b4f0d0ad7",
"assets/assets/images/banners/categories/accesorios-2.jpg": "5e5657a39300e20735e9777a2ae9af47",
"assets/assets/images/banners/categories/accesorios-de-camping.jpg": "861bbcc5cbd3f1bb26e17f4f4bb5d90a",
"assets/assets/images/banners/categories/accesorios-de-moda.jpg": "f8e99fd172cdeda6c5da1a29a1c13a8d",
"assets/assets/images/banners/categories/accesorios.jpg": "72ec9ae5c0a3b49c7c1bd1a9587ab615",
"assets/assets/images/banners/categories/aspiradoras.jpg": "8af49211f6ddd7df6d6f2e612b93259b",
"assets/assets/images/banners/categories/audio-y-video.jpg": "fd6f2bf2fb1671976a47198f8af50d2f",
"assets/assets/images/banners/categories/audio.jpg": "81dfc6bc94fc349b171349b3ff2dd697",
"assets/assets/images/banners/categories/barberia.jpg": "c3df6acf4681663f7f02d969e26d10d6",
"assets/assets/images/banners/categories/batidoras-y-mezcladoras.jpg": "a214b280df77031290619b4f57d77c12",
"assets/assets/images/banners/categories/bienestar.jpg": "46370bbfd6b2ee1f129aae65ecb59046",
"assets/assets/images/banners/categories/cafeteras-y-teteras.jpg": "0b1e6ffe7e241459e0ea8bff396abfd3",
"assets/assets/images/banners/categories/celulares-y-table.jpg": "e18ac72aa386b5fcff2c5f7490eb31f5",
"assets/assets/images/banners/categories/celulares-y-tablet.jpg": "9fb67734e4873de6f98056c489b95de2",
"assets/assets/images/banners/categories/colores-y-plumones.jpg": "79f89886abd5416211be4618e5936ce4",
"assets/assets/images/banners/categories/cuidado-automotriz-y-accesorios.jpg": "69cbf6fc7672b792e465a9fbabe405eb",
"assets/assets/images/banners/categories/cuidado-de-la-piel.jpg": "32d92dd06a85af5b70189ddcb7b6d5d6",
"assets/assets/images/banners/categories/cuidado-del-cabello.jpg": "833146af82633dfebb61c06c84859eb9",
"assets/assets/images/banners/categories/cuidado-personal.jpg": "99e3b432f19def9f2e285a2d97173a68",
"assets/assets/images/banners/categories/deportes-y-entretenimiento.jpg": "08e71c4c1b2b0dee1028253e402cf076",
"assets/assets/images/banners/categories/electrodomesticos.jpg": "2f759dafcfbabbdb2ea9875b2b5892d5",
"assets/assets/images/banners/categories/electronica.jpg": "903fcc0fc3822dd3ec1f9c6f114f3ac0",
"assets/assets/images/banners/categories/especializados.jpg": "127fe3600a0407e99a39f00a67a67184",
"assets/assets/images/banners/categories/extractores-y-exprimidores.jpg": "24c55abf90e879a1f878a757ee40cd7a",
"assets/assets/images/banners/categories/ferreteria-y-automotriz.jpg": "b9a622b478b10efa87cc0fc23fa1ac91",
"assets/assets/images/banners/categories/freidoras-y-hornos.jpg": "2626ecdd935e8c916e6bf6c96f11738c",
"assets/assets/images/banners/categories/gadget.jpg": "b52d675194e5a87289b2413c10ad99bc",
"assets/assets/images/banners/categories/gaming.jpg": "e37f3982b2f6b0909508f2c3165fadc8",
"assets/assets/images/banners/categories/grill-y-panini.jpg": "12e3b47af9bd178e3d3c9a82929aa5cd",
"assets/assets/images/banners/categories/herramientas-de-trabajo.jpg": "f578625588e7d22c730337394131e46d",
"assets/assets/images/banners/categories/juegos-de-mesa.jpg": "1c71a3589e159467a898758b8cd3f0cb",
"assets/assets/images/banners/categories/juguetes-1.jpg": "eac028d11cb9f77173d242f3d4e3b58e",
"assets/assets/images/banners/categories/juguetes.jpg": "4e58d3877dabddb6e73d5b72eb1df9d6",
"assets/assets/images/banners/categories/licuadoras-y-procesadores.jpg": "4e6d653ede9a564ad5621f9e6e42b6e9",
"assets/assets/images/banners/categories/loza.jpg": "28bfedeb16577e98ad79e9b482d0f60b",
"assets/assets/images/banners/categories/mascotas.jpg": "c949f0a3e9a5a2b05cdc0e72c35c0cf7",
"assets/assets/images/banners/categories/mesa-y-cocina.jpg": "8887b8f1c5e2c140e77854a9963d712b",
"assets/assets/images/banners/categories/mesaycocina.jpg": "8887b8f1c5e2c140e77854a9963d712b",
"assets/assets/images/banners/categories/mochilas-y-maletas.jpg": "68f157f71bb5cae46130f786bf54fd6b",
"assets/assets/images/banners/categories/moda.jpg": "fe731bc665d4d9fba91a3207d8034ed2",
"assets/assets/images/banners/categories/moda2.jpg": "0ed13bb4a848a0bffac7b2fa1e1943aa",
"assets/assets/images/banners/categories/ninos.jpg": "db0a9a91b0de2f324d08f246dd9775b6",
"assets/assets/images/banners/categories/ollas-y-sartenes.jpg": "cb7c4147c99bd3876f6134ea429df034",
"assets/assets/images/banners/categories/organizacin.jpg": "ca59aca44d2c6c248f198db0ba5c7dad",
"assets/assets/images/banners/categories/parrillas-y-tostadores.jpg": "448d4e1ee360c7a182573ddbc62f5ad3",
"assets/assets/images/banners/categories/perfumes.jpg": "bb9e4debdefc486302c77e694d06bf0a",
"assets/assets/images/banners/categories/planchas.jpg": "3915605ccc755e6e1fbb0880f6b0694d",
"assets/assets/images/banners/categories/preparacin-de-alimentos.jpg": "2e2e4e5500057898e3559a267bdb67cb",
"assets/assets/images/banners/categories/salud.jpg": "9a9fbf7ee39f7b2d27a6161b9fafb08e",
"assets/assets/images/banners/categories/set-creativos.jpg": "0e2f4228ed5581984cfd273949228dec",
"assets/assets/images/banners/categories/ventilacion.jpg": "e8ede4b223349610c9bab6123a37f3dd",
"assets/assets/images/banners/categories/video.jpg": "3b9b7f0477586dbfe2f5947e65ba11d6",
"assets/assets/images/banners/companies/153-1.jpg": "d72c940c8586874b0a99f895eb06246a",
"assets/assets/images/banners/companies/153.jpg": "5cd5cc4ec66fba7729fb3da95159873b",
"assets/assets/images/banners/companies/163-1.jpg": "12331579d08b02e63f6d7673ad2baaae",
"assets/assets/images/banners/companies/163.jpg": "924a147c68fcf05b28aa07e2dc481194",
"assets/assets/images/banners/companies/165-1.jpg": "bd0888d80cf65414d84b4e824bde9535",
"assets/assets/images/banners/companies/165.jpg": "a82a206191e07e5822de5a7cf293a4c1",
"assets/assets/images/banners/companies/166-1.jpg": "357e1fb3820593df72b805c2d3715768",
"assets/assets/images/banners/companies/166.jpg": "db9272ef6604b539639ebfc6ae4bff8e",
"assets/assets/images/banners/companies/167-1.jpg": "cadff64ac428063169f13441ef55bfaf",
"assets/assets/images/banners/companies/167.jpg": "92537c06e4076475cdfa86fb584a5b52",
"assets/assets/images/banners/companies/170-1.jpg": "f7a3396f6686d31aca4237a42bf04876",
"assets/assets/images/banners/companies/170.jpg": "baf60691b871139b257f2da9542aef38",
"assets/assets/images/banners/companies/172-1.jpg": "76ca712e9c6984f7b681cb057dbe5c8c",
"assets/assets/images/banners/companies/172.jpg": "41bfeee492605a1d8e7d47f1e4b652e6",
"assets/assets/images/banners/companies/173-1.jpg": "cc2b9935b4372eed0beb621061fef318",
"assets/assets/images/banners/companies/173.jpg": "1be59143e94f353fc7f31b0fa30e7244",
"assets/assets/images/banners/companies/176-1.jpg": "70dfa30b208cd94e6f84b8a989810b0e",
"assets/assets/images/banners/companies/176.jpg": "c70a5da1f229a9782ee5f5be5cba9b6a",
"assets/assets/images/banners/companies/177-1.jpg": "927e9fc96d483de13b1c64b98ca7f18b",
"assets/assets/images/banners/companies/177.jpg": "b57994f61ef2f98267777d988b328bbb",
"assets/assets/images/banners/companies/179-1.jpg": "1134f90bc759a3b4b74806843a82391d",
"assets/assets/images/banners/companies/179.jpg": "300a4daa17aa532ad29f6ec46de712c1",
"assets/assets/images/no-image.jpg": "6cc010d87ea98225c9b37b8751f38719",
"assets/assets/images/product_digital/services/AT-T.jpg": "b2076048c8c955489479ceebc70bfddf",
"assets/assets/images/product_digital/services/Blizzard.jpg": "76711494f9b24d03c505b8c4b21c9a84",
"assets/assets/images/product_digital/services/Cinemex%2520Platino.jpg": "73c1a761db5d455e0ce5f4ee8d143bd1",
"assets/assets/images/product_digital/services/Cinemex%2520Premium.jpg": "95e2ef91c90ad93086f49f330eeea521",
"assets/assets/images/product_digital/services/Cinemex.jpg": "dc6cdc36ec820f0fe84017e223f9dbf1",
"assets/assets/images/product_digital/services/Cinepolis%2520Dulceria.jpg": "9220c3ab3d6a00c074246276011ce72b",
"assets/assets/images/product_digital/services/Cinepolis%2520VIP.jpg": "04c2e28d016df36d7176de6cdc2ce226",
"assets/assets/images/product_digital/services/Cinepolis.jpg": "88ec4cc1edda055b6c06914d6ff23e63",
"assets/assets/images/product_digital/services/CrunchyRoll.jpg": "c5647c1da85cfee8489a55f452d89033",
"assets/assets/images/product_digital/services/Deezer.jpg": "17dd5a8818f5a2df2fef7d32737c8415",
"assets/assets/images/product_digital/services/Enviaflores.com.jpg": "f30bf731173fc214fe17f31b3c8422fc",
"assets/assets/images/product_digital/services/Google%2520Play.jpg": "5e9614cb14b68224e61d270f5190603e",
"assets/assets/images/product_digital/services/Kidzania.jpg": "93a6147642c05cd94abdc7b6c863ec30",
"assets/assets/images/product_digital/services/Librerias%2520Gandhi.jpg": "ead6613fe6e6e7c66c5946010ae6fd43",
"assets/assets/images/product_digital/services/Minecraft.jpg": "cd2c545ac1911a679a4d094848f4213f",
"assets/assets/images/product_digital/services/Movistar.jpg": "a373c0704c9aa4ffc30150f1bedeb02c",
"assets/assets/images/product_digital/services/Netflix.jpg": "148cbc84226824136c565dcbf7daaae8",
"assets/assets/images/product_digital/services/Nintendo%2520eShop.jpg": "a6d292fd9bb6fec95685cea8e692b695",
"assets/assets/images/product_digital/services/Nintendo%2520Switch%2520Online.jpg": "e71d33fabc1abad9db69eda65102c1e5",
"assets/assets/images/product_digital/services/PlayStation.jpg": "7222850dc04b3ed9463b6adb68287dec",
"assets/assets/images/product_digital/services/Prime%2520Video.jpg": "919a2418c3192b1d66499b95ca8a71eb",
"assets/assets/images/product_digital/services/Roblox.jpg": "983bf21a3f4b0d4b9fd49fe85838ea8b",
"assets/assets/images/product_digital/services/SeaLand.jpg": "a02a903596abe980e5ef33f1e2fc1ab6",
"assets/assets/images/product_digital/services/Spotify.jpg": "8d305e08bbd0eef4eb9dc6b83cc54cdd",
"assets/assets/images/product_digital/services/Telcel%2520Paquetes%2520Amigo.jpg": "7540ccf385c6255a1b8eae4c1077ad10",
"assets/assets/images/product_digital/services/Telcel%2520Paquetes%2520de%2520Datos.jpg": "6e92cd7ad3f3031662cd43a7faf1ef92",
"assets/assets/images/product_digital/services/Uber.jpg": "3027a375a275a17403c66289282cfa52",
"assets/assets/images/product_digital/services/Xbox%2520Game%2520Pass.jpg": "abe3339e30d52851a4e2f5ec037a08ee",
"assets/assets/images/product_digital/services/Xbox.jpg": "be13b8273a2a4ae24c3811d92bdd9eb7",
"assets/assets/images/section/categories/cuidado-personal.jpg": "f2fa6acdb7ec74c31aeaf3f3e87fccb5",
"assets/assets/images/section/categories/deportes-y-entretenimiento.jpg": "8789cabca65ab8acf8c7db713264cc9d",
"assets/assets/images/section/categories/electrodomesticos.jpg": "02f69fe4beb82f153eeec1dcd322ca38",
"assets/assets/images/section/categories/electrodomesticos_banner.jpg": "d4855cdb8145630b6629e229199222a1",
"assets/assets/images/section/categories/electronica.jpg": "8477450cce32b1392451eed4288b4f39",
"assets/assets/images/section/categories/ferreteria-y-automotriz.jpg": "6dabf55fa3dd633afc8473a34cbaeabe",
"assets/assets/images/section/categories/mascotas.jpg": "bf6d02e2cef40e4ba650a503db27820c",
"assets/assets/images/section/categories/mesaycocina.jpg": "454615ccb67a1c9b5881e6c98de4d1dc",
"assets/assets/images/section/categories/moda.jpg": "9d040fd1e63fe7c5381d9cd539631a77",
"assets/assets/images/section/categories/ninos.jpg": "086b918874055c3746407b87f6720aa8",
"assets/assets/images/section/categories/organizacin.jpg": "e3ce6e38214b84529b5897d0b8b9cfdc",
"assets/assets/images/section/categories/salud.jpg": "e96db00543a7fa8da2ffabc21e799fbf",
"assets/assets/layoutConf/deviceSelector.config.yaml": "5059c9074f014c187e85262b4c65ff99",
"assets/assets/loaders/bottle-loader.gif": "61387fabe512d4ded0ed5ad2b8332840",
"assets/assets/login/logo.png": "72624c4abf0bd1c4eeab9ca6557c770f",
"assets/assets/login/mobile_background/images/0-mobile.jpg": "d6051ff1be770c056b193526ce50d429",
"assets/assets/login/mobile_background/images/153-mobile.jpg": "ea4b1a16bdfe680955227e99c73dfbda",
"assets/assets/login/mobile_background/images/163-mobile.jpg": "fa934bbfc56bba5979c46a573a804ec3",
"assets/assets/login/mobile_background/images/165-mobile.jpg": "d6051ff1be770c056b193526ce50d429",
"assets/assets/login/mobile_background/images/166-mobile.jpg": "fbb7127f70078ac58b2666ce96a4ab14",
"assets/assets/login/mobile_background/images/167-mobile.jpg": "a7a5c6da9e1230420c75d0a2944deb0f",
"assets/assets/login/mobile_background/images/170-mobile.jpg": "9d396e57ee6a7e67ee582ef1bdca9ece",
"assets/assets/login/mobile_background/images/172-mobile.jpg": "3be382c537da4d49bc6041ac31250e01",
"assets/assets/login/mobile_background/images/173-mobile.jpg": "8c1f2dabca34e357c98339865b706adc",
"assets/assets/login/mobile_background/images/176-mobile.jpg": "f19cc832a2252bf45adc16cf182fb2e0",
"assets/assets/login/mobile_background/images/177-mobile.jpg": "797e0f72770f3b8902951af4e1ffc72e",
"assets/assets/login/mobile_background/images/179-mobile.jpg": "0a4e4473df807446dd432ff261ed5984",
"assets/assets/login/mobile_background/videos/153-mobile.mp4": "7f36582c09903c1ee59412191c35d5d1",
"assets/assets/login/mobile_background/videos/163-mobile.mp4": "a7d1c288834a6337aaa7ed0f002151b5",
"assets/assets/login/mobile_background/videos/165-mobile.mp4": "6ae4848921c82f3119e1608ac5302e98",
"assets/assets/login/mobile_background/videos/166-mobile.mp4": "cb91be555875ad47e1e1b59afe49c037",
"assets/assets/login/mobile_background/videos/167-mobile.mp4": "0b191cda3d81507bad8d76276915c055",
"assets/assets/login/mobile_background/videos/170-mobile.mp4": "4ca5dee51ce07d4bec563972014642de",
"assets/assets/login/mobile_background/videos/172-mobile.mp4": "ec9e29cacca5993b2c002b0c0022d1b4",
"assets/assets/login/mobile_background/videos/173-mobile.mp4": "22821bcc7dbf984ed7ee81ede9ca548b",
"assets/assets/login/mobile_background/videos/176-mobile.mp4": "93a54c0ecf701693b254fdadefcd8789",
"assets/assets/login/mobile_background/videos/177-mobile.mp4": "5a496805df78f0422d11c525bcb2d1ff",
"assets/assets/login/mobile_background/videos/179-mobile.mp4": "27737b29b0406ad502696d7e50b1360f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "ef81cb5bf94a4aa32d863af9878938b4",
"assets/NOTICES": "d65b215af3181251e6dadd6b8e8e2c51",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "0f5770586ffc8bb6a75b4a0ae4f9eb15",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "b7b745e87559a1845bd60d6378f7e325",
"icons/Icon-192.png": "7e79e173923b46ff30da90e7ad711b58",
"icons/Icon-512.png": "40a13d07808e593537afc044a11c1489",
"icons/Icon-maskable-192.png": "7e79e173923b46ff30da90e7ad711b58",
"icons/Icon-maskable-512.png": "40a13d07808e593537afc044a11c1489",
"index.html": "41fddefbab90e1b4855de70af4f5cd89",
"/": "41fddefbab90e1b4855de70af4f5cd89",
"main.dart.js": "08861db3e1372a3c75ba2e2963f1a56e",
"manifest.json": "43fe8b753f937703b26d2976cd2f09e3",
"splash/img/branding-1x.png": "6295d4bccd99e15c7076926ff7e41b9d",
"splash/img/branding-2x.png": "4724a5be8c3364fabcd398a8de00aa9a",
"splash/img/branding-3x.png": "1de99ae4a9c044a7cddbd742e14df59e",
"splash/img/branding-4x.png": "1de92cbce46c4c9744992e471de05c7b",
"splash/img/branding-dark-1x.png": "6295d4bccd99e15c7076926ff7e41b9d",
"splash/img/branding-dark-2x.png": "4724a5be8c3364fabcd398a8de00aa9a",
"splash/img/branding-dark-3x.png": "1de99ae4a9c044a7cddbd742e14df59e",
"splash/img/branding-dark-4x.png": "1de92cbce46c4c9744992e471de05c7b",
"splash/img/dark-1x.png": "fa82e6c4ec78968785b9938ce34a850f",
"splash/img/dark-2x.png": "347e5c97f82770fcdba97d43470d7893",
"splash/img/dark-3x.png": "fb5b951f78254ee77136881aa173a08e",
"splash/img/dark-4x.png": "070a70127f7bbac679bf73721e823298",
"splash/img/light-1x.png": "fa82e6c4ec78968785b9938ce34a850f",
"splash/img/light-2x.png": "347e5c97f82770fcdba97d43470d7893",
"splash/img/light-3x.png": "fb5b951f78254ee77136881aa173a08e",
"splash/img/light-4x.png": "070a70127f7bbac679bf73721e823298",
"version.json": "dbd74579b44b68adf4349f12c5d26276"};
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

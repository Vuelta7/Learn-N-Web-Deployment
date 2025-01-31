'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e3b47bf94cef4dc83bf83e53f824c66c",
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
".git/index": "4dc3c21b6b8c183ba2730e0bbc07afab",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4273538884a8364c49d78e8f8a744bf9",
".git/logs/refs/heads/main": "0a43ee2299b4c2dd48102c15e409c718",
".git/logs/refs/remotes/origin/main": "4b2d940f25796a98f7c6e4c7d08adeec",
".git/objects/00/a0caab5054fd152f9b530918fcf968dcced19a": "1a7bf9fb9f2184896b099261d30412c5",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/9391c9e37cbf8a8799addfd453d7a42f733d5e": "a823e6d32077ae20a3405c97de1dc352",
".git/objects/07/bf3bcdc985c3aa2fabe6e8e32537a5c0baa5c3": "35d3c974b16b5d18d54ff247e49b4cee",
".git/objects/08/c112bd54e6cb72b11bb7408ea09540ff15b6e2": "db1850a6bba00cf96e79eee45e42817f",
".git/objects/0a/871a46e2b907475d68ba77e35e518b3fe45a0a": "1d68169b758f1117b4dc0c8460af89f5",
".git/objects/0b/b8dd93c6ea9e30f36f6710ca6c8e3fc1462281": "8c896bf3b15bff1a3efb5f4d84b6247f",
".git/objects/0e/7c9e2b19c0fdae519327b49b92ec61363eb3e1": "eaf51b5516b04ea6f9cfefd693dac5a3",
".git/objects/0f/f36640f58c5f553b9d6b45d995e11be41b2585": "9ce05c9a15732f8c3ff50c8961e24239",
".git/objects/12/68576864921fb0a7fa428e66d701d5d6c5603a": "5ed5000bf5aa059662a9bf4f566943c6",
".git/objects/14/02fd6e71ed03876761d8cc644dafe3e206625d": "5751e7fabb9aec3ab54093ce290a5997",
".git/objects/15/c1bb64daf26318bee7e49d14a731ba90aaad03": "d6de6c6ee2d653b83fee00d3bf2d20af",
".git/objects/17/98b7fabaffe953542c173e08f401a9b2d819c9": "bb9adc03be971da1a3f40b82c369587f",
".git/objects/19/32f6d9c5d965db436e158427cca3989da8302b": "1648078445fbc38ae6018e0089a12b76",
".git/objects/1a/b5a7d0e6ac44a97df712363aea8ad3d1554220": "35c6ad2f93ce282dcb799047698289b0",
".git/objects/1b/2346e870c42e259d3595c4e8a736081daf0aa6": "9a298e8d0f4affe9ad22a31952d1c66d",
".git/objects/1e/13d39652d08c8291e4f60fca7616dd852b314a": "e58b6d5ff5c8f194decb29a234d2bbd7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/3c28ce3fb27bd1f6a89a20b9b66c63e876e9db": "651e4c61d75ddd02112b52ac9f17f067",
".git/objects/24/42affbf6570d23c0b2b270cca8d49535df27bf": "538d932d1b9806e9100542b30c19db99",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/27/d0d440f396fb1c1b370959b67959390de84bed": "73ed38f58eeb41a329851f72a4b9ff91",
".git/objects/28/ca0db1a7d06810e8feabfc30f3359e66cca004": "0956c43e790077bdb792bf5801917bfe",
".git/objects/28/e7d407d7fc05fa72ac6689af82717053ee9f5e": "28a5e527758d09ada7238824d6a9d85f",
".git/objects/29/f83657e337a8e3d1dfdd92e21c1bce5af0b0d6": "78319be5448fee01b0519903f8aae21f",
".git/objects/2e/fc4587f1dfd56e0e47a6f738de3c96831bee08": "112c701b343c5ff92fbe228207911e5a",
".git/objects/30/24fddeb8d19ecf30b57c6fa0d3a44b37bef5fe": "56349467c454e47b9219c4bee76a7f08",
".git/objects/32/e6f67726190ea541c8010dc6a9d3f2abcbe982": "25a93539c548c2fe1b5b5342f6593d5b",
".git/objects/37/33d889cfe37e7c257e14b9cda56b728373180b": "103efd150e31a24a71992a619744453f",
".git/objects/3c/289baeba9ddd2fc3de909616335a00a841d6ef": "e3fa71c7e56a9e739549997704219cdd",
".git/objects/3c/f81cd4ab2abec4f7dbe6e049b150b8cb23f4d5": "9fc98b0066bdcfb5bbffd39ec2b34ca6",
".git/objects/3c/fd567c9d12548e527a258660b90774b6ccc289": "a104cd5b0816974d961abda5fe2e7b8d",
".git/objects/40/205b40df8745d5e1ee72ac6ca03446d48bf2fc": "44ac152018df616bcb475076ea373ffb",
".git/objects/44/be00079bfb4caadc1820177e29d9d5ac23ce2a": "c2d713ad3d9179505e08600ac832b963",
".git/objects/4b/008b0411663d1c0718a157b97ed70927f2e697": "5cba27b4265ddad63a99fdb7ba62a0e1",
".git/objects/4b/6454181eed02af341f6c9ad4dfbade2fdeed56": "18506bc94d5923c2818c4c9d96851589",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/d8f30ce50f72322f4c2953e3718b0d1dcf4e7c": "448dd8d5d76250da9be33d37009fc3ae",
".git/objects/51/07b30bb438f02f4d0acab3e16f99c1f5ac1614": "e554a46f6627cf318b7bed724428e331",
".git/objects/51/cea9efe2452ea075c496b505561ed98374b510": "c443758945e3a40d2e02601f4db72ace",
".git/objects/54/fdd57829b433d386289396efd0c3495bd21b7e": "5c648531df58b31ff63edc7f6ee0b0b1",
".git/objects/55/6bf346cc026f897f41bb54e18ce98bab3ac1fd": "775d0dbcd5e314b82c3b6f4e7575f93c",
".git/objects/57/6f5b01af41fc9f105f6aec80507b81e689fb99": "1c69e5b37a979df83bde990d887585f9",
".git/objects/59/469f1848b8fd321493c3bed94e852d7368ab6e": "6649f7284c63ac9091e9e4213e83c4f0",
".git/objects/59/5bf67338b2adb071c8d085b705046a7b7ee2ab": "3cb434eaf1f1f98f68bbadb77892185a",
".git/objects/5a/1c3010008587dab5010c61e69d5b5cbd74c0c6": "3bfdbd08a16be97bc2baba54d77b6a0e",
".git/objects/5b/3ad734f1f250718c6f8497cfa687a5b6d1d7e1": "14c2e19e85d7a0da5bac4dc74cddc5c5",
".git/objects/5e/1d8c979665423e4792649791029ebdda2a628a": "6641f473cc642484a0d9a01ec3cb9c09",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5f/2083988e730267bdd357d66f1752b4d00a957c": "c25289aba82842bc981cfb16ab897f1b",
".git/objects/60/7938533e373007034da66a32718742c84c3ce0": "4521daee2749e64b1e4f8fba40b08629",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/69/c22cdf99e832eb98a3c27976f31a1165dfbf81": "6e3874b060c069376e96fd26fa8efb9d",
".git/objects/6a/0029c16d737c4ccdf374aafd33067554dc60cd": "23cc6bc68cc582caffef2933a366acbb",
".git/objects/6a/cfdb4fb327fa15cec36419753c4119dfbf9025": "75272930695fba989feaf14d2c8aa431",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/70/255903b3e52513063d6101b789b2ac0f6dc2c0": "6bbb6abbcfa8086163666a394b1aa3d5",
".git/objects/72/790f81f366d3ff3282d917d723835914781fe2": "6b1025d595605f840c3581be216c285c",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/98474e0db462d1943991e24df22cbeb55addd5": "0bc2ae006afcddea7de1627069a95545",
".git/objects/79/069b44e7d246ad5ad9fab1bb193c7fa812c22a": "5abc3caf31c754494e6f9ef701524253",
".git/objects/79/b80dc34057abf827e51eac8acf9e26f7de277f": "9c562bf17c34f3b8aa61cfab59d11b8c",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/objects/7b/e4b96c7c885d202cb36d7652ff5502e0da94dc": "542e72b920f35693a361cfdde718646d",
".git/objects/84/d3c5c4b9d082a11245bf86c2a27a0f1d1178cb": "c4e8646b18c2583495bf15b4f9ad990d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/75fac54e010d89199eedc03af0e8e9e68cefb1": "1a0b286df04c4b13a99d21752ef9c800",
".git/objects/88/75c7e6d83cef966fc0c27ec9347eb60e473f36": "bd42a11a8df0b3542c19351ce264b4c3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/90/7b33ca4cf88e12e27d393d261b5c7b43142232": "ea9ec9c6010b886adeea735cbf2f0f9f",
".git/objects/92/99eda652e6e91b26df107dea33afe59d33b1d2": "41036301aa3308d189fa36bb73b53f68",
".git/objects/96/5c85603f140e1f2989c37ed3b9eac3c37c05df": "fb2a37bfd3b909e5713af59cb97318b7",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9d/3afe61330adefd8fdde49997f01927ade644ab": "fe487acb990e6513848cb28b7b1ce9db",
".git/objects/a1/94c8a1e2f0e66ab8563e10a330b65cc66af85e": "95660cac1520ac33d7444af927f7d92f",
".git/objects/a3/3bc3a7b9c211e443e5c1df544b8824b3c43bb9": "3f6ebbf1503580501e5b4b218166deef",
".git/objects/a3/4f1bf4e926820853af645fb910965ac3cb3309": "2cff3b00ee419f8a1465f0ae607aa910",
".git/objects/a4/b199d3b2e87a2667682b31e776a36b4f013424": "9c33e185544ec9913560eeea31358862",
".git/objects/a5/255b2b38ddd713fb8f429b2ec446935166d859": "c992ee5fa13edc736c2ea212c17d0148",
".git/objects/a8/283a3fcd919e694bad3c7d1d1ccaa6618429bd": "7252636404b2d54dcadcdd829a4d7e2f",
".git/objects/a8/93fce5bca430bc89d9df325143535c1b12fa0a": "381c04034848d4fc7a714a2efb3af61b",
".git/objects/a8/cbaad58b467d938ba21f775051dada865d8d03": "7a06a1639d7305ab113ec78533c87e8c",
".git/objects/a8/ead7cd6f3d9daf363a576418fb28d7d26d4c83": "b4aa6fe4a3cd52537aadf00f53515104",
".git/objects/a9/a880bfe322a35e361b04de60aae82f199fd1e8": "ce158344fc4a147bef4ed3779f452159",
".git/objects/ac/da6b1b136ae09a5cd2cb4798f37c57d7082de6": "1e037d5e70f52145024a681f16df662f",
".git/objects/ae/2484233ff06c8b60c5977ac75fd3ee809e1eaf": "ee734b1d90ac3cc2d0bc111bbaafeb17",
".git/objects/ae/59d405323ec5d8add103f523d19af4dc61d969": "aa53f557e836741afec07219cc7b0944",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/25d865e0ddae3fb53fd0c759419f31f2c8660d": "6c51ab13c81c7341a2d4d546802caacd",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/9470185cb8d28ac7e9f2c2e29bc25b980208ef": "e7c141b194651bbfd64361c531150ee9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a18b89f3ef858a6a07102b61de4cd58a9f5340": "faa0b468713f8b76f81b5b86fbb37710",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/6de47f455a2a72706c27771678199038e814dd": "afc21a919f9d7e28d7f0d1bf40e23449",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/bd/9d73591428334f78f9f453edb62e259bd82e51": "8928a21dcf05aafce1e045b4452cb80a",
".git/objects/be/2128f09393347d1144364d6b91de101f19fdea": "2b061ab3806dd4afce375836eebb1001",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/1a72c206211415fb2e54f5b47f209ba16952eb": "32299335ab69ae2091656860943f407a",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/848729974d06074a9f0e0d045ac4732beb7244": "381ec5d02aad971a90b61e291b61de7f",
".git/objects/c8/2d30a5dc43a1fc86265c085d211bd451b8acd5": "9625fefd95441c04d377176fcd8b80db",
".git/objects/c9/ab46e61e9e87bd49df77d7403235a68e4ae37b": "716af45dea099028d9a1702b756e5d5a",
".git/objects/cc/8eee38f0b807a2e2be3fda523e8d612f7a3a0d": "dfe65d21a496956457b069d58b56976a",
".git/objects/cd/576a46db0cb053c86fbde68863bb261bb418e5": "45f08e28b3f2411fbb17d1b2653c7f32",
".git/objects/ce/d4af6cb7b42a35fc71ac5b0750055e00e1e323": "fa12b50a82b9d8b64ccdf5a310dc588f",
".git/objects/d1/a92b6e1994c8c9a982a8352fb4723c42fc2c25": "855989b3037645f0438e5f5baf813a5e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/3c8232bc6945b44b24a9113bf3d98875586639": "ec13a2df3d4851e17c672bdce6f31670",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0f6bfaffc1dedfe61f5275f11f638c159f2959": "f6f5f5e03adb2d5d8c06add07cfeccfb",
".git/objects/da/f1b6468cd6369b6f474a0db2222507d15675d1": "6ee6db3360a558d46520df5be65719de",
".git/objects/db/a8e2a9caffbd84b2983c977e73badc21c66c4e": "b10c39425805f59397ba2834a2d5fd84",
".git/objects/de/2daf4c489e6c11d56d758e405c12c33a90f9f6": "9623cc539e594bbe06f617a82245a871",
".git/objects/e2/c1bfaf053a8b10bf5eca68bb5014a577d100c9": "025f796004287757da70287ad6a58389",
".git/objects/e4/493113bf3161f3119bfa7ccf96d45d1184edb8": "b22440a822173aaa3130f7bdb7f2271d",
".git/objects/e8/14a20bf7b0bb9155b8495b509fbc7a659e8f61": "956e7eed787458035410e12ba8d85d9f",
".git/objects/e9/7572fec1c890a850aa57699cb1a1eadf9deac1": "f0670a6934fb219f92633c68fbc3066c",
".git/objects/e9/e34a9c46456898631edadeecae95758da86a80": "e5f7dfde8618e3f36fc7467cee44465d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/8745390be60616a1e8e6d8a3548de486aeabd2": "e30082147e7b7ca85a8d11ff4a16c30b",
".git/objects/f5/5bc2ab47a543fe1f155c7affaa81a3089be288": "e0bf6a7c255d97b1eac1266bcbb39a2b",
".git/objects/f6/a167a963318ec706adc98a01c541501f49a80b": "0966b84d014a02659fb98d7286573638",
".git/objects/f7/fc9f9a0d3d9ee2225f22571f2daae52467f425": "e74f05431339f995ae79519d1beae42e",
".git/objects/f9/c1ea20014bcd9d1de953dd8df54f8e668731f9": "4266ba8b57ae78621af1f1338058dba2",
".git/objects/fa/c8c3faa922ded67104e35429cbe3ebd8f2d430": "2303d489fe349ceff7649741880764af",
".git/objects/fc/46e799bf30fd7b71cb0a90ba11d34dcd334d2e": "6a3694ce3f03c6436dd49c9c04930b69",
".git/objects/fd/2793ffb4e3ea909c8cf2a62bf2c5561871458b": "5e1d86a7a1eed76b3386ed3c5b663003",
".git/objects/fd/76feffa492b22c2f5580500f751272f8be58a3": "3c1c1db58f544d4f0dfd2b0aeef99d42",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/objects/ff/d9138a9c3befb8deea843c2f04ef468ac3228d": "1776d70af66bc96a1e7565c52253bc12",
".git/refs/heads/main": "e7b32e0034e3acc845c76a3248451834",
".git/refs/remotes/origin/main": "e7b32e0034e3acc845c76a3248451834",
"assets/AssetManifest.bin": "c88b43165e0d38c4919dece01bac3816",
"assets/AssetManifest.bin.json": "e7ceaaa0d67ac65aa4cde7064322bf1f",
"assets/AssetManifest.json": "1a75b44467024c8bd7851b9ad73d4c6c",
"assets/assets/correct_sf.mp3": "f81755c15cddb2be52d22e03a01f412f",
"assets/assets/digitalizequiz.json": "5ddda13a049eacd341a65477f5786c3f",
"assets/assets/folders.json": "c8d61a770f0504e69274d54a3b3302b9",
"assets/assets/fonts/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/assets/leaderboard.json": "0fa4142803c0e55cde8f8fad0fe8cd6b",
"assets/assets/logo_icon.png": "cb718ff0612f57d3f33eb7ce78ce84cc",
"assets/assets/makequiz.json": "57e6edf425f852f95de6bbd5d240ed5d",
"assets/assets/rank1.json": "9b10184452699b2a2f06df62ed1d7d67",
"assets/assets/rank2.json": "32b00156b3dc8f4a845658dc14593f31",
"assets/assets/rank3.json": "bab86c777ec26fd7aefaa6a5c1f1860a",
"assets/assets/rank4.json": "9e5e96ba68ffdbf2aaaa1d5f9e48cfd2",
"assets/assets/streakpet1.json": "d71726a33352c7800b0c7ba2c578e0ec",
"assets/assets/streakpet2.json": "47e5af0156ae13f36eff83a9a4671046",
"assets/assets/streakpet3.json": "0b426bb8e53647c69a4d4285eeea4a83",
"assets/assets/wrong_sf.mp3": "9b07b38674b610e3c46feae9ad646bcc",
"assets/FontManifest.json": "af72817180f1600c6ad8d83aa72f0a98",
"assets/fonts/MaterialIcons-Regular.otf": "cd78c3e8245ceee8d5e17cc9b03d97dd",
"assets/NOTICES": "fcbaa2bda1ad60da460df8d5d5f9a423",
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
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "2c988c07b2bc1aaa750bf9114de45c6d",
"index.html": "31590bb9b4f70e7d35ac5e5766df7c5b",
"/": "31590bb9b4f70e7d35ac5e5766df7c5b",
"main.dart.js": "a9f77afbd69df34c72486ed947891d5f",
"manifest.json": "f4427555446665e7b6eb1c7a9b710610",
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

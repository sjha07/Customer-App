/**
 * 
 * Developer - Satish Jha
 * Customer App
*/

'use strict';

import React, {
	View,
	Text,
	Component,
	ScrollView,
	StyleSheet,
	Dimensions
} from 'react-native';

var Customer =  require('./Customer'),
	screen = Dimensions.get("window"),
	navigator,
	customerData = 
[
  {
    "_id": "56b86543fb6f9a5579ab16d4",
    "index": 0,
    "guid": "95e154b4-507b-48db-bf76-485d428e1f7e",
    "isActive": false,
    "balance": "$2,542.42",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "green",
    "name": "Thompson Juarez",
    "gender": "male",
    "company": "ENTHAZE",
    "email": "thompsonjuarez@enthaze.com",
    "phone": "+1 (957) 576-2686",
    "address": "312 Clinton Avenue, Kenvil, Kansas, 5863",
    "about": "Sint occaecat officia voluptate aute cillum proident occaecat nostrud consequat ut voluptate commodo. Id exercitation sit est laborum ipsum non Lorem ut cupidatat. Commodo amet nisi et eu nulla nulla duis nulla.\r\n",
    "registered": "2016-01-01T05:55:12 -06:-30",
    "latitude": -39.602766,
    "longitude": 44.467948,    
    "favoriteFruit": "strawberry"
  },

  {
    "_id": "56b86543a854d6ef88cb36b4",
    "index": 1,
    "guid": "1fc3daab-289d-4d66-a746-e928b86475cf",
    "isActive": false,
    "balance": "$3,067.40",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "brown",
    "name": "Alyssa Johnson",
    "gender": "female",
    "company": "DEVILTOE",
    "email": "alyssajohnson@deviltoe.com",
    "phone": "+1 (891) 457-3389",
    "address": "990 Aviation Road, Olney, Pennsylvania, 7096",
    "about": "Ad duis voluptate commodo exercitation occaecat adipisicing consectetur anim tempor elit excepteur. Proident quis excepteur sit ea exercitation aute in. Sit exercitation Lorem duis non nostrud cillum est commodo dolore laboris incididunt. Fugiat irure laborum qui labore veniam tempor cillum ex do deserunt cillum minim adipisicing laboris. Cillum in officia mollit eiusmod. Dolore adipisicing culpa qui quis ullamco ad voluptate irure consectetur laborum minim sit consectetur.\r\n",
    "registered": "2014-04-07T08:36:43 -06:-30",
    "latitude": -41.535502,
    "longitude": -171.114768,  
    "favoriteFruit": "banana"
  },

  {
    "_id": "56b86543c8bd3d2a214655e9",
    "index": 2,
    "guid": "f4adeaf0-851d-40be-b5c0-9d6fbb4006ab",
    "isActive": false,
    "balance": "$1,193.06",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "blue",
    "name": "Laura Mendoza",
    "gender": "female",
    "company": "VERBUS",
    "email": "lauramendoza@verbus.com",
    "phone": "+1 (976) 511-3683",
    "address": "748 Jefferson Avenue, Movico, Federated States Of Micronesia, 157",
    "about": "Ipsum adipisicing reprehenderit minim sint id laboris. Mollit esse minim est sint occaecat anim excepteur sit excepteur qui sunt occaecat. Nulla occaecat anim consequat adipisicing. Laborum laborum dolor esse magna culpa adipisicing eiusmod Lorem.\r\n",
    "registered": "2014-03-05T03:12:56 -06:-30",
    "latitude": -76.755371,
    "longitude": 104.824468,    
    "favoriteFruit": "apple"
  },
  {
    "_id": "56b8654305bfdf531e581596",
    "index": 3,
    "guid": "5a4c4e62-f668-4a74-a6d1-f5582d8cb046",
    "isActive": true,
    "balance": "$1,260.60",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "blue",
    "name": "Gena Mckinney",
    "gender": "female",
    "company": "ISOTRACK",
    "email": "genamckinney@isotrack.com",
    "phone": "+1 (876) 503-3159",
    "address": "597 Dumont Avenue, Wolcott, Colorado, 7250",
    "about": "Cillum ex ex sint dolore est. Eiusmod qui consequat cupidatat aliqua. Mollit eu do laboris amet voluptate. Ea incididunt reprehenderit fugiat dolor dolore culpa est. Irure est occaecat proident aliquip sint mollit irure sit adipisicing ex quis.\r\n",
    "registered": "2015-11-06T06:42:17 -06:-30",
    "latitude": -30.842047,
    "longitude": -79.327697,    
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "56b8654363e51b0019d5900b",
    "index": 4,
    "guid": "52418537-00c5-495f-84a4-e7992a7e534b",
    "isActive": true,
    "balance": "$3,620.73",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "green",
    "name": "Cline Sutton",
    "gender": "male",
    "company": "RECRISYS",
    "email": "clinesutton@recrisys.com",
    "phone": "+1 (902) 571-2182",
    "address": "850 Varick Street, Dodge, Guam, 5548",
    "about": "Reprehenderit cupidatat sint excepteur veniam dolore aute anim. Ad cillum ea laboris ad pariatur consequat ullamco mollit aliqua amet aliqua amet. Elit incididunt enim consequat in Lorem mollit consequat culpa ea dolor enim eiusmod tempor aute. Consectetur veniam do tempor minim nulla qui commodo et reprehenderit adipisicing mollit elit.\r\n",
    "registered": "2014-09-11T01:28:29 -06:-30",
    "latitude": 33.563782,
    "longitude": -99.611558,    
    "favoriteFruit": "apple"
  },
  {
    "_id": "56b865432b6f6bd924657612",
    "index": 5,
    "guid": "5680ed5c-bc34-4d6d-844e-01d7abf2b3d7",
    "isActive": true,
    "balance": "$3,402.29",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "brown",
    "name": "Sharron Weiss",
    "gender": "female",
    "company": "EXTRAWEAR",
    "email": "sharronweiss@extrawear.com",
    "phone": "+1 (907) 583-2628",
    "address": "129 Howard Alley, Linganore, South Dakota, 7208",
    "about": "Veniam sunt ea et consequat tempor. Occaecat do consectetur qui anim est amet pariatur tempor. Excepteur in do labore sint laborum dolor aliqua veniam sint. Qui eu ad reprehenderit qui.\r\n",
    "registered": "2014-05-28T06:22:52 -06:-30",
    "latitude": 50.923887,
    "longitude": -45.114644,    
    "favoriteFruit": "banana"
  },
  {
    "_id": "56b865439c6764a3a1f2c555",
    "index": 6,
    "guid": "7e3d56fe-1db6-455a-8386-15dcfdc85b5b",
    "isActive": true,
    "balance": "$1,753.49",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "brown",
    "name": "Kaufman Robbins",
    "gender": "male",
    "company": "GUSHKOOL",
    "email": "kaufmanrobbins@gushkool.com",
    "phone": "+1 (985) 577-2602",
    "address": "127 Gerritsen Avenue, Whitewater, Illinois, 4371",
    "about": "Ipsum dolore sit nulla aute velit minim eu elit. Labore aliqua minim consequat ut ullamco laboris fugiat quis eu incididunt amet amet occaecat. Minim sit id et dolore culpa do.\r\n",
    "registered": "2015-08-09T02:55:58 -06:-30",
    "latitude": 39.534652,
    "longitude": -24.584931,    
    "favoriteFruit": "apple"
  },

  {
    "_id": "56b8658df7f0e713450acf43",
    "index": 0,
    "guid": "230dced1-5f0c-4d77-94af-2be5c1758d74",
    "isActive": false,
    "balance": "$2,513.91",
    "picture": "http://placehold.it/32x32",
    "age": 32,
    "eyeColor": "brown",
    "name": "Lynette Tucker",
    "gender": "female",
    "company": "DIGIGENE",
    "email": "lynettetucker@digigene.com",
    "phone": "+1 (919) 530-3249",
    "address": "979 Plaza Street, Elizaville, Texas, 6561",
    "about": "Eiusmod minim sint culpa amet excepteur ipsum id laborum dolor. Officia culpa fugiat aute tempor Lorem veniam pariatur irure ut nostrud. Ipsum cupidatat nisi laborum duis do. Cupidatat pariatur eu dolor cillum elit cillum cillum exercitation nisi do ad tempor. Aliquip proident elit dolor mollit amet incididunt consectetur proident et. Non incididunt officia consequat consectetur proident laborum adipisicing anim.\r\n",
    "registered": "2014-11-15T03:45:23 -06:-30",
    "latitude": -5.636577,
    "longitude": -79.50824,    
    "favoriteFruit": "banana"
  },
  {
    "_id": "56b8658d68077c5c7d716400",
    "index": 1,
    "guid": "6301ee27-86d1-493b-bad4-967a81e01ccb",
    "isActive": true,
    "balance": "$3,022.74",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "brown",
    "name": "Gayle Moody",
    "gender": "female",
    "company": "PASTURIA",
    "email": "gaylemoody@pasturia.com",
    "phone": "+1 (961) 530-3290",
    "address": "941 Baycliff Terrace, Henrietta, Idaho, 595",
    "about": "Qui exercitation officia reprehenderit anim officia. Dolore duis do in incididunt esse enim commodo nisi ea reprehenderit laborum ut deserunt. Elit laborum amet cupidatat irure elit labore adipisicing aute proident cupidatat mollit ea duis qui. Sit consequat duis esse magna deserunt enim sint occaecat voluptate et. Laborum veniam Lorem sint consequat deserunt quis sint excepteur. Exercitation non veniam laborum adipisicing ullamco velit.\r\n",
    "registered": "2014-10-14T06:30:17 -06:-30",
    "latitude": -17.190953,
    "longitude": 107.509503,    
    "favoriteFruit": "banana"
  },
  {
    "_id": "56b8658d31638d4f6830e225",
    "index": 2,
    "guid": "33aca749-8684-4301-a517-1836f0b0d5b9",
    "isActive": false,
    "balance": "$3,476.02",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "green",
    "name": "Elena Flynn",
    "gender": "female",
    "company": "VENDBLEND",
    "email": "elenaflynn@vendblend.com",
    "phone": "+1 (898) 411-3770",
    "address": "435 Tillary Street, Sultana, Mississippi, 7109",
    "about": "Duis ipsum sit irure ullamco est anim id eiusmod pariatur ad occaecat aliqua consectetur ex. Reprehenderit aute excepteur velit laborum incididunt ad. Incididunt et ipsum nostrud quis officia nostrud irure amet duis consectetur aute. Est exercitation aute ad nostrud pariatur eiusmod. Dolore nulla laborum nulla voluptate ullamco ex deserunt magna ea sint aliqua. Magna et aliquip duis irure laboris ex aute ullamco Lorem eu qui.\r\n",
    "registered": "2014-11-08T03:41:17 -06:-30",
    "latitude": -50.861539,
    "longitude": 90.546418,    
    "favoriteFruit": "banana"
  },
  {
    "_id": "56b8658ddf47acfb2c243200",
    "index": 3,
    "guid": "1be34863-dc20-4e83-93b6-e90d3a9e8cfe",
    "isActive": false,
    "balance": "$1,940.35",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "green",
    "name": "Elinor Hammond",
    "gender": "female",
    "company": "COGNICODE",
    "email": "elinorhammond@cognicode.com",
    "phone": "+1 (891) 595-3877",
    "address": "875 Hyman Court, Sterling, Oregon, 8651",
    "about": "Consequat mollit aute ipsum magna excepteur. Nostrud occaecat deserunt aliqua ea. Nostrud eu ad officia enim. Amet nostrud id non ad sunt voluptate ad tempor.\r\n",
    "registered": "2014-09-09T06:59:32 -06:-30",
    "latitude": -60.336693,
    "longitude": 8.498061,    
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "56b8658d773f1f45adce7daa",
    "index": 4,
    "guid": "cd9fd28c-ab64-4571-932d-9c2d717067c3",
    "isActive": true,
    "balance": "$2,695.45",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "eyeColor": "green",
    "name": "Shauna Diaz",
    "gender": "female",
    "company": "GOGOL",
    "email": "shaunadiaz@gogol.com",
    "phone": "+1 (900) 589-2039",
    "address": "762 Grattan Street, Coyote, Connecticut, 4643",
    "about": "Nisi id in veniam aute eiusmod et ex pariatur excepteur reprehenderit laborum et. Reprehenderit et laboris proident quis eiusmod nisi sint non nostrud proident magna aute. Exercitation Lorem ut velit nulla id. Dolor adipisicing minim commodo occaecat voluptate proident veniam veniam et elit duis commodo consequat eu.\r\n",
    "registered": "2014-12-30T05:28:52 -06:-30",
    "latitude": -67.590041,
    "longitude": 128.664776,    
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "56b8658d253bc7e56f67eee4",
    "index": 5,
    "guid": "ce125230-d844-40c0-9044-d0c57a404a45",
    "isActive": false,
    "balance": "$3,708.08",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "green",
    "name": "Shawn Potts",
    "gender": "female",
    "company": "PAPRICUT",
    "email": "shawnpotts@papricut.com",
    "phone": "+1 (882) 555-3756",
    "address": "531 Colin Place, Joes, Virgin Islands, 1896",
    "about": "In enim magna reprehenderit ut ex sint ea ipsum aliquip exercitation cillum. Id ut ad consequat proident eu sit elit nostrud non fugiat anim elit. Labore deserunt incididunt tempor culpa.\r\n",
    "registered": "2014-09-12T05:42:41 -06:-30",
    "latitude": -36.709195,
    "longitude": -14.484776,    
    "favoriteFruit": "banana"
  },

  {
    "_id": "56b8659db3da1078c9d810e1",
    "index": 0,
    "guid": "bfd614f4-db9d-4cde-b249-83613af54d99",
    "isActive": false,
    "balance": "$3,542.15",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "brown",
    "name": "Candy Crawford",
    "gender": "female",
    "company": "GRUPOLI",
    "email": "candycrawford@grupoli.com",
    "phone": "+1 (921) 520-2231",
    "address": "423 Madison Street, Wollochet, Delaware, 1828",
    "about": "Ea occaecat occaecat cillum officia fugiat occaecat. Lorem incididunt dolor esse consectetur est mollit irure incididunt. Tempor anim sunt minim fugiat ipsum. Amet fugiat laborum nisi est nulla magna eu proident.\r\n",
    "registered": "2014-12-23T02:10:10 -06:-30",
    "latitude": 33.440933,
    "longitude": 149.165626,    
    "favoriteFruit": "banana"
  },
  {
    "_id": "56b8659dbb3aed44e0f4f846",
    "index": 1,
    "guid": "4908dfe2-408d-41bc-a2d7-d921e2e15d3f",
    "isActive": false,
    "balance": "$3,770.79",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "brown",
    "name": "Bruce Zimmerman",
    "gender": "male",
    "company": "ROCKYARD",
    "email": "brucezimmerman@rockyard.com",
    "phone": "+1 (852) 451-2443",
    "address": "192 Jackson Place, Nash, Oklahoma, 1852",
    "about": "Nulla eu ipsum ad aute est. Ut enim magna proident elit. Est qui ex tempor commodo et commodo excepteur laborum aliquip. Laborum sunt laborum nulla adipisicing veniam culpa cupidatat ipsum id sit laboris ea cillum. Eu tempor fugiat nisi officia veniam exercitation cupidatat veniam. Tempor culpa in pariatur ex eiusmod consequat consectetur exercitation eu aliqua culpa.\r\n",
    "registered": "2014-01-28T07:54:13 -06:-30",
    "latitude": -77.231749,
    "longitude": -151.152144,    
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "56b8659da05802e40d2272f0",
    "index": 2,
    "guid": "860a3611-1c50-4e20-96df-12015a6b736b",
    "isActive": true,
    "balance": "$1,479.30",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "green",
    "name": "Barnett Walton",
    "gender": "male",
    "company": "QUAREX",
    "email": "barnettwalton@quarex.com",
    "phone": "+1 (812) 427-3354",
    "address": "355 Bond Street, Beechmont, Marshall Islands, 7982",
    "about": "Pariatur ipsum elit sint officia tempor ad officia culpa irure excepteur dolor officia sit. Nostrud culpa commodo labore excepteur ad do commodo irure elit irure est commodo. Dolor non consequat fugiat sint do aliqua consequat magna dolore culpa eiusmod qui. Aliqua irure esse occaecat fugiat laborum Lorem officia veniam consequat proident. Excepteur anim proident excepteur ea magna fugiat reprehenderit pariatur et in minim magna sit aliqua.\r\n",
    "registered": "2015-09-12T04:21:59 -06:-30",
    "latitude": 25.206154,
    "longitude": -153.615507,    
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "56b8659df5d9d1eb65b910e6",
    "index": 3,
    "guid": "afe0267c-b223-4ba2-868e-fd99d98c7a5a",
    "isActive": false,
    "balance": "$2,524.91",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "blue",
    "name": "Kim Wheeler",
    "gender": "female",
    "company": "EMTRAC",
    "email": "kimwheeler@emtrac.com",
    "phone": "+1 (858) 469-3344",
    "address": "945 Surf Avenue, Roberts, Oregon, 3609",
    "about": "Tempor esse id in eiusmod. Consequat aliqua mollit magna ex. Reprehenderit irure ut officia labore velit pariatur.\r\n",
    "registered": "2014-09-24T11:22:37 -06:-30",
    "latitude": -35.216438,
    "longitude": 176.281962,    
    "favoriteFruit": "apple"
  },
  {
    "_id": "56b8659d9458459f3a2eac59",
    "index": 4,
    "guid": "791e5f5c-3ba1-4e2f-993d-36b7a8c73971",
    "isActive": true,
    "balance": "$1,180.62",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "blue",
    "name": "Winters Wagner",
    "gender": "male",
    "company": "STEELFAB",
    "email": "winterswagner@steelfab.com",
    "phone": "+1 (807) 501-3338",
    "address": "473 Brighton Court, Dyckesville, Maryland, 3330",
    "about": "Lorem dolore ullamco proident eu eiusmod eiusmod officia consectetur eu ad ea. Tempor aliquip veniam laborum laboris occaecat ut aliqua consectetur laborum minim exercitation. Dolore voluptate nostrud deserunt adipisicing laboris labore officia laboris mollit esse tempor exercitation adipisicing. Sit ex minim dolore proident laboris minim proident enim qui tempor culpa. Tempor laboris veniam irure qui nisi amet adipisicing culpa laborum aute sit ex labore ea. Eu proident veniam amet do sint ullamco.\r\n",
    "registered": "2014-01-31T09:51:30 -06:-30",
    "latitude": -75.127173,
    "longitude": 140.048738,
    "favoriteFruit": "banana"
  },
  {
    "_id": "56b8659d06c6b0dffb762b07",
    "index": 5,
    "guid": "a69fdec5-399b-446a-8463-795cb90fddd0",
    "isActive": false,
    "balance": "$2,744.53",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": "Cherie Ayers",
    "gender": "female",
    "company": "ENORMO",
    "email": "cherieayers@enormo.com",
    "phone": "+1 (890) 568-2030",
    "address": "932 Poly Place, Hachita, California, 943",
    "about": "Deserunt tempor nisi aute sit nisi dolor eiusmod duis incididunt culpa. Nostrud ut minim quis fugiat minim minim eiusmod cupidatat ut laborum. Lorem elit eu incididunt sunt eu proident exercitation ad velit. Enim adipisicing officia sit exercitation consectetur amet nisi dolor non incididunt esse elit. Occaecat pariatur est sit velit sit non qui ea anim sunt laborum minim laboris ipsum.\r\n",
    "registered": "2014-03-18T12:47:49 -06:-30",
    "latitude": -23.031891,
    "longitude": 35.522661,    
    "favoriteFruit": "banana"
  },

  {
    "_id": "56b865b5ee67618e5055a53a",
    "index": 0,
    "guid": "6c1899c8-edd4-425c-988b-75d41cfd5d06",
    "isActive": true,
    "balance": "$1,737.34",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "eyeColor": "green",
    "name": "Salinas Hess",
    "gender": "male",
    "company": "GEEKFARM",
    "email": "salinashess@geekfarm.com",
    "phone": "+1 (983) 405-2726",
    "address": "358 Ross Street, Albrightsville, Colorado, 5252",
    "about": "Proident enim consectetur anim ipsum culpa adipisicing mollit in. Deserunt consectetur non et nisi. Qui cillum dolore ipsum aute aute. Tempor non laborum pariatur officia proident nostrud minim in dolor. Irure officia culpa est dolore sunt laborum tempor Lorem.\r\n",
    "registered": "2015-02-27T03:03:09 -06:-30",
    "latitude": 10.863782,
    "longitude": -107.810062,    
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "56b865b5296758598ffcbe98",
    "index": 1,
    "guid": "5c9bf0fe-cf5c-4ff3-b15a-3257d3fe4aa8",
    "isActive": true,
    "balance": "$3,350.12",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "blue",
    "name": "Jan Gill",
    "gender": "female",
    "company": "VERTON",
    "email": "jangill@verton.com",
    "phone": "+1 (823) 525-2603",
    "address": "993 Willoughby Avenue, Wacissa, Minnesota, 601",
    "about": "Sit aliqua deserunt aute eu nulla id cillum. Amet sit sint occaecat cupidatat velit dolor sit consectetur aliqua incididunt amet tempor nostrud. Incididunt pariatur Lorem velit ea mollit eu fugiat ullamco ex.\r\n",
    "registered": "2014-06-12T07:57:46 -06:-30",
    "latitude": 76.886306,
    "longitude": -108.605199,    
    "favoriteFruit": "banana"
  },
  {
    "_id": "56b865b5f953911ab93d1aaa",
    "index": 2,
    "guid": "35b00878-8167-4e0e-9153-514da927c3a6",
    "isActive": false,
    "balance": "$1,671.65",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "blue",
    "name": "Irene Nelson",
    "gender": "female",
    "company": "GRAINSPOT",
    "email": "irenenelson@grainspot.com",
    "phone": "+1 (988) 422-2657",
    "address": "357 Macon Street, Brenton, Washington, 8130",
    "about": "Adipisicing amet est exercitation ea. Magna fugiat in in consequat non commodo proident voluptate non dolor. Aute eu exercitation aute veniam incididunt quis mollit incididunt aliqua. Amet eu et minim ex commodo Lorem nisi proident sit non. Veniam magna do sit occaecat enim dolor esse. Laborum magna consectetur id sit pariatur id cillum id excepteur ex consectetur.\r\n",
    "registered": "2014-11-19T10:51:59 -06:-30",
    "latitude": -45.065518,
    "longitude": -65.149259,    
    "favoriteFruit": "banana"
  },
  {
    "_id": "56b865b502579368c1a03cc6",
    "index": 3,
    "guid": "99636692-6d12-4fad-a0e2-620d3931f597",
    "isActive": true,
    "balance": "$1,595.11",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "green",
    "name": "Latasha Santana",
    "gender": "female",
    "company": "CEMENTION",
    "email": "latashasantana@cemention.com",
    "phone": "+1 (833) 584-2921",
    "address": "962 Downing Street, Springhill, Delaware, 1240",
    "about": "Consequat dolor nostrud consequat deserunt aute commodo occaecat adipisicing. Eiusmod dolore adipisicing reprehenderit exercitation irure irure nisi dolor. Dolore magna deserunt reprehenderit occaecat sit nulla adipisicing sunt ad cillum velit proident velit. Minim ut nisi irure anim ut laborum aliquip enim.\r\n",
    "registered": "2015-05-27T02:17:47 -06:-30",
    "latitude": -89.375088,
    "longitude": 35.952804,    
    "favoriteFruit": "apple"
  },
  
  {
    "_id": "56b865c7b04630d808753374",
    "index": 3,
    "guid": "4f10cb20-af92-4cc4-b61b-b8b7912476b5",
    "isActive": false,
    "balance": "$3,820.18",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "green",
    "name": "Key Montoya",
    "gender": "male",
    "company": "CUIZINE",
    "email": "keymontoya@cuizine.com",
    "phone": "+1 (866) 430-3221",
    "address": "270 Hancock Street, Greer, Michigan, 7715",
    "about": "Ut officia proident esse do cillum nulla excepteur fugiat ullamco. Esse labore excepteur Lorem incididunt consequat minim laborum sint. Deserunt exercitation aliquip proident deserunt aliqua.\r\n",
    "registered": "2016-01-27T10:06:08 -06:-30",
    "latitude": 79.537417,
    "longitude": 138.711043,    
    "favoriteFruit": "banana"
  },
  {
    "_id": "56b865c7e3761b7578463344",
    "index": 4,
    "guid": "c688a571-f0f5-413d-b6b7-cd0eb1b4e7cd",
    "isActive": false,
    "balance": "$1,808.96",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "brown",
    "name": "Reyna Small",
    "gender": "female",
    "company": "TSUNAMIA",
    "email": "reynasmall@tsunamia.com",
    "phone": "+1 (980) 430-3532",
    "address": "303 Cherry Street, Sanborn, Georgia, 4659",
    "about": "Laborum anim adipisicing esse fugiat dolor id consectetur id officia quis velit duis magna. Adipisicing nisi laborum officia sit qui elit Lorem officia. Cupidatat ut deserunt consectetur dolore eu irure dolore dolor eiusmod excepteur.\r\n",
    "registered": "2014-04-24T01:19:36 -06:-30",
    "latitude": 73.013171,
    "longitude": -96.199591,    
    "favoriteFruit": "apple"
  }
];

class CustomerList extends Component {
	render (){
		navigator= this.props.navigator;
		return (

			<View>
				<View style={{flex:1, marginTop: 20, padding: 10}}>
					<Text onPress={this.goToHomePage}>
						Home
					</Text>

				</View>

				<View>
					<Text style={styles.custHeading}>
						Customer List
					</Text>
					<ScrollView containerContentStyle={styles.scrollViewStyle} bounces={true}>
							{this.customers()}
					</ScrollView>
					
				</View>
			</View>
		);
	}

	goToHomePage() {
		navigator.pop();
	}

	customers () {
		return customerData.map(function(customer) {
			return (<Customer customer={customer} />);
		});
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	scrollViewStyle:{
		width: screen.width,
		flex: 1		
	},

	custHeading: {
        fontSize: 24,
        color: '#11AA33'
    },
});


module.exports = CustomerList;
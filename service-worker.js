"use strict";var precacheConfig=[["/index.html","e1216fcad23025c8b6576458493c7f1e"],["/static/css/main.52c42281.css","ce00a2ea4c76ca5c216b9212ac56ed7c"],["/static/js/main.6fce9633.js","8d88a161ffaf92a284d21b05c51a664c"],["/static/media/GeneticAlgorithms.16036da6.png","16036da6cdb036108ebc7e841db30b82"],["/static/media/Lato-Light.5b761f2d.ttf","5b761f2d1e4259ea6ac7ab3ebf7f3c49"],["/static/media/NotAvailable.9207e476.jpg","9207e4762a32bea22b2cf740e5b5dc90"],["/static/media/Qlik.aaf74e57.png","aaf74e579a22bb01246fef1037d0cebc"],["/static/media/Raleway-Regular.580d0778.ttf","580d0778ad254335be45bf58bb449f43"],["/static/media/artificialNeuralNetwork.2316affd.jpg","2316affde2150b5e51ae5634cadbe224"],["/static/media/cover.13e58b56.jpg","13e58b56354121b036079abf6b1aaac3"],["/static/media/dialogc.cf28c99a.png","cf28c99a45bc9d0006eaaa2edf2f8ea0"],["/static/media/forceful.563103f6.jpg","563103f636df21a5a36f80d812346520"],["/static/media/forcefulFull.f7abc795.jpg","f7abc79595e2a415dd06b972ba47fde7"],["/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/static/media/jaccuzi.6709be05.jpg","6709be05320968a02b60721d77e4b977"],["/static/media/jaccuziFull.bd5607c7.jpg","bd5607c78f6b3d0c9131965dc9ecbdc0"],["/static/media/profile.f8c8492a.jpg","f8c8492a662a4f0ebd61d482f4569872"],["/static/media/resume.449e528a.pdf","449e528adedc8dbbbb8dc51d2116bb83"],["/static/media/scubaDiving.8e8dbaf8.jpg","8e8dbaf89290f06949872597b41596eb"],["/static/media/skiJump.a1cc91ef.jpg","a1cc91ef2173204883dbf966db57e176"],["/static/media/skiJumpFull.890ce7db.jpg","890ce7dbbe2e201b88041376686f8983"],["/static/media/soccer.88605256.jpg","88605256300de65297b472dde95eb690"],["/static/media/soccerFull.ed45392d.jpg","ed45392d7cef5597a33427ddb05b05ec"],["/static/media/wildebeest.2571edb8.png","2571edb8c390bd08127f8a94597afbdf"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});
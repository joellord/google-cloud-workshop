(()=>{"use strict";var e,r,t,a,o,f={},n={};function c(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return f[e].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}c.m=f,c.c=n,e=[],c.O=(r,t,a,o)=>{if(!t){var f=1/0;for(d=0;d<e.length;d++){t=e[d][0],a=e[d][1],o=e[d][2];for(var n=!0,i=0;i<t.length;i++)(!1&o||f>=o)&&Object.keys(c.O).every((e=>c.O[e](t[i])))?t.splice(i--,1):(n=!1,o<f&&(f=o));if(n){e.splice(d--,1);var b=a();void 0!==b&&(r=b)}}return r}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[t,a,o]},c.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return c.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var f={};r=r||[null,t({}),t([]),t(t)];for(var n=2&a&&e;"object"==typeof n&&!~r.indexOf(n);n=t(n))Object.getOwnPropertyNames(n).forEach((r=>f[r]=()=>e[r]));return f.default=()=>e,c.d(o,f),o},c.d=(e,r)=>{for(var t in r)c.o(r,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((r,t)=>(c.f[t](e,r),r)),[])),c.u=e=>"assets/js/"+({38:"3aaaf183",53:"935f2afb",84:"c1f9d0f2",85:"1f391b9e",154:"54a9539a",159:"7582a366",165:"51e8a644",190:"39999e23",195:"c4f5d8e4",206:"f8409a7e",270:"899188ca",304:"6e3437a5",338:"bb596396",414:"393be207",448:"b79e83d7",458:"68819b32",486:"83afbb69",514:"1be78505",612:"f474ec65",641:"4996983c",744:"92c3568b",787:"1c1d709f",817:"14eb3368",871:"7ad260b2",918:"17896441"}[e]||e)+"."+{38:"f26f0ba3",53:"3787f356",84:"5ecd12d3",85:"2468b42f",154:"a19d38e5",159:"167e4e77",165:"f9f33d05",190:"7122740b",195:"28d4e827",206:"41765901",270:"23a6ab06",304:"bc84a92b",338:"57d08e33",414:"0f08c2bc",448:"03cbcc28",455:"84335188",458:"e92389f3",486:"c5ea932d",514:"4585b2c8",612:"079c6843",641:"fbe74c86",744:"c5d7d1a7",787:"ee7a9880",817:"e18c3f99",871:"98fdef02",918:"0e506e70",972:"180891fe"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},o="gcp-workshop:",c.l=(e,r,t,f)=>{if(a[e])a[e].push(r);else{var n,i;if(void 0!==t)for(var b=document.getElementsByTagName("script"),d=0;d<b.length;d++){var u=b[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+t){n=u;break}}n||(i=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,c.nc&&n.setAttribute("nonce",c.nc),n.setAttribute("data-webpack",o+t),n.src=e),a[e]=[r];var l=(r,t)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(t))),r)return r(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),i&&document.head.appendChild(n)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/google-cloud-workshop/",c.gca=function(e){return e={17896441:"918","3aaaf183":"38","935f2afb":"53",c1f9d0f2:"84","1f391b9e":"85","54a9539a":"154","7582a366":"159","51e8a644":"165","39999e23":"190",c4f5d8e4:"195",f8409a7e:"206","899188ca":"270","6e3437a5":"304",bb596396:"338","393be207":"414",b79e83d7:"448","68819b32":"458","83afbb69":"486","1be78505":"514",f474ec65:"612","4996983c":"641","92c3568b":"744","1c1d709f":"787","14eb3368":"817","7ad260b2":"871"}[e]||e,c.p+c.u(e)},(()=>{var e={303:0,532:0};c.f.j=(r,t)=>{var a=c.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var f=c.p+c.u(r),n=new Error;c.l(f,(t=>{if(c.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),f=t&&t.target&&t.target.src;n.message="Loading chunk "+r+" failed.\n("+o+": "+f+")",n.name="ChunkLoadError",n.type=o,n.request=f,a[1](n)}}),"chunk-"+r,r)}},c.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,f=t[0],n=t[1],i=t[2],b=0;if(f.some((r=>0!==e[r]))){for(a in n)c.o(n,a)&&(c.m[a]=n[a]);if(i)var d=i(c)}for(r&&r(t);b<f.length;b++)o=f[b],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(d)},t=self.webpackChunkgcp_workshop=self.webpackChunkgcp_workshop||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();
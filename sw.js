if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>s(e,o),a={module:{uri:o},exports:t,require:c};i[o]=Promise.all(n.map((e=>a[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-a2f1bc43"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/icon-192.png",revision:"45f0e9513ee33bdb3ff8879f7c2fc268"},{url:"assets/icon-384.png",revision:"3cf251a83522d13e74d40f753556f2a0"},{url:"assets/icon-512.png",revision:"69cea7d072d7e42f2bad8b6b1a562b09"},{url:"dexie.min.js",revision:"1e4a91f5cf779986845a7281859d8355"},{url:"index.css",revision:"6baff15d7a356025a33b51bcca2bb328"},{url:"index.html",revision:"449bf4a1fa75f41debc32c094a0bcb44"},{url:"index.js",revision:"b58a45b7a518eaa053b539aaa4b6ee23"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map

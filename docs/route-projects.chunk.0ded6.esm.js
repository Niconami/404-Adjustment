(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2kgO":function(e,s,r){"use strict";(function(e){var i=r("Y3FI");const t=[{link:"/projects/0090C4",name:"0090C4",desc:"A cipher with the distinguishing feature being an offset of 0x0090C4.",keywords:"weez'd 2 k0090c4 cipher"},{link:"/projects/bipher",name:"Bipher",desc:["Variation of the ",e(i.Link,{href:"/projects/keysmashCipher"},"Keysmash Cipher"),", improving upon it by simply applying it twice."],keywords:"keysmash cipher bipher"},{link:"/projects/caesarVariation",name:"Caesar Variation",desc:"This is the famous Caesar Cipher, but the change by 3 is replaced with an alternative.",keywords:"cipher caesarvariation caesar variation"},{link:"/projects/continuousRegisterCipher",name:"Continuous Register Cipher",desc:"This cipher works by incrementing a counter per character it sees, then outputting the current value.",keywords:"crc continuousregistercipher continuous register cipher"},{link:"/projects/hashKeyCipher",name:"Hashed CRC",desc:["This cipher is a direct improvement over the ",e(i.Link,{href:"/projects/keyedCRC"},"Keyed CRC"),", including a hash over the key-based security it offers."],keywords:"continuous register cipher hashed crc hashkeycipher"},{link:"/projects/hCRCRework",name:"Hashed CRC: Reworked",desc:["Another iteration upon the CRC, with the base being the ",e(i.Link,{href:"/projects/hashKeyCipher"},"Hashed CRC"),", updated with an improved hashing algorithm."],keywords:"continuous register cipher hcrcrework hashed crc: reworked"},{link:"/projects/K0090C4",name:"Weez'd 2",desc:[e(i.Link,{href:"/projects/0090C4"},"0090C4"),"'s key-integrated alternative."],keywords:"0090c4 cipher k0090c4 weez'd 2"},{link:"/projects/keyedCRC",name:"Keyed CRC",desc:["A key-based security improvement over the original  ",e(i.Link,{href:"/projects/continuousRegisterCipher"},"Continuous Register Cipher"),"."],keywords:"continuous register cipher keyedcrc keyed crc"},{link:"/projects/keysmashCipher",name:"Keysmash Cipher",desc:"The original cipher, that got us here.",keywords:"bipher keysmashcipher keysmash cipher"},{link:"/projects/poetry",name:"Poems",desc:"A collection of poems written by me.",keywords:"poems poetry"},{link:"/projects/mcserverping",name:"Minecraft Server Pinger",desc:"A quick tool to check who is online on a specified Minecraft: Java Edition server, and a few more things.",keywords:"minecraft server pinger mc"},{link:"/projects/wallpapers/circles",name:"Circles (Beta)",desc:"A powerful tool which allows for creation of wallpapers using only circles and layers.",keywords:"background creator circles layers wallpapers (beta)"},{link:"/projects/embedCreator",name:"Embed Creator (Beta)",desc:"A tool to create custom link embeds on external sites that display link previews.",keywords:"embed creator external previews (beta)"},{link:"/projects/embedBrowser",name:"Embed Browser (Beta)",desc:"A tool, made to browse embeds made by the Embed Creator.",keywords:"embed creator browser external previews"},{link:"/docs#API",name:"API",desc:"The API for this site, which can be used by individuals.",keywords:"api backend program"},{link:"/projects/subSolver",name:"Substitution Cipher Solver",desc:"Tool to aid solving a ciphertext enciphered with a substitution cipher",keywords:"substitution cipher solver subsolver"}];s.a=t}).call(this,r("hosL").h)},"59Wk":function(e,s){"use strict";s.a={searchbar:"searchbar__gYPpE"}},"5PBX":function(e,s,r){"use strict";(function(e){var i=r("59Wk");s.a=({searchFunction:s})=>e("span",{class:i.a.searchbar},e("input",{placeholder:"Search...",onInput:e=>s(e.target.value),autoFocus:!0}),e("button",null,e("img",{src:"/assets/search.png",alt:""})))}).call(this,r("hosL").h)},"69/0":function(e,s,r){"use strict";r.r(s),function(e){var i=r("UnQz"),t=r("2kgO"),o=r("8M9P"),a=r("Y3FI");s.default=()=>e("div",{class:i.a.showcases},e(o.b,{items:t.a}),e("p",null,"This is where all my projects are stored. Click any you like the look of!",e("br",null),e(a.Link,{href:"/",rel:"noopener noreferrer"},"Home")),e("footer",null))}.call(this,r("hosL").h)},"8M9P":function(e,s,r){"use strict";(function(e,i){r.d(s,"a",(function(){return c}));var t=r("dwRq"),o=r("ox/y"),a=r("5PBX"),n=r("QRet");const c=s=>{const{item:r}=s,{name:i,desc:a,link:n}=r;return e("span",{class:t.a.showcase},e("span",{class:t.a.header},i),e("span",{class:t.a.desc},a),e(o.Link,{class:t.a.link,href:n},e("button",null,"Go!")))};s.b=({items:s})=>{const[r,o]=Object(n.c)(s.map((s=>e(c,{item:s,key:s.link}))));return e(i,null,e("header",{class:t.a.spacer}),e("div",{class:t.a["showcase-container"]},e(a.a,{searchFunction:r=>{const i=[];for(let t=0;t<s.length;t++)s[t].keywords.includes(r.toLowerCase())&&i.push(e(c,{item:s[t],key:s[t].link}));o(i)}}),e("div",null,r)))}}).call(this,r("hosL").h,r("hosL").Fragment)},UnQz:function(e,s){"use strict";s.a={showcases:"showcases__UhJnS"}},dwRq:function(e,s){"use strict";s.a={showcase:"showcase__R8tAi",desc:"desc__dbAJB",link:"link__I2jZf",spacer:"spacer__o0E7m"}}}]);
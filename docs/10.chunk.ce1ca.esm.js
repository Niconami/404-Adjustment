(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{egLa:function(e,t){"use strict";t.a={displayContainer:"displayContainer__65Ywh","embed-page":"embed-page__k-LtT",imageAlign:"imageAlign__kpyob",displayTitleText:"displayTitleText__P2Qgd",displayDescText:"displayDescText__dZiwz",displayID:"displayID__9ootO",displayButton:"displayButton__Zv8NN",embedInput:"embedInput__kRzDc",embedPrev:"embedPrev__PCzK6",embedNext:"embedNext__8NY-m",loader:"loader__hjPGX",spin:"spin__rUH6Y"}},fh57:function(e,t,a){"use strict";a.r(t),function(e,s){var n=a("Y3FI"),i=a("QRet"),l=a("p3sy"),c=a("egLa");const o=e=>new Date(new Date(e+6048e5)-new Date),r=t=>{const{displayData:a,loadState:s}=t;if(!a)return e("p",null,1===s?"No embeds!":"Unable to access service!");const n=[];for(const[t,s]of Object.entries(a))o(s.time)>0&&n.push(e(d,{key:t,ID:t,value:s}));return e("span",{class:c.a["embed-page"]},n)},p=t=>{const{pageTotal:a,currentPage:s,itemCount:n}=t,{setPage:i,setItemCount:l}=t;return e("span",{class:c.a.embedInput},"Items: ",e("input",{class:c.a.embedInput,rows:"1",cols:"2",type:"number",value:n,onChange:e=>l(e.target.value)}),e("button",{class:c.a.embedPrev,disabled:s<=1,onclick:()=>i((e=>e-1))},"<"),"Current Page: ",s,e("button",{class:c.a.embedNext,disabled:a<=s,onclick:()=>i((e=>e+1))},">"))},d=t=>{const{ID:a,value:{time:s,title:n,description:i,image:r,color:p}}=t;return e("span",{class:c.a.displayContainer,style:`--t: #${p};`},e("span",{class:c.a.imageAlign},e("textarea",{readOnly:!0,class:c.a.displayTitleText},n),(e=>{if(!e)return!1;const t=["jpg","png","jpeg","webp"],a=e.split(".");for(const e of t)if(a[a.length-1]===e)return!0;return!1})(r)?e(l.a,{width:100,height:100,link:r}):""),e("textarea",{readOnly:!0,class:c.a.displayDescText},i),e("button",{class:c.a.displayButton,onclick:(d=a,()=>{var e;null!==(e=navigator)&&void 0!==e&&e.clipboard&&navigator.clipboard.writeText(`https://api.xtraea.com/v1/embed?s=${d}`)})},e("p",null,"Copy embed link")),e("p",{class:c.a.displayID},"ID: ",a," - Expires in: ",(e=>{const t=["d","h","m","s"],a=o(e),s=Math.floor(a.getTime()/864e5),n=a.getTime()%864e5;return[s,Math.floor(n/36e5),a.getMinutes(),a.getSeconds()].map(((e,a)=>0!==e?` ${e}${t[a]}`:"")).filter((e=>""!==e))})(s)));var d};t.default=()=>{const[t,a]=Object(i.c)({}),[l,o]=Object(i.c)(0),[d,u]=Object(i.c)(1),[m,g]=Object(i.c)(9),[b,h]=Object(i.c)(0);Object(i.a)((()=>{(async()=>{const e=await(t=d,s=m,new Promise(((e,a)=>{setTimeout((()=>e({})),1e4),fetch(`https://api.xtraea.com/v1/embed/list?page=${t}&items=${s}`).then((t=>{e(t.json())})).catch((()=>a({})))})));var t,s;o(e.pages),a(e.embeds),h(Object.entries(e).length>0?1:-1)})()}),[d,m]);const y=e(p,{pageTotal:l,currentPage:d,setPage:u,itemCount:m,setItemCount:g});return e(s,null,e("p",null,e(n.Link,{href:"/disclaimer"},"Disclaimer")),y,b?e(r,{displayData:t,loadState:b}):e("div",{class:c.a.loader}),l>1?y:"",e("footer",null))}}.call(this,a("hosL").h,a("hosL").Fragment)},l38I:function(e,t){"use strict";t.a={imgbutton:"imgbutton__OWqfi",container:"container__Aye9c"}},p3sy:function(e,t,a){"use strict";(function(e){var s=a("QRet"),n=a("l38I");t.a=({color:t,width:a,height:i,link:l})=>{const[c,o]=Object(s.c)(!1);return e("span",{class:n.a.container,style:`width: ${a}px; height: ${i}px;`,children:c?e("img",{width:a,height:i,src:`${l}`}):e("button",{style:`background-color: #${t};`,class:n.a.imgbutton,onclick:()=>o(!0)},"Click to load image.")})}}).call(this,a("hosL").h)}}]);
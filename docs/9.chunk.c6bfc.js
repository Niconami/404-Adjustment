(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"10dd":function(t,e,r){"use strict";(function(t){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function i(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=h(t);if(e){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function l(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return s(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function f(t,e,r){return(e=p(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}r.d(e,"a",(function(){return g})),r.d(e,"c",(function(){return b})),r.d(e,"b",(function(){return d}));var v=r("hosL"),y=r("UxE5"),g=function(e){function r(t){var e;return f(s(e=n.call(this,t)),"reverseString",(function(t){return t.split("").reverse().join("")})),f(s(e),"getVal",(function(t){return(null==t?void 0:t.toLowerCase().charCodeAt(0))-96})),f(s(e),"getChar",(function(t){return String.fromCharCode(t%32+96)})),e.inputTextBox=Object(v.createRef)(),e.outputTextBox=Object(v.createRef)(),e}u(r,e);var n=c(r);return i(r,[{key:"bEF",value:function(){}},{key:"bDF",value:function(){}},{key:"handleInputBoxChange",value:function(t){this.setState({value:t.target.value}),this.encipher(!1)}},{key:"decipher",value:function(t){var e=this.outputTextBox.current.value;this.inputTextBox.current.value=t?this.bDF(this.reverseString(this.bDF(this.reverseString(e)))).replaceAll("`"," "):this.bDF(this.reverseString(this.bDF(this.reverseString(e)))).replaceAll("`"," ").toLowerCase()}},{key:"encipher",value:function(t){var e=this.inputTextBox.current.value;this.outputTextBox.current.value=t?this.reverseString(this.bEF(this.reverseString(this.bEF(e)))).replaceAll("`"," "):this.reverseString(this.bEF(this.reverseString(this.bEF(e)))).replaceAll("`"," ").toLowerCase()}},{key:"render",value:function(){var e=this;return t("span",{class:y.a.ciphercontainer},t("h1",null,this.state.title),t("p",null,t("textarea",{ref:this.inputTextBox,cols:"80",rows:"12",autoFocus:!0,onKeyUp:function(){return e.encipher()},value:this.state.value})),t("p",{class:y.a.arrow},"↑"),t("p",null,t("button",{onClick:function(){return e.decipher()}},"Decipher")),t("p",{class:y.a.arrow},"↑"),t("p",null,t("textarea",{ref:this.outputTextBox,cols:"80",rows:"12"})))}}]),r}(v.Component),b=function(e){function r(t){var e;return(e=n.call(this,t)).keyTextBox=Object(v.createRef)(),e}u(r,e);var n=c(r);return i(r,[{key:"getKey",value:function(){return this.keyTextBox.current.value}},{key:"render",value:function(){var e=this;return t("span",{class:y.a.ciphercontainer},t("h1",null,this.state.title),t("p",null,t("textarea",{ref:this.inputTextBox,cols:"80",rows:"12",autoFocus:!0,onKeyUp:function(){return e.encipher()},value:this.state.value})),t("p",{class:y.a.arrow},"↑"),t("p",{style:"display: flex; align-items: center; justify-content: center;"},t("textarea",{ref:this.keyTextBox,class:y.a.keyarea,id:"key",cols:"20",rows:"1",maxlength:"20",placeholder:"Key:"}),t("button",{class:y.a.keybutton,onClick:function(){return e.decipher()}},"Decipher")),t("p",{class:y.a.arrow},"↑"),t("p",null,t("textarea",{ref:this.outputTextBox,cols:"80",rows:"12"})))}}]),r}(g),d=function(t){function e(){for(var t,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return f(s(t=r.call.apply(r,[this].concat(n))),"hash",function(){function t(t){if(null!=t)return t.toLowerCase().charCodeAt(0)-96}function e(t){return String.fromCharCode(t%32+96)}function r(n){if(1==n.length)return n;var o=[],i="";for(u=1;u<n.length;u++){for(a=0;a<64;a++)i+=e(t(n[u-1][a])^t(n[u][a]));o.push(i),i=""}return r(o)}function n(t){return o(t,t.length)}function o(t,r){return t.length>64*c?t:o(t+=e(Math.pow(r,2)+Math.sqrt(Math.pow(t.length,3))+2*(i(t,0)+i(t,1))),0)}function i(e,r){var n=0;if(0===r){for(u=0;u<e.length;u++)n+=t(e[u]);return n}for(u=0;u<e.length;u++)u%2==0&&(n=Math.max(n,1)*Math.ceil(t(e[u])));return n}var u,a,c=2;return function(t){return 0==t.length?t:n(r(function(t){for(u=0;t.length%64!=0;u++)t+=n(t[t.length-1])[u%256];t+=n(t[t.length-1])[62];for(var e=0,r=[""],o=0;o<t.length;o+=64)r[e]=t.substring(o-64,o),e++;return r.shift(),r}(n(t.toString())))).replaceAll(""," ").substring(0,63)}}()),t}u(e,t);var r=c(e);return i(e)}(b)}).call(this,r("hosL").h)},UxE5:function(t,e){"use strict";e.a={ciphercontainer:"ciphercontainer__NSqUO",arrow:"arrow__tYCQh",keybutton:"keybutton__Wmt+e"}},s6bs:function(t,e,r){"use strict";r.r(e),function(t,n){function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(i=void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(n.key,"string"),"symbol"===o(i)?i:String(i)),n)}var i}function u(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=h(t);if(e){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}var f=r("10dd"),p=r("ox/y"),v=function(t){function e(t){var e;return(e=r.call(this,t)).state={title:"Weez'd"},e}a(e,t);var r=l(e);return u(e,[{key:"bEF",value:function(t){for(var e=t[0],r=1;r<t.length;r++)e+=String.fromCharCode(t[r].charCodeAt()+t[r-1].charCodeAt()+37060);return e}},{key:"bDF",value:function(t){for(var e=t[0],r=1;r<t.length;r++)e+=String.fromCharCode(t[r].charCodeAt()-e[r-1].charCodeAt()-37060);return e.toString()}}]),e}(f.a),y=function(t){function e(t){var e;return(e=r.call(this,t)).state={title:"Bipher"},e}a(e,t);var r=l(e);return u(e,[{key:"bEF",value:function(t){for(var e=t[0],r=1;r<t.length;r++)e+=this.getChar((this.getVal(t[r])+this.getVal(t[r-1]))%32);return e}},{key:"bDF",value:function(t){for(var e=t[0],r=1;r<t.length;r++)e+=this.getChar((this.getVal(t[r])-this.getVal(e[r-1]))%32);return e}}]),e}(f.a),g=function(t){function e(t){var e;return(e=r.call(this,t)).state={title:"Caesar Variation Cipher"},e}a(e,t);var r=l(e);return u(e,[{key:"bEF",value:function(t){for(var e="",r=t.length%16==0?1:t.length%32,n=0;n<t.length;n++)e+=this.getChar(this.getVal(t[n])+r%32);return e}},{key:"bDF",value:function(t){for(var e="",r=t.length%32==0?1:t.length,n=0;n<t.length;n++)e+=this.getChar(this.getVal(t[n])-r%32);return e}}]),e}(f.a),b=function(t){function e(t){var e;return(e=r.call(this,t)).state={title:"Continuous Register Cipher"},e}a(e,t);var r=l(e);return u(e,[{key:"bEF",value:function(t){for(var e=0,r="",n=0;n<t.length;n++)e=(e+getVal(t[n]))%32,r+=getChar(e);return r}},{key:"bDF",value:function(t){for(var e=t[0],r=1;r<t.length;r++)e+=getChar(getVal(t[r])-getVal(t[r-1]));return e}}]),e}(f.a),d=function(t){function e(t){var e;return(e=r.call(this,t)).state={title:"Keyed CRC"},e}a(e,t);var r=l(e);return u(e,[{key:"bEF",value:function(t){for(var e=0,r="",n=this.getKey(),o=0;o<t.length;o++)e=(e+this.getVal(t[o]))%32,r+=this.getChar(e);t=r,r="";for(var i=0;i<t.length;i++)r+=this.getChar(this.getVal(t[i])+this.getVal(n[i%n.length]));return r}},{key:"bDF",value:function(t){for(var e="",r=this.getKey(),n=0;n<t.length;n++)e+=this.getChar(this.getVal(t[n])-this.getVal(r[n%r.length]));e=(t=e)[0];for(var o=1;o<t.length;o++)e+=this.getChar(this.getVal(t[o])-this.getVal(t[o-1]));return e}}]),e}(f.c),C=function(t){function e(t){var e;return(e=r.call(this,t)).state={title:"Hashed CRC: Reworked"},e}a(e,t);var r=l(e);return u(e,[{key:"bEF",value:function(t){for(var e=0,r="",n=0;n<t.length;n++)e=(e+this.getVal(t[n]))%32,r+=this.getChar(e);t=r;var o=this.hash(this.getKey());r="";for(var i=0;i<t.length;i++)r+=this.getChar(this.getVal(t[i])+this.getVal(o[i%o.length]));return r}},{key:"bDF",value:function(t){for(var e="",r=this.hash(this.getKey()),n=0;n<t.length;n++)e+=this.getChar(this.getVal(t[n])-this.getVal(r[n%r.length]));e=(t=e)[0];for(var o=1;o<t.length;o++)e+=this.getChar(this.getVal(t[o])-this.getVal(t[o-1]));return e}}]),e}(f.b),m=function(t){function e(t){var e;return(e=r.call(this,t)).state={title:"Weez'd 2"},e}a(e,t);var r=l(e);return u(e,[{key:"bEF",value:function(t){for(var e=this.hash(this.getKey()),r=t[0],n=1;n<t.length;n++)r+=String.fromCharCode(t[n].charCodeAt()+t[n-1].charCodeAt()+37060-e[n%e.length].charCodeAt());return r}},{key:"bDF",value:function(t){for(var e=this.hash(this.getKey()),r=t[0],n=1;n<t.length;n++)r+=String.fromCharCode(t[n].charCodeAt()-r[n-1].charCodeAt()-37060+e[n%e.length].charCodeAt());return r.toString()}}]),e}(f.b),w=function(t){function e(t){var e;return(e=r.call(this,t)).state={title:"Keysmash Cipher"},e}a(e,t);var r=l(e);return u(e,[{key:"encipher",value:function(){for(var t=this.inputTextBox.current.value,e=t[0],r=1;r<t.length;r++)e+=this.getChar((this.getVal(t[r])+this.getVal(t[r-1]))%32);this.outputTextBox.current.value=e}},{key:"decipher",value:function(){for(var t=this.outputTextBox.current.value,e=t[0],r=1;r<t.length;r++)e+=this.getChar((this.getVal(t[r])-this.getVal(e[r-1]))%32);this.inputTextBox.current.value=e}}]),e}(f.a),x=function(e){function r(){return o.apply(this,arguments)}a(r,e);var o=l(r);return u(r,[{key:"render",value:function(){return t(n,null,t("h1",null,"This cipher has been removed due to design choices previously made that I have decided to drop support for."),t("p",null,"If this causes issues, open one on GitHub. The repository may be found in the ",t(p.Link,{href:"/docs/"},"documentation")," for the site."))}}]),r}(f.a);e.default={Weezd:v,Bipher:y,CaesarVariation:g,CRC:b,KCRC:d,HKCRCR:C,Weezd2:m,Keysmash:w,HashKeyCipher:x}}.call(this,r("hosL").h,r("hosL").Fragment)}}]);
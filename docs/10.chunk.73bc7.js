(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{oF1q:function(t,e){"use strict";e.a={controlsContainer:"controlsContainer__Aq-p9",layerControl:"layerControl__3+S8c",description:"description__jhJO7",divider:"divider__FJJ76"}},"thC+":function(t,e,n){"use strict";n.r(e),function(t){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function u(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b(t);if(e){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}function v(t,e,n){return(e=y(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===r(e)?e:String(e)}var g=n("hosL"),m=n("oF1q"),O=function(e){function n(t){var e;return v(d(e=r.call(this,t)),"sizeChanger",(function(t){return function(n){e.setState(v({},t,+n.target.value))}})),v(d(e),"renderHelper",{layers:{},drawCircle:function(t,e,n,r){t.arc(e,n,r,0,2*Math.PI)},randX:function(t){return Math.floor(Math.random()*(e.state.width+t+1))-t},randY:function(t){return Math.floor(Math.random()*(e.state.height+t+1))-t},getRadius:function(t,e,n){switch(t){case"0":return e;case"1":var r=Math.min(e,n),o=Math.max(e,n);return r+Math.floor(Math.random()*(o-r));case"2":var a=Math.floor(Math.random()*(n+1));return Math.random()>.5?e+a:e-a}}}),e.renderCanvas=e.renderCanvas.bind(d(e)),e.background=Object(g.createRef)(),e.canvas=Object(g.createRef)(),e.state={width:screen.width,height:screen.height},e}l(n,e);var r=f(n);return u(n,[{key:"render",value:function(e,n){return Object(g.h)(t,null,Object(g.h)("p",{class:m.a.description},'(BETA: It is guaranteed that issues are present.) This tool can create backgrounds (wallpapers) easily by adding layers, customising them until you are happy with how it looks, then finally right clicking and selecting "Save As".'),Object(g.h)(w,{renderCanvas:this.renderCanvas,canvasRef:this.canvas,passthroughRef:this.background}),"Set output size: ",Object(g.h)("br",null),"x: ",Object(g.h)("input",{onChange:this.sizeChanger("width"),type:"number"}),Object(g.h)("br",null),"y: ",Object(g.h)("input",{onChange:this.sizeChanger("height"),type:"number"}),Object(g.h)("span",{class:m.a.divider,style:"width: ".concat(n.width,"px")}),Object(g.h)("canvas",{ref:this.canvas}))}},{key:"renderCanvas",value:function(t){var e,n,r=null===(e=this.canvas.current)||void 0===e?void 0:e.getContext("2d");if(r){for(var o in r.canvas.width=this.state.width,r.canvas.height=this.state.height,r.clearRect(0,0,r.canvas.width,r.canvas.height),t)this.renderHelper.layers[o]=this.drawLayer(t[o]);for(var a in this.renderHelper.layers)r.drawImage(this.renderHelper.layers[a],0,0);r.globalCompositeOperation="destination-over",r.fillStyle=null===(n=this.background.current)||void 0===n?void 0:n.value,r.beginPath(),r.fillRect(0,0,r.canvas.width,r.canvas.height),r.fill()}}},{key:"drawLayer",value:function(t){var e=this,n=this.renderHelper,r=document.createElement("canvas");r.width=this.state.width,r.height=this.state.height;var o=r.getContext("2d"),a=[],i=function(){var t=document.createElement("canvas");return t.height=e.state.height,t.width=e.state.width,t};return o.fillStyle=t.baseColor,t.innerTransparent&&(o.fillRect(0,0,o.canvas.width,o.canvas.height),o.globalCompositeOperation="destination-out"),function(){for(var e=[],r=function(){var r,o,s,u=0;do{if(r=n.getRadius(t.size.mode,t.size.value,t.size.offset),o=n.randX(r),s=n.randY(r),++u>100)break}while(e.some((function(t){return Math.sqrt(Math.pow(t.x-o,2)+Math.pow(t.y-s,2))<t.radius+r})));if(u<=100){a[c]=i();var l=a[c].getContext("2d");if(l.beginPath(),n.drawCircle(l,o,s,r),l.fill(),!t.innerTransparent){l.globalCompositeOperation="source-in";var h=l.createRadialGradient(o,s,.75*r,o,s,.75*r*2);h.addColorStop(0,t.baseColor),h.addColorStop(1,t.shadow),l.fillStyle=h,l.fillRect(0,0,l.canvas.width,l.canvas.height)}e.push({x:o,y:s,radius:r})}},c=0;c<t.amount;c++)r();for(var s in a){o.drawImage(a[s],0,0)}}(),r}}]),n}(g.Component),w=function(t){function e(t){var e;return(e=n.call(this,t)).state={nextID:0,controlsList:[],controlStates:{}},e.addNewControl(!1),e}l(e,t);var n=f(e);return u(e,[{key:"render",value:function(t,e){var n=this,r=t.passthroughRef,o=e.controlsList;return Object(g.h)("span",{class:m.a.controlsContainer},"Background colour: ",Object(g.h)("input",{ref:r,type:"color"}),o,Object(g.h)("button",{onClick:function(){return n.addNewControl(!0)}},"Add new layer (on top)"))}},{key:"sendState",value:function(t,e){var n=this;this.setState((function(n){return n.controlStates[e]=t,n}),(function(){n.props.renderCanvas(n.state.controlStates)}))}},{key:"removeControl",value:function(t){var e=this,n=this.state.controlsList.filter((function(e){return e.props.id!==t})),r=this.state.controlStates;delete r[t],this.setState({controlsList:n,controlStates:r},(function(){e.props.renderCanvas(e.state.controlStates)}))}},{key:"addNewControl",value:function(t){var e=Object(g.h)(j,{key:this.state.nextID,id:this.state.nextID,parent:this,noDelete:!t});this.setState((function(t){return{nextID:t.nextID+1,controlsList:[].concat(i(t.controlsList),[e])}}))}}]),e}(g.Component),j=function(t){function e(t){var e;return v(d(e=n.call(this,t)),"valueUpdate",{innerTransparent:function(t){return e.setState({innerTransparent:t.target.checked})}}),v(d(e),"changeValue",(function(t){return function(n){e.setState(v({},t,n.target.value))}})),v(d(e),"changeSize",(function(t){return function(n){var r=a(a({},e.state.size),{},v({},t,n.target.value));e.setState({size:r})}})),e.state={baseColor:"#000000",shadow:"#000000",innerTransparent:!1,amount:5,size:{mode:"0",value:100,offset:0}},e}l(e,t);var n=f(e);return u(e,[{key:"removeSelf",value:function(){this.props.parent.removeControl(this.props.id)}},{key:"render",value:function(t,e){var n,r=this,o=t.noDelete;return t.parent.sendState(e,t.id),o||(n=Object(g.h)("button",{onClick:function(){r.removeSelf()}},"Delete")),Object(g.h)("span",{class:m.a.layerControl},Object(g.h)("input",{onChange:this.changeValue("baseColor"),type:"color"}),Object(g.h)("input",{onChange:this.changeValue("shadow"),type:"color"}),Object(g.h)("input",{onChange:this.valueUpdate.innerTransparent,disabled:!0,type:"checkbox"}),Object(g.h)("input",{onChange:this.changeValue("amount"),type:"range",min:"1",max:"10",value:e.amount,step:"1"}),Object(g.h)("select",{onChange:this.changeSize("mode")},Object(g.h)("option",{value:"0",selected:!0},"Absolute"),Object(g.h)("option",{value:"1"},"Range"),Object(g.h)("option",{value:"2"},"Cluster")),Object(g.h)("input",{onChange:this.changeSize("value"),type:"number"}),Object(g.h)("input",{onChange:this.changeSize("offset"),type:"number",disabled:0==e.size.mode}),n)}}]),e}(g.Component);e.default=O}.call(this,n("hosL").Fragment)}}]);
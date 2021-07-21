/* prebid-universal-creative v1.9.0-pre
Updated : 2021-07-21 */
!function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getEmptyIframe=function(t,e){var r=document.createElement("iframe");return r.setAttribute("frameborder",0),r.setAttribute("scrolling","no"),r.setAttribute("marginheight",0),r.setAttribute("marginwidth",0),r.setAttribute("TOPMARGIN",0),r.setAttribute("LEFTMARGIN",0),r.setAttribute("allowtransparency","true"),r.setAttribute("width",e),r.setAttribute("height",t),r},e.insertElement=function(t,e,r){var n;e=e||document,n=r?e.getElementsByTagName(r):e.getElementsByTagName("head");try{(n=n.length?n:e.getElementsByTagName("body")).length&&(n=n[0]).insertBefore(t,n.firstChild)}catch(t){}}},function(t,e,r){"use strict";var n=r(2),o=r(5);window.ucTag=window.ucTag||{};var i=(0,o.newEnvironment)(window),a=(0,n.newRenderingManager)(window,i);window.ucTag.renderAd=a.renderAd},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.newRenderingManager=function(h,d){function n(t,e,r,n,o,i){var a=2<arguments.length&&void 0!==r?r:"",s=3<arguments.length?n:void 0,c=4<arguments.length?o:void 0,u=5<arguments.length?i:void 0,l="Prebid_";if(a.substr(0,l.length)===l)!function(t){var e=h.localStorage.getItem(t);y(!0)(e)}(a);else{var p="".concat(function(t,e){var r=void 0===e||""===e?b:e;return"https://".concat(void 0===t||""===t?v:t).concat(r)}(t,e),"?uuid=").concat(a);if(void 0!==s&&""!==s){var f=s.split("x").map(Number);!function(n,o){if(d.isSafeFrame()){var i=h.innerWidth,a=h.innerHeight;i===n&&a===o||(h.$sf.ext.register(n,o,function(t){var e=n-i,r=o-a;h.$sf.ext.expand({r:e,b:r,push:!0})}),h.parent.postMessage({sentinel:"amp",type:"embed-size",width:n,height:o},"*"))}}(f[0],f[1])}else console.log("Targeting key hb_size not found to resize creative");g.sendRequest(p,y(u,c))}}function y(s,c){return function(t){var e=function(t){var e;try{e=JSON.parse(t)}catch(t){console.log("Error parsing response from cache host: ".concat(t))}return e}(t),r=g.getCreativeCommentMarkup(e),n=e.width?e.width:e.w,o=e.height?e.height:e.h;if(e.wurl&&(0,g.triggerPixel)(decodeURIComponent(e.wurl)),e.adm)e.adm=c?e.adm.replace("${AUCTION_PRICE}",c):e.adm.replace("${AUCTION_PRICE}",""),r+=s?u(e.adm,n,o):e.adm,e.nurl&&(r+=g.createTrackPixelHtml(decodeURIComponent(e.nurl))),g.writeAdHtml(r);else if(e.nurl)if(s){r+=u(g.loadScript(h,e.nurl).outerHTML,n,o),g.writeAdHtml(r)}else{var i=e.nurl,a=g.getCreativeComment(e);m.insertElement(a,document,"body"),g.writeAdUrl(i,n,o)}e.burl&&g.triggerBurl(e.burl)}}function u(t,e,r){var n=g.getUUID();return'<div id="'.concat(n,'" style="border-style: none; position: absolute; width:100%; height:100%;">\n      <div id="').concat(n,'_inner" style="margin: 0 auto; width:').concat(e,"px; height:").concat(r,'px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">').concat(t,"</div>\n      </div>")}return{renderAd:function(t,e){var r=g.transformAuctionTargetingData(e);d.isMobileApp(r.env)?n(r.cacheHost,r.cachePath,r.uuid,r.size,r.hbPb,!0):d.isAmp(r.uuid)?n(r.cacheHost,r.cachePath,r.uuid,r.size,r.hbPb):d.canLocatePrebid()?function(t,e){for(var r=h,n=0;n<10;n++)if((r=r.parent).pbjs)try{r.pbjs.renderAd(t,e);break}catch(t){continue}}(t,r.adId):function(p,t,e){var r,n=1<arguments.length&&void 0!==t?t:"",o=2<arguments.length?e:void 0,i=h.location,a=g.parseUrl(o),f=a.protocol+"://"+a.host,s=n||h.location.hostname,c=i.protocol+"//"+s;function u(t){var e=t.message?"message":"data",r={};try{r=JSON.parse(t[e])}catch(t){return}var n=t.origin||t.originalEvent.origin;if(r.message&&"Prebid Response"===r.message&&f===n&&r.adId===p&&(r.ad||r.adUrl)){var o=h.document.body,i=r.ad,a=r.adUrl,s=r.width,c=r.height;if("video"===r.mediaType)console.log("Error trying to write ad.");else if(i){var u=m.getEmptyIframe(r.height,r.width);o.appendChild(u),u.contentDocument.open(),u.contentDocument.write(i),u.contentDocument.close()}else if(a){var l=m.getEmptyIframe(c,s);l.style.display="inline",l.style.overflow="hidden",l.src=a,m.insertElement(l,document,"body")}else console.log("Error trying to write ad. No ad for bid response id: ".concat(id))}}h.addEventListener("message",u,!1),r=JSON.stringify({message:"Prebid Request",adId:p,adServerDomain:c}),h.parent.postMessage(r,f)}(r.adId,r.adServerDomain,r.pubUrl)}}};var g=n(r(3)),m=n(r(0));function a(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return a=function(){return t},t}function n(t){if(t&&t.__esModule)return t;var e=a();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=n?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=t[o]}}return r.default=t,e&&e.set(t,r),r}var v="prebid.adnxs.com",b="/pbc/v1/cache"},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.triggerPixel=function(t,e){var r=new Image;e&&"function"==typeof e&&(r.addEventListener("load",e),r.addEventListener("error",e));r.src=t},n.createTrackPixelHtml=function(t){if(!t)return"";var e=encodeURI(t);return'<div style="position:absolute;left:0px;top:0px;visibility:hidden;"><img src="'.concat(e,'"></div>')},n.writeAdUrl=function(t,e,r){var n=o.getEmptyIframe(r,e);n.src=t,document.body.appendChild(n)},n.writeAdHtml=function(t){r(document.body,t)},n.sendRequest=function(t,e){var r=new XMLHttpRequest;r.addEventListener("load",function(){e(r.responseText)}),r.open("GET",t),r.send()},n.getUUID=function(){var r=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=(r+16*Math.random())%16|0;return r=Math.floor(r/16),("x"===t?e:3&e|8).toString(16)})},n.loadScript=function(t,e,r){var n=t.document,o=n.createElement("script");o.type="text/javascript",r&&"function"==typeof r&&(o.readyState?o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,r())}:o.onload=function(){r()});o.src=e;var i=n.getElementsByTagName("head");(i=i.length?i:n.getElementsByTagName("body")).length&&(i=i[0]).insertBefore(o,i.firstChild);return o},n.getCreativeComment=function(t){return document.createComment("Creative ".concat(t.crid," served by Prebid.js Header Bidding"))},n.getCreativeCommentMarkup=function(t){var e=n.getCreativeComment(t),r=document.createElement("div");return r.appendChild(e),r.innerHTML},n.transformAuctionTargetingData=function(e){var r={hb_adid:"adId",hb_cache_host:"cacheHost",hb_cache_path:"cachePath",hb_cache_id:"uuid",hb_format:"mediaType",hb_env:"env",hb_size:"size",t13_pb:"hbPb"};function t(t){return!(!e[t]||!(function(t){return i(t,"Object")}(e[t])&&0<Object.keys(e[t]).length||s(e[t])&&""!==e[t]))}var n={},o={};t("targetingMap")?o=function(e){var r={};return Object.keys(e).forEach(function(t){Array.isArray(e[t])&&0<e[t].length&&(r[t]=e[t][0])}),r}(e.targetingMap):t("targetingKeywords")&&(o=function(t){var o={},e=t.split(",");return 0<e.length&&e.forEach(function(t){var e=t.split(":");if(2===e.length){var r=e[0],n=e[1];o[r]=n}}),o}(e.targetingKeywords));return function(e){Object.keys(e).forEach(function(t){n[r[t]||t]=e[t]})}(o),Object.keys(e).forEach(function(t){"targetingMap"!==t&&"targetingKeywords"!==t&&s(e[t])&&""!==e[t]&&(n[t]=e[t])}),n},n.parseUrl=function(t){var e=document.createElement("a");return e.href=decodeURIComponent(t),{href:e.href,protocol:(e.protocol||"").replace(/:$/,""),hostname:e.hostname,port:+e.port,pathname:e.pathname.replace(/^(?!\/)/,"/"),hash:(e.hash||"").replace(/^#/,""),host:(e.host||window.location.host).replace(/:(443|80)$/,"")}};var o=function(t){if(t&&t.__esModule)return t;var e=a();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=n?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=t[o]}}r.default=t,e&&e.set(t,r);return r}(e(0));function a(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return a=function(){return t},t}var r=e(4);function i(t,e){return Object.prototype.toString.call(t)==="[object "+e+"]"}function s(t){return i(t,"String")}},function(t,e,r){var n;n=function(){return o={},r.m=n=[function(t,e,r){"use strict";var n,o=r(1),i=(n=o)&&n.__esModule?n:{default:n};t.exports=i.default},function(t,e,r){"use strict";e.__esModule=!0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.default=d;var n,o=r(2),c=(n=o)&&n.__esModule?n:{default:n},i=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}}(r(4));function u(){}var a={afterAsync:u,afterDequeue:u,afterStreamStart:u,afterWrite:u,autoFix:!0,beforeEnqueue:u,beforeWriteToken:function(t){return t},beforeWrite:function(t){return t},done:u,error:function(t){throw new Error(t.msg)},releaseAsync:!1},l=0,p=[],f=null;function h(){var t=p.shift();if(t){var e=i.last(t);e.afterDequeue(),t.stream=function(t,e,n){(f=new c.default(t,n)).id=l++,f.name=n.name||f.id,d.streams[f.name]=f;var r=t.ownerDocument,o={close:r.close,open:r.open,write:r.write,writeln:r.writeln};function i(t){t=n.beforeWrite(t),f.write(t),n.afterWrite(t)}s(r,{close:u,open:u,write:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return i(e.join(""))},writeln:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return i(e.join("")+"\n")}});var a=f.win.onerror||u;return f.win.onerror=function(t,e,r){n.error({msg:t+" - "+e+": "+r}),a.apply(f.win,[t,e,r])},f.write(e,function(){s(r,o),f.win.onerror=a,n.done(),f=null,h()}),f}.apply(void 0,t),e.afterStreamStart()}}function d(t,e,r){if(i.isFunction(r))r={done:r};else if("clear"===r)return p=[],f=null,void(l=0);r=i.defaults(r,a);var n=[t=/^#/.test(t)?window.document.getElementById(t.substr(1)):t.jquery?t[0]:t,e,r];return t.postscribe={cancel:function(){n.stream?n.stream.abort():n[1]=u}},r.beforeEnqueue(n),p.push(n),f||h(),t.postscribe}s(d,{streams:{},queue:p,WriteStream:c.default})},function(t,e,r){"use strict";e.__esModule=!0;var n,s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=r(3),i=(n=o)&&n.__esModule?n:{default:n},a=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}}(r(4));var l="data-ps-",p="ps-style",f="ps-script";function c(t,e){var r=l+e,n=t.getAttribute(r);return a.existy(n)?String(n):n}function u(t,e,r){var n=2<arguments.length&&void 0!==r?r:null,o=l+e;a.existy(n)&&""!==n?t.setAttribute(o,n):t.removeAttribute(o)}var h=(d.prototype.write=function(){var t;for((t=this.writeQueue).push.apply(t,arguments);!this.deferredRemote&&this.writeQueue.length;){var e=this.writeQueue.shift();a.isFunction(e)?this._callFunction(e):this._writeImpl(e)}},d.prototype._callFunction=function(t){var e={type:"function",value:t.name||t.toString()};this._onScriptStart(e),t.call(this.win,this.doc),this._onScriptDone(e)},d.prototype._writeImpl=function(t){this.parser.append(t);for(var e=void 0,r=void 0,n=void 0,o=[];(e=this.parser.readToken())&&!(r=a.isScript(e))&&!(n=a.isStyle(e));)(e=this.options.beforeWriteToken(e))&&o.push(e);0<o.length&&this._writeStaticTokens(o),r&&this._handleScriptToken(e),n&&this._handleStyleToken(e)},d.prototype._writeStaticTokens=function(t){var e=this._buildChunk(t);return e.actual?(e.html=this.proxyHistory+e.actual,this.proxyHistory+=e.proxy,this.proxyRoot.innerHTML=e.html,this._walkChunk(),e):null},d.prototype._buildChunk=function(t){for(var e=this.actuals.length,r=[],n=[],o=[],i=t.length,a=0;a<i;a++){var s=t[a],c=s.toString();if(r.push(c),s.attrs){if(!/^noscript$/i.test(s.tagName)){var u=e++;n.push(c.replace(/(\/?>)/," "+l+"id="+u+" $1")),s.attrs.id!==f&&s.attrs.id!==p&&o.push("atomicTag"===s.type?"":"<"+s.tagName+" "+l+"proxyof="+u+(s.unary?" />":">"))}}else n.push(c),o.push("endTag"===s.type?c:"")}return{tokens:t,raw:r.join(""),actual:n.join(""),proxy:o.join("")}},d.prototype._walkChunk=function(){for(var t=void 0,e=[this.proxyRoot];a.existy(t=e.shift());){var r=1===t.nodeType;if(!r||!c(t,"proxyof")){r&&u(this.actuals[c(t,"id")]=t,"id");var n=t.parentNode&&c(t.parentNode,"proxyof");n&&this.actuals[n].appendChild(t)}e.unshift.apply(e,a.toArray(t.childNodes))}},d.prototype._handleScriptToken=function(t){var e=this,r=this.parser.clear();r&&this.writeQueue.unshift(r),t.src=t.attrs.src||t.attrs.SRC,(t=this.options.beforeWriteToken(t))&&(t.src&&this.scriptStack.length?this.deferredRemote=t:this._onScriptStart(t),this._writeScriptToken(t,function(){e._onScriptDone(t)}))},d.prototype._handleStyleToken=function(t){var e=this.parser.clear();e&&this.writeQueue.unshift(e),t.type=t.attrs.type||t.attrs.TYPE||"text/css",(t=this.options.beforeWriteToken(t))&&this._writeStyleToken(t),e&&this.write()},d.prototype._writeStyleToken=function(t){var e=this._buildStyle(t);this._insertCursor(e,p),t.content&&(e.styleSheet&&!e.sheet?e.styleSheet.cssText=t.content:e.appendChild(this.doc.createTextNode(t.content)))},d.prototype._buildStyle=function(t){var r=this.doc.createElement(t.tagName);return r.setAttribute("type",t.type),a.eachKey(t.attrs,function(t,e){r.setAttribute(t,e)}),r},d.prototype._insertCursor=function(t,e){this._writeImpl('<span id="'+e+'"/>');var r=this.doc.getElementById(e);r&&r.parentNode.replaceChild(t,r)},d.prototype._onScriptStart=function(t){t.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(t)},d.prototype._onScriptDone=function(t){t===this.scriptStack[0]?(this.scriptStack.shift(),this.write.apply(this,t.outerWrites),!this.scriptStack.length&&this.deferredRemote&&(this._onScriptStart(this.deferredRemote),this.deferredRemote=null)):this.options.error({msg:"Bad script nesting or script finished twice"})},d.prototype._writeScriptToken=function(t,e){var r=this._buildScript(t),n=this._shouldRelease(r),o=this.options.afterAsync;t.src&&(r.src=t.src,this._scriptLoadHandler(r,n?o:function(){e(),o()}));try{this._insertCursor(r,f),r.src&&!n||e()}catch(t){this.options.error(t),e()}},d.prototype._buildScript=function(t){var r=this.doc.createElement(t.tagName);return a.eachKey(t.attrs,function(t,e){r.setAttribute(t,e)}),t.content&&(r.text=t.content),r},d.prototype._scriptLoadHandler=function(e,r){function n(){e=e.onload=e.onreadystatechange=e.onerror=null}var o=this.options.error;function t(){n(),null!=r&&r(),r=null}function i(t){n(),o(t),null!=r&&r(),r=null}function a(t,e){var r=t["on"+e];null!=r&&(t["_on"+e]=r)}a(e,"load"),a(e,"error"),s(e,{onload:function(){if(e._onload)try{e._onload.apply(this,Array.prototype.slice.call(arguments,0))}catch(t){i({msg:"onload handler failed "+t+" @ "+e.src})}t()},onerror:function(){if(e._onerror)try{e._onerror.apply(this,Array.prototype.slice.call(arguments,0))}catch(t){return void i({msg:"onerror handler failed "+t+" @ "+e.src})}i({msg:"remote script failed "+e.src})},onreadystatechange:function(){/^(loaded|complete)$/.test(e.readyState)&&t()}})},d.prototype._shouldRelease=function(t){return!/^script$/i.test(t.nodeName)||!!(this.options.releaseAsync&&t.src&&t.hasAttribute("async"))},d);function d(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d),this.root=t,this.options=e,this.doc=t.ownerDocument,this.win=this.doc.defaultView||this.doc.parentWindow,this.parser=new i.default("",{autoFix:e.autoFix}),this.actuals=[t],this.proxyHistory="",this.proxyRoot=this.doc.createElement(t.nodeName),this.scriptStack=[],this.writeQueue=[],u(this.proxyRoot,"proxyof",0)}e.default=h},function(t,e,r){var n;n=function(){return o={},r.m=n=[function(t,e,r){"use strict";var n,o=r(1),i=(n=o)&&n.__esModule?n:{default:n};t.exports=i.default},function(t,e,r){"use strict";e.__esModule=!0;var n,a=u(r(2)),o=u(r(3)),i=r(6),s=(n=i)&&n.__esModule?n:{default:n},c=r(5);function u(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}var l={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p=(f.prototype.append=function(t){this.stream+=t},f.prototype.prepend=function(t){this.stream=t+this.stream},f.prototype._readTokenImpl=function(){var t=this._peekTokenImpl();if(t)return this.stream=this.stream.slice(t.length),t},f.prototype._peekTokenImpl=function(){for(var t in l)if(l.hasOwnProperty(t)&&l[t].test(this.stream)){var e=o[t](this.stream);if(e)return"startTag"===e.type&&/script|style/i.test(e.tagName)?null:(e.text=this.stream.substr(0,e.length),e)}},f.prototype.peekToken=function(){return this._peekToken()},f.prototype.readToken=function(){return this._readToken()},f.prototype.readTokens=function(t){for(var e=void 0;e=this.readToken();)if(t[e.type]&&!1===t[e.type](e))return},f.prototype.clear=function(){var t=this.stream;return this.stream="",t},f.prototype.rest=function(){return this.stream},f);function f(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),this.stream=e;var n=!1,o={};for(var i in a)a.hasOwnProperty(i)&&(r.autoFix&&(o[i+"Fix"]=!0),n=n||o[i+"Fix"]);n?(this._readToken=(0,s.default)(this,o,function(){return t._readTokenImpl()}),this._peekToken=(0,s.default)(this,o,function(){return t._peekTokenImpl()})):(this._readToken=this._readTokenImpl,this._peekToken=this._peekTokenImpl)}for(var h in(e.default=p).tokenToString=function(t){return t.toString()},p.escapeAttributes=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=(0,c.escapeQuotes)(t[r],null));return e},p.supports=a)a.hasOwnProperty(h)&&(p.browserHasFlaw=p.browserHasFlaw||!a[h]&&h)},function(t,e){"use strict";var r=!(e.__esModule=!0),n=!1,o=window.document.createElement("div");try{var i="<P><I></P></I>";o.innerHTML=i,e.tagSoup=r=o.innerHTML!==i}catch(t){e.tagSoup=r=!1}try{o.innerHTML="<P><i><P></P></i></P>",e.selfClose=n=2===o.childNodes.length}catch(t){e.selfClose=n=!1}o=null,e.tagSoup=r,e.selfClose=n},function(t,e,r){"use strict";e.__esModule=!0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.comment=function(t){var e=t.indexOf("--\x3e");if(0<=e)return new s.CommentToken(t.substr(4,e-1),e+3)},e.chars=function(t){var e=t.indexOf("<");return new s.CharsToken(0<=e?e:t.length)},e.startTag=o,e.atomicTag=function(t){var e=o(t);if(e){var r=t.slice(e.length);if(r.match(new RegExp("</\\s*"+e.tagName+"\\s*>","i"))){var n=r.match(new RegExp("([\\s\\S]*?)</\\s*"+e.tagName+"\\s*>","i"));if(n)return new s.AtomicTagToken(e.tagName,n[0].length+e.length,e.attrs,e.booleanAttrs,n[1])}}},e.endTag=function(t){var e=t.match(c.endTag);if(e)return new s.EndTagToken(e[1],e[0].length)};var s=r(4),c={startTag:/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag:/^<\/([\-A-Za-z0-9_]+)[^>]*>/,attr:/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,fillAttr:/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i};function o(t){var r,n,o;if(-1!==t.indexOf(">")){var e=t.match(c.startTag);if(e){var i=(r={},n={},o=e[2],e[2].replace(c.attr,function(t,e){arguments[2]||arguments[3]||arguments[4]||arguments[5]?arguments[5]?(r[arguments[5]]="",n[arguments[5]]=!0):r[e]=arguments[2]||arguments[3]||arguments[4]||c.fillAttr.test(e)&&e||"":r[e]="",o=o.replace(t,"")}),{v:new s.StartTagToken(e[1],e[0].length,r,n,!!e[3],o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))});if("object"===(void 0===i?"undefined":a(i)))return i.v}}}},function(t,e,r){"use strict";e.__esModule=!0,e.EndTagToken=e.AtomicTagToken=e.StartTagToken=e.TagToken=e.CharsToken=e.CommentToken=e.Token=void 0;var a=r(5);function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.Token=function t(e,r){s(this,t),this.type=e,this.length=r,this.text=""},e.CommentToken=(n.prototype.toString=function(){return"\x3c!--"+this.content},n);function n(t,e){s(this,n),this.type="comment",this.length=e||(t?t.length:0),this.text="",this.content=t}e.CharsToken=(o.prototype.toString=function(){return this.text},o);function o(t){s(this,o),this.type="chars",this.length=t,this.text=""}var i=e.TagToken=(c.formatTag=function(t,e){var r=1<arguments.length&&void 0!==e?e:null,n="<"+t.tagName;for(var o in t.attrs)if(t.attrs.hasOwnProperty(o)){n+=" "+o;var i=t.attrs[o];void 0!==t.booleanAttrs&&void 0!==t.booleanAttrs[o]||(n+='="'+(0,a.escapeQuotes)(i)+'"')}return t.rest&&(n+=" "+t.rest),t.unary&&!t.html5Unary?n+="/>":n+=">",null!=r&&(n+=r+"</"+t.tagName+">"),n},c);function c(t,e,r,n,o){s(this,c),this.type=t,this.length=r,this.text="",this.tagName=e,this.attrs=n,this.booleanAttrs=o,this.unary=!1,this.html5Unary=!1}e.StartTagToken=(u.prototype.toString=function(){return i.formatTag(this)},u);function u(t,e,r,n,o,i){s(this,u),this.type="startTag",this.length=e,this.text="",this.tagName=t,this.attrs=r,this.booleanAttrs=n,this.html5Unary=!1,this.unary=o,this.rest=i}e.AtomicTagToken=(l.prototype.toString=function(){return i.formatTag(this,this.content)},l);function l(t,e,r,n,o){s(this,l),this.type="atomicTag",this.length=e,this.text="",this.tagName=t,this.attrs=r,this.booleanAttrs=n,this.unary=!1,this.html5Unary=!1,this.content=o}e.EndTagToken=(p.prototype.toString=function(){return"</"+this.tagName+">"},p);function p(t,e){s(this,p),this.type="endTag",this.length=e,this.text="",this.tagName=t}},function(t,e){"use strict";e.__esModule=!0,e.escapeQuotes=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return t?t.replace(/([^"]*)"/g,function(t,e){return/\\/.test(e)?e+'"':e+'\\"'}):e}},function(t,e){"use strict";e.__esModule=!0,e.default=function(r,n,e){var o=function(){var t=[];return t.last=function(){return this[this.length-1]},t.lastTagNameEq=function(t){var e=this.last();return e&&e.tagName&&e.tagName.toUpperCase()===t.toUpperCase()},t.containsTagName=function(t){for(var e,r=0;e=this[r];r++)if(e.tagName===t)return!0;return!1},t}(),i={startTag:function(t){var e=t.tagName;"TR"===e.toUpperCase()&&o.lastTagNameEq("TABLE")?(r.prepend("<TBODY>"),a()):n.selfCloseFix&&s.test(e)&&o.containsTagName(e)?o.lastTagNameEq(e)?u(r,o):(r.prepend("</"+t.tagName+">"),a()):t.unary||o.push(t)},endTag:function(t){o.last()?n.tagSoupFix&&!o.lastTagNameEq(t.tagName)?u(r,o):o.pop():n.tagSoupFix&&(e(),a())}};function a(){var t=function(t,e){var r=t.stream,n=c(e());return t.stream=r,n}(r,e);t&&i[t.type]&&i[t.type](t)}return function(){return a(),c(e())}};var r=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,s=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;function c(t){return t&&"startTag"===t.type&&(t.unary=r.test(t.tagName)||t.unary,t.html5Unary=!/\/>$/.test(t.text)),t}function u(t,e){var r=e.pop();t.prepend("</"+r.tagName+">")}}],r.c=o,r.p="",r(0);function r(t){if(o[t])return o[t].exports;var e=o[t]={exports:{},id:t,loaded:!1};return n[t].call(e.exports,e,e.exports,r),e.loaded=!0,e.exports}var n,o},t.exports=n()},function(t,e){"use strict";e.__esModule=!0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t){return null!=t}function i(t,e,r){var n=void 0,o=t&&t.length||0;for(n=0;n<o;n++)e.call(r,t[n],n)}function a(t,e,r){for(var n in t)t.hasOwnProperty(n)&&e.call(r,n,t[n])}function r(t,e){return!(!t||"startTag"!==t.type&&"atomicTag"!==t.type||!("tagName"in t))&&!!~t.tagName.toLowerCase().indexOf(e)}e.existy=o,e.isFunction=function(t){return"function"==typeof t},e.each=i,e.eachKey=a,e.defaults=function(r,t){return r=r||{},a(t,function(t,e){o(r[t])||(r[t]=e)}),r},e.toArray=function(r){try{return Array.prototype.slice.call(r)}catch(t){var e=function(){var e=[];return i(r,function(t){e.push(t)}),{v:e}}();if("object"===(void 0===e?"undefined":n(e)))return e.v}},e.last=function(t){return t[t.length-1]},e.isTag=r,e.isScript=function(t){return r(t,"script")},e.isStyle=function(t){return r(t,"style")}}],r.c=o,r.p="",r(0);function r(t){if(o[t])return o[t].exports;var e=o[t]={exports:{},id:t,loaded:!1};return n[t].call(e.exports,e,e.exports,r),e.loaded=!0,e.exports}var n,o},t.exports=n()},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.newEnvironment=function(r){function e(){return r.top!==r&&!function(t){try{return t.top.location.toString(),!0}catch(t){return!1}}(r)}return{isMobileApp:function(t){return t&&"mobile-app"===t},isCrossDomain:e,isSafeFrame:function(){return!(!r.$sf||!r.$sf.ext)},isAmp:function(t){return"string"==typeof t&&""!==t&&e()},canLocatePrebid:function(){for(var t=!1,e=r;!t;){try{if(e.pbjs){t=!0;break}}catch(t){}if(e===window.top)break;e=e.parent}return t}}}}]);

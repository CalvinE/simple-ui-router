!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.simpleUIRouter=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1),l=n(2),s=n(4),a=function(){function e(t){o(this,e),this._config=null,this._links=[],this._outlets=[],this._routes=[],this._mainOutlet=null,this._loadedURLs=[],this._isRouting=!1,this._ignoreHashChange=!1,this._defaultRoute=null,this._notFoundRoute=null,window.onhashchange=this.onHashChange.bind(this)}return u(e,[{key:"init",value:function(e){this._config=e,this.findOutlets(),this.findLinks(),this._mainOutlet=this.getMainOutlet(),0===window.location.hash.length?this.onHashChange("/"):this.onHashChange()}},{key:"onHashChange",value:function(e){if(this._ignoreHashChange)this._ignoreHashChange=!1;else{var t="string"==typeof e||0===window.location.hash.length?"/":window.location.hash.substring(1),n={url:t,outlet:this._mainOutlet};this.initRouteHandling(n)}}},{key:"findOutlets",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"router-outlet",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(this.clearDeadOutlets(),n.querySelectorAll("["+t+"]").forEach(function(n,o,i){n.isRegistered||(n.isRegistered=!0,e._outlets.push(new s.Outlet(n,e.getAttributeValueByName(n,t))))},this),!this.getMainOutlet())throw"A main outlet is required."}},{key:"getMainOutlet",value:function(){return this._outlets.find(function(e){return!0===e.isMain})}},{key:"clearDeadOutlets",value:function(){this._outlets=this._outlets.filter(function(e,t,n){var o=document.body.contains(e.element);return!1===o&&(e.element.isRegistered=!1,e.element=null),o})}},{key:"findOutletByName",value:function(e){return this._outlets.find(function(t){return t.name===e},this)}},{key:"findLinks",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"route-url",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;this.clearDeadLinks(),n.querySelectorAll("["+t+"]").forEach(function(t){if(!t.isRegistered){var n=e.findOutletByName(e.getAttributeValueByName(t,"route-target"))||e.getMainOutlet();e._links.push(new r.Link(t,n,e.handleLinkClick.bind(e)))}},this)}},{key:"clearDeadLinks",value:function(){this._links=this._links.filter(function(e){var t=document.body.contains(e.element);return!1===t&&(e.element.isRegistered=!1,e.element.onclick=null,e.element=null),t})}},{key:"findRoute",value:function(e){var t=e.url===this._defaultRoute.link?this._defaultRoute:null,n=e.url.split("/"),o=null;return t="/"===e.url?this._defaultRoute:this._routes.find(function(e){var t=e.routeUrl.split("/"),i=!0;if(t.length===n.length){o={};for(var u=0;u<t.length;u++)if(n[u]===t[u]);else{if(!0!==t[u].startsWith(":")){i=!1;break}o[t[u].substring(1)]=n[u]}}else i=!1;return i},this),t||(t=this._notFoundRoute,o={linkProvided:e.url}),{route:t,params:o}}},{key:"handleLinkClick",value:function(e){e.preventDefault();var t=e.target,n=this._links.find(function(e){return t===e.element});n.outlet===this._mainOutlet&&(this._ignoreHashChange=!0,window.location.hash=n.url),this.initRouteHandling(n)}},{key:"initRouteHandling",value:function(e){this._isRouting=!0;var t=this.findRoute(e),n={link:e,route:t.route,params:t.params};this.handleRoute(n)}},{key:"handleRoute",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.route.postRouteProcessing&&e.route.postRouteProcessing(e),!0===this.shouldFetch(e)?(e.route.preFetchContent&&e.route.preFetchContent(e),this.fetch(e)):(e.route.content.html&&!0===e.route.content.html[0].loaded&&(e.templateTextInstance=e.route.content.html[0].template),this.postFetch(e))}},{key:"fetch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,r=new window.XMLHttpRequest;r.open(t,e.route.content.html[0].url,!0,i,u),r.onerror=this.handleFetchFailure,n&&n.forEach(function(e){r.setRequestHeader(e.name,e.value)},this),r.onreadystatechange=function(){r.readyState===window.XMLHttpRequest.DONE&&(e.route.content.html[0].template=r.responseText,e.route.content.html[0].loaded=!0,e.templateTextInstance=r.responseText,o.postFetch(e))},r.send()}},{key:"handleFetchFailure",value:function(e){throw e}},{key:"postFetch",value:function(e){e.route.postFetchContent&&e.route.postFetchContent(e),e.route.preContentLoad&&e.route.preContentLoad(e),e.templateTextInstance&&e.link.outlet.addContentString(e.templateTextInstance),this.shouldLoad(e)?this.load(e):this.postLoad(e)}},{key:"load",value:function(e){var t=this,n=document.getElementsByTagName("head")[0],o=!1,i=e.route.content;if(!e.route.isLoaded("css")){o=!0;for(var u=0;u<i.css.length;u++)!1===i.css[u].loaded&&-1===this._loadedURLs.indexOf(i.css[u].url)&&function(){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.href=i.css[u].url,o.srindex=u,o.media="all",o.onload=function(){e.route.content.css[o.srindex].loaded=!0,t._loadedURLs.push(e.route.content.css[o.srindex].url),t.postLoad(e)},n.appendChild(o)}()}if(!e.route.isLoaded("js")){o=!0;for(var r=0;r<i.js.length;r++)!1===i.js[r].loaded&&-1===this._loadedURLs.indexOf(i.js[r].url)&&function(){var o=document.createElement("script");o.type="application/javascript",o.src=i.js[r].url,o.srindex=r,o.onload=function(){e.route.content.js[o.srindex].loaded=!0,t._loadedURLs.push(e.route.content.js[o.srindex].url),t.postLoad(e)},n.appendChild(o)}()}o||this.postLoad(e)}},{key:"isRouteContentLoaded",value:function(e){var t=!1;return t=e.route.isLoaded("html")&&e.route.isLoaded("css")&&e.route.isLoaded("js"),console.log(e.route.isLoaded("html")+" && "+e.route.isLoaded("css")+" && "+e.route.isLoaded("js")),t}},{key:"isNotLoaded",value:function(e){return!1===e.loaded}},{key:"postLoad",value:function(e){!0===this.isRouteContentLoaded(e)?(console.log("All content loaded!"),e.route.postContentLoad&&e.route.postContentLoad(e),e.route.handler&&e.route.handler(e),this._isRouting=!1,e.route.postRoutingHandler&&e.route.postRoutingHandler(e)):console.log("Still waiting")}},{key:"shouldFetch",value:function(e){var t=!1;return!1===e.route.isLoaded("html")&&(t=!0),t}},{key:"shouldLoad",value:function(e){var t=!1;return e.templateTextInstance&&(t=!0),!1===e.route.isLoaded("css")&&(t=!0),!1===e.route.isLoaded("js")&&(t=!0),t}},{key:"handleLifeCycleFailure",value:function(e){console.error("A failure occurred in lifecycle chain!",void 0===e?"undefined":i(e),e)}},{key:"registerRoute",value:function(){"object"===i(arguments.length<=0?void 0:arguments[0])&&null!==(arguments.length<=0?void 0:arguments[0])?this._defaultRoute=new l.Route("/",arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1],arguments.length<=2?void 0:arguments[2],arguments.length<=3?void 0:arguments[3]):"string"==typeof(arguments.length<=0?void 0:arguments[0])?this._routes.push(new l.Route(arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1],arguments.length<=2?void 0:arguments[2],arguments.length<=3?void 0:arguments[3],arguments.length<=4?void 0:arguments[4])):null===(arguments.length<=0?void 0:arguments[0])&&(this._notFoundRoute=new l.Route(arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1],arguments.length<=2?void 0:arguments[2],arguments.length<=3?void 0:arguments[3],arguments.length<=4?void 0:arguments[4]))}},{key:"unregisterRoute",value:function(e){this._defaultRoute.url===e&&(this._defaultRoute.events=null)}},{key:"getAttributeValueByName",value:function(e,t){var n=e.attributes.getNamedItem(t);return n?n.value:null}}]),e}();t.simpleUIRouter=new a},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});t.Link=function e(t,n,i){o(this,e),this.element=t,this.url=this.element.attributes.getNamedItem("route-url").value,this.outlet=n,this.element.onclick=i,this.element.isRegistered=!0}},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Route=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(3);t.Route=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;o(this,e),this.routeUrl=t,this.postRouteProcessing=n.postRouteProcessing,this.preFetchContent=n.preFetchContent,this.postFetchContent=n.postFetchContent,this.handler=n.handler,this.preContentLoad=n.preContentLoad,this.postContentLoad=n.postContentLoad,this.postRoutingHandler=n.postRoutingHandler;var s=null,a=null,d=null;if(i){if(Array.isArray(i))throw"Parameter template can not be an array.";s={},i.innerHTML&&!0===(0,u.isHTMLString)(i.innerHTML)?(s.template=i.innerHTML,s.loaded=!0):!0===(0,u.isHTMLString)(i)?(s.template=i,s.loaded=!0):(s.url=i,s.loaded=!1)}r&&(a=[],Array.isArray(r)?r.forEach(function(e){a.push({url:e,loaded:!1})}):a.push({url:r,loaded:!1})),l&&(d=[],Array.isArray(l)?l.forEach(function(e){d.push({url:e,loaded:!1})}):d.push({url:l,loaded:!1})),this.content={html:s?[s]:null,css:a,js:d}}return i(e,[{key:"isLoaded",value:function(e){return!this.content[e]||!!this.content[e]&&!this.content[e].find(function(e){return!1===e.loaded})}}]),e}()},function(e,t,n){"use strict";function o(e){var t=(new window.DOMParser).parseFromString(e,i);return Array.from(t.body.childNodes).some(function(e){return 1===e.nodeType})}Object.defineProperty(t,"__esModule",{value:!0}),t.isHTMLString=o;var i=t.HTML_MIME="text/html";t.XML_MIME="application/xml",t.CSS_MIME="text/css",t.JS_MIME="application/js"},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.Outlet=function(){function e(t,n){o(this,e),this.element=t,this.name=n,this.isMain="main"===n}return i(e,[{key:"hasContent",value:function(){return 0!==this.element.children.length}},{key:"clearOutlet",value:function(){for(;this.element.children.length>0;)this.element.removeChild(this.element.children[0])}},{key:"addContentString",value:function(e){this.element.innerHTML=e}},{key:"addContent",value:function(e){this.element.appendChild(e)}}]),e}()}])});
//# sourceMappingURL=simple-ui-router.js.map
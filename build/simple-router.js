!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.simpleRouter=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=n(1),r=n(2),s=n(4),a=function(){function t(e){o(this,t),this._config=null,this._links=[],this._outlets=[],this._routes=[],this._mainOutlet=null,this._ignoreHashChange=!1,this._defaultRoute=null,this._notFoundRoute=null,window.onhashchange=this.onHashChange.bind(this)}return l(t,[{key:"init",value:function(t){this._config=t,this.findOutlets(),this.findLinks(),this._mainOutlet=this.getMainOutlet(),0===window.location.hash.length?this.onHashChange("/"):this.onHashChange()}},{key:"onHashChange",value:function(t){if(this._ignoreHashChange)this._ignoreHashChange=!1;else{var e="string"==typeof t||0===window.location.hash.length?"/":window.location.hash.substring(1),n={url:e,outlet:this._mainOutlet};this.initRouteHandling(n)}}},{key:"findOutlets",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"router-outlet",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(this.clearDeadOutlets(),n.querySelectorAll("["+e+"]").forEach(function(n,o,i){n.isRegistered||(n.isRegistered=!0,t._outlets.push(new s.Outlet(n,t.getAttributeValueByName(n,e))))},this),!this.getMainOutlet())throw"A main outlet is required."}},{key:"getMainOutlet",value:function(){return this._outlets.find(function(t){return!0===t.isMain})}},{key:"clearDeadOutlets",value:function(){this._outlets=this._outlets.filter(function(t,e,n){var o=document.body.contains(t.element);return!1===o&&(t.element.isRegistered=!1,t.element=null),o})}},{key:"findOutletByName",value:function(t){return this._outlets.find(function(e){return e.name===t},this)}},{key:"findLinks",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"route-url",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;this.clearDeadLinks(),n.querySelectorAll("["+e+"]").forEach(function(e){if(!e.isRegistered){var n=t.findOutletByName(t.getAttributeValueByName(e,"route-target"))||t.getMainOutlet();t._links.push(new u.Link(e,n,t.handleLinkClick.bind(t)))}},this)}},{key:"clearDeadLinks",value:function(){this._links=this._links.filter(function(t){var e=document.body.contains(t.element);return!1===e&&(t.element.isRegistered=!1,t.element.onclick=null,t.element=null),e})}},{key:"findRoute",value:function(t){var e=t.url===this._defaultRoute.link?this._defaultRoute:null,n=t.url.split("/"),o=null;return e="/"===t.url?this._defaultRoute:this._routes.find(function(t){var e=t.routeUrl.split("/"),i=!0;if(e.length===n.length){o={};for(var l=0;l<e.length;l++)if(n[l]===e[l]);else{if(!0!==e[l].startsWith(":")){i=!1;break}o[e[l].substring(1)]=n[l]}}else i=!1;return i},this),e||(e=this._notFoundRoute,o={linkProvided:t.url}),{route:e,params:o}}},{key:"handleLinkClick",value:function(t){t.preventDefault();var e=t.target,n=this._links.find(function(t){return e===t.element});n.outlet===this._mainOutlet&&(this._ignoreHashChange=!0,window.location.hash=n.url),this.initRouteHandling(n)}},{key:"initRouteHandling",value:function(t){var e=this.findRoute(t),n={link:t,route:e.route,params:e.params};this.handleRoute(n)}},{key:"handleRoute",value:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.route.postRouteProcessing&&t.route.postRouteProcessing(t),!0===this.shouldFetch(t)?(t.route.preFetchContent&&t.route.preFetchContent(t),this.fetch(t)):(t.templateTextInstance=t.route.content.html.template,this.postFetch(t))}},{key:"fetch",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=new window.XMLHttpRequest;u.open(e,t.route.content.html.url,!0,i,l),u.onerror=this.handleFetchFailure,n&&n.forEach(function(t){u.setRequestHeader(t.name,t.value)},this),u.onreadystatechange=function(){u.readyState===window.XMLHttpRequest.DONE&&(t.route.content.html.template=u.responseText,t.route.content.html.loaded=!0,t.templateTextInstance=u.responseText,o.postFetch(t))},u.send()}},{key:"handleFetchFailure",value:function(t){throw t}},{key:"postFetch",value:function(t){t.route.postFetchContent&&t.route.postFetchContent(t),this.shouldLoad(t)?(t.route.preContentLoad&&t.route.preContentLoad(t),this.load(t)):this.postLoad(t)}},{key:"load",value:function(t){var e=this,n=document.getElementsByTagName("head")[0],o=!1;t.templateTextInstance&&t.link.outlet.addContentString(t.templateTextInstance);var i=t.route.content;if(i.css&&!i.css.loaded){o=!0;var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.href=i.css.url,l.media="all",l.onload=function(){t.route.content.css.loaded=!0,e.postLoad(t)},n.appendChild(l)}if(i.js&&!i.js.loaded){o=!0;var u=document.createElement("script");u.type="application/javascript",u.src=i.js.url,u.onload=function(){t.route.content.js.loaded=!0,e.postLoad(t)},n.appendChild(u)}o||this.postLoad(t)}},{key:"postLoad",value:function(t){var e=t.route.content;e.html&&!e.html.loaded||e.css&&!e.css.loaded||e.js&&!e.js.loaded?console.log("Still waiting"):(t.route.postContentLoad&&t.route.postContentLoad(t),t.route.handler&&t.route.handler(t),t.route.postLinkHandler&&t.route.postLinkHandler(t))}},{key:"shouldFetch",value:function(t){var e=!1,n=t.route.content;return n.html&&n.html.url&&!n.html.loaded&&(e=!0),e}},{key:"shouldLoad",value:function(t){var e=!1,n=t.route.content;return t.templateTextInstance&&(e=!0),!e&&n.css&&n.css.url&&(e=!0),!e&&n.js&&n.js.url&&(e=!0),e}},{key:"handleLifeCycleFailure",value:function(t){console.error("A failure occurred in lifecycle chain!",void 0===t?"undefined":i(t),t)}},{key:"registerRoute",value:function(){"object"===i(arguments.length<=0?void 0:arguments[0])&&null!==(arguments.length<=0?void 0:arguments[0])?this._defaultRoute=new r.Route("/",arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1],arguments.length<=2?void 0:arguments[2],arguments.length<=3?void 0:arguments[3]):"string"==typeof(arguments.length<=0?void 0:arguments[0])?this._routes.push(new r.Route(arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1],arguments.length<=2?void 0:arguments[2],arguments.length<=3?void 0:arguments[3],arguments.length<=4?void 0:arguments[4])):null===(arguments.length<=0?void 0:arguments[0])&&(this._notFoundRoute=new r.Route(arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1],arguments.length<=2?void 0:arguments[2],arguments.length<=3?void 0:arguments[3],arguments.length<=4?void 0:arguments[4]))}},{key:"unregisterRoute",value:function(t){this._defaultRoute.url===t&&(this._defaultRoute.events=null)}},{key:"getAttributeValueByName",value:function(t,e){return t.attributes.getNamedItem(e).value}}]),t}();e.simpleRouter=new a},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.Link=function t(e,n,i){o(this,t),this.element=e,this.url=this.element.attributes.getNamedItem("route-url").value,this.outlet=n,this.element.onclick=i,this.element.isRegistered=!0}},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Route=void 0;var i=n(3);e.Route=function t(e,n){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;o(this,t),this.routeUrl=e,this.postRouteProcessing=n.postRouteProcessing,this.preFetchContent=n.preFetchContent,this.postFetchContent=n.postFetchContent,this.handler=n.handler,this.preContentLoad=n.preContentLoad,this.postContentLoad=n.postContentLoad,this.postRouteHandling=n.postRouteHandling;var s=null;l&&(s={},l.innerHTML&&!0===(0,i.isHTMLString)(l.innerHTML)?(s.template=l.innerHTML,s.loaded=!0):!0===(0,i.isHTMLString)(l)?(s.template=l,s.loaded=!0):(s.url=l,s.loaded=!1)),this.content={html:s,css:u?{url:u,loaded:!1}:null,js:r?{url:r,loaded:!1}:null}}},function(t,e,n){"use strict";function o(t){var e=(new window.DOMParser).parseFromString(t,i);return Array.from(e.body.childNodes).some(function(t){return 1===t.nodeType})}Object.defineProperty(e,"__esModule",{value:!0}),e.isHTMLString=o;var i=e.HTML_MIME="text/html";e.XML_MIME="application/xml",e.CSS_MIME="text/css",e.JS_MIME="application/js"},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();e.Outlet=function(){function t(e,n){o(this,t),this.element=e,this.name=n,this.isMain="main"===n}return i(t,[{key:"hasContent",value:function(){return 0!==this.element.children.length}},{key:"clearOutlet",value:function(){for(;this.element.children.length>0;)this.element.removeChild(this.element.children[0])}},{key:"addContentString",value:function(t){this.element.innerHTML=t}},{key:"addContent",value:function(t){this.element.appendChild(t)}}]),t}()}])});
//# sourceMappingURL=simple-router.js.map
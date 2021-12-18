/*! For license information please see commons-ff45b294ab71506f9b7f.js.LICENSE.txt */
(self.webpackChunkphase_03=self.webpackChunkphase_03||[]).push([[351],{5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&e.push(o)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(!i(e[l],o[l]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],o.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!i(e[s[l]],o[s[l]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},5414:function(e,t,r){"use strict";r.d(t,{q:function(){return he}});var n,a,i,o,c=r(5697),l=r.n(c),s=r(4839),u=r.n(s),f=r(2993),m=r.n(f),p=r(7294),d=r(6494),h=r.n(d),g="bodyAttributes",y="htmlAttributes",v="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(b).map((function(e){return b[e]})),"charset"),w="cssText",T="href",A="http-equiv",C="innerHTML",z="itemprop",O="name",S="property",M="rel",x="src",k="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",N="defer",P="encodeSpecialCharacters",_="onChangeClientState",I="titleTemplate",B=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),D=[b.NOSCRIPT,b.SCRIPT,b.STYLE],R="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Z=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,b.TITLE),r=Q(e,I);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,j);return t||n||void 0},W=function(e){return Q(e,_)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],l=c.toLowerCase();-1===t.indexOf(l)||r===M&&"canonical"===e[r].toLowerCase()||l===M&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==C&&c!==w&&c!==z||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],l=h()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;le(b.BODY,n),le(b.HTML,a),ce(f,m);var p={baseTag:se(b.BASE,r),linkTags:se(b.LINK,i),metaTags:se(b.META,o),noscriptTags:se(b.NOSCRIPT,c),scriptTags:se(b.SCRIPT,s),styleTags:se(b.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,d,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),le(b.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(R),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var l=o[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute(R):r.getAttribute(R)!==o.join(",")&&r.setAttribute(R,o.join(","))}},se=function(e,t){var r=document.head||document.querySelector(b.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(R,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)},me=function(e,t,r){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[R]=!0,a=fe(r,n),[p.createElement(b.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+U(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case y:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[R]=!0,n);return Object.keys(t).forEach((function(e){var r=L[e]||e;if(r===C||r===w){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),p.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+U(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:me(b.BASE,t,n),bodyAttributes:me(g,r,n),htmlAttributes:me(y,a,n),link:me(b.LINK,i,n),meta:me(b.META,o,n),noscript:me(b.NOSCRIPT,c,n),script:me(b.SCRIPT,l,n),style:me(b.STYLE,s,n),title:me(b.TITLE,{title:f,titleAttributes:m},n)}},de=u()((function(e){return{baseTag:$([T,k],e),bodyAttributes:G(g,e),defer:Q(e,N),encode:Q(e,P),htmlAttributes:G(y,e),linkTags:J(b.LINK,[M,T],e),metaTags:J(b.META,[O,E,A,S,z],e),noscriptTags:J(b.NOSCRIPT,[C],e),onChangeClientState:W(e),scriptTags:J(b.SCRIPT,[x,C],e),styleTags:J(b.STYLE,[w],e),title:K(e),titleAttributes:G(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),he=(a=de,o=i=function(e){function t(){return V(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return F({},n,((t={})[r.type]=[].concat(n[r.type]||[],[F({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case b.TITLE:return F({},a,((t={})[n.type]=o,t.titleAttributes=F({},i),t));case b.BODY:return F({},a,{bodyAttributes:F({},i)});case b.HTML:return F({},a,{htmlAttributes:F({},i)})}return F({},a,((r={})[n.type]=F({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=F({},t);return Object.keys(e).forEach((function(t){var n;r=F({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return p.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)}(Z(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=Z(e,["children"]),n=F({},r);return t&&(n=this.mapChildrenToProps(t,n)),p.createElement(a,n)},q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind},4839:function(e,t,r){"use strict";var n,a=r(7294),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(f,"canUseDOM",c),f}}},2802:function(e,t,r){"use strict";var n=r(5785),a=r(7294),i=r(6125),o=r(5900),c=r.n(o),l=r(5414),s=(0,a.forwardRef)((function(e,t){var r=(0,i.d)(e.image);if(!r)return null;var o=e.alt,s=e.className,u=e.pictureClassName,f=e.loading,m=e.preload,p=e.id,d=r.height,h=r.width,g=r.images;return a.createElement("picture",{className:c()("mb-image",u),id:p},m&&a.createElement(l.q,{link:[].concat((0,n.Z)(g.sources.map((function(e){var t=e.sizes;return{rel:"preload",as:"image",href:e.srcSet,media:t,type:e.type}}))),[{rel:"preload",as:"image",href:g.fallback.src,imagesrcset:g.fallback.srcSet}])}),g.sources.map((function(e){var t=e.sizes,r=e.srcSet,n=e.type;return a.createElement("source",{type:n,srcSet:r,sizes:t,key:n})})),a.createElement("img",{ref:t,alt:o,className:s,src:(0,i.e)(r),srcSet:(0,i.f)(r),width:h,height:d,loading:f}))}));s.defaultPros={preload:!1},t.Z=s},9410:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),a=r(5414),i=r(5900),o=r.n(i);function c(){return n.createElement("footer",{className:"grid grid-cols-4 gap-8 p-8 text-base"},n.createElement("div",{id:"students"},n.createElement("h3",null,"Authors"),n.createElement("ul",null,n.createElement("li",null,"Alice Bocchio"),n.createElement("li",null,"Michele Bruno"),n.createElement("li",null,"Maria Celeste Casolino"),n.createElement("li",null,"Luca Draisci"),n.createElement("li",null,"Virginia Leccisotti"),n.createElement("li",null,"Barbara Roncalli"),n.createElement("li",null,"Sara Zanardi"))),n.createElement("div",{id:"faculty"},n.createElement("h3",null,"Faculty"),n.createElement("ul",null,n.createElement("li",null,"Michele Mauri"),n.createElement("li",null,"Ángeles Briones"),n.createElement("li",null,"Gabriele Colombo"),n.createElement("li",null,"Simone Vantini"),n.createElement("li",null,"Salvatore Zingale"))),n.createElement("div",{id:"assistants"},n.createElement("h3",null,"Teaching Assistants"),n.createElement("ul",null,n.createElement("li",null,"Elena Aversa"),n.createElement("li",null,"Andrea Benedetti"),n.createElement("li",null,"Tommaso Elli"),n.createElement("li",null,"Beatrice Gobbo"))),n.createElement("div",{id:"contacts"},n.createElement("div",{className:"logo"},n.createElement("img",{src:"/assets/Logo_DensityDesign.svg",alt:"DensityDesign Lab"}),n.createElement("img",{src:"/assets/Logo_Polimi.svg",alt:"Politecnico di Milano"})),n.createElement("p",null,n.createElement("a",{href:"https://densitydesign.github.io/teaching-dd17/",target:"_blank"},"Mediazioni Algoritmiche. Designing in a data intensive society.")),n.createElement("p",null,"The Final Synthesis Design Studio is a course at Politecnico di Milano for the Master's Degree in Communication Design."),n.createElement("ul",null,n.createElement("li",{className:"flex"},n.createElement("a",{href:"https://www.facebook.com/densitydesign"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-facebook",viewBox:"0 0 16 16"},n.createElement("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"})))," ",n.createElement("a",{href:"https://twitter.com/densitydesign"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-twitter",viewBox:"0 0 16 16"},n.createElement("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})))," ",n.createElement("a",{href:"https://www.instagram.com/densitydesign/"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-instagram",viewBox:"0 0 16 16"},n.createElement("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})))),n.createElement("li",null,n.createElement("a",{href:"http://densitydesign.org/"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-globe2",viewBox:"0 0 16 16"},n.createElement("path",{d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"})),"densitydesign.org")),n.createElement("li",null,n.createElement("a",{href:"mailto:info@densitydesign.org"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-envelope-open",viewBox:"0 0 16 16"},n.createElement("path",{d:"M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z"})),"email")))))}var l=r(5192);function s(e){var t=e.children,r=e.className,i=e.container,s=e.wrapperClassName,u=e.fixedHeader,f=e.footer,m=e.light;return n.createElement("div",{className:o()(s)},n.createElement(a.q,{bodyAttributes:{class:"bg-black text-white"}}),n.createElement(l.Z,{fixed:u,light:m}),n.createElement("div",{className:o()("relative",i&&"mx-8",r)},t),f&&n.createElement(c,null))}},5192:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n,a,i,o,c,l,s,u,f,m,p,d,h,g,y,v,b,E,w,T,A,C,z=r(7294),O=r(5900),S=r.n(O),M=r(5444);r(2802);function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},x.apply(this,arguments)}var k=function(e){return z.createElement("svg",x({id:"logo_svg__Livello_1",xmlns:"http://www.w3.org/2000/svg",x:0,y:0,viewBox:"0 0 318.6 192.2",style:{enableBackground:"new 0 0 318.6 192.2"},xmlSpace:"preserve"},e),n||(n=z.createElement("style",null,".logo_svg__st2{fill:none;stroke:currentColor;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3.5409}")),a||(a=z.createElement("path",{d:"M82.5 110.1c-7 0-13-5.1-15.1-12.7-1.1-4.3-.8-8.7 1-12.4 1.9-3.8 5.2-6.5 9.3-7.6 1.3-.3 2.6-.5 3.8-.5 7 0 13 5.1 15.1 12.7 2.5 9.2-2 17.8-10.3 20-1.2.3-2.5.5-3.8.5zm-1.2-30.3c-.9 0-1.9.1-2.8.4-3 .8-5.5 2.8-7 5.7-1.6 3.1-1.8 6.7-.8 10.7 1.7 6.5 6.5 10.7 12.1 10.7.9 0 1.9-.1 2.8-.4 5.6-1.5 10.1-7.6 7.7-16.4-1.7-6.5-6.4-10.7-12-10.7z"})),i||(i=z.createElement("path",{d:"M81.6 77.1c7 0 12.9 5.3 14.8 12.5 2.3 8.5-1.6 17.4-10.1 19.7-1.3.3-2.5.5-3.8.5-7 0-12.9-5.3-14.8-12.5-2.3-8.5 1.6-17.4 10.1-19.7 1.3-.3 2.5-.4 3.8-.5m1.2 30.3c1 0 1.9-.1 2.9-.4 6.2-1.7 10.2-8.3 7.9-16.7-1.9-7.1-7-10.8-12.3-10.8-1 0-1.9.1-2.9.4-6.2 1.7-10.2 8.3-7.9 16.7 1.9 7 7 10.8 12.3 10.8m-1.2-30.8c-1.3 0-2.6.2-3.9.5-4.2 1.1-7.5 3.9-9.4 7.8-1.8 3.7-2.2 8.2-1 12.5 2.1 7.7 8.2 12.9 15.3 12.9 1.3 0 2.6-.2 3.9-.5 8.5-2.3 13-11 10.5-20.3-2.2-7.7-8.3-12.9-15.4-12.9zm1.2 30.3c-5.5 0-10.1-4.1-11.8-10.5-1-3.9-.8-7.5.8-10.5 1.4-2.8 3.8-4.8 6.8-5.6.9-.2 1.8-.4 2.8-.4 5.5 0 10.1 4.1 11.8 10.5 1 3.9.8 7.5-.8 10.5-1.4 2.8-3.8 4.8-6.8 5.6-1 .3-1.9.4-2.8.4zM98.9 72.2l9.7-2.6c2-.5 3.8-.8 5.5-.8 5 0 8.4 2.4 9.5 6.8.8 3 .3 5.7-1.5 7.9-1.7 2.1-4.7 3.8-8.5 4.8l-6.6 1.8 3.4 12.5-3.1.8-8.4-31.2zm7.4 15.2 6.9-1.8c2.8-.8 4.9-1.9 6.1-3.3 1.4-1.6 1.7-3.5 1.1-5.8-.9-3.2-3.1-4.8-6.5-4.8-1.3 0-2.7.2-4.2.6l-6.9 1.8 3.5 13.3z"})),o||(o=z.createElement("path",{d:"M114.1 69.1c4.7 0 8.1 2.2 9.3 6.6 1.6 6-2.3 10.4-9.8 12.4l-6.9 1.8 3.4 12.5-2.6.7-8.2-30.8 9.5-2.5c1.8-.5 3.7-.7 5.3-.7m-8 18.6 7.1-1.9c5.4-1.4 8.7-4.4 7.4-9.4-1-3.5-3.4-5-6.8-5-1.3 0-2.8.2-4.3.6l-7.1 1.9 3.7 13.8m8-19.1c-1.7 0-3.6.3-5.5.8l-9.5 2.5-.5.1.1.5 8.2 30.8.1.5.5-.1 2.6-.7.5-.1-.1-.5-3.2-12.1 6.4-1.7c8.1-2.2 11.8-6.9 10.2-13-1.2-4.6-4.7-7-9.8-7zM103 74.3l6.6-1.8c1.5-.4 2.9-.6 4.2-.6 3.4 0 5.5 1.6 6.3 4.6.6 2.2.2 4.1-1.1 5.6-1.2 1.4-3.2 2.5-6 3.2l-6.6 1.8-3.4-12.8z"})),c||(c=z.createElement("path",{transform:"rotate(-15.006 132.361 80.004)",d:"M130.8 63.8h3.2v32.4h-3.2z"})),l||(l=z.createElement("path",{d:"m129.6 64.3 8.2 30.8-2.6.7-8.3-30.8 2.7-.7m.3-.7-.5.1-2.6.7-.5.1.1.5 8.2 30.8.1.5.5-.1 2.6-.7.5-.1-.1-.5-8.2-30.8-.1-.5zM138.3 61.7l5.8-1.6 23.2 25.8-8-29.9 3.1-.8 8.4 31.3-5.9 1.5-23.1-25.8 8 29.9-3.2.8z"})),s||(s=z.createElement("path",{d:"m162.2 55.5 8.2 30.8-5.4 1.5-23.8-26.5 8.2 30.6-2.6.7-8.2-30.8 5.4-1.5 23.8 26.5-8.2-30.6 2.6-.7m.4-.6-.5.1-2.6.7-.5.1.1.5 7.7 28.6L144.4 60l-.2-.2-.3.1-5.4 1.5-.5.1.1.5 8.2 30.8.1.5.5-.1 2.6-.7.5-.1-.1-.5-7.7-28.6 22.4 24.9.2.2.3-.1 5.4-1.5.5-.1-.1-.5-8.2-30.8-.1-.5z"})),u||(u=z.createElement("path",{transform:"rotate(-14.994 176.698 68.146)",d:"M175.1 52h3.2v32.4h-3.2z"})),f||(f=z.createElement("path",{d:"m173.9 52.4 8.2 30.8-2.6.7-8.2-30.8 2.6-.7m.3-.6-.5.1-2.6.7-.5.1.1.5L179 84l.1.5.5-.1 2.6-.7.5-.1-.1-.5-8.2-30.8-.2-.5zM199.7 78.7c-7 0-13-5.1-15.1-12.7-2.5-9.2 2-17.8 10.3-20 1.3-.3 2.6-.5 3.8-.5 7 0 13 5.1 15.1 12.7 2.5 9.2-2 17.8-10.3 20-1.2.3-2.5.5-3.8.5zm-1.2-30.3c-.9 0-1.9.1-2.8.4-3 .8-5.5 2.8-7 5.7-1.6 3.1-1.8 6.7-.8 10.7 1.7 6.5 6.5 10.7 12.1 10.7.9 0 1.9-.1 2.8-.4 5.6-1.5 10.1-7.6 7.7-16.4-1.7-6.5-6.4-10.7-12-10.7z"})),m||(m=z.createElement("path",{d:"M198.8 45.7c7 0 12.9 5.2 14.8 12.5 2.3 8.5-1.6 17.4-10.1 19.7-1.3.3-2.5.5-3.8.5-7 0-12.9-5.3-14.8-12.5-2.3-8.5 1.6-17.4 10.1-19.7 1.3-.3 2.6-.5 3.8-.5M200 76c1 0 1.9-.1 2.9-.4 6.2-1.7 10.2-8.3 7.9-16.7-1.9-7.1-7-10.8-12.3-10.8-1 0-1.9.1-2.9.4-6.2 1.7-10.2 8.3-7.9 16.7 1.9 7 7 10.8 12.3 10.8m-1.2-30.8c-1.3 0-2.6.2-3.9.5-8.5 2.3-13 11-10.5 20.3 2.1 7.7 8.2 12.9 15.3 12.9 1.3 0 2.6-.2 3.9-.5 4.2-1.1 7.5-3.9 9.4-7.8 1.8-3.7 2.2-8.2 1-12.5-2-7.7-8.1-12.9-15.2-12.9zm1.2 30.3c-5.5 0-10.1-4.1-11.8-10.5-1-3.9-.8-7.5.8-10.5 1.4-2.8 3.8-4.8 6.8-5.6.9-.2 1.8-.4 2.8-.4 5.5 0 10.1 4.1 11.8 10.5 1 3.9.8 7.5-.8 10.5-1.4 2.8-3.8 4.8-6.8 5.6-.9.3-1.9.4-2.8.4zM216.1 40.8l5.8-1.5 23.2 25.8-8-29.9 3.1-.9 8.4 31.3-5.8 1.6-23.2-25.8 8 29.8-3.1.9z"})),p||(p=z.createElement("path",{d:"m240.1 34.7 8.2 30.8-5.4 1.5-23.8-26.5 8.2 30.6-2.6.7-8.3-30.8 5.4-1.5L245.6 66l-8.2-30.6 2.7-.7m.3-.7-.5.1-2.6.7-.5.1.1.5 7.7 28.6-22.4-24.9-.2-.1-.3.1-5.4 1.5-.5.1.1.5 8.2 30.8.1.5.5-.1 2.6-.7.5-.1-.1-.5-7.7-28.6 22.4 24.9.2.2.3-.1 5.4-1.5.5-.1-.1-.5-8.2-30.8-.1-.6zM77.9 128l3.1-.8 7.6 28.5 14.8-4 .8 2.8-18 4.8z"})),d||(d=z.createElement("path",{d:"m80.8 127.5 7.6 28.5 14.8-4 .6 2.3-17.4 4.7-8.2-30.8 2.6-.7m.4-.6-.5.1-2.6.7-.5.1.1.5 8.2 30.8.1.5.5-.1 17.4-4.7.5-.1-.1-.5-.6-2.3-.1-.5-.5.1-14.3 3.8-7.5-28-.1-.4z"})),h||(h=z.createElement("path",{transform:"rotate(-15.006 106.822 137.023)",d:"M105.2 120.8h3.2v32.4h-3.2z"})),g||(g=z.createElement("path",{d:"m104 121.3 8.2 30.8-2.6.7-8.2-30.8 2.6-.7m.4-.6-.5.1-2.6.7-.5.1.1.5 8.2 30.8.1.5.5-.1 2.6-.7.5-.1-.1-.5-8.2-30.8-.1-.5zM113.5 118.5l8.7-2.3c2.2-.6 4.1-.9 5.7-.9 4.2 0 6.8 2 7.9 6 .9 3.2-.3 6.2-3.1 8.1h1c3.7 0 6.4 2.1 7.4 5.9.8 3.1.4 5.7-1.3 7.7-1.5 1.8-4.1 3.2-7.8 4.2l-10.1 2.7-8.4-31.4zm10.7 27.6 6.9-1.8c2.9-.8 4.7-1.7 5.8-3 1.2-1.3 1.4-3.1.8-5.3-.8-3-2.6-4.4-5.7-4.4-1.3 0-2.9.2-4.8.8L121 134l3.2 12.1zm-4-14.8 5.4-1.5c2.9-.8 4.8-1.7 5.9-2.8 1.2-1.2 1.5-2.8.9-4.9-.7-2.8-2.2-4-4.9-4-1.2 0-2.7.2-4.6.8l-5.6 1.5 2.9 10.9z"})),y||(y=z.createElement("path",{d:"M127.9 115.5c3.8 0 6.5 1.6 7.6 5.8 1 3.8-.9 6.7-3.9 8.4.7-.1 1.4-.2 2-.2 3.6 0 6.1 2 7.1 5.7 1.7 6.2-2 9.7-8.9 11.6l-9.9 2.7-8.2-30.8 8.5-2.3c2.1-.6 4-.9 5.7-.9m-7.8 16.1 5.7-1.5c5.5-1.5 8.2-3.6 7-8-.8-3-2.4-4.1-5.2-4.1-1.3 0-2.9.3-4.7.8l-5.8 1.6 3 11.2m3.9 14.9 7.1-1.9c5.4-1.5 8.1-3.8 6.8-8.6-.9-3.3-2.9-4.6-6-4.6-1.4 0-3 .3-4.9.8l-6.4 1.7 3.4 12.6m3.9-31.5c-1.7 0-3.5.3-5.8.9l-8.5 2.3-.5.1.1.5 8.2 30.8.1.5.5-.1 9.9-2.7c3.7-1 6.3-2.4 7.9-4.3 1.7-2.1 2.2-4.7 1.3-7.9-1.1-3.9-3.8-6.1-7.6-6.1h-.2c2.4-2 3.4-4.8 2.5-7.9-.9-4.1-3.6-6.1-7.9-6.1zm-10.3 5.6 5.4-1.4c1.9-.5 3.4-.7 4.6-.7 2.6 0 4 1.1 4.7 3.8 1 3.8-.8 5.9-6.6 7.4l-5.2 1.4-2.9-10.5zm3.7 13.6 5.9-1.6c1.9-.5 3.5-.8 4.8-.8 3 0 4.7 1.3 5.5 4.2 1.1 4.1-.8 6.4-6.5 8l-6.6 1.8-3.1-11.6zM142.2 110.8l9.6-2.6c1.9-.5 3.6-.8 5.2-.8 4.7 0 7.8 2.2 9 6.5 1.2 4.4-.6 8.1-5.1 10.4l11.8 11.7-3.6 1-11.4-11.4-1.2.3-6.5 1.7 3.6 13.5-3.1.8-8.3-31.1zm7.2 14.2 6.7-1.8c5.5-1.5 7.7-4.3 6.6-8.4-.8-3-2.8-4.5-6-4.5-1.2 0-2.5.2-4 .6l-6.7 1.8 3.4 12.3z"})),v||(v=z.createElement("path",{d:"M157.1 107.7c4.5 0 7.6 2.1 8.7 6.3 1.2 4.6-.8 8-5.3 10.3l11.8 11.7-3 .8-11.4-11.4c-.4.2-.8.3-1.3.4l-6.7 1.8 3.6 13.5-2.6.7-8.2-30.8 9.4-2.5c1.7-.6 3.4-.8 5-.8m-7.9 17.6 7-1.9c5-1.4 8.1-4 6.8-8.7-.9-3.4-3.2-4.7-6.2-4.7-1.2 0-2.6.2-4 .6l-7 1.9 3.4 12.8m7.9-18.1c-1.6 0-3.4.3-5.3.8l-9.4 2.5-.5.1.1.5 8.2 30.8.1.5.5-.1 2.6-.7.5-.1-.1-.5-3.5-13 6.3-1.7c.3-.1.7-.2 1-.3l11.2 11.2.2.2.3-.1 3-.8.8-.2-.6-.6-11.3-11.2c4.4-2.4 6.1-6.1 4.9-10.6-1-4.4-4.2-6.7-9-6.7zm-10.7 5.7 6.5-1.7c1.5-.4 2.8-.6 3.9-.6 3.1 0 4.9 1.4 5.7 4.3 1.1 4-1 6.6-6.4 8.1l-6.5 1.7-3.2-11.8zM179 100.9l5.7-1.5 20 28.1-3.3.9-6.2-8.8-15.2 4.1-1 10.7-3.3.9 3.3-34.4zm1.3 19.8 13.1-3.5-11.3-15.9-1.8 19.4z"})),b||(b=z.createElement("path",{d:"m184.6 99.7 19.7 27.7-2.8.7-6.2-8.8-15.5 4.2-1 10.7-2.8.8 3.2-33.9 5.4-1.4M180 121l13.8-3.7-11.9-16.7L180 121m4.8-21.9-.3.1-5.4 1.4-.3.1v.3l-3.2 33.9-.1.7.7-.2 2.8-.7.3-.1v-.3l1-10.4 14.9-4 6 8.5.2.3.3-.1 2.8-.7.7-.2-.4-.6L185 99.4l-.2-.3zm-4.3 21.2 1.7-18.4L193 117l-12.5 3.3zM201.4 94.9l9.6-2.6c1.9-.5 3.6-.8 5.2-.8 4.7 0 7.8 2.2 9 6.5 1.2 4.4-.6 8.1-5.1 10.4l11.8 11.7-3.6 1-11.3-11.3-1.2.3-6.5 1.7 3.6 13.5-3.1.8-8.4-31.2zm7.2 14.2 6.7-1.8c5.5-1.5 7.7-4.3 6.6-8.4-.8-3-2.8-4.5-6-4.5-1.2 0-2.5.2-4 .6l-6.7 1.8 3.4 12.3z"})),E||(E=z.createElement("path",{d:"M216.3 91.8c4.5 0 7.6 2.1 8.7 6.3 1.2 4.6-.8 8-5.3 10.3l11.8 11.7-3 .8-11.5-11.4c-.4.2-.8.3-1.3.4l-6.7 1.8 3.6 13.5-2.6.7-8.2-30.8 9.4-2.5c1.8-.5 3.5-.8 5.1-.8m-7.9 17.7 7-1.9c5-1.4 8.1-4 6.8-8.7-.9-3.4-3.2-4.7-6.2-4.7-1.2 0-2.6.2-4 .6l-7 1.9 3.4 12.8m7.9-18.2c-1.6 0-3.4.3-5.3.8l-9.4 2.5-.5.1.1.5 8.2 30.8.1.5.5-.1 2.6-.7.5-.1-.1-.5-3.5-13 6.3-1.7c.3-.1.7-.2 1-.3l11.2 11.2.2.2.3-.1 3-.8.8-.2-.6-.6-11.3-11.2c4.4-2.4 6.1-6.1 4.9-10.6-1-4.4-4.2-6.7-9-6.7zM205.6 97l6.5-1.7c1.5-.4 2.8-.6 3.9-.6 3.1 0 4.9 1.4 5.7 4.3 1.1 4-1 6.6-6.4 8.1l-6.5 1.7-3.2-11.8zM242.2 102.5l-16.6-14.1 3.6-.9L243 99.2l6.1-17.1 3.7-1-7.4 20.6 3.7 13.9-3.1.9z"})),w||(w=z.createElement("path",{d:"m252.4 81.5-7.3 20.2 3.7 13.8-2.6.7-3.7-13.8-16.4-13.8 3-.8 14 11.9 6.2-17.3 3.1-.9m.8-.7-.9.2-3 .8-.3.1-.1.2-5.9 16.6-13.5-11.4-.2-.2-.3.1-3 .8-.9.2.7.6 16.3 13.7 3.7 13.6.1.5.5-.1 2.6-.7.5-.1-.1-.5-3.7-13.6 7.2-20 .3-.8zm-.8 1.2z"})),T||(T=z.createElement("path",{className:"logo_svg__st2",d:"M315 43c-5.4-20.2-26.1-32.1-46.3-26.7h0c-2.3.6-4.6 1.4-6.9 2.4l24.9 92.9C310 98.1 322.3 70.2 315 43z"})),A||(A=z.createElement("path",{className:"logo_svg__st2",d:"M261.8 18.3C258.5 6.2 246.1-1 234 2.3L52.6 50.9c-12.1 3.2-19.3 15.7-16 27.8l25.5 95.2c3.2 12.1 15.7 19.3 27.8 16l181.4-48.6c12.1-3.2 19.3-15.7 16-27.8l-25.5-95.2z"})),C||(C=z.createElement("path",{className:"logo_svg__st2",d:"M29.5 80.4h0C9.4 85.8-2.6 106.5 2.8 126.7c7.3 27.2 31.9 45.2 58.8 45.3L36.7 79.1c-2.5.3-4.9.7-7.2 1.3z"})))};r.p;var L=[{path:"/",text:"Context"},{path:"/library/",text:"Library"},{path:"/about/",text:"About"}];function j(e){var t=e.fixed,r=e.light,n=e.absolute,a=e.className,i=e.allBlack;return z.createElement("nav",{className:S()(t?"fixed":[n?"absolute":"sticky"],"top-0 z-40 py-4 px-8 flex w-full uppercase justify-between text-base items-center",a)},z.createElement(M.Link,{to:"/",className:"w-1/12"},z.createElement(k,{height:"60px",className:"fill-current"})),z.createElement("ul",{className:"flex gap-8"},L.map((function(e){var t=e.path,n=e.text;return z.createElement("li",{key:t,className:"first:border-current"},z.createElement(M.Link,{to:t,className:S()("hover:underline",!i&&"active:text-light-darker"),activeClassName:S()("underline",!i&&[r?"border-light-darker text-light-darker":"border-light text-light"])},n))}))))}}}]);
//# sourceMappingURL=commons-ff45b294ab71506f9b7f.js.map
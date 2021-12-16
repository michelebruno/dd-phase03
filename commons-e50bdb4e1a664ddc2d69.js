/*! For license information please see commons-e50bdb4e1a664ddc2d69.js.LICENSE.txt */
(self.webpackChunkphase_03=self.webpackChunkphase_03||[]).push([[351],{5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var o=i.apply(null,r);o&&e.push(o)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(!a(e[l],o[l]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!a(l.value[1],o.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!a(e[s[l]],o[s[l]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},5414:function(e,t,r){"use strict";r.d(t,{q:function(){return he}});var n,i,a,o,c=r(5697),l=r.n(c),s=r(4839),u=r.n(s),f=r(2993),p=r.n(f),d=r(7294),m=r(6494),h=r.n(m),g="bodyAttributes",y="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),E="cssText",T="href",A="http-equiv",C="innerHTML",S="itemprop",O="name",x="property",k="rel",j="src",N="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",P="defer",z="encodeSpecialCharacters",I="onChangeClientState",B="titleTemplate",D=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),R=[v.NOSCRIPT,v.SCRIPT,v.STYLE],_="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=X(e,v.TITLE),r=X(e,B);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,L);return t||n||void 0},W=function(e){return X(e,I)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Z({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var a=n[i].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),o=0;o<a.length;o++){var c=a[o],l=c.toLowerCase();-1===t.indexOf(l)||r===k&&"canonical"===e[r].toLowerCase()||l===k&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==C&&c!==E&&c!==S||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][s]&&(i[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var c=a[o],l=h()({},n[c],i[c]);n[c]=l}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},J=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){J(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:r.g.requestAnimationFrame||J,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;le(v.BODY,n),le(v.HTML,i),ce(f,p);var d={baseTag:se(v.BASE,r),linkTags:se(v.LINK,a),metaTags:se(v.META,o),noscriptTags:se(v.NOSCRIPT,c),scriptTags:se(v.SCRIPT,s),styleTags:se(v.STYLE,u)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,m,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),le(v.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(_),i=n?n.split(","):[],a=[].concat(i),o=Object.keys(t),c=0;c<o.length;c++){var l=o[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===i.indexOf(l)&&i.push(l);var u=a.indexOf(l);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);i.length===a.length?r.removeAttribute(_):r.getAttribute(_)!==o.join(",")&&r.setAttribute(_,o.join(","))}},se=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(n),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(_,"true"),i.some((function(e,t){return o=t,r.isEqualNode(e)}))?i.splice(o,1):a.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[M[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[_]=!0,i=fe(r,n),[d.createElement(v.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=ue(r),a=oe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+U(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case y:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[_]=!0,n);return Object.keys(t).forEach((function(e){var r=M[e]||e;if(r===C||r===E){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),d.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+U(n[t],r)+'"';return e?e+" "+i:i}),""),a=n.innerHTML||n.cssText||"",o=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(v.BASE,t,n),bodyAttributes:pe(g,r,n),htmlAttributes:pe(y,i,n),link:pe(v.LINK,a,n),meta:pe(v.META,o,n),noscript:pe(v.NOSCRIPT,c,n),script:pe(v.SCRIPT,l,n),style:pe(v.STYLE,s,n),title:pe(v.TITLE,{title:f,titleAttributes:p},n)}},me=u()((function(e){return{baseTag:$([T,N],e),bodyAttributes:G(g,e),defer:X(e,P),encode:X(e,z),htmlAttributes:G(y,e),linkTags:Q(v.LINK,[k,T],e),metaTags:Q(v.META,[O,w,A,x,S],e),noscriptTags:Q(v.NOSCRIPT,[C],e),onChangeClientState:W(e),scriptTags:Q(v.SCRIPT,[j,C],e),styleTags:Q(v.STYLE,[E],e),title:K(e),titleAttributes:G(b,e)}}),(function(e){ie&&re(ie),e.defer?ie=te((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),de)((function(){return null})),he=(i=me,o=a=function(e){function t(){return V(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return Z({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Z({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(n.type){case v.TITLE:return Z({},i,((t={})[n.type]=o,t.titleAttributes=Z({},a),t));case v.BODY:return Z({},i,{bodyAttributes:Z({},a)});case v.HTML:return Z({},i,{htmlAttributes:Z({},a)})}return Z({},i,((r={})[n.type]=Z({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Z({},t);return Object.keys(e).forEach((function(t){var n;r=Z({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[D[r]||r]=e[r],t}),t)}(F(i,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=F(e,["children"]),n=Z({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.createElement(i,n)},q(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(d.Component),a.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind},4839:function(e,t,r){"use strict";var n,i=r(7294),a=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return a.createElement(n,this.props)},i}(i.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(f,"canUseDOM",c),f}}},7004:function(e,t,r){"use strict";r.d(t,{e:function(){return s},Z:function(){return u}});var n=r(3366),i=r(7294),a=r(5900),o=r.n(a),c=["children","className","isSelected","isCurrent","checkbox"],l=["children","id","as","after","large"];function s(e){var t=e.children,r=e.className,a=e.isSelected,l=e.isCurrent,s=e.checkbox,u=(0,n.Z)(e,c);return i.createElement("button",Object.assign({disabled:l,className:o()("archive-button",s?["checkbox border-2",!l&&"hover:border-light active:bg-light active:text-black",l&&"bg-gray border-gray cursor-disabled",a&&'border-light before:content-["X"] before:text-xs before:mr-2']:[!l&&!a&&"text-white hover:border-light",a&&"bg-light text-black border-light",l&&"bg-gray text-white"],r)},u),t)}function u(e){var t=e.children,r=e.id,a=e.as,o=e.after,c=e.large,s=(0,n.Z)(e,l);return i.createElement(a,Object.assign({id:r,className:"group hover:text-light inline-block flex items-middle",activeClassName:"border-light text-light"},s),i.createElement("span",{className:(c?"py-4 px-8 text-2xl rounded-3xl":" text-lg py-1 px-4 rounded-2xl")+" border-current group-active:bg-light group-active:text-black  border"},t),o)}u.defaultProps={as:"a"}},2802:function(e,t,r){"use strict";var n=r(5785),i=r(7294),a=r(6125),o=r(5900),c=r.n(o),l=r(5414),s=(0,i.forwardRef)((function(e,t){var r=(0,a.d)(e.image);if(!r)return null;var o=e.alt,s=e.className,u=e.pictureClassName,f=e.loading,p=e.preload,d=e.id,m=r.height,h=r.width,g=r.images;return i.createElement("picture",{className:c()("mb-image",u),id:d},p&&i.createElement(l.q,{link:[].concat((0,n.Z)(g.sources.map((function(e){var t=e.sizes;return{rel:"preload",as:"image",href:e.srcSet,media:t,type:e.type}}))),[{rel:"preload",as:"image",href:g.fallback.src,imagesrcset:g.fallback.srcSet}])}),g.sources.map((function(e){var t=e.sizes,r=e.srcSet,n=e.type;return i.createElement("source",{type:n,srcSet:r,sizes:t,key:n})})),i.createElement("img",{ref:t,alt:o,className:s,src:(0,a.e)(r),srcSet:(0,a.f)(r),width:h,height:m,loading:f}))}));s.defaultPros={preload:!1},t.Z=s},9410:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(7294),i=r(5414),a=r(5444),o=r(5900),c=r.n(o),l=(r(7004),r(2802));function s(){return n.createElement("footer",{className:"grid grid-cols-4 gap-8 p-8 text-base"},n.createElement("div",{id:"students"},n.createElement("h3",null,"Authors"),n.createElement("ul",null,n.createElement("li",null,"Alice Bocchio"),n.createElement("li",null,"Michele Bruno"),n.createElement("li",null,"Maria Celeste Casolino"),n.createElement("li",null,"Luca Draisci"),n.createElement("li",null,"Virginia Leccisotti"),n.createElement("li",null,"Barbara Roncalli"),n.createElement("li",null,"Sara Zanardi"))),n.createElement("div",{id:"faculty"},n.createElement("h3",null,"Faculty"),n.createElement("ul",null,n.createElement("li",null,"Michele Mauri"),n.createElement("li",null,"Ángeles Briones"),n.createElement("li",null,"Gabriele Colombo"),n.createElement("li",null,"Simone Vantini"),n.createElement("li",null,"Salvatore Zingale"))),n.createElement("div",{id:"assistants"},n.createElement("h3",null,"Teaching Assistants"),n.createElement("ul",null,n.createElement("li",null,"Elena Aversa"),n.createElement("li",null,"Andrea Benedetti"),n.createElement("li",null,"Tommaso Elli"),n.createElement("li",null,"Beatrice Gobbo"))),n.createElement("div",{id:"contacts"},n.createElement("div",{className:"logo"},n.createElement("img",{src:"/assets/Logo_DensityDesign.svg",alt:"DensityDesign Lab"}),n.createElement("img",{src:"/assets/Logo_Polimi.svg",alt:"Politecnico di Milano"})),n.createElement("p",null,n.createElement("a",{href:"https://densitydesign.github.io/teaching-dd17/",target:"_blank"},"Mediazioni Algoritmiche. Designing in a data intensive society.")),n.createElement("p",null,"The Final Synthesis Design Studio is a course at Politecnico di Milano for the Master's Degree in Communication Design."),n.createElement("ul",null,n.createElement("li",{className:"flex"},n.createElement("a",{href:"https://www.facebook.com/densitydesign"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-facebook",viewBox:"0 0 16 16"},n.createElement("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"})))," ",n.createElement("a",{href:"https://twitter.com/densitydesign"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-twitter",viewBox:"0 0 16 16"},n.createElement("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})))," ",n.createElement("a",{href:"https://www.instagram.com/densitydesign/"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-instagram",viewBox:"0 0 16 16"},n.createElement("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})))),n.createElement("li",null,n.createElement("a",{href:"http://densitydesign.org/"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-globe2",viewBox:"0 0 16 16"},n.createElement("path",{d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"})),"densitydesign.org")),n.createElement("li",null,n.createElement("a",{href:"mailto:info@densitydesign.org"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-envelope-open",viewBox:"0 0 16 16"},n.createElement("path",{d:"M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z"})),"email")))))}function u(e){var t=e.children,r=e.to;return n.createElement("li",{className:"first:border-current"},n.createElement(a.Link,{to:r,className:"hover:underline active:text-light-darker",activeClassName:"border-light text-light underline "},t))}function f(e){var t=e.children,r=e.className,o=e.container,f=e.wrapperClassName,p=e.fixedHeader,d=e.footer,m=(0,a.useStaticQuery)("3409533470").logo;return n.createElement("div",{className:c()(f)},n.createElement(i.q,{bodyAttributes:{class:"bg-black text-white"}}),n.createElement("nav",{className:c()(p?"fixed":"sticky","top-0 z-40 py-4 px-8 flex w-full uppercase justify-between text-lg items-center")},n.createElement(a.Link,{to:"/",className:"w-1/12"},n.createElement(l.Z,{image:m})),n.createElement("ul",{className:"flex gap-8"},n.createElement(u,{to:"/"},"Context"),n.createElement(u,{to:"/library/"},"Library"),n.createElement(u,{to:"/about/"},"About"))),n.createElement("div",{className:c()("relative",o&&"mx-8",r)},t),d&&n.createElement(s,null))}},3366:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=commons-e50bdb4e1a664ddc2d69.js.map
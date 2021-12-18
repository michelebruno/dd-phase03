(self.webpackChunkphase_03=self.webpackChunkphase_03||[]).push([[678],{8810:function(e){var t={};e.exports=function(e){e.Vertices,e.Vector,e.Sleeping,e.Render;var n=e.Common,r=(e.Bounds,e.Axes,e.Body);e.Events;return(t=n.clone(r,!0)).create=function(e){var t=r.create.apply(null,arguments);return t},t.setVertices=function(e,t){r.setVertices.apply(null,arguments)},t.setPosition=function(e,t){r.setPosition.apply(null,arguments)},t.setAngle=function(e,t){r.setAngle.apply(null,arguments)},t.scale=function(e,t,n,o){r.scale.apply(null,arguments)},t.update=function(e,t,n,o){r.update.apply(null,arguments)},t}},7081:function(e){var t={};e.exports=function(e){e.Vertices;var n=e.Sleeping,r=e.Mouse,o=e.Events,a=(e.Detector,e.Constraint),i=e.Composite,l=e.Common,s=e.Bounds;t.create=function(e,n){var s=(e?e.mouse:null)||(n?n.mouse:null);s||(e&&e.render&&e.render.canvas?s=r.create(e.render.canvas):n&&n.element?s=r.create(n.element):(s=r.create(),l.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var m={type:"mouseConstraint",mouse:s,element:null,body:null,constraint:a.create({label:"Mouse Constraint",pointA:s.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),collisionFilter:{category:1,mask:4294967295,group:0}},u=l.extend(m,n);return o.on(e,"beforeUpdate",(function(){var n=i.allBodies(e.world);t.update(u,n),c(u)})),u},t.update=function(e,t){var r,a=e.mouse,i=e.constraint,l=e.body;if(0===a.button)if(i.bodyB)n.set(i.bodyB,!1),r=l.Dom.render.mapping.viewToWorld(a.position),i.pointA=r;else{document.querySelectorAll("[matter]");for(var c=0;c<t.length;c++){r=(l=t[c]).Dom.render.mapping.viewToWorld(a.position);l.Dom.render.mapping.worldToView(l.position);if(s.contains(l.bounds,r)){i.pointA=r,i.bodyB=e.body=l,i.pointB={x:0,y:0},i.angleB=l.angle;break}}}else i.bodyB=e.body=null,i.pointB=null,l&&o.trigger(e,"enddrag",{mouse:a,body:l})};var c=function(e){var t=e.mouse,n=t.sourceEvents;n.mousemove&&o.trigger(e,"mousemove",{mouse:t}),n.mousedown&&o.trigger(e,"mousedown",{mouse:t}),n.mouseup&&o.trigger(e,"mouseup",{mouse:t}),r.clearSourceEvents(t)};return t}},8769:function(e){e.exports=function(e){e.World,e.Sleeping,e.Resolver,e.Render,e.Pair,e.Metrics,e.Grid,e.Events;var t=e.Composite,n=(e.Constraint,e.Common,e.Body,e.DomBody),r=e.Engine,o=r.update;r.update=function(e,n,r){o(e,n,r),n=n||1e3/60,r=r||1;var i=e.world,l=e.timing,s=t.allBodies(i);return a(s,n,l.timeScale,r,i.bounds),e};var a=function(e,t,r,o,a){for(var i=0;i<e.length;i++){var l=e[i];l.isStatic||l.isSleeping||n.update(l,t,r,o)}}}},6154:function(e){var t={};e.exports=function(e){e.Body;var n=e.Bodies,r=e.DomBody,o=e.Vertices,a=e.Common,i=e.World;e.Bounds,e.Vector;return t.create=function(e){var n=e.bodyType,r=e.el,o=e.render,a=e.position;delete e.bodyType,delete e.render,delete e.position,e.domRenderer=o;var l=null,s=document.querySelector(r),c=o.mapping.viewToWorld({x:a.x,y:a.y});if("block"==n){var m=o.mapping.viewToWorld({x:s.offsetWidth,y:s.offsetHeight});l=t.OGblock(c.x,c.y,m.x,m.y,e)}else if("circle"==n){var u=o.mapping.viewToWorld(s.offsetWidth/2);l=t.circle(c.x,c.y,u,e)}return l&&i.add(o.engine.world,[l]),l},t.OGblock=function(e,t,n,i,l){l=l||{};var s={label:"Block Body",position:{x:e,y:t},vertices:o.fromPath("L 0 0 L "+n+" 0 L "+n+" "+i+" L 0 "+i)};if(l.chamfer){var c=option.chamfer;s.vertices=o.chamfer(s.vertices,c.radius,c.quality,c.qualityMin,c.qualityMax),delete l.chamfer}return r.create(a.extend({},s,l))},t.block=function(e,t,n){n=n||{};var i=(n=a.extend({Dom:{element:null,render:null}},n)).Dom.render,l=n.Dom.element,s=i.mapping.viewToWorld({x:e,y:t}),c=i.mapping.viewToWorld({x:l.offsetWidth,y:l.offsetHeight}),m={label:"DOM Block Body",position:{x:s.x,y:s.y},vertices:o.fromPath("L 0 0 L "+c.x+" 0 L "+c.x+" "+c.y+" L 0 "+c.y)};if(n.chamfer){var u=option.chamfer;m.vertices=o.chamfer(m.vertices,u.radius,u.quality,u.qualityMin,u.qualityMax),delete n.chamfer}return r.create(a.extend({},m,n))},t.circle=function(e,n,r,o,i){o=o||{};var l={label:"Circle Body",circleRadius:r};i=i||25;var s=Math.ceil(Math.max(10,Math.min(i,r)));return s%2==1&&(s+=1),t.polygon(e,n,s,r,a.extend({},l,o))},t.polygon=function(e,t,i,l,s){if(s=s||{},i<3)return n.circle(e,t,l,s);for(var c=2*Math.PI/i,m="",u=.5*c,d=0;d<i;d+=1){var p=u+d*c,g=Math.cos(p)*l,f=Math.sin(p)*l;m+="L "+g.toFixed(3)+" "+f.toFixed(3)+" "}var h={label:"Polygon Body",position:{x:e,y:t},vertices:o.fromPath(m)};if(s.chamfer){var y=s.chamfer;h.vertices=o.chamfer(h.vertices,y.radius,y.quality,y.qualityMin,y.qualityMax),delete s.chamfer}return r.create(a.extend({},h,s))},t}},6995:function(e,t,n){var r=n(1742),o=n(781),a=n(8810),i=n(6154),l=n(7081),s=n(8769),c={name:"matter-dom-plugin",version:"1.0.0",for:"matter-js@^0.12.0",install:function(e){c.installRenderDom(e),c.installDomBody(e),c.installDomBodies(e),c.installDomMouseConstraint(e),c.installEngine(e)},installRenderDom:function(e){console.log("Installing RenderDom module."),e.RenderDom=o(e)},installDomBodies:function(e){console.log("Installing DomBodies module."),e.DomBodies=i(e)},installDomMouseConstraint:function(e){console.log("Installing DomMouseConstraint."),e.DomMouseConstraint=l(e)},installDomBody:function(e){console.log("Installing DomBody updates."),e.DomBody=a(e)},installEngine:function(e){console.log("Patching Engine."),s(e)}};r.Plugin.register(c)},781:function(e){var t={};e.exports=function(e){var n,r,o=e.Common,a=e.Composite,i=e.Events,l=e.Render;return"undefined"!=typeof window&&(n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout((function(){e(o.now())}),1e3/60)},r=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),t.create=function(e){var n={engine:null,element:window,controller:t,frameRequestId:null,options:{}},r=e.engine,a=o.extend(n,e);a.mapping={},a.mapping.ratioMultiplier=1/6,a.mapping.VIEW={width:window.innerWidth,height:window.innerHeight},a.mapping.VIEW.center={x:a.mapping.VIEW.width/2,y:a.mapping.VIEW.height/2},a.mapping.WORLD={width:a.mapping.VIEW.width*a.mapping.ratioMultiplier,height:a.mapping.VIEW.height*a.mapping.ratioMultiplier},a.mapping.WORLD.center={x:a.mapping.WORLD.width/2,y:a.mapping.WORLD.height/2},a.mapping.viewToWorld=function(e){return"object"==typeof e&&null!==e?{x:a.mapping.ratioMultiplier*e.x,y:a.mapping.ratioMultiplier*e.y}:a.mapping.ratioMultiplier*e},a.mapping.worldToView=function(e){return"object"==typeof e&&null!==e?{x:e.x/a.mapping.ratioMultiplier,y:e.y/a.mapping.ratioMultiplier}:e/a.mapping.ratioMultiplier},document.querySelector("#debug").style.position="absolute";var i=l.create({element:document.querySelector("#debug"),engine:r,options:{width:a.mapping.WORLD.width,height:a.mapping.WORLD.height,background:"#fafafa",wireframeBackground:"#222",hasBounds:!1,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showBroadphase:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showShadows:!1}});return l.run(i),a.DebugRender=i,a},t.run=function(e){!function r(o){e.frameRequestId=n(r),t.world(e)}()},t.stop=function(e){r(e.frameRequestId)},t.world=function(e){var n=e.engine,r=n.world,o=(a.allBodies(r),a.allConstraints(r),document.querySelectorAll("[matter]")),l={timestamp:n.timing.timestamp};i.trigger(e,"beforeRender",l),t.bodies(e,o)},t.bodies=function(e,t,n){for(var r=e.engine.world,o=(e.options,a.allBodies(r)),i=0;i<o.length;i++)for(var l=o[i],s=l.parts.length>1?1:0;s<l.parts.length;s++){var c=l.parts[s],m=c.Dom.element,u=e.mapping.worldToView({x:c.position.x,y:c.position.y}),d={x:m.offsetWidth/2,y:m.offsetHeight/2};m.style.position="absolute",m.style.transform="translate(".concat(u.x-d.x,"px, ").concat(u.y-d.y,"px)"),m.style.transform+="rotate(".concat(l.angle,"rad)")}},t}},3132:function(e,t,n){"use strict";n.d(t,{N:function(){return l},Z:function(){return s}});var r=n(7294),o=n(5900),a=n.n(o),i=n(166);function l(e){var t=e.children,n=e.className,o=e.isActive,i=e.promask,l=e.nomask,s=e.secondary;return r.createElement("span",{className:a()("highlighted-word",!i&&!l&&"before:bg-light",s?[o&&"before:bg-light"]:[i&&"before:bg-promask",l&&"before:bg-nomask",o&&(l||i)&&"text-white"],!o&&"before:scale-x-0",n)},t)}function s(e){var t=e.id,n=e.className,o=e.children,s=e.origin,c=e.sentences,m=e.user,u=e.createdAt,d=e.dateText,p=e.word,g=e.secondWord,f=e.petition,h=(e.splitted,e.petitionTitle,e.highlightWords),y=e.large,v=!1,b=(0,r.useState)();b[0],b[1];return r.createElement("div",{id:t,className:a()(n,"comment grid grid-cols-8 w-full bg-white text-black boreder-2 normal-case",y?"p-16 rounded-[3rem] gap-8":"p-4  gap-4 rounded-xl text-base ","promask"===s&&"border-promask","nomask"===s&&"border-nomask")},r.createElement("div",{className:" "},r.createElement("div",{className:"rounded-full bg-"+s,style:{aspectRatio:"1"}})),r.createElement("div",{className:"col-span-7"},r.createElement("div",{className:"text-gray select-none "+(y?"text-2xl":"text-sm")},r.createElement("span",null,"User",m)," • ",r.createElement("span",null,d||u)),r.createElement("p",{className:"comment-text "+(y?"text-3xl leading-snug py-4":"py-1 text-base")},void 0!==c?c.map((function(e,t){return(0,i.b)(e,p)||(0,i.b)(e,g)?(v=!1,r.createElement(r.Fragment,{key:t},e.map((function(e,t){var n=e.toLowerCase()===p,o=e.toLowerCase()===g;return n||o?r.createElement(r.Fragment,{key:t}," ",r.createElement(l,{isActive:h,promask:"promask"===s,nomask:"nomask"===s,secondary:!o},e)):e===g?r.createElement("span",{key:t,className:"border-light border-2"},e):e}))," ")):v?void 0:(v=!0,"[...] ")})):o),r.createElement("a",{href:f.slug?"https://www.change.org/p/"+f.slug:void 0,title:f.title,className:a()("text-gray truncate underline block ",f.slug&&" hover:text-light-darker",y?"text-2xl":"text-sm"),target:"_blank"},f.title||"Petition title")))}s.defaultProps={highlightWords:!0}},4485:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var r,o,a,i,l,s,c,m=n(7294),u=n(9410),d=n(2884),p=n(2932),g=function(){return"undefined"!=typeof window},f=function(){return r||g()&&(r=window.gsap)&&r.registerPlugin&&r},h=function(e){return"string"==typeof e},y=function(e){return"function"==typeof e},v=function(e,t){var n="x"===t?"Width":"Height",r="scroll"+n,o="client"+n;return e===a||e===i||e===l?Math.max(i[r],l[r])-(a["inner"+n]||i[o]||l[o]):e[r]-e["offset"+n]},b=function(e,t){var n="scroll"+("x"===t?"Left":"Top");return e===a&&(null!=e.pageXOffset?n="page"+t.toUpperCase()+"Offset":e=null!=i[n]?i:l),function(){return e[n]}},w=function(e,t){if(!(e=s(e)[0])||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),r=!t||t===a||t===l,o=r?{top:i.clientTop-(a.pageYOffset||i.scrollTop||l.scrollTop||0),left:i.clientLeft-(a.pageXOffset||i.scrollLeft||l.scrollLeft||0)}:t.getBoundingClientRect(),c={x:n.left-o.left,y:n.top-o.top};return!r&&t&&(c.x+=b(t,"x")(),c.y+=b(t,"y")()),c},x=function(e,t,n,r,o){return isNaN(e)||"object"==typeof e?h(e)&&"="===e.charAt(1)?parseFloat(e.substr(2))*("-"===e.charAt(0)?-1:1)+r-o:"max"===e?v(t,n)-o:Math.min(v(t,n),w(e,t)[n]-o):parseFloat(e)-o},E=function(){r=f(),g()&&r&&document.body&&(a=window,l=document.body,i=document.documentElement,s=r.utils.toArray,r.config({autoKillThreshold:7}),c=r.config(),o=1)},k={version:"3.8.0",name:"scrollTo",rawVars:1,register:function(e){r=e,E()},init:function(e,t,n,i,l){o||E();var s=this,c=r.getProperty(e,"scrollSnapType");s.isWin=e===a,s.target=e,s.tween=n,t=function(e,t,n,r){if(y(e)&&(e=e(t,n,r)),"object"!=typeof e)return h(e)&&"max"!==e&&"="!==e.charAt(1)?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var o,a={};for(o in e)a[o]="onAutoKill"!==o&&y(e[o])?e[o](t,n,r):e[o];return a}(t,i,e,l),s.vars=t,s.autoKill=!!t.autoKill,s.getX=b(e,"x"),s.getY=b(e,"y"),s.x=s.xPrev=s.getX(),s.y=s.yPrev=s.getY(),c&&"none"!==c&&(s.snap=1,s.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),null!=t.x?(s.add(s,"x",s.x,x(t.x,e,"x",s.x,t.offsetX||0),i,l),s._props.push("scrollTo_x")):s.skipX=1,null!=t.y?(s.add(s,"y",s.y,x(t.y,e,"y",s.y,t.offsetY||0),i,l),s._props.push("scrollTo_y")):s.skipY=1},render:function(e,t){for(var n,r,o,i,l,s=t._pt,m=t.target,u=t.tween,d=t.autoKill,p=t.xPrev,g=t.yPrev,f=t.isWin,h=t.snap,y=t.snapInline;s;)s.r(e,s.d),s=s._next;n=f||!t.skipX?t.getX():p,o=(r=f||!t.skipY?t.getY():g)-g,i=n-p,l=c.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),d&&(!t.skipX&&(i>l||i<-l)&&n<v(m,"x")&&(t.skipX=1),!t.skipY&&(o>l||o<-l)&&r<v(m,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(u.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(u,t.vars.onAutoKillParams||[]))),f?a.scrollTo(t.skipX?n:t.x,t.skipY?r:t.y):(t.skipY||(m.scrollTop=t.y),t.skipX||(m.scrollLeft=t.x)),!h||1!==e&&0!==e||(r=m.scrollTop,n=m.scrollLeft,y?m.style.scrollSnapType=y:m.style.removeProperty("scroll-snap-type"),m.scrollTop=r+1,m.scrollLeft=n+1,m.scrollTop=r,m.scrollLeft=n),t.xPrev=t.x,t.yPrev=t.y},kill:function(e){var t="scrollTo"===e;(t||"scrollTo_x"===e)&&(this.skipX=1),(t||"scrollTo_y"===e)&&(this.skipY=1)}};k.max=v,k.getOffset=w,k.buildGetter=b,f()&&r.registerPlugin(k);var N=n(5900),T=n.n(N),A=n(5444),P=n(2802),B=n(3132);function S(e){var t=e.children,n=(e.className,e.style,e.id,e.promask),r=e.top,o=e.left,a=e.right,i=e.bottom,l=e.rotate,s=n.toFixed(0)+"%",c=(100-n).toFixed(0)+"%";return m.createElement("div",{className:"delta-word group absolute inline-block",style:{top:void 0!==r?r+"%":void 0,bottom:void 0!==i?i+"%":void 0,left:void 0!==o?o+"%":void 0,right:void 0!==a?a+"%":void 0,transform:void 0!==l?"rotate("+l+"deg)":void 0}},m.createElement("div",{className:"relative"},m.createElement("div",{className:"text-3xl align-middle "},m.createElement("div",{className:" cursor-pointer absolute left-0 top-0 h-full transition-all text-center bg-promask flex items-center justify-center",style:{width:s}},m.createElement("span",{className:"opacity-0 group-hover:opacity-100 transition-all"},s)),m.createElement("div",{className:"cursor-pointer absolute right-0 top-0 h-full transition-all text-center bg-nomask flex items-center justify-center",style:{width:c}},m.createElement("span",{className:"opacity-0 group-hover:opacity-100 transition-all"},c))),m.createElement("span",{className:"group-hover:opacity-0 transition-all relative px-1 cursor-pointer"},t)))}var D=n(7004),W=["h-0","h-screen","h-[200vh]","h-[300vh]","h-[400vh]"],M=(0,m.forwardRef)((function(e,t){var n=e.children,r=e.className,o=e.id,a=e.span,i=e.uppercase;return m.createElement("div",{className:T()("section px-10 pt-32 overflow-hidden box-border",W[a],i&&"uppercase","grid grid-cols-12 gap-16","relative",r),style:{height:a+"00 vh"},id:o,ref:t},n,m.createElement("div",{className:"snappers-container absolute inset-0 z-[-1]"},Array(a).fill(0).map((function(e,t){return m.createElement("div",{className:"h-screen snapper",key:t})}))))}));M.defaultProps={span:1,uppercase:!0};var C=M,L=n(5785);function Z(e){var t=e.words,n=(0,m.useRef)();return(0,m.useEffect)((function(){var e=2*t.nodes.length;d.ZP.to(n.current,{yPercent:-100*e/(e+1),ease:"power4.out",paused:!0,duration:3,delay:.3,scrollTrigger:{trigger:n.current.parentElement,once:!0}})}),[]),m.createElement("div",{className:"px-16 py-4 overflow-hidden h-[1.75em] rounded-full border-2 border-white inline-block"},m.createElement("div",{className:"inline-block h-[1em]",id:"slot-machine"},m.createElement("div",{className:"slot-content w-auto",ref:n},[].concat((0,L.Z)(t.nodes.map((function(e){return e.name}))),(0,L.Z)(t.nodes.map((function(e){return e.name}))),["mask mandate"]).map((function(e,t){return m.createElement("span",{className:"block w-auto",key:t},e)})))))}var R=n(5617),q=n(5414);n(1742),n(6995);d.ZP.registerPlugin(p.i),d.ZP.registerPlugin(k),d.ZP.defaults({duration:.8});var I=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){I=!0}}))}catch(Y){}var O=!!I&&{passive:!1},V="undefined"==typeof document||"onwheel"in document.createElement("div")?"wheel":"mousewheel";function F(e){d.ZP.to(window,{scrollTo:{y:e*window.innerHeight,autoKill:!1},duration:.8,overwrite:!0})}var j={812047727:"vaccine",811710031:"health",814486694:"vaccine",822518213:"health",817756846:"vaccine",821382262:"family"};var X=function(e){var t=e.data,n=t.allFile,r=t.words,o=t.comments.nodes,a=t.front,i=(0,m.useState)(!1),l=i[0],s=i[1],c=(0,m.useRef)(),p=(0,m.useRef)(),g=(0,m.useRef)(),f=(0,m.useRef)();return(0,m.useEffect)((function(){d.ZP.timeline({scrollTrigger:{trigger:c.current,start:"top top",end:"bottom bottom"},toggleActions:"play pause reverse reset"}).from(c.current.querySelector("h2"),{opacity:0,duration:.7}).from("#change-data-bubbles > div",{y:1200,stagger:.3,duration:2,rotate:15,ease:"power4.out"}).addLabel("bubbles-up").to("#change-data-bubbles > div",{rotate:15,duration:8,stagger:.4,repeat:-1,ease:"linear",yoyo:!0,yoyoEase:"linear"},"bubbles-up").to("#change-data-bubbles > div",{y:20,duration:6,stagger:.6,repeat:-1,ease:"linear",yoyo:!0,yoyoEase:"linear"},"bubbles-up");var e=d.ZP.from(d.ZP.utils.toArray(p.current.querySelectorAll("img")),{paused:!0,opacity:0,y:10,duration:.2,stagger:.1});d.ZP.timeline({scrollTrigger:{trigger:p.current,start:"top top",pin:p.current.querySelector(".pin-me"),pinSpacer:p.current.querySelector(".pin-spacer"),end:"bottom bottom",onUpdate:function(t){1===t.direction&&t.progress>.49&&e.play(),-1===t.direction&&e.reverse()}}}),d.ZP.from("#fake-comment",{scrollTrigger:{trigger:"#fake-comment"},yPercent:20,opacity:0}),d.ZP.timeline({scrollTrigger:{trigger:"#some-words-frequent"}}).from("#some-words-frequent .delta-word",{y:-1200,stagger:-.2}).from("#view-library-button",{yPercent:100,opacity:0}),d.ZP.timeline({scrollTrigger:{trigger:g.current,end:"bottom bottom"}}).addLabel("comment-apper").from(d.ZP.utils.toArray(g.current.querySelectorAll(".comment-container .comment")),{yPercent:20,opacity:0,stagger:.3},"comment-apper").from("#recurring-words",{y:300,opacity:0,delay:1.6},"comment-apper").to({},{delay:2,onComplete:function(){s(!0)}},"comment-apper");var t=d.ZP.utils.toArray(".snapper");function n(e){e.preventDefault();var t=-e.wheelDeltaX||-e.deltaX,n=e.wheelDeltaY||-e.deltaY,o=Math.abs(t)>Math.abs(n)?t:n;e&&e.preventDefault(),r&&(o<0?a():i())}window.addEventListener(V,n,O);var r=!0,o=0;function a(){r&&(r=!1,t.length<o||F(++o),setTimeout((function(){r=!0}),1500))}function i(){r&&(r=!1,0!==o&&F(--o),setTimeout((function(){r=!0}),1500))}return document.addEventListener("keyup",(function(e){e.preventDefault(),r&&("ArrowDown"===e.key||"ArrowRight"===e.key?a():"ArrowUp"!==e.key&&"ArrowLeft"!==e.key||i())})),d.ZP.timeline({scrollTrigger:{start:0,end:"max",scrub:!0}}).from("#progress-bar",{scaleY:0}),function(){return window.removeEventListener(V,n)}}),[]),m.createElement(u.Z,{fixedHeader:!0,className:"text-[4.34vw] leading-tight"},m.createElement(q.q,{bodyAttributes:{class:"no-scrollbar bg-black text-white"}}),m.createElement("div",{className:"fixed right-0 top-0 bottom-0 origin-top bg-light w-2 z-40",id:"progress-bar"}),m.createElement(C,{className:"bg-light text-black text-[6vw] grid-rows-6 z-50 select-none"},m.createElement(R.Z,{absolute:!0,light:!0}),m.createElement(P.Z,{image:a.nodes[2],className:"absolute left-[8.3%] top-16 w-1/6"}),m.createElement(P.Z,{image:a.nodes[0],className:"absolute right-16 top-32 w-1/6"}),m.createElement(P.Z,{image:a.nodes[3],className:"absolute right-20 bottom-32 w-1/6"}),m.createElement(P.Z,{image:a.nodes[1],className:"absolute left-20 bottom-60 w-1/6"}),m.createElement("div",{className:"text-black text-center col-span-12 row-start-3 row-span-2 self-middle"},m.createElement("h1",{className:"text-9xl"},"Opinion Library"),m.createElement("h2",{className:"text-[2.2rem] normal-case"},"What do change.org users think about mask mandates in the U.S.?")),m.createElement("div",{className:"absolute left-0 right-0 bottom-0 py-8 text-center text-xl normal-case text-black"},m.createElement("p",{onClick:function(){return F(1)},className:"cursor-pointer"},"Scroll down to discover more",m.createElement("span",{className:"mx-auto w-12 pt-4 block"},m.createElement("svg",{viewBox:"0 0 63 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M61.5 2L32 23.5L1 2",stroke:"black",strokeWidth:"3"})))))),m.createElement(C,{span:1,ref:c},m.createElement("h2",{className:"col-span-9"},m.createElement("mark",null,"Change.org")," ","is the largest petition website, and in 2020 ",m.createElement("span",{className:"inline-block"},"it only grew")," larger, especially in the United States."),m.createElement("div",{id:"change-data-bubbles",className:"text-black text-center normal-case absolute h-full w-full inset-0"},m.createElement("div",{className:T()("bg-light rotate-[-30deg] ","bg-light rounded-full ","flex items-center justify-center ","w-[60vmin] h-[60vmin] ","absolute right-0  bottom-[15%] ")},m.createElement("div",null,m.createElement("p",{className:"text-3xl"},"+208,5%"),m.createElement("p",{className:"text-base"},"Signatures"))),m.createElement("div",{className:T()("bg-light rotate-[18deg] ","bg-light rounded-full px-2 ","flex items-center justify-center ","w-[16vmin] h-[16vmin] ","absolute right-[66%]  bottom-[16%]")},m.createElement("div",null,m.createElement("p",{className:"text-3xl"},"+33%"),m.createElement("p",{className:"text-base"},"Global Users"))),m.createElement("div",{className:T()("bg-light rotate-[-30deg] ","bg-light rounded-full px-2 ","flex items-center justify-center ","w-[15vmin] h-[15vmin] ","absolute left-[41%] bottom-[4%]")},m.createElement("div",null,m.createElement("p",{className:"text-3xl"},"+46%"),m.createElement("p",{className:"text-base"},"Published Petitions"))))),m.createElement(C,{span:2,ref:p},m.createElement("div",{className:"col-span-12 pin-spacer "},m.createElement("div",{className:"pin-me w-full grid grid-cols-12 gap-16 relative"},m.createElement("h2",{className:"col-span-8",style:{letterSpacing:-1}},"As the platform grew, so did the topics being discussed. One of the most ",m.createElement("mark",null,"controversial themes")," has been",m.createElement("br",null),m.createElement(Z,{words:r})))),m.createElement("div",{className:"absolute h-screen w-full bottom-0 left-0 right-0 p-8"},m.createElement("div",{className:"relative h-full w-full z-40 home-petition-images "},m.createElement(P.Z,{image:n.nodes[7],className:"w-1/3 absolute -top-16 right-8"}),m.createElement(P.Z,{image:n.nodes[0],className:"w-1/3 absolute top-0 left-0"}),m.createElement(P.Z,{image:n.nodes[8],className:"w-1/3 absolute top-[16%] left-[41%]"}),m.createElement(P.Z,{image:n.nodes[2],className:"w-1/3 absolute top-1/3 mt-8 -right-16"}),m.createElement(P.Z,{image:n.nodes[1],className:"w-1/3 absolute top-1/2 -translate-y-1/2 left-[8.3%]"}),m.createElement(P.Z,{image:n.nodes[3],className:"w-1/3 absolute bottom-[16%] right-[16%]"}),m.createElement(P.Z,{image:n.nodes[4],className:"w-1/3 absolute bottom-4 left-[16%]"}),m.createElement(P.Z,{image:n.nodes[5],className:"w-1/3 absolute top-[90%] -left-1/4 "}),m.createElement(P.Z,{image:n.nodes[6],className:"w-1/3 absolute top-[90%] right-0"})))),m.createElement(C,{className:"auto-rows-min content-center pb-32 ",id:"why-you-signed",ref:f},m.createElement("div",{className:"col-span-9 col-start-4"},m.createElement("p",{className:"pb-8 text-right"},m.createElement("mark",null,"Why")," ","they have signed"),m.createElement(B.Z,{id:"fake-comment",user:"30200130",created_at:"1 minute ago",petition:{title:"Mask mandate petition"},createdAt:"1 minute ago",large:!0,origin:"black"},"Those who signed these petitions explained their reasons in comments."))),m.createElement(C,{span:1,className:"auto-rows-min",id:"understand-language",ref:g},m.createElement("div",{className:"col-span-8 relative "},m.createElement("p",{id:"this-allows"},"This allows us to understand the different points of view and the ",m.createElement("mark",null,"language")," used to express them."),m.createElement("p",{id:"recurring-words",className:""},"We can find recurring",m.createElement(B.N,{isActive:l,className:l&&"text-black"},"words")," in these comments.")),m.createElement("div",{className:"col-span-4  normal-case overflow-hidden"},m.createElement("div",{className:"grid auto-rows-min gap-y-4 comment-container h-screen overflow-y-scroll no-scrollbar "},Object.entries(j).map((function(e){var t=e[0],n=e[1],r=o.find((function(e){return e.commentId==t}));return m.createElement(B.Z,Object.assign({key:t,highlightWords:l,word:n},r,{origin:"black"}))}))))),m.createElement(C,{span:1,className:"pb-32",id:"some-words-frequent"},m.createElement("div",{className:"col-span-6"},m.createElement("h2",{className:"mb-4"},"these words are common, but are used in different ways by ",m.createElement("span",{className:"bg-promask inline-block"},"pro mask")," or"," ",m.createElement("span",{className:"bg-nomask inline-block"},"no mask")," users")),m.createElement("div",{className:"col-span-6 relative"},m.createElement(S,{promask:55,bottom:78,left:45,rotate:9},"Health"),m.createElement(S,{promask:45,bottom:65,right:12,rotate:6},"Vaccine"),m.createElement(S,{promask:60,bottom:53,right:8,rotate:12},"Student"),m.createElement(S,{promask:55,bottom:40,right:20,rotate:2},"School"),m.createElement(S,{promask:51,bottom:25,right:10,rotate:11},"Science"),m.createElement(S,{promask:61,bottom:19,left:14,rotate:-39},"Family"),m.createElement(S,{promask:33,bottom:12,right:12,rotate:3},"Mandate"),m.createElement(S,{promask:54,bottom:0,rotate:-4},"Teacher"),m.createElement(S,{promask:32,bottom:0,right:0,rotate:4},"Children"))),m.createElement(C,null,m.createElement("div",{className:"col-span-9",style:{letterSpacing:-1}},"This is an opinion library collecting comments and showing relations among the most used words in pro mask and no mask comments."),m.createElement("div",{className:"absolute left-0 right-0 bottom-8 text-center"},m.createElement("div",{className:"mx-auto inline-block"},m.createElement(D.Z,{id:"view-library-button",as:A.Link,to:"/library/",large:!0},"View the library")))))}},166:function(e,t,n){"use strict";function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return-1!==e.findIndex((function(e){return e.toLowerCase()===t}))}function i(e,t){for(var n,o=r(e);!(n=o()).done;){if(a(n.value,t))return!0}return!1}n.d(t,{b:function(){return a},a:function(){return i}})}}]);
//# sourceMappingURL=component---src-pages-index-js-c22ec5730b194ad63b2b.js.map
function asyncGeneratorStep(t,e,o,n,r,i,a){try{var s=t[i](a),l=s.value}catch(c){return void o(c)}s.done?e(l):Promise.resolve(l).then(n,r)}function _asyncToGenerator(t){return function(){var e=this,o=arguments;return new Promise((function(n,r){var i=t.apply(e,o);function a(t){asyncGeneratorStep(i,n,r,a,s,"next",t)}function s(t){asyncGeneratorStep(i,n,r,a,s,"throw",t)}a(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{K9Nc:function(t,e,o){"use strict";o.r(e),o.d(e,"ion_app",(function(){return d})),o.d(e,"ion_buttons",(function(){return p})),o.d(e,"ion_content",(function(){return u})),o.d(e,"ion_footer",(function(){return f})),o.d(e,"ion_header",(function(){return A})),o.d(e,"ion_router_outlet",(function(){return y})),o.d(e,"ion_title",(function(){return j})),o.d(e,"ion_toolbar",(function(){return O}));var n=o("c1op"),r=o("AfW+"),i=o("aiEM"),a=(o("kBU6"),o("Dl6n")),s=o("m9yc"),l=o("K6rM"),c=o("qaSm");const d=class{constructor(t){Object(n.l)(this,t)}componentDidLoad(){b(()=>{const t=Object(r.f)(window,"hybrid");r.b.getBoolean("_testing")||o.e(9).then(o.bind(null,"tCf4")).then(t=>t.startTapClick(r.b)),r.b.getBoolean("statusTap",t)&&o.e(7).then(o.bind(null,"m/DA")).then(t=>t.startStatusTap()),r.b.getBoolean("inputShims",g())&&o.e(6).then(o.bind(null,"aoIK")).then(t=>t.startInputShims(r.b)),r.b.getBoolean("hardwareBackButton",t)&&o.e(4).then(o.bind(null,"XRsP")).then(t=>t.startHardwareBackButton()),o.e(3).then(o.bind(null,"3YLQ")).then(t=>t.startFocusVisible())})}render(){const t=Object(n.d)(this);return Object(n.i)(n.a,{class:{[t]:!0,"ion-page":!0,"force-statusbar-padding":r.b.getBoolean("_forceStatusbarPadding")}})}get el(){return Object(n.f)(this)}static get style(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"}},g=()=>Object(r.f)(window,"ios")&&Object(r.f)(window,"mobile"),b=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},p=class{constructor(t){Object(n.l)(this,t),this.collapse=!1}render(){const t=Object(n.d)(this);return Object(n.i)(n.a,{class:{[t]:!0,"buttons-collapse":this.collapse}})}static get style(){return".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s  ion-button {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s  ion-button:not(.button-round) {--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button {--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-hover:rgba(var(--ion-color-contrast-rgb),0.08);--background-focused:rgba(var(--ion-color-contrast-rgb),0.24)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-solid , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast);--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-tint);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-outline , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-outline {--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s  .button-has-icon-only.button-clear {--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s  .button {--background-hover:rgba(66,66,66,0.08)}.sc-ion-buttons-md-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-background-color,#fff));--background:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-activated:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:var(--ion-toolbar-color-activated,#4a4a4a);--background-hover:rgba(66,66,66,0.92)}.sc-ion-buttons-md-s  .button-outline {--background:transparent;--background-activated:transparent;--border-color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  .button-clear , .sc-ion-buttons-md-s  .button-outline {--color:initial;--color-activated:currentColor;--color-focused:var(--ion-toolbar-color,var(--ion-text-color,#424242))}.sc-ion-buttons-md-s  .button-clear {--background:transparent;--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:1.4em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:1.4em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-md-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}"}},u=class{constructor(t){Object(n.l)(this,t),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.mode=Object(n.d)(this),this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1,this.ionScrollStart=Object(n.e)(this,"ionScrollStart",7),this.ionScroll=Object(n.e)(this,"ionScroll",7),this.ionScrollEnd=Object(n.e)(this,"ionScrollEnd",7)}disconnectedCallback(){this.onScrollEnd()}componentDidLoad(){this.resize()}onClick(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())}shouldForceOverscroll(){const t=this.forceOverscroll,e=this.mode;return void 0===t?"ios"===e&&Object(r.f)("ios"):t}resize(){this.fullscreen?Object(n.g)(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())}readDimensions(){const t=h(this.el),e=Math.max(this.el.offsetTop,0),o=Math.max(t.offsetHeight-e-this.el.offsetHeight,0);(e!==this.cTop||o!==this.cBottom)&&(this.cTop=e,this.cBottom=o,this.el.forceUpdate())}onScroll(t){const e=Date.now(),o=!this.isScrolling;this.lastScroll=e,o&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,Object(n.g)(e=>{this.queued=!1,this.detail.event=t,m(this.detail,this.scrollEl,e,o),this.ionScroll.emit(this.detail)}))}getScrollElement(){return Promise.resolve(this.scrollEl)}scrollToTop(t=0){return this.scrollToPoint(void 0,0,t)}scrollToBottom(t=0){return this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)}scrollByPoint(t,e,o){return this.scrollToPoint(t+this.scrollEl.scrollLeft,e+this.scrollEl.scrollTop,o)}scrollToPoint(t,e,o=0){var n=this;return _asyncToGenerator(regeneratorRuntime.mark((function r(){var i,a,s,l,c,d,g,b,p;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=n.scrollEl,!(o<32)){r.next=3;break}return r.abrupt("return",(null!=e&&(i.scrollTop=e),void(null!=t&&(i.scrollLeft=t))));case 3:return s=0,l=new Promise(t=>a=t),c=i.scrollTop,d=i.scrollLeft,g=null!=e?e-c:0,b=null!=t?t-d:0,p=t=>{const e=Math.min(1,(t-s)/o)-1,n=Math.pow(e,3)+1;0!==g&&(i.scrollTop=Math.floor(n*g+c)),0!==b&&(i.scrollLeft=Math.floor(n*b+d)),n<1?requestAnimationFrame(p):a()},r.abrupt("return",(requestAnimationFrame(t=>{s=t,p(t)}),l));case 6:case"end":return r.stop()}}),r)})))()}onScrollStart(){this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()},100)}onScrollEnd(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))}render(){const t=this.scrollX,e=this.scrollY,o=Object(n.d)(this),i=this.shouldForceOverscroll(),s="ios"===o&&r.b.getBoolean("experimentalTransitionShadow",!0);return this.resize(),Object(n.i)(n.a,{class:Object.assign(Object.assign({},Object(a.a)(this.color)),{[o]:!0,"content-sizing":Object(a.c)("ion-popover",this.el),overscroll:i}),style:{"--offset-top":"".concat(this.cTop,"px"),"--offset-bottom":"".concat(this.cBottom,"px")}},Object(n.i)("main",{class:{"inner-scroll":!0,"scroll-x":t,"scroll-y":e,overscroll:(t||e)&&i},ref:t=>this.scrollEl=t,onScroll:t=>this.onScroll(t)},Object(n.i)("slot",null)),s?Object(n.i)("div",{class:"transition-effect"},Object(n.i)("div",{class:"transition-cover"}),Object(n.i)("div",{class:"transition-shadow"})):null,Object(n.i)("slot",{name:"fixed"}))}get el(){return Object(n.f)(this)}static get style(){return':host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:""}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{left:-100%;opacity:0;pointer-events:none}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}'}},h=t=>t.closest("ion-tabs")||t.closest("ion-app,ion-page,.ion-page,page-inner")||(t=>t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null)(t),m=(t,e,o,n)=>{const r=t.currentX,i=t.currentY,a=e.scrollLeft,s=e.scrollTop,l=o-t.timeStamp;if(n&&(t.startTimeStamp=o,t.startX=a,t.startY=s,t.velocityX=t.velocityY=0),t.timeStamp=o,t.currentX=t.scrollLeft=a,t.currentY=t.scrollTop=s,t.deltaX=a-t.startX,t.deltaY=s-t.startY,l>0&&l<100){const e=(s-i)/l;t.velocityX=(a-r)/l*.7+.3*t.velocityX,t.velocityY=.7*e+.3*t.velocityY}},f=class{constructor(t){Object(n.l)(this,t),this.translucent=!1}render(){const t=Object(n.d)(this),e=this.translucent;return Object(n.i)(n.a,{role:"contentinfo",class:{[t]:!0,["footer-".concat(t)]:!0,"footer-translucent":e,["footer-translucent-".concat(t)]:e}})}static get style(){return'ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-md:before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==");background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .footer-md:before,[dir=rtl] .footer-md:before{left:unset;right:unset;right:0;background-position:right 0 top 0}.footer-md[no-border]:before{display:none}'}},v=t=>{const e=document.querySelector("".concat(t,".ion-cloned-element"));if(null!==e)return e;const o=document.createElement(t);return o.classList.add("ion-cloned-element"),o.style.setProperty("display","none"),document.body.appendChild(o),o},x=t=>{if(!t)return;const e=t.querySelectorAll("ion-toolbar");return{el:t,toolbars:Array.from(e).map(t=>{const e=t.querySelector("ion-title");return{el:t,background:t.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:e,innerTitleEl:e?e.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(t.querySelectorAll("ion-buttons"))||[]}})||[[]]}},w=(t,e)=>{void 0===e?t.background.style.removeProperty("--opacity"):t.background.style.setProperty("--opacity",e.toString())},k=(t,e=!0)=>{Object(n.m)(()=>{e?t.el.classList.remove("header-collapse-condense-inactive"):t.el.classList.add("header-collapse-condense-inactive")})},A=class{constructor(t){Object(n.l)(this,t),this.collapsibleHeaderInitialized=!1,this.translucent=!1}componentDidLoad(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.checkCollapsibleHeader();case 2:case"end":return e.stop()}}),e)})))()}componentDidUpdate(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.checkCollapsibleHeader();case 2:case"end":return e.stop()}}),e)})))()}componentDidUnload(){this.destroyCollapsibleHeader()}checkCollapsibleHeader(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var o,r,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="condense"===t.collapse,(r=!(!o||"ios"!==Object(n.d)(t))&&o)||!t.collapsibleHeaderInitialized){e.next=5;break}t.destroyCollapsibleHeader(),e.next=9;break;case 5:if(!r||t.collapsibleHeaderInitialized){e.next=9;break}return i=t.el.closest("ion-app,ion-page,.ion-page,page-inner"),a=i?i.querySelector("ion-content"):null,e.next=9,t.setupCollapsibleHeader(a,i);case 9:case"end":return e.stop()}}),e)})))()}destroyCollapsibleHeader(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0)}setupCollapsibleHeader(t,e){var o=this;return _asyncToGenerator(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t||!e){r.next=9;break}return r.next=3,t.getScrollElement();case 3:o.scrollEl=r.sent,Object(n.g)(()=>{const t=e.querySelectorAll("ion-header"),r=Array.from(t).find(t=>"condense"!==t.collapse);if(!r||!o.scrollEl)return;const a=x(r),s=x(o.el);a&&s&&(k(a,!1),Object(n.g)(()=>{o.intersectionObserver=new IntersectionObserver(t=>{((t,e,o)=>{Object(n.m)(()=>{((t,e)=>{if(!t[0].isIntersecting)return;const o=100*(1-t[0].intersectionRatio)/75;w(e.toolbars[0],1===o?void 0:o)})(t,e);const n=t[0],r=n.intersectionRect,i=r.width*r.height,a=0===i&&0==n.rootBounds.width*n.rootBounds.height,s=Math.abs(r.left-n.boundingClientRect.left),l=Math.abs(r.right-n.boundingClientRect.right);a||i>0&&(s>=5||l>=5)||(n.isIntersecting?(k(e,!1),k(o)):(0===r.x&&0===r.y||0!==r.width&&0!==r.height)&&(k(e),k(o,!1),w(e.toolbars[0],1)))})})(t,a,s)},{threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-".concat(a.el.clientHeight,"px 0px 0px 0px")}),o.intersectionObserver.observe(s.toolbars[0].el)}),o.contentScrollCallback=()=>{((t,e)=>{Object(n.g)(()=>{const o=t.scrollTop,r=Object(i.c)(1,1+-o/500,1.1);Object(n.m)(()=>{((t=[],e=1,o=!1)=>{t.forEach(t=>{const n=t.ionTitleEl,r=t.innerTitleEl;n&&"large"===n.size&&(r.style.transformOrigin="left center",r.style.transition=o?"all 0.2s ease-in-out":"",r.style.transform="scale3d(".concat(e,", ").concat(e,", 1)"))})})(e.toolbars,r)})})})(o.scrollEl,s)},o.scrollEl.addEventListener("scroll",o.contentScrollCallback))}),Object(n.m)(()=>{v("ion-title"),v("ion-back-button")}),o.collapsibleHeaderInitialized=!0,r.next=10;break;case 9:console.error("ion-header requires a content to collapse, make sure there is an ion-content.");case 10:case"end":return r.stop()}}),r)})))()}render(){const t=Object(n.d)(this),e=this.collapse||"none";return Object(n.i)(n.a,{role:"banner",class:{[t]:!0,["header-".concat(t)]:!0,"header-translucent":this.translucent,["header-collapse-".concat(e)]:!0,["header-translucent-".concat(t)]:this.translucent}})}get el(){return Object(n.f)(this)}static get style(){return'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .header-md:after,[dir=rtl] .header-md:after{left:unset;right:unset;right:0;background-position:right 0 top -2px}.header-collapse-condense,.header-md[no-border]:after{display:none}'}},y=class{constructor(t){Object(n.l)(this,t),this.animationEnabled=!0,this.mode=Object(n.d)(this),this.animated=!0,this.ionNavWillLoad=Object(n.e)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(n.e)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(n.e)(this,"ionNavDidChange",3)}swipeHandlerChanged(){this.gesture&&this.gesture.setDisabled(void 0===this.swipeHandler)}connectedCallback(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.e(2).then(o.bind(null,"0yHn"));case 2:e.t0=t.el,e.t1=()=>!!t.swipeHandler&&t.swipeHandler.canStart()&&t.animationEnabled,e.t2=()=>t.swipeHandler&&t.swipeHandler.onStart(),e.t3=e=>t.ani&&t.ani.progressStep(e),e.t4=(e,o,n)=>{if(t.ani){t.animationEnabled=!1,t.ani.onFinish(()=>{t.animationEnabled=!0,t.swipeHandler&&t.swipeHandler.onEnd(e)},{oneTimeCallback:!0});let r=e?-.001:.001;e?r+=Object(c.b)(new c.a(0,0),new c.a(.32,.72),new c.a(0,1),new c.a(1,1),o):(t.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),r+=Object(c.b)(new c.a(0,0),new c.a(1,0),new c.a(.68,.28),new c.a(1,1),o)),t.ani.progressEnd(e?1:0,r,n)}},t.gesture=e.sent.createSwipeBackGesture(e.t0,e.t1,e.t2,e.t3,e.t4),t.swipeHandlerChanged();case 9:case"end":return e.stop()}}),e)})))()}componentWillLoad(){this.ionNavWillLoad.emit()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}commit(t,e,o){var n=this;return _asyncToGenerator(regeneratorRuntime.mark((function r(){var i,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.lock();case 2:return i=r.sent,a=!1,r.prev=4,r.next=7,n.transition(t,e,o);case 7:a=r.sent,r.next=13;break;case 10:r.prev=10,r.t0=r.catch(4),console.error(r.t0);case 13:return r.abrupt("return",(i(),a));case 14:case"end":return r.stop()}}),r,null,[[4,10]])})))()}setRouteId(t,e,o){var n=this;return _asyncToGenerator(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.setRoot(t,e,{duration:"root"===o?0:void 0,direction:"back"===o?"back":"forward"});case 2:return r.t0=r.sent,r.t1=n.activeEl,r.abrupt("return",{changed:r.t0,element:r.t1});case 5:case"end":return r.stop()}}),r)})))()}getRouteId(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.activeEl,e.abrupt("return",o?{id:o.tagName,element:o}:void 0);case 2:case"end":return e.stop()}}),e)})))()}setRoot(t,e,o){var n=this;return _asyncToGenerator(regeneratorRuntime.mark((function r(){var i,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.activeComponent!==t){r.next=2;break}return r.abrupt("return",!1);case 2:return i=n.activeEl,r.next=5,Object(s.a)(n.delegate,n.el,t,["ion-page","ion-page-invisible"],e);case 5:return a=r.sent,n.activeComponent=t,n.activeEl=a,r.next=10,n.commit(a,i,o);case 10:return r.next=12,Object(s.b)(n.delegate,i);case 12:return r.abrupt("return",!0);case 13:case"end":return r.stop()}}),r)})))()}transition(t,e,o={}){var n=this;return _asyncToGenerator(regeneratorRuntime.mark((function i(){var a,s,c,d;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(e!==t){i.next=2;break}return i.abrupt("return",!1);case 2:return n.ionNavWillChange.emit(),a=n.el,s=n.mode,c=n.animated&&r.b.getBoolean("animated",!0),d=n.animation||o.animationBuilder||r.b.get("navAnimation"),i.next=6,Object(l.e)(Object.assign({mode:s,animated:c,animationBuilder:d,enteringEl:t,leavingEl:e,baseEl:a,progressCallback:o.progressAnimation?t=>n.ani=t:void 0},o));case 6:return n.ionNavDidChange.emit(),i.abrupt("return",!0);case 8:case"end":return i.stop()}}),i)})))()}lock(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.waitPromise,t.waitPromise=new Promise(t=>n=t),e.t0=void 0!==o,!e.t0){e.next=6;break}return e.next=6,o;case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()}render(){return Object(n.i)("slot",null)}get el(){return Object(n.f)(this)}static get watchers(){return{swipeHandler:["swipeHandlerChanged"]}}static get style(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}},j=class{constructor(t){Object(n.l)(this,t),this.ionStyle=Object(n.e)(this,"ionStyle",7)}sizeChanged(){this.emitStyle()}connectedCallback(){this.emitStyle()}emitStyle(){const t=this.getSize();this.ionStyle.emit({["title-".concat(t)]:!0})}getSize(){return void 0!==this.size?this.size:"default"}getMode(){const t=Object(n.d)(this),e=this.el.closest("ion-toolbar");return e&&e.mode||t}render(){const t=this.getMode(),e=this.getSize();return Object(n.i)(n.a,{class:Object.assign({[t]:!0,["title-".concat(t)]:!0,["title-".concat(e)]:!0},Object(a.a)(this.color))},Object(n.i)("div",{class:"toolbar-title"},Object(n.i)("slot",null)))}get el(){return Object(n.f)(this)}static get watchers(){return{size:["sizeChanged"]}}static get style(){return":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.title-ios.title-default),:host(.title-ios.title-large){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios.title-default,:host-context([dir=rtl]).title-ios.title-large,:host-context([dir=rtl]):host(.title-ios.title-default),:host-context([dir=rtl]):host(.title-ios.title-large){left:unset;right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-default),:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host(.title-ios.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;width:100%;height:100%;font-size:13px;text-align:center}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-md.title-small){width:100%;height:100%;font-size:15px;font-weight:400}:host(.title-ios.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}"}},O=class{constructor(t){Object(n.l)(this,t),this.childrenStyles=new Map}componentWillLoad(){const t=Array.from(this.el.querySelectorAll("ion-buttons")),e=t.find(t=>"start"===t.slot);e&&e.classList.add("buttons-first-slot");const o=t.reverse(),n=o.find(t=>"end"===t.slot)||o.find(t=>"primary"===t.slot)||o.find(t=>"secondary"===t.slot);n&&n.classList.add("buttons-last-slot")}childrenStyle(t){t.stopPropagation();const e=t.target.tagName,o=t.detail,n={},r=this.childrenStyles.get(e)||{};let i=!1;Object.keys(o).forEach(t=>{const e="toolbar-".concat(t),a=o[t];a!==r[e]&&(i=!0),a&&(n[e]=!0)}),i&&(this.childrenStyles.set(e,n),this.el.forceUpdate())}render(){const t=Object(n.d)(this),e={};return this.childrenStyles.forEach(t=>{Object.assign(e,t)}),Object(n.i)(n.a,{class:Object.assign(Object.assign({"in-toolbar":Object(a.c)("ion-toolbar",this.el),[t]:!0},e),Object(a.a)(this.color))},Object(n.i)("div",{class:"toolbar-background"}),Object(n.i)("div",{class:"toolbar-container"},Object(n.i)("slot",{name:"start"}),Object(n.i)("slot",{name:"secondary"}),Object(n.i)("div",{class:"toolbar-content"},Object(n.i)("slot",null)),Object(n.i)("slot",{name:"primary"}),Object(n.i)("slot",{name:"end"})))}get el(){return Object(n.f)(this)}static get style(){return":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,#c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"}}}}]);
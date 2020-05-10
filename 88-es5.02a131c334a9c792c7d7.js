function _defineProperty(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,i,n){return i&&_defineProperties(e.prototype,i),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{RyPD:function(e,i,n){"use strict";n.r(i),n.d(i,"ion_split_pane",(function(){return a}));var t=n("dSyh");n("AfW+");var s={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},a=function(){function e(i){_classCallCheck(this,e),Object(t.l)(this,i),this.visible=!1,this.disabled=!1,this.when=s.lg,this.ionSplitPaneVisible=Object(t.d)(this,"ionSplitPaneVisible",7)}return _createClass(e,[{key:"visibleChanged",value:function(e){var i={visible:e,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(i)}},{key:"connectedCallback",value:function(){this.styleChildren(),this.updateState()}},{key:"disconnectedCallback",value:function(){this.rmL&&(this.rmL(),this.rmL=void 0)}},{key:"componentWillLoad",value:function(){void 0===this.contentId&&console.warn('[DEPRECATED][ion-split-pane] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-split-pane>\n    ...\n    <div main>...</div>\n  </ion-split-pane>\n\nAFTER:\n  <ion-split-pane contentId="main-content">\n    ...\n    <div id="main-content">...</div>\n  </ion-split-pane>\n')}},{key:"updateState",value:function(){var e=this;if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)this.visible=!1;else{var i=this.when;if("boolean"!=typeof i){var n=s[i]||i;if(0!==n.length){if(window.matchMedia){var t=function(i){e.visible=i.matches},a=window.matchMedia(n);a.addListener(t),this.rmL=function(){return a.removeListener(t)},this.visible=a.matches}}else this.visible=!1}else this.visible=i}}},{key:"isPane",value:function(e){return!!this.visible&&e.parentElement===this.el&&e.classList.contains("split-pane-side")}},{key:"styleChildren",value:function(){for(var e=this.contentId,i=this.el.children,n=this.el.childElementCount,t=!1,s=0;s<n;s++){var a=i[s],o=void 0!==e?a.id===e:a.hasAttribute("main");if(o){if(t)return void console.warn("split pane cannot have more than one main node");t=!0}l(a,o)}t||console.warn("split pane does not have a specified main node")}},{key:"render",value:function(){var e,i=Object(t.e)(this);return Object(t.i)(t.a,{class:(e={},_defineProperty(e,i,!0),_defineProperty(e,"split-pane-"+i,!0),_defineProperty(e,"split-pane-visible",this.visible),e)})}},{key:"el",get:function(){return Object(t.f)(this)}}],[{key:"watchers",get:function(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}}},{key:"style",get:function(){return"ion-split-pane{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-ms-flex-order:1;order:1}.split-pane-md{--border:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))))}.split-pane-md.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:var(--border);border-left:0}.split-pane-md.split-pane-visible>.split-pane-side[side=end]{min-width:270px;max-width:28%;border-right:0;border-left:var(--border)}"}}]),e}(),l=function(e,i){var n,t;i?(n="split-pane-main",t="split-pane-side"):(n="split-pane-side",t="split-pane-main");var s=e.classList;s.add(n),s.remove(t)}}}]);
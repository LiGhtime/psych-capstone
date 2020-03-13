function asyncGeneratorStep(t,e,n,i,a,o,s){try{var r=t[o](s),c=r.value}catch(d){return void n(d)}r.done?e(c):Promise.resolve(c).then(i,a)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function s(t){asyncGeneratorStep(o,i,a,s,r,"next",t)}function r(t){asyncGeneratorStep(o,i,a,s,r,"throw",t)}s(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{utt2:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_action_sheet",(function(){return h}));var i=n("c1op"),a=(n("AfW+"),n("aiEM"),n("+4pY")),o=n("pori"),s=n("Dl6n");const r=t=>{const e=Object(a.a)(),n=Object(a.a)(),i=Object(a.a)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,.4),i.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([n,i])},c=t=>{const e=Object(a.a)(),n=Object(a.a)(),i=Object(a.a)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.4,0),i.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([n,i])},d=t=>{const e=Object(a.a)(),n=Object(a.a)(),i=Object(a.a)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),i.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([n,i])},l=t=>{const e=Object(a.a)(),n=Object(a.a)(),i=Object(a.a)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.32,0),i.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([n,i])},h=class{constructor(t){Object(i.l)(this,t),this.presented=!1,this.mode=Object(i.d)(this),this.keyboardClose=!0,this.buttons=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,o.a)},this.dispatchCancelHandler=t=>{const e=t.detail.role;if(Object(o.j)(e)){const t=this.getButtons().find(t=>"cancel"===t.role);this.callButtonHandler(t)}},Object(o.e)(this.el),this.didPresent=Object(i.e)(this,"ionActionSheetDidPresent",7),this.willPresent=Object(i.e)(this,"ionActionSheetWillPresent",7),this.willDismiss=Object(i.e)(this,"ionActionSheetWillDismiss",7),this.didDismiss=Object(i.e)(this,"ionActionSheetDidDismiss",7)}present(){return Object(o.f)(this,"actionSheetEnter",r,d)}dismiss(t,e){return Object(o.g)(this,t,e,"actionSheetLeave",c,l)}onDidDismiss(){return Object(o.h)(this.el,"ionActionSheetDidDismiss")}onWillDismiss(){return Object(o.h)(this.el,"ionActionSheetWillDismiss")}buttonClick(t){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=t.role,!Object(o.j)(i)){n.next=5;break}n.t0=e.dismiss(void 0,i),n.next=13;break;case 5:return n.next=7,e.callButtonHandler(t);case 7:if(!n.sent){n.next=11;break}n.t1=e.dismiss(void 0,t.role),n.next=12;break;case 11:n.t1=Promise.resolve();case 12:n.t0=n.t1;case 13:return n.abrupt("return",n.t0);case 14:case"end":return n.stop()}}),n)})))()}callButtonHandler(t){return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!t,e.t0){e.next=7;break}return e.t1=!1,e.next=5,Object(o.p)(t.handler);case 5:e.t2=e.sent,e.t0=e.t1!==e.t2;case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}}),e)})))()}getButtons(){return this.buttons.map(t=>"string"==typeof t?{text:t}:t)}render(){const t=Object(i.d)(this),e=this.getButtons(),n=e.find(t=>"cancel"===t.role),a=e.filter(t=>"cancel"!==t.role);return Object(i.i)(i.a,{role:"dialog","aria-modal":"true",style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign(Object.assign({[t]:!0},Object(s.b)(this.cssClass)),{"action-sheet-translucent":this.translucent}),onIonActionSheetWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap},Object(i.i)("ion-backdrop",{tappable:this.backdropDismiss}),Object(i.i)("div",{class:"action-sheet-wrapper",role:"dialog"},Object(i.i)("div",{class:"action-sheet-container"},Object(i.i)("div",{class:"action-sheet-group"},void 0!==this.header&&Object(i.i)("div",{class:"action-sheet-title"},this.header,this.subHeader&&Object(i.i)("div",{class:"action-sheet-sub-title"},this.subHeader)),a.map(e=>Object(i.i)("button",{type:"button","ion-activatable":!0,class:p(e),onClick:()=>this.buttonClick(e)},Object(i.i)("span",{class:"action-sheet-button-inner"},e.icon&&Object(i.i)("ion-icon",{icon:e.icon,lazy:!1,class:"action-sheet-icon"}),e.text),"md"===t&&Object(i.i)("ion-ripple-effect",null)))),n&&Object(i.i)("div",{class:"action-sheet-group action-sheet-group-cancel"},Object(i.i)("button",{type:"button",class:p(n),onClick:()=>this.buttonClick(n)},Object(i.i)("span",{class:"action-sheet-button-inner"},n.icon&&Object(i.i)("ion-icon",{icon:n.icon,lazy:!1,class:"action-sheet-icon"}),n.text))))))}get el(){return Object(i.f)(this)}static get style(){return".sc-ion-action-sheet-md-h{--color:initial;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-md{display:block;width:100%;border:0;outline:none;font-family:inherit}.action-sheet-button.activated.sc-ion-action-sheet-md{background:var(--background-activated)}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-selected.sc-ion-action-sheet-md{background:var(--background-selected)}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color,var(--ion-background-color,#fff));--background-selected:var(--background,);--background-activated:var(--background)}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;height:60px;color:var(--color,rgba(var(--ion-text-color-rgb,0,0,0),.54));font-size:16px;text-align:start}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:0}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;background:transparent;color:var(--color,var(--ion-color-step-850,#262626));font-size:16px;text-align:start;contain:strict;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{padding-bottom:4px;margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color,rgba(var(--ion-text-color-rgb,0,0,0),.54));font-size:24px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:700}"}},p=t=>Object.assign({"action-sheet-button":!0,"ion-activatable":!0,["action-sheet-".concat(t.role)]:void 0!==t.role},Object(s.b)(t.cssClass))}}]);
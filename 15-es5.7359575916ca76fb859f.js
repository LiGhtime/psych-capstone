function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{lu3c:function(e,r,t){"use strict";t.r(r),t.d(r,"LoginPageModule",(function(){return j}));var i,a=t("ofXK"),n=t("3Pt+"),o=t("c7TG"),s=t("tyNb"),c=t("mrSG"),l=t("tk/3"),u=t("M2ZX"),d=t("fXoL"),m=((i=function(){function e(r,t){_classCallCheck(this,e),this.modalController=r,this.navParams=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.consent=this.navParams.data.consent}},{key:"closeModal",value:function(e){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.modalController.dismiss(e);case 2:case"end":return r.stop()}}),r,this)})))}}]),e}()).\u0275fac=function(e){return new(e||i)(d.Ub(o.I),d.Ub(o.J))},i.\u0275cmp=d.Ob({type:i,selectors:[["app-terms-conditions"]],decls:27,vars:2,consts:[[2,"display","flex","flex-direction","column","justify-content","center","height","100%"],[2,"text-align","center"],[2,"margin","5%"],["href","http://psych.colorado.edu/~jclab/app_consent",2,"color","dodgerblue","text-decoration","none"],["lines","none"],["slot","start",3,"checked","click"]],template:function(e,r){1&e&&(d.Xb(0,"ion-content"),d.Xb(1,"div",0),d.Xb(2,"h2",1),d.wc(3,"Terms and Conditions"),d.Wb(),d.Xb(4,"div"),d.Xb(5,"div",2),d.wc(6," This research has been approved by the Institutional Review Board at the University of Colorado. "),d.Wb(),d.Xb(7,"div",2),d.wc(8," To participate, all participants must read and provide consent. "),d.Wb(),d.Xb(9,"div",2),d.wc(10," Please read and download the consent form "),d.Xb(11,"a",3),d.Xb(12,"b"),d.wc(13,"here"),d.Wb(),d.Wb(),d.wc(14,". "),d.Wb(),d.Xb(15,"div",2),d.wc(16," By clicking \u201cI consent,\u201d you indicate that your are at least 18 years of age and that you consent to participate in this research. "),d.Wb(),d.Wb(),d.Vb(17,"br"),d.Xb(18,"div"),d.Xb(19,"ion-item",4),d.Xb(20,"ion-label"),d.wc(21,"I consent"),d.Wb(),d.Xb(22,"ion-checkbox",5),d.fc("click",(function(){return r.closeModal(!0)})),d.Wb(),d.Wb(),d.Xb(23,"ion-item",4),d.Xb(24,"ion-label"),d.wc(25,"I do not consent"),d.Wb(),d.Xb(26,"ion-checkbox",5),d.fc("click",(function(){return r.closeModal(!1)})),d.Wb(),d.Wb(),d.Wb(),d.Wb(),d.Wb()),2&e&&(d.Kb(22),d.kc("checked",1==r.consent),d.Kb(4),d.kc("checked",0==r.consent))},directives:[o.j,o.o,o.p,o.h,o.b],styles:[""]}),i);function g(e,r){if(1&e){var t=d.Yb();d.Xb(0,"div",4),d.Xb(1,"ion-button",5),d.fc("click",(function(){return d.sc(t),d.hc().Login()})),d.wc(2,"Login"),d.Wb(),d.Xb(3,"ion-button",6),d.fc("click",(function(){return d.sc(t),d.hc().Register()})),d.wc(4,"Register"),d.Wb(),d.Wb()}}function b(e,r){1&e&&(d.Xb(0,"span"),d.wc(1,"Login"),d.Wb())}function p(e,r){1&e&&d.Vb(0,"ion-spinner",17)}function h(e,r){if(1&e){var t=d.Yb();d.Xb(0,"div",7),d.Xb(1,"form",8),d.Xb(2,"ion-item",9),d.Vb(3,"ion-input",10),d.Wb(),d.Vb(4,"br"),d.Xb(5,"ion-item",9),d.Vb(6,"ion-input",11),d.Wb(),d.Wb(),d.Vb(7,"br"),d.Vb(8,"br"),d.Vb(9,"br"),d.Xb(10,"div",12),d.Xb(11,"ion-button",13),d.fc("click",(function(){return d.sc(t),d.hc().BackHome()})),d.wc(12,"Back"),d.Wb(),d.Xb(13,"ion-button",14),d.fc("click",(function(){return d.sc(t),d.hc().SubmitLogin()})),d.vc(14,b,2,0,"span",15),d.vc(15,p,1,0,"ion-spinner",16),d.Wb(),d.Wb(),d.Wb()}if(2&e){var i=d.hc();d.Kb(1),d.kc("formGroup",i.loginForm),d.Kb(10),d.kc("disabled",i.awaitLoginHTTP),d.Kb(2),d.kc("disabled",i.awaitLoginHTTP),d.Kb(1),d.kc("ngIf",!i.awaitLoginHTTP),d.Kb(1),d.kc("ngIf",i.awaitLoginHTTP)}}function f(e,r){1&e&&(d.Xb(0,"div",29),d.wc(1,"Must be valid email"),d.Wb())}function v(e,r){1&e&&(d.Xb(0,"div",29),d.wc(1,"Must contain 1 uppercase letter, 1 lowercase letter, 1 number, no spaces, and be 7-16 characters"),d.Wb())}function w(e,r){1&e&&(d.Xb(0,"div",29),d.wc(1,"Must match previous entry"),d.Wb())}function k(e,r){1&e&&(d.Xb(0,"div",29),d.wc(1,"You must be 18 years or older to participate"),d.Wb())}function y(e,r){if(1&e&&(d.Xb(0,"ion-select-option",30),d.wc(1),d.Wb()),2&e){var t=r.$implicit;d.lc("value",t),d.Kb(1),d.xc(t)}}function F(e,r){if(1&e&&(d.Xb(0,"ion-select-option",30),d.wc(1),d.Wb()),2&e){var t=r.$implicit;d.lc("value",t),d.Kb(1),d.xc(t)}}function C(e,r){if(1&e&&(d.Xb(0,"ion-select-option",30),d.wc(1),d.Wb()),2&e){var t=r.$implicit;d.lc("value",t),d.Kb(1),d.xc(t)}}function T(e,r){1&e&&(d.Xb(0,"span"),d.wc(1,"Register"),d.Wb())}function P(e,r){1&e&&d.Vb(0,"ion-spinner",17)}var I=function(e,r){return{valid:e,invalid:r}};function S(e,r){if(1&e){var t=d.Yb();d.Xb(0,"div",18),d.Xb(1,"form",19),d.Xb(2,"div"),d.Xb(3,"ion-item",20),d.Vb(4,"ion-input",10),d.Wb(),d.vc(5,f,2,0,"div",21),d.Xb(6,"ion-item",20),d.Vb(7,"ion-input",11),d.Wb(),d.vc(8,v,2,0,"div",21),d.Xb(9,"ion-item",20),d.Vb(10,"ion-input",22),d.Wb(),d.vc(11,w,2,0,"div",21),d.Wb(),d.Xb(12,"div"),d.Xb(13,"ion-item",20),d.Vb(14,"ion-input",23),d.Wb(),d.vc(15,k,2,0,"div",21),d.Xb(16,"ion-item",20),d.Xb(17,"ion-label"),d.wc(18,"Ethnicity"),d.Wb(),d.Xb(19,"ion-select",24),d.vc(20,y,2,2,"ion-select-option",25),d.Wb(),d.Wb(),d.Xb(21,"ion-item",20),d.Xb(22,"ion-label"),d.wc(23,"Nationality"),d.Wb(),d.Xb(24,"ion-select",26),d.vc(25,F,2,2,"ion-select-option",25),d.Wb(),d.Wb(),d.Xb(26,"ion-item",20),d.Xb(27,"ion-label"),d.wc(28,"Gender"),d.Wb(),d.Xb(29,"ion-select",27),d.vc(30,C,2,2,"ion-select-option",25),d.Wb(),d.Wb(),d.Wb(),d.Xb(31,"ion-item",28),d.fc("click",(function(){return d.sc(t),d.hc().openTermsAndConditions()})),d.Xb(32,"ion-label"),d.wc(33,"Terms and conditions"),d.Wb(),d.Wb(),d.Xb(34,"div",12),d.Xb(35,"ion-button",13),d.fc("click",(function(){return d.sc(t),d.hc().BackHome()})),d.wc(36,"Back"),d.Wb(),d.Xb(37,"ion-button",14),d.fc("click",(function(){return d.sc(t),d.hc().SubmitRegister()})),d.vc(38,T,2,0,"span",15),d.vc(39,P,1,0,"ion-spinner",16),d.Wb(),d.Wb(),d.Wb(),d.Wb()}if(2&e){var i=d.hc();d.Kb(1),d.kc("formGroup",i.registerForm),d.Kb(2),d.kc("ngClass",d.oc(20,I,i.fieldNotEmpty(i.registerForm.value.username)&&!i.registerForm.controls.username.errors&&i.validEmail(i.registerForm.value.username),i.fieldNotEmpty(i.registerForm.value.username)&&(i.registerForm.controls.username.errors||!i.validEmail(i.registerForm.value.username)))),d.Kb(2),d.kc("ngIf",i.fieldNotEmpty(i.registerForm.value.username)&&(i.registerForm.controls.username.errors||!i.validEmail(i.registerForm.value.username))),d.Kb(1),d.kc("ngClass",d.oc(23,I,i.fieldNotEmpty(i.registerForm.value.password)&&!i.registerForm.controls.password.errors&&i.validPassword(i.registerForm.value.password),i.fieldNotEmpty(i.registerForm.value.password)&&(i.registerForm.controls.password.errors||!i.validPassword(i.registerForm.value.password)))),d.Kb(2),d.kc("ngIf",i.fieldNotEmpty(i.registerForm.value.password)&&(i.registerForm.controls.password.errors||!i.validPassword(i.registerForm.value.password))),d.Kb(1),d.kc("ngClass",d.oc(26,I,i.fieldNotEmpty(i.registerForm.value.password_check)&&!i.registerForm.controls.password_check.errors&&i.registerForm.value.password_check==i.registerForm.value.password,(i.fieldNotEmpty(i.registerForm.value.password)||i.fieldNotEmpty(i.registerForm.value.password_check))&&(i.registerForm.controls.password_check.errors||i.registerForm.value.password_check!=i.registerForm.value.password))),d.Kb(2),d.kc("ngIf",(i.fieldNotEmpty(i.registerForm.value.password)||i.fieldNotEmpty(i.registerForm.value.password_check))&&(i.registerForm.controls.password_check.errors||i.registerForm.value.password_check!=i.registerForm.value.password)),d.Kb(2),d.kc("ngClass",d.oc(29,I,i.fieldNotEmpty(i.registerForm.value.age)&&!i.registerForm.controls.age.errors,i.fieldNotEmpty(i.registerForm.value.age)&&i.registerForm.controls.age.errors)),d.Kb(2),d.kc("ngIf",i.fieldNotEmpty(i.registerForm.value.age)&&i.registerForm.controls.age.errors),d.Kb(1),d.kc("ngClass",d.oc(32,I,i.fieldNotEmpty(i.registerForm.value.race)&&!i.registerForm.controls.race.errors,i.fieldNotEmpty(i.registerForm.value.race)&&i.registerForm.controls.race.errors)),d.Kb(4),d.kc("ngForOf",i.raceList),d.Kb(1),d.kc("ngClass",d.oc(35,I,i.fieldNotEmpty(i.registerForm.value.nationality)&&!i.registerForm.controls.nationality.errors,i.fieldNotEmpty(i.registerForm.value.nationality)&&i.registerForm.controls.nationality.errors)),d.Kb(4),d.kc("ngForOf",i.nationList),d.Kb(1),d.kc("ngClass",d.oc(38,I,i.fieldNotEmpty(i.registerForm.value.gender)&&!i.registerForm.controls.gender.errors,i.fieldNotEmpty(i.registerForm.value.gender)&&i.registerForm.controls.gender.errors)),d.Kb(4),d.kc("ngForOf",i.genderList),d.Kb(1),d.kc("ngClass",d.oc(41,I,1==i.registerForm.value.agree,0==i.registerForm.value.agree&&i.termsOpened)),d.Kb(4),d.kc("disabled",i.awaitLoginHTTP),d.Kb(2),d.kc("disabled",i.awaitLoginHTTP),d.Kb(1),d.kc("ngIf",!i.awaitRegisterHTTP),d.Kb(1),d.kc("ngIf",i.awaitRegisterHTTP)}}var E,W,X,N=function(e){return e[e.HOME=0]="HOME",e[e.LOGIN=1]="LOGIN",e[e.REGISTER=2]="REGISTER",e}({}),A=[{path:"",component:(E=function(){function e(r,t,i,a,o,s){_classCallCheck(this,e),this.router=r,this.formBuilder=t,this.http=i,this.nativeStorage=a,this.toastController=o,this.modalController=s,this.debugMode=!0,this.Popup=N,this.login="assets/icon/log-in.svg",this.help="help-circle-outline",this.base_url="https://crossfacerecognition.herokuapp.com/",this.login_url=this.base_url+"login/",this.register_url=this.base_url+"register/",this.nationList=["United States of America (USA)","Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic (CAR)","Chad","Chile","China","Colombia","Comoros","Democratic Republic of the Congo","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czechia","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar (Burma)","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates (UAE)","United Kingdom (UK)","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"],this.genderList=["Male","Female","Other"],this.raceList=["Caucasian","Black","Hispanic","East Asian","South Asian","Middle Eastern","Pacific Islander","American Indian/Alaska Native","Other"],this.loginForm=t.group({username:[null,n.j.compose([n.j.required])],password:[null,n.j.compose([n.j.required,n.j.minLength(7),n.j.maxLength(16)])]},{validator:e.loginFormCheck}),this.registerForm=t.group({username:[null,n.j.compose([n.j.required])],password:[null,n.j.compose([n.j.required,n.j.minLength(7),n.j.maxLength(16)])],password_check:[null,n.j.compose([n.j.required,n.j.minLength(7),n.j.maxLength(16)])],race:[null,n.j.compose([n.j.required])],nationality:[null,n.j.compose([n.j.required])],gender:[null,n.j.compose([n.j.required])],age:[null,n.j.compose([n.j.required,n.j.min(18),n.j.max(100)])],agree:[null,n.j.compose([n.j.required])]},{validator:e.registerFormCheck})}return _createClass(e,[{key:"ngOnInit",value:function(){this.router.navigate(["/dashboard"]),this.popup=N.HOME,this.clickedSubmit=!1}},{key:"Login",value:function(){this.popup=N.LOGIN,this.resetForms()}},{key:"Register",value:function(){this.popup=N.REGISTER,this.resetForms()}},{key:"BackHome",value:function(){this.popup=N.HOME,this.resetForms()}},{key:"SubmitLogin",value:function(){var e=this;if(!this.awaitLoginHTTP)if(this.clickedSubmit=!0,this.loginForm.invalid)this.dangerToast("Invalid email or password"),this.resetForms();else{var r={email:this.loginForm.value.username,password:this.loginForm.value.password},t={headers:new l.c({"Content-Type":"application/json; charset=utf-8"}),responseType:"text"};this.awaitLoginHTTP=!0,this.http.post(this.login_url,r,t).subscribe((function(r){localStorage.setItem("token",r),localStorage.setItem("username",e.loginForm.value.username),e.awaitLoginHTTP=!1,e.BackHome(),e.router.navigate(["/dashboard"])}),(function(r){e.dangerToast("Account not found"==r.error?"Invalid email or password":"Something went wrong. Please try again later"),e.awaitLoginHTTP=!1,e.resetForms()}))}}},{key:"SubmitRegister",value:function(){var e=this;if(!this.awaitRegisterHTTP)if(this.clickedSubmit=!0,this.registerForm.invalid)this.dangerToast("Invalid fields");else{var r={email:this.registerForm.value.username,password:this.registerForm.value.password,race:this.registerForm.value.race,nationality:this.registerForm.value.nationality,gender:this.registerForm.value.gender,age:this.registerForm.value.age,agree:this.registerForm.value.agree},t={headers:new l.c({"Content-Type":"application/json; charset=utf-8"})};this.awaitRegisterHTTP=!0,this.http.put(this.register_url,r,t).subscribe((function(r){e.awaitRegisterHTTP=!1,e.Login(),e.successToast("Account registration successful!")}),(function(r){e.awaitRegisterHTTP=!1,e.dangerToast("Email already used"==r.error?"Account already exists":"Something went wrong. Please try again later"),e.resetForms()}))}}},{key:"validEmail",value:function(e){return/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(e)}},{key:"validPassword",value:function(e){return/[a-z]/.test(e)&&/[A-Z]/.test(e)&&/[0-9]/.test(e)&&e.indexOf(" ")<0&&"Passw0rd"!=e&&"Password123"!=e}},{key:"resetForms",value:function(){this.loginForm.reset(),this.registerForm.reset(),this.clickedSubmit=!1,this.termsOpened=!1}},{key:"dangerToast",value:function(e){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.toastController.create({message:e,color:"danger",duration:2e3});case 2:r.sent.present();case 3:case"end":return r.stop()}}),r,this)})))}},{key:"successToast",value:function(e){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.toastController.create({message:e,color:"success",duration:2e3});case 2:r.sent.present();case 3:case"end":return r.stop()}}),r,this)})))}},{key:"fieldNotEmpty",value:function(e){return null!=e&&""!=e||this.clickedSubmit}},{key:"openTermsAndConditions",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var r,t,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null,this.termsOpened&&(r=!!this.registerForm.value.agree),e.next=4,this.modalController.create({component:m,componentProps:{consent:r}});case 4:return t=e.sent,e.next=7,t.present();case 7:return e.next=9,t.onWillDismiss();case 9:i=e.sent,a=i.data,this.termsOpened=!0,1==a?this.registerForm.get("agree").setValue(!0):this.registerForm.get("agree").setValue(!1);case 12:case"end":return e.stop()}}),e,this)})))}}],[{key:"loginFormCheck",value:function(e){var r=e.get("username"),t=e.get("password");return/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(r.value)?/[a-z]/.test(t.value)&&/[A-Z]/.test(t.value)&&/[0-9]/.test(t.value)&&t.value.indexOf(" ")<0&&"Passw0rd"!=t.value&&"Password123"!=t.value?null:{PASSWORD_INVALID:!0}:{INVALID_EMAIL:!0}}},{key:"registerFormCheck",value:function(e){var r=e.get("username"),t=e.get("password"),i=e.get("password_check"),a=e.value.agree;return""==e.value.race||""==e.value.nationality||""==e.value.gender?{EMPTY_RESPONSES:!0}:/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(r.value)?t.value!=i.value?{PASSWORD_MISMATCH:!0}:/[a-z]/.test(t.value)&&/[A-Z]/.test(t.value)&&/[0-9]/.test(t.value)&&t.value.indexOf(" ")<0&&"Passw0rd"!=t.value&&"Password123"!=t.value?/[a-z]/.test(i.value)&&/[A-Z]/.test(i.value)&&/[0-9]/.test(i.value)&&i.value.indexOf(" ")<0&&"Passw0rd"!=i.value&&"Password123"!=i.value?a?null:{AGREEMENT_FALSE:!0}:{PASSWORD_CONFIRM_INVALID:!0}:{PASSWORD_INVALID:!0}:{INVALID_EMAIL:!0}}}]),e}(),E.\u0275fac=function(e){return new(e||E)(d.Ub(s.g),d.Ub(n.a),d.Ub(l.a),d.Ub(u.a),d.Ub(o.P),d.Ub(o.I))},E.\u0275cmp=d.Ob({type:E,selectors:[["app-login"]],decls:4,vars:3,consts:[["id","login-view"],["id","row-with-default-card",4,"ngIf"],["style","height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: white",4,"ngIf"],["style","height: 100%; background-color: white",4,"ngIf"],["id","row-with-default-card"],[2,"height","6%","width","90%",3,"click"],["fill","clear",2,"height","6%","width","90%","color","dodgerblue",3,"click"],[2,"height","100%","display","flex","flex-direction","column","justify-content","center","align-items","center","background-color","white"],[2,"width","100%",3,"formGroup"],["lines","none"],["formControlName","username","placeholder","Email","type","email"],["formControlName","password","placeholder","Password","type","password"],[2,"display","flex","justify-content","space-evenly","width","100%"],["fill","clear",2,"width","45%","height","2rem","color","dodgerblue",3,"disabled","click"],[2,"width","45%","height","2rem",3,"disabled","click"],[4,"ngIf"],["slot","end","name","dots","style","size: 50%",4,"ngIf"],["slot","end","name","dots",2,"size","50%"],[2,"height","100%","background-color","white"],[2,"height","100%","width","100%","display","flex","flex-direction","column","justify-content","space-evenly",3,"formGroup"],["lines","none",3,"ngClass"],["style","color: red; margin-left: 3%; font-size: 4vw",4,"ngIf"],["formControlName","password_check","placeholder","Confirm Password","type","password"],["formControlName","age","type","number","placeholder","Age"],["placeholder","Ethnicity","formControlName","race"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Nationality","formControlName","nationality"],["placeholder","Gender","formControlName","gender"],["button","","lines","none",2,"display","flex","justify-content","space-evenly",3,"ngClass","click"],[2,"color","red","margin-left","3%","font-size","4vw"],[3,"value"]],template:function(e,r){1&e&&(d.Xb(0,"ion-content",0),d.vc(1,g,5,0,"div",1),d.vc(2,h,16,5,"div",2),d.vc(3,S,40,44,"div",3),d.Wb()),2&e&&(d.Kb(1),d.kc("ngIf",r.popup==r.Popup.HOME),d.Kb(1),d.kc("ngIf",r.popup==r.Popup.LOGIN),d.Kb(1),d.kc("ngIf",r.popup==r.Popup.REGISTER))},directives:[o.j,a.j,o.e,n.k,n.g,n.c,o.o,o.n,o.O,n.f,n.b,o.C,a.h,o.K,o.p,o.y,o.N,a.i,o.z],styles:["#login-view[_ngcontent-%COMP%]{--height:100vh;--width:auto;--background:#fff url(splash.4bb6b7ffaea3b9b44fef.png) no-repeat center center/contain;background-repeat:no-repeat}#row-with-default-card[_ngcontent-%COMP%]{height:96%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center}ion-item[_ngcontent-%COMP%]{margin:5px;border-radius:5px}.invalid[_ngcontent-%COMP%]{--background:#ffd1d1}.valid[_ngcontent-%COMP%]{--background:#cffdd9}"]}),E)}],L=((X=function e(){_classCallCheck(this,e)}).\u0275mod=d.Sb({type:X}),X.\u0275inj=d.Rb({factory:function(e){return new(e||X)},imports:[[s.i.forChild(A)],s.i]}),X),j=((W=function e(){_classCallCheck(this,e)}).\u0275mod=d.Sb({type:W}),W.\u0275inj=d.Rb({factory:function(e){return new(e||W)},imports:[[a.b,n.d,o.G,n.d,n.i,L]]}),W)}}]);
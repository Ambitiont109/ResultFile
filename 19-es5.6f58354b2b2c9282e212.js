!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Yj9t:function(t,r,a){"use strict";a.r(r),a.d(r,"AuthModule",(function(){return _}));var i,l=a("ofXK"),o=a("tyNb"),s=a("ccyI"),c=a("fXoL"),d=a("aceb"),u=a("McNs"),p=((i=function(){function t(n,r){e(this,t),this.auth=n,this.location=r,this.alive=!0,this.authenticated=!1,this.token=""}return n(t,[{key:"back",value:function(){return this.location.back(),!1}},{key:"ngOnDestroy",value:function(){this.alive=!1}}]),t}()).\u0275fac=function(e){return new(e||i)(c["\u0275\u0275directiveInject"](s.a),c["\u0275\u0275directiveInject"](l.k))},i.\u0275cmp=c["\u0275\u0275defineComponent"]({type:i,selectors:[["ngx-auth"]],decls:10,vars:0,consts:[[1,"navigation"],["href","#","aria-label","Back",1,"link",3,"click"],["icon","arrow-back"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"nb-layout"),c["\u0275\u0275elementStart"](1,"nb-layout-column"),c["\u0275\u0275elementStart"](2,"nb-card"),c["\u0275\u0275elementStart"](3,"nb-card-header"),c["\u0275\u0275elementStart"](4,"nav",0),c["\u0275\u0275elementStart"](5,"a",1),c["\u0275\u0275listener"]("click",(function(){return t.back()})),c["\u0275\u0275element"](6,"nb-icon",2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"nb-card-body"),c["\u0275\u0275elementStart"](8,"nb-auth-block"),c["\u0275\u0275element"](9,"router-outlet"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]())},directives:[d.O,d.N,d.u,d.x,d.I,d.t,u.a,o.h],styles:["[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{margin:0;height:calc(100vh - 2 * 2.5rem)}[_nghost-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:inline-block;text-decoration:none}[_nghost-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:2rem;vertical-align:middle}[_nghost-%COMP%]   .links[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:2.5rem}[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:flex;width:100%}[_nghost-%COMP%]   nb-auth-block[_ngcontent-%COMP%]{margin:auto}@media (max-width:767.98px){[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{border-radius:0;height:100vh}}[_nghost-%COMP%]     nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width:767.98px){[_nghost-%COMP%]     nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}"]}),i),m=a("vqVJ"),g=a("3Pt+"),f=a("sYmb");function h(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"li",19),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate"](n)}}function v(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"nb-alert",15),c["\u0275\u0275elementStart"](1,"p",16),c["\u0275\u0275elementStart"](2,"b"),c["\u0275\u0275text"](3),c["\u0275\u0275pipe"](4,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"ul",17),c["\u0275\u0275template"](6,h,2,1,"li",18),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"]("",c["\u0275\u0275pipeBind1"](4,2,"Oh snap"),"!"),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngForOf",n.errors)}}function b(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"li",19),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate"](n)}}function y(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"nb-alert",20),c["\u0275\u0275elementStart"](1,"p",16),c["\u0275\u0275elementStart"](2,"b"),c["\u0275\u0275text"](3),c["\u0275\u0275pipe"](4,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"ul",17),c["\u0275\u0275template"](6,b,2,1,"li",18),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"]("",c["\u0275\u0275pipeBind1"](4,2,"Hooray"),"!"),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngForOf",n.messages)}}function M(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"p",22),c["\u0275\u0275text"](1),c["\u0275\u0275pipe"](2,"translate"),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",c["\u0275\u0275pipeBind1"](2,1,"Username is required"),"! "))}function x(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,M,3,3,"p",21),c["\u0275\u0275elementContainerEnd"]()),2&e){c["\u0275\u0275nextContext"]();var n=c["\u0275\u0275reference"](15);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==n.errors?null:n.errors.required)}}function C(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"p",22),c["\u0275\u0275text"](1),c["\u0275\u0275pipe"](2,"translate"),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",c["\u0275\u0275pipeBind1"](2,1,"required"),"! "))}function S(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,C,3,3,"p",21),c["\u0275\u0275elementContainerEnd"]()),2&e){c["\u0275\u0275nextContext"]();var n=c["\u0275\u0275reference"](23);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==n.errors?null:n.errors.required)}}var I,E,w,O=[{path:"",component:p,children:[{path:"login",component:(I=function(){function t(n,r,a){e(this,t),this.service=n,this.router=r,this.userService=a,this.redirectDelay=0,this.showMessages={},this.strategy="",this.errors=[],this.messages=[],this.user={},this.submitted=!1,this.rememberMe=!1}return n(t,[{key:"ngOnInit",value:function(){}},{key:"login",value:function(){var e=this;this.errors=[],this.messages=[];var t=this.user;this.submitted=!0,this.service.login(t.email,t.password).subscribe((function(t){console.log(t),localStorage.setItem("access_token",t.token),e.userService.current_user=void 0,e.userService.getCurrentUser().toPromise().then((function(t){e.router.navigate(["/default"]),e.submitted=!1})),e.submitted=!0}),(function(t){console.log(t),console.log("===================="),e.submitted=!1,e.errors=["login failed"],e.showMessages.error=!0}))}}]),t}(),I.\u0275fac=function(e){return new(e||I)(c["\u0275\u0275directiveInject"](s.a),c["\u0275\u0275directiveInject"](o.c),c["\u0275\u0275directiveInject"](m.a))},I.\u0275cmp=c["\u0275\u0275defineComponent"]({type:I,selectors:[["ngx-login"]],decls:29,vars:35,consts:[["id","title",1,"title"],[1,"sub-title"],["outline","danger","role","alert",4,"ngIf"],["outline","success","role","alert",4,"ngIf"],["aria-labelledby","title",3,"ngSubmit"],["form","ngForm"],[1,"form-control-group"],["for","input-email",1,"label"],["nbInput","","fullWidth","","name","email","id","input-email","autofocus","",3,"ngModel","placeholder","status","required","ngModelChange"],["email","ngModel"],[4,"ngIf"],["for","input-password",1,"label"],["nbInput","","fullWidth","","name","password","type","password","id","input-password","required","",3,"ngModel","placeholder","status","ngModelChange"],["password","ngModel"],["nbButton","","fullWidth","","status","success",3,"disabled"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["outline","success","role","alert"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"h1",0),c["\u0275\u0275text"](1),c["\u0275\u0275pipe"](2,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"p",1),c["\u0275\u0275text"](4),c["\u0275\u0275pipe"](5,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](6,v,7,4,"nb-alert",2),c["\u0275\u0275template"](7,y,7,4,"nb-alert",3),c["\u0275\u0275elementStart"](8,"form",4,5),c["\u0275\u0275listener"]("ngSubmit",(function(){return t.login()})),c["\u0275\u0275elementStart"](10,"div",6),c["\u0275\u0275elementStart"](11,"label",7),c["\u0275\u0275text"](12),c["\u0275\u0275pipe"](13,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](14,"input",8,9),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.user.email=e})),c["\u0275\u0275pipe"](16,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](17,x,2,1,"ng-container",10),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](18,"div",6),c["\u0275\u0275elementStart"](19,"label",11),c["\u0275\u0275text"](20),c["\u0275\u0275pipe"](21,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](22,"input",12,13),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.user.password=e})),c["\u0275\u0275pipe"](24,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](25,S,2,1,"ng-container",10),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](26,"button",14),c["\u0275\u0275text"](27),c["\u0275\u0275pipe"](28,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275reference"](9),r=c["\u0275\u0275reference"](15),a=c["\u0275\u0275reference"](23);c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](2,21,"Login")),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"]("",c["\u0275\u0275pipeBind1"](5,23,"Hello! Log in with your email"),"."),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngIf",t.showMessages.error&&(null==t.errors?null:t.errors.length)&&!t.submitted),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",t.showMessages.success&&(null==t.messages?null:t.messages.length)&&!t.submitted),c["\u0275\u0275advance"](5),c["\u0275\u0275textInterpolate1"]("",c["\u0275\u0275pipeBind1"](13,25,"Username"),":"),c["\u0275\u0275advance"](2),c["\u0275\u0275propertyInterpolate"]("placeholder",c["\u0275\u0275pipeBind1"](16,27,"Username")),c["\u0275\u0275property"]("ngModel",t.user.email)("status",r.dirty?r.invalid?"danger":"success":"")("required",!0),c["\u0275\u0275attribute"]("aria-invalid",!(!r.invalid||!r.touched)||null),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngIf",r.invalid&&r.touched),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"]("",c["\u0275\u0275pipeBind1"](21,29,"Password"),":"),c["\u0275\u0275advance"](2),c["\u0275\u0275propertyInterpolate"]("placeholder",c["\u0275\u0275pipeBind1"](24,31,"Password")),c["\u0275\u0275property"]("ngModel",t.user.password)("status",a.dirty?a.invalid?"danger":"success":""),c["\u0275\u0275attribute"]("aria-invalid",!(!a.invalid||!a.touched)||null),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngIf",a.invalid&&a.touched),c["\u0275\u0275advance"](1),c["\u0275\u0275classProp"]("btn-pulse",t.submitted),c["\u0275\u0275property"]("disabled",t.submitted||!n.valid),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",c["\u0275\u0275pipeBind1"](28,33,"Log In")," ")}},directives:[l.o,g.D,g.s,g.t,d.L,g.c,g.r,g.u,g.z,d.q,l.n],pipes:[f.c],styles:[".error-message[_ngcontent-%COMP%]{color:red}"]}),I)}]}],P=((E=function t(){e(this,t)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:E}),E.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||E)},imports:[[o.g.forChild(O)],o.g]}),E),k=a("p0MU"),_=((w=function t(){e(this,t)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:w}),w.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||w)},imports:[[l.c,P,g.l,d.y,d.r,d.M,u.b,d.T,k.a,d.K]]}),w)}}])}();
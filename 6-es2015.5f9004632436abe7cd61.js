(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Yj9t:function(n,t,e){"use strict";e.r(t);var s=e("ofXK"),o=e("tyNb"),i=e("ccyI"),r=e("fXoL"),l=e("aceb"),c=e("McNs");let a=(()=>{class n{constructor(n,t){this.auth=n,this.location=t,this.alive=!0,this.authenticated=!1,this.token=""}back(){return this.location.back(),!1}ngOnDestroy(){this.alive=!1}}return n.\u0275fac=function(t){return new(t||n)(r.Rb(i.a),r.Rb(s.i))},n.\u0275cmp=r.Lb({type:n,selectors:[["ngx-auth"]],decls:10,vars:0,consts:[[1,"navigation"],["href","#","aria-label","Back",1,"link",3,"click"],["icon","arrow-back"]],template:function(n,t){1&n&&(r.Xb(0,"nb-layout"),r.Xb(1,"nb-layout-column"),r.Xb(2,"nb-card"),r.Xb(3,"nb-card-header"),r.Xb(4,"nav",0),r.Xb(5,"a",1),r.fc("click",(function(){return t.back()})),r.Sb(6,"nb-icon",2),r.Wb(),r.Wb(),r.Wb(),r.Xb(7,"nb-card-body"),r.Xb(8,"nb-auth-block"),r.Sb(9,"router-outlet"),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb())},directives:[l.I,l.H,l.o,l.r,l.C,l.n,c.a,o.h],styles:["[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{margin:0;height:calc(100vh - 5rem)}[_nghost-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:inline-block;text-decoration:none}[_nghost-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:2rem;vertical-align:middle}[_nghost-%COMP%]   .links[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:2.5rem}[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:flex;width:100%}[_nghost-%COMP%]   nb-auth-block[_ngcontent-%COMP%]{margin:auto}@media (max-width:767.98px){[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{border-radius:0;height:100vh}}[_nghost-%COMP%]     nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width:767.98px){[_nghost-%COMP%]     nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}"]}),n})();var b=e("3Pt+");function u(n,t){if(1&n&&(r.Xb(0,"li",19),r.Dc(1),r.Wb()),2&n){const n=t.$implicit;r.Eb(1),r.Ec(n)}}function d(n,t){if(1&n&&(r.Xb(0,"nb-alert",15),r.Xb(1,"p",16),r.Xb(2,"b"),r.Dc(3,"Oh snap!"),r.Wb(),r.Wb(),r.Xb(4,"ul",17),r.Bc(5,u,2,1,"li",18),r.Wb(),r.Wb()),2&n){const n=r.hc();r.Eb(5),r.nc("ngForOf",n.errors)}}function g(n,t){if(1&n&&(r.Xb(0,"li",19),r.Dc(1),r.Wb()),2&n){const n=t.$implicit;r.Eb(1),r.Ec(n)}}function h(n,t){if(1&n&&(r.Xb(0,"nb-alert",20),r.Xb(1,"p",16),r.Xb(2,"b"),r.Dc(3,"Hooray!"),r.Wb(),r.Wb(),r.Xb(4,"ul",17),r.Bc(5,g,2,1,"li",18),r.Wb(),r.Wb()),2&n){const n=r.hc();r.Eb(5),r.nc("ngForOf",n.messages)}}function m(n,t){1&n&&(r.Xb(0,"p",22),r.Dc(1," Email is required! "),r.Wb())}function f(n,t){1&n&&(r.Xb(0,"p",22),r.Dc(1," Email should be the real one! "),r.Wb())}function p(n,t){if(1&n&&(r.Vb(0),r.Bc(1,m,2,0,"p",21),r.Bc(2,f,2,0,"p",21),r.Ub()),2&n){r.hc();const n=r.tc(12);r.Eb(1),r.nc("ngIf",null==n.errors?null:n.errors.required),r.Eb(1),r.nc("ngIf",null==n.errors?null:n.errors.pattern)}}function M(n,t){1&n&&(r.Xb(0,"p",22),r.Dc(1," Password is required! "),r.Wb())}function y(n,t){if(1&n&&(r.Vb(0),r.Bc(1,M,2,0,"p",21),r.Ub()),2&n){r.hc();const n=r.tc(18);r.Eb(1),r.nc("ngIf",null==n.errors?null:n.errors.required)}}const W=[{path:"",component:a,children:[{path:"login",component:(()=>{class n{constructor(n,t){this.service=n,this.router=t,this.redirectDelay=0,this.showMessages={},this.strategy="",this.errors=[],this.messages=[],this.user={},this.submitted=!1,this.rememberMe=!1}ngOnInit(){}login(){this.errors=[],this.messages=[];let n=this.user;this.submitted=!0,this.service.login(n.email,n.password).subscribe(n=>{console.log(n),localStorage.setItem("access_token",n.token),this.router.navigate(["/dashboard"]),this.submitted=!0},n=>{console.log(n),console.log("===================="),this.submitted=!1,this.errors=["login failed"],this.showMessages.error=!0})}}return n.\u0275fac=function(t){return new(t||n)(r.Rb(i.a),r.Rb(o.c))},n.\u0275cmp=r.Lb({type:n,selectors:[["ngx-login"]],decls:22,vars:14,consts:[["id","title",1,"title"],[1,"sub-title"],["outline","danger","role","alert",4,"ngIf"],["outline","success","role","alert",4,"ngIf"],["aria-labelledby","title",3,"ngSubmit"],["form","ngForm"],[1,"form-control-group"],["for","input-email",1,"label"],["nbInput","","fullWidth","","name","email","id","input-email","pattern",".+@.+\\..+","placeholder","Email address","autofocus","",3,"ngModel","status","required","ngModelChange"],["email","ngModel"],[4,"ngIf"],["for","input-password",1,"label"],["nbInput","","fullWidth","","name","password","type","password","id","input-password","placeholder","Password","required","",3,"ngModel","status","ngModelChange"],["password","ngModel"],["nbButton","","fullWidth","","status","success",3,"disabled"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["outline","success","role","alert"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(n,t){if(1&n&&(r.Xb(0,"h1",0),r.Dc(1,"Login"),r.Wb(),r.Xb(2,"p",1),r.Dc(3,"Hello! Log in with your email."),r.Wb(),r.Bc(4,d,6,1,"nb-alert",2),r.Bc(5,h,6,1,"nb-alert",3),r.Xb(6,"form",4,5),r.fc("ngSubmit",(function(){return t.login()})),r.Xb(8,"div",6),r.Xb(9,"label",7),r.Dc(10,"Email address:"),r.Wb(),r.Xb(11,"input",8,9),r.fc("ngModelChange",(function(n){return t.user.email=n})),r.Wb(),r.Bc(13,p,3,2,"ng-container",10),r.Wb(),r.Xb(14,"div",6),r.Xb(15,"label",11),r.Dc(16,"Password:"),r.Wb(),r.Xb(17,"input",12,13),r.fc("ngModelChange",(function(n){return t.user.password=n})),r.Wb(),r.Bc(19,y,2,1,"ng-container",10),r.Wb(),r.Xb(20,"button",14),r.Dc(21," Log In "),r.Wb(),r.Wb()),2&n){const n=r.tc(7),e=r.tc(12),s=r.tc(18);r.Eb(4),r.nc("ngIf",t.showMessages.error&&(null==t.errors?null:t.errors.length)&&!t.submitted),r.Eb(1),r.nc("ngIf",t.showMessages.success&&(null==t.messages?null:t.messages.length)&&!t.submitted),r.Eb(6),r.nc("ngModel",t.user.email)("status",e.dirty?e.invalid?"danger":"success":"")("required",!0),r.Fb("aria-invalid",!(!e.invalid||!e.touched)||null),r.Eb(2),r.nc("ngIf",e.invalid&&e.touched),r.Eb(4),r.nc("ngModel",t.user.password)("status",s.dirty?s.invalid?"danger":"success":""),r.Fb("aria-invalid",!(!s.invalid||!s.touched)||null),r.Eb(2),r.nc("ngIf",s.invalid&&s.touched),r.Eb(1),r.Ib("btn-pulse",t.submitted),r.nc("disabled",t.submitted||!n.valid)}},directives:[s.m,b.y,b.o,b.p,l.F,b.b,b.s,b.n,b.q,b.u,l.k,s.l],styles:[""]}),n})()}]}];let X=(()=>{class n{}return n.\u0275mod=r.Pb({type:n}),n.\u0275inj=r.Ob({factory:function(t){return new(t||n)},imports:[[o.g.forChild(W)],o.g]}),n})();e.d(t,"AuthModule",(function(){return w}));let w=(()=>{class n{}return n.\u0275mod=r.Pb({type:n}),n.\u0275inj=r.Ob({factory:function(t){return new(t||n)},imports:[[s.c,X,b.h,l.s,l.l,l.G,c.b,l.N,l.E]]}),n})()}}]);
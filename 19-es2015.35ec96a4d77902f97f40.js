(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Rqys:function(e,t,n){"use strict";n.r(t),n.d(t,"NotificationModule",(function(){return h}));var r=n("ofXK"),i=n("tyNb"),o=n("M6bk"),a=n("3Pt+"),l=n("IfeN"),d=n("CHuZ"),c=n("vqVJ"),m=n("fXoL"),p=n("aceb"),s=n("RbqP"),u=n("sYmb");function f(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span",15),m["\u0275\u0275text"](1),m["\u0275\u0275pipe"](2,"translate"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](m["\u0275\u0275pipeBind1"](2,1,"required")))}function v(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div"),m["\u0275\u0275template"](1,f,3,3,"span",14),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",e.notificationForm.get("to").errors.minLength)}}function S(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span",15),m["\u0275\u0275text"](1),m["\u0275\u0275pipe"](2,"translate"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](m["\u0275\u0275pipeBind1"](2,1,"required")))}function x(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div"),m["\u0275\u0275template"](1,S,3,3,"span",14),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",e.notificationForm.get("title").errors.required)}}function I(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span",15),m["\u0275\u0275text"](1),m["\u0275\u0275pipe"](2,"translate"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](m["\u0275\u0275pipeBind1"](2,1,"required")))}function b(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div"),m["\u0275\u0275template"](1,I,3,3,"span",14),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",e.notificationForm.get("content").errors.required)}}const g=[{path:"send",component:(()=>{class e{constructor(e,t,n){this.fb=e,this.notificationService=t,this.userService=n,this.isInvalidControl=d.a,this.notificationForm=e.group({to:[[],a.B.minLength(1)],title:["",a.B.required],content:["",a.B.required],isBroadCast:[!1,a.B.nullValidator]}),this.parents=[]}ngOnInit(){this.userService.getParents().subscribe(e=>{this.parents=e})}onSubmit(){this.notificationForm.markAllAsTouched()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](a.e),m["\u0275\u0275directiveInject"](l.a),m["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-send-notification"]],decls:36,vars:24,consts:[[1,"row","justify-content-center",3,"formGroup","ngSubmit"],[1,"col-sm-6"],[1,"form-group","row","align-items-center"],[1,"label","col-sm-3"],[1,"col-sm-9"],["formControlName","to",3,"users","title","multi"],[4,"ngIf"],[1,"form-group","row"],["nbInput","","type","text","fullWidth","","formControlName","title",3,"status"],["nbInput","","type","text","fullWidth","","rows","5","formControlName","content",3,"status"],[1,"col-sm-3"],["formControlName","isBroadCast"],[1,"row","justify-content-end"],["nbInput","","type","submit","value","Save"],["class","error-text",4,"ngIf"],[1,"error-text"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"nb-card"),m["\u0275\u0275elementStart"](1,"nb-card-header"),m["\u0275\u0275text"](2),m["\u0275\u0275pipe"](3,"translate"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"nb-card-body"),m["\u0275\u0275elementStart"](5,"form",0),m["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),m["\u0275\u0275elementStart"](6,"div",1),m["\u0275\u0275elementStart"](7,"div",2),m["\u0275\u0275elementStart"](8,"label",3),m["\u0275\u0275text"](9),m["\u0275\u0275pipe"](10,"translate"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"div",4),m["\u0275\u0275element"](12,"ngx-user-select",5),m["\u0275\u0275template"](13,v,2,1,"div",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"div",7),m["\u0275\u0275elementStart"](15,"label",3),m["\u0275\u0275text"](16),m["\u0275\u0275pipe"](17,"translate"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](18,"div",4),m["\u0275\u0275element"](19,"input",8),m["\u0275\u0275template"](20,x,2,1,"div",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](21,"div",7),m["\u0275\u0275elementStart"](22,"label",3),m["\u0275\u0275text"](23),m["\u0275\u0275pipe"](24,"translate"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](25,"div",4),m["\u0275\u0275element"](26,"textarea",9),m["\u0275\u0275template"](27,b,2,1,"div",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](28,"div",7),m["\u0275\u0275element"](29,"div",10),m["\u0275\u0275elementStart"](30,"div",4),m["\u0275\u0275elementStart"](31,"nb-checkbox",11),m["\u0275\u0275text"](32),m["\u0275\u0275pipe"](33,"translate"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](34,"div",12),m["\u0275\u0275element"](35,"input",13),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"](" ",m["\u0275\u0275pipeBind1"](3,14,"Send Notifications")," "),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("formGroup",t.notificationForm),m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate"](m["\u0275\u0275pipeBind1"](10,16,"To")),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("users",t.parents)("title","Select Parent")("multi",!0),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.isInvalidControl(t.notificationForm,"to")),m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate"](m["\u0275\u0275pipeBind1"](17,18,"Title")),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("status",t.isInvalidControl(t.notificationForm,"title")?"danger":"basic"),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.isInvalidControl(t.notificationForm,"title")),m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate"](m["\u0275\u0275pipeBind1"](24,20,"Content")),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("status",t.isInvalidControl(t.notificationForm,"content")?"danger":"basic"),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.isInvalidControl(t.notificationForm,"content")),m["\u0275\u0275advance"](5),m["\u0275\u0275textInterpolate"](m["\u0275\u0275pipeBind1"](33,22,"BroadCast")))},directives:[p.u,p.x,p.t,a.D,a.s,a.j,s.a,a.r,a.h,r.o,p.L,a.c,p.z],pipes:[u.c],styles:[".error-text[_ngcontent-%COMP%]{color:red}"]}),e})()},{path:"",component:o.a}];let y=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.g.forChild(g)],i.g]}),e})();var E=n("PCNd"),C=n("p0MU");let h=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,y,p.y,p.r,p.M,p.A,a.y,E.a,C.a]]}),e})()}}]);
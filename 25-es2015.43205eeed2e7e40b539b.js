(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{DiO0:function(e,t,n){"use strict";n.r(t),n.d(t,"MessageCenterModule",(function(){return R}));var r=n("ofXK"),i=n("tyNb"),a=n("CWoy"),o=n("XXKh"),s=n("wd/R"),c=n("vqVJ"),l=n("fXoL"),d=n("aceb"),m=n("sYmb");const p=function(e){return{"background-image":e}};function u(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"nb-list-item",1),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](e);const n=t.$implicit;return l["\u0275\u0275nextContext"]().goToMessageDetail(n)})),l["\u0275\u0275elementStart"](1,"div",2),l["\u0275\u0275elementStart"](2,"div",3),l["\u0275\u0275element"](3,"div",4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"div",5),l["\u0275\u0275elementStart"](5,"div",6),l["\u0275\u0275text"](6," From: "),l["\u0275\u0275elementStart"](7,"span"),l["\u0275\u0275text"](8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](9," To: "),l["\u0275\u0275elementStart"](10,"span"),l["\u0275\u0275text"](11),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](12,"div",7),l["\u0275\u0275text"](13),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"div",8),l["\u0275\u0275elementStart"](15,"div"),l["\u0275\u0275text"](16),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngStyle",l["\u0275\u0275pureFunction1"](5,p,"url("+e.sender.picture+")")),l["\u0275\u0275advance"](5),l["\u0275\u0275textInterpolate"](n.resolveUserEmail(e.sender)),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](n.resolveUserEmail(e.receiver)),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",e.subject," "),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate1"](" ",n.getFormatDate(e.created_at)," ")}}let g=(()=>{class e{constructor(e,t,n,r){this.messageSerivce=e,this.route=t,this.userService=n,this.router=r}ngOnInit(){this.userService.getCurrentUser().subscribe(e=>{this.user=e,this.messageSerivce.getMessagesByUser(this.user).subscribe(e=>{this.messages=e,this.messages.sort((e,t)=>{let n=s(e.created_at),r=s(t.created_at);return n.isAfter(r)?1:0})})})}isUserAdmin(e){return e.role==a.a.Admin}resolveUserEmail(e){return e.id==this.user.id?"me":e.role==a.a.Admin?"Admin Center":e.email}getFormatDate(e){let t=s(e);return t.isValid?t.format("LT"):""}goToMessageDetail(e){this.router.navigate([e.id],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](i.a),l["\u0275\u0275directiveInject"](c.a),l["\u0275\u0275directiveInject"](i.c))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-message-center"]],decls:7,vars:4,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"row","justify-content-center","w-100"],[1,"avatar","ml-2"],[1,"content",3,"ngStyle"],[1,"ml-3"],[1,"text-1"],[1,"mt-2"],[1,"ml-auto"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"nb-card"),l["\u0275\u0275elementStart"](1,"nb-card-header"),l["\u0275\u0275text"](2),l["\u0275\u0275pipe"](3,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"nb-card-body"),l["\u0275\u0275elementStart"](5,"nb-list"),l["\u0275\u0275template"](6,u,17,7,"nb-list-item",0),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](3,2,"Message Center")," "),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngForOf",t.messages))},directives:[d.t,d.w,d.s,d.U,r.n,d.V,r.p],pipes:[m.c],styles:[".avatar[_ngcontent-%COMP%]{width:50px;height:50px}.avatar[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;position:relative;padding-top:100%;background-size:cover;background-repeat:no-repeat;border-radius:50%;box-shadow:0 0 5px .5px #fff}nb-list-item[_ngcontent-%COMP%]   .text-1[_ngcontent-%COMP%]{font-size:small;color:grey}"]}),e})();var v=n("eIep"),f=n("fUYe");function x(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"span"),l["\u0275\u0275text"](1,"Admin Center"),l["\u0275\u0275elementEnd"]())}function S(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"span"),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"](2).$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e.sender.email)}}function h(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"span"),l["\u0275\u0275text"](1,"Admin Center"),l["\u0275\u0275elementEnd"]())}function b(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"span"),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"](2).$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e.receiver.email)}}function y(e,t){if(1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275element"](1,"img",21),l["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("src",e,l["\u0275\u0275sanitizeUrl"])}}const E=function(e){return{"background-image":e}};function C(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",9),l["\u0275\u0275element"](1,"div",10),l["\u0275\u0275elementStart"](2,"div",11),l["\u0275\u0275elementStart"](3,"div",12),l["\u0275\u0275elementStart"](4,"div",13),l["\u0275\u0275elementStart"](5,"div",14),l["\u0275\u0275text"](6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](7," From: "),l["\u0275\u0275template"](8,x,2,0,"span",15),l["\u0275\u0275template"](9,S,2,1,"span",15),l["\u0275\u0275text"](10," To: "),l["\u0275\u0275template"](11,h,2,0,"span",15),l["\u0275\u0275template"](12,b,2,1,"span",15),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](13,"div",16),l["\u0275\u0275element"](14,"div",17),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](15,"div",18),l["\u0275\u0275elementStart"](16,"div",19),l["\u0275\u0275text"](17),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](18,"div",20),l["\u0275\u0275template"](19,y,2,1,"ng-container",3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]().$implicit,t=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](6),l["\u0275\u0275textInterpolate1"](" ",t.getFormatDate(e.created_at)," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",t.isUserAdmin(e.sender)),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",!t.isUserAdmin(e.sender)),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",t.isUserAdmin(e.receiver)),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",!t.isUserAdmin(e.receiver)),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngStyle",l["\u0275\u0275pureFunction1"](8,E,"url("+e.sender.picture+")")),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate1"](" ",e.content," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",e.attachedFiles)}}function I(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"span"),l["\u0275\u0275text"](1,"Admin Center"),l["\u0275\u0275elementEnd"]())}function w(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"span"),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"](2).$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e.sender.email)}}function M(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"span"),l["\u0275\u0275text"](1,"Admin Center"),l["\u0275\u0275elementEnd"]())}function _(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"span"),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"](2).$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e.receiver.email)}}function O(e,t){if(1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275element"](1,"img",21),l["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("src",e,l["\u0275\u0275sanitizeUrl"])}}function k(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",9),l["\u0275\u0275elementStart"](1,"div",22),l["\u0275\u0275elementStart"](2,"div",23),l["\u0275\u0275elementStart"](3,"div",24),l["\u0275\u0275element"](4,"div",17),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"div",25),l["\u0275\u0275elementStart"](6,"div",26),l["\u0275\u0275text"](7),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](8," From: "),l["\u0275\u0275template"](9,I,2,0,"span",15),l["\u0275\u0275template"](10,w,2,1,"span",15),l["\u0275\u0275text"](11," To: "),l["\u0275\u0275template"](12,M,2,0,"span",15),l["\u0275\u0275template"](13,_,2,1,"span",15),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"div",18),l["\u0275\u0275elementStart"](15,"div",27),l["\u0275\u0275text"](16),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](17,"div",28),l["\u0275\u0275template"](18,O,2,1,"ng-container",3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]().$implicit,t=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngStyle",l["\u0275\u0275pureFunction1"](8,E,"url("+e.sender.picture+")")),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate1"](" ",t.getFormatDate(e.created_at)," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",t.isUserAdmin(e.sender)),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",!t.isUserAdmin(e.sender)),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",t.isUserAdmin(e.receiver)),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",!t.isUserAdmin(e.receiver)),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate1"](" ",e.content," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",e.attachedFiles)}}function U(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-list-item"),l["\u0275\u0275template"](1,C,20,10,"div",7),l["\u0275\u0275template"](2,k,19,10,"ng-template",null,8,l["\u0275\u0275templateRefExtractor"]),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=l["\u0275\u0275reference"](3),r=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",e.reply_to==r.messages[0].id)("ngIfElse",n)}}function j(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"button",29),l["\u0275\u0275listener"]("click",(function(){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().isReplyMode=!0})),l["\u0275\u0275text"](1,"Reply"),l["\u0275\u0275elementEnd"]()}}function F(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"div",30),l["\u0275\u0275elementStart"](1,"button",31),l["\u0275\u0275listener"]("click",(function(){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().isReplyMode=!1})),l["\u0275\u0275element"](2,"nb-icon",32),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](3,"ngx-reply",33),l["\u0275\u0275elementEnd"]()}2&e&&(l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("isReplyMode",!0))}let A=(()=>{class e{constructor(e,t,n,r){this.messageSerivce=e,this.route=t,this.router=n,this._location=r}ngOnInit(){this.route.paramMap.pipe(Object(v.a)(e=>(this.msgId=Number(e.get("id")),this.messageSerivce.getAdminHeaderMessage()))).subscribe(e=>{this.messages=e}),this.isReplyMode=!1}isUserAdmin(e){return e.role==a.a.Admin}getFormatDate(e){let t=s(e);return t.isValid?t.format("LT"):""}goToMessageCenter(){this._location.back()}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](i.a),l["\u0275\u0275directiveInject"](i.c),l["\u0275\u0275directiveInject"](r.k))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-message-detail"]],decls:12,vars:3,consts:[["nbTooltip","Back","nbButton","","ghost","",3,"click"],["icon","arrow-back-outline",2,"color","white"],[2,"max-height","800px"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end"],["nbButton","","class","",3,"click",4,"ngIf"],["style","position: relative;",4,"ngIf"],["class","row w-100",4,"ngIf","ngIfElse"],["hostContent",""],[1,"row","w-100"],[1,"col-2"],[1,"col-10","justify-content-end","w-100"],[1,"row","justify-content-end"],[1,"text-1"],[1,"ml-2","date-text","text-right"],[4,"ngIf"],[1,"avatar","ml-2"],[1,"content",3,"ngStyle"],[1,"ml-3"],[1,"mt-2","mb-2","text-right"],[1,"row","attached-content","justify-content-end"],[1,"attached-img","mr-2","mt-2",3,"src"],[1,"col-10","w-100","ml-2"],[1,"row"],[1,"avatar","text-right"],[1,"text-1","ml-2"],[1,"date-text"],[1,"mt-2","mb-2"],[1,"row","attached-content"],["nbButton","",1,"",3,"click"],[2,"position","relative"],["nbButton","","ghost","",2,"position","absolute","right","0px","top","0px","z-index","99",3,"click"],["icon","close-outline"],[3,"isReplyMode"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"nb-card"),l["\u0275\u0275elementStart"](1,"nb-card-header"),l["\u0275\u0275elementStart"](2,"button",0),l["\u0275\u0275listener"]("click",(function(){return t.goToMessageCenter()})),l["\u0275\u0275elementStart"](3,"nb-icon",1),l["\u0275\u0275text"](4,"arrow-back-outline"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](5," Messages "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"nb-card-body"),l["\u0275\u0275elementStart"](7,"nb-list",2),l["\u0275\u0275template"](8,U,4,2,"nb-list-item",3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"div",4),l["\u0275\u0275template"](10,j,2,0,"button",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](11,F,4,1,"div",6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](8),l["\u0275\u0275property"]("ngForOf",t.messages),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",!t.isReplyMode),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.isReplyMode))},directives:[d.t,d.w,d.p,d.I,d.s,d.U,r.n,r.o,d.V,r.p,f.a],styles:[".avatar[_ngcontent-%COMP%]{width:50px;height:50px}.avatar[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;position:relative;padding-top:100%;background-size:cover;background-repeat:no-repeat;border-radius:50%;box-shadow:0 0 5px .5px #fff}nb-list-item[_ngcontent-%COMP%]   .text-1[_ngcontent-%COMP%]{font-size:small;color:grey}nb-list-item[_ngcontent-%COMP%]   .date-text[_ngcontent-%COMP%]{font-size:medium}.attached-content[_ngcontent-%COMP%]{flex-wrap:wrap}.attached-content[_ngcontent-%COMP%]   .attached-img[_ngcontent-%COMP%]{max-height:70px;border-radius:5px;border:1px solid #8f9bb3}"]}),e})();const P=[{path:"",component:g},{path:"compose",component:(()=>{class e{constructor(e,t){this.userService=e,this.mssageService=t}ngOnInit(){this.userService.getCurrentUser().subscribe(e=>{this.user=e,this.from_string=this.user.email})}onSend(e){this.mssageService.sendMessage(this.user,e.to_contacts,e.content)}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](c.a),l["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-compose-message"]],decls:1,vars:1,consts:[[3,"from_string","onsend"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"ngx-reply",0),l["\u0275\u0275listener"]("onsend",(function(e){return t.onSend(e)})),l["\u0275\u0275elementEnd"]()),2&e&&l["\u0275\u0275property"]("from_string",t.user)},directives:[f.a],styles:[""]}),e})()},{path:":id",component:A}];let T=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.g.forChild(P)],i.g]}),e})();var V=n("PCNd"),$=n("p0MU");let R=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,T,d.x,d.W,d.q,V.a,d.K,$.a]]}),e})()}}]);
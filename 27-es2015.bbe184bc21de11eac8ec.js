(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{DiO0:function(e,t,n){"use strict";n.r(t),n.d(t,"MessageCenterModule",(function(){return k}));var r=n("ofXK"),i=n("tyNb"),a=n("CWoy"),o=n("XXKh"),l=n("wd/R"),s=n("vqVJ"),c=n("fXoL"),d=n("aceb"),m=n("sYmb");const p=function(e){return{"background-image":e}};function u(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"nb-list-item",1),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const n=t.$implicit;return c["\u0275\u0275nextContext"]().goToMessageDetail(n)})),c["\u0275\u0275elementStart"](1,"div",2),c["\u0275\u0275elementStart"](2,"div",3),c["\u0275\u0275element"](3,"div",4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"div",5),c["\u0275\u0275elementStart"](5,"div",6),c["\u0275\u0275text"](6," From: "),c["\u0275\u0275elementStart"](7,"span"),c["\u0275\u0275text"](8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](9," To: "),c["\u0275\u0275elementStart"](10,"span"),c["\u0275\u0275text"](11),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"div",7),c["\u0275\u0275text"](13),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](14,"div",8),c["\u0275\u0275elementStart"](15,"div"),c["\u0275\u0275text"](16),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngStyle",c["\u0275\u0275pureFunction1"](5,p,"url("+n.resolveSenderPictureUrl(e)+")")),c["\u0275\u0275advance"](5),c["\u0275\u0275textInterpolate"](n.resolveSenderEmail(e)),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](n.resolveReceiverEmail(e)),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate1"](" ",e.subject," "),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"](" ",n.getFormatDate(e.created_at)," ")}}let v=(()=>{class e{constructor(e,t,n,r){this.messageSerivce=e,this.route=t,this.userService=n,this.router=r}ngOnInit(){this.userService.getCurrentUser().subscribe(e=>{this.user=e,this.messageSerivce.getMessagesByUser(this.user).subscribe(e=>{this.messages=e,this.messages.sort((e,t)=>{let n=l(e.created_at),r=l(t.created_at);return n.isAfter(r)?1:0})})})}isUserAdmin(e){return e.role==a.a.Admin}resolveSenderEmail(e){let t=e.sender;return t.id==this.user.id?"me":t.role==a.a.Admin?"Admin Center":t.role==a.a.Parent?e.child.first_name+" "+e.child.last_name:t.first_name+" "+t.last_name}resolveReceiverEmail(e){let t=e.receiver;return t.id==this.user.id?"me":t.role==a.a.Admin?"Admin Center":t.role==a.a.Parent?e.child.first_name+" "+e.child.last_name:t.first_name+" "+t.last_name}resolveSenderPictureUrl(e){return e.sender.role==a.a.Parent?e.child.photo:e.sender.picture}getFormatDate(e){let t=l(e);return t.isValid?t.format("LT"):""}goToMessageDetail(e){this.router.navigate([e.id],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](o.a),c["\u0275\u0275directiveInject"](i.a),c["\u0275\u0275directiveInject"](s.a),c["\u0275\u0275directiveInject"](i.c))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-message-center"]],decls:7,vars:4,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"row","justify-content-center","w-100"],[1,"avatar","ml-2"],[1,"content",3,"ngStyle"],[1,"ml-3"],[1,"text-1"],[1,"mt-2"],[1,"ml-auto"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275text"](2),c["\u0275\u0275pipe"](3,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"nb-card-body"),c["\u0275\u0275elementStart"](5,"nb-list"),c["\u0275\u0275template"](6,u,17,7,"nb-list-item",0),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate1"](" ",c["\u0275\u0275pipeBind1"](3,2,"Message Center")," "),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("ngForOf",t.messages))},directives:[d.u,d.x,d.t,d.V,r.n,d.W,r.p],pipes:[m.c],styles:[".avatar[_ngcontent-%COMP%]{width:50px;height:50px}.avatar[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;position:relative;padding-top:100%;background-size:cover;background-repeat:no-repeat;border-radius:50%;box-shadow:0 0 5px .5px #fff}nb-list-item[_ngcontent-%COMP%]   .text-1[_ngcontent-%COMP%]{font-size:small;color:grey}"]}),e})();var g=n("eIep"),f=n("fUYe");function x(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275element"](1,"img",20),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("src",e,c["\u0275\u0275sanitizeUrl"])}}const h=function(e){return{"background-image":e}};function S(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",9),c["\u0275\u0275element"](1,"div",10),c["\u0275\u0275elementStart"](2,"div",11),c["\u0275\u0275elementStart"](3,"div",12),c["\u0275\u0275elementStart"](4,"div",13),c["\u0275\u0275elementStart"](5,"div",14),c["\u0275\u0275text"](6),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](7," From: "),c["\u0275\u0275elementStart"](8,"span"),c["\u0275\u0275text"](9),c["\u0275\u0275pipe"](10,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](11," To:"),c["\u0275\u0275elementStart"](12,"span"),c["\u0275\u0275text"](13),c["\u0275\u0275pipe"](14,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](15,"div",15),c["\u0275\u0275element"](16,"div",16),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](17,"div",17),c["\u0275\u0275elementStart"](18,"div",18),c["\u0275\u0275text"](19),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](20,"div",19),c["\u0275\u0275template"](21,x,2,1,"ng-container",3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]().$implicit,t=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](6),c["\u0275\u0275textInterpolate1"](" ",t.getFormatDate(e.created_at)," "),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](10,6,t.resolveSenderEmail(e))),c["\u0275\u0275advance"](4),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](14,8,t.resolveReceiverEmail(e))),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngStyle",c["\u0275\u0275pureFunction1"](10,h,"url("+t.resolveSenderPictureUrl(e)+")")),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"](" ",e.content," "),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngForOf",e.attachedFiles)}}function b(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275element"](1,"img",20),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("src",e,c["\u0275\u0275sanitizeUrl"])}}function E(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",9),c["\u0275\u0275elementStart"](1,"div",21),c["\u0275\u0275elementStart"](2,"div",22),c["\u0275\u0275elementStart"](3,"div",23),c["\u0275\u0275element"](4,"div",16),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"div",24),c["\u0275\u0275elementStart"](6,"div",25),c["\u0275\u0275text"](7),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](8," From: "),c["\u0275\u0275elementStart"](9,"span"),c["\u0275\u0275text"](10),c["\u0275\u0275pipe"](11,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](12," To:"),c["\u0275\u0275elementStart"](13,"span"),c["\u0275\u0275text"](14),c["\u0275\u0275pipe"](15,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](16,"div",17),c["\u0275\u0275elementStart"](17,"div",26),c["\u0275\u0275text"](18),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](19,"div",27),c["\u0275\u0275template"](20,b,2,1,"ng-container",3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]().$implicit,t=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("ngStyle",c["\u0275\u0275pureFunction1"](10,h,"url("+t.resolveSenderPictureUrl(e)+")")),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"](" ",t.getFormatDate(e.created_at)," "),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](11,6,t.resolveSenderEmail(e))),c["\u0275\u0275advance"](4),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](15,8,t.resolveReceiverEmail(e))),c["\u0275\u0275advance"](4),c["\u0275\u0275textInterpolate1"](" ",e.content," "),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngForOf",e.attachedFiles)}}function y(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"nb-list-item"),c["\u0275\u0275template"](1,S,22,12,"div",7),c["\u0275\u0275template"](2,E,21,12,"ng-template",null,8,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=c["\u0275\u0275reference"](3),r=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",e.sender.id!=r.messages[0].sender.id)("ngIfElse",n)}}function C(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"button",28),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().isReplyMode=!0})),c["\u0275\u0275text"](1,"Reply"),c["\u0275\u0275elementEnd"]()}}function w(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"div",29),c["\u0275\u0275elementStart"](1,"button",30),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().isReplyMode=!1})),c["\u0275\u0275element"](2,"nb-icon",31),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](3,"ngx-reply",32),c["\u0275\u0275elementEnd"]()}2&e&&(c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("isReplyMode",!0))}let I=(()=>{class e{constructor(e,t,n,r,i){this.messageSerivce=e,this.usersService=t,this.route=n,this.router=r,this._location=i}ngOnInit(){this.usersService.getCurrentUser().subscribe(e=>{this.user=e}),this.route.paramMap.pipe(Object(g.a)(e=>(this.msgId=Number(e.get("id")),this.messageSerivce.getMessageLinked(this.msgId)))).subscribe(e=>{this.messages=e}),this.isReplyMode=!1}isUserAdmin(e){return e.role==a.a.Admin}getFormatDate(e){let t=l(e);return t.isValid?t.format("LT"):""}goToMessageCenter(){this._location.back()}resolveSenderEmail(e){let t=e.sender;return t.id==this.user.id?"me":t.role==a.a.Admin?"Admin Center":t.role==a.a.Parent?e.child.first_name+" "+e.child.last_name:t.first_name+" "+t.last_name}resolveReceiverEmail(e){let t=e.receiver;return t.id==this.user.id?"me":t.role==a.a.Admin?"Admin Center":t.role==a.a.Parent?e.child.first_name+" "+e.child.last_name:t.first_name+" "+t.last_name}resolveReceiverPictureUrl(e){return e.receiver.role==a.a.Parent?e.child.photo:e.sender.picture}resolveSenderPictureUrl(e){return e.sender.role==a.a.Parent?e.child.photo:e.sender.picture}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](o.a),c["\u0275\u0275directiveInject"](s.a),c["\u0275\u0275directiveInject"](i.a),c["\u0275\u0275directiveInject"](i.c),c["\u0275\u0275directiveInject"](r.k))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-message-detail"]],decls:12,vars:3,consts:[["nbTooltip","Back","nbButton","","ghost","",3,"click"],["icon","arrow-back-outline",2,"color","white"],[2,"max-height","800px"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end"],["nbButton","","class","",3,"click",4,"ngIf"],["style","position: relative;",4,"ngIf"],["class","row w-100",4,"ngIf","ngIfElse"],["hostContent",""],[1,"row","w-100"],[1,"col-2"],[1,"col-10","justify-content-end","w-100"],[1,"row","justify-content-end"],[1,"text-1"],[1,"ml-2","date-text","text-right"],[1,"avatar","ml-2"],[1,"content",3,"ngStyle"],[1,"ml-3"],[1,"mt-2","mb-2","text-right"],[1,"row","attached-content","justify-content-end"],[1,"attached-img","mr-2","mt-2",3,"src"],[1,"col-10","w-100","ml-2"],[1,"row"],[1,"avatar","text-right"],[1,"text-1","ml-2"],[1,"date-text"],[1,"mt-2","mb-2"],[1,"row","attached-content"],["nbButton","",1,"",3,"click"],[2,"position","relative"],["nbButton","","ghost","",2,"position","absolute","right","0px","top","0px","z-index","99",3,"click"],["icon","close-outline"],[3,"isReplyMode"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275elementStart"](2,"button",0),c["\u0275\u0275listener"]("click",(function(){return t.goToMessageCenter()})),c["\u0275\u0275elementStart"](3,"nb-icon",1),c["\u0275\u0275text"](4,"arrow-back-outline"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](5," Messages "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"nb-card-body"),c["\u0275\u0275elementStart"](7,"nb-list",2),c["\u0275\u0275template"](8,y,4,2,"nb-list-item",3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"div",4),c["\u0275\u0275template"](10,C,2,0,"button",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](11,w,4,1,"div",6),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](8),c["\u0275\u0275property"]("ngForOf",t.messages),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngIf",!t.isReplyMode),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",t.isReplyMode))},directives:[d.u,d.x,d.q,d.J,d.t,d.V,r.n,r.o,d.W,r.p,f.a],pipes:[m.c],styles:[".avatar[_ngcontent-%COMP%]{width:50px;height:50px}.avatar[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;position:relative;padding-top:100%;background-size:cover;background-repeat:no-repeat;border-radius:50%;box-shadow:0 0 5px .5px #fff}nb-list-item[_ngcontent-%COMP%]   .text-1[_ngcontent-%COMP%]{font-size:small;color:grey}nb-list-item[_ngcontent-%COMP%]   .date-text[_ngcontent-%COMP%]{font-size:medium}.attached-content[_ngcontent-%COMP%]{flex-wrap:wrap}.attached-content[_ngcontent-%COMP%]   .attached-img[_ngcontent-%COMP%]{max-height:70px;border-radius:5px;border:1px solid #8f9bb3}"]}),e})();const _=[{path:"",component:v},{path:"compose",component:(()=>{class e{constructor(e,t){this.userService=e,this.mssageService=t}ngOnInit(){this.userService.getCurrentUser().subscribe(e=>{this.currentUser=e,this.from_string=this.currentUser.email})}onSend(e){}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](s.a),c["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-compose-message"]],decls:1,vars:1,consts:[[3,"fromContact","onsend"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"ngx-reply",0),c["\u0275\u0275listener"]("onsend",(function(e){return t.onSend(e)})),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("fromContact",t.currentUser)},directives:[f.a],styles:[""]}),e})()},{path:":id",component:I}];let M=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.g.forChild(_)],i.g]}),e})();var P=n("PCNd"),O=n("p0MU");let k=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,M,d.y,d.X,d.r,P.a,d.L,O.a]]}),e})()}}]);
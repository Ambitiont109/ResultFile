!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{YvNP:function(t,r,a){"use strict";a.r(r),a.d(r,"MessageCenterModule",(function(){return T}));var i=a("ofXK"),o=a("tyNb"),c=a("XXKh"),l=a("wd/R"),s=a("fXoL"),d=a("aceb"),m=a("sYmb"),p=function(e){return{"background-image":e}};function g(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"nb-list-item",1),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](n);var e=t.$implicit;return s["\u0275\u0275nextContext"]().goToMessageDetail(e)})),s["\u0275\u0275elementStart"](1,"div",2),s["\u0275\u0275elementStart"](2,"div",3),s["\u0275\u0275element"](3,"div",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"div",5),s["\u0275\u0275elementStart"](5,"div",6),s["\u0275\u0275text"](6," From: "),s["\u0275\u0275elementStart"](7,"span"),s["\u0275\u0275text"](8),s["\u0275\u0275pipe"](9,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](10," To:"),s["\u0275\u0275elementStart"](11,"span"),s["\u0275\u0275text"](12),s["\u0275\u0275pipe"](13,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"div",7),s["\u0275\u0275text"](15),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"div",8),s["\u0275\u0275elementStart"](17,"div"),s["\u0275\u0275text"](18),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit,a=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngStyle",s["\u0275\u0275pureFunction1"](9,p,"url("+a.getSenderPhotoUrl(r)+")")),s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](9,5,a.getSenderName(r))),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](13,7,a.getReceiverName(r))),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" ",r.subject," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" ",a.getFormatDate(r.created_at)," ")}}var u,v=((u=function(){function t(n,r,a){e(this,t),this.messageSerivce=n,this.route=r,this.router=a,this.getSenderName=this.messageSerivce.getSenderName,this.getReceiverName=this.messageSerivce.getReceiverName,this.getSenderPhotoUrl=this.messageSerivce.getSenderPhotoUrl,this.getReceiverPhotoUrl=this.messageSerivce.getReceiverPhotoUrl}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.messageSerivce.getAdminHeaderMessage().subscribe((function(t){e.messages=t,e.messages.sort((function(e,t){var n=l(e.created_at),r=l(t.created_at);return n.isAfter(r)?1:0}))}))}},{key:"getFormatDate",value:function(e){var t=l(e);return t.isValid?t.format("LT"):""}},{key:"goToMessageDetail",value:function(e){this.router.navigate([e.id],{relativeTo:this.route})}}]),t}()).\u0275fac=function(e){return new(e||u)(s["\u0275\u0275directiveInject"](c.a),s["\u0275\u0275directiveInject"](o.a),s["\u0275\u0275directiveInject"](o.c))},u.\u0275cmp=s["\u0275\u0275defineComponent"]({type:u,selectors:[["ngx-message-center"]],decls:7,vars:4,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"row","justify-content-center","w-100"],[1,"avatar","ml-2"],[1,"content",3,"ngStyle"],[1,"ml-3"],[1,"text-1"],[1,"mt-2"],[1,"ml-auto"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"nb-card"),s["\u0275\u0275elementStart"](1,"nb-card-header"),s["\u0275\u0275text"](2),s["\u0275\u0275pipe"](3,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"nb-card-body"),s["\u0275\u0275elementStart"](5,"nb-list"),s["\u0275\u0275template"](6,g,19,11,"nb-list-item",0),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",s["\u0275\u0275pipeBind1"](3,2,"Message Center")," "),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngForOf",t.messages))},directives:[d.u,d.x,d.t,d.V,i.n,d.W,i.p],pipes:[m.c],styles:[".avatar[_ngcontent-%COMP%]{width:50px;height:50px}.avatar[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;position:relative;padding-top:100%;background-size:cover;background-repeat:no-repeat;border-radius:50%;box-shadow:0 0 5px .5px #fff}nb-list-item[_ngcontent-%COMP%]   .text-1[_ngcontent-%COMP%]{font-size:small;color:grey}"]}),u),f=a("CWoy"),x=a("eIep"),h=a("fUYe");function S(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275element"](1,"img",20),s["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("src",n,s["\u0275\u0275sanitizeUrl"])}}var b=function(e){return{"background-image":e}};function y(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",9),s["\u0275\u0275element"](1,"div",10),s["\u0275\u0275elementStart"](2,"div",11),s["\u0275\u0275elementStart"](3,"div",12),s["\u0275\u0275elementStart"](4,"div",13),s["\u0275\u0275elementStart"](5,"div",14),s["\u0275\u0275text"](6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](7," From: "),s["\u0275\u0275elementStart"](8,"span"),s["\u0275\u0275text"](9),s["\u0275\u0275pipe"](10,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](11," To:"),s["\u0275\u0275elementStart"](12,"span"),s["\u0275\u0275text"](13),s["\u0275\u0275pipe"](14,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"div",15),s["\u0275\u0275element"](16,"div",16),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](17,"div",17),s["\u0275\u0275elementStart"](18,"div",18),s["\u0275\u0275text"](19),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](20,"div",19),s["\u0275\u0275template"](21,S,2,1,"ng-container",3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]().$implicit,r=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](6),s["\u0275\u0275textInterpolate1"](" ",r.getFormatDate(n.created_at)," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](10,6,r.getSenderName(n))),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](14,8,r.getReceiverName(n))),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngStyle",s["\u0275\u0275pureFunction1"](10,b,"url("+r.getSenderPhotoUrl(n)+")")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" ",n.content," "),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",n.attachedFiles)}}function E(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275element"](1,"img",20),s["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("src",n,s["\u0275\u0275sanitizeUrl"])}}function C(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",9),s["\u0275\u0275elementStart"](1,"div",21),s["\u0275\u0275elementStart"](2,"div",22),s["\u0275\u0275elementStart"](3,"div",23),s["\u0275\u0275element"](4,"div",16),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"div",24),s["\u0275\u0275elementStart"](6,"div",25),s["\u0275\u0275text"](7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](8," From: "),s["\u0275\u0275elementStart"](9,"span"),s["\u0275\u0275text"](10),s["\u0275\u0275pipe"](11,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](12," To:"),s["\u0275\u0275elementStart"](13,"span"),s["\u0275\u0275text"](14),s["\u0275\u0275pipe"](15,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"div",17),s["\u0275\u0275elementStart"](17,"div",26),s["\u0275\u0275text"](18),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](19,"div",27),s["\u0275\u0275template"](20,E,2,1,"ng-container",3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]().$implicit,r=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngStyle",s["\u0275\u0275pureFunction1"](10,b,"url("+r.getSenderPhotoUrl(n)+")")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" ",r.getFormatDate(n.created_at)," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](11,6,r.getSenderName(n))),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](15,8,r.getReceiverName(n))),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate1"](" ",n.content," "),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",n.attachedFiles)}}function w(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-list-item"),s["\u0275\u0275template"](1,y,22,12,"div",7),s["\u0275\u0275template"](2,C,21,12,"ng-template",null,8,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,r=s["\u0275\u0275reference"](3),a=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",n.sender.id!=a.messages[0].sender.id)("ngIfElse",r)}}function I(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"button",28),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().isReplyMode=!0})),s["\u0275\u0275text"](1,"Reply"),s["\u0275\u0275elementEnd"]()}}function M(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"div",29),s["\u0275\u0275elementStart"](1,"button",30),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().isReplyMode=!1})),s["\u0275\u0275element"](2,"nb-icon",31),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](3,"ngx-reply",32),s["\u0275\u0275elementEnd"]()}2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("isReplyMode",!0))}var k,P,O,_,j=((k=function(){function t(n,r,a,i){e(this,t),this.messageSerivce=n,this.route=r,this.router=a,this._location=i,this.getSenderName=this.messageSerivce.getSenderName,this.getReceiverName=this.messageSerivce.getReceiverName,this.getSenderPhotoUrl=this.messageSerivce.getSenderPhotoUrl,this.getReceiverPhotoUrl=this.messageSerivce.getReceiverPhotoUrl}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.route.paramMap.pipe(Object(x.a)((function(t){return e.msgId=Number(t.get("id")),e.messageSerivce.getMessageLinked(e.msgId)}))).subscribe((function(t){e.messages=t})),this.isReplyMode=!1}},{key:"isUserAdmin",value:function(e){return e.role==f.a.Admin}},{key:"getFormatDate",value:function(e){var t=l(e);return t.isValid?t.format("LT"):""}},{key:"goToMessageCenter",value:function(){this._location.back()}}]),t}()).\u0275fac=function(e){return new(e||k)(s["\u0275\u0275directiveInject"](c.a),s["\u0275\u0275directiveInject"](o.a),s["\u0275\u0275directiveInject"](o.c),s["\u0275\u0275directiveInject"](i.k))},k.\u0275cmp=s["\u0275\u0275defineComponent"]({type:k,selectors:[["ngx-message-detail"]],decls:12,vars:3,consts:[["nbTooltip","Back","nbButton","","ghost","",3,"click"],["icon","arrow-back-outline",2,"color","white"],[2,"max-height","800px"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end"],["nbButton","","class","",3,"click",4,"ngIf"],["style","position: relative;",4,"ngIf"],["class","row w-100",4,"ngIf","ngIfElse"],["hostContent",""],[1,"row","w-100"],[1,"col-2"],[1,"col-10","justify-content-end","w-100"],[1,"row","justify-content-end"],[1,"text-1"],[1,"ml-2","date-text","text-right"],[1,"avatar","ml-2"],[1,"content",3,"ngStyle"],[1,"ml-3"],[1,"mt-2","mb-2","text-right"],[1,"row","attached-content","justify-content-end"],[1,"attached-img","mr-2","mt-2",3,"src"],[1,"col-10","w-100","ml-2"],[1,"row"],[1,"avatar","text-right"],[1,"text-1","ml-2"],[1,"date-text"],[1,"mt-2","mb-2"],[1,"row","attached-content"],["nbButton","",1,"",3,"click"],[2,"position","relative"],["nbButton","","ghost","",2,"position","absolute","right","0px","top","0px","z-index","99",3,"click"],["icon","close-outline"],[3,"isReplyMode"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"nb-card"),s["\u0275\u0275elementStart"](1,"nb-card-header"),s["\u0275\u0275elementStart"](2,"button",0),s["\u0275\u0275listener"]("click",(function(){return t.goToMessageCenter()})),s["\u0275\u0275elementStart"](3,"nb-icon",1),s["\u0275\u0275text"](4,"arrow-back-outline"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](5," Messages "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"nb-card-body"),s["\u0275\u0275elementStart"](7,"nb-list",2),s["\u0275\u0275template"](8,w,4,2,"nb-list-item",3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"div",4),s["\u0275\u0275template"](10,I,2,0,"button",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](11,M,4,1,"div",6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](8),s["\u0275\u0275property"]("ngForOf",t.messages),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",!t.isReplyMode),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.isReplyMode))},directives:[d.u,d.x,d.q,d.J,d.t,d.V,i.n,i.o,d.W,i.p,h.a],pipes:[m.c],styles:[".avatar[_ngcontent-%COMP%]{width:50px;height:50px}.avatar[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;position:relative;padding-top:100%;background-size:cover;background-repeat:no-repeat;border-radius:50%;box-shadow:0 0 5px .5px #fff}nb-list-item[_ngcontent-%COMP%]   .text-1[_ngcontent-%COMP%]{font-size:small;color:grey}nb-list-item[_ngcontent-%COMP%]   .date-text[_ngcontent-%COMP%]{font-size:medium}.attached-content[_ngcontent-%COMP%]{flex-wrap:wrap}.attached-content[_ngcontent-%COMP%]   .attached-img[_ngcontent-%COMP%]{max-height:70px;border-radius:5px;border:1px solid #8f9bb3}"]}),k),F=a("vqVJ"),R=[{path:"",component:v},{path:"compose",component:(P=function(){function t(n,r){e(this,t),this.userService=n,this.messageSerivce=r}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.userService.getCurrentUser().subscribe((function(t){e.currentUser=t}))}},{key:"onSend",value:function(e){alert(e.content)}}]),t}(),P.\u0275fac=function(e){return new(e||P)(s["\u0275\u0275directiveInject"](F.a),s["\u0275\u0275directiveInject"](c.a))},P.\u0275cmp=s["\u0275\u0275defineComponent"]({type:P,selectors:[["ngx-compose-message"]],decls:1,vars:1,consts:[[3,"fromContact","onsend"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"ngx-reply",0),s["\u0275\u0275listener"]("onsend",(function(e){return t.onSend(e)})),s["\u0275\u0275elementEnd"]()),2&e&&s["\u0275\u0275property"]("fromContact",t.currentUser)},directives:[h.a],styles:[""]}),P)},{path:":id",component:j}],N=((O=function t(){e(this,t)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:O}),O.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||O)},imports:[[o.g.forChild(R)],o.g]}),O),U=a("PCNd"),B=a("p0MU"),T=((_=function t(){e(this,t)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:_}),_.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||_)},imports:[[i.c,N,d.y,d.X,d.r,U.a,d.L,B.a]]}),_)}}])}();
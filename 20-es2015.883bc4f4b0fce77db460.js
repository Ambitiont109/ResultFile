(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{MOo2:function(e,t,n){"use strict";n.r(t),n.d(t,"SchoolDocumentsModule",(function(){return E}));var o=n("ofXK"),l=n("tyNb"),r=n("B3Wl"),a=n("oeL9"),c=n("fXoL"),i=n("aceb"),d=n("/aQt"),m=n("XNiG"),s=n("EwH2");function u(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"nb-option",2),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate"](e.key)}}let b=(()=>{class e{constructor(e){this.documentService=e,this.uploadStates=d.c,this.uploads=[],this.destroy$=new m.a,this.selectList=Object.keys(a.a).map(e=>({key:e,value:a.a[e]})),this.storage=new d.d({concurrentUploads:4})}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](r.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-add-document"]],decls:3,vars:3,consts:[["value","item.value",4,"ngFor","ngForOf"],[3,"url","storage"],["value","item.value"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"nb-select"),c["\u0275\u0275template"](1,u,2,1,"nb-option",0),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](2,"ngx-file-upload",1)),2&e&&(c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngForOf",t.selectList),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("url","http://localhost:3000/upload")("storage",t.storage))},directives:[i.fb,o.n,s.g,i.bb],styles:[""]}),e})();function p(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"nb-list-item",11),c["\u0275\u0275elementStart"](1,"a",12),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"button",13),c["\u0275\u0275element"](4,"nb-icon",14),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275propertyInterpolate"]("href",e.url,c["\u0275\u0275sanitizeUrl"]),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e.name,"")}}function f(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"nb-list-item",11),c["\u0275\u0275elementStart"](1,"a",12),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"button",13),c["\u0275\u0275element"](4,"nb-icon",14),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275propertyInterpolate"]("href",e.url,c["\u0275\u0275sanitizeUrl"]),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e.name,"")}}const S=[{path:"",component:(()=>{class e{constructor(e){this.documentService=e,this.isAdd=!1}ngOnInit(){this.documentService.getDocuments().subscribe(e=>{this.documents=e})}get forClassroomDocuments(){return this.documents.filter(e=>e.for==a.a.Classroom)}get forAllDocuments(){return this.documents.filter(e=>e.for==a.a.All)}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](r.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-school-documents"]],decls:31,vars:4,consts:[[3,"showToggleButton","flipped"],[1,"d-flex","align-items-center"],[1,"ml-4"],["nbTooltip","Add Documents","nbTooltipStatus","primary","nbButton","","ghost","",3,"click"],["icon","file-add",2,"color","#aebcd8"],["fullWidth",""],["tabTitle","For Classrooms"],["class","contact",4,"ngFor","ngForOf"],["tabTitle","For All"],["nbTooltip","Back","nbButton","","ghost","",3,"click"],["icon","arrow-back-outline",2,"color","white"],[1,"contact"],["target","_blank",3,"href"],["nbTooltip","Remove Documents","nbTooltipStatus","primary","nbButton","","ghost",""],["icon","file-remove",2,"color","#aebcd8"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"nb-flip-card",0),c["\u0275\u0275elementStart"](1,"nb-card-front"),c["\u0275\u0275elementStart"](2,"nb-card"),c["\u0275\u0275elementStart"](3,"nb-card-header"),c["\u0275\u0275elementStart"](4,"div",1),c["\u0275\u0275text"](5," School Documents "),c["\u0275\u0275elementStart"](6,"div",2),c["\u0275\u0275elementStart"](7,"button",3),c["\u0275\u0275listener"]("click",(function(){return t.isAdd=!0})),c["\u0275\u0275element"](8,"nb-icon",4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"nb-card-body"),c["\u0275\u0275elementStart"](10,"nb-tabset",5),c["\u0275\u0275elementStart"](11,"nb-tab",6),c["\u0275\u0275elementStart"](12,"nb-card"),c["\u0275\u0275elementStart"](13,"nb-card-body"),c["\u0275\u0275elementStart"](14,"nb-list"),c["\u0275\u0275template"](15,p,5,2,"nb-list-item",7),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](16,"nb-tab",8),c["\u0275\u0275elementStart"](17,"nb-card"),c["\u0275\u0275elementStart"](18,"nb-card-body"),c["\u0275\u0275elementStart"](19,"nb-list"),c["\u0275\u0275template"](20,f,5,2,"nb-list-item",7),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](21,"nb-card-back"),c["\u0275\u0275elementStart"](22,"nb-card"),c["\u0275\u0275elementStart"](23,"nb-card-header"),c["\u0275\u0275elementStart"](24,"div",1),c["\u0275\u0275elementStart"](25,"button",9),c["\u0275\u0275listener"]("click",(function(){return t.isAdd=!1})),c["\u0275\u0275elementStart"](26,"nb-icon",10),c["\u0275\u0275text"](27,"arrow-back-outline"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](28," Add School Documents "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](29,"nb-card-body"),c["\u0275\u0275element"](30,"ngx-add-document"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("showToggleButton",!1)("flipped",t.isAdd),c["\u0275\u0275advance"](15),c["\u0275\u0275property"]("ngForOf",t.forClassroomDocuments),c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("ngForOf",t.forAllDocuments))},directives:[i.G,i.v,i.t,i.w,i.p,i.yb,i.I,i.s,i.rb,i.qb,i.U,o.n,i.r,b,i.V],styles:[".contact[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.contact[_ngcontent-%COMP%]:first-child{border-top:none}"]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.g.forChild(S)],l.g]}),e})();var h=n("kvL/");let E=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,g,i.x,i.W,i.gb,i.K,i.q,i.zb,i.sb,s.a,s.d,s.b,d.a,h.c,s.c]]}),e})()}}]);
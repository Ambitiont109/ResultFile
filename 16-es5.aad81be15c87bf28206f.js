!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{DL5o:function(n,o,s){"use strict";s.r(o),s.d(o,"ParentListModule",(function(){return m}));var i,r,c,a=s("ofXK"),l=s("tyNb"),u=(s("CWoy"),s("vqVJ")),p=s("RS3s"),d=s("TUgJ"),f=s("fXoL"),h=s("aceb"),g=[{path:"",component:(i=function(){function n(t,o,s){e(this,n),this.userService=t,this.router=o,this.route=s,this.parents=[],this.settings={actions:{add:!1,edit:!1,delete:!1,position:"right"},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},hideSubHeader:!0,hideHeader:!0,pager:{perPage:4},columns:{picture:{type:"custom",renderComponent:d.a}}},this.parent_src=new p.a}var o,s,i;return o=n,(s=[{key:"ngOnChanges",value:function(e){console.log(e),console.log(this._listType),console.log(this.purpose)}},{key:"ngOnInit",value:function(){var e=this;console.log("userId is:",this._listType),this.userService.getParents().subscribe((function(t){e.parents=t,e.parent_src.load(e.parents)})),this.route.paramMap.subscribe((function(t){e.purpose=t.get("purpose")}))}},{key:"onRowSelect",value:function(e){var t=e.data;console.log(this._listType),console.log(this.purpose),("pictures"==this.purpose||"Appointment"==this._listType)&&this.router.navigate([t.id],{relativeTo:this.route}),console.log(t)}}])&&t(o.prototype,s),i&&t(o,i),n}(),i.\u0275fac=function(e){return new(e||i)(f["\u0275\u0275directiveInject"](u.a),f["\u0275\u0275directiveInject"](l.c),f["\u0275\u0275directiveInject"](l.a))},i.\u0275cmp=f["\u0275\u0275defineComponent"]({type:i,selectors:[["ngx-parent-list"]],inputs:{_listType:["listType","_listType"]},features:[f["\u0275\u0275NgOnChangesFeature"]],decls:5,vars:2,consts:[[3,"settings","source","userRowSelect"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"nb-card"),f["\u0275\u0275elementStart"](1,"nb-card-header"),f["\u0275\u0275text"](2," Parents "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](3,"nb-card-body"),f["\u0275\u0275elementStart"](4,"ng2-smart-table",0),f["\u0275\u0275listener"]("userRowSelect",(function(e){return t.onRowSelect(e)})),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e&&(f["\u0275\u0275advance"](4),f["\u0275\u0275property"]("settings",t.settings)("source",t.parent_src))},directives:[h.t,h.w,h.s,p.b],styles:[""]}),i)}],b=((c=function t(){e(this,t)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:c}),c.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||c)},imports:[[l.g.forChild(g)],l.g]}),c),m=((r=function t(){e(this,t)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:r}),r.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||r)},imports:[[a.c,b,p.c,h.W,h.sb,h.x,h.K,h.q,h.Bb,h.zb]]}),r)}}])}();
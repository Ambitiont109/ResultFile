(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+R3+":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("AytR"),o=n("LRne"),s=n("GHal"),i=n("fXoL"),a=n("tk/3");let c=(()=>{class e{constructor(e){this.httpClient=e,this.api_url=r.a.API_URL}addFood(e){return s.f.push(e),Object(o.a)("suc")}updateFood(e){return Object(o.a)("suc")}deleteFoodFromMenu(e,t,n){return Object(o.a)("suc")}getAllMenuInformation(){return Object(o.a)(s.g)}addFoodToMenu(e,t,n){return Object(o.a)(s.g)}getAllFoods(){return Object(o.a)(s.f)}getFoodById(e){return Object(o.a)(s.f[e])}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](a.b))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"7njR":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("AytR"),o=n("LRne"),s=n("GHal"),i=n("3Ksp"),a=n("fXoL");let c=(()=>{class e{constructor(){this.api_url=r.a.API_URL}createBlankAppointment(){return{id:-1,title:"",color:i.c.Red,parent:void 0,teacher:void 0,start:void 0,end:void 0,status:i.a.PENDING,child:void 0,type:i.b.FREE}}getEventsByUserId(e){return Object(o.a)(s.a)}getEventsOfCurrentUser(){return Object(o.a)(s.a)}patchEvent(e,t){return Object.assign(e,t),Object(o.a)("")}getEventById(e){return Object(o.a)(s.a[e])}deleteEventById(e){return s.a.splice(e,1),Object(o.a)("success")}StartPreset(e){return e.id=s.j.length,e.isClosed=!1,s.j.push(e),console.log(s.j),Object(o.a)("success")}GetCurrentPreset(){return console.log(s.j),Object(o.a)(s.j[s.j.length-1])}GetPresetAppointmentsByUserIdList(e){return Object(o.a)([])}GetPresetAppointments(e,t){return Object(o.a)([])}GetPresetAppointmentsFromAppointment(e){let t=s.a.filter(e=>e.type==i.b.PRESET);return Object(o.a)(t)}CloseCurrentPreset(e){return s.j[e].isClosed=!0,Object(o.a)("success")}UpdateEventById(e){let t=s.a.find(t=>t.id==e.id);return t&&Object.assign(t,e),Object(o.a)(t)}CreateEvent(e){if(e.type==i.b.PRESET)e.color=i.c.Preset;else{let t=[];for(let e in i.c)console.log(e),i.c[e]!=i.c.Preset&&t.push(i.c[e]);e.color=t[Math.floor(Math.random()*t.length)]}return e.id=s.a.length,s.a.push(e),Object(o.a)("success")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},B3Wl:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("AytR"),o=n("LRne"),s=n("GHal"),i=n("fXoL"),a=n("tk/3");let c=(()=>{class e{constructor(e){this.httpClient=e,this.api_url=r.a.API_URL}getDocuments(){return Object(o.a)(s.e)}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](a.b))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},CHuZ:function(e,t,n){"use strict";function r(e,t){let n=e.get(t);return n.invalid&&(n.dirty||n.touched)}n.d(t,"a",(function(){return r}))},EZvT:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("AytR"),o=n("LRne"),s=n("GHal"),i=n("fXoL"),a=n("tk/3");let c=(()=>{class e{constructor(e){this.httpClient=e,this.api_url=r.a.API_URL}getPicturesOfChild(e){let t={child:void 0,pictures:[]};return t.child=s.c.find(t=>t.id==e),t.pictures=s.i,Object(o.a)(t)}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](a.b))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},RbqP:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("fXoL"),o=n("vqVJ"),s=n("RS3s"),i=n("3Pt+"),a=n("aceb"),c=n("ofXK");function l(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",3),r["\u0275\u0275element"](1,"nb-icon",4),r["\u0275\u0275elementEnd"]())}let u=(()=>{class e{constructor(){}ngOnInit(){}onClick(){this.rowData.checked=!this.rowData.checked||!this.rowData.checked}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-cell-avatar-with-check-box"]],inputs:{value:"value",rowData:"rowData"},decls:3,vars:3,consts:[[2,"position","relative"],["size","large",3,"picture","name","click"],["style","position:absolute; right: 0px; top: 0px;z-index:99;",4,"ngIf"],[2,"position","absolute","right","0px","top","0px","z-index","99"],["icon","checkmark-outline"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"nb-user",1),r["\u0275\u0275listener"]("click",(function(){return t.onClick()})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](2,l,2,0,"div",2),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("picture",t.rowData.picture)("name",t.rowData.first_name+" "+t.rowData.last_name),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.rowData.checked))},directives:[a.Ab,c.o,a.I],styles:[""]}),e})();const d=function(e){return{disabled:e}};function p(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"nb-user",4),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const t=r["\u0275\u0275nextContext"](2),n=r["\u0275\u0275reference"](4);return t.open(n)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementContainerEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngClass",r["\u0275\u0275pureFunction1"](3,d,e.isDisabled))("picture",e.selectedUsers[0].picture)("name",e.selectedUsers[0].first_name+" "+e.selectedUsers[0].last_name)}}function h(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"nb-user",7),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const t=r["\u0275\u0275nextContext"](3),n=r["\u0275\u0275reference"](4);return t.open(n)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementContainerEnd"]()}if(2&e){const e=t.$implicit,n=r["\u0275\u0275nextContext"](3);r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngClass",r["\u0275\u0275pureFunction1"](3,d,n.isDisabled))("picture",e.picture)("name",e.first_name+" "+e.last_name)}}function g(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",5),r["\u0275\u0275template"](1,h,2,5,"ng-container",6),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",e.selectedUsers)}}function m(e,t){if(1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275template"](1,p,2,5,"ng-container",0),r["\u0275\u0275template"](2,g,2,1,"ng-template",null,3,r["\u0275\u0275templateRefExtractor"]),r["\u0275\u0275elementContainerEnd"]()),2&e){const e=r["\u0275\u0275reference"](3),t=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",!t.isMulti)("ngIfElse",e)}}function f(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"nb-user",4),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const t=r["\u0275\u0275nextContext"](),n=r["\u0275\u0275reference"](4);return t.open(n)})),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("ngClass",r["\u0275\u0275pureFunction1"](3,d,e.isDisabled))("picture",e.unknown_picture)("name","Select User")}}function b(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"nb-card"),r["\u0275\u0275elementStart"](1,"nb-card-header"),r["\u0275\u0275text"](2),r["\u0275\u0275elementStart"](3,"button",8),r["\u0275\u0275listener"]("click",(function(){return t.dialogRef.close()})),r["\u0275\u0275elementStart"](4,"nb-icon",9),r["\u0275\u0275text"](5,"arrow-back-outline"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"nb-card-body",10),r["\u0275\u0275elementStart"](7,"div",11),r["\u0275\u0275elementStart"](8,"div",12),r["\u0275\u0275elementStart"](9,"input",13),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().searchWord=t}))("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().onSearchWordChange(t)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"button",14),r["\u0275\u0275element"](11,"nb-icon",15),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"ng2-smart-table",16),r["\u0275\u0275listener"]("userRowSelect",(function(n){r["\u0275\u0275restoreView"](e);const o=t.dialogRef,s=r["\u0275\u0275nextContext"]();return s.onRowSelect(n),s.handleClose(o)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",e.title," "),r["\u0275\u0275advance"](7),r["\u0275\u0275property"]("ngModel",e.searchWord),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("settings",e.settings)("source",e.users_src)}}let v=(()=>{class e{constructor(e){this.dialogService=e,this.unknown_picture=o.b,this.settings={actions:{add:!1,edit:!1,delete:!1,position:"right"},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},hideSubHeader:!0,hideHeader:!0,pager:{perPage:4},columns:{picture:{type:"custom",renderComponent:u}}},this.onChange=e=>{},this.onTouched=()=>{},this.title="Select User",this.isDisabled=!1,this.isMulti=!1,this.selectedUsers=[]}ngOnInit(){this.users_src=new s.a(this.users),this.isDisabled=this.disabled,this.initValue&&this.setSelectedUserData(this.initValue)}onUserClick(){}onRowSelect(e){if(this.isMulti){let t=this.selectedUsers.findIndex(t=>t.id==e.data.id);-1!=t?this.selectedUsers.splice(t,1):this.selectedUsers.push(e.data),this.onChange(this.selectedUsers)}else this.selectedUsers.length>0?(this.selectedUsers.forEach(e=>{e.checked&&(e.checked=!1)}),this.selectedUsers[0]=e.data):this.selectedUsers.push(e.data),this.onChange(this.selectedUsers[0]);this.onTouched()}handleClose(e){this.isMulti||e.close()}onSearchWordChange(e){this.searchWord=e,this.searchWord?this.users_src.setFilter([{field:"first_name",search:this.searchWord},{field:"last_name",search:this.searchWord}],!1):this.users_src.setFilter(null)}open(e){this.isDisabled||(this.dialogService.open(e),this.onTouched())}setSelectedUserData(e){this.isMulti?this.selectedUsers=e:e&&(this.selectedUsers=[e])}writeValue(e){this.setSelectedUserData(e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.isDisabled=e}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](a.F))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-user-select"]],inputs:{users:"users",initValue:["value","initValue"],title:"title",disabled:"disabled",isMulti:["multi","isMulti"]},features:[r["\u0275\u0275ProvidersFeature"]([{provide:i.p,useExisting:Object(r.forwardRef)(()=>e),multi:!0}])],decls:5,vars:2,consts:[[4,"ngIf","ngIfElse"],["unknown",""],["dialog",""],["multi",""],["size","large",3,"ngClass","picture","name","click"],[1,"d-flex","align-items-center","flex-wrap"],[4,"ngFor","ngForOf"],["size","large",1,"mr-2",3,"ngClass","picture","name","click"],["nbTooltip","Back","nbButton","","ghost","",2,"float","right",3,"click"],["icon","close-outline",2,"color","white"],[2,"min-height","300px"],[1,"search-box"],[2,"display","flex"],["type","text","nbInput","","fullWidth","","placeholder","Search by name",3,"ngModel","ngModelChange"],["type","button","nbButton","","status","primary"],["icon","search-outline",1,"action-icon"],[3,"settings","source","userRowSelect"]],template:function(e,t){if(1&e&&(r["\u0275\u0275template"](0,m,4,2,"ng-container",0),r["\u0275\u0275template"](1,f,1,5,"ng-template",null,1,r["\u0275\u0275templateRefExtractor"]),r["\u0275\u0275template"](3,b,13,4,"ng-template",null,2,r["\u0275\u0275templateRefExtractor"])),2&e){const e=r["\u0275\u0275reference"](2);r["\u0275\u0275property"]("ngIf",(null==t.selectedUsers?null:t.selectedUsers.length)>0)("ngIfElse",e)}},directives:[c.o,a.Ab,c.m,c.n,a.t,a.w,a.p,a.yb,a.I,a.s,a.L,i.c,i.r,i.u,s.b],styles:["nb-user[_ngcontent-%COMP%]:not(.disabled){cursor:pointer}"]}),e})()},Rqib:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("ofXK"),o=n("RS3s"),s=n("3Pt+"),i=n("aceb"),a=n("fXoL");let c=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,s.l,i.M,i.K,i.q,i.Bb,o.c]]}),e})()},TUgJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("fXoL"),o=n("aceb");let s=(()=>{class e{constructor(){}ngOnInit(){console.log(this.rowData)}onClick(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-cell-avatar"]],inputs:{value:"value",rowData:"rowData"},decls:2,vars:2,consts:[[2,"position","relative"],["size","large",3,"picture","name","click"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"nb-user",1),r["\u0275\u0275listener"]("click",(function(){return t.onClick()})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("picture",t.rowData.picture)("name",t.rowData.first_name+" "+t.rowData.last_name))},directives:[o.Ab],styles:[""]}),e})()},XXKh:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("GHal"),o=n("LRne"),s=n("CWoy"),i=n("fXoL");let a=(()=>{class e{constructor(){}getAdminHeaderMessage(){return Object(o.a)(r.h)}getMessagesByUser(e){return Object(o.a)(r.h)}getMessageLinked(e){return Object(o.a)(r.d)}sendMessage(e,t,n){}getSenderName(e){switch(e.senderRole){case s.a.Admin:return"Admin Center";case s.a.Parent:return e.child.first_name+" "+e.child.last_name;case s.a.Teacher:return e.user.first_name+" "+e.user.last_name}}getReceiverName(e){return e.senderRole!=s.a.Parent?e.child.first_name+" "+e.child.last_name:e.user.role==s.a.Admin?"Admin Center":e.user.role==s.a.Teacher?e.user.first_name+" "+e.user.last_name:void 0}getSenderPhotoUrl(e){return e.senderRole==s.a.Parent?e.child.photo:e.user.picture}getReceiverPhotoUrl(e){return e.senderRole==s.a.Parent?e.user.picture:e.child.photo}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},dEvH:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("fXoL"),o=n("RS3s"),s=n("aceb");let i=(()=>{class e{constructor(){}ngOnInit(){console.log(this.rowData)}onClick(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-child-cell"]],inputs:{value:"value",rowData:"rowData"},decls:2,vars:2,consts:[[2,"position","relative"],["size","large",3,"picture","name","click"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"nb-user",1),r["\u0275\u0275listener"]("click",(function(){return t.onClick()})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("picture",t.rowData.photo)("name",t.rowData.first_name+" "+t.rowData.last_name))},directives:[s.Ab],styles:[""]}),e})();var a=n("3Pt+");let c=(()=>{class e{constructor(){this.onSelectEvent=new r.EventEmitter,this.parents=[],this.settings={actions:{add:!1,edit:!1,delete:!1,position:"right"},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},hideSubHeader:!0,hideHeader:!0,pager:{perPage:4},columns:{picture:{type:"custom",renderComponent:i}}},this.parent_src=new o.a}ngOnInit(){console.log(this.data),this.data&&(this.parents=this.data,this.parent_src.load(this.parents))}onSearchWordChange(e){this.searchWord=e,this.searchWord?this.parent_src.setFilter([{field:"first_name",search:this.searchWord},{field:"last_name",search:this.searchWord}],!1):this.parent_src.setFilter(null)}onRowSelect(e){let t=e.data;console.log(t),this.onSelectEvent.emit(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-child-list"]],inputs:{data:"data"},outputs:{onSelectEvent:"onselect"},decls:6,vars:3,consts:[[1,"search-box","mb-2"],[2,"display","flex","justify-content","flex-end"],["type","text","nbInput","","placeholder","Search by name",3,"ngModel","ngModelChange"],["type","button","nbButton","","status","primary"],["icon","search-outline",1,"action-icon"],[3,"settings","source","userRowSelect"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"input",2),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.searchWord=e}))("ngModelChange",(function(e){return t.onSearchWordChange(e)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"button",3),r["\u0275\u0275element"](4,"nb-icon",4),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"ng2-smart-table",5),r["\u0275\u0275listener"]("userRowSelect",(function(e){return t.onRowSelect(e)})),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngModel",t.searchWord),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("settings",t.settings)("source",t.parent_src))},directives:[s.L,a.c,a.r,a.u,s.p,s.I,o.b],styles:[""]}),e})()},fUYe:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n("fXoL"),o=n("/aQt"),s=n("vqVJ"),i=n("CWoy"),a=n("aceb"),c=n("ofXK"),l=n("3Pt+"),u=n("LRne");const d=["autoInput"];function p(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",7),r["\u0275\u0275elementStart"](1,"div",8),r["\u0275\u0275text"](2),r["\u0275\u0275elementStart"](3,"nb-icon",9),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const n=t.$implicit;return r["\u0275\u0275nextContext"]().onRemove(n)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",e.email," ")}}function h(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"nb-option",10),r["\u0275\u0275element"](1,"nb-user",11),r["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;r["\u0275\u0275property"]("value",e),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("name",e.first_name+" "+e.last_name)("title",e.email)("picture",e.picture)}}let g=(()=>{class e{constructor(e){this.userService=e,this.multi=!0,this.usertype=i.a.Parent}ngOnInit(){this.selectedUser=[],this.options=[],this.usertype==i.a.Parent&&(this.filteredOptions$=this.userService.getParents(),this.userService.getParents().subscribe(e=>{this.users=e})),this.usertype==i.a.Teacher&&(this.filteredOptions$=this.userService.getTeachers(),this.userService.getTeachers().subscribe(e=>{this.users=e}))}filter(e){const t=e.toLowerCase();return this.options.filter(e=>e.toLowerCase().includes(t))}getFilteredOptions(e){let t=[],n=e.toLowerCase();return t=this.users.filter(e=>!(!e.first_name.toLowerCase().includes(n)&&!e.last_name.toLowerCase().includes(n))),Object(u.a)(t)}onSearchKeyChange(){this.filteredOptions$=this.getFilteredOptions(this.input.nativeElement.value)}onSelectionChange(e){this.multi?(this.selectedUser.findIndex(t=>t.id==e.id)>=0||this.selectedUser.push(e),this.emitChanges(this.selectedUser)):(this.selectedUser=[e],this.emitChanges(e)),this.input.nativeElement.value=""}emitChanges(e){this.onChange&&this.onChange(e),this.onTouched&&this.onTouched()}onRemove(e){let t=this.selectedUser.findIndex(t=>t.id==e.id);console.log(this.selectedUser),console.log(t),this.selectedUser.splice(t,1)}writeValue(e){this.selectedUser=this.multi?e:e?[e]:[]}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-tag-input"]],viewQuery:function(e,t){var n;1&e&&r["\u0275\u0275viewQuery"](d,!0),2&e&&r["\u0275\u0275queryRefresh"](n=r["\u0275\u0275loadQuery"]())&&(t.input=n.first)},inputs:{multi:"multi",usertype:"usertype"},decls:8,vars:5,consts:[[1,"d-flex","flex-wrap","input-style","align-items-center"],["class","tag mr-2",4,"ngFor","ngForOf"],["nbInput","","type","text",1,"flex-grow-1",3,"nbAutocomplete","input"],["autoInput",""],[3,"selectedChange"],["auto",""],[3,"value",4,"ngFor","ngForOf"],[1,"tag","mr-2"],[1,"tag-content"],["icon","close-outline",3,"click"],[3,"value"],["size","medium",3,"name","title","picture"]],template:function(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275template"](1,p,4,1,"div",1),r["\u0275\u0275elementStart"](2,"input",2,3),r["\u0275\u0275listener"]("input",(function(){return t.onSearchKeyChange()})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"nb-autocomplete",4,5),r["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectionChange(e)})),r["\u0275\u0275template"](6,h,2,4,"nb-option",6),r["\u0275\u0275pipe"](7,"async"),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275reference"](5);r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",t.selectedUser),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("nbAutocomplete",e),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngForOf",r["\u0275\u0275pipeBind1"](7,3,t.filteredOptions$))}},directives:[c.n,a.L,a.l,a.k,a.I,a.bb,a.Ab],pipes:[c.b],styles:["::-webkit-scrollbar{width:.3125rem;height:.3125rem}  ::-webkit-scrollbar-thumb{background:#101426;cursor:pointer;border-radius:.15625rem}  ::-webkit-scrollbar-track{background:#192038}[_nghost-%COMP%]   .input-style[_ngcontent-%COMP%]{background-color:#192038;color:#fff;border-radius:.25rem;border:1px solid #101426}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{border:none;background:transparent;max-width:none!important}[_nghost-%COMP%]   .flex-grow-1[_ngcontent-%COMP%]{flex-grow:1}[_nghost-%COMP%]   .tag[_ngcontent-%COMP%]{border:1px solid #fff;border-radius:10px;margin-left:5px;margin-top:5px}[_nghost-%COMP%]   .tag[_ngcontent-%COMP%]   .tag-content[_ngcontent-%COMP%]{padding-left:3px;padding-bottom:3px}[_nghost-%COMP%]   .tag[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{cursor:pointer}"]}),e})();var m=n("kvL/"),f=n("EwH2");function b(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"div",8),r["\u0275\u0275elementStart"](2,"label",9),r["\u0275\u0275text"](3," From:"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](4,"input",10),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"div",8),r["\u0275\u0275elementStart"](6,"label",9),r["\u0275\u0275text"](7," To:"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"ngx-tag-input",11),r["\u0275\u0275listener"]("ngModelChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().to_contacts=t})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementContainerEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngModel",e.from_string),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngModel",e.to_contacts)}}function v(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"ngx-dropzone-image-preview",17),r["\u0275\u0275listener"]("removed",(function(){r["\u0275\u0275restoreView"](e);const n=t.$implicit;return r["\u0275\u0275nextContext"](2).onRemove(n)})),r["\u0275\u0275elementStart"](1,"ngx-dropzone-label"),r["\u0275\u0275elementStart"](2,"span",18),r["\u0275\u0275text"](3),r["\u0275\u0275pipe"](4,"stateToString"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](5,"ngx-file-upload-ui--progressbar-circle",19),r["\u0275\u0275elementStart"](6,"span",9),r["\u0275\u0275text"](7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;r["\u0275\u0275property"]("file",e.data.raw)("removable",!0),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate2"](" ",e.data.state," State: ",r["\u0275\u0275pipeBind1"](4,7,e.data.state)," "),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("progress",e.data.progress)("parts",12),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",e.data.name," ")}}function C(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",12),r["\u0275\u0275elementStart"](1,"button",13),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().isAttached=!1})),r["\u0275\u0275element"](2,"nb-icon",14),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"ngx-dropzone",15),r["\u0275\u0275listener"]("change",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().onSelect(t)})),r["\u0275\u0275elementStart"](4,"ngx-dropzone-label"),r["\u0275\u0275text"](5,"Drop or Browse"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](6,v,8,9,"ngx-dropzone-image-preview",16),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("accept","image/*"),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngForOf",e.uploads)}}let x=(()=>{class e{constructor(e,t){this.uploadFactory=e,this.userService=t,this.onSendEvent=new r.EventEmitter,this.uploads=[],this.storage=new o.d({concurrentUploads:2,autoStart:!0,removeCompleted:1e3}),this.uploadOptions={url:"http://localhost:3000/upload"},this.isReplyMode=!1}ngOnInit(){this.isAttached=!1,this.storage.change().subscribe(e=>{this.uploads=e}),this.userService.getParents().subscribe(e=>{this.users=e}),this.from_string=""}send(){this.onSendEvent.emit({to_contacts:this.to_contacts,content:this.content,isAttached:this.isAttached})}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](o.b),r["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-reply"]],inputs:{isReplyMode:"isReplyMode",from_string:"from_string"},outputs:{onSendEvent:"onsend"},decls:10,vars:3,consts:[[4,"ngIf"],["nbInput","","rows","5","fullWidth","","placeholder","Write your Reply",3,"ngModel","ngModelChange"],["style","position: relative;",4,"ngIf"],[1,"row","justify-content-end"],["nbTooltip","AttachPicture","nbButton","","ghost","",3,"click"],["icon","attach-outline",2,"color","white"],["nbTooltip","Send","nbButton","","ghost","",3,"click"],["icon","paper-plane-outline",2,"color","white"],[1,"form-group"],[1,"label"],["nbInput","","type","text","fullWidth","","disabled","",3,"ngModel"],[3,"ngModel","ngModelChange"],[2,"position","relative"],["nbButton","","ghost","",2,"position","absolute","right","5px","top","5px",3,"click"],["icon","close-outline"],[3,"accept","change"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file","removable","removed",4,"ngFor","ngForOf"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file","removable","removed"],[1,"state"],[3,"progress","parts"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"nb-card"),r["\u0275\u0275elementStart"](1,"nb-card-body"),r["\u0275\u0275template"](2,b,9,2,"ng-container",0),r["\u0275\u0275elementStart"](3,"textarea",1),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.content=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](4,C,7,2,"div",2),r["\u0275\u0275elementStart"](5,"div",3),r["\u0275\u0275elementStart"](6,"button",4),r["\u0275\u0275listener"]("click",(function(){return t.isAttached=!t.isAttached})),r["\u0275\u0275element"](7,"nb-icon",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"button",6),r["\u0275\u0275listener"]("click",(function(){return t.send()})),r["\u0275\u0275element"](9,"nb-icon",7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",!t.isReplyMode),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngModel",t.content),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.isAttached))},directives:[a.t,a.s,c.o,a.L,l.c,l.r,l.u,a.p,a.yb,a.I,g,m.a,m.d,c.n,m.b,f.f],pipes:[f.h],styles:["[_nghost-%COMP%]   ngx-dropzone[_ngcontent-%COMP%]{border-radius:0;padding:.2rem .5rem .2rem 0;flex-wrap:wrap;align-items:baseline;background:#192038;cursor:pointer;color:#717386;border:2px dashed #101426}[_nghost-%COMP%]   ngx-dropzone-image-preview[_ngcontent-%COMP%]{height:100%;position:relative;margin:0 .5rem 0 0}[_nghost-%COMP%]   ngx-dropzone-image-preview[_ngcontent-%COMP%]     img{min-width:100px}[_nghost-%COMP%]   ngx-dropzone-label[_ngcontent-%COMP%]{top:0;right:0;left:0;bottom:0;display:flex;flex-direction:column;justify-content:space-between}[_nghost-%COMP%]   ngx-dropzone-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;padding:0 .3rem;text-align:left}[_nghost-%COMP%]   ngx-dropzone-label[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}[_nghost-%COMP%]   ngx-file-upload-ui--progressbar-circle[_ngcontent-%COMP%]     svg{opacity:.8;height:72px;width:72px}[_nghost-%COMP%]   ngx-file-upload-ui--progressbar-circle[_ngcontent-%COMP%]     svg circle{stroke:#807f7f;stroke-width:.5rem}[_nghost-%COMP%]   ngx-file-upload-ui--progressbar-circle[_ngcontent-%COMP%]     svg circle.progress{stroke-width:.5rem;stroke:#fff}[_nghost-%COMP%]   ngx-file-upload-ui--progressbar-circle[_ngcontent-%COMP%]     span{font-size:.7rem;color:#fff}[_nghost-%COMP%]     ngx-dropzone-remove-badge{z-index:10}[_nghost-%COMP%]     tag-input input{background-color:#192038;border-color:#101426;color:#fff}[_nghost-%COMP%]   tag-input[_ngcontent-%COMP%]{background-color:#192038;color:#fff;border-radius:.25rem;border:1px solid #101426}[_nghost-%COMP%]   tag-input[_ngcontent-%COMP%]     .ng2-tag-input{border:none}  ng2-menu-item{height:100px!important}"]}),e})()},gMuu:function(e,t,n){"use strict";function r(e){for(var t="",n="!@#$%~^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}n.d(t,"a",(function(){return r}))},kiHB:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r=n("wd/R");function o(e,t){return n=>{const r=n.controls[t];r.errors&&!r.errors.mustMatch||r.setErrors(n.controls[e].value!==r.value?{mustMatch:!0}:null)}}function s(e,t){return n=>{const o=n.controls[t];o.errors&&!o.errors.mustMatch||(r(n.controls[e].value).isBefore(r(o.value))?o.setErrors(null):o.setErrors({mustAfter:!0}))}}}}]);
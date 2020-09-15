!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{lJPH:function(t,o,i){"use strict";i.r(o),i.d(o,"MenuOfYearModule",(function(){return V}));var r,c=i("ofXK"),a=i("tyNb"),d=i("i0CP"),l=i("+R3+"),s=i("cSNu"),u=i("RS3s"),m=i("fXoL"),f=function(e){return{"background-image":e}},p=((r=function(){function t(){e(this,t)}return n(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=m["\u0275\u0275defineComponent"]({type:r,selectors:[["ngx-food"]],inputs:{food:"food"},decls:8,vars:5,consts:[[1,"row","item"],[1,"round-img","col-sm-3"],[1,"content",3,"ngStyle"],[1,"col-sm-8","d-flex","flex-column","justify-content-center"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"div",1),m["\u0275\u0275element"](2,"div",2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"div",3),m["\u0275\u0275elementStart"](4,"div"),m["\u0275\u0275text"](5),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"div"),m["\u0275\u0275text"](7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngStyle",m["\u0275\u0275pureFunction1"](3,f,"url("+t.food.picture+")")),m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate1"](" ",t.food.name," "),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"](" ",t.food.description," "))},directives:[c.p],styles:[".item[_ngcontent-%COMP%]{border-radius:5px;border:1px solid #151a30;padding:10px 0}.round-img[_ngcontent-%COMP%]{max-width:250px;min-width:150px}.round-img[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;position:relative;padding-top:100%;background-size:cover;background-repeat:no-repeat;border-radius:10px;box-shadow:0 0 5px .5px #fff}"]}),r),v=i("aceb");function h(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",3),m["\u0275\u0275element"](1,"nb-icon",4),m["\u0275\u0275elementEnd"]())}var g,b,S=((g=function(){function t(){e(this,t)}return n(t,[{key:"ngOnInit",value:function(){console.log(this.rowData)}},{key:"onClick",value:function(){this.rowData.checked=!this.rowData.checked||!this.rowData.checked}}]),t}()).\u0275fac=function(e){return new(e||g)},g.\u0275cmp=m["\u0275\u0275defineComponent"]({type:g,selectors:[["ngx-food-cell"]],inputs:{value:"value",rowData:"rowData"},decls:3,vars:2,consts:[[2,"position","relative"],[3,"food","click"],["style","position:absolute; right: 0px; top: 0px;z-index:99;",4,"ngIf"],[2,"position","absolute","right","0px","top","0px","z-index","99"],["icon","checkmark-outline"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"ngx-food",1),m["\u0275\u0275listener"]("click",(function(){return t.onClick()})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](2,h,2,0,"div",2),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("food",t.rowData),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.rowData.checked))},directives:[p,c.o,v.I],styles:[""]}),g),y=i("3Pt+"),x=((b=function(){function t(n){e(this,t),this.dialogRef=n,this.settings={actions:{add:!1,edit:!1,delete:!1,position:"right"},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},hideSubHeader:!0,hideHeader:!0,pager:{perPage:4},columns:{picture:{type:"custom",renderComponent:S}}}}return n(t,[{key:"ngOnInit",value:function(){this.foods_src=new u.a(this.foods),this.selectedFoods=[]}},{key:"close",value:function(e){this.dialogRef.close(1==e?this.selectedFoods:[])}},{key:"onSearchWordChange",value:function(e){this.searchWord=e,this.searchWord?this.foods_src.setFilter([{field:"name",search:this.searchWord}],!1):this.foods_src.setFilter(null)}},{key:"onRowSelect",value:function(e){var t=this.selectedFoods.findIndex((function(t){return t.id==e.data.id}));-1!=t?this.selectedFoods.splice(t,1):this.selectedFoods.push(e.data)}}]),t}()).\u0275fac=function(e){return new(e||b)(m["\u0275\u0275directiveInject"](v.E))},b.\u0275cmp=m["\u0275\u0275defineComponent"]({type:b,selectors:[["ngx-food-list"]],inputs:{foods:"foods"},decls:16,vars:3,consts:[[1,"d-flex","align-items-center","justify-content-between"],["nbTooltip","Back","nbButton","","ghost","",3,"click"],["icon","arrow-back-outline",2,"color","white"],["nbButton","",3,"click"],[1,"search-box"],[2,"display","flex"],["type","text","nbInput","","fullWidth","","placeholder","Search by name",3,"ngModel","ngModelChange"],["type","button","nbButton","","status","primary"],["icon","search-outline",1,"action-icon"],[3,"settings","source","userRowSelect"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"nb-card"),m["\u0275\u0275elementStart"](1,"nb-card-header"),m["\u0275\u0275elementStart"](2,"div",0),m["\u0275\u0275elementStart"](3,"button",1),m["\u0275\u0275listener"]("click",(function(){return t.close(!1)})),m["\u0275\u0275elementStart"](4,"nb-icon",2),m["\u0275\u0275text"](5,"arrow-back-outline"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](6," Select Food "),m["\u0275\u0275elementStart"](7,"button",3),m["\u0275\u0275listener"]("click",(function(){return t.close(!0)})),m["\u0275\u0275text"](8,"Done"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](9,"nb-card-body"),m["\u0275\u0275elementStart"](10,"div",4),m["\u0275\u0275elementStart"](11,"div",5),m["\u0275\u0275elementStart"](12,"input",6),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.searchWord=e}))("ngModelChange",(function(e){return t.onSearchWordChange(e)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](13,"button",7),m["\u0275\u0275element"](14,"nb-icon",8),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](15,"ng2-smart-table",9),m["\u0275\u0275listener"]("userRowSelect",(function(e){return t.onRowSelect(e)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](12),m["\u0275\u0275property"]("ngModel",t.searchWord),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("settings",t.settings)("source",t.foods_src))},directives:[v.t,v.w,v.p,v.yb,v.I,v.s,v.L,y.c,y.r,y.u,u.b],styles:[""]}),b);function k(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"nb-option",7),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;m["\u0275\u0275property"]("value",n.key),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](n.value)}}function E(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"nb-option",7),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;m["\u0275\u0275property"]("value",n),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](n)}}function F(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"div",8),m["\u0275\u0275element"](1,"ngx-food",9),m["\u0275\u0275elementStart"](2,"div",10),m["\u0275\u0275elementStart"](3,"button",11),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](n);var e=t.$implicit;return m["\u0275\u0275nextContext"]().onFoodEdit(e)})),m["\u0275\u0275element"](4,"nb-icon",12),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"button",13),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](n);var e=t.$implicit;return m["\u0275\u0275nextContext"]().onFoodDelete(e)})),m["\u0275\u0275element"](6,"nb-icon",14),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var o=t.$implicit;m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("food",o)}}var w,C=((w=function(){function t(n,o,i,r,c){e(this,t),this.mealMenuService=n,this.dialogService=o,this.toastrService=i,this.route=r,this.router=c,this.weekNameList=d.b,this.dayNameList=d.a,this.selectedWeek=this.weekNameList[0].key,this.selectedDay=this.dayNameList[0],this.menuInformations=[]}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.mealMenuService.getAllMenuInformation().subscribe((function(t){e.menuInformations=t,e._updateSelectedFoods()}))}},{key:"_updateSelectedFoods",value:function(){var e=this;if(this.selectedDay&&this.selectedWeek){var t=this.menuInformations.find((function(t){return t.dayName==e.selectedDay&&t.weekName==e.selectedWeek}));this.selectedFoods=[],t&&(this.selectedFoods=t.foods)}}},{key:"onWeekChange",value:function(e){this.selectedWeek=e,this._updateSelectedFoods()}},{key:"onDayChange",value:function(e){this.selectedDay=e,this._updateSelectedFoods()}},{key:"onAddFood",value:function(){var e=this;this.mealMenuService.getAllFoods().subscribe((function(t){e.dialogService.open(x,{context:{foods:t}}).onClose.subscribe((function(t){console.log(t),e.mealMenuService.addFoodToMenu(e.selectedFoods,e.selectedWeek,e.selectedDay)}))}))}},{key:"onFoodDelete",value:function(e){var t=this;this.dialogService.open(s.a,{context:{title:"Are you sure?"}}).onClose.subscribe((function(n){1==n&&t.mealMenuService.deleteFoodFromMenu(e,t.selectedWeek,t.selectedDay).subscribe((function(n){t.toastrService.success("Food is removed from Menu","Success"),t.selectedFoods=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",o=e.findIndex((function(e){return e[n]==t[n]}));return-1!=o&&e.splice(o,1),e}(t.selectedFoods,e)}))}))}},{key:"onFoodEdit",value:function(e){this.router.navigate(["/menuofyear/food/edit/"+e.id])}}]),t}()).\u0275fac=function(e){return new(e||w)(m["\u0275\u0275directiveInject"](l.a),m["\u0275\u0275directiveInject"](v.F),m["\u0275\u0275directiveInject"](v.vb),m["\u0275\u0275directiveInject"](a.a),m["\u0275\u0275directiveInject"](a.c))},w.\u0275cmp=m["\u0275\u0275defineComponent"]({type:w,selectors:[["ngx-menu-of-year"]],decls:13,vars:5,consts:[[1,"d-flex","align-items-center"],[1,"mr-4",3,"selected","selectedChange"],[3,"value",4,"ngFor","ngForOf"],[3,"selected","selectedChange"],["nbButton","","nbTooltip","Add Food to this Menu",2,"float","right",3,"click"],[1,"mt-1"],["style","position: relative;",4,"ngFor","ngForOf"],[3,"value"],[2,"position","relative"],[3,"food"],[2,"position","absolute","right","0px","top","0px","z-index","99"],["nbButton","","ghost","","nbTooltip","Edit Food",3,"click"],["icon","edit-outline"],["nbButton","","ghost","","nbTooltip","Remove Food From this Menu",3,"click"],["icon","close-outline"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"nb-card"),m["\u0275\u0275elementStart"](1,"nb-card-header"),m["\u0275\u0275elementStart"](2,"div",0),m["\u0275\u0275text"](3," Menu of Year "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"nb-card-body"),m["\u0275\u0275elementStart"](5,"nb-select",1),m["\u0275\u0275listener"]("selectedChange",(function(e){return t.onWeekChange(e)})),m["\u0275\u0275template"](6,k,2,2,"nb-option",2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"nb-select",3),m["\u0275\u0275listener"]("selectedChange",(function(e){return t.onDayChange(e)})),m["\u0275\u0275template"](8,E,2,2,"nb-option",2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](9,"button",4),m["\u0275\u0275listener"]("click",(function(){return t.onAddFood()})),m["\u0275\u0275text"](10," Add Food "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"div",5),m["\u0275\u0275template"](12,F,7,1,"div",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("selected",t.selectedWeek),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",t.weekNameList),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("selected",t.selectedDay),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",t.dayNameList),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("ngForOf",t.selectedFoods))},directives:[v.t,v.w,v.s,v.fb,c.n,v.p,v.yb,v.bb,p,v.I],styles:["ngx-food[_ngcontent-%COMP%]     .item{margin-bottom:5px}"]}),w),I=i("CHuZ");function M(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span",19),m["\u0275\u0275text"](1,"required"),m["\u0275\u0275elementEnd"]())}function O(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div"),m["\u0275\u0275template"](1,M,2,0,"span",18),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",n.foodForm.get("picture").errors.required)}}function _(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span",19),m["\u0275\u0275text"](1,"required"),m["\u0275\u0275elementEnd"]())}function j(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div"),m["\u0275\u0275template"](1,_,2,0,"span",18),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",n.foodForm.get("name").errors.required)}}var D,P,W,N,B,A=function(e){return{"background-image":e}},L=((P=function(){function t(n){e(this,t),this.fb=n,this.foodSubmitEvent=new m.EventEmitter,this.isInvalidControl=I.a,this.foodForm=this.fb.group({picture:["",y.A.required],name:["",y.A.required],description:["",y.A.nullValidator]})}return n(t,[{key:"ngOnInit",value:function(){this.init&&this.foodForm.reset(this.init)}},{key:"onSubmit",value:function(){this.foodForm.markAllAsTouched(),this.foodForm.valid&&this.foodSubmitEvent.emit(this.foodForm.value)}},{key:"changeListener",value:function(e){var t=this;if(console.log(e),e.target.files&&e.target.files[0]){var n=new FileReader;n.onload=function(e){t.foodForm.get("picture").setValue(e.target.result)},n.readAsDataURL(e.target.files[0])}}},{key:"picture",get:function(){return this.foodForm.get("picture").value}}]),t}()).\u0275fac=function(e){return new(e||P)(m["\u0275\u0275directiveInject"](y.e))},P.\u0275cmp=m["\u0275\u0275defineComponent"]({type:P,selectors:[["ngx-food-form"]],inputs:{data:"data",init:"init"},outputs:{foodSubmitEvent:"onFoodSubmit"},decls:25,vars:7,consts:[[3,"formGroup","ngSubmit"],[1,"row","align-items-center"],[1,"col-sm-6"],[1,"form-group","row","justify-content-center"],[1,"col","round-img"],[1,"content",3,"ngStyle"],[1,"select-file"],[2,"position","relative","height","100%"],["icon","edit-outline",2,"color","white"],["type","file","accept","image/*",1,"file-input",3,"change"],[4,"ngIf"],[1,"form-group"],[1,"label"],["nbInput","","type","text","placeholder","Name","fullWidth","","formControlName","name",3,"status"],["nbInput","","rows","5","fullWidth","","placeholder","description","formControlName","description"],[1,"row"],[1,"col",2,"text-align","right"],["nbInput","","type","submit","value","Save"],["class","error-text",4,"ngIf"],[1,"error-text"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form",0),m["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),m["\u0275\u0275elementStart"](1,"div",1),m["\u0275\u0275elementStart"](2,"div",2),m["\u0275\u0275elementStart"](3,"div",3),m["\u0275\u0275elementStart"](4,"div",4),m["\u0275\u0275element"](5,"div",5),m["\u0275\u0275elementStart"](6,"div",6),m["\u0275\u0275elementStart"](7,"div",7),m["\u0275\u0275elementStart"](8,"nb-icon",8),m["\u0275\u0275text"](9,"arrow-back-outline"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"input",9),m["\u0275\u0275listener"]("change",(function(e){return t.changeListener(e)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](11,O,2,1,"div",10),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](12,"div",2),m["\u0275\u0275elementStart"](13,"div",11),m["\u0275\u0275elementStart"](14,"label",12),m["\u0275\u0275text"](15," Name"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](16,"input",13),m["\u0275\u0275template"](17,j,2,1,"div",10),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](18,"div",11),m["\u0275\u0275elementStart"](19,"label",12),m["\u0275\u0275text"](20," Description"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](21,"textarea",14),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](22,"div",15),m["\u0275\u0275elementStart"](23,"div",16),m["\u0275\u0275element"](24,"input",17),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("formGroup",t.foodForm),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("ngStyle",m["\u0275\u0275pureFunction1"](5,A,"url("+t.picture+")")),m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("ngIf",t.isInvalidControl(t.foodForm,"picture")),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("status",t.isInvalidControl(t.foodForm,"name")?"danger":"basic"),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.isInvalidControl(t.foodForm,"name")))},directives:[y.C,y.s,y.j,c.p,v.I,c.o,v.L,y.c,y.r,y.h],styles:[".round-img[_ngcontent-%COMP%]{max-width:250px}.round-img[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;position:relative;padding-top:100%;background-size:cover;background-repeat:no-repeat;border-radius:10px;box-shadow:0 0 5px .5px #fff}.round-img[_ngcontent-%COMP%]   .select-file[_ngcontent-%COMP%]{position:absolute;right:-10px;top:40%;width:50px;height:50px}.round-img[_ngcontent-%COMP%]   .select-file[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;cursor:pointer}.round-img[_ngcontent-%COMP%]   .select-file[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{width:100%;height:100%;padding:10px;border-radius:50%;background-color:#2e3e6d;cursor:pointer}.error-text[_ngcontent-%COMP%]{color:red}"]}),P),R=((D=function(){function t(n,o,i,r){e(this,t),this.route=n,this.router=o,this.toastrService=i,this.mealMenuService=r}return n(t,[{key:"ngOnInit",value:function(){}},{key:"back",value:function(){this.router.navigate(["/menuofyear"])}},{key:"onFoodSubmit",value:function(e){var t=this;console.log(e),this.mealMenuService.addFood(e).subscribe((function(e){t.toastrService.success("New Food Added","Success"),t.back()}))}}]),t}()).\u0275fac=function(e){return new(e||D)(m["\u0275\u0275directiveInject"](a.a),m["\u0275\u0275directiveInject"](a.c),m["\u0275\u0275directiveInject"](v.vb),m["\u0275\u0275directiveInject"](l.a))},D.\u0275cmp=m["\u0275\u0275defineComponent"]({type:D,selectors:[["ngx-add-food"]],decls:9,vars:0,consts:[[1,"d-flex","align-items-center"],["nbTooltip","Back","nbButton","","ghost","",3,"click"],["icon","arrow-back-outline",2,"color","white"],[3,"onFoodSubmit"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"nb-card"),m["\u0275\u0275elementStart"](1,"nb-card-header"),m["\u0275\u0275elementStart"](2,"div",0),m["\u0275\u0275elementStart"](3,"button",1),m["\u0275\u0275listener"]("click",(function(){return t.back()})),m["\u0275\u0275elementStart"](4,"nb-icon",2),m["\u0275\u0275text"](5,"arrow-back-outline"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](6," Add Food "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"nb-card-body"),m["\u0275\u0275elementStart"](8,"ngx-food-form",3),m["\u0275\u0275listener"]("onFoodSubmit",(function(e){return t.onFoodSubmit(e)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]())},directives:[v.t,v.w,v.p,v.yb,v.I,v.s,L],styles:[""]}),D),T=i("eIep"),q=[{path:"food/new",component:R},{path:"food/edit/:food_id",component:(W=function(){function t(n,o,i,r){e(this,t),this.route=n,this.router=o,this.toastrService=i,this.mealMenuService=r}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.route.paramMap.pipe(Object(T.a)((function(t){return e.foodId=Number(t.get("food_id")),e.mealMenuService.getFoodById(e.foodId)}))).subscribe((function(t){e.food=t}))}},{key:"back",value:function(){this.router.navigate(["/menuofyear"])}},{key:"onFoodSubmit",value:function(e){var t=this;console.log(e),e.id=this.foodId,this.mealMenuService.updateFood(e).subscribe((function(e){t.toastrService.success("Food has been Updated","Success"),t.back()}))}}]),t}(),W.\u0275fac=function(e){return new(e||W)(m["\u0275\u0275directiveInject"](a.a),m["\u0275\u0275directiveInject"](a.c),m["\u0275\u0275directiveInject"](v.vb),m["\u0275\u0275directiveInject"](l.a))},W.\u0275cmp=m["\u0275\u0275defineComponent"]({type:W,selectors:[["ngx-edit-food"]],decls:9,vars:1,consts:[[1,"d-flex","align-items-center"],["nbTooltip","Back","nbButton","","ghost","",3,"click"],["icon","arrow-back-outline",2,"color","white"],[3,"init","onFoodSubmit"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"nb-card"),m["\u0275\u0275elementStart"](1,"nb-card-header"),m["\u0275\u0275elementStart"](2,"div",0),m["\u0275\u0275elementStart"](3,"button",1),m["\u0275\u0275listener"]("click",(function(){return t.back()})),m["\u0275\u0275elementStart"](4,"nb-icon",2),m["\u0275\u0275text"](5,"arrow-back-outline"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](6," Edit Food "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"nb-card-body"),m["\u0275\u0275elementStart"](8,"ngx-food-form",3),m["\u0275\u0275listener"]("onFoodSubmit",(function(e){return t.onFoodSubmit(e)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](8),m["\u0275\u0275property"]("init",t.food))},directives:[v.t,v.w,v.p,v.yb,v.I,v.s,L],styles:[""]}),W)},{path:"",component:C}],z=((B=function t(){e(this,t)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:B}),B.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||B)},imports:[[a.g.forChild(q)],a.g]}),B),V=((N=function t(){e(this,t)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:N}),N.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||N)},imports:[[c.c,z,v.x,v.K,v.ub,v.M,v.q,v.zb,v.gb,u.c,y.x,y.l]]}),N)}}])}();
!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{CS94:function(t,r,i){"use strict";i.r(r),i.d(r,"PicturesModule",(function(){return N}));var o,a,c=i("ofXK"),s=i("tyNb"),l=i("vqVJ"),d=i("fXoL"),u=i("aceb"),p=(i("CWoy"),i("RS3s")),m=i("TUgJ"),g=i("3Pt+"),h=((a=function(){function t(n,r,i){e(this,t),this.userService=n,this.router=r,this.route=i,this.onSelectEvent=new d.EventEmitter,this.parents=[],this.settings={actions:{add:!1,edit:!1,delete:!1,position:"right"},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},hideSubHeader:!0,hideHeader:!0,pager:{perPage:4},columns:{picture:{type:"custom",renderComponent:m.a}}},this.parent_src=new p.a}return n(t,[{key:"ngOnInit",value:function(){console.log(this.data),this.data&&(this.parents=this.data,this.parent_src.load(this.parents))}},{key:"onSearchWordChange",value:function(e){this.searchWord=e,this.searchWord?this.parent_src.setFilter([{field:"first_name",search:this.searchWord},{field:"last_name",search:this.searchWord}],!1):this.parent_src.setFilter(null)}},{key:"onRowSelect",value:function(e){var t=e.data;console.log(t),this.onSelectEvent.emit(t)}}]),t}()).\u0275fac=function(e){return new(e||a)(d["\u0275\u0275directiveInject"](l.a),d["\u0275\u0275directiveInject"](s.c),d["\u0275\u0275directiveInject"](s.a))},a.\u0275cmp=d["\u0275\u0275defineComponent"]({type:a,selectors:[["ngx-user-list"]],inputs:{data:"data"},outputs:{onSelectEvent:"onselect"},decls:6,vars:3,consts:[[1,"search-box","mb-2"],[2,"display","flex","justify-content","flex-end"],["type","text","nbInput","","placeholder","Search by name",3,"ngModel","ngModelChange"],["type","button","nbButton","","status","primary"],["icon","search-outline",1,"action-icon"],[3,"settings","source","userRowSelect"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"input",2),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.searchWord=e}))("ngModelChange",(function(e){return t.onSearchWordChange(e)})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"button",3),d["\u0275\u0275element"](4,"nb-icon",4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"ng2-smart-table",5),d["\u0275\u0275listener"]("userRowSelect",(function(e){return t.onRowSelect(e)})),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngModel",t.searchWord),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("settings",t.settings)("source",t.parent_src))},directives:[u.L,g.c,g.r,g.u,u.p,u.I,p.b],styles:[""]}),a),f=((o=function(){function t(n,r,i){e(this,t),this.route=n,this.router=r,this.userService=i,this.parents=[]}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.userService.getParents().subscribe((function(t){e.parents=t,console.log(e.parents)}))}},{key:"onSelect",value:function(e){this.router.navigate(["detail/"+e.id],{relativeTo:this.route})}}]),t}()).\u0275fac=function(e){return new(e||o)(d["\u0275\u0275directiveInject"](s.a),d["\u0275\u0275directiveInject"](s.c),d["\u0275\u0275directiveInject"](l.a))},o.\u0275cmp=d["\u0275\u0275defineComponent"]({type:o,selectors:[["ngx-pictures"]],decls:6,vars:1,consts:[[1,"d-flex","align-items-center","justify-content-between"],[3,"data","onselect"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"nb-card"),d["\u0275\u0275elementStart"](1,"nb-card-header"),d["\u0275\u0275elementStart"](2,"div",0),d["\u0275\u0275text"](3," Select Parents "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"nb-card-body"),d["\u0275\u0275elementStart"](5,"ngx-user-list",1),d["\u0275\u0275listener"]("onselect",(function(e){return t.onSelect(e)})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("data",t.parents))},directives:[u.t,u.w,u.s,h],styles:[""]}),o),v=i("/aQt"),b=i("eIep"),y=i("EwH2"),x=i("kvL/");function w(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"ngx-dropzone-image-preview",7),d["\u0275\u0275listener"]("removed",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"]().onRemove(e)})),d["\u0275\u0275elementStart"](1,"ngx-dropzone-label"),d["\u0275\u0275elementStart"](2,"span",8),d["\u0275\u0275text"](3),d["\u0275\u0275pipe"](4,"stateToString"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"ngx-file-upload-ui--progressbar-circle",9),d["\u0275\u0275elementStart"](6,"span",10),d["\u0275\u0275text"](7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit;d["\u0275\u0275property"]("file",r.data.raw)("removable",!0),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate2"](" ",r.data.state," State: ",d["\u0275\u0275pipeBind1"](4,7,r.data.state)," "),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("progress",r.data.progress)("parts",12),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"](" ",r.data.name," ")}}var S,C=((S=function(){function t(n,r,i,o){e(this,t),this.uploadFactory=n,this.router=r,this.userService=i,this.route=o,this.uploads=[],this.storage=new v.d({concurrentUploads:2,autoStart:!1,removeCompleted:1e3}),this.uploadOptions={url:"http://localhost:3000/upload"}}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.route.paramMap.pipe(Object(b.a)((function(t){return e.userId=Number(t.get("userId")),e.userService.getUserById(e.userId)}))).subscribe((function(t){e.user=t})),this.storage.change().subscribe((function(t){e.uploads=t,e.uploads.forEach((function(e){}))}))}},{key:"back",value:function(){this.router.navigate(["teacher/pictures/detail/"+this.userId])}},{key:"onSelect",value:function(e){console.log("Select",e);var t=this.uploadFactory.createUploadRequest(e.addedFiles,this.uploadOptions);t.forEach((function(e){e.change.subscribe((function(e){console.log(e.response.errors)}))})),this.storage.add(t)}},{key:"onRemove",value:function(e){this.storage.remove(e)}},{key:"startUploads",value:function(){this.storage.startAll()}}]),t}()).\u0275fac=function(e){return new(e||S)(d["\u0275\u0275directiveInject"](v.b),d["\u0275\u0275directiveInject"](s.c),d["\u0275\u0275directiveInject"](l.a),d["\u0275\u0275directiveInject"](s.a))},S.\u0275cmp=d["\u0275\u0275defineComponent"]({type:S,selectors:[["ngx-add"]],decls:14,vars:5,consts:[[1,"d-flex","align-items-center","justify-content-between"],["nbTooltip","Back","nbButton","","ghost","",3,"click"],["icon","arrow-back-outline",2,"color","white"],[3,"picture","name"],[3,"storage"],[3,"accept","change"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file","removable","removed",4,"ngFor","ngForOf"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file","removable","removed"],[1,"state"],[3,"progress","parts"],[1,"label"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"nb-card"),d["\u0275\u0275elementStart"](1,"nb-card-header"),d["\u0275\u0275elementStart"](2,"div",0),d["\u0275\u0275elementStart"](3,"button",1),d["\u0275\u0275listener"]("click",(function(){return t.back()})),d["\u0275\u0275elementStart"](4,"nb-icon",2),d["\u0275\u0275text"](5,"arrow-back-outline"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](6," Upload Pictures "),d["\u0275\u0275element"](7,"nb-user",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"nb-card-body"),d["\u0275\u0275element"](9,"ngx-file-upload-ui--toolbar",4),d["\u0275\u0275elementStart"](10,"ngx-dropzone",5),d["\u0275\u0275listener"]("change",(function(e){return t.onSelect(e)})),d["\u0275\u0275elementStart"](11,"ngx-dropzone-label"),d["\u0275\u0275text"](12,"Drop or Browse"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](13,w,8,9,"ngx-dropzone-image-preview",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](7),d["\u0275\u0275property"]("picture",null==t.user?null:t.user.picture)("name",(null==t.user?null:t.user.first_name)+" "+(null==t.user?null:t.user.last_name)),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("storage",t.storage),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("accept","image/*"),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngForOf",t.uploads))},directives:[u.t,u.w,u.p,u.I,u.Ab,u.s,y.i,x.a,x.d,c.n,x.b,y.f],pipes:[y.h],styles:["[_nghost-%COMP%]   ngx-dropzone[_ngcontent-%COMP%]{border-style:solid;border-width:0 2px 2px;border-radius:0;padding:.2rem .5rem .2rem 0;min-height:400px;flex-wrap:wrap;align-items:baseline}[_nghost-%COMP%]   ngx-dropzone-image-preview[_ngcontent-%COMP%]{height:100%;position:relative;margin:0 .5rem 0 0}[_nghost-%COMP%]   ngx-dropzone-image-preview[_ngcontent-%COMP%]     img{min-width:100px}[_nghost-%COMP%]   ngx-dropzone-label[_ngcontent-%COMP%]{top:0;right:0;left:0;bottom:0;display:flex;flex-direction:column;justify-content:space-between}[_nghost-%COMP%]   ngx-dropzone-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;padding:0 .3rem;text-align:left}[_nghost-%COMP%]   ngx-dropzone-label[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}[_nghost-%COMP%]   ngx-file-upload-ui--progressbar-circle[_ngcontent-%COMP%]     svg{opacity:.8;height:72px;width:72px}[_nghost-%COMP%]   ngx-file-upload-ui--progressbar-circle[_ngcontent-%COMP%]     svg circle{stroke:#807f7f;stroke-width:.5rem}[_nghost-%COMP%]   ngx-file-upload-ui--progressbar-circle[_ngcontent-%COMP%]     svg circle.progress{stroke-width:.5rem;stroke:#fff}[_nghost-%COMP%]   ngx-file-upload-ui--progressbar-circle[_ngcontent-%COMP%]     span{font-size:.7rem;color:#fff}[_nghost-%COMP%]     ngx-dropzone-remove-badge{z-index:10}"]}),S),k=i("EZvT"),E=i("m3o8"),I=function(e){return{"background-image":e}};function _(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"div",5),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.index;return d["\u0275\u0275nextContext"]().open(e)})),d["\u0275\u0275element"](1,"div",6),d["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngStyle",d["\u0275\u0275pureFunction1"](1,I,"url("+r.url+")"))}}var O,P,M,j,z=function(){return{"background-image":"url(/assets/images/icon-add.png)"}},B=[{path:"",component:f},{path:"detail/:childId",component:(O=function(){function t(n,r,i,o){e(this,t),this.route=n,this.router=r,this._lightbox=i,this.pictureService=o}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.route.paramMap.pipe(Object(b.a)((function(t){return e.childId=Number(t.get("childId")),e.pictureService.getPicturesOfChild(e.childId)}))).subscribe((function(t){console.log(t),e.pictures=t.pictures,e.child=t.child,e._album=[],e.pictures.forEach((function(t){e._album.push({src:t.url})}))}))}},{key:"add",value:function(){this.router.navigate(["teacher/pictures/add/"+this.childId])}},{key:"open",value:function(e){this._lightbox.open(this._album,e,{centerVertically:!0,fitImageInViewPort:!1})}},{key:"back",value:function(){this.router.navigate(["/teacher/pictures"])}}]),t}(),O.\u0275fac=function(e){return new(e||O)(d["\u0275\u0275directiveInject"](s.a),d["\u0275\u0275directiveInject"](s.c),d["\u0275\u0275directiveInject"](E.Lightbox),d["\u0275\u0275directiveInject"](k.a))},O.\u0275cmp=d["\u0275\u0275defineComponent"]({type:O,selectors:[["ngx-picture-detail"]],decls:12,vars:5,consts:[[1,"d-flex","align-items-center","justify-content-between"],["nbTooltip","Back","nbButton","","ghost","",3,"click"],["icon","arrow-back-outline",2,"color","white"],[3,"picture","name"],[1,"row"],[1,"item","col-sm-2","mb-4",3,"click"],[1,"img-content",3,"ngStyle"],["class","item col-sm-2 mb-4",3,"click",4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"nb-card"),d["\u0275\u0275elementStart"](1,"nb-card-header"),d["\u0275\u0275elementStart"](2,"div",0),d["\u0275\u0275elementStart"](3,"button",1),d["\u0275\u0275listener"]("click",(function(){return t.back()})),d["\u0275\u0275elementStart"](4,"nb-icon",2),d["\u0275\u0275text"](5,"arrow-back-outline"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](6," Pictures "),d["\u0275\u0275element"](7,"nb-user",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"nb-card-body",4),d["\u0275\u0275elementStart"](9,"div",5),d["\u0275\u0275listener"]("click",(function(){return t.add()})),d["\u0275\u0275element"](10,"div",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](11,_,2,3,"div",7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](7),d["\u0275\u0275property"]("picture",null==t.child?null:t.child.photo)("name",(null==t.child?null:t.child.first_name)+" "+(null==t.child?null:t.child.last_name)),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngStyle",d["\u0275\u0275pureFunction0"](4,z)),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",t.pictures))},directives:[u.t,u.w,u.p,u.I,u.Ab,u.s,c.p,c.n],styles:[".img-content[_ngcontent-%COMP%]{width:100%;position:relative;padding-top:100%;background-size:cover;background-repeat:no-repeat;border-radius:5px;box-shadow:0 0 5px .5px #fff}.item[_ngcontent-%COMP%]{cursor:pointer}"]}),O)},{path:"add/:childId",component:C}],F=((P=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:P}),P.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||P)},imports:[[s.g.forChild(B)],s.g]}),P),W=i("PCNd"),R=((j=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:j}),j.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||j)},imports:[[c.c,g.l,u.M,u.K,u.q,p.c]]}),j),N=((M=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:M}),M.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||M)},imports:[[c.c,F,W.a,R,u.q,u.K,u.x,u.Bb,x.c,v.a,y.a,y.d,y.e]]}),M)}}])}();
import{a as ze,b as Ke,c as Je}from"./chunk-IRPIYWWJ.js";import{a as Ae,b as $e,d as nt,e as it,g as ie,i as rt,k as G}from"./chunk-APGG5VNM.js";import{$c as ne,A as be,Aa as B,B as xe,Bb as z,Ca as C,D as Ne,Da as c,Ea as Fe,Ec as qe,F as Te,Fa as Oe,Ga as v,Ha as q,Hc as U,I as m,Ia as Ee,J as d,Ja as Pe,Jc as j,K as $,Ka as M,Kc as de,L as Se,La as _,Lb as Z,Ma as Re,Mb as ee,N as b,Na as ke,Nb as te,O as x,Pa as X,Qa as J,Sc as Ge,T as Ie,Tc as We,U as pe,Ub as Dt,V as Me,Va as N,Wa as w,Wb as Ue,X as we,Xa as Ve,Ya as T,Yb as je,Yc as O,Za as h,Zc as E,_ as u,ac as Le,ad as Xe,b as Ce,bb as ht,dd as Ye,e as V,ed as Ze,f as he,fb as Be,fd as et,g as ce,gb as F,gd as tt,hd as ot,ia as f,id as L,j as se,jb as Qe,ka as r,m as De,n as ve,oa as K,pa as p,qb as Y,sb as Q,tc as y,ua as s,va as a,vb as H,vc as oe,wa as g,xa as ue,xb as He,xc as me,ya as ge,z as ye,za as A}from"./chunk-FWY5D3MO.js";import{a as fe,b as _e,g as W}from"./chunk-P2VZOJAX.js";ce();var re=(()=>{class t extends y{constructor(){super()}registerControl(){}unregisterControl(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=$({type:t,selectors:[["","diControlSilencer",""]],standalone:!0,features:[M([oe(t)]),f]})}return t})();ce();var lt=W(Ue(),1);var at=(()=>{let e=class e{constructor(){this.overlayService=m(We)}open(n,i){return this.overlayService.open(n,_e(fe({overlayContainer:Ge,positionStrategy:this.overlayService.globalPositionStrategy().centerHorizontally().centerVertically(),scrollStrategy:this.overlayService.scrollStrategy().block()},i),{panelClass:["ng-doc-dialog",...(0,lt.asArray)(i?.panelClass)]}))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=Te({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var vt=["outletContent"];function yt(t,e){t&1&&Oe(0)}var bt=["*"],P,le=(P=class{constructor(){this.router=m(te),this.route=m(Z),this.dialogService=m(at)}ngAfterContentInit(){if(this.routerOutlet){let e=new Ce;e.pipe(be(o=>o.beforeClose().pipe(xe(this.routerOutlet?.deactivateEvents??ve))),de(this)).subscribe(()=>{let o=this.route.pathFromRoot.map(n=>n.snapshot.url).filter(n=>!!n[0]).map(([n])=>n.path).join("/");this.router.navigateByUrl(o)}),De(this.routerOutlet.activateEvents.pipe(se(()=>!0)),this.routerOutlet.deactivateEvents.pipe(se(()=>!1))).pipe(ye(this.routerOutlet.isActivated),de(this)).subscribe(o=>{o?(this.dialogRef=this.dialogService.open(this.outletContent,this.config),e.next(this.dialogRef)):this.dialogRef?.close()})}}},P.\u0275fac=function(o){return new(o||P)},P.\u0275cmp=d({type:P,selectors:[["ng-doc-dialog-outlet"]],contentQueries:function(o,n,i){if(o&1&&Ve(i,ee,5),o&2){let l;N(l=T())&&(n.routerOutlet=l.first)}},viewQuery:function(o,n){if(o&1&&w(vt,7),o&2){let i;N(i=T())&&(n.outletContent=i.first)}},inputs:{config:"config"},standalone:!0,features:[_],ngContentSelectors:bt,decls:2,vars:0,consts:[["outletContent",""]],template:function(o,n){o&1&&(Fe(),p(0,yt,1,0,"ng-template",null,0,h))},encapsulation:2,changeDetection:0}),P);le=V([j()],le);ce();var ct=W(ht(),1);var I,ae=(I=class extends me{constructor(){super({onIncomingUpdate:e=>{qe(this.elementRef).value=(0,ct.isPresent)(e)?String(Number(e)):""}})}blurEvent(){this.touch()}inputEvent(){this.updateModel(Number(this.elementRef.nativeElement.value))}},I.\u0275fac=function(o){return new(o||I)},I.\u0275dir=$({type:I,selectors:[["input","ngDocInputNumber",""]],hostBindings:function(o,n){o&1&&C("blur",function(){return n.blurEvent()})("input",function(){return n.inputEvent()})},standalone:!0,features:[M([{provide:me,useExisting:Ne(()=>I)}]),f]}),I);ae=V([j(),he("design:paramtypes",[])],ae);var st=W(Dt(),1),pt=(()=>{let e=class e{transform(n){return(0,st.extractValue)(n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=Se({name:"ngDocExtractValue",type:e,pure:!0,standalone:!0});let t=e;return t})();function xt(t,e){if(t&1&&(g(0,"div",2),X(1,"ngDocSanitizeHtml")),t&2){let o=c();r("innerHTML",J(1,1,o.description),Ie)}}var ut=(()=>{let e=class e extends y{constructor(){super(),this.name="",this.description=""}get defaultValue(){return Object.prototype.hasOwnProperty.call(this,"default")?this.default:!1}updateModel(n){super.updateModel(n||(this.defaultValue?!1:this.defaultValue))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["ng-doc-boolean-control"]],standalone:!0,features:[M([oe(e)]),f,_],decls:4,vars:3,consts:[[3,"ngDocTooltip","canOpen"],["tooltipTemplate",""],[3,"innerHTML"]],template:function(i,l){if(i&1&&(s(0,"ng-doc-checkbox",0),q(1),p(2,xt,2,3,"ng-template",null,1,h),a()),i&2){let D=v(3);r("ngDocTooltip",D)("canOpen",!!l.description),u(1),Pe(" ",l.name," ")}},dependencies:[$e,L,it],styles:["[_nghost-%COMP%]{display:inline-flex;width:100%}"],changeDetection:0});let t=e;return t})();function Nt(t,e){if(t&1){let o=B();s(0,"button",4),C("click",function(){b(o);let i=c(2),l;return x(i.updateModel((l=i.default)!==null&&l!==void 0?l:null))})("focusout",function(){b(o);let i=c(2);return x(i.touch())}),g(1,"ng-doc-icon",5),a()}if(t&2){let o=c(2);r("ngDocFocusable",!1)("disabled",o.disabled)("rounded",!1)}}function Tt(t,e){if(t&1&&p(0,Nt,2,3,"button",3),t&2){let o=c();r("ngIf",o.model()&&o.model()!==o.default)}}var mt=(()=>{let e=class e extends y{constructor(){super()}changeModel(n){this.updateModel(n===null&&this.default?this.default:n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["ng-doc-number-control"]],inputs:{default:"default"},standalone:!0,features:[f,_],decls:4,vars:2,consts:[["diControlSilencer","",3,"rightContent"],["ngDocInputNumber","","type","number",3,"ngModel","ngModelChange"],["rightContent",""],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout",4,"ngIf"],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout"],["icon","x"]],template:function(i,l){if(i&1&&(s(0,"ng-doc-input-wrapper",0)(1,"input",1),C("ngModelChange",function(k){return l.changeModel(k)}),a(),p(2,Tt,1,1,"ng-template",null,2,h),a()),i&2){let D=v(3);r("rightContent",D),u(1),r("ngModel",l.model)}},dependencies:[ne,re,ae,z,Y,He,Q,H,F,E,U,O],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0});let t=e;return t})();function St(t,e){if(t&1){let o=B();s(0,"button",4),C("click",function(){b(o);let i=c(2),l;return x(i.updateModel((l=i.default)!==null&&l!==void 0?l:null))})("focusout",function(){b(o);let i=c(2);return x(i.touch())}),g(1,"ng-doc-icon",5),a()}if(t&2){let o=c(2);r("ngDocFocusable",!1)("disabled",o.disabled)("rounded",!1)}}function It(t,e){if(t&1&&p(0,St,2,3,"button",3),t&2){let o=c();r("ngIf",o.model()&&o.model()!==o.default)}}var dt=(()=>{let e=class e extends y{constructor(){super()}changeModel(n){this.updateModel(n===null&&this.default?this.default:n)}writeValue(n){super.writeValue(n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["ng-doc-string-control"]],inputs:{default:"default"},standalone:!0,features:[f,_],decls:4,vars:2,consts:[["diControlSilencer","",3,"rightContent"],["ngDocInputString","",3,"ngModel","ngModelChange"],["rightContent",""],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout",4,"ngIf"],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout"],["icon","x"]],template:function(i,l){if(i&1&&(s(0,"ng-doc-input-wrapper",0)(1,"input",1),C("ngModelChange",function(k){return l.changeModel(k)}),a(),p(2,It,1,1,"ng-template",null,2,h),a()),i&2){let D=v(3);r("rightContent",D),u(1),r("ngModel",l.model())}},dependencies:[z,Y,Q,H,ne,Xe,F,E,U,O,re],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0});let t=e;return t})();function Mt(t,e){t&1&&A(0)}var wt=t=>({$implicit:t});function Ft(t,e){if(t&1&&(ue(0),s(1,"ng-doc-option",6),p(2,Mt,1,0,"ng-container",7),a(),ge()),t&2){let o=e.ngIf;c(3);let n=v(3);u(1),r("value",o),u(1),r("ngTemplateOutlet",n)("ngTemplateOutletContext",ke(3,wt,o))}}function Ot(t,e){if(t&1&&(ue(0),p(1,Ft,3,5,"ng-container",5),X(2,"ngDocExtractValue"),ge()),t&2){let o=e.$implicit;u(1),r("ngIf",J(2,1,o))}}function Et(t,e){if(t&1&&(s(0,"ng-doc-list"),p(1,Ot,3,3,"ng-container",4),a()),t&2){let o=c();u(1),r("ngForOf",o.options)}}function Pt(t,e){t&1&&(s(0,"span",11),q(1,"[default]"),a())}function Rt(t,e){if(t&1&&(s(0,"div",8),g(1,"ng-doc-kind-icon",9),s(2,"div"),q(3),a(),p(4,Pt,2,0,"span",10),a()),t&2){let o=e.$implicit,n=c();u(1),r("kind",n.typeOf(o))("type","type")("ngDocTooltip",n.typeOf(o)),u(2),Ee(o),u(1),r("ngIf",o===n.default)}}function kt(t,e){if(t&1){let o=B();s(0,"button",13),C("click",function(){b(o);let i=c(2),l;return x(i.updateModel((l=i.default)!==null&&l!==void 0?l:null))})("focusout",function(){b(o);let i=c(2);return x(i.touch())}),g(1,"ng-doc-icon",14),a()}if(t&2){let o=c(2);r("ngDocFocusable",!1)("disabled",o.disabled)("rounded",!1)}}function Vt(t,e){if(t&1&&p(0,kt,2,3,"button",12),t&2){let o=c();r("ngIf",o.model()&&o.model()!==o.default)}}var ft=(()=>{let e=class e extends y{constructor(){super()}typeOf(n){return typeof n}changeModel(n){this.updateModel(n===null&&this.default?this.default:n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["ng-doc-type-alias-control"]],inputs:{default:"default"},standalone:!0,features:[f,_],decls:6,vars:5,consts:[[3,"ngModel","readonly","valueContent","clearButton","rightContent","ngModelChange"],[4,"ngDocData"],["valueTemplate",""],["rightContent",""],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["ng-doc-text",""],["positions","left-center","ngDocTextLeft","",3,"kind","type","ngDocTooltip"],["ng-doc-text","","color","muted","size","small","ngDocTextRight","",4,"ngIf"],["ng-doc-text","","color","muted","size","small","ngDocTextRight",""],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout",4,"ngIf"],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout"],["icon","x"]],template:function(i,l){if(i&1&&(s(0,"ng-doc-combobox",0),C("ngModelChange",function(k){return l.changeModel(k)}),p(1,Et,2,1,"ng-doc-list",1)(2,Rt,5,5,"ng-template",null,2,h)(4,Vt,1,1,"ng-template",null,3,h),a()),i&2){let D=v(3),k=v(5);r("ngModel",l.model())("readonly",!0)("valueContent",D)("clearButton",!1)("rightContent",k)}},dependencies:[Je,z,Q,H,Ke,Ye,Be,F,Ze,Qe,ot,ze,et,L,tt,E,U,O,pt],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0});let t=e;return t})();var Ct=W(Ue(),1);var At=["pageContainer"],Bt=["pageBreadcrumbs"],Qt=["pageNavigation"],Ht=["pageToc"],zt=["childOutlet"];function Ut(t,e){if(t&1&&(s(0,"a",9),g(1,"ng-doc-icon",10),a()),t&2){let o=c();r("href",o.rootPage.editSourceFileUrl,pe)}}function jt(t,e){if(t&1&&(s(0,"a",11),g(1,"ng-doc-icon",12),a()),t&2){let o=c();r("href",o.rootPage.viewSourceFileUrl,pe)}}var Lt=()=>({width:"100vw",height:"100vh"});function qt(t,e){t&1&&(s(0,"ng-doc-dialog-outlet",13)(1,"div",14),g(2,"router-outlet"),a()()),t&2&&r("config",Re(1,Lt))}var R,_t=(R=class{constructor(){this.rootPage=m(Ae),this.skeleton=m(Le),this.context=m(je),this.renderer=m(we),this.router=m(te),this.breadcrumbs=m(Z).pathFromRoot.filter(e=>!e.snapshot.url.length).map(e=>e.snapshot.title).filter(Ct.isPresent)}ngOnInit(){this.rootPage.pageType==="guide"&&(this.skeleton.breadcrumbs&&ie(this.pageBreadcrumbs,this.skeleton.breadcrumbs,{breadcrumbs:this.breadcrumbs}),this.skeleton.navigation&&ie(this.pageNavigation,this.skeleton.navigation,this.navigationInputs())),this.pageToc&&this.skeleton.toc&&ie(this.pageToc,this.skeleton.toc,{tableOfContent:rt(this.pageContainer.nativeElement)??[]})}navigationInputs(){let e=n=>n.map(i=>[i.children?.length?e(i.children):i]).flat(2),o=e(this.context.navigation);return{prevPage:o[o.findIndex(n=>this.url===n.route)-1],nextPage:o[o.findIndex(n=>this.url===n.route)+1]}}get url(){let e=this.router.parseUrl(this.router.url);return e.queryParams={},e.fragment=null,e.toString()}},R.\u0275fac=function(o){return new(o||R)},R.\u0275cmp=d({type:R,selectors:[["ng-doc-page"]],viewQuery:function(o,n){if(o&1&&(w(At,7,Me),w(Bt,7,K),w(Qt,7,K),w(Ht,7,K),w(zt,5)),o&2){let i;N(i=T())&&(n.pageContainer=i.first),N(i=T())&&(n.pageBreadcrumbs=i.first),N(i=T())&&(n.pageNavigation=i.first),N(i=T())&&(n.pageToc=i.first),N(i=T())&&(n.childOutlet=i.first)}},hostAttrs:["ngSkipHydration","true"],standalone:!0,features:[M([G("NgDocTypeAlias",ft,{order:10}),G("string",dt,{order:20}),G("number",mt,{order:30}),G("boolean",ut,{hideLabel:!0,order:40})]),_],decls:13,vars:4,consts:[["pageBreadcrumbs",""],[1,"ng-doc-page-controls"],["ng-doc-button-icon","","target","_blank","ngDocTooltip","Suggest Edits",3,"href",4,"ngIf"],["ng-doc-button-icon","","target","_blank","ngDocTooltip","View Source",3,"href",4,"ngIf"],[1,"ng-doc-page-wrapper",3,"ngDocPageProcessor"],["pageContainer",""],["pageNavigation",""],[3,"config",4,"ngIf"],["pageToc",""],["ng-doc-button-icon","","target","_blank","ngDocTooltip","Suggest Edits",3,"href"],["icon","edit-2"],["ng-doc-button-icon","","target","_blank","ngDocTooltip","View Source",3,"href"],["icon","code"],[3,"config"],[1,"ng-doc-fullscreen-wrapper"]],template:function(o,n){o&1&&(s(0,"article"),A(1,null,0),s(3,"div",1),p(4,Ut,2,1,"a",2)(5,jt,2,1,"a",3),a(),g(6,"div",4,5),A(8,null,6),a(),p(10,qt,3,2,"ng-doc-dialog-outlet",7),A(11,null,8)),o&2&&(u(4),r("ngIf",n.rootPage.editSourceFileUrl),u(1),r("ngIf",n.rootPage.viewSourceFileUrl),u(1),r("ngDocPageProcessor",n.rootPage.pageContent),u(4),r("ngIf",!(n.rootPage.page!=null&&n.rootPage.page.disableFullscreenRoutes)))},dependencies:[F,E,L,O,nt,ee,le],styles:["[_nghost-%COMP%]{display:flex;--ng-doc-toc-margin: calc(var(--ng-doc-base-gutter) * 5)}[_nghost-%COMP%]   article[_ngcontent-%COMP%]{position:relative;width:var(--ng-doc-article-width, 100%);margin-left:auto;margin-right:auto;overflow:hidden}[_nghost-%COMP%]   article[_ngcontent-%COMP%]   .ng-doc-page-controls[_ngcontent-%COMP%]{position:absolute;display:flex;grid-gap:var(--ng-doc-base-gutter);top:0;right:0}.ng-doc-fullscreen-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%}"],changeDetection:0}),R);_t=V([j()],_t);export{_t as a};
import{a as ze,b as Ke,c as Je}from"./chunk-W2RZMSI2.js";import{a as Ae,b as $e,d as re,e as nt,g as le,i as it,k as $}from"./chunk-WYUTR3RG.js";import{$a as Be,$c as ot,A as Ne,Aa as v,B as Te,Ba as W,Bc as q,Ca as Ee,Cc as _e,D as Se,Da as Pe,Ea as I,Eb as ee,F as Me,Fa as _,Fb as te,Ga as Re,Gb as oe,Ha as ke,I as m,J as d,Ja as Q,K as X,Ka as H,Kc as Ge,L as Ie,Lc as We,Mb as Dt,N as b,O as x,Ob as Ue,Pa as N,Qa as w,Qb as Le,Qc as O,Ra as Ve,Rc as E,Sa as T,T as J,Ta as D,Tc as ie,U as ge,Ub as je,Uc as Xe,V as we,Xa as Ct,Xc as Ye,Yc as Ze,Zc as et,_ as u,_c as tt,ab as F,ad as G,b as he,db as Qe,e as V,f as ve,g as pe,ga as f,ia as r,j as ue,kb as Z,lc as y,m as ye,ma as Y,mb as z,n as be,na as p,nc as ne,oa as s,pa as a,pb as U,pc as fe,qa as g,ra as me,rb as He,sa as de,ta as A,ua as B,vb as L,wa as C,wc as qe,xa as c,ya as Fe,z as xe,za as Oe,zc as j}from"./chunk-Z4NM5XQT.js";import{a as Ce,b as De,f as K}from"./chunk-RS6LHQUM.js";pe();var ae=(()=>{class t extends y{constructor(){super()}registerControl(){}unregisterControl(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t,selectors:[["","diControlSilencer",""]],standalone:!0,features:[I([ne(t)]),f]})}return t})();pe();var rt=K(Ue(),1);var lt=(()=>{let e=class e{constructor(){this.overlayService=m(We)}open(n,i){return this.overlayService.open(n,De(Ce({overlayContainer:Ge,positionStrategy:this.overlayService.globalPositionStrategy().centerHorizontally().centerVertically(),scrollStrategy:this.overlayService.scrollStrategy().block()},i),{panelClass:["ng-doc-dialog",...(0,rt.asArray)(i?.panelClass)]}))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ht=["outletContent"];function vt(t,e){t&1&&Oe(0)}var yt=["*"],P,ce=(P=class{constructor(){this.router=m(oe),this.route=m(ee),this.dialogService=m(lt)}ngAfterContentInit(){if(this.routerOutlet){let e=new he;e.pipe(Ne(o=>o.beforeClose().pipe(Te(this.routerOutlet?.deactivateEvents??be))),_e(this)).subscribe(()=>{let o=this.route.pathFromRoot.map(n=>n.snapshot.url).filter(n=>!!n[0]).map(([n])=>n.path).join("/");this.router.navigateByUrl(o)}),ye(this.routerOutlet.activateEvents.pipe(ue(()=>!0)),this.routerOutlet.deactivateEvents.pipe(ue(()=>!1))).pipe(xe(this.routerOutlet.isActivated),_e(this)).subscribe(o=>{o?(this.dialogRef=this.dialogService.open(this.outletContent,this.config),e.next(this.dialogRef)):this.dialogRef?.close()})}}},P.\u0275fac=function(o){return new(o||P)},P.\u0275cmp=d({type:P,selectors:[["ng-doc-dialog-outlet"]],contentQueries:function(o,n,i){if(o&1&&Ve(i,te,5),o&2){let l;N(l=T())&&(n.routerOutlet=l.first)}},viewQuery:function(o,n){if(o&1&&w(ht,7),o&2){let i;N(i=T())&&(n.outletContent=i.first)}},inputs:{config:"config"},standalone:!0,features:[_],ngContentSelectors:yt,decls:2,vars:0,consts:[["outletContent",""]],template:function(o,n){o&1&&(Fe(),p(0,vt,1,0,"ng-template",null,0,D))},encapsulation:2,changeDetection:0}),P);ce=V([q()],ce);pe();var at=K(Ct(),1);var M,se=(M=class extends fe{constructor(){super({onIncomingUpdate:e=>{qe(this.elementRef).value=(0,at.isPresent)(e)?String(Number(e)):""}})}blurEvent(){this.touch()}inputEvent(){this.updateModel(Number(this.elementRef.nativeElement.value))}},M.\u0275fac=function(o){return new(o||M)},M.\u0275dir=X({type:M,selectors:[["input","ngDocInputNumber",""]],hostBindings:function(o,n){o&1&&C("blur",function(){return n.blurEvent()})("input",function(){return n.inputEvent()})},standalone:!0,features:[I([{provide:fe,useExisting:Se(()=>M)}]),f]}),M);se=V([q(),ve("design:paramtypes",[])],se);var ct=K(Dt(),1),st=(()=>{let e=class e{transform(n){return(0,ct.extractValue)(n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=Ie({name:"ngDocExtractValue",type:e,pure:!0,standalone:!0});let t=e;return t})();function bt(t,e){if(t&1&&(g(0,"div",2),Q(1,"ngDocSanitizeHtml")),t&2){let o=c();r("innerHTML",H(1,1,o.description),J)}}var pt=(()=>{let e=class e extends y{constructor(){super(),this.name="",this.description=""}get defaultValue(){return Object.prototype.hasOwnProperty.call(this,"default")?this.default:!1}updateModel(n){super.updateModel(n||(this.defaultValue?!1:this.defaultValue))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["ng-doc-boolean-control"]],standalone:!0,features:[I([ne(e)]),f,_],decls:4,vars:3,consts:[[3,"ngDocTooltip","canOpen"],["tooltipTemplate",""],[3,"innerHTML"]],template:function(i,l){if(i&1&&(s(0,"ng-doc-checkbox",0),W(1),p(2,bt,2,3,"ng-template",null,1,D),a()),i&2){let h=v(3);r("ngDocTooltip",h)("canOpen",!!l.description),u(1),Pe(" ",l.name," ")}},dependencies:[$e,G,re],styles:["[_nghost-%COMP%]{display:inline-flex;width:100%}"],changeDetection:0});let t=e;return t})();function xt(t,e){if(t&1){let o=B();s(0,"button",4),C("click",function(){b(o);let i=c(2),l;return x(i.updateModel((l=i.default)!==null&&l!==void 0?l:null))})("focusout",function(){b(o);let i=c(2);return x(i.touch())}),g(1,"ng-doc-icon",5),a()}if(t&2){let o=c(2);r("ngDocFocusable",!1)("disabled",o.disabled)("rounded",!1)}}function Nt(t,e){if(t&1&&p(0,xt,2,3,"button",3),t&2){let o=c();r("ngIf",o.model()&&o.model()!==o.default)}}var gt=(()=>{let e=class e extends y{constructor(){super()}changeModel(n){this.updateModel(n===null&&this.default?this.default:n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["ng-doc-number-control"]],inputs:{default:"default"},standalone:!0,features:[f,_],decls:4,vars:2,consts:[["diControlSilencer","",3,"rightContent"],["ngDocInputNumber","","type","number",3,"ngModel","ngModelChange"],["rightContent",""],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout",4,"ngIf"],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout"],["icon","x"]],template:function(i,l){if(i&1&&(s(0,"ng-doc-input-wrapper",0)(1,"input",1),C("ngModelChange",function(k){return l.changeModel(k)}),a(),p(2,Nt,1,1,"ng-template",null,2,D),a()),i&2){let h=v(3);r("rightContent",h),u(1),r("ngModel",l.model)}},dependencies:[ie,ae,se,L,Z,He,z,U,F,E,j,O],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0});let t=e;return t})();function Tt(t,e){if(t&1){let o=B();s(0,"button",4),C("click",function(){b(o);let i=c(2),l;return x(i.updateModel((l=i.default)!==null&&l!==void 0?l:null))})("focusout",function(){b(o);let i=c(2);return x(i.touch())}),g(1,"ng-doc-icon",5),a()}if(t&2){let o=c(2);r("ngDocFocusable",!1)("disabled",o.disabled)("rounded",!1)}}function St(t,e){if(t&1&&p(0,Tt,2,3,"button",3),t&2){let o=c();r("ngIf",o.model()&&o.model()!==o.default)}}var mt=(()=>{let e=class e extends y{constructor(){super()}changeModel(n){this.updateModel(n===null&&this.default?this.default:n)}writeValue(n){super.writeValue(n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["ng-doc-string-control"]],inputs:{default:"default"},standalone:!0,features:[f,_],decls:4,vars:2,consts:[["diControlSilencer","",3,"rightContent"],["ngDocInputString","",3,"ngModel","ngModelChange"],["rightContent",""],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout",4,"ngIf"],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout"],["icon","x"]],template:function(i,l){if(i&1&&(s(0,"ng-doc-input-wrapper",0)(1,"input",1),C("ngModelChange",function(k){return l.changeModel(k)}),a(),p(2,St,1,1,"ng-template",null,2,D),a()),i&2){let h=v(3);r("rightContent",h),u(1),r("ngModel",l.model())}},dependencies:[L,Z,z,U,ie,Xe,F,E,j,O,ae],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0});let t=e;return t})();function Mt(t,e){t&1&&A(0)}var It=t=>({$implicit:t});function wt(t,e){if(t&1&&(me(0),s(1,"ng-doc-option",6),p(2,Mt,1,0,"ng-container",7),a(),de()),t&2){let o=e.ngIf;c(3);let n=v(3);u(1),r("value",o),u(1),r("ngTemplateOutlet",n)("ngTemplateOutletContext",ke(3,It,o))}}function Ft(t,e){if(t&1&&(me(0),p(1,wt,3,5,"ng-container",5),Q(2,"ngDocExtractValue"),de()),t&2){let o=e.$implicit;u(1),r("ngIf",H(2,1,o))}}function Ot(t,e){if(t&1&&(s(0,"ng-doc-list"),p(1,Ft,3,3,"ng-container",4),a()),t&2){let o=c();u(1),r("ngForOf",o.options)}}function Et(t,e){t&1&&(s(0,"span",11),W(1,"[default]"),a())}function Pt(t,e){if(t&1&&(s(0,"div",8),g(1,"ng-doc-kind-icon",9),s(2,"div"),W(3),a(),p(4,Et,2,0,"span",10),a()),t&2){let o=e.$implicit,n=c();u(1),r("kind",n.typeOf(o))("type","type")("ngDocTooltip",n.typeOf(o)),u(2),Ee(o),u(1),r("ngIf",o===n.default)}}function Rt(t,e){if(t&1){let o=B();s(0,"button",13),C("click",function(){b(o);let i=c(2),l;return x(i.updateModel((l=i.default)!==null&&l!==void 0?l:null))})("focusout",function(){b(o);let i=c(2);return x(i.touch())}),g(1,"ng-doc-icon",14),a()}if(t&2){let o=c(2);r("ngDocFocusable",!1)("disabled",o.disabled)("rounded",!1)}}function kt(t,e){if(t&1&&p(0,Rt,2,3,"button",12),t&2){let o=c();r("ngIf",o.model()&&o.model()!==o.default)}}var dt=(()=>{let e=class e extends y{constructor(){super()}typeOf(n){return typeof n}changeModel(n){this.updateModel(n===null&&this.default?this.default:n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["ng-doc-type-alias-control"]],inputs:{default:"default"},standalone:!0,features:[f,_],decls:6,vars:5,consts:[[3,"ngModel","readonly","valueContent","clearButton","rightContent","ngModelChange"],[4,"ngDocData"],["valueTemplate",""],["rightContent",""],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["ng-doc-text",""],["positions","left-center","ngDocTextLeft","",3,"kind","type","ngDocTooltip"],["ng-doc-text","","color","muted","size","small","ngDocTextRight","",4,"ngIf"],["ng-doc-text","","color","muted","size","small","ngDocTextRight",""],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout",4,"ngIf"],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout"],["icon","x"]],template:function(i,l){if(i&1&&(s(0,"ng-doc-combobox",0),C("ngModelChange",function(k){return l.changeModel(k)}),p(1,Ot,2,1,"ng-doc-list",1)(2,Pt,5,5,"ng-template",null,2,D)(4,kt,1,1,"ng-template",null,3,D),a()),i&2){let h=v(3),k=v(5);r("ngModel",l.model())("readonly",!0)("valueContent",h)("clearButton",!1)("rightContent",k)}},dependencies:[Je,L,z,U,Ke,Ye,Be,F,Ze,Qe,ot,ze,et,G,tt,E,j,O,st],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0});let t=e;return t})();var _t=K(Ue(),1);var Vt=["pageContainer"],At=["pageBreadcrumbs"],Bt=["pageNavigation"],Qt=["pageToc"],Ht=["childOutlet"];function zt(t,e){if(t&1&&(s(0,"a",9),g(1,"ng-doc-icon",10),a()),t&2){let o=c();r("href",o.rootPage.editSourceFileUrl,ge)}}function Ut(t,e){if(t&1&&(s(0,"a",11),g(1,"ng-doc-icon",12),a()),t&2){let o=c();r("href",o.rootPage.viewSourceFileUrl,ge)}}var Lt=()=>({width:"100vw",height:"100vh"});function jt(t,e){t&1&&(s(0,"ng-doc-dialog-outlet",13)(1,"div",14),g(2,"router-outlet"),a()()),t&2&&r("config",Re(1,Lt))}var R,ft=(R=class{constructor(){this.rootPage=m(Ae),this.skeleton=m(je),this.context=m(Le),this.router=m(oe),this.breadcrumbs=m(ee).pathFromRoot.filter(e=>!e.snapshot.url.length).map(e=>e.snapshot.title).filter(_t.isPresent)}ngAfterViewInit(){this.rootPage.pageType==="guide"&&(this.skeleton.breadcrumbs&&le(this.pageBreadcrumbs,this.skeleton.breadcrumbs,{breadcrumbs:this.breadcrumbs}),this.skeleton.navigation&&le(this.pageNavigation,this.skeleton.navigation,this.navigationInputs())),Promise.resolve().then(()=>{this.pageToc&&this.skeleton.toc&&le(this.pageToc,this.skeleton.toc,{tableOfContent:it(this.pageContainer.nativeElement)??[]})})}navigationInputs(){let e=n=>n.map(i=>[i.children?.length?e(i.children):i]).flat(2),o=e(this.context.navigation);return{prevPage:o[o.findIndex(n=>this.url===n.route)-1],nextPage:o[o.findIndex(n=>this.url===n.route)+1]}}get url(){let e=this.router.parseUrl(this.router.url);return e.queryParams={},e.fragment=null,e.toString()}},R.\u0275fac=function(o){return new(o||R)},R.\u0275cmp=d({type:R,selectors:[["ng-doc-page"]],viewQuery:function(o,n){if(o&1&&(w(Vt,7,we),w(At,7,Y),w(Bt,7,Y),w(Qt,5,Y),w(Ht,5)),o&2){let i;N(i=T())&&(n.pageContainer=i.first),N(i=T())&&(n.pageBreadcrumbs=i.first),N(i=T())&&(n.pageNavigation=i.first),N(i=T())&&(n.pageToc=i.first),N(i=T())&&(n.childOutlet=i.first)}},standalone:!0,features:[I([$("NgDocTypeAlias",dt,{order:10}),$("string",mt,{order:20}),$("number",gt,{order:30}),$("boolean",pt,{hideLabel:!0,order:40})]),_],decls:14,vars:6,consts:[["pageBreadcrumbs",""],[1,"ng-doc-page-controls"],["ng-doc-button-icon","","target","_blank","ngDocTooltip","Suggest Edits",3,"href",4,"ngIf"],["ng-doc-button-icon","","target","_blank","ngDocTooltip","View Source",3,"href",4,"ngIf"],["ngDocPageProcessor","",1,"ng-doc-page-wrapper",3,"innerHTML"],["pageContainer",""],["pageNavigation",""],[3,"config",4,"ngIf"],["pageToc",""],["ng-doc-button-icon","","target","_blank","ngDocTooltip","Suggest Edits",3,"href"],["icon","edit-2"],["ng-doc-button-icon","","target","_blank","ngDocTooltip","View Source",3,"href"],["icon","code"],[3,"config"],[1,"ng-doc-fullscreen-wrapper"]],template:function(o,n){o&1&&(s(0,"article"),A(1,null,0),s(3,"div",1),p(4,zt,2,1,"a",2)(5,Ut,2,1,"a",3),a(),g(6,"div",4,5),Q(8,"ngDocSanitizeHtml"),A(9,null,6),a(),p(11,jt,3,2,"ng-doc-dialog-outlet",7),A(12,null,8)),o&2&&(u(4),r("ngIf",n.rootPage.editSourceFileUrl),u(1),r("ngIf",n.rootPage.viewSourceFileUrl),u(1),r("innerHTML",H(8,4,n.rootPage.pageContent),J),u(5),r("ngIf",!(n.rootPage.page!=null&&n.rootPage.page.disableFullscreenRoutes)))},dependencies:[F,E,G,O,re,nt,te,ce],styles:["[_nghost-%COMP%]{display:flex;--ng-doc-toc-margin: calc(var(--ng-doc-base-gutter) * 5)}[_nghost-%COMP%]   article[_ngcontent-%COMP%]{position:relative;width:var(--ng-doc-article-width, 100%);margin-left:auto;margin-right:auto;overflow:hidden}[_nghost-%COMP%]   article[_ngcontent-%COMP%]   .ng-doc-page-controls[_ngcontent-%COMP%]{position:absolute;display:flex;grid-gap:var(--ng-doc-base-gutter);top:0;right:0}.ng-doc-fullscreen-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%}"],changeDetection:0}),R);ft=V([q()],ft);export{ft as a};

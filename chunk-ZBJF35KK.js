import{a as q}from"./chunk-GVICRL55.js";import{Ba as c,Ca as C,Fa as k,G as I,I as s,J as O,Ja as U,K as a,Ka as T,M as v,V as b,X as _,Y as P,Z as F,_ as g,aa as l,ba as V,ca as w,da as E,fb as H,ga as h,hb as N,lb as j,oa as i,pa as n,wa as S,ya as A,za as R}from"./chunk-Z4NM5XQT.js";var $={title:"Examples",expanded:!0,order:3},K=$;var B=["*"],ee=(()=>{class t{control;typeOf(e){return typeof e+(typeof e=="object"&&e!==null?` (${e.constructor.name})`:"")}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=O({type:t,selectors:[["di-model-info"]],inputs:{control:"control"},standalone:!0,features:[k],ngContentSelectors:B,decls:27,vars:6,consts:[[1,"control"],[1,"buttons"],["ng-doc-button","",3,"click"],[1,"control-info"]],template:function(o,m){o&1&&(A(),i(0,"div",0),R(1),n(),i(2,"div",1)(3,"button",2),S("click",function(){return m.control.reset()}),c(4,"Reset"),n()(),i(5,"ul",3)(6,"li")(7,"label"),c(8,"Model:"),n(),i(9,"b"),c(10),U(11,"json"),n()(),i(12,"li")(13,"label"),c(14,"Model type:"),n(),i(15,"b"),c(16),n()(),i(17,"li")(18,"label"),c(19,"Touched:"),n(),i(20,"b"),c(21),n()(),i(22,"li")(23,"label"),c(24,"Dirty:"),n(),i(25,"b"),c(26),n()()()),o&2&&(g(10),C(T(11,4,m.control.value)),g(6),C(m.typeOf(m.control.value)),g(5),C(m.control.touched),g(5),C(m.control.dirty))},dependencies:[N,H,q],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:16px}[_nghost-%COMP%]   .control[_ngcontent-%COMP%]{margin-bottom:calc(var(--ng-doc-base-gutter) * 2)}[_nghost-%COMP%]   .control-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:8px}[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;gap:8px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%;font-size:14px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--ng-doc-text-muted);margin-right:var(--ng-doc-base-gutter)}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid var(--ng-doc-border-color)}"]})}return t})();var y=class{};function oe(t){return{provide:y,useExisting:t}}var u=()=>{};var f=(t,r)=>t===r;function L(t){return t!=null&&(typeof t!="string"||t!=="")}function z(t){return L(t)&&(Array.isArray(t)&&!!t.length||typeof t=="string"&&!!t.length||!["string"].includes(typeof t)&&!Array.isArray(t))}var Y=(()=>{class t{incomingUpdate;model=F(null);ngControl;elementRef=s(b);changeDetectorRef;renderer=s(_);disabledValue=F(!1);touch=u;change=u;constructor(e){this.incomingUpdate=e,this.ngControl=s(j,{optional:!0,self:!0}),this.changeDetectorRef=s(V),this.ngControl&&(this.ngControl.valueAccessor=this)}get hasValue(){return z(this.model())}get disabled(){return this.disabledValue()}set disabled(e){this.setDisabledState(e)}registerOnChange(e){this.change=e}registerOnTouched(e){this.touch=e}writeValue(e){this.model()!==e&&this.update(e)}updateModel(e){this.model.set(e),this.change(this.model()),this.changeDetectorRef.markForCheck()}setDisabledState(e){this.disabledValue.set(e),this.disabledValue()?this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","true"):this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled"),this.renderer.setAttribute(this.elementRef.nativeElement,"aria-disabled",`${this.disabledValue()}`)}update(e){this.model.set(e),this.incomingUpdate&&this.incomingUpdate(e),this.changeDetectorRef.markForCheck()}static \u0275fac=function(o){l()};static \u0275dir=a({type:t,inputs:{disabled:"disabled"}})}return t})();var p=(()=>{class t extends Y{config;children=new Set;updateFrom=null;requestForUpdate=u;touch=()=>this.config?.host?.touch();onControlChangeFn=u;destroyRef=s(w);constructor(e){super(e?.onIncomingUpdate),this.config=e,this.destroyRef.onDestroy(()=>this.config?.host?.unregisterControl(this))}ngOnInit(){Promise.resolve().then(()=>this.config?.host?.registerControl(this))}registerControl(e){this.children.add(e),Promise.resolve().then(()=>{this.updateControl(e,this.model())}),e.registerOnControlChange(o=>{this.childControlChange(e,o),this.config?.onChildControlChange?.(e,o)}),e.registerRequestForUpdate(()=>{this.updateControl(e,this.model())})}unregisterControl(e){this.children.delete(e)}registerOnTouched(e){this.touch=()=>{e(),this.config?.host?.touch()}}registerOnControlChange(e){this.onControlChangeFn=e}registerRequestForUpdate(e){this.requestForUpdate=e}updateModel(e){super.updateModel(e),this.onControlChangeFn(e),this.updateControls(this.model())}writeValue(e){this.model()!==e&&(super.writeValue(e),this.updateControls(e),this.onControlChangeFn(e))}writeValueFromHost(e){this.model()!==e&&(super.writeValue(e),this.change(e),this.updateControls(e))}updateControls(e){this.children.forEach(o=>{o!==this.updateFrom&&this.updateControl(o,e)}),this.updateFrom=null}updateControl(e,o){e.writeValueFromHost(o)}childControlChange(e,o){this.model()!==o&&(this.updateFrom=e,this.updateModel(o),this.incomingUpdate&&this.incomingUpdate(o))}static \u0275fac=function(o){l()};static \u0275dir=a({type:t,features:[h]})}return t})();var D=(()=>{class t extends p{config;checked=P(()=>(typeof this.config?.compareHost=="function"?this.config.compareHost:this.config?.compareHost?.compareFn??f)(this.value,this.model())?!0:this.isIntermediate?null:!1);constructor(e){super(e),this.config=e,E(()=>{let o=this.checked()===null?"mixed":this.checked();this.renderer.setAttribute(this.elementRef.nativeElement,"aria-checked",`${o}`)})}ngOnChanges({value:e}){e&&this.requestForUpdate()}check(){this.updateModel(this.value)}uncheck(){if(!("uncheckValue"in(this.config??{})))throw new Error("To use uncheck method you need to provide uncheckValue in DIStateControl config");this.updateModel(this.config.uncheckValue)}intermediate(){this.updateModel(null)}toggle(){this.checked()?this.uncheck():this.check()}get isIntermediate(){return this.model()===null&&!!this.config?.hasIntermediate}static \u0275fac=function(o){l()};static \u0275dir=a({type:t,features:[h,v]})}return t})();var d=class{values=new Set;compareFn;constructor(r,e){this.compareFn=r||f,this.values=new Set(e||[])}get size(){return this.values.size}*[Symbol.iterator](){for(let r of this.values)yield r}add(r){!this.find(r)&&this.values.add(r)}delete(r){let e=this.find(r);e&&this.values.delete(e)}has(r){return this.values.has(r)||!!this.find(r)}clear(){this.values=new Set}toArray(){return Array.from(this.values)}find(r){if(this.values.has(r))return r;for(let e of this.values)if(this.compareFn(r,e))return e;return null}};var qe=(()=>{class t extends p{config;compareFn=f;proxyModel=new d;constructor(e){super(e),this.config=e}updateModel(e){this.proxyModel=new d(this.compareFn,e),super.updateModel(e)}writeValue(e){this.proxyModel=new d(this.compareFn,e),super.writeValue(e)}writeValueFromHost(e){this.proxyModel=new d(this.compareFn,e),super.writeValueFromHost(e)}childControlChange(e,o){this.updateFrom=e,this.updateModel(this.getNewModel(e,o)),this.incomingUpdate&&this.incomingUpdate(this.model())}getNewModel(e,o){if(e instanceof D)e.checked()?this.proxyModel.add(e.value):this.proxyModel.delete(e.value);else if(Array.isArray(o))this.proxyModel=new d(this.compareFn,o);else return this.proxyModel=new d(this.compareFn),null;return this.proxyModel.toArray()}updateControl(e){e instanceof D?e.writeValueFromHost(this.proxyModel.has(e.value)?e.value:e.config.uncheckValue):e.writeValueFromHost(this.model())}static \u0275fac=function(o){l()};static \u0275dir=a({type:t,inputs:{compareFn:"compareFn"},features:[h]})}return t})();var Ye=(()=>{class t extends p{config;constructor(e){super(e),this.config=e}registerControl(e){this.children.add(e),Promise.resolve().then(()=>e.writeValueFromHost(this.config.getValue(this.model()))),e.registerOnControlChange(o=>{this.updateFrom=e,this.updateModel(this.config.setValue(this.model(),o))}),e.registerRequestForUpdate(()=>{e.writeValueFromHost(this.config.getValue(this.model()))})}updateControl(e,o){e.writeValueFromHost(this.config.getValue(o))}static \u0275fac=function(o){l()};static \u0275dir=a({type:t,features:[h]})}return t})();var M=new I("DI_HOST_CONTROL");function J(t){return{provide:M,useExisting:t}}function Je(t){return t?s(M,t):s(M)}export{K as a,y as b,oe as c,p as d,D as e,qe as f,Ye as g,J as h,Je as i,ee as j};

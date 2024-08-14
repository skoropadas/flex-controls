import{a as r}from"./chunk-TGQ5YZO2.js";import{a as g}from"./chunk-54ESS3WH.js";import"./chunk-7OD5W2O4.js";import{a}from"./chunk-RJEVQYMU.js";import{K as c,Ta as i,Ua as p,bc as f,la as t,ya as d}from"./chunk-C3SKPK56.js";import{a as l,b as o,g as C}from"./chunk-JPKLQMV2.js";var m=C(f());var k={title:"How to use it?",mdFile:"./index.md",category:r,keyword:"HowToUseItPage"},n=k;var h=[];var y={},u=y;var D=`<h1 id="how-to-use-it" class="ngde">How to use it?<a title="Link to heading" class="ng-doc-header-link ngde" href="/getting-started/how-to-use-it#how-to-use-it"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">DIControls includes several classes that can be used to create controls.</p><h2 id="controls-connection" class="ngde">Controls connection<a title="Link to heading" class="ng-doc-header-link ngde" href="/getting-started/how-to-use-it#controls-connection"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">Each control can be connected to its child or parent through Dependency Injection. When controls are connected, they exchange model updates to "synchronize" it. In other words, when one control updates its model independently or through the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="https://angular.io/api/forms/NgControl" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">NgControl</a></code> API, all other linked controls will also update their models based on this update.</p><p class="ngde">To connect controls, your parent component should be provided using <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a></code> function.</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="parent-control.component.ts" icon="" highlightedlines="[2]"><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line highlighted ngde">  <span class="hljs-attr ngde">providers</span>: [<span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a></span>(<span class="hljs-title class_ ngde">ParentControlComponent</span>)],
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">ParentControlComponent</span> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ inherited__ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>&#x3C;<span class="hljs-built_in ngde">string</span>> {
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>();
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre><p class="ngde">To connect a child control, you need to inject parent control using <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></code> function.</p><ng-doc-blockquote type="note" class="ngde"><p class="ngde">You can also pass additional properties that are available to the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="https://angular.io/api/core/testing/inject" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">inject()</a></code> function.</p></ng-doc-blockquote><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="child-control.component.ts" icon="" highlightedlines="[6]"><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-comment ngde">// ...</span>
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">ChildControlComponent</span> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ inherited__ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>&#x3C;<span class="hljs-built_in ngde">string</span>> {
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line highlighted ngde">    <span class="hljs-variable language_ ngde">super</span>({<span class="hljs-attr ngde">host</span>: <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></span>({<span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span>})});
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre><p class="ngde">Now if you put <code class="ngde">ChildControlComponent</code> inside <code class="ngde">ParentControlComponent</code> tag or its template, they will be connected.</p><pre class="ngde hljs"><code class="hljs language-html code-lines ngde" lang="html" name="" icon="" highlightedlines="[]"><span class="line ngde">
</span><span class="line ngde"><span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">parent-control</span>></span>
</span><span class="line ngde">  <span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">child-control</span> /></span>
</span><span class="line ngde"><span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">parent-control</span>></span>
</span></code></pre><h2 id="classes-overview" class="ngde">Classes overview<a title="Link to heading" class="ng-doc-header-link ngde" href="/getting-started/how-to-use-it#classes-overview"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">Below, we will examine these classes and their usage options.</p><h3 id="dicontrol" class="ngde">DIControl<a title="Link to heading" class="ng-doc-header-link ngde" href="/getting-started/how-to-use-it#dicontrol"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde"><code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></code> is the base class that takes the model "as is" and updates it without additional modifications. This class is suitable for implementing <strong class="ngde">most</strong> UI controls. By using it, you can implement both parent components that accumulate and facilitate communication between child controls and simple standalone controls.</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="my-control.component.ts" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-comment ngde">// ...</span>
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">MyControlComponent</span> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ inherited__ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>&#x3C;<span class="hljs-built_in ngde">string</span>> {
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>();
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/HostListener" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@HostListener</a></span>(<span class="hljs-string ngde">'click'</span>)
</span><span class="line ngde">  <span class="hljs-title function_ ngde">onClick</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">updateModel</span>(<span class="hljs-string ngde">'new value'</span>);
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre><ul class="ngde"><li class="ngde">API: <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></code></li><li class="ngde">Examples: <a href="/examples/inputs" class="ngde">Inputs</a></li></ul><h3 id="distatecontrol" class="ngde">DIStateControl<a title="Link to heading" class="ng-doc-header-link ngde" href="/getting-started/how-to-use-it#distatecontrol"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde"><code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></code> inherits all the functionality from <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></code>, adding additional methods for creating a state control such as <code class="ngde">checkbox</code>, <code class="ngde">radio</code>, <code class="ngde">ship</code> etc.</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="my-control.component.ts" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-comment ngde">// ...</span>
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">MyControlComponent</span> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ inherited__ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>&#x3C;<span class="hljs-built_in ngde">string</span>> {
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>();
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/HostListener" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@HostListener</a></span>(<span class="hljs-string ngde">'click'</span>)
</span><span class="line ngde">  <span class="hljs-title function_ ngde">onClick</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">toggle</span>();
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre><ul class="ngde"><li class="ngde">API: <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></code></li><li class="ngde">Examples: <a href="/examples/checkbox" class="ngde">Checkbox</a>, <a href="/examples/radio" class="ngde">Radio</a>, <a href="/examples/switch" class="ngde">Switch</a>, <a href="/examples/combobox" class="ngde">Combobox</a></li></ul><h3 id="dicollectioncontrol" class="ngde">DICollectionControl<a title="Link to heading" class="ng-doc-header-link ngde" href="/getting-started/how-to-use-it#dicollectioncontrol"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde"><code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></code> stores its model as an array and has additional integration with <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></code>. If the child <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></code> has a state of <code class="ngde">checked = true</code>, its value will be added to the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></code>'s model as an array element. Otherwise, it will be removed. This control can assist you in creating components like CheckboxGroup or a multi-select ComboBox.</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="my-control.component.ts" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-comment ngde">// ...</span>
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">MyControlComponent</span> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ inherited__ ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></span>&#x3C;<span class="hljs-built_in ngde">string</span>> {
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>();
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre><ul class="ngde"><li class="ngde">API: <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></code></li><li class="ngde">Examples: <a href="/examples/checkbox" class="ngde">Checkbox</a></li></ul><h3 id="diproxycontrol" class="ngde">DIProxyControl<a title="Link to heading" class="ng-doc-header-link ngde" href="/getting-started/how-to-use-it#diproxycontrol"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde"><code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DIProxyControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIProxyControl</a></code> is very situational, it can be used to bind the model of a child control to a specific field of its parent's object or to modify the model before providing it to the child control and vice versa.</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="my-control.component.ts" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-comment ngde">// ...</span>
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">MyControlComponent</span> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ inherited__ ngde"><a href="/api/di-controls/classes/DIProxyControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIProxyControl</a></span>&#x3C;<span class="hljs-built_in ngde">string</span>> {
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">getValue</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">obj</span>) =></span> obj?.<span class="hljs-property ngde">date</span>,
</span><span class="line ngde">      <span class="hljs-attr ngde">setValue</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">obj, date</span>) =></span> ({...obj, date})
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre><ul class="ngde"><li class="ngde">API: <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DIProxyControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIProxyControl</a></code></li><li class="ngde">Examples: <a href="/examples/date-range" class="ngde">Date Range</a>, <a href="/examples/combobox" class="ngde">Combobox</a></li></ul>`,x=(()=>{class s extends a{routePrefix="";pageType="guide";pageContent=D;page=n;demoAssets=u;constructor(){super()}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=c({type:s,selectors:[["ng-doc-page-getting-started-how-to-use-it"]],standalone:!0,features:[i([{provide:a,useExisting:s},h,n.providers??[]]),t,p],decls:1,vars:0,template:function(e,I){e&1&&d(0,"ng-doc-page")},dependencies:[g],encapsulation:2,changeDetection:0})}return s})(),w=[o(l({},(0,m.isRoute)(n.route)?n.route:{}),{path:"",component:x,title:"How to use it?"})],N=w;export{x as DynamicComponent,N as default};
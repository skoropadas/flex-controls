"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[682],{6682:(r,o,n)=>{n.r(o),n.d(o,{DynamicComponent:()=>c,default:()=>i});var t=n(7744),d=n(2624),s=n(2223);let c=(()=>{class e extends t.a{routePrefix=void 0;pageType="api";pageContent='<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">di-controls</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="providehostcontrol" class="ngde">provideHostControl<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/di-controls/functions/provideHostControl#providehostcontrol"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">Returns provider that can be used to provide host control. You can use it in the <code class="ngde">providers</code> section of your <code class="ngde ng-doc-code-with-link" class="ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></code> or <code class="ngde ng-doc-code-with-link" class="ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Directive</a></code>.</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="custom-control.component.ts" icon="" highlightedlines="[2]"><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({\n</span><span class="line highlighted ngde">    <span class="hljs-attr ngde">providers</span>: [<span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a></span>(<span class="hljs-title class_ ngde">CustomControlComponent</span>)],\n</span><span class="line ngde">})\n</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">CustomControlComponent</span> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ inherited__ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>&#x3C;<span class="hljs-built_in ngde">string</span>> {\n</span><span class="line ngde">        <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {\n</span><span class="line ngde">            <span class="hljs-variable language_ ngde">super</span>();\n</span><span class="line ngde">        }\n</span><span class="line ngde">    }\n</span></code></pre></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/di-controls/functions/provideHostControl#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a></span>(<span class="hljs-params ngde">useExisting: <a href="https://angular.io/api/core/Type" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Type</a>&#x3C;T></span>): <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Provider" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Provider</a></span>;\n</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/di-controls/functions/provideHostControl#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">useExisting<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">Type&#x3C;T></code></td><td class="ngde"><p class="ngde">The <code class="ngde ng-doc-code-with-link" class="ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></code> or <code class="ngde ng-doc-code-with-link" class="ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Directive</a></code> class that should be used as a host control.</p></td></tr></tbody></table></div></section>';demo=void 0;demoAssets=void 0;constructor(){super()}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=s.Xpm({type:e,selectors:[["ng-doc-page-api-di-controls-functions-provide-host-control"]],standalone:!0,features:[s._Bn([{provide:t.a,useExisting:e}]),s.qOj,s.jDz],decls:1,vars:0,template:function(a,h){1&a&&s._UZ(0,"ng-doc-page")},dependencies:[d.z],encapsulation:2,changeDetection:0})}return e})();const i=[{path:"",component:c,title:"provideHostControl"}]}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3180,9208,5264],{3905:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>b,useMDXComponents:()=>f,withMDXComponents:()=>s});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){return function(r){var t=f(r.components);return n.createElement(e,o({},r,{components:t}))}},f=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=f(e.components);return n.createElement(c.Provider,{value:r},e.children)},v={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=f(t),d=a,p=s["".concat(u,".").concat(d)]||s[d]||v[d]||o;return t?n.createElement(p,l(l({ref:r},c),{},{components:t})):n.createElement(p,l({ref:r},c))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=p;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},39960:(e,r,t)=>{t.r(r),t.d(r,{default:()=>v});var n=t(80102),a=t(67294),o=t(73727),u=t(52263),l=t(13919),i=t(10412),c=(0,a.createContext)({collectLink:function(){}}),s=t(44996),f=t(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const v=function(e){var r,t,v=e.isNavLink,p=e.to,b=e.href,m=e.activeClassName,h=e.isActive,y=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,w=void 0===g||g,O=(0,n.Z)(e,d),E=(0,u.default)().siteConfig,j=E.trailingSlash,k=E.baseUrl,C=(0,s.useBaseUrlUtils)().withBaseUrl,P=(0,a.useContext)(c),T=p||b,x=(0,l.Z)(T),U=null==T?void 0:T.replace("pathname://",""),N=void 0!==U?(t=U,w&&function(e){return e.startsWith("/")}(t)?C(t):t):void 0;N&&x&&(N=(0,f.applyTrailingSlash)(N,{trailingSlash:j,baseUrl:k}));var _=(0,a.useRef)(!1),D=v?o.OL:o.rU,S=i.default.canUseIntersectionObserver,B=(0,a.useRef)();(0,a.useEffect)((function(){return!S&&x&&null!=N&&window.docusaurus.prefetch(N),function(){S&&B.current&&B.current.disconnect()}}),[B,N,S,x]);var I=null!==(r=null==N?void 0:N.startsWith("#"))&&void 0!==r&&r,M=!N||!x||I;return N&&x&&!I&&!y&&P.collectLink(N),M?a.createElement("a",Object.assign({href:N},T&&!x&&{target:"_blank",rel:"noopener noreferrer"},O)):a.createElement(D,Object.assign({},O,{onMouseEnter:function(){_.current||null==N||(window.docusaurus.preload(N),_.current=!0)},innerRef:function(e){var r,t;S&&e&&x&&(r=e,t=function(){null!=N&&window.docusaurus.prefetch(N)},B.current=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.current.unobserve(r),B.current.disconnect(),t())}))})),B.current.observe(r))},to:N||""},v&&{isActive:h,activeClassName:m}))}},13919:(e,r,t)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}t.d(r,{b:()=>n,Z:()=>a})},44996:(e,r,t)=>{t.r(r),t.d(r,{useBaseUrlUtils:()=>o,default:()=>u});var n=t(52263),a=t(13919);function o(){var e=(0,n.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,o=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var o=void 0===n?{}:n,u=o.forcePrependBaseUrl,l=void 0!==u&&u,i=o.absolute,c=void 0!==i&&i;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(l)return r+t;var s=t.startsWith(r)?t:r+t.replace(/^\//,"");return c?e+s:s}(o,t,e,r)}}}function u(e,r){return void 0===r&&(r={}),(0,o().withBaseUrl)(e,r)}},58215:(e,r,t)=>{t.r(r),t.d(r,{default:()=>a});var n=t(67294);const a=function(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},26396:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});var n=t(83117),a=t(67294),o=t(72389),u=t(79443);const l=function(){var e=(0,a.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=t(89521),c=t(86010);const s="tabItem_1uMI";function f(e){var r,t,n,o=e.lazy,u=e.block,f=e.defaultValue,d=e.values,v=e.groupId,p=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),m=null!=d?d:b.map((function(e){var r=e.props;return{value:r.value,label:r.label}})),h=(0,i.duplicates)(m,(function(e,r){return e.value===r.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(r=null!=f?f:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?r:null==(n=b[0])?void 0:n.props.value;if(null!==y&&!m.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+m.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),w=g.tabGroupChoices,O=g.setTabGroupChoices,E=(0,a.useState)(y),j=E[0],k=E[1],C=[],P=(0,i.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=v){var T=w[v];null!=T&&T!==j&&m.some((function(e){return e.value===T}))&&k(T)}var x=function(e){var r=e.currentTarget,t=C.indexOf(r),n=m[t].value;n!==j&&(P(r),k(n),null!=v&&O(v,n))},U=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;t=C[n]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;t=C[a]||C[C.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("tabs",{"tabs--block":u},p)},m.map((function(e){var r=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:j===r?0:-1,"aria-selected":j===r,className:(0,c.default)("tabs__item",s,{"tabs__item--active":j===r}),key:r,ref:function(e){return C.push(e)},onKeyDown:U,onFocus:x,onClick:x},null!=t?t:r)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==j})}))))}function d(e){var r=(0,o.default)();return a.createElement(f,(0,n.Z)({key:String(r)},e))}},8802:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){var t=r.trailingSlash,n=r.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var a,o=e.split(/[#?]/)[0],u="/"===o||o===n?o:(a=o,t?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,u)}},18780:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.uniq=r.applyTrailingSlash=void 0;var a=t(8802);Object.defineProperty(r,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var o=t(29964);Object.defineProperty(r,"uniq",{enumerable:!0,get:function(){return n(o).default}})},29964:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return Array.from(new Set(e))}}}]);
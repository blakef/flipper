"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3136,5891],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>p,mdx:()=>m,useMDXComponents:()=>d,withMDXComponents:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){return function(t){var n=d(t.components);return r.createElement(e,i({},t,{components:n}))}},d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),p=a,f=c["".concat(s,".").concat(p)]||c[p]||b[p]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96876:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>u,contentTitle:()=>c,metadata:()=>d,toc:()=>p,default:()=>f});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),s=n(44996),o=n(39960),l=["components"],u={},c=void 0,d={type:"mdx",permalink:"/docs/plugins/databases/setup",source:"@site/src/embedded-pages/docs/plugins/databases/setup.mdx"},p=[{value:"Android",id:"android",children:[],level:2}],b={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"android"},"Android"),(0,i.mdx)("p",null,"To use the ",(0,i.mdx)(o.default,{to:(0,s.default)("/docs/features/plugins/databases"),mdxType:"Link"},"Databases plugin"),", instantiate and add it in ",(0,i.mdx)("inlineCode",{parentName:"p"},"FlipperClient"),", as shown in the following code:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.databases.DatabasesFlipperPlugin;\n\nclient.addPlugin(new DatabasesFlipperPlugin(context));\n")),(0,i.mdx)("p",null,"By default, it will list all Sqlite databases returned by the context. If you are storing a Sqlite database somewhere else, you can specify a ",(0,i.mdx)("inlineCode",{parentName:"p"},"File")," to it:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'client.addPlugin(new DatabasesFlipperPlugin(new SqliteDatabaseDriver(context, new SqliteDatabaseProvider() {\n    @Override\n    public List<File> getDatabaseFiles() {\n        List<File> databaseFiles = new ArrayList<>();\n        for (String databaseName : context.databaseList()) {\n            databaseFiles.add(context.getDatabasePath(databaseName));\n        }\n        databaseFiles.add("...path_to_your_db...")\n        return databaseFiles;\n    }\n})));\n')),(0,i.mdx)("p",null,"If you use a different type of database other than Sqlite, you can implement a driver to be able to access it via Flipper:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"client.addPlugin(new DatabasesFlipperPlugin(new DatabaseDriver(context) {\n    @Override\n    public List getDatabases() {\n        return null;\n    }\n\n    @Override\n    public List<String> getTableNames(DatabaseDescriptor databaseDescriptor) {\n        return null;\n    }\n\n    @Override\n    public DatabaseGetTableDataResponse getTableData(DatabaseDescriptor databaseDescriptor, String table, String order, boolean reverse, int start, int count) {\n        return null;\n    }\n\n    @Override\n    public DatabaseGetTableStructureResponse getTableStructure(DatabaseDescriptor databaseDescriptor, String table) {\n        return null;\n    }\n\n    @Override\n    public DatabaseExecuteSqlResponse executeSQL(DatabaseDescriptor databaseDescriptor, String query) {\n        return null;\n    }\n    }));\n")))}f.isMDXComponent=!0},39960:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r=n(80102),a=n(67294),i=n(73727),s=n(52263),o=n(13919),l=n(10412),u=(0,a.createContext)({collectLink:function(){}}),c=n(44996),d=n(18780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const b=function(e){var t,n,b=e.isNavLink,f=e.to,m=e.href,v=e.activeClassName,g=e.isActive,y=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,D=void 0===h||h,x=(0,r.Z)(e,p),O=(0,s.default)().siteConfig,w=O.trailingSlash,P=O.baseUrl,k=(0,c.useBaseUrlUtils)().withBaseUrl,S=(0,a.useContext)(u),j=f||m,C=(0,o.Z)(j),T=null==j?void 0:j.replace("pathname://",""),N=void 0!==T?(n=T,D&&function(e){return e.startsWith("/")}(n)?k(n):n):void 0;N&&C&&(N=(0,d.applyTrailingSlash)(N,{trailingSlash:w,baseUrl:P}));var _=(0,a.useRef)(!1),E=b?i.OL:i.rU,L=l.default.canUseIntersectionObserver,M=(0,a.useRef)();(0,a.useEffect)((function(){return!L&&C&&null!=N&&window.docusaurus.prefetch(N),function(){L&&M.current&&M.current.disconnect()}}),[M,N,L,C]);var U=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,F=!N||!C||U;return N&&C&&!U&&!y&&S.collectLink(N),F?a.createElement("a",Object.assign({href:N},j&&!C&&{target:"_blank",rel:"noopener noreferrer"},x)):a.createElement(E,Object.assign({},x,{onMouseEnter:function(){_.current||null==N||(window.docusaurus.preload(N),_.current=!0)},innerRef:function(e){var t,n;L&&e&&C&&(t=e,n=function(){null!=N&&window.docusaurus.prefetch(N)},M.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(t),M.current.disconnect(),n())}))})),M.current.observe(t))},to:N||""},b&&{isActive:g,activeClassName:v}))}},13919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>a})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>i,default:()=>s});var r=n(52263),a=n(13919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,s=i.forcePrependBaseUrl,o=void 0!==s&&s,l=i.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(o)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(i,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],s="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,s)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},29964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},53237:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>u,metadata:()=>c,toc:()=>d,default:()=>b});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),s=n(96876),o=["components"],l={id:"databases",title:"Databases Plugin Setup",sidebar_label:"Databases",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/databases/docs/setup.mdx"},u=void 0,c={unversionedId:"setup/plugins/databases",id:"setup/plugins/databases",isDocsHomePage:!1,title:"Databases Plugin Setup",description:"",source:"@site/../docs/setup/plugins/databases.mdx",sourceDirName:"setup/plugins",slug:"/setup/plugins/databases",permalink:"/docs/setup/plugins/databases",editUrl:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/databases/docs/setup.mdx",tags:[],version:"current",frontMatter:{id:"databases",title:"Databases Plugin Setup",sidebar_label:"Databases",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/databases/docs/setup.mdx"},sidebar:"setup",previous:{title:"Crash Reporter",permalink:"/docs/setup/plugins/crash-reporter"},next:{title:"Images",permalink:"/docs/setup/plugins/fresco"}},d=[],p={toc:d};function b(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(s.default,{mdxType:"Article"}))}b.isMDXComponent=!0}}]);
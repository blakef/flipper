"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6228],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>s});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){return function(t){var n=d(t.components);return i.createElement(e,o({},t,{components:n}))}},d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,u=s["".concat(r,".").concat(m)]||s[m]||h[m]||o;return n?i.createElement(u,l(l({ref:t},c),{},{components:n})):i.createElement(u,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var i=n(83117),a=n(80102),o=(n(67294),n(3905)),r=n(44996),l=n(39960),p=["components"],c={id:"establishing-a-connection",title:"Secure Communication"},s=void 0,d={unversionedId:"extending/establishing-a-connection",id:"extending/establishing-a-connection",title:"Secure Communication",description:"This page provides an outline of how a connection is established between an app, with the Flipper SDK integrated, and the desktop app. This connection occurs behind the scenes inside the mobile SDK, so users shouldn't need to worry about it.",source:"@site/../docs/extending/establishing-a-connection.mdx",sourceDirName:"extending",slug:"/extending/establishing-a-connection",permalink:"/docs/extending/establishing-a-connection",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/extending/establishing-a-connection.mdx",tags:[],version:"current",frontMatter:{id:"establishing-a-connection",title:"Secure Communication"},sidebar:"main",previous:{title:"Implementing a Flipper Client",permalink:"/docs/extending/new-clients"},next:{title:"Implementing Layout Inspection",permalink:"/docs/extending/supporting-layout"}},m={},h=[{value:"Transport Protocol",id:"transport-protocol",level:2},{value:"Client-Server relationship",id:"client-server-relationship",level:2},{value:"Certificate Exchange",id:"certificate-exchange",level:2}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",t)}},f=u("OssOnly"),x=u("FbInternalOnly"),g={toc:h};function b(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.mdx)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"This page provides an outline of how a connection is established between an app, with the Flipper SDK integrated, and the desktop app. This connection occurs behind the scenes inside the mobile SDK, so users shouldn't need to worry about it."),(0,o.mdx)("p",null,"To prevent Flipper clients on mobile apps from connecting to any server that happens to be running on localhost and potentially leaking information from your app, the connection process is a little more involved than you may expect."),(0,o.mdx)("h2",{id:"transport-protocol"},"Transport Protocol"),(0,o.mdx)("p",null,"Flipper uses ",(0,o.mdx)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6455"},"WebSocket")," to communicate between the desktop and mobile apps. WebSocket enables bi-directional communication."),(0,o.mdx)("h2",{id:"client-server-relationship"},"Client-Server relationship"),(0,o.mdx)("p",null,"When the desktop app starts up, it opens a secure socket on port 9088. The Flipper client will continually attempt to connect to this port on localhost to establish a connection with the desktop app."),(0,o.mdx)("h2",{id:"certificate-exchange"},"Certificate Exchange"),(0,o.mdx)("p",null,"To avoid mobile apps from connecting to untrusted ports on localhost, a Flipper client should only connect to servers that have a valid, trusted TLS certificate.\nIn order for the mobile app to know which certificates it can trust, it conducts a certificate exchange with the desktop app before it can make its first secure connection."),(0,o.mdx)("p",null,"This is achieved through the following steps:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Desktop app starts an insecure server on port 9089."),(0,o.mdx)("li",{parentName:"ol"},"Mobile app connects to localhost:9089 and sends a Certificate Signing Request to the desktop app."),(0,o.mdx)("li",{parentName:"ol"},"Desktop app uses its private key (this is generated once and stored in ~/.flipper) to sign a client certificate for the mobile app."),(0,o.mdx)("li",{parentName:"ol"},"Along with the Certificate Signing Request, mobile app also lets the desktop app know which Certificate Exchange Medium to use:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Certificate Exchange Medium = ",(0,o.mdx)("inlineCode",{parentName:"li"},"FS_ACCESS")," - the desktop uses ADB (for Android) or the mounted file system (for iOS simulators) to write the following files to the mobile app's private data partition:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Server certificate that the mobile app can now trust."),(0,o.mdx)("li",{parentName:"ul"},"Client certificate for the mobile app to use going forward."))),(0,o.mdx)("li",{parentName:"ul"},"Certificate Exchange Medium = ",(0,o.mdx)("inlineCode",{parentName:"li"},"WWW")," - the desktop app will use your implementation of Certificate Uploader to upload the certificates:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Once uploaded, the desktop app will reply back with the device id, which can be used by the Certificate Provider on the client side to fetch those certificates.")))))),(0,o.mdx)(f,{mdxType:"OssOnly"},"Currently, Flipper does not support WWW mode but there is work underway to start support."),(0,o.mdx)(x,{mdxType:"FbInternalOnly"},"To learn about WWW mode and how to use it, refer to the ",(0,o.mdx)(l.default,{to:(0,r.default)("/docs/fb/www-certificate-exchange"),mdxType:"Link"},"WWW Certificate Exchange")," page."),(0,o.mdx)("p",null,"Now that the mobile app knows which server certificate it can trust, you can connect to the secure server."),(0,o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"This enables the mobile app to trust a certificate if and only if it is stored inside its internal data partition. Typically, it's only possible to write there with physical access to the device (that is, through ADB or a mounted simulator)."))),(0,o.mdx)("p",null,"To get the desktop app to generate a client certificate for your client and then deploy it, go through the following steps:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Use a WebSocket client to connect (insecurely) to the following URL (Parameters are defined in ",(0,o.mdx)("a",{parentName:"p",href:"/docs/extending/new-clients"},"Implementing a Flipper Client"),"):"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"localhost:9089/sonar?os={OS}\n                     &device={DEVICE}\n                    &app={APP}\n                    &sdk_version={SDK_VERSION}\n                    &medium={CERTIFICATE_EXCHANGE_MEDIUM}\n"))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"On that connection, send the following payload:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'Request = {\n  "method": "signCertificate",\n  "csr": string,\n  "destination": string,\n  "medium": int\n}\n')),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"csr")," - a Certificate Signing Request the client has generated, and ",(0,o.mdx)("inlineCode",{parentName:"li"},"destination")," identifies a location accessible to both the client and Flipper desktop, where the certificate should be placed.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"The subject Common Name (CN=...) must be included in the CSR. Your ",(0,o.mdx)("inlineCode",{parentName:"li"},"CertificateProvider")," implementation in Flipper may use this in combination with the ",(0,o.mdx)("inlineCode",{parentName:"li"},"destination")," to determine where to put the certificate. This will ask Flipper desktop to generate a client certificate, using the CSR provided, and put it into the specified ",(0,o.mdx)("inlineCode",{parentName:"li"},"destination"),"."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"destination")," - depending on the client, ",(0,o.mdx)("inlineCode",{parentName:"li"},"destination")," can have a different meaning:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("em",{parentName:"li"},"Basic example")," - a file path that both the desktop and the client have access to. With this, Flipper desktop could write the certificate to that path."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("em",{parentName:"li"},"Advanced example")," - an Android Client for which the destination specifies a relative path inside an app container: the Subject Common Name determines which app container. Together, these two pieces of information form an absolute file path inside an android device."),(0,o.mdx)("li",{parentName:"ul"},"For the Flipper desktop to work with a given Client type, it needs to be modified to know how to correctly interpret the ",(0,o.mdx)("inlineCode",{parentName:"li"},"destination")," argument and deploy certificates to it."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"medium")," - the ",(0,o.mdx)("inlineCode",{parentName:"li"},"destination")," field may not be relevant if your ",(0,o.mdx)("inlineCode",{parentName:"li"},"medium")," value is more than 1:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"medium=1"),"(default) - Flipper should do certificate exchange by directly putting certificates at ",(0,o.mdx)("inlineCode",{parentName:"li"},"destination")," in the sandbox of the app."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"medium=2")," - Flipper will use the Certificate Uploader and Provider to upload certificates and download it on the client side respectively.")))))),(0,o.mdx)("p",null,"You can see the current implementations in ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/main/desktop/flipper-server-core/src/utils/CertificateProvider.tsx"},"CertificateProvider.tsx"),"."))}b.isMDXComponent=!0}}]);
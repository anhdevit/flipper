"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9969],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>s});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){return function(t){var n=u(t.components);return r.createElement(e,o({},t,{components:n}))}},u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=i,f=s["".concat(a,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>i})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>o,default:()=>a});var r=n(52263),i=n(13919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,l=void 0!==a&&a,c=o.absolute,p=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+s:s}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},48968:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>s,toc:()=>u,default:()=>m});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=n(44996),l=["components"],c={id:"arch",title:"Architecture"},p=void 0,s={unversionedId:"extending/arch",id:"extending/arch",isDocsHomePage:!1,title:"Architecture",description:"Flipper is built to be a universal pluggable platform for development tools. Currently, Flipper focuses on Android and iOS development, but its design does not limit it to these platforms. Another way to think of Flipper is a more general-purpose implementation of Chrome DevTools.",source:"@site/../docs/extending/architecture.mdx",sourceDirName:"extending",slug:"/extending/arch",permalink:"/docs/extending/arch",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/extending/architecture.mdx",tags:[],version:"current",frontMatter:{id:"arch",title:"Architecture"},sidebar:"extending",previous:{title:"Error Handling",permalink:"/docs/extending/error-handling"},next:{title:"Client Plugin Lifecycle",permalink:"/docs/extending/client-plugin-lifecycle"}},u=[{value:"Overview",id:"overview",children:[],level:3},{value:"Architecture - React Native",id:"architecture---react-native",children:[],level:3}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Flipper is built to be a universal pluggable platform for development tools. Currently, Flipper focuses on Android and iOS development, but its design does not limit it to these platforms. Another way to think of Flipper is a more general-purpose implementation of Chrome DevTools."),(0,o.mdx)("h3",{id:"overview"},"Overview"),(0,o.mdx)("p",null,"Flipper consists of a desktop interface built with JavaScript on top of Electron so that it can be packaged to run on any operating system."),(0,o.mdx)("p",null,"This desktop app connects over a ",(0,o.mdx)("a",{parentName:"p",href:"/docs/extending/establishing-a-connection"},"TCP connection")," to applications running on simulators and connected devices. An application running on a device or simulator is called a 'client'."),(0,o.mdx)("p",null,"The connection is bi-directional, allowing the desktop to query information from the client as well allowing the client to push updates directly to the desktop."),(0,o.mdx)("p",null,"By querying data and responding to pushing from the client, a Flipper plugin is able to visualize data, debug problems, and change the behavior of running applications. Flipper provides the platform to build these tools and does not limit what kind of tools that may be."),(0,o.mdx)("p",null,"There are two types of plugins in Flipper:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Client plugins")," - expose information as an API to desktop plugins whose responsibility it is to render this information in an easy-to-digest way. Client plugins are written once for each platform in the platform's native language."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Desktop plugins")," - written only once in JavaScript using React and consume the APIs exposed by the client plugins.")),(0,o.mdx)("h3",{id:"architecture---react-native"},"Architecture - React Native"),(0,o.mdx)("p",null,"The following diagram shows a simplified visualization of the Flipper architecture when used with React Native."),(0,o.mdx)("img",{alt:"Flipper communication diagram",src:(0,a.default)("img/flipper-communication-diagram.png")}))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2593,1334],{3905:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>p,MDXProvider:()=>f,mdx:()=>h,useMDXComponents:()=>l,withMDXComponents:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){return function(r){var t=l(r.components);return n.createElement(e,a({},r,{components:t}))}},l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},f=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},57856:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>u,toc:()=>l,default:()=>d});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),i=t(44996),s=["components"],c={},p=void 0,u={type:"mdx",permalink:"/docs/plugins/crash-reporter/overview",source:"@site/src/embedded-pages/docs/plugins/crash-reporter/overview.mdx"},l=[],f={toc:l};function d(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.mdx)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,'The Crash Reporter Plugin shows a notification in Flipper whenever an app crashes. You can click on the notification to see crash information like stacktrace and other metadata. For Android, you can click the "Open in Logs" button to jump to the row in the Logs plugin with the crash information.'),(0,a.mdx)("img",{alt:"UI",src:(0,i.default)("img/crashreporterplugin.png")}),(0,a.mdx)("img",{alt:"Notification",src:(0,i.default)("img/crashreporterpluginnotification.png")}))}d.isMDXComponent=!0},13919:(e,r,t)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}t.d(r,{b:()=>n,Z:()=>o})},44996:(e,r,t)=>{t.r(r),t.d(r,{useBaseUrlUtils:()=>a,default:()=>i});var n=t(52263),o=t(13919);function a(){var e=(0,n.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,a=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,s=void 0!==i&&i,c=a.absolute,p=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(s)return r+t;var u=t.startsWith(r)?t:r+t.replace(/^\//,"");return p?e+u:u}(a,t,e,r)}}}function i(e,r){return void 0===r&&(r={}),(0,a().withBaseUrl)(e,r)}},49169:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>u,toc:()=>l,default:()=>d});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),i=t(57856),s=["components"],c={id:"crash-reporter",title:"Crash Reporter Plugin",sidebar_label:"Crash Reporter",custom_edit_url:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/crash_reporter/docs/overview.mdx"},p=void 0,u={unversionedId:"features/plugins/crash-reporter",id:"features/plugins/crash-reporter",isDocsHomePage:!1,title:"Crash Reporter Plugin",description:"\u2192 See setup instructions for the Crash Reporter plugin",source:"@site/../docs/features/plugins/crash-reporter.mdx",sourceDirName:"features/plugins",slug:"/features/plugins/crash-reporter",permalink:"/docs/features/plugins/crash-reporter",editUrl:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/crash_reporter/docs/overview.mdx",version:"current",frontMatter:{id:"crash-reporter",title:"Crash Reporter Plugin",sidebar_label:"Crash Reporter",custom_edit_url:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/crash_reporter/docs/overview.mdx"},sidebar:"features",previous:{title:"React Native Support",permalink:"/docs/features/react-native"},next:{title:"Databases",permalink:"/docs/features/plugins/databases"}},l=[],f={toc:l};function d(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.mdx)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"\u2192 ",(0,a.mdx)("a",{parentName:"p",href:"/docs/setup/plugins/crash-reporter"},"See setup instructions for the Crash Reporter plugin")),(0,a.mdx)(i.default,{mdxType:"Article"}))}d.isMDXComponent=!0}}]);
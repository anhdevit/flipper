"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4200,4321],{3905:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){return function(r){var t=p(r.components);return n.createElement(e,o({},r,{components:t}))}},p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return t?n.createElement(m,l(l({ref:r},s),{},{components:t})):n.createElement(m,l({ref:r},s))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},27527:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>u,default:()=>d});var n=t(22122),a=t(19756),o=(t(67294),t(3905)),i=(t(44996),["components"]),l={},c=void 0,s={type:"mdx",permalink:"/docs/plugins/leak-canary/overview",source:"@site/src/embedded-pages/docs/plugins/leak-canary/overview.mdx"},u=[],p={toc:u};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The LeakCanary plugin provides developers with Flipper support for ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/square/leakcanary"},"LeakCanary"),", an open source memory leak detection library."),(0,o.mdx)("p",null,"Leaks detected by LeakCanary will appear automatically in Flipper. Each leak will display a hierarchy of objects, beginning from the garbage collector root and ending at the leaked class.\nSelecting any object in this list will display contents of the object's various fields."),(0,o.mdx)("p",null,"Note: this plugin is only available for Android."))}d.isMDXComponent=!0},13919:(e,r,t)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}t.d(r,{b:()=>n,Z:()=>a})},44996:(e,r,t)=>{t.r(r),t.d(r,{useBaseUrlUtils:()=>o,default:()=>i});var n=t(52263),a=t(13919);function o(){var e=(0,n.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,o=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,l=void 0!==i&&i,c=o.absolute,s=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(l)return r+t;var u=t.startsWith(r)?t:r+t.replace(/^\//,"");return s?e+u:u}(o,t,e,r)}}}function i(e,r){return void 0===r&&(r={}),(0,o().withBaseUrl)(e,r)}},12953:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>u,toc:()=>p,default:()=>f});var n=t(22122),a=t(19756),o=(t(67294),t(3905)),i=t(27527),l=["components"],c={id:"leak-canary",title:"LeakCanary Plugin",sidebar_label:"LeakCanary",custom_edit_url:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/leak_canary/docs/overview.mdx"},s=void 0,u={unversionedId:"features/plugins/leak-canary",id:"features/plugins/leak-canary",isDocsHomePage:!1,title:"LeakCanary Plugin",description:"\u2192 See setup instructions for the LeakCanary plugin",source:"@site/../docs/features/plugins/leak-canary.mdx",sourceDirName:"features/plugins",slug:"/features/plugins/leak-canary",permalink:"/docs/features/plugins/leak-canary",editUrl:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/leak_canary/docs/overview.mdx",version:"current",frontMatter:{id:"leak-canary",title:"LeakCanary Plugin",sidebar_label:"LeakCanary",custom_edit_url:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/leak_canary/docs/overview.mdx"},sidebar:"features",previous:{title:"Layout",permalink:"/docs/features/plugins/inspector"},next:{title:"Navigation",permalink:"/docs/features/plugins/navigation"}},p=[],d={toc:p};function f(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.mdx)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"\u2192 ",(0,o.mdx)("a",{parentName:"p",href:"/docs/setup/plugins/leak-canary"},"See setup instructions for the LeakCanary plugin")),(0,o.mdx)(i.default,{mdxType:"Article"}))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[361],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){return function(n){var t=c(n.components);return r.createElement(e,i({},n,{components:t}))}},c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,g=u["".concat(a,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},86290:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>f});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),a=["components"],l={id:"loading-custom-plugins",title:"Dynamically Loading Plugins"},s=void 0,p={unversionedId:"extending/loading-custom-plugins",id:"extending/loading-custom-plugins",isDocsHomePage:!1,title:"Dynamically Loading Plugins",description:"Inside Facebook, plugins sources are stored and loaded from ~/fbsource/xplat/sonar/desktop/plugins,",source:"@site/../docs/extending/loading-custom-plugins.mdx",sourceDirName:"extending",slug:"/extending/loading-custom-plugins",permalink:"/docs/extending/loading-custom-plugins",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/loading-custom-plugins.mdx",version:"current",frontMatter:{id:"loading-custom-plugins",title:"Dynamically Loading Plugins"},sidebar:"extending",previous:{title:"Development Setup",permalink:"/docs/extending/dev-setup"},next:{title:"Plugin structure",permalink:"/docs/extending/desktop-plugin-structure"}},u=[],c=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",n)}},d=c("FbInternalOnly"),m=c("OssOnly"),g={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(d,{mdxType:"FbInternalOnly"},(0,i.mdx)("div",{class:"warning"},(0,i.mdx)("p",null,"Inside Facebook, plugins sources are stored and loaded from ",(0,i.mdx)("inlineCode",{parentName:"p"},"~/fbsource/xplat/sonar/desktop/plugins"),",\nin which case no further configuration is needed."),(0,i.mdx)("p",null,"If your team uses Flipper plugins that are stored outside ",(0,i.mdx)("inlineCode",{parentName:"p"},"fbsource"),", please follow your team specific instructions."))),(0,i.mdx)("p",null,"Flipper loads and runs plugins it finds in a configurable location. The paths searched are specified in ",(0,i.mdx)("inlineCode",{parentName:"p"},"~/.flipper/config.json"),". These paths, ",(0,i.mdx)("inlineCode",{parentName:"p"},"pluginPaths"),", should contain one folder for each of the plugins it stores. An example config setting and plugin file structure is shown below:"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"~/.flipper/config.json"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'{\n  ...,\n  "pluginPaths": ["~/flipper-plugins"]\n}\n')),(0,i.mdx)("p",null,"Plugin File example structure:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"~ flipper-plugins/\n    my-plugin/\n      package.json\n      src/index.tsx\n      dist/bundle.js\n")),(0,i.mdx)(m,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"Note: when using ",(0,i.mdx)("inlineCode",{parentName:"p"},"npx flipper-pkg init")," for scaffolding, as explained in the ",(0,i.mdx)("a",{parentName:"p",href:"../tutorial/intro"},"tutorial")," or on the next page, the path should be configured automatically for you in most cases.")),(0,i.mdx)("p",null,"Typically, the above setup is only needed if you are developing plugins.\nTo consume plugins, it is recommended to use one of the existing ",(0,i.mdx)("a",{parentName:"p",href:"plugin-distribution"},"distribution mechanisms")," instead."))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7180],{3905:(e,r,n)=>{n.r(r),n.d(r,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>s,withMDXComponents:()=>u});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),u=function(e){return function(r){var n=s(r.components);return t.createElement(e,i({},r,{components:n}))}},s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},d=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(a,".").concat(d)]||u[d]||f[d]||i;return n?t.createElement(m,p(p({ref:r},l),{},{components:n})):t.createElement(m,p({ref:r},l))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14638:(e,r,n)=>{n.r(r),n.d(r,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>l,toc:()=>u,default:()=>d});var t=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],p={},c=void 0,l={type:"mdx",permalink:"/docs/plugins/network/protobuf-retrofit",source:"@site/src/embedded-pages/docs/plugins/network/protobuf-retrofit.mdx"},u=[{value:"Gradle Dependencies",id:"gradle-dependencies",children:[]},{value:"Sending Retrofit Service",id:"sending-retrofit-service",children:[]}],s={toc:u};function d(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)("h3",{id:"gradle-dependencies"},"Gradle Dependencies"),(0,i.mdx)("p",null,"Ensure that you already have an explicit dependency in your application's\n",(0,i.mdx)("inlineCode",{parentName:"p"},"build.gradle")," including the plugin dependency, e.g."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-groovy"},'dependencies {\n  implementation "com.squareup.retrofit2:retrofit:2.9.0"\n  implementation "com.squareup.retrofit2:converter-protobuf:2.9.0"\n  \n  // update version below to match latest Flipper client app\n  debugImplementation "com.facebook.flipper:flipper-retrofit2-protobuf-plugin:0.84.0"\n}\n')),(0,i.mdx)("h3",{id:"sending-retrofit-service"},"Sending Retrofit Service"),(0,i.mdx)("p",null,"Suppose you have a Retrofit service interface ",(0,i.mdx)("inlineCode",{parentName:"p"},"PersonService")," which has Protobuf body or return types. At the time you create your implementation, call the plugin with your ",(0,i.mdx)("inlineCode",{parentName:"p"},"baseUrl")," and service class:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"import com.facebook.flipper.plugins.retrofit2protobuf.SendProtobufToFlipperFromRetrofit\n...\nval personService = retrofit.create(PersonService::class.java)\nSendProtobufToFlipperFromRetrofit(baseUrl, PersonService::class.java)\n")))}d.isMDXComponent=!0}}]);
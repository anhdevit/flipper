"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1339],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>s,mdx:()=>v,useMDXComponents:()=>d,withMDXComponents:()=>c});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){return function(t){var n=d(t.components);return r.createElement(e,a({},t,{components:n}))}},d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(n),s=o,f=c["".concat(l,".").concat(s)]||c[s]||m[s]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72002:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>m,default:()=>g,frontMatter:()=>s,metadata:()=>f,toc:()=>v});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),l=n(55064),i=n(58215),p=["components"],u={toc:[{value:"Gradle Dependencies",id:"gradle-dependencies",children:[],level:3},{value:"Sending Retrofit Service",id:"sending-retrofit-service",children:[],level:3}]};function c(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h3",{id:"gradle-dependencies"},"Gradle Dependencies"),(0,a.mdx)("p",null,"Ensure that you already have an explicit dependency in your application's\n",(0,a.mdx)("inlineCode",{parentName:"p"},"build.gradle")," including the plugin dependency, e.g."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},'dependencies {\n  implementation "com.squareup.retrofit2:retrofit:2.9.0"\n  implementation "com.squareup.retrofit2:converter-protobuf:2.9.0"\n  \n  // update version below to match latest Flipper client app\n  debugImplementation "com.facebook.flipper:flipper-retrofit2-protobuf-plugin:0.84.0"\n}\n')),(0,a.mdx)("h3",{id:"sending-retrofit-service"},"Sending Retrofit Service"),(0,a.mdx)("p",null,"Suppose you have a Retrofit service interface ",(0,a.mdx)("inlineCode",{parentName:"p"},"PersonService")," which has Protobuf body or return types. At the time you create your implementation, call the plugin with your ",(0,a.mdx)("inlineCode",{parentName:"p"},"baseUrl")," and service class:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"import com.facebook.flipper.plugins.retrofit2protobuf.SendProtobufToFlipperFromRetrofit\n...\nval personService = retrofit.create(PersonService::class.java)\nSendProtobufToFlipperFromRetrofit(baseUrl, PersonService::class.java)\n")))}c.isMDXComponent=!0;var d=["components"],s={},m=void 0,f={type:"mdx",permalink:"/docs/plugins/network/setup",source:"@site/src/embedded-pages/docs/plugins/network/setup.mdx"},v=[{value:"Android",id:"android",children:[{value:"OkHttp Integration",id:"okhttp-integration",children:[],level:3},{value:"Protobuf / Retrofit Integration",id:"protobuf--retrofit-integration",children:[],level:3}],level:2},{value:"iOS",id:"ios",children:[],level:2},{value:"Protobut + Retrofit Setup",id:"protobut--retrofit-setup",children:[],level:2}],b={toc:v};function g(e){var t=e.components,n=(0,o.Z)(e,d);return(0,a.mdx)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"To use the network plugin, you need to add the plugin to your Flipper client instance."),(0,a.mdx)("h2",{id:"android"},"Android"),(0,a.mdx)("p",null,"The network plugin is shipped as a separate Maven artifact:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-network-plugin:0.122.0'\n}\n")),(0,a.mdx)("p",null,"Once added to your dependencies, you can instantiate the plugin and add it to\nthe client:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.NetworkFlipperPlugin;\n\nNetworkFlipperPlugin networkFlipperPlugin = new NetworkFlipperPlugin();\nnew NetworkingModule.CustomClientBuilder() {\n    @Override\n    public void apply(OkHttpClient.Builder builder) {\n        builder.addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin));\n    }\n});\nclient.addPlugin(networkFlipperPlugin);\n")),(0,a.mdx)("h3",{id:"okhttp-integration"},"OkHttp Integration"),(0,a.mdx)("p",null,"If you are using the popular OkHttp library, you can use the Interceptors system to automatically hook into your existing stack."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor;\n\nnew OkHttpClient.Builder()\n    .addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin))\n    .build();\n")),(0,a.mdx)("p",null,"As interceptors can modify the request and response, add the Flipper interceptor after all others to get an accurate view of the network traffic."),(0,a.mdx)("h3",{id:"protobuf--retrofit-integration"},"Protobuf / Retrofit Integration"),(0,a.mdx)("p",null,"If you are using Retrofit with Protobuf request or response types, you can setup automatic decoding so that the network inspector can display a human readable payload. First you must add the separate dependency:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-retrofit2-protobuf-plugin:0.91.2'\n}\n")),(0,a.mdx)("p",null,"Then call ",(0,a.mdx)("inlineCode",{parentName:"p"},"SendProtobufToFlipperFromRetrofit")," for each service class."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},'import com.facebook.flipper.plugins.retrofit2protobuf.SendProtobufToFlipperFromRetrofit\n\nSendProtobufToFlipperFromRetrofit("https://baseurl.com/", MyApiService::class.java)\n')),(0,a.mdx)("h2",{id:"ios"},"iOS"),(0,a.mdx)("p",null,"To enable network inspection, add the following pod to your Podfile:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version\n")),(0,a.mdx)("p",null,"Initialise the plugin in the following way by updating AppDelegate.m:"),(0,a.mdx)(l.Z,{defaultValue:"objc",values:[{label:"ObjC",value:"objc"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,a.mdx)(i.Z,{value:"objc",mdxType:"TabItem"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n\n[[FlipperClient sharedClient] addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n\n"))),(0,a.mdx)(i.Z,{value:"swift",mdxType:"TabItem"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nclient?.add(FlipperKitNetworkPlugin(networkAdapter: SKIOSNetworkAdapter()))\n\n")))),(0,a.mdx)("h2",{id:"protobut--retrofit-setup"},"Protobut + Retrofit Setup"),(0,a.mdx)(c,{mdxType:"ProtobufRetrofitSetup"}))}g.isMDXComponent=!0},58215:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);const o=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(83117),o=n(67294),a=n(72389),l=n(79443);const i=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var p=n(83039),u=n(86010);const c="tabItem_1uMI";function d(e){var t,n,r,a=e.lazy,l=e.block,d=e.defaultValue,s=e.values,m=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=s?s:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,p.duplicates)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),w=y.tabGroupChoices,x=y.setTabGroupChoices,k=(0,o.useState)(h),N=k[0],O=k[1],P=[],T=(0,p.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=w[m];null!=S&&S!==N&&b.some((function(e){return e.value===S}))&&O(S)}var F=function(e){var t=e.currentTarget,n=P.indexOf(t),r=b[n].value;r!==N&&(T(t),O(r),null!=m&&x(m,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=P.indexOf(e.currentTarget)+1;n=P[r]||P[0];break;case"ArrowLeft":var o=P.indexOf(e.currentTarget)-1;n=P[o]||P[P.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.default)("tabs",{"tabs--block":l},f)},b.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,u.default)("tabs__item",c,{"tabs__item--active":N===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:j,onFocus:F,onClick:F},null!=n?n:t)}))),a?(0,o.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function s(e){var t=(0,a.default)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},79443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)(void 0)}}]);
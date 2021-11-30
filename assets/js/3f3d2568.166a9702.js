"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3541,1339],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>s,mdx:()=>v,useMDXComponents:()=>d,withMDXComponents:()=>c});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){return function(t){var n=d(t.components);return r.createElement(e,i({},t,{components:n}))}},d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(n),s=o,f=c["".concat(a,".").concat(s)]||c[s]||m[s]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72002:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>m,default:()=>b,frontMatter:()=>s,metadata:()=>f,toc:()=>v});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=n(55064),l=n(58215),p=["components"],u={toc:[{value:"Gradle Dependencies",id:"gradle-dependencies",children:[],level:3},{value:"Sending Retrofit Service",id:"sending-retrofit-service",children:[],level:3}]};function c(e){var t=e.components,n=(0,o.Z)(e,p);return(0,i.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h3",{id:"gradle-dependencies"},"Gradle Dependencies"),(0,i.mdx)("p",null,"Ensure that you already have an explicit dependency in your application's\n",(0,i.mdx)("inlineCode",{parentName:"p"},"build.gradle")," including the plugin dependency, e.g."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-groovy"},'dependencies {\n  implementation "com.squareup.retrofit2:retrofit:2.9.0"\n  implementation "com.squareup.retrofit2:converter-protobuf:2.9.0"\n  \n  // update version below to match latest Flipper client app\n  debugImplementation "com.facebook.flipper:flipper-retrofit2-protobuf-plugin:0.84.0"\n}\n')),(0,i.mdx)("h3",{id:"sending-retrofit-service"},"Sending Retrofit Service"),(0,i.mdx)("p",null,"Suppose you have a Retrofit service interface ",(0,i.mdx)("inlineCode",{parentName:"p"},"PersonService")," which has Protobuf body or return types. At the time you create your implementation, call the plugin with your ",(0,i.mdx)("inlineCode",{parentName:"p"},"baseUrl")," and service class:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"import com.facebook.flipper.plugins.retrofit2protobuf.SendProtobufToFlipperFromRetrofit\n...\nval personService = retrofit.create(PersonService::class.java)\nSendProtobufToFlipperFromRetrofit(baseUrl, PersonService::class.java)\n")))}c.isMDXComponent=!0;var d=["components"],s={},m=void 0,f={type:"mdx",permalink:"/docs/plugins/network/setup",source:"@site/src/embedded-pages/docs/plugins/network/setup.mdx"},v=[{value:"Android",id:"android",children:[{value:"OkHttp Integration",id:"okhttp-integration",children:[],level:3},{value:"Protobuf / Retrofit Integration",id:"protobuf--retrofit-integration",children:[],level:3}],level:2},{value:"iOS",id:"ios",children:[],level:2},{value:"Protobut + Retrofit Setup",id:"protobut--retrofit-setup",children:[],level:2}],g={toc:v};function b(e){var t=e.components,n=(0,o.Z)(e,d);return(0,i.mdx)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"To use the network plugin, you need to add the plugin to your Flipper client instance."),(0,i.mdx)("h2",{id:"android"},"Android"),(0,i.mdx)("p",null,"The network plugin is shipped as a separate Maven artifact:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-network-plugin:0.122.0'\n}\n")),(0,i.mdx)("p",null,"Once added to your dependencies, you can instantiate the plugin and add it to\nthe client:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.NetworkFlipperPlugin;\n\nNetworkFlipperPlugin networkFlipperPlugin = new NetworkFlipperPlugin();\nnew NetworkingModule.CustomClientBuilder() {\n    @Override\n    public void apply(OkHttpClient.Builder builder) {\n        builder.addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin));\n    }\n});\nclient.addPlugin(networkFlipperPlugin);\n")),(0,i.mdx)("h3",{id:"okhttp-integration"},"OkHttp Integration"),(0,i.mdx)("p",null,"If you are using the popular OkHttp library, you can use the Interceptors system to automatically hook into your existing stack."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor;\n\nnew OkHttpClient.Builder()\n    .addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin))\n    .build();\n")),(0,i.mdx)("p",null,"As interceptors can modify the request and response, add the Flipper interceptor after all others to get an accurate view of the network traffic."),(0,i.mdx)("h3",{id:"protobuf--retrofit-integration"},"Protobuf / Retrofit Integration"),(0,i.mdx)("p",null,"If you are using Retrofit with Protobuf request or response types, you can setup automatic decoding so that the network inspector can display a human readable payload. First you must add the separate dependency:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-retrofit2-protobuf-plugin:0.91.2'\n}\n")),(0,i.mdx)("p",null,"Then call ",(0,i.mdx)("inlineCode",{parentName:"p"},"SendProtobufToFlipperFromRetrofit")," for each service class."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin"},'import com.facebook.flipper.plugins.retrofit2protobuf.SendProtobufToFlipperFromRetrofit\n\nSendProtobufToFlipperFromRetrofit("https://baseurl.com/", MyApiService::class.java)\n')),(0,i.mdx)("h2",{id:"ios"},"iOS"),(0,i.mdx)("p",null,"To enable network inspection, add the following pod to your Podfile:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version\n")),(0,i.mdx)("p",null,"Initialise the plugin in the following way by updating AppDelegate.m:"),(0,i.mdx)(a.Z,{defaultValue:"objc",values:[{label:"ObjC",value:"objc"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,i.mdx)(l.Z,{value:"objc",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n\n[[FlipperClient sharedClient] addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n\n"))),(0,i.mdx)(l.Z,{value:"swift",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nclient?.add(FlipperKitNetworkPlugin(networkAdapter: SKIOSNetworkAdapter()))\n\n")))),(0,i.mdx)("h2",{id:"protobut--retrofit-setup"},"Protobut + Retrofit Setup"),(0,i.mdx)(c,{mdxType:"ProtobufRetrofitSetup"}))}b.isMDXComponent=!0},58215:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);const o=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(83117),o=n(67294),i=n(72389),a=n(79443);const l=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var p=n(83039),u=n(86010);const c="tabItem_1uMI";function d(e){var t,n,r,i=e.lazy,a=e.block,d=e.defaultValue,s=e.values,m=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=s?s:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,p.duplicates)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==h&&!g.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),w=y.tabGroupChoices,k=y.setTabGroupChoices,x=(0,o.useState)(h),N=x[0],P=x[1],O=[],T=(0,p.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=w[m];null!=S&&S!==N&&g.some((function(e){return e.value===S}))&&P(S)}var F=function(e){var t=e.currentTarget,n=O.indexOf(t),r=g[n].value;r!==N&&(T(t),P(r),null!=m&&k(m,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.default)("tabs",{"tabs--block":a},f)},g.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,u.default)("tabs__item",c,{"tabs__item--active":N===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:F,onClick:F},null!=n?n:t)}))),i?(0,o.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function s(e){var t=(0,i.default)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},79443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)(void 0)},98945:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>u,metadata:()=>c,toc:()=>d,default:()=>m});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=n(72002),l=["components"],p={id:"network",title:"Network Plugin Setup",sidebar_label:"Network",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/network/docs/setup.mdx"},u=void 0,c={unversionedId:"setup/plugins/network",id:"setup/plugins/network",isDocsHomePage:!1,title:"Network Plugin Setup",description:"",source:"@site/../docs/setup/plugins/network.mdx",sourceDirName:"setup/plugins",slug:"/setup/plugins/network",permalink:"/docs/setup/plugins/network",editUrl:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/network/docs/setup.mdx",tags:[],version:"current",frontMatter:{id:"network",title:"Network Plugin Setup",sidebar_label:"Network",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/network/docs/setup.mdx"},sidebar:"setup",previous:{title:"Navigation",permalink:"/docs/setup/plugins/navigation"},next:{title:"Shared Preferences Viewer",permalink:"/docs/setup/plugins/preferences"}},d=[],s={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(a.default,{mdxType:"Article"}))}m.isMDXComponent=!0}}]);
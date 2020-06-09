(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{214:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(11),i=(r(0),r(219)),o=r(221),c={id:"react-native",title:"Set up your React Native App",sidebar_label:"React Native"},l={id:"getting-started/react-native",title:"Set up your React Native App",description:"Starting with React Native 0.62, after generating your project with react-native init, the Flipper integration is ready out of the box for debug builds:",source:"@site/../docs/getting-started/react-native.mdx",permalink:"/docs/getting-started/react-native",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/getting-started/react-native.mdx",sidebar_label:"React Native",sidebar:"setup",previous:{title:"Set up your iOS app",permalink:"/docs/getting-started/ios-native"},next:{title:"Manually set up your React Native Android App",permalink:"/docs/getting-started/react-native-android"}},u=[{value:"Manual Setup",id:"manual-setup",children:[]}],p={rightToc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Starting with React Native 0.62, after generating your project with ",Object(i.b)("inlineCode",{parentName:"p"},"react-native init"),", the Flipper integration is ready out of the box for debug builds:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For Android, start the Flipper Desktop application, and start your project using ",Object(i.b)("inlineCode",{parentName:"li"},"yarn android"),". Your application will appear in Flipper."),Object(i.b)("li",{parentName:"ul"},"For iOS, run ",Object(i.b)("inlineCode",{parentName:"li"},"pod install")," once in the ",Object(i.b)("inlineCode",{parentName:"li"},"ios")," directory of your project. After that, run ",Object(i.b)("inlineCode",{parentName:"li"},"yarn ios")," and start Flipper. Your application will show up in Flipper.")),Object(i.b)("p",null,"By default, the following plugins will be available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Layout Inspector"),Object(i.b)("li",{parentName:"ul"},"Network"),Object(i.b)("li",{parentName:"ul"},"Databases"),Object(i.b)("li",{parentName:"ul"},"Images"),Object(i.b)("li",{parentName:"ul"},"Shared Preferences"),Object(i.b)("li",{parentName:"ul"},"Crash Reporter"),Object(i.b)("li",{parentName:"ul"},"React DevTools"),Object(i.b)("li",{parentName:"ul"},"Metro Logs")),Object(i.b)("p",null,"Additional plugins can be installed through the plugin manager."),Object(i.b)("p",null,"To create your own plugins and integrate with Flipper using JavaScript, check out our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../tutorial/react-native"}),"writing plugins for React Native")," tutorial!"),Object(i.b)("p",null,"To update the Flipper SDK in your project, you bump the version in the ",Object(i.b)("inlineCode",{parentName:"p"},"ios/Podfile")," and ",Object(i.b)("inlineCode",{parentName:"p"},"android/gradle.properties")," files of your project."),Object(i.b)("h2",{id:"manual-setup"},"Manual Setup"),Object(i.b)("p",null,"If you are not using a default React Native template or cannot use the upgrade tool,\nyou can find instructions for how to integate Flipper into your projects in these guides:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:Object(o.a)("/docs/getting-started/react-native-android")},"React Native for Android")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:Object(o.a)("/docs/getting-started/react-native-ios")},"React Native for iOS"))))}s.isMDXComponent=!0},219:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,f=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return r?a.a.createElement(f,c({ref:t},u,{components:r})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},220:function(e,t,r){"use strict";var n=r(0),a=r(60);t.a=function(){return Object(n.useContext)(a.a)}},221:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(222);var n=r(220);function a(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},222:function(e,t,r){"use strict";var n=r(8),a=r(10),i=r(223),o="".startsWith;n(n.P+n.F*r(224)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return o?o.call(t,n,r):t.slice(r,r+n.length)===n}})},223:function(e,t,r){var n=r(85),a=r(30);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},224:function(e,t,r){var n=r(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);
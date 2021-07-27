"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4556],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),d=function(e){return function(t){var n=p(t.components);return r.createElement(e,a({},t,{components:n}))}},p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,h=d["".concat(o,".").concat(c)]||d[c]||m[c]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},36742:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(19756),i=n(67294),a=n(73727),o=n(52263),l=n(13919),s=n(10412),u=(0,i.createContext)({collectLink:function(){}}),d=n(44996),p=n(18780),c=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var t,n,m=e.isNavLink,h=e.to,f=e.href,b=e.activeClassName,g=e.isActive,w=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,y=void 0===v||v,x=(0,r.Z)(e,c),k=(0,o.default)().siteConfig,C=k.trailingSlash,O=k.baseUrl,T=(0,d.useBaseUrlUtils)().withBaseUrl,j=(0,i.useContext)(u),N=h||f,P=(0,l.Z)(N),D=null==N?void 0:N.replace("pathname://",""),U=void 0!==D?(n=D,y&&function(e){return e.startsWith("/")}(n)?T(n):n):void 0;U&&P&&(U=(0,p.applyTrailingSlash)(U,{trailingSlash:C,baseUrl:O}));var E,S=(0,i.useRef)(!1),_=m?a.OL:a.rU,M=s.default.canUseIntersectionObserver;(0,i.useEffect)((function(){return!M&&P&&null!=U&&window.docusaurus.prefetch(U),function(){M&&E&&E.disconnect()}}),[U,M,P]);var R=null!==(t=null==U?void 0:U.startsWith("#"))&&void 0!==t&&t,W=!U||!P||R;return U&&P&&!R&&!w&&j.collectLink(U),W?i.createElement("a",Object.assign({href:U},N&&!P&&{target:"_blank",rel:"noopener noreferrer"},x)):i.createElement(_,Object.assign({},x,{onMouseEnter:function(){S.current||null==U||(window.docusaurus.preload(U),S.current=!0)},innerRef:function(e){var t,n;M&&e&&P&&(t=e,n=function(){null!=U&&window.docusaurus.prefetch(U)},(E=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),n())}))}))).observe(t))},to:U||""},m&&{isActive:g,activeClassName:b}))}},13919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>i})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>a,default:()=>o});var r=n(52263),i=n(13919);function a(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,l=void 0!==o&&o,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+d:d}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},29964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},3599:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>u,metadata:()=>d,toc:()=>p,default:()=>m});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=n(44996),l=(n(36742),["components"]),s={id:"js-table",title:"Showing a table",sidebar_label:"Desktop Plugin - Table"},u=void 0,d={unversionedId:"tutorial/js-table",id:"tutorial/js-table",isDocsHomePage:!1,title:"Showing a table",description:"Building a Table",source:"@site/../docs/tutorial/js-table.mdx",sourceDirName:"tutorial",slug:"/tutorial/js-table",permalink:"/docs/tutorial/js-table",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/tutorial/js-table.mdx",version:"current",frontMatter:{id:"js-table",title:"Showing a table",sidebar_label:"Desktop Plugin - Table"},sidebar:"extending",previous:{title:"Desktop Plugin - Setup",permalink:"/docs/tutorial/js-setup"},next:{title:"Desktop Plugin - Custom UI",permalink:"/docs/tutorial/js-custom"}},p=[{value:"Building a Table",id:"building-a-table",children:[{value:"Row Types",id:"row-types",children:[]},{value:"Columns",id:"columns",children:[]},{value:"Configuring the table",id:"configuring-the-table",children:[]}]},{value:"What&#39;s next?",id:"whats-next",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.mdx)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("img",{alt:"Android Tutorial App",src:(0,o.default)("img/android-tutorial-desktop.png")}),(0,a.mdx)("h2",{id:"building-a-table"},"Building a Table"),(0,a.mdx)("p",null,"We have found that one of the most useful things you can do to understand how your app works\nis to give you easy access to the underlying data used to display items on screen. A very\neasy way of doing this is by showing the data in a table. We have optimized for this\nparticular use case that makes it dead-simple to expose your data in a table that you\ncan sort, filter and select items for more detailed information.\nFor the purpose of this tutorial, we will be editing the ",(0,a.mdx)("inlineCode",{parentName:"p"},"index.tsx")," file that was generated in the previous scaffolding step, and update it as follows:"),(0,a.mdx)("h3",{id:"row-types"},"Row Types"),(0,a.mdx)("p",null,"We start by defining what our table rows look like as types:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-typescript"},"type Row = {\n  id: number,\n  title: string,\n  url: string,\n};\n")),(0,a.mdx)("p",null,"It is important that you have some unique identifier for every row so\nthat we know when something new was added to the table. We will use the\n",(0,a.mdx)("inlineCode",{parentName:"p"},"id")," field here for this purpose."),(0,a.mdx)("h3",{id:"columns"},"Columns"),(0,a.mdx)("p",null,"Next, we define which columns to show and how to display them:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-typescript"},"import {DataTableColumn} from 'flipper-plugin';\n\nconst columns: DataTableColumn<Row>[] = [\n  {\n    key: 'title',\n    width: 150,\n  },\n  {\n    key: 'url',\n    title: 'URL',\n  },\n];\n")),(0,a.mdx)("p",null,"The keys used here will show up again in the next step when building\nyour rows, so keep them consistent. The ",(0,a.mdx)("inlineCode",{parentName:"p"},"title")," we define for each column will show up as the header at the top of the table, and will be default to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"key")," value if omitted."),(0,a.mdx)("p",null,"For the ",(0,a.mdx)("inlineCode",{parentName:"p"},"width")," you can either choose a fixed number (pixels), a percentage, or leave it out\nto distribute the remaining available space."),(0,a.mdx)("h3",{id:"configuring-the-table"},"Configuring the table"),(0,a.mdx)("p",null,"With a type describing the data we'll be storing, ",(0,a.mdx)("inlineCode",{parentName:"p"},"Row"),", and a descriptions of the columns to display, getting up table showing our data, including search / sort and a details view is now trivial!"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-typescript"},"import {DataTableColumn, createTablePlugin} from 'flipper-plugin';\n\nmodule.exports = createTablePlugin<Row>({\n  columns,\n  method: 'newRow',\n  key: 'id',\n});\n")),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"method")," refers to the method that should be listened to to fill the table with data.\nThe string ",(0,a.mdx)("inlineCode",{parentName:"p"},'"newRow"')," that is used here refers back to identifier we used with ",(0,a.mdx)("inlineCode",{parentName:"p"},"connection.send")," to send our data to the Flipper desktop application in the previous step."),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"key")," property is optional, but by setting it the ",(0,a.mdx)("inlineCode",{parentName:"p"},"'id'")," field will be used as identifier. As a result, once a ",(0,a.mdx)("inlineCode",{parentName:"p"},"newRow")," message arrives with an existing ",(0,a.mdx)("inlineCode",{parentName:"p"},"id"),", it will overwrite the old entry, rather than appending a new one."),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"createTablePlugin")," API supports more options, which are documented ",(0,a.mdx)("a",{parentName:"p",href:"../extending/flipper-plugin#createtableplugin"},"here"),"."),(0,a.mdx)("p",null,"And that's it! Starting Flipper will now compile your\nplugin and connect to the native side. It's a good\nidea to start Flipper from the command line to see\nany potential errors. The console in the DevTools\nis a great source of information if something doesn't\nwork as expected, too.\nThe final result of this step can be seen at ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/seamammals/src/index_table.tsx"},"index_table.tsx"),"."),(0,a.mdx)("h2",{id:"whats-next"},"What's next?"),(0,a.mdx)("p",null,"You now have an interactive table that you can sort,\nfilter and use to get additional information about\nthe stuff you see on screen.\n",(0,a.mdx)("inlineCode",{parentName:"p"},"createTablePlugin")," is a high level abstraction that takes care of both connection management and a standardized UI for the most common scenario. "),(0,a.mdx)("p",null,"For many cases, this is already all you need. However,\nsometimes you want to go the extra mile and want\nto build something a bit more custom. That's what\nwe're going to do in the next part of our tutorial."))}m.isMDXComponent=!0}}]);
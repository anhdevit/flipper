"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3772],{20830:(e,t,n)=>{n.d(t,{W:()=>r});var a=n(67294);function r(){return a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},18617:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294);const r="iconExternalLink_3J9K";const l=function(e){var t=e.width,n=void 0===t?13.5:t,l=e.height,o=void 0===l?13.5:l;return a.createElement("svg",{width:n,height:o,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},84478:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(22122),r=n(19756),l=n(67294),o=["width","height","className"];const c=function(e){var t=e.width,n=void 0===t?30:t,c=e.height,i=void 0===c?30:c,s=e.className,u=(0,r.Z)(e,o);return l.createElement("svg",(0,a.Z)({className:s,width:n,height:i,viewBox:"0 0 30 30","aria-hidden":"true"},u),l.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},83772:(e,t,n)=>{n.d(t,{Z:()=>Ze});var a=n(67294),r=n(86010),l=n(5977),o=n(24973),c=n(39306);const i="skipToContent_1oUP";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const u=function(){var e=(0,a.useRef)(null),t=(0,l.k6)().action;return(0,c.SL)((function(n){var a=n.location;e.current&&!a.hash&&"POP"!==t&&s(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:i,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},a.createElement(o.default,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_3WsW",d="announcementBarClose_38nx",f="announcementBarContent_3EUC",v="announcementBarCloseable_3myR";const h=function(){var e,t=(0,c.nT)(),n=t.isClosed,l=t.close,i=(0,c.LU)().announcementBar;if(!i)return null;var s=i.content,u=i.backgroundColor,h=i.textColor,g=i.isCloseable;return!s||g&&n?null:a.createElement("div",{className:m,style:{backgroundColor:u,color:h},role:"banner"},a.createElement("div",{className:(0,r.default)(f,(e={},e[v]=g,e)),dangerouslySetInnerHTML:{__html:s}}),g?a.createElement("button",{type:"button",className:(0,r.default)(d,"clean-btn"),onClick:l,"aria-label":(0,o.translate)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)};var g=n(22122),p=n(19756),E=n(73935),b=n(52263),k=n(44996),y=n(36742),C=n(99105),w=n(6397);function N(){return a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var _=n(20830);function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S="Ctrl";var D=a.forwardRef((function(e,t){var n=e.translations,r=void 0===n?{}:n,l=L(e,["translations"]),o=r.buttonText,c=void 0===o?"Search":o,i=r.buttonAriaLabel,s=void 0===i?"Search":i,u=(0,a.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":S:null}),[]);return a.createElement("button",Z({type:"button",className:"DocSearch DocSearch-Button","aria-label":s},l,{ref:t}),a.createElement("span",{className:"DocSearch-Button-Container"},a.createElement(_.W,null),a.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),a.createElement("span",{className:"DocSearch-Button-Keys"},null!==u&&a.createElement(a.Fragment,null,a.createElement("span",{className:"DocSearch-Button-Key"},u===S?a.createElement(N,null):u),a.createElement("span",{className:"DocSearch-Button-Key"},"K"))))})),I=n(80907);function T(){var e=function(){var e=(0,b.default)().i18n,t=(0,I.useAllDocsData)(),n=(0,I.useActivePluginAndVersion)(),a=(0,c.Oh)(),r=[c.HX].concat(Object.keys(t).map((function(e){var r,l,o=(null==n||null==(r=n.activePlugin)?void 0:r.pluginId)===e?n.activeVersion:void 0,i=a[e],s=t[e].versions.find((function(e){return e.isLast})),u=null!=(l=null!=o?o:i)?l:s;return(0,c.os)(e,u.name)})));return{locale:e.currentLocale,tags:r}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}const A="searchBox_1Doo";var B=["contextualSearch"],P=null;function x(e){var t=e.hit,n=e.children;return a.createElement(y.default,{to:t.url},n)}function M(e){var t=e.state,n=e.onClose,r=(0,w.Z)().generateSearchPageLink;return a.createElement(y.default,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function O(e){var t,r,c=e.contextualSearch,i=(0,p.Z)(e,B),s=(0,b.default)().siteMetadata,u=T(),m=null!=(t=null==(r=i.searchParameters)?void 0:r.facetFilters)?t:[],d=c?[].concat(u,m):m,f=Object.assign({},i.searchParameters,{facetFilters:d}),v=(0,k.useBaseUrlUtils)().withBaseUrl,h=(0,l.k6)(),y=(0,a.useRef)(null),w=(0,a.useRef)(null),N=(0,a.useState)(!1),_=N[0],Z=N[1],L=(0,a.useState)(null),S=L[0],I=L[1],O=(0,a.useCallback)((function(){return P?Promise.resolve():Promise.all([n.e(4300).then(n.bind(n,44300)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,46945)),Promise.all([n.e(532),n.e(5256)]).then(n.bind(n,95256))]).then((function(e){var t=e[0].DocSearchModal;P=t}))}),[]),U=(0,a.useCallback)((function(){O().then((function(){y.current=document.createElement("div"),document.body.insertBefore(y.current,document.body.firstChild),Z(!0)}))}),[O,Z]),R=(0,a.useCallback)((function(){Z(!1),y.current.remove()}),[Z]),V=(0,a.useCallback)((function(e){O().then((function(){Z(!0),I(e.key)}))}),[O,Z,I]),H=(0,a.useRef)({navigate:function(e){var t=e.itemUrl;h.push(t)}}).current,j=(0,a.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:v(""+t.pathname+t.hash)})}))})).current,W=(0,a.useMemo)((function(){return function(e){return a.createElement(M,(0,g.Z)({},e,{onClose:R}))}}),[R]),z=(0,a.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",s.docusaurusVersion),e}),[s.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,l=e.onInput,o=e.searchButtonRef;a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?r():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&l&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&l(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r,l,o])}({isOpen:_,onOpen:U,onClose:R,onInput:V,searchButtonRef:w});var q=(0,o.translate)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return a.createElement(a.Fragment,null,a.createElement(C.Z,null,a.createElement("link",{rel:"preconnect",href:"https://"+i.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),a.createElement("div",{className:A},a.createElement(D,{onTouchStart:O,onFocus:O,onMouseOver:O,onClick:U,ref:w,translations:{buttonText:q,buttonAriaLabel:q}})),_&&(0,E.createPortal)(a.createElement(P,(0,g.Z)({onClose:R,initialScrollY:window.scrollY,initialQuery:S,navigator:H,transformItems:j,hitComponent:x,resultsFooterComponent:W,transformSearchClient:z},i,{searchParameters:f})),y.current))}const U=function(){var e=(0,b.default)().siteConfig;return a.createElement(O,e.themeConfig.algolia)},R={toggle:"toggle_71bT"};var V=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.default)(R.toggle,R.dark),style:n},t)},H=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.default)(R.toggle,R.light),style:n},t)},j=(0,a.memo)((function(e){var t=e.className,n=e.icons,l=e.checked,o=e.disabled,c=e.onChange,i=(0,a.useState)(l),s=i[0],u=i[1],m=(0,a.useState)(!1),d=m[0],f=m[1],v=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.default)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function W(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,r=t.darkIconStyle,l=t.lightIcon,o=t.lightIconStyle,i=(0,b.default)().isClient;return a.createElement(j,(0,g.Z)({disabled:!i,icons:{checked:a.createElement(V,{icon:n,style:r}),unchecked:a.createElement(H,{icon:l,style:o})}},e))}var z=n(85350),q=n(77898);const F=function(e){var t=(0,l.TH)(),n=(0,a.useState)(e),r=n[0],o=n[1],i=(0,a.useRef)(!1),s=(0,a.useState)(0),u=s[0],m=s[1],d=(0,a.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,q.Z)((function(t,n){var a=t.scrollY,r=n.scrollY;if(e)if(a<u)o(!0);else{if(i.current)return i.current=!1,void o(!1);r&&0===a&&o(!0);var l=document.documentElement.scrollHeight-u,c=window.innerHeight;r&&a>=r?o(!1):a+c<l&&o(!0)}}),[u,i]),(0,c.SL)((function(t){e&&!t.location.hash&&o(!0)})),(0,a.useEffect)((function(){e&&t.hash&&(i.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:r}};var K=n(31839),G=n(93783),Y=n(5525),Q=["width","height"];const X=function(e){var t=e.width,n=void 0===t?20:t,r=e.height,l=void 0===r?20:r,o=(0,p.Z)(e,Q);return a.createElement("svg",(0,g.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},o),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};var J=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function $(e){var t=e.mobile,n=e.dropdownItemsBefore,r=e.dropdownItemsAfter,l=(0,p.Z)(e,J),o=(0,b.default)().i18n,i=o.currentLocale,s=o.locales,u=o.localeConfigs,m=(0,c.l5)();function d(e){return u[e].label}var f=s.map((function(e){var t="pathname://"+m.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===i?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),v=[].concat(n,f,r),h=t?"Languages":d(i);return a.createElement(Y.Z,(0,g.Z)({},l,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(X,{style:{verticalAlign:"text-bottom",marginRight:5}}),a.createElement("span",null,h)),items:v}))}function ee(e){return e.mobile?null:a.createElement(U,null)}var te=["type"],ne={default:function(){return Y.Z},localeDropdown:function(){return $},search:function(){return ee},docsVersion:function(){return n(47250).Z},docsVersionDropdown:function(){return n(59308).Z},doc:function(){return n(76400).Z}};function ae(e){var t=e.type,n=(0,p.Z)(e,te),r=function(e){void 0===e&&(e="default");var t=ne[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(t);return a.createElement(r,n)}var re=n(55537),le=n(84478);const oe="displayOnlyInLargeViewport_GrZ2",ce="navbarHideable_2qcr",ie="navbarHidden_3yey";var se="right";const ue=function(){var e,t=(0,c.LU)(),n=t.navbar,l=n.items,o=n.hideOnScroll,i=n.style,s=t.colorMode.disableSwitch,u=(0,a.useState)(!1),m=u[0],d=u[1],f=(0,z.Z)(),v=f.isDarkTheme,h=f.setLightTheme,p=f.setDarkTheme,E=F(o),b=E.navbarRef,k=E.isNavbarVisible;(0,K.Z)(m);var y=(0,a.useCallback)((function(){d(!0)}),[d]),C=(0,a.useCallback)((function(){d(!1)}),[d]),w=(0,a.useCallback)((function(e){return e.target.checked?p():h()}),[h,p]),N=(0,G.Z)();(0,a.useEffect)((function(){N===G.D.desktop&&d(!1)}),[N]);var _=l.some((function(e){return"search"===e.type})),Z=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:se)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:se)}))}}(l),L=Z.leftItems,S=Z.rightItems;return a.createElement("nav",{ref:b,className:(0,r.default)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":m},e[ce]=o,e[ie]=o&&!k,e))},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},null!=l&&0!==l.length&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:y,onKeyDown:y},a.createElement(le.Z,null)),a.createElement(re.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),L.map((function(e,t){return a.createElement(ae,(0,g.Z)({},e,{key:t}))}))),a.createElement("div",{className:"navbar__items navbar__items--right"},S.map((function(e,t){return a.createElement(ae,(0,g.Z)({},e,{key:t}))})),!s&&a.createElement(W,{className:oe,checked:v,onChange:w}),!_&&a.createElement(U,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:C}),a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(re.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:C}),!s&&m&&a.createElement(W,{checked:v,onChange:w})),a.createElement("div",{className:"navbar-sidebar__items"},a.createElement("div",{className:"menu"},a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return a.createElement(ae,(0,g.Z)({mobile:!0},e,{onClick:C,key:t}))})))))))};var me=n(13919);const de="footerLogoLink_MyFc";var fe=n(98465),ve=n(18617),he=["to","href","label","prependBaseUrlToHref"];function ge(e){var t=e.to,n=e.href,r=e.label,l=e.prependBaseUrlToHref,o=(0,p.Z)(e,he),c=(0,k.default)(t),i=(0,k.default)(n,{forcePrependBaseUrl:!0});return a.createElement(y.default,(0,g.Z)({className:"footer__link-item"},n?{href:l?i:n}:{to:c},o),n&&!(0,me.Z)(n)?a.createElement("span",null,r,a.createElement(ve.Z,null)):r)}var pe=function(e){var t=e.sources,n=e.alt;return a.createElement(fe.Z,{className:"footer__logo",alt:n,sources:t})};const Ee=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,l=t.links,o=void 0===l?[]:l,i=t.logo,s=void 0===i?{}:i,u={light:(0,k.default)(s.src),dark:(0,k.default)(s.srcDark||s.src)};return e?a.createElement("footer",{className:(0,r.default)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},o&&o.length>0&&a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(ge,e))}))):null)}))),(s||n)&&a.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},s.href?a.createElement(y.default,{href:s.href,className:de},a.createElement(pe,{alt:s.alt,sources:u})):a.createElement(pe,{alt:s.alt,sources:u})),n?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null};var be=n(86482);function ke(e){var t=e.locale,n=e.version,r=e.tag,l=t;return a.createElement(C.Z,null,l&&a.createElement("meta",{name:"docsearch:language",content:l}),n&&a.createElement("meta",{name:"docsearch:version",content:n}),r&&a.createElement("meta",{name:"docsearch:docusaurus_tag",content:r}))}var ye=n(41217);function Ce(){var e=(0,b.default)().i18n,t=e.defaultLocale,n=e.locales,r=(0,c.l5)();return a.createElement(C.Z,null,n.map((function(e){return a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),a.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function we(e){var t=e.permalink,n=(0,b.default)().siteConfig.url,r=function(){var e=(0,b.default)().siteConfig.url,t=(0,l.TH)().pathname;return e+(0,k.default)(t)}(),o=t?""+n+t:r;return a.createElement(C.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function Ne(e){var t=(0,b.default)(),n=t.siteConfig,r=n.favicon,l=n.themeConfig,o=l.metadatas,i=l.image,s=t.i18n,u=s.currentLocale,m=s.localeConfigs,d=e.title,f=e.description,v=e.image,h=e.keywords,p=e.searchMetadatas,E=(0,k.default)(r),y=(0,c.pe)(d),w=u,N=m[u].direction;return a.createElement(a.Fragment,null,a.createElement(C.Z,null,a.createElement("html",{lang:w,dir:N}),r&&a.createElement("link",{rel:"shortcut icon",href:E}),a.createElement("title",null,y),a.createElement("meta",{property:"og:title",content:y}),v||i&&a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),a.createElement(ye.default,{description:f,keywords:h,image:v}),a.createElement(we,null),a.createElement(Ce,null),a.createElement(ke,(0,g.Z)({tag:c.HX,locale:u},p)),a.createElement(C.Z,null,o.map((function(e,t){return a.createElement("meta",(0,g.Z)({key:"metadata_"+t},e))}))))}var _e=n(38245);const Ze=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,o=e.pageClassName;return(0,_e.Z)(),a.createElement(be.Z,null,a.createElement(Ne,e),a.createElement(u,null),a.createElement(h,null),a.createElement(ue,null),a.createElement("div",{className:(0,r.default)(c.kM.wrapper.main,l,o)},t),!n&&a.createElement(Ee,null))}},86482:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(67294),r=n(10412),l=n(39306),o=(0,l.WA)("theme"),c="light",i="dark",s=function(e){return e===i?i:c},u=function(e){(0,l.WA)("theme").set(s(e))};const m=function(){var e=(0,l.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,m=e.respectPrefersColorScheme,d=(0,a.useState)(function(e){return r.default.canUseDOM?s(document.documentElement.getAttribute("data-theme")):s(e)}(t)),f=d[0],v=d[1],h=(0,a.useCallback)((function(){v(c),u(c)}),[]),g=(0,a.useCallback)((function(){v(i),u(i)}),[]);return(0,a.useEffect)((function(){document.documentElement.setAttribute("data-theme",s(f))}),[f]),(0,a.useEffect)((function(){if(!n)try{var e=o.get();null!==e&&v(s(e))}catch(t){console.error(t)}}),[v]),(0,a.useEffect)((function(){n&&!m||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;v(t?i:c)}))}),[]),{isDarkTheme:f===i,setLightTheme:h,setDarkTheme:g}};var d=n(82924);const f=function(e){var t=m(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return a.createElement(d.Z.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:l}},e.children)};var v="docusaurus.tab.";const h=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],r=(0,a.useCallback)((function(e,t){(0,l.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((function(){try{var e={};(0,l._f)().forEach((function(t){if(t.startsWith(v)){var n=t.substring(v.length);e[n]=(0,l.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}};var g=n(79443);const p=function(e){var t=h(),n=t.tabGroupChoices,r=t.setTabGroupChoices;return a.createElement(g.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r}},e.children)};function E(e){var t=e.children;return a.createElement(f,null,a.createElement(l.pl,null,a.createElement(p,null,a.createElement(l.L5,null,t))))}},55537:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(22122),r=n(19756),l=n(67294),o=n(36742),c=n(98465),i=n(44996),s=n(52263),u=["imageClassName","titleClassName"];const m=function(e){var t=(0,s.default)(),n=t.siteConfig,m=n.title,d=n.themeConfig.navbar,f=d.title,v=d.logo,h=void 0===v?{src:""}:v,g=t.isClient,p=e.imageClassName,E=e.titleClassName,b=(0,r.Z)(e,u),k=(0,i.default)(h.href||"/"),y={light:(0,i.default)(h.src),dark:(0,i.default)(h.srcDark||h.src)};return l.createElement(o.default,(0,a.Z)({to:k},b,h.target&&{target:h.target}),h.src&&l.createElement(c.Z,{key:g,className:p,sources:y,alt:h.alt||f||m}),null!=f&&l.createElement("b",{className:E},f))}},5525:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(22122),r=n(19756),l=n(67294),o=n(86010),c=n(36742),i=n(44996),s=n(5977),u=n(39306),m=n(18617),d=n(13919),f=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],v=["items","position","className"],h=["className"],g=["items","className","position"],p=["className"],E=["mobile"],b="dropdown__link--active";function k(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,s=e.href,u=e.label,v=e.activeClassName,h=void 0===v?"navbar__link--active":v,g=e.prependBaseUrlToHref,p=(0,r.Z)(e,f),E=(0,i.default)(o),k=(0,i.default)(t),y=(0,i.default)(s,{forcePrependBaseUrl:!0}),C=u&&s&&!(0,d.Z)(s),w=h===b;return l.createElement(c.default,(0,a.Z)({},s?{href:g?y:s}:Object.assign({isNavLink:!0,activeClassName:h,to:E},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(k)}}:null),p),C?l.createElement("span",null,u,l.createElement(m.Z,w&&{width:12,height:12})):u)}function y(e){var t,n=e.items,c=e.position,i=e.className,s=(0,r.Z)(e,v),u=(0,l.useRef)(null),m=(0,l.useRef)(null),d=(0,l.useState)(!1),f=d[0],g=d[1];(0,l.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var p=function(e,t){return void 0===t&&(t=!1),(0,o.default)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?l.createElement("div",{ref:u,className:(0,o.default)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===c,"dropdown--right":"right"===c,"dropdown--show":f})},l.createElement(k,(0,a.Z)({className:p(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!f))}}),null!=(t=s.children)?t:s.label),l.createElement("ul",{ref:m,className:"dropdown__menu"},n.map((function(e,t){var o=e.className,c=(0,r.Z)(e,h);return l.createElement("li",{key:t},l.createElement(k,(0,a.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var a=u.current.nextElementSibling;a&&a.focus()}},activeClassName:b,className:p(o,!0)},c)))})))):l.createElement(k,(0,a.Z)({className:p(i)},s))}function C(e){var t,n,c,i=e.items,m=e.className,d=(e.position,(0,r.Z)(e,g)),f=(0,l.useRef)(null),v=(0,s.TH)().pathname,h=(0,l.useState)((function(){var e;return null==(e=!(null!=i&&i.some((function(e){return(0,u.Mg)(e.to,v)}))))||e})),E=h[0],b=h[1],y=function(e,t){return void 0===t&&(t=!1),(0,o.default)("menu__link",{"menu__link--sublist":t},e)};if(!i)return l.createElement("li",{className:"menu__list-item"},l.createElement(k,(0,a.Z)({className:y(m)},d)));var C=null!=(t=f.current)&&t.scrollHeight?(null==(n=f.current)?void 0:n.scrollHeight)+"px":void 0;return l.createElement("li",{className:(0,o.default)("menu__list-item",{"menu__list-item--collapsed":E})},l.createElement(k,(0,a.Z)({role:"button",className:y(m,!0)},d,{onClick:function(e){e.preventDefault(),b((function(e){return!e}))}}),null!=(c=d.children)?c:d.label),l.createElement("ul",{className:"menu__list",ref:f,style:{height:E?void 0:C}},i.map((function(e,t){var n=e.className,o=(0,r.Z)(e,p);return l.createElement("li",{className:"menu__list-item",key:t},l.createElement(k,(0,a.Z)({activeClassName:"menu__link--active",className:y(n)},o,{onClick:d.onClick})))}))))}const w=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,E),o=n?C:y;return l.createElement(o,a)}},76400:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(22122),r=n(19756),l=n(67294),o=n(5525),c=n(80907),i=n(86010),s=n(39306),u=n(18780),m=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,n=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,h=(0,r.Z)(e,m),g=(0,c.useActiveDocContext)(v),p=g.activeVersion,E=g.activeDoc,b=(0,s.J)(v).preferredVersion,k=(0,c.useLatestVersion)(v),y=function(e,t){var n,a=(n=[]).concat.apply(n,e.map((function(e){return e.docs}))),r=a.find((function(e){return e.id===t}));if(!r){var l=a.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+l)}return r}((0,u.uniq)([p,b,k].filter(Boolean)),n);return l.createElement(o.Z,(0,a.Z)({exact:!0},h,{className:(0,i.default)(h.className,(t={},t[d]=E&&E.sidebar===y.sidebar,t)),label:null!=f?f:y.id,to:y.path}))}},59308:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(22122),r=n(19756),l=n(67294),o=n(5525),c=n(80907),i=n(39306),s=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,n,m=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,v=e.dropdownItemsBefore,h=e.dropdownItemsAfter,g=(0,r.Z)(e,s),p=(0,c.useActiveDocContext)(d),E=(0,c.useVersions)(d),b=(0,c.useLatestVersion)(d),k=(0,i.J)(d),y=k.preferredVersion,C=k.savePreferredVersionName;var w=function(){var e=E.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){C(e.name)}}})),t=[].concat(v,e,h);if(!(t.length<=1))return t}(),N=null!=(t=null!=(n=p.activeVersion)?n:y)?t:b,_=m&&w?"Versions":N.label,Z=m&&w?void 0:u(N).path;return l.createElement(o.Z,(0,a.Z)({},g,{mobile:m,label:_,to:Z,items:w,isActive:f?function(){return!1}:void 0}))}},47250:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(22122),r=n(19756),l=n(67294),o=n(5525),c=n(80907),i=n(39306),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,r.Z)(e,s),f=(0,c.useActiveVersion)(m),v=(0,i.J)(m).preferredVersion,h=(0,c.useLatestVersion)(m),g=null!=(t=null!=f?f:v)?t:h,p=null!=n?n:g.label,E=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return l.createElement(o.Z,(0,a.Z)({},d,{label:p,to:E}))}},41217:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(67294),r=n(99105),l=n(39306),o=n(44996);function c(e){var t=e.title,n=e.description,c=e.keywords,i=e.image,s=(0,l.LU)().image,u=(0,l.pe)(t),m=(0,o.default)(i||s,{absolute:!0});return a.createElement(r.Z,null,t&&a.createElement("title",null,u),t&&a.createElement("meta",{property:"og:title",content:u}),n&&a.createElement("meta",{name:"description",content:n}),n&&a.createElement("meta",{property:"og:description",content:n}),c&&a.createElement("meta",{name:"keywords",content:Array.isArray(c)?c.join(","):c}),m&&a.createElement("meta",{property:"og:image",content:m}),m&&a.createElement("meta",{name:"twitter:image",content:m}))}},82924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(67294).createContext(void 0)},98465:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(22122),r=n(19756),l=n(67294),o=n(86010),c=n(52263),i=n(85350);const s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"};var u=["sources","className","alt"];const m=function(e){var t=(0,c.default)().isClient,n=(0,i.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,r.Z)(e,u),g=t?n?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,g.map((function(e){return l.createElement("img",(0,a.Z)({key:e,src:m[e],alt:v,className:(0,o.default)(s.themedImage,s["themedImage--"+e],d)},h))})))}},79443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)(void 0)},38245:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function(){(0,a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])}},31839:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function(e){void 0===e&&(e=!0),(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},77898:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(10412),l=function(){return{scrollX:r.default.canUseDOM?window.pageXOffset:0,scrollY:r.default.canUseDOM?window.pageYOffset:0}};const o=function(e,t){void 0===t&&(t=[]);var n=(0,a.useRef)(l()),r=function(){var t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((function(){var e={passive:!0};return r(),window.addEventListener("scroll",r,e),function(){return window.removeEventListener("scroll",r,e)}}),t)}},85350:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(82924);const l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},93783:(e,t,n)=>{n.d(t,{D:()=>l,Z:()=>o});var a=n(67294),r=n(10412),l={desktop:"desktop",mobile:"mobile"};const o=function(){var e=r.default.canUseDOM;function t(){if(e)return window.innerWidth>996?l.desktop:l.mobile}var n=(0,a.useState)(t),o=n[0],c=n[1];return(0,a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){c(t())}}),[]),o}},6397:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(5977),r=n(10412),l=n(52263);const o=function(){var e=(0,a.k6)(),t=(0,a.TH)(),n=(0,l.default)().siteConfig,o=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.default.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return o+"search?q="+encodeURIComponent(e)}}}}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4673],{86482:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),a=n(10412),o=n(39306),c=(0,o.WA)("theme"),s="light",u="dark",i=function(e){return e===u?u:s},d=function(e){(0,o.WA)("theme").set(i(e))};const l=function(){var e=(0,o.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,l=e.respectPrefersColorScheme,m=(0,r.useState)(function(e){return a.default.canUseDOM?i(document.documentElement.getAttribute("data-theme")):i(e)}(t)),f=m[0],h=m[1],v=(0,r.useCallback)((function(){h(s),d(s)}),[]),p=(0,r.useCallback)((function(){h(u),d(u)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",i(f))}),[f]),(0,r.useEffect)((function(){if(!n)try{var e=c.get();null!==e&&h(i(e))}catch(t){console.error(t)}}),[h]),(0,r.useEffect)((function(){n&&!l||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;h(t?u:s)}))}),[]),{isDarkTheme:f===u,setLightTheme:v,setDarkTheme:p}};var m=n(82924);const f=function(e){var t=l(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(m.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)};var h="docusaurus.tab.";const v=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,o.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,o._f)().forEach((function(t){if(t.startsWith(h)){var n=t.substring(h.length);e[n]=(0,o.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}};var p=n(79443);const E=function(e){var t=v(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(p.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function b(e){var t=e.children;return r.createElement(f,null,r.createElement(o.pl,null,r.createElement(E,null,r.createElement(o.L5,null,t))))}},82924:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(67294).createContext(void 0)},79443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)(void 0)},38245:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])}},85350:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(82924);const o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},59301:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(67294),a=n(86010),o=n(86482),c=n(38245),s=n(39306);const u=function(e){var t=e.children,n=e.wrapperClassName,u=e.pageClassName;return(0,c.Z)(),r.createElement(o.Z,null,r.createElement("div",{className:(0,a.default)(s.kM.wrapper.main,n,u,"embedded")},t))};var i=n(3905),d=n(75854),l=n.n(d);const m=function(e){var t=e.content;return r.createElement(u,{wrapperClassName:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},r.createElement("main",null,r.createElement(i.MDXProvider,{components:l()},r.createElement(t,null))))}}}]);
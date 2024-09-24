import{C as t,H as p,a as f,R as d,D as I,A as me,B as h,b as v,I as E,M as ge,S as ye,T as U,c as ve,u as fe,d as z,e as q}from"./tinywidgets-BT0RqaD3.js";import{r as g,R as e,a as be}from"./react-dom-wpXbf5jk.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=c(a);fetch(a.href,r)}})();var ke="_9uhpoc0",we="_9uhpoc1";/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ie=(...l)=>l.filter((n,c,o)=>!!n&&o.indexOf(n)===c).join(" ");/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Te={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=g.forwardRef(({color:l="currentColor",size:n=24,strokeWidth:c=2,absoluteStrokeWidth:o,className:a="",children:r,iconNode:s,...y},F)=>g.createElement("svg",{ref:F,...Te,width:n,height:n,stroke:l,strokeWidth:o?Number(c)*24/Number(n):c,className:ie("lucide",a),...y},[...s.map(([H,W])=>g.createElement(H,W)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(l,n)=>{const c=g.forwardRef(({className:o,...a},r)=>g.createElement(Ce,{ref:r,iconNode:n,className:ie(`lucide-${xe(l)}`,o),...a}));return c.displayName=`${l}`,c};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=m("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=m("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=m("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=m("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=m("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=m("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=m("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=m("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=m("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=m("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=m("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=m("PanelTopOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=m("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=m("RectangleEllipsis",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=m("RectangleHorizontal",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=m("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=m("SquareArrowOutUpRight",[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",key:"y09zxi"}],["path",{d:"m21 3-9 9",key:"mpx6sq"}],["path",{d:"M15 3h6v6",key:"1q9fwt"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=m("SquareCode",[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=m("SquareFunction",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=m("SquarePi",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h10",key:"udp07y"}],["path",{d:"M10 7v10",key:"i1d9ee"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7",key:"ftwdc7"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=m("SquareSigma",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9",key:"9nih0i"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=m("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=m("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=m("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=m("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]),w={};var Me="ghowl80",Le="ghowl81",He="jnjdjr0";const he=({children:l})=>e.createElement("h1",{className:He},l),i=({title:l,type:n,importLine:c,icon:o,comments:a,params:r,props:s,examples:y})=>{const F=Object.entries(y).length;return e.createElement(e.Fragment,null,e.createElement(he,null,e.createElement(o,null),l),e.createElement(t,{code:c}),a,n=="CSS"?e.createElement("p",null,"Note that this constant needs to be imported from TinyWidgets","' ",e.createElement("code",null,"/css")," sub-module."):null,e.createElement(p,null),F>0?e.createElement(f,{title:"Example"+(F>1?"s":""),id:"examples",startOpen:!0},y.map(([H,W],D)=>e.createElement(g.Fragment,{key:D},D==0?null:e.createElement(p,null),e.createElement(d,{variant:"1|2"},e.createElement("div",{className:Me},W),e.createElement("div",{className:Le},H))))):null,Object.entries(r).length>0?e.createElement(f,{title:"Parameters",id:"params",startOpen:!0},e.createElement(I,{data:r})):null,Object.entries(s).length>0?e.createElement(f,{title:"Props",id:"props",startOpen:!0},e.createElement(I,{data:s})):null)};var T={accentHue:"var(--rb7htv0)",backgroundHue:"var(--rb7htv1)",accent:"var(--rb7htv2)",accentLight:"var(--rb7htv3)",accentHover:"var(--rb7htv4)",accentContrast:"var(--rb7htv5)",background:"var(--rb7htv6)",background2:"var(--rb7htv7)",backgroundHaze:"var(--rb7htv8)",backgroundHover:"var(--rb7htv9)",foreground:"var(--rb7htva)",foregroundBright:"var(--rb7htvb)",foregroundDim:"var(--rb7htvc)",border:"var(--rb7htvd)",shadow:"var(--rb7htve)"},S={"mono-1":"var(--mlv5zh0)","mono-2":"var(--mlv5zh1)","mono-3":"var(--mlv5zh2)","hue-1":"var(--mlv5zh3)","hue-2":"var(--mlv5zh4)","hue-3":"var(--mlv5zh5)","hue-4":"var(--mlv5zh6)","hue-5":"var(--mlv5zh7)","hue-5-2":"var(--mlv5zh8)","hue-6":"var(--mlv5zh9)","hue-6-2":"var(--mlv5zha)","syntax-fg":"var(--mlv5zhb)","syntax-bg":"var(--mlv5zhc)","syntax-gutter":"var(--mlv5zhd)","syntax-guide":"var(--mlv5zhe)","syntax-accent":"var(--mlv5zhf)"},j={logo:"var(--jpqp5m1)",avatar:"var(--jpqp5m2)",icon:"var(--jpqp5m3)",padding:"var(--jpqp5m4)",radius:"var(--jpqp5m5)",sideNavWidth:"var(--jpqp5m6)",topNavHeight:"var(--jpqp5m7)"},We={small:448,large:768};const u={},x={},M={},b={},_={};u["component/App"]=["App",()=>e.createElement(i,{type:"COMPONENT",importLine:"import {App} from 'tinywidgets';",title:"App",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The ",e.createElement("code",null,"App")," component is the root component of a TinyWidgets application."),e.createElement("p",null,"It can be provided with optional components for different parts of the app layout, including the top left title, the side bar and the main content."),e.createElement("p",null,"If none of these props are present, the TinyWidgets layout won't be used, but you will still be able to enjoy its state management features, and any components within it will be correctly styled.")),icon:K,params:{props:e.createElement(e.Fragment,null,"The props for the component.")},props:{title:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component, element, or string which renders the top left title of the application.")),topNavLeft:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component, element, or string which renders navigation on the left side of the top navigation bar of the application.")),topNavRight:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component, element, or string which renders navigation on the right side of the top navigation bar of the application.")),sideNav:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component, element, or string which renders the left side bar of the application.")),main:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component, element, or string which renders the main part of the application.")),className:e.createElement(e.Fragment,null,e.createElement("p",null,"An extra CSS class name for the component."))},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:"<App />"}),e.createElement("p",null,"This shows an empty App, but if you visit ",e.createElement("a",{href:"https://tinywidgets.org"},"the TinyWidgets website")," you'll see one in its full glory!")),e.createElement(me,null)]]}),K];u["component/Button"]=["Button",()=>e.createElement(i,{type:"COMPONENT",importLine:"import {Button} from 'tinywidgets';",title:"Button",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The ",e.createElement("code",null,"Button")," component displays an button, with a number of common variants.")),icon:Q,params:{props:e.createElement(e.Fragment,null,"The props for the component.")},props:{icon:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component which renders an icon for the button, and which must accept a className prop.")),title:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component, element, or string which renders the title of the button.")),titleRight:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component, element, or string which renders a second title on the right side of the button.")),iconRight:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component which renders a second icon for the button, and which must accept a className prop.")),onClick:e.createElement(e.Fragment,null,e.createElement("p",null,"A handler called when the user clicks on the button.")),variant:e.createElement(e.Fragment,null,e.createElement("p",null,"A variant of the button, one of:"),e.createElement("ul",null,e.createElement("li",null,e.createElement("code",null,"default")),e.createElement("li",null,e.createElement("code",null,"icon")),e.createElement("li",null,e.createElement("code",null,"accent")),e.createElement("li",null,e.createElement("code",null,"ghost")),e.createElement("li",null,e.createElement("code",null,"item")))),current:e.createElement(e.Fragment,null,e.createElement("p",null,"A flag that indicates that an ",e.createElement("code",null,"item")," button is 'current' and therefore highlighted.")),href:e.createElement(e.Fragment,null,e.createElement("p",null,"A URL that can be used instead of an ",e.createElement("code",null,"onClick")," to launch a new web page, much like a link.")),alt:e.createElement(e.Fragment,null,e.createElement("p",null,"Alternative text shown when the user hovers over the button.")),className:e.createElement(e.Fragment,null,e.createElement("p",null,"An extra CSS class name for the component."))},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Button
  title="TinyWidgets"
  onClick={() => alert('Clicked!')}
/>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"default")," variant of the Button component.")),e.createElement(h,{title:"TinyWidgets",onClick:()=>alert("Clicked!")})],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Button
  title="TinyWidgets"
  icon={Lucide.Grid3x3}
/>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"default")," variant of the Button component with a left icon.")),e.createElement(h,{title:"TinyWidgets",icon:R})],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Button
  title="TinyWidgets"
  iconRight={Lucide.LogIn}
/>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"default")," variant of the Button component with a right icon.")),e.createElement(h,{title:"TinyWidgets",iconRight:Ne})],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Button
  icon={Lucide.Sun}
  variant="icon"
/>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"icon")," variant of the Button component. It is best used without a title.")),e.createElement(h,{icon:Ae,variant:"icon"})],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Button
  title="TinyWidgets"
  variant="accent"
/>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"accent")," variant of the Button component.")),e.createElement(h,{title:"TinyWidgets",variant:"accent"})],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Button
  title="tinybase.org"
  iconRight={Lucide.SquareArrowOutUpRight}
  variant="accent"
  href="https://tinybase.org"
/>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"accent")," variant of the Button component with an icon, and that launches a new link.")),e.createElement(h,{title:"tinybase.org",iconRight:Oe,variant:"accent",href:"https://tinybase.org"})],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Button
  title="TinyWidgets"
  variant="ghost"
/>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"ghost")," variant of the Button component.")),e.createElement(h,{title:"TinyWidgets",variant:"ghost"})],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Button
  variant="item"
  icon={Lucide.Grid3x3}
  title="TinyWidgets"
  titleRight={<i>4</i>}
  iconRight={Lucide.CircleHelp}
/>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"item")," variant of the Button component with both left and right titles and icons. This is suitable for use as a link in a navigational list, such as a side bar.")),e.createElement(h,{variant:"item",icon:R,title:"TinyWidgets",titleRight:e.createElement("i",null,"4"),iconRight:Re})],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Button
  variant="item"
  icon={Lucide.Grid3x3}
  title="TinyWidgets"
  current={true}
/>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"item")," variant of the Button component, marked as 'current'.")),e.createElement(h,{variant:"item",icon:R,title:"TinyWidgets",current:!0})]]}),Q];u["component/Card"]=["Card",()=>e.createElement(i,{type:"COMPONENT",importLine:"import {Card} from 'tinywidgets';",title:"Card",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The ",e.createElement("code",null,"Card")," component displays a simple rectangular container.")),icon:ne,params:{props:e.createElement(e.Fragment,null,"The props for the component.")},props:{className:e.createElement(e.Fragment,null,e.createElement("p",null,"An extra CSS class name for the component.")),children:e.createElement(e.Fragment,null,e.createElement("p",null,"The children of the component, that go inside the card."))},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Card>
  <h1>Welcome</h1>
  <Hr />
  <p>We hope you enjoy TinyWidgets</p>
</Card>`}),e.createElement("p",null,"This example shows a simple card.")),e.createElement(v,null,e.createElement("h1",null,"Welcome"),e.createElement(p,null),e.createElement("p",null,"We hope you enjoy TinyWidgets"))]]}),ne];u["component/Code"]=["Code",()=>e.createElement(i,{type:"COMPONENT",importLine:"import {Code} from 'tinywidgets';",title:"Code",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The ",e.createElement("code",null,"Code")," component displays a block of pre-formatted code, and uses PrismJS to parse its syntax. The coloring is based on the ",e.createElement("a",{href:"https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-dark.css"},"prism-one-dark")," and ",e.createElement("a",{href:"https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-light.css"},"prism-one-light")," themes."),e.createElement("p",null,"This component supports the default PrismJS languages (",e.createElement("code",null,"markup"),", ",e.createElement("code",null,"html"),", ",e.createElement("code",null,"xml"),", ",e.createElement("code",null,"svg"),", ",e.createElement("code",null,"mathml"),", ",e.createElement("code",null,"ssml"),", ",e.createElement("code",null,"atom"),", ",e.createElement("code",null,"rss"),", ",e.createElement("code",null,"css"),", ",e.createElement("code",null,"clike"),", ",e.createElement("code",null,"javascript"),", ",e.createElement("code",null,"js"),"), and specific additional languages (",e.createElement("code",null,"jsx"),", ",e.createElement("code",null,"typescript"),", ",e.createElement("code",null,"ts"),", ",e.createElement("code",null,"tsx"),"). Others can be added if there is demand! Please open an issue on GitHub.")),icon:X,params:{props:e.createElement(e.Fragment,null,"The props for the component.")},props:{code:e.createElement(e.Fragment,null,e.createElement("p",null,"The code to display, as a string.")),language:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional indication of the language. Defaults to ",e.createElement("code",null,"jsx"),".")),className:e.createElement(e.Fragment,null,e.createElement("p",null,"An extra CSS class name for the component."))},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Code
  code={\`
import React from 'react';
const App = () => (
  <div>Hello, world!</div>
);
  \`}
/>`}),e.createElement("p",null,"This example shows a simple block of code, defaulting to the ",e.createElement("code",null,"jsx")," language.")),e.createElement(t,{code:`
import React from 'react';
const App = () => (
  <div>Hello, world!</div>
);
  `})],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Code
  code={\`
h1 {
  font-size: 1.5rem;
}
  \`}
  language="css"
/>`}),e.createElement("p",null,"This example shows the use of the ",e.createElement("code",null,"css")," language.")),e.createElement(t,{code:`
h1 {
  font-size: 1.5rem;
}
  `,language:"css"})],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Code
  code={\`
const a: number = 1;
  \`}
  language="typescript"
/>`}),e.createElement("p",null,"This example shows the use of the ",e.createElement("code",null,"tsx")," language.")),e.createElement(t,{code:`
const a: number = 1;
  `,language:"typescript"})]]}),X];u["component/Collapsible"]=["Collapsible",()=>e.createElement(i,{type:"COMPONENT",importLine:"import {Collapsible} from 'tinywidgets';",title:"Collapsible",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The ",e.createElement("code",null,"Collapsible")," component displays a titled box that can be expanded or collapsed. If the ",e.createElement("code",null,"id")," prop is provided, its state is preserved between page reloads.")),icon:Y,params:{props:e.createElement(e.Fragment,null,"The props for the component.")},props:{icon:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component which renders an icon for the top of the collapsible component, and which must accept a className prop.")),title:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component, element, or string which renders the title of the top of the component.")),titleRight:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component, element, or string which renders a second title on the right side of the top of the component.")),startOpen:e.createElement(e.Fragment,null,e.createElement("p",null,"Whether the section should start opened up.")),id:e.createElement(e.Fragment,null,e.createElement("p",null,"An Id which will allow the state to be preserved between page reloads.")),className:e.createElement(e.Fragment,null,e.createElement("p",null,"An extra CSS class name for the component.")),children:e.createElement(e.Fragment,null,e.createElement("p",null,"The children of the component, that go inside the collapsible section."))},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Collapsible
  title="TinyWidgets"
>
 <p>Peekaboo!</p>
</Collapsible>`}),e.createElement("p",null,"This example shows the basic Collapsible component.")),e.createElement(f,{title:"TinyWidgets"},e.createElement("p",null,"Peekaboo!"))],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Collapsible
  title="TinyWidgets"
  icon={Lucide.Grid3x3}
  startOpen={true}
>
 <p>Already open</p>
</Collapsible>`}),e.createElement("p",null,"This example shows a Collapsible component with an icon and which starts open.")),e.createElement(f,{title:"TinyWidgets",icon:R,startOpen:!0},e.createElement("p",null,"Already open"))],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Collapsible
  title="TinyWidgets"
  id="example"
>
 <p>Reload the window</p>
</Collapsible>`}),e.createElement("p",null,"This example shows a Collapsible component where its state is preserved between page reloads.")),e.createElement(f,{title:"TinyWidgets",id:"example"},e.createElement("p",null,"Reload the window"))]]}),Y];u["component/Detail"]=["Detail",()=>e.createElement(i,{type:"COMPONENT",importLine:"import {Detail} from 'tinywidgets';",title:"Detail",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The ",e.createElement("code",null,"Detail")," component displays a set of key-value pairs in a two-column table.")),icon:le,params:{props:e.createElement(e.Fragment,null,"The props for the component.")},props:{data:e.createElement(e.Fragment,null,e.createElement("p",null,"The data to display in the detail table. The values can be any React node.")),className:e.createElement(e.Fragment,null,e.createElement("p",null,"An extra CSS class name for the component."))},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Detail
 data={{
   normal: 'lorem ipsum',
   italic: <i>lorem ipsum</i>,
   underline: <u>lorem ipsum</u>,
 }}
/>`}),e.createElement("p",null,"This example shows the basic Collapsible component.")),e.createElement(I,{data:{normal:"lorem ipsum",italic:e.createElement("i",null,"lorem ipsum"),underline:e.createElement("u",null,"lorem ipsum")}})]]}),le];u["component/Hr"]=["Hr",()=>e.createElement(i,{type:"COMPONENT",importLine:"import {Hr} from 'tinywidgets';",title:"Hr",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The ",e.createElement("code",null,"Hr")," component displays a styled horizontal rule.")),icon:J,params:{props:e.createElement(e.Fragment,null,"The props for the component.")},props:{className:e.createElement(e.Fragment,null,e.createElement("p",null,"An extra CSS class name for the component."))},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:"<Hr />"}),e.createElement("p",null,"This example shows the basic Hr component.")),e.createElement(p,null)]]}),J];u["component/Image"]=["Image",()=>e.createElement(i,{type:"COMPONENT",importLine:"import {Image} from 'tinywidgets';",title:"Image",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The ",e.createElement("code",null,"Image")," component displays an image, with a number of common variants.")),icon:$,params:{props:e.createElement(e.Fragment,null,"The props for the component.")},props:{src:e.createElement(e.Fragment,null,e.createElement("p",null,"The source of the image.")),onClick:e.createElement(e.Fragment,null,e.createElement("p",null,"A handler called when the user clicks on the image.")),variant:e.createElement(e.Fragment,null,e.createElement("p",null,"A variant of the image, one of:"),e.createElement("ul",null,e.createElement("li",null,e.createElement("code",null,"default")),e.createElement("li",null,e.createElement("code",null,"logo")),e.createElement("li",null,e.createElement("code",null,"avatar")),e.createElement("li",null,e.createElement("code",null,"icon")))),alt:e.createElement(e.Fragment,null,e.createElement("p",null,"Alternative text shown when the user hovers over the image.")),className:e.createElement(e.Fragment,null,e.createElement("p",null,"An extra CSS class name for the component."))},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Image
  src="/favicon.svg"
  onClick={() => alert('Clicked!')}
  alt="TinyWidgets"
/>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"default")," variant of the Image component.")),e.createElement(E,{src:"/favicon.svg",onClick:()=>alert("Clicked!"),alt:"TinyWidgets"})],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Image
  src="/favicon.svg"
  variant="logo"
/>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"logo")," variant of the Image component.")),e.createElement(E,{src:"/favicon.svg",variant:"logo"})],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Image
  src="/favicon.svg"
  variant="avatar"
/>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"avatar")," variant of the Image component.")),e.createElement(E,{src:"/favicon.svg",variant:"avatar"})],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Image
  src="/favicon.svg"
  variant="icon"
/>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"icon")," variant of the Image component.")),e.createElement(E,{src:"/favicon.svg",variant:"icon"})]]}),$];u["component/Metric"]=["Metric",()=>e.createElement(i,{type:"COMPONENT",importLine:"import {Metric} from 'tinywidgets';",title:"Metric",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The ",e.createElement("code",null,"Metric")," component displays a metric as a prominent numerical value with a label above.")),icon:te,params:{props:e.createElement(e.Fragment,null,"The props for the component.")},props:{icon:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component which renders an icon for the metric panel, and which must accept a className prop.")),title:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component, element, or string which renders the title of the metric panel.")),number:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component, element, or string which renders the number of the metric panel.")),className:e.createElement(e.Fragment,null,e.createElement("p",null,"An extra CSS class name for the component."))},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Metric
  icon={Lucide.ChartLine}
  title="Number"
  number="57"
/>`}),e.createElement("p",null,"This example shows the basic usage of the Metric component.")),e.createElement(ge,{icon:Se,title:"Number",number:"57"})]]}),te];u["component/Row"]=["Row",()=>e.createElement(i,{type:"COMPONENT",importLine:"import {Row} from 'tinywidgets';",title:"Row",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The ",e.createElement("code",null,"Row")," component displays a row of 'cell' components, with a number of common variants representing the relative sizes of those cells within it.")),icon:V,params:{props:e.createElement(e.Fragment,null,"The props for the component.")},props:{variant:e.createElement(e.Fragment,null,e.createElement("p",null,"A variant of the row, representing the relative 'cell' sizes within it, one of:"),e.createElement("ul",null,e.createElement("li",null,e.createElement("code",null,"1|1")),e.createElement("li",null,e.createElement("code",null,"1|2")),e.createElement("li",null,e.createElement("code",null,"2|1")),e.createElement("li",null,e.createElement("code",null,"1|1|1")),e.createElement("li",null,e.createElement("code",null,"1|3")),e.createElement("li",null,e.createElement("code",null,"3|1")),e.createElement("li",null,e.createElement("code",null,"1|1|1|1")))),className:e.createElement(e.Fragment,null,e.createElement("p",null,"An extra CSS class name for the component.")),children:e.createElement(e.Fragment,null,e.createElement("p",null,"The children of the component, each occupying one 'cell'."))},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Row>
  <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>1</div>
</Row>`}),e.createElement("p",null,"This example shows the default ",e.createElement("code",null,"1|1")," variant of the Row component.")),e.createElement(d,null,e.createElement("div",{style:{background:"oklch(50% 0.11 0)"}},"1"),e.createElement("div",{style:{background:"oklch(50% 0.11 180)"}},"1"))],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Row variant="1|2">
  <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>2</div>
</Row>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"1|2")," variant of the Row component.")),e.createElement(d,{variant:"1|2"},e.createElement("div",{style:{background:"oklch(50% 0.11 0)"}},"1"),e.createElement("div",{style:{background:"oklch(50% 0.11 180)"}},"2"))],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Row variant="2|1">
  <div style={{background: 'oklch(50% 0.11 0)'}}>2</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>1</div>
</Row>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"2|1")," variant of the Row component.")),e.createElement(d,{variant:"2|1"},e.createElement("div",{style:{background:"oklch(50% 0.11 0)"}},"2"),e.createElement("div",{style:{background:"oklch(50% 0.11 180)"}},"1"))],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Row variant="1|1|1">
  <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 120)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 240)'}}>1</div>
</Row>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"1|1|1")," variant of the Row component.")),e.createElement(d,{variant:"1|1|1"},e.createElement("div",{style:{background:"oklch(50% 0.11 0)"}},"1"),e.createElement("div",{style:{background:"oklch(50% 0.11 120)"}},"1"),e.createElement("div",{style:{background:"oklch(50% 0.11 240)"}},"1"))],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Row variant="1|3">
  <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>3</div>
</Row>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"1|3")," variant of the Row component.")),e.createElement(d,{variant:"1|3"},e.createElement("div",{style:{background:"oklch(50% 0.11 0)"}},"1"),e.createElement("div",{style:{background:"oklch(50% 0.11 180)"}},"3"))],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Row variant="3|1">
  <div style={{background: 'oklch(50% 0.11 0)'}}>3</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>1</div>
</Row>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"3|1")," variant of the Row component.")),e.createElement(d,{variant:"3|1"},e.createElement("div",{style:{background:"oklch(50% 0.11 0)"}},"3"),e.createElement("div",{style:{background:"oklch(50% 0.11 180)"}},"1"))],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Row variant="1|1|1|1">
  <div style={{background: 'oklch(50% 0.11 0)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 90)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 180)'}}>1</div>
  <div style={{background: 'oklch(50% 0.11 270)'}}>1</div>
</Row>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"1|1|1|1")," variant of the Row component.")),e.createElement(d,{variant:"1|1|1|1"},e.createElement("div",{style:{background:"oklch(50% 0.11 0)"}},"1"),e.createElement("div",{style:{background:"oklch(50% 0.11 90)"}},"1"),e.createElement("div",{style:{background:"oklch(50% 0.11 180)"}},"1"),e.createElement("div",{style:{background:"oklch(50% 0.11 270)"}},"1"))]]}),V];u["component/Summary"]=["Summary",()=>e.createElement(i,{type:"COMPONENT",importLine:"import {Summary} from 'tinywidgets';",title:"Summary",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The ",e.createElement("code",null,"Summary")," component displays an image on the left, and other content (probably text) on the right.")),icon:G,params:{props:e.createElement(e.Fragment,null,"The props for the component.")},props:{icon:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component which renders an icon for the summary, and which must accept a className prop.")),src:e.createElement(e.Fragment,null,e.createElement("p",null,"The source of the image, which used if the ",e.createElement("code",null,"icon")," prop is not present.")),className:e.createElement(e.Fragment,null,e.createElement("p",null,"An extra CSS class name for the component.")),children:e.createElement(e.Fragment,null,e.createElement("p",null,"The children of the component, shown to the right of the image."))},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Summary src="/favicon.svg">
  <h2>TinyWidgets</h2>
  <p>Widgets for the modern web.</p>
</Summary>`}),e.createElement("p",null,"This example shows a default Summary component.")),e.createElement(ye,{src:"/favicon.svg"},e.createElement("h2",null,"TinyWidgets"),e.createElement("p",null,"Widgets for the modern web."))]]}),G];u["component/Tag"]=["Tag",()=>e.createElement(i,{type:"COMPONENT",importLine:"import {Tag} from 'tinywidgets';",title:"Tag",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The ",e.createElement("code",null,"Tag")," component displays a small rectangular tag, suitable for minimal amounts of metadata, such as a notification count.")),icon:Z,params:{props:e.createElement(e.Fragment,null,"The props for the component.")},props:{icon:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component which renders an icon for the tag, and which must accept a className prop.")),title:e.createElement(e.Fragment,null,e.createElement("p",null,"An optional component, element, or string which renders the title of the tag.")),variant:e.createElement(e.Fragment,null,e.createElement("p",null,"A variant of the tag, one of:"),e.createElement("ul",null,e.createElement("li",null,e.createElement("code",null,"default")),e.createElement("li",null,e.createElement("code",null,"accent")))),alt:e.createElement(e.Fragment,null,e.createElement("p",null,"Alternative text shown when the user hovers over the component.")),className:e.createElement(e.Fragment,null,e.createElement("p",null,"An extra CSS class name for the component."))},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Tag
  title="TinyWidgets"
/>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"default")," variant of the Tag component.")),e.createElement(U,{title:"TinyWidgets"})],[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Tag
  title="57"
  variant="accent"
  icon={Lucide.Bell}
  alt="You have lots of notifications"
/>`}),e.createElement("p",null,"This example shows the ",e.createElement("code",null,"accent")," variant of the Tag component with an icon.")),e.createElement(U,{title:"57",variant:"accent",icon:Fe,alt:"You have lots of notifications"})]]}),Z];M["function/classNames"]=["classNames",()=>{const l=ve("class1",!1,"class3");return e.createElement(i,{type:"FUNCTION",importLine:"import {classNames} from 'tinywidgets';",title:"classNames",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The ",e.createElement("code",null,"classNames")," function returns a concatenated list of class names, filtering out any ",e.createElement("code",null,"null")," or ",e.createElement("code",null,"undefined")," values."),e.createElement("p",null,"This allows you to easily toggle classes based on conditions.")),icon:ee,params:{},props:{},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:`const classes = classNames(
  'class1',
  false && 'class2',
  true && 'class3',
);
// ...
<Card className={classes}>
  <code>{classes}</code>
</Card>`}),e.createElement("p",null,"This example shows the function returning a class name list.")),e.createElement(v,{className:l},e.createElement("code",null,l))]]})},ee];b["css/code"]=["code",()=>e.createElement(i,{type:"CSS",importLine:"import {code} from 'tinywidgets/css';",title:"code",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The ",e.createElement("code",null,"code")," object exposes the CSS variables used by TinyWidgets for coloring the code blocks, so that you can use them directly in your own application."),e.createElement("p",null,"The values are derived from the ",e.createElement("a",{href:"https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-dark.css"},"prism-one-dark")," and ",e.createElement("a",{href:"https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-light.css"},"prism-one-light")," themes. The full set of members is:"),e.createElement("ul",null,e.createElement("li",null,e.createElement("code",null,"mono-1")),e.createElement("li",null,e.createElement("code",null,"mono-2")),e.createElement("li",null,e.createElement("code",null,"mono-3")),e.createElement("li",null,e.createElement("code",null,"hue-1")),e.createElement("li",null,e.createElement("code",null,"hue-2")),e.createElement("li",null,e.createElement("code",null,"hue-3")),e.createElement("li",null,e.createElement("code",null,"hue-4")),e.createElement("li",null,e.createElement("code",null,"hue-5")),e.createElement("li",null,e.createElement("code",null,"hue-5-2")),e.createElement("li",null,e.createElement("code",null,"hue-6")),e.createElement("li",null,e.createElement("code",null,"hue-6-2")),e.createElement("li",null,e.createElement("code",null,"syntax-fg")),e.createElement("li",null,e.createElement("code",null,"syntax-bg")),e.createElement("li",null,e.createElement("code",null,"syntax-gutter")),e.createElement("li",null,e.createElement("code",null,"syntax-guide")),e.createElement("li",null,e.createElement("code",null,"syntax-accent"))),e.createElement("p",null,"You can use these variables directly in React components that take style attributes, like this:"),e.createElement(t,{code:"<code style={{color: code['hue-2']}}>function</code>"}),e.createElement("p",null,"And if you are using Vanilla-Extract for your app's styles, use them in your style declarations like this:"),e.createElement(t,{code:"export const functionStyle = style({color: code['hue-2']});"})),icon:N,params:{},props:{},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Card>
  <Code code={code['mono-1']} />
  <Hr />
  <Row variant="1|1|1">
    <code style={{color: code['hue-2']}}>function</code>
    <code style={{color: code['hue-3']}}>keyword</code>
    <code style={{color: code['hue-4']}}>string</code>
  </Row>
</Card>`}),e.createElement("p",null,"This example shows one of the values within the ",e.createElement("code",null,"code")," object, and then applies some of them to custom code components. Change the dark mode to see the colors respond.")),e.createElement(v,null,e.createElement(t,{code:S["mono-1"]}),e.createElement(p,null),e.createElement(d,{variant:"1|1|1"},e.createElement("code",{style:{color:S["hue-2"]}},"function"),e.createElement("code",{style:{color:S["hue-3"]}},"keyword"),e.createElement("code",{style:{color:S["hue-4"]}},"string")))]]}),N];b["css/colors"]=["colors",()=>e.createElement(i,{type:"CSS",importLine:"import {colors} from 'tinywidgets/css';",title:"colors",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The ",e.createElement("code",null,"colors")," object exposes the CSS variables used by TinyWidgets for color theming, so that you can use them directly in your own application."),e.createElement("p",null,"The full set of members is:"),e.createElement("ul",null,e.createElement("li",null,e.createElement("code",null,"accentHue")),e.createElement("li",null,e.createElement("code",null,"backgroundHue")),e.createElement("li",null,e.createElement("code",null,"accent")),e.createElement("li",null,e.createElement("code",null,"accentLight")),e.createElement("li",null,e.createElement("code",null,"accentHover")),e.createElement("li",null,e.createElement("code",null,"accentContrast")),e.createElement("li",null,e.createElement("code",null,"background")),e.createElement("li",null,e.createElement("code",null,"background2")),e.createElement("li",null,e.createElement("code",null,"backgroundHaze")),e.createElement("li",null,e.createElement("code",null,"backgroundHover")),e.createElement("li",null,e.createElement("code",null,"foreground")),e.createElement("li",null,e.createElement("code",null,"foregroundBright")),e.createElement("li",null,e.createElement("code",null,"foregroundDim")),e.createElement("li",null,e.createElement("code",null,"border")),e.createElement("li",null,e.createElement("code",null,"shadow"))),e.createElement("p",null,"You can use these variables directly in React components that take style attributes, like this:"),e.createElement(t,{code:"<div style={{color: colors.accent}}>Accent</div>"}),e.createElement("p",null,"And if you are using Vanilla-Extract for your app's styles, use them in your style declarations like this:"),e.createElement(t,{code:"export const titleStyle = style({color: colors.accent});"})),icon:N,params:{},props:{},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Card>
  <Code code={colors.accentHue} />
  <Hr />
  <div style={{
    color: colors.accent,
    background: colors.background2,
    border: colors.border,
    boxShadow: colors.shadow,
    textAlign: 'center',
  }}>
    Accent on a background
  </div>
</Card>`}),e.createElement("p",null,"This example shows one of the values within the ",e.createElement("code",null,"colors")," object, and then applies some of them to a custom component. Change the dark mode to see the background respond.")),e.createElement(v,null,e.createElement(t,{code:T.accentHue}),e.createElement(p,null),e.createElement("div",{style:{color:T.accent,background:T.background2,border:T.border,boxShadow:T.shadow,textAlign:"center"}},"Accent on a background"))]]}),N];b["css/dimensions"]=["dimensions",()=>e.createElement(i,{type:"CSS",importLine:"import {dimensions} from 'tinywidgets/css';",title:"dimensions",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The ",e.createElement("code",null,"dimensions")," object exposes the CSS variables used by TinyWidgets for various sizes and lengths, so that you can use them directly in your own application."),e.createElement("p",null,"The full set of members is:"),e.createElement("ul",null,e.createElement("li",null,e.createElement("code",null,"logo")),e.createElement("li",null,e.createElement("code",null,"avatar")),e.createElement("li",null,e.createElement("code",null,"icon")),e.createElement("li",null,e.createElement("code",null,"padding")),e.createElement("li",null,e.createElement("code",null,"radius")),e.createElement("li",null,e.createElement("code",null,"sideNavWidth")),e.createElement("li",null,e.createElement("code",null,"topNavHeight"))),e.createElement("p",null,"You can use these variables directly in React components that take style attributes, like this:"),e.createElement(t,{code:"<div style={{width: dimensions.logo, height: dimensions.logo}} />"}),e.createElement("p",null,"And if you are using Vanilla-Extract for your app's styles, use them in your style declarations like this:"),e.createElement(t,{code:`export const logoStyle = style({
  width: dimensions.logo,
  height: dimensions.logo,
});`})),icon:O,params:{},props:{},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Card>
  <Code code={dimensions['logo']} />
  <Hr />
  <div style={{
    width: dimensions.logo,
    height: dimensions.logo,
    background: 'oklch(50% 0.11 0)',
  }}/>
</Card>`}),e.createElement("p",null,"This example shows one of the values within the ",e.createElement("code",null,"dimensions")," object, and then applies some of them to a custom component.")),e.createElement(v,null,e.createElement(t,{code:j.logo}),e.createElement(p,null),e.createElement("div",{style:{width:j.logo,height:j.logo,background:"oklch(50% 0.11 0)"}}))]]}),O];b["css/screens"]=["screens",()=>e.createElement(i,{type:"CSS",importLine:"import {screens} from 'tinywidgets/css';",title:"screens",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The ",e.createElement("code",null,"screens")," object contains the media query breakpoints that TinyWidget uses to distinguish small, medium, and large screens."),e.createElement("p",null,"Currently, the main impact of the ",e.createElement("code",null,"large")," member is that screens narrower than this number of pixels will get a collapsed side bar. Screens narrower than the ",e.createElement("code",null,"small")," number of pixels will get a slightly smaller font.")),icon:O,params:{},props:{},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:"<Code code={JSON.stringify(screens, null, 2)} />"}),e.createElement("p",null,"This example gets the breakpoint values.")),e.createElement(t,{code:JSON.stringify(We,null,2)})]]}),O];x["hook/useDark"]=["useDark",()=>e.createElement(i,{type:"HOOK",importLine:"import {useDark} from 'tinywidgets';",title:"useDark",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The useDark hook returns whether the user is viewing the application in dark mode.")),icon:k,params:{},props:{},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Card>
  Currently in {useDark() ? 'dark' : 'light'} mode
</Card>`}),e.createElement("p",null,"This example shows the hook returning the current mode.")),e.createElement(v,null,"Currently in ",fe()?"dark":"light"," mode")]]}),k];x["hook/useRoute"]=["useRoute",()=>e.createElement(i,{type:"HOOK",importLine:"import {useRoute} from 'tinywidgets';",title:"useRoute",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The useRoute hook returns the current route, assuming the app is using the basic TinyWidgets routing system."),e.createElement("p",null,"This 'system' simply involves using this hook to get a string which may have been persisted to the hash part of the browser's URL.")),icon:k,params:{},props:{},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:`<Card>
  Current route
  <Hr />
  <code>{useRoute()}</code>
</Card>`}),e.createElement("p",null,"This example shows the hook returning the current route.")),e.createElement(v,null,"Current route",e.createElement(p,null),e.createElement("code",null,z()))]]}),k];x["hook/useSetRouteCallback"]=["useSetRouteCallback",()=>{const l=q();return e.createElement(i,{type:"HOOK",importLine:"import {useSetRouteCallback} from 'tinywidgets';",title:"useSetRouteCallback",comments:e.createElement(e.Fragment,null,e.createElement("p",null,"The useSetRouteCallback hook a callback for setting the current route, assuming the app is using the basic TinyWidgets routing system."),e.createElement("p",null,"This 'system' simply involves using this hook to set a string to be persisted to the hash part of the browser's URL.")),icon:k,params:{},props:{},examples:[[e.createElement(e.Fragment,null,e.createElement(t,{code:`const setRoute = useSetRouteCallback();
// ...
<Button
  icon={Lucide.Home}
  title="Home"
  onClick={() => setRoute('home')}
/>`}),e.createElement("p",null,"This example shows the hook returning a callback that will change the current route when called as a click handler.")),e.createElement(h,{icon:se,title:"Home",onClick:()=>l("home")})]]})},k];Object.assign(w,u,x,M,b,_);var je="_74z0ih0",Be="_74z0ih1",ae="_74z0ih2",re="_74z0ih3",C="_74z0ih4",oe="_74z0ih5";const A=({route:l,variant:n="item",current:c,className:o})=>{var s,y;const a=q(),r=g.useCallback(()=>a(l),[a,l]);return e.createElement(h,{variant:n,title:(s=w[l])==null?void 0:s[0],icon:(y=w[l])==null?void 0:y[2],onClick:r,className:o,current:c})},pe=()=>e.createElement("div",{className:je},e.createElement("div",{className:ae},e.createElement("h1",{className:Be},e.createElement(E,{src:"/favicon.svg",variant:"logo",className:C}),"TinyWidgets"),e.createElement("p",null,"A collection of tiny, reusable, React components, all optionally wrapped up in a helpful app layout, with header, side bar, and dark mode.")),e.createElement(p,{className:oe}),e.createElement(d,null,e.createElement(v,null,e.createElement("h2",null,"Components"),Object.keys(u).sort().map((l,n)=>e.createElement(A,{route:l,variant:"default",key:n,className:re}))),e.createElement(v,null,e.createElement("h2",null,"Hooks, Functions, & Objects"),Object.keys({...x,...M,...b,..._}).sort().map((l,n)=>e.createElement(A,{route:l,variant:"default",key:n,className:re})))),e.createElement(p,{className:oe}),e.createElement("div",{className:ae},e.createElement(E,{src:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",variant:"logo",className:C}),e.createElement(E,{src:"https://raw.githubusercontent.com/vanilla-extract-css/vanilla-extract/refs/heads/master/site/logo.svg",variant:"logo",className:C}),e.createElement(E,{src:"https://lucide.dev/logo.light.svg",variant:"logo",className:C}),e.createElement(E,{src:"https://tinybase.org/favicon.svg",variant:"logo",className:C}),e.createElement("p",null,"TinyWidgets uses ",e.createElement("a",{href:"https://react.dev/"},"React")," for DOM manipulation,"," ",e.createElement("a",{href:"https://vanilla-extract.style/"},"Vanilla-Extract")," for styling and theming, ",e.createElement("a",{href:"https://lucide.dev/"},"Lucide")," for icons, and ",e.createElement("a",{href:"https://tinybase.org"},"TinyBase")," for state management. Its philosophy is all about simplicity, decent defaults, a streamlined DOM, and concise styling."),e.createElement("p",null,"But, just to be clear - that doesn't mean ",e.createElement("i",null,"you")," need to use Vanilla-Extract, Lucide, or Tinybase in the apps you build with these widgets. You can set arbitrary class names (from Tailwind, for example!) on all components, for instance."),e.createElement("p",null,"Of course, this site is itself a demo of TinyWidgets, showing off the components and layout in action. But check out the individual components by navigating the API documentation in the side bar.")));w.home=["Home",pe,se];var de={exports:{}},L={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=g,Pe=Symbol.for("react.element"),ze=Symbol.for("react.fragment"),qe=Object.prototype.hasOwnProperty,_e=Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,De={key:!0,ref:!0,__self:!0,__source:!0};function Ee(l,n,c){var o,a={},r=null,s=null;c!==void 0&&(r=""+c),n.key!==void 0&&(r=""+n.key),n.ref!==void 0&&(s=n.ref);for(o in n)qe.call(n,o)&&!De.hasOwnProperty(o)&&(a[o]=n[o]);if(l&&l.defaultProps)for(o in n=l.defaultProps,n)a[o]===void 0&&(a[o]=n[o]);return{$$typeof:Pe,type:l,key:r,ref:s,props:a,_owner:_e.current}}L.Fragment=ze;L.jsx=Ee;L.jsxs=Ee;de.exports=L;var B=de.exports;const Ue="#181717",Ve=g.forwardRef(function({title:n="GitHub",color:c="currentColor",size:o=24,...a},r){return c==="default"&&(c=Ue),B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,fill:c,viewBox:"0 0 24 24",ref:r,...a,children:[B.jsx("title",{children:n}),B.jsx("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})}),$e=()=>e.createElement(e.Fragment,null,e.createElement(he,null,e.createElement(ue,null),"Installation"),e.createElement("p",null,"TinyWidgets works well with a Vite-based development and build environment, because then it's particularly easy to use Vanilla-Extract."),e.createElement(t,{code:`
$> npm install tinywidgets
        `}));w.installation=["Installation",$e,ue];const Ge=["home",null,"installation",null,["Components",Object.keys(u).sort(),!0],["Hooks & Functions",Object.keys({...x,...M}).sort()],["Objects",Object.keys({..._,...b}).sort()]],Je=()=>{const l=z()||"home";return Ge.map((n,c)=>{if(n instanceof Array){const[o,a,r]=n;return e.createElement(f,{title:o,id:o,startOpen:r,key:c},a.map((s,y)=>e.createElement(A,{route:s,current:l===s,key:y})))}else return n?e.createElement(A,{route:n,current:l===n,key:c}):e.createElement(p,{key:c})})},Ye=()=>e.createElement(me,{title:Ke,topNavRight:e.createElement(h,{title:"GitHub",icon:Ve,href:"https://github.com/tinyplex/tinywidgets"}),sideNav:Je,main:Ze}),Ke=()=>{const l=q(),n=g.useCallback(()=>l(""),[l]);return e.createElement("h1",{className:we,onClick:n},e.createElement(E,{src:"/favicon.svg",variant:"logo",alt:"TinyWidgets"}),"TinyWidgets")},Ze=()=>{var c;const l=z(),n=((c=w[l])==null?void 0:c[1])??pe;return e.createElement("article",{className:ke},e.createElement(n,null))};var P={},ce=be;P.createRoot=ce.createRoot,P.hydrateRoot=ce.hydrateRoot;addEventListener("load",()=>P.createRoot(document.getElementById("app")).render(e.createElement(Ye,null)));

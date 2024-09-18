import{j as e,C as r,H as v,a as x,b as B,D as I,A as y,I as h,B as c,u as R,c as W}from"./tinywidgets-VdOwSRZm.js";import{a as L,r as d}from"./react-dom-wpXbf5jk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();var j={},u=L;j.createRoot=u.createRoot,j.hydrateRoot=u.hydrateRoot;var S="_9uhpoc0";const w=()=>e.jsx("div",{children:"Home"});var E="orrg2n0",O="orrg2n1",M="orrg2n2";const g=({title:i,comments:t,props:o,examples:a})=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:i}),e.jsx(r,{code:`import {${i}} from 'tinywidgets';`}),t,e.jsx(v,{}),e.jsx(x,{label:"Examples",id:"examples",startOpen:!0,children:a.map(([n,s],l)=>e.jsxs(B,{className:E,children:[e.jsx("div",{className:O,children:s}),e.jsx("div",{className:M,children:n})]},l))}),e.jsx(x,{label:"Props",id:"props",startOpen:!0,children:e.jsx(I,{data:o})})]});/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),T=(...i)=>i.filter((t,o,a)=>!!t&&a.indexOf(t)===o).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=d.forwardRef(({color:i="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:n="",children:s,iconNode:l,...A},C)=>d.createElement("svg",{ref:C,...$,width:t,height:t,stroke:i,strokeWidth:a?Number(o)*24/Number(t):o,className:T("lucide",n),...A},[...l.map(([k,N])=>d.createElement(k,N)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(i,t)=>{const o=d.forwardRef(({className:a,...n},s)=>d.createElement(H,{ref:s,iconNode:t,className:T(`lucide-${P(i)}`,a),...n}));return o.displayName=`${i}`,o};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=b("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=b("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),m={};m["components/App"]=["App",()=>e.jsx(g,{title:"App",comments:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"The App component is the root component of a TinyWidgets application."}),e.jsx("p",{children:"It can be provided with optional components for different parts of the app layout, including the top left title, the side bar and the main content."}),e.jsx("p",{children:"If none of these props are present, the TinyWidgets layout won't be used, but you will still be able to enjoy its state management features, and any components within it will be correctly styled."})]}),props:{title:e.jsx(e.Fragment,{children:e.jsx("p",{children:"An optional component, element, or string which renders the top left title of the application."})}),topNavLeft:e.jsx(e.Fragment,{children:e.jsx("p",{children:"An optional component, element, or string which renders navigation on the left side of the top navigation bar of the application."})}),topNavRight:e.jsx(e.Fragment,{children:e.jsx("p",{children:"An optional component, element, or string which renders navigation on the right side of the top navigation bar of the application."})}),sideNav:e.jsx(e.Fragment,{children:e.jsx("p",{children:"An optional component, element, or string which renders the left side bar of the application."})}),main:e.jsx(e.Fragment,{children:e.jsx("p",{children:"An optional component, element, or string which renders the main part of the application."})})},examples:[[e.jsxs(e.Fragment,{children:[e.jsx(r,{code:"<App />"}),e.jsx("p",{children:"This shows an empty App, but if you visit tinywidgets.org you'll see one in its full glory!"})]}),e.jsx(y,{})]]})];m["components/Image"]=["Image",()=>e.jsx(g,{title:"Image",comments:e.jsx(e.Fragment,{children:e.jsx("p",{children:"The Image component displays an image, with a number of common variants."})}),props:{src:e.jsx(e.Fragment,{children:e.jsx("p",{children:"The source of the image."})}),onClick:e.jsx(e.Fragment,{children:e.jsx("p",{children:"A handler called when the user clicks on the image."})}),variant:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"A common variant of the image, one of:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"default"}),e.jsx("li",{children:"logo"}),e.jsx("li",{children:"avatar"}),e.jsx("li",{children:"icon"})]})]}),className:e.jsx(e.Fragment,{children:e.jsx("p",{children:"An extra CSS class name for the image."})}),alt:e.jsx(e.Fragment,{children:e.jsx("p",{children:"Alternative text shown when the user hovers over the image."})})},examples:[[e.jsxs(e.Fragment,{children:[e.jsx(r,{code:`<Image
  src="/favicon.svg"
  onClick={() => alert('Clicked!')}
  alt="TinyWidgets"
/>`}),e.jsxs("p",{children:["This example shows the ",e.jsx("code",{children:"default"})," variant of the Image component."]})]}),e.jsx(h,{src:"/favicon.svg",onClick:()=>alert("Clicked!"),alt:"TinyWidgets"})],[e.jsxs(e.Fragment,{children:[e.jsx(r,{code:`<Image
  src="/favicon.svg"
  variant="logo"
/>`}),e.jsxs("p",{children:["This example shows the ",e.jsx("code",{children:"logo"})," variant of the Image component."]})]}),e.jsx(h,{src:"/favicon.svg",variant:"logo"})],[e.jsxs(e.Fragment,{children:[e.jsx(r,{code:`<Image
  src="/favicon.svg"
  variant="avatar"
/>`}),e.jsxs("p",{children:["This example shows the ",e.jsx("code",{children:"avatar"})," variant of the Image component."]})]}),e.jsx(h,{src:"/favicon.svg",variant:"avatar"})],[e.jsxs(e.Fragment,{children:[e.jsx(r,{code:`<Image
  src="/favicon.svg"
  variant="icon"
/>`}),e.jsxs("p",{children:["This example shows the ",e.jsx("code",{children:"icon"})," variant of the Image component."]})]}),e.jsx(h,{src:"/favicon.svg",variant:"icon"})]]})];m["components/Button"]=["Button",()=>e.jsx(g,{title:"Button",comments:e.jsx(e.Fragment,{children:e.jsx("p",{children:"The Button component displays an button, with a number of common variants."})}),props:{icon:e.jsx(e.Fragment,{children:e.jsx("p",{children:"An optional component which renders an icon for the button, and which must accept a className prop."})}),title:e.jsx(e.Fragment,{children:e.jsx("p",{children:"An optional component, element, or string which renders the title of the button."})}),titleRight:e.jsx(e.Fragment,{children:e.jsx("p",{children:"An optional component, element, or string which renders a second title on the right side of the button."})}),iconRight:e.jsx(e.Fragment,{children:e.jsx("p",{children:"An optional component which renders a second icon for the button, and which must accept a className prop."})}),onClick:e.jsx(e.Fragment,{children:e.jsx("p",{children:"A handler called when the user clicks on the button."})}),variant:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"A common variant of the button, one of:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"default"}),e.jsx("li",{children:"icon"}),e.jsx("li",{children:"accent"}),e.jsx("li",{children:"ghost"}),e.jsx("li",{children:"item"})]})]}),current:e.jsx(e.Fragment,{children:e.jsx("p",{children:"An extra CSS class name for the component."})}),className:e.jsx(e.Fragment,{children:e.jsx("p",{children:"An extra CSS class name for the component."})}),href:e.jsx(e.Fragment,{}),alt:e.jsx(e.Fragment,{children:e.jsx("p",{children:"Alternative text shown when the user hovers over the component."})})},examples:[[e.jsxs(e.Fragment,{children:[e.jsx(r,{code:`<Button
  title="TinyWidgets"
  onClick={() => alert('Clicked!')}
/>`}),e.jsxs("p",{children:["This example shows the ",e.jsx("code",{children:"default"})," variant of the Button component."]})]}),e.jsx(c,{title:"TinyWidgets",onClick:()=>alert("Clicked!")})],[e.jsxs(e.Fragment,{children:[e.jsx(r,{code:`<Button
  title="TinyWidgets"
  icon={Lucide.Sun}
/>`}),e.jsxs("p",{children:["This example shows the ",e.jsx("code",{children:"default"})," variant of the Button component with a left icon."]})]}),e.jsx(c,{title:"TinyWidgets",icon:p})],[e.jsxs(e.Fragment,{children:[e.jsx(r,{code:`<Button
  title="TinyWidgets"
  iconRight={Lucide.Sun}
/>`}),e.jsxs("p",{children:["This example shows the ",e.jsx("code",{children:"default"})," variant of the Button component with a right icon."]})]}),e.jsx(c,{title:"TinyWidgets",iconRight:p})],[e.jsxs(e.Fragment,{children:[e.jsx(r,{code:`<Button
  icon={Lucide.Sun}
  title="TinyWidgets"
  titleRight={<small>Cool!</small>}
  iconRight={Lucide.Moon}
/>`}),e.jsxs("p",{children:["This example shows the ",e.jsx("code",{children:"default"})," variant of the Button component with a right icon."]})]}),e.jsx(c,{icon:p,title:"TinyWidgets",titleRight:e.jsx("small",{children:"Cool!"}),iconRight:D})],[e.jsxs(e.Fragment,{children:[e.jsx(r,{code:`<Button
  icon={Lucide.Sun}
  variant="icon"
/>`}),e.jsxs("p",{children:["This example shows the ",e.jsx("code",{children:"icon"})," variant of the Button component. It is best used without a title."]})]}),e.jsx(c,{icon:p,variant:"icon"})],[e.jsxs(e.Fragment,{children:[e.jsx(r,{code:`<Button
  title="TinyWidgets"
  variant="accent"
/>`}),e.jsxs("p",{children:["This example shows the ",e.jsx("code",{children:"accent"})," variant of the Button component."]})]}),e.jsx(c,{title:"TinyWidgets",variant:"accent"})],[e.jsxs(e.Fragment,{children:[e.jsx(r,{code:`<Button
  title="TinyWidgets"
  variant="ghost"
/>`}),e.jsxs("p",{children:["This example shows the ",e.jsx("code",{children:"ghost"})," variant of the Button component."]})]}),e.jsx(c,{title:"TinyWidgets",variant:"ghost"})],[e.jsxs(e.Fragment,{children:[e.jsx(r,{code:`<Button
  title="TinyWidgets"
  variant="item"
/>`}),e.jsxs("p",{children:["This example shows the ",e.jsx("code",{children:"item"})," variant of the Button component. This is suitable for use as a link in a navigational list, such as a side bar."]})]}),e.jsx(c,{title:"TinyWidgets",variant:"item"})]]})];const F={home:["Home",w],...m},q=["home",null,["Components",Object.keys(m).sort()]],f=({route:i})=>{var o;const t=R();return e.jsx(c,{variant:"item",title:(o=F[i])==null?void 0:o[0],onClick:()=>t(i)})},K=()=>q.map((i,t)=>{if(i instanceof Array){const[o,a]=i;return e.jsx(x,{label:o,startOpen:!0,children:a.map((n,s)=>e.jsx(f,{route:n},s))},t)}else return i?e.jsx(f,{route:i},t):e.jsx(v,{},t)}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(h,{src:"/favicon.svg",variant:"logo",alt:"TinyWidgets"}),e.jsx("h1",{children:"TinyWidgets"})]}),Z=()=>e.jsx("i",{children:"TopNavRight"}),_=()=>{var t;const i=((t=F[W()])==null?void 0:t[1])??w;return e.jsx("article",{className:S,children:e.jsx(i,{})})},z=()=>e.jsx(y,{title:U,topNavRight:Z,sideNav:K,main:_});addEventListener("load",()=>j.createRoot(document.getElementById("app")).render(e.jsx(z,{})));

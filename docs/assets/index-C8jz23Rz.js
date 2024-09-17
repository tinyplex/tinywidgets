import{j as e,C as o,H as j,a as h,b as F,D as T,A as f,B as u,I as l,u as b,c as w}from"./tinywidgets-CAL01Zqd.js";import{a as A}from"./react-dom-CXoAby46.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();var m={},x=A;m.createRoot=x.createRoot,m.hydrateRoot=x.hydrateRoot;var C="_9uhpoc0";const v=()=>e.jsx("div",{children:"Home"});var N="orrg2n0",I="orrg2n1",R="orrg2n2";const p=({title:i,comments:s,props:r,examples:a})=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:i}),e.jsx(o,{code:`import {${i}} from 'tinywidgets';`}),s,e.jsx(j,{}),e.jsx(h,{label:"Examples",id:"examples",startOpen:!0,children:a.map(([t,n],c)=>e.jsxs(F,{className:N,children:[e.jsx("div",{className:I,children:n}),e.jsx("div",{className:R,children:t})]},c))}),e.jsx(h,{label:"Props",id:"props",startOpen:!0,children:e.jsx(T,{data:r})})]}),d={};d["components/App"]=["App",()=>e.jsx(p,{title:"App",comments:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"The App component is the root component of a TinyWidgets application."}),e.jsx("p",{children:"It can be provided with optional components for different parts of the app layout, including the top left title, the side bar and the main content."}),e.jsx("p",{children:"If none of these props are present, the TinyWidgets layout won't be used, but you will still be able to enjoy its state management features, and any components within it will be correctly styled."})]}),props:{title:e.jsx(e.Fragment,{children:e.jsx("p",{children:"A component, element, or string which renders the top left title of the app."})}),topNavLeft:e.jsx(e.Fragment,{children:e.jsx("p",{children:"A component, element, or string which renders navigation on the left side of the top navigation bar."})}),topNavRight:e.jsx(e.Fragment,{children:e.jsx("p",{children:"A component, element, or string which renders navigation on the right side of the top navigation bar."})}),sideNav:e.jsx(e.Fragment,{children:e.jsx("p",{children:"A component, element, or string which renders the left side bar."})}),main:e.jsx(e.Fragment,{children:e.jsx("p",{children:"A component, element, or string which renders the main part of the application."})})},examples:[[e.jsxs(e.Fragment,{children:[e.jsx(o,{code:"<App />"}),e.jsx("p",{children:"This shows an empty App, but if you visit tinywidgets.org you'll see one in its full glory!"})]}),e.jsx(f,{})]]})];d["components/Button"]=["Button",()=>e.jsx(p,{title:"Button",comments:e.jsx(e.Fragment,{children:e.jsx("p",{children:"The Button component displays an button, with a number of common variants."})}),props:{icon:e.jsx(e.Fragment,{children:e.jsx("p",{children:"A component which renders an icon for the button, and which must accept a className prop."})}),label:e.jsx(e.Fragment,{}),labelRight:e.jsx(e.Fragment,{}),iconRight:e.jsx(e.Fragment,{}),onClick:e.jsx(e.Fragment,{}),variant:e.jsx(e.Fragment,{}),className:e.jsx(e.Fragment,{}),href:e.jsx(e.Fragment,{}),title:e.jsx(e.Fragment,{}),current:e.jsx(e.Fragment,{})},examples:[[e.jsxs(e.Fragment,{children:[e.jsx(o,{code:`<Button
  label="TinyWidgets"
  onClick={() => alert('Clicked!')}
/>`}),e.jsx("p",{children:"This example shows the default variant of the Button component."})]}),e.jsx(u,{label:"TinyWidgets",onClick:()=>alert("Clicked!")})]]})];d["components/Image"]=["Image",()=>e.jsx(p,{title:"Image",comments:e.jsx(e.Fragment,{children:e.jsx("p",{children:"The Image component displays an image, with a number of common variants."})}),props:{src:e.jsx(e.Fragment,{children:e.jsx("p",{children:"The source of the image."})}),title:e.jsx(e.Fragment,{children:e.jsx("p",{children:"A title shown when the user hovers over the component."})}),onClick:e.jsx(e.Fragment,{children:e.jsx("p",{children:"A handler called when the user clicks on the component."})}),variant:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"A common variant of the component, one of:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"default"}),e.jsx("li",{children:"logo"}),e.jsx("li",{children:"avatar"}),e.jsx("li",{children:"icon"})]})]}),className:e.jsx(e.Fragment,{children:e.jsx("p",{children:"An extra CSS class name for the component."})})},examples:[[e.jsxs(e.Fragment,{children:[e.jsx(o,{code:`<Image
  src="/favicon.svg"
  title="TinyWidgets"
  onClick={() => alert('Clicked!')}
/>`}),e.jsxs("p",{children:["This example shows the ",e.jsx("code",{children:"default"})," variant of the Image component."]})]}),e.jsx(l,{src:"/favicon.svg",title:"TinyWidgets",onClick:()=>alert("Clicked!")})],[e.jsxs(e.Fragment,{children:[e.jsx(o,{code:`<Image
  src="/favicon.svg"
  title="TinyWidgets"
  variant="logo"
/>`}),e.jsxs("p",{children:["This example shows the ",e.jsx("code",{children:"logo"})," variant of the Image component."]})]}),e.jsx(l,{src:"/favicon.svg",title:"TinyWidgets",variant:"logo"})],[e.jsxs(e.Fragment,{children:[e.jsx(o,{code:`<Image
  src="/favicon.svg"
  title="TinyWidgets"
  variant="avatar"
/>`}),e.jsxs("p",{children:["This example shows the ",e.jsx("code",{children:"avatar"})," variant of the Image component."]})]}),e.jsx(l,{src:"/favicon.svg",title:"TinyWidgets",variant:"avatar"})],[e.jsxs(e.Fragment,{children:[e.jsx(o,{code:`<Image
  src="/favicon.svg"
  title="TinyWidgets"
  variant="icon"
/>`}),e.jsxs("p",{children:["This example shows the ",e.jsx("code",{children:"icon"})," variant of the Image component."]})]}),e.jsx(l,{src:"/favicon.svg",title:"TinyWidgets",variant:"icon"})]]})];const y={home:["Home",v],...d},W=["home",null,["Components",Object.keys(d).sort()]],g=({route:i})=>{var r;const s=b();return e.jsx(u,{variant:"item",label:(r=y[i])==null?void 0:r[0],onClick:()=>s(i)})},O=()=>W.map((i,s)=>{if(i instanceof Array){const[r,a]=i;return e.jsx(h,{label:r,startOpen:!0,children:a.map((t,n)=>e.jsx(g,{route:t},n))},s)}else return i?e.jsx(g,{route:i},s):e.jsx(j,{},s)}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{src:"/favicon.svg",title:"TinyWidgets",variant:"logo"}),e.jsx("h1",{children:"TinyWidgets"})]}),B=()=>e.jsx("i",{children:"TopNavRight"}),k=()=>{var s;const i=((s=y[w()])==null?void 0:s[1])??v;return e.jsx("article",{className:C,children:e.jsx(i,{})})},L=()=>e.jsx(f,{title:E,topNavRight:B,sideNav:O,main:k});addEventListener("load",()=>m.createRoot(document.getElementById("app")).render(e.jsx(L,{})));

import{U as f,c as x,a as W,b as Z,d as X}from"./tinybase-BVof-Cp5.js";import{r as c,R as s}from"./react-BJIDu5Qu.js";const E="ready",j="change",$={[E]:{type:"boolean",default:!1}},R=matchMedia==null?void 0:matchMedia("(prefers-color-scheme: dark)"),p="tinywidgets/Local",I="darkPreference",M="darkChoice",Y={...$,[I]:{type:"boolean",default:!1},[M]:{type:"number",default:2}},{useCreatePersister:G,useCreateStore:J,useProvideStore:Q,useSetValueCallback:ee,useValue:V}=f,ae=()=>{const e=B(),a=V(I,p);return e==1||e==2&&a},B=()=>V(M,p)??2,te=()=>ee(M,()=>e=>((e??2)+1)%3,[],p),se=()=>V(E,p),re=()=>{const e=J(()=>x().setValuesSchema(Y)),a=c.useCallback(()=>e.setValue(I,R.matches),[e]);return G(e,t=>W(t,p),[],async t=>{await t.startAutoLoad(),await t.startAutoSave(),a(),t.getStore().setValue(E,!0)},[a]),c.useEffect(()=>(R.addEventListener(j,a),a(),()=>R.removeEventListener(j,a)),[e,a]),Q(p,e),null};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),q=(...e)=>e.filter((a,t,r)=>!!a&&r.indexOf(a)===t).join(" ");/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=c.forwardRef(({color:e="currentColor",size:a=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:n="",children:o,iconNode:v,...i},d)=>c.createElement("svg",{ref:d,...oe,width:a,height:a,stroke:e,strokeWidth:r?Number(t)*24/Number(a):t,className:q("lucide",n),...i},[...v.map(([k,h])=>c.createElement(k,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(e,a)=>{const t=c.forwardRef(({className:r,...n},o)=>c.createElement(ce,{ref:o,iconNode:a,className:q(`lucide-${ne(e)}`,r),...n}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=g("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=g("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=g("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=g("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=g("SunMoon",[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=g("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=g("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),w="tinywidgets/Route",z="route",he={...$,[z]:{type:"string",default:""}},{useCreateStore:be,useProvideStore:Ee,useCreatePersister:ge,useValue:U,useSetValueCallback:ye}=f,Ia=()=>U(z,w),Ma=()=>ye(z,e=>e,[],w),Se=()=>U(E,w),pe=()=>{const e=be(()=>x().setValuesSchema(he));return Ee(w,e),ge(e,a=>Z(a,async()=>[{},{route:location.hash.slice(1),ready:!0}],async t=>{const r=t()[1].route;r&&(location.hash=r)},t=>{const r=()=>t();return window.addEventListener("hashchange",r),r},t=>window.removeEventListener("hashchange",t)),[],async a=>{await a.startAutoLoad(),await a.startAutoSave(),a.getStore().setValue(E,!0)}),null},b="tinywidgets/Session",P="collapsible",O="isOpen",D="sideNavIsOpen",_e={[P]:{[O]:{type:"boolean",default:!1}}},Ce={...$,[D]:{type:"boolean",default:!1}},{useCell:fe,useCreatePersister:we,useCreateStore:Ne,useProvideStore:Re,useSetCellCallback:Le,useSetValueCallback:Ae,useValue:K}=f,xe=e=>fe(P,e,O,b),$e=e=>Le(P,e,O,a=>a,[e],b),Ie=()=>K(D,b),Me=()=>Ae(D,()=>e=>!e,[],b),Ve=()=>K(E,b),ze=()=>{const e=Ne(()=>x().setSchema(_e,Ce));return we(e,a=>X(a,b),[],async a=>{await a.startAutoLoad(),await a.startAutoSave(),a.getStore().setValue(E,!0)}),Re(b,e),null};var Pe="_1pcz7a30 moe67h0",Oe="_1pcz7a31",De="_1pcz7a32",je="_1pcz7a33",He="_1pcz7a34",Te="_1pcz7a35",Be="_1pcz7a36",qe="_1pcz7a37",Ue="_1pcz7a38",Ke="_1pcz7a39";const l=(...e)=>e.filter(Boolean).join(" "),m=(e,a=null)=>e instanceof Function?s.createElement(e,null):e??a;var Fe="ksssmug",We="ksssmuh",Ze="_20kobvf",Xe="_20kobvg",Ye="_44v2sr0",Ge={default:"_44v2sr1",accent:"_44v2sr2",ghost:"_44v2sr3",item:"_44v2sr4",icon:"_44v2sr5"},Je="_44v2sr6",Qe="_44v2sr7",ea="_44v2sr8",L="moe67h8";const A=c.forwardRef(({icon:e,title:a,titleRight:t,iconRight:r,onClick:n,variant:o="default",current:v,href:i,alt:d,className:k},h)=>{const u=c.useCallback(()=>i?open(i,"_blank","noreferrer"):null,[i]);return s.createElement("button",{className:l(Ye,Ge[o],v&&Je,k),onClick:n??u,title:d,ref:h},e?s.createElement(e,{className:L}):null,a?s.createElement("span",{className:Qe},m(a)):null,t?s.createElement("span",{className:ea},m(t)):null,r?s.createElement(r,{className:L}):null)}),{Provider:aa}=f,ta=[de,me,ve],sa=["Light always","Dark always","Auto"],Va=e=>s.createElement(aa,null,s.createElement(ra,{...e}),s.createElement(ze,null),s.createElement(re,null),s.createElement(pe,null)),ra=({title:e,topNavLeft:a,topNavRight:t,sideNav:r,main:n,className:o})=>{const v=Ve(),i=Se(),d=se(),k=te(),h=Me(),u=Ie(),_=B(),y=ae(),C=[e,a,t,r,n].some(N=>N),S=r!=null;return v&&i&&d?s.createElement("div",{className:l(Pe,C&&Oe,y?Xe:Ze,y?We:Fe,o)},C?s.createElement(s.Fragment,null,s.createElement("header",{className:De},S?s.createElement(A,{variant:"icon",onClick:h,icon:u?ke:ie,className:He}):null,s.createElement("nav",{className:Te},m(e)),s.createElement("nav",{className:je},m(a,s.createElement("div",null)),m(t,s.createElement("div",null))),s.createElement(A,{variant:"icon",onClick:k,icon:ta[_],alt:sa[_]}),S?s.createElement("nav",{className:l(Be,u&&qe)},m(r)):null),s.createElement("main",{className:l(Ue,S&&Ke)},m(n))):null):null};var na="_1xhtxuz0";const za=({className:e,children:a})=>s.createElement("div",{className:l(na,e)},a);var oa="wv2u100";const Pa=({code:e,language:a="javascript",className:t})=>{var n;const r=globalThis.Prism;return s.createElement("pre",{className:l(oa,t)},s.createElement("code",{dangerouslySetInnerHTML:{__html:(r?r.highlight(e,(n=r.languages)==null?void 0:n[a],a):e.replace(/[\u00A0-\u9999<>&]/g,o=>`&#${o.charCodeAt(0)};`)).trim()}}))};var ca="nimzjh0",la="nimzjh1",ua="nimzjh2",ia="nimzjh3",ma="nimzjh4";const Oa=({icon:e,title:a,titleRight:t,startOpen:r=!1,id:n="",className:o,children:v})=>{const i=xe(n)??r,d=$e(n),[k,h]=c.useState(r),u=n?i:k,_=n?d:h,[y,C]=c.useState(u),S=c.useRef(),N=c.useCallback(()=>{_(!u),clearTimeout(S.current),S.current=setTimeout(()=>C(!u),u?200:0)},[_,u]);return s.createElement("div",{className:l(ca,u&&la)},s.createElement(A,{onClick:N,icon:e,title:a,titleRight:t,iconRight:u?le:ue,className:l(ua,y&&ia),current:y}),y?s.createElement("div",{className:l(ma,o)},v):null)};var va="_174l0sg0",da="_174l0sg1",H="_174l0sg2";const Da=({data:e,className:a})=>s.createElement("table",{className:l(va,a)},s.createElement("tbody",null,Object.entries(e).map(([t,r])=>s.createElement("tr",{key:t,className:da},s.createElement("th",{className:H},t),s.createElement("td",{className:H},r)))));var ka="_1m2ouns0";const ja=({className:e})=>s.createElement("hr",{className:l(ka,e)});var ha="vbfnbx0",ba={default:"vbfnbx1",logo:"vbfnbx2",avatar:"vbfnbx3",icon:"vbfnbx4"};const Ea=({src:e,onClick:a,variant:t="default",alt:r,className:n})=>s.createElement("img",{src:e,onClick:a,title:r,className:l(ha,ba[t],n)});var ga="bcsz8y0",ya="bcsz8y1",Sa="bcsz8y2";const Ha=({icon:e,title:a,number:t,className:r})=>s.createElement("div",{className:l(ga,r)},s.createElement("div",{className:ya},e?s.createElement(e,{className:L}):null,m(a)),s.createElement("div",{className:Sa},m(t)));var pa="_1sknk70",_a={"1|1":"_1sknk71","1|2":"_1sknk72","2|1":"_1sknk73","1|1|1":"_1sknk74","1|3":"_1sknk75","3|1":"_1sknk76","1|1|1|1":"_1sknk77"};const Ta=({variant:e="1|1",className:a,children:t})=>s.createElement("div",{className:l(pa,_a[e],a)},t);var Ca="_2l6wb0",T="_2l6wb1";const Ba=({src:e,icon:a,className:t,children:r})=>s.createElement("div",{className:l(Ca,t)},a?s.createElement(a,{className:T}):e?s.createElement(Ea,{src:e,className:T}):s.createElement("div",null),s.createElement("div",null,r));var fa="mq9yo20",wa={default:"mq9yo21",accent:"mq9yo22"},Na="mq9yo23";const qa=({icon:e,title:a,variant:t="default",alt:r,className:n})=>{const o=e?s.createElement(e,{className:Na}):null;return s.createElement("div",{className:l(fa,wa[t],n),title:r},o,m(a))};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),F=(...e)=>e.filter((a,t,r)=>!!a&&r.indexOf(a)===t).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var La={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=c.forwardRef(({color:e="currentColor",size:a=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:n="",children:o,iconNode:v,...i},d)=>c.createElement("svg",{ref:d,...La,width:a,height:a,stroke:e,strokeWidth:r?Number(t)*24/Number(a):t,className:F("lucide",n),...i},[...v.map(([k,h])=>c.createElement(k,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=(e,a)=>{const t=c.forwardRef(({className:r,...n},o)=>c.createElement(Aa,{ref:o,iconNode:a,className:F(`lucide-${Ra(e)}`,r),...n}));return t.displayName=`${e}`,t};var Ka={accentHue:"var(--_20kobv0)",backgroundHue:"var(--_20kobv1)",accent:"var(--_20kobv2)",accentLight:"var(--_20kobv3)",accentHover:"var(--_20kobv4)",accentContrast:"var(--_20kobv5)",background:"var(--_20kobv6)",background2:"var(--_20kobv7)",backgroundHaze:"var(--_20kobv8)",backgroundHover:"var(--_20kobv9)",foreground:"var(--_20kobva)",foregroundBright:"var(--_20kobvb)",foregroundDim:"var(--_20kobvc)",border:"var(--_20kobvd)",shadow:"var(--_20kobve)"},Fa={"mono-1":"var(--ksssmu0)","mono-2":"var(--ksssmu1)","mono-3":"var(--ksssmu2)","hue-1":"var(--ksssmu3)","hue-2":"var(--ksssmu4)","hue-3":"var(--ksssmu5)","hue-4":"var(--ksssmu6)","hue-5":"var(--ksssmu7)","hue-5-2":"var(--ksssmu8)","hue-6":"var(--ksssmu9)","hue-6-2":"var(--ksssmua)","syntax-fg":"var(--ksssmub)","syntax-bg":"var(--ksssmuc)","syntax-gutter":"var(--ksssmud)","syntax-guide":"var(--ksssmue)","syntax-accent":"var(--ksssmuf)"},Wa={logo:"var(--moe67h1)",avatar:"var(--moe67h2)",icon:"var(--moe67h3)",padding:"var(--moe67h4)",radius:"var(--moe67h5)",sideNavWidth:"var(--moe67h6)",topNavHeight:"var(--moe67h7)"},Za={small:448,large:768};export{Va as A,A as B,Pa as C,Da as D,ja as H,Ea as I,Ha as M,Ta as R,Ba as S,qa as T,Oa as a,za as b,Ua as c,l as d,Fa as e,Ka as f,Wa as g,Ia as h,Ma as i,Za as s,ae as u};

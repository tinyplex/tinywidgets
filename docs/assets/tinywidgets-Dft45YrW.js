import{r as c,j as t}from"./react-BVydaOIA.js";import{U as j,c as L,a as W,b as Z,d as X}from"./tinybase-CBReIoVM.js";const g="ready",D="change",A={[g]:{type:"boolean",default:!1}},N=matchMedia==null?void 0:matchMedia("(prefers-color-scheme: dark)"),x="tinywidgets/Local",$="darkPreference",I="darkChoice",Y={...A,[$]:{type:"boolean",default:!1},[I]:{type:"number",default:2}},{useCreatePersister:G,useCreateStore:J,useProvideStore:Q,useSetValueCallback:ee,useValue:M}=j,se=()=>{const e=B(),s=M($,x);return e==1||e==2&&s},B=()=>M(I,x)??2,ae=()=>ee(I,()=>e=>((e??2)+1)%3,[],x),te=()=>M(g,x),re=()=>{const e=J(()=>L().setValuesSchema(Y)),s=c.useCallback(()=>e.setValue($,N.matches),[e]);return G(e,a=>W(a,x),[],async a=>{await a.startAutoLoad(),await a.startAutoSave(),s(),a.getStore().setValue(g,!0)},[s]),c.useEffect(()=>(N.addEventListener(D,s),s(),()=>N.removeEventListener(D,s)),[e,s]),Q(x,e),null};const ne=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),q=(...e)=>e.filter((s,a,r)=>!!s&&r.indexOf(s)===a).join(" ");var oe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const ce=c.forwardRef(({color:e="currentColor",size:s=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:n="",children:o,iconNode:i,...v},m)=>c.createElement("svg",{ref:m,...oe,width:s,height:s,stroke:e,strokeWidth:r?Number(a)*24/Number(s):a,className:q("lucide",n),...v},[...i.map(([h,k])=>c.createElement(h,k)),...Array.isArray(o)?o:[o]]));const p=(e,s)=>{const a=c.forwardRef(({className:r,...n},o)=>c.createElement(ce,{ref:o,iconNode:s,className:q(`lucide-${ne(e)}`,r),...n}));return a.displayName=`${e}`,a};const le=p("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const ue=p("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const ie=p("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const ve=p("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);const de=p("SunMoon",[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]]);const me=p("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);const he=p("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),f="tinywidgets/Route",V="route",ke={...A,[V]:{type:"string",default:""}},{useCreateStore:be,useProvideStore:ge,useCreatePersister:pe,useValue:U,useSetValueCallback:ye}=j,Is=()=>U(V,f),Ms=()=>ye(V,e=>e,[],f),Se=()=>U(g,f),xe=()=>{const e=be(()=>L().setValuesSchema(ke));return ge(f,e),pe(e,s=>Z(s,async()=>[{},{route:location.hash.slice(1),ready:!0}],async a=>{const r=a()[1].route;r&&(location.hash=r)},a=>{const r=()=>a();return window.addEventListener("hashchange",r),r},a=>window.removeEventListener("hashchange",a)),[],async s=>{await s.startAutoLoad(),await s.startAutoSave(),s.getStore().setValue(g,!0)}),null},b="tinywidgets/Session",z="collapsible",P="isOpen",O="sideNavIsOpen",_e={[z]:{[P]:{type:"boolean",default:!1}}},Ce={...A,[O]:{type:"boolean",default:!1}},{useCell:je,useCreatePersister:fe,useCreateStore:we,useProvideStore:Ne,useSetCellCallback:Ee,useSetValueCallback:Re,useValue:K}=j,Le=e=>je(z,e,P,b),Ae=e=>Ee(z,e,P,s=>s,[e],b),$e=()=>K(O,b),Ie=()=>Re(O,()=>e=>!e,[],b),Me=()=>K(g,b),Ve=()=>{const e=we(()=>L().setSchema(_e,Ce));return fe(e,s=>X(s,b),[],async s=>{await s.startAutoLoad(),await s.startAutoSave(),s.getStore().setValue(g,!0)}),Ne(b,e),null};var ze="_1pcz7a30 moe67h0",Pe="_1pcz7a31",Oe="_1pcz7a32",De="_1pcz7a33",He="_1pcz7a34",Te="_1pcz7a35",Be="_1pcz7a36",qe="_1pcz7a37",Ue="_1pcz7a38",Ke="_1pcz7a39";const l=(...e)=>e.filter(Boolean).join(" "),d=(e,s=null)=>e instanceof Function?t.jsx(e,{}):e??s;var Fe="ksssmug",We="ksssmuh",Ze="_20kobvf",Xe="_20kobvg",Ye="_44v2sr0",Ge={default:"_44v2sr1",accent:"_44v2sr2",ghost:"_44v2sr3",item:"_44v2sr4",icon:"_44v2sr5"},Je="_44v2sr6",Qe="_44v2sr7",es="_44v2sr8",E="moe67h8";const R=c.forwardRef(({icon:e,title:s,titleRight:a,iconRight:r,onClick:n,variant:o="default",current:i,href:v,alt:m,className:h},k)=>{const u=c.useCallback(()=>v?open(v,"_blank","noreferrer"):null,[v]);return t.jsxs("button",{className:l(Ye,Ge[o],i&&Je,h),onClick:n??u,title:m,ref:k,children:[e?t.jsx(e,{className:E}):null,s?t.jsx("span",{className:Qe,children:d(s)}):null,a?t.jsx("span",{className:es,children:d(a)}):null,r?t.jsx(r,{className:E}):null]})}),{Provider:ss}=j,as=[me,ve,de],ts=["Light always","Dark always","Auto"],Vs=e=>t.jsxs(ss,{children:[t.jsx(rs,{...e}),t.jsx(Ve,{}),t.jsx(re,{}),t.jsx(xe,{})]}),rs=({title:e,topNavLeft:s,topNavRight:a,sideNav:r,main:n,className:o})=>{const i=Me(),v=Se(),m=te(),h=ae(),k=Ie(),u=$e(),_=B(),y=se(),C=[e,s,a,r,n].some(w=>w),S=r!=null;return i&&v&&m?t.jsx("div",{className:l(ze,C&&Pe,y?Xe:Ze,y?We:Fe,o),children:C?t.jsxs(t.Fragment,{children:[t.jsxs("header",{className:Oe,children:[S?t.jsx(R,{variant:"icon",onClick:k,icon:u?he:ie,className:He}):null,t.jsx("nav",{className:Te,children:d(e)}),t.jsxs("nav",{className:De,children:[d(s,t.jsx("div",{})),d(a,t.jsx("div",{}))]}),t.jsx(R,{variant:"icon",onClick:h,icon:as[_],alt:ts[_]}),S?t.jsx("nav",{className:l(Be,u&&qe),children:d(r)}):null]}),t.jsx("main",{className:l(Ue,S&&Ke),children:d(n)})]}):null}):null};var ns="_1xhtxuz0";const zs=({className:e,children:s})=>t.jsx("div",{className:l(ns,e),children:s});var os="wv2u100";const Ps=({code:e,language:s="javascript",className:a})=>{var n;const r=globalThis.Prism;return t.jsx("pre",{className:l(os,a),children:t.jsx("code",{dangerouslySetInnerHTML:{__html:(r?r.highlight(e,(n=r.languages)==null?void 0:n[s],s):e.replace(/[\u00A0-\u9999<>&]/g,o=>`&#${o.charCodeAt(0)};`)).trim()}})})};var cs="nimzjh0",ls="nimzjh1",us="nimzjh2",is="nimzjh3",vs="nimzjh4";const Os=({icon:e,title:s,titleRight:a,startOpen:r=!1,id:n="",className:o,children:i})=>{const v=Le(n)??r,m=Ae(n),[h,k]=c.useState(r),u=n?v:h,_=n?m:k,[y,C]=c.useState(u),S=c.useRef(),w=c.useCallback(()=>{_(!u),clearTimeout(S.current),S.current=setTimeout(()=>C(!u),u?200:0)},[_,u]);return t.jsxs("div",{className:l(cs,u&&ls),children:[t.jsx(R,{onClick:w,icon:e,title:s,titleRight:a,iconRight:u?le:ue,className:l(us,y&&is),current:y}),y?t.jsx("div",{className:l(vs,o),children:i}):null]})};var ds="_174l0sg0",ms="_174l0sg1",H="_174l0sg2";const Ds=({data:e,className:s})=>t.jsx("table",{className:l(ds,s),children:t.jsx("tbody",{children:Object.entries(e).map(([a,r])=>t.jsxs("tr",{className:ms,children:[t.jsx("th",{className:H,children:a}),t.jsx("td",{className:H,children:r})]},a))})});var hs="_1m2ouns0";const Hs=({className:e})=>t.jsx("hr",{className:l(hs,e)});var ks="vbfnbx0",bs="vbfnbx1",gs={default:"vbfnbx2",logo:"vbfnbx3",avatar:"vbfnbx4",icon:"vbfnbx5"};const ps=({src:e,onClick:s,variant:a="default",href:r,alt:n,className:o})=>{const i=c.useCallback(()=>r?open(r,"_blank","noreferrer"):null,[r]);return t.jsx("img",{src:e,onClick:s??i,title:n,className:l(ks,gs[a],(s||r)&&bs,o)})};var ys="bcsz8y0",Ss="bcsz8y1",xs="bcsz8y2";const Ts=({icon:e,title:s,number:a,className:r})=>t.jsxs("div",{className:l(ys,r),children:[t.jsxs("div",{className:Ss,children:[e?t.jsx(e,{className:E}):null,d(s)]}),t.jsx("div",{className:xs,children:d(a)})]});var _s="_1sknk70",Cs={"1|1":"_1sknk71","1|2":"_1sknk72","2|1":"_1sknk73","1|1|1":"_1sknk74","1|3":"_1sknk75","3|1":"_1sknk76","1|1|1|1":"_1sknk77"};const Bs=({variant:e="1|1",className:s,children:a})=>t.jsx("div",{className:l(_s,Cs[e],s),children:a});var js="_2l6wb0",T="_2l6wb1";const qs=({src:e,icon:s,className:a,children:r})=>t.jsxs("div",{className:l(js,a),children:[s?t.jsx(s,{className:T}):e?t.jsx(ps,{src:e,className:T}):t.jsx("div",{}),t.jsx("div",{children:r})]});var fs="mq9yo20",ws={default:"mq9yo21",accent:"mq9yo22"},Ns="mq9yo23";const Us=({icon:e,title:s,variant:a="default",alt:r,className:n})=>{const o=e?t.jsx(e,{className:Ns}):null;return t.jsxs("div",{className:l(fs,ws[a],n),title:r,children:[o,d(s)]})};const Es=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),F=(...e)=>e.filter((s,a,r)=>!!s&&r.indexOf(s)===a).join(" ");var Rs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Ls=c.forwardRef(({color:e="currentColor",size:s=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:n="",children:o,iconNode:i,...v},m)=>c.createElement("svg",{ref:m,...Rs,width:s,height:s,stroke:e,strokeWidth:r?Number(a)*24/Number(s):a,className:F("lucide",n),...v},[...i.map(([h,k])=>c.createElement(h,k)),...Array.isArray(o)?o:[o]]));const Ks=(e,s)=>{const a=c.forwardRef(({className:r,...n},o)=>c.createElement(Ls,{ref:o,iconNode:s,className:F(`lucide-${Es(e)}`,r),...n}));return a.displayName=`${e}`,a};var Fs={accentHue:"var(--_20kobv0)",backgroundHue:"var(--_20kobv1)",accent:"var(--_20kobv2)",accentLight:"var(--_20kobv3)",accentHover:"var(--_20kobv4)",accentContrast:"var(--_20kobv5)",background:"var(--_20kobv6)",background2:"var(--_20kobv7)",backgroundHaze:"var(--_20kobv8)",backgroundHover:"var(--_20kobv9)",foreground:"var(--_20kobva)",foregroundBright:"var(--_20kobvb)",foregroundDim:"var(--_20kobvc)",border:"var(--_20kobvd)",shadow:"var(--_20kobve)"},Ws={"mono-1":"var(--ksssmu0)","mono-2":"var(--ksssmu1)","mono-3":"var(--ksssmu2)","hue-1":"var(--ksssmu3)","hue-2":"var(--ksssmu4)","hue-3":"var(--ksssmu5)","hue-4":"var(--ksssmu6)","hue-5":"var(--ksssmu7)","hue-5-2":"var(--ksssmu8)","hue-6":"var(--ksssmu9)","hue-6-2":"var(--ksssmua)","syntax-fg":"var(--ksssmub)","syntax-bg":"var(--ksssmuc)","syntax-gutter":"var(--ksssmud)","syntax-guide":"var(--ksssmue)","syntax-accent":"var(--ksssmuf)"},Zs={logo:"var(--moe67h1)",avatar:"var(--moe67h2)",icon:"var(--moe67h3)",padding:"var(--moe67h4)",radius:"var(--moe67h5)",sideNavWidth:"var(--moe67h6)",topNavHeight:"var(--moe67h7)"},Xs={small:448,large:768};export{Vs as A,R as B,Ps as C,Ds as D,Hs as H,ps as I,Ts as M,Bs as R,qs as S,Us as T,Os as a,zs as b,Ks as c,l as d,Ws as e,Fs as f,Zs as g,Is as h,Ms as i,Xs as s,se as u};

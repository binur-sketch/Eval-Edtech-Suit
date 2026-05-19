import{i as ve,a as be,V as we,c as je,u as ne,m as oe,r as v,M as Se,b as ke,d as Ce,f as Ae,e as U,g as Ee,h as Ie,j as le,k as de,l as Ne,n as ze,o as Te,p as Re,s as Me,q as Oe,t as Be,v as Ve,S as Fe,H as We,w as D,x as Le,y as Pe,z as De,A as q,R as ee,B as e,C as ce,D as V,L as G,E as me,F as Ge,G as qe}from"./index-C4GpO0ub.js";import{S as He}from"./SEO-Dz3Pe5yU.js";import{A as pe}from"./arrow-right-Cx5yLl-y.js";import{M as Ue}from"./monitor-B5_rCL9S.js";import{F as _e}from"./file-text-D1Q3K5Fm.js";import{A as _}from"./award-BGiOlAER.js";import{S as E}from"./SectionHeader-CIoMPipr.js";import{S as Ke}from"./settings-Clz859Nd.js";import{S as Ye}from"./school-DAwYrHqY.js";import{G as Je}from"./graduation-cap-ClXVHGul.js";import{B as $e}from"./building-2-B79ki3X5.js";import{R as p}from"./Reveal-DW7pMEeU.js";import{u as Qe,F as Xe}from"./FormStatus-CiZIqlXu.js";import{S as Ze}from"./SuccessModal-qdwrDsbx.js";import{C as et}from"./chevron-right-BzETNu0F.js";import{C as tt}from"./circle-check-DnQO5akd.js";import{L as it}from"./lock-DY1JcGJD.js";import{U as at}from"./users-CnuhrJj1.js";import{Z as rt}from"./zap-Y66V0wqz.js";import{D as st}from"./database-DgBK2hcJ.js";import"./circle-check-big-DKhrfrYD.js";import"./circle-alert-CrU3BcEq.js";const nt=(t,i,a)=>{const r=i-t;return((a-t)%r+r)%r+t};function ge(t,i){return ve(t)?t[nt(0,t.length,i)]:t}class ot{constructor(i){this.stop=()=>this.runAll("stop"),this.animations=i.filter(Boolean)}get finished(){return Promise.all(this.animations.map(i=>i.finished))}getAll(i){return this.animations[0][i]}setAll(i,a){for(let r=0;r<this.animations.length;r++)this.animations[r][i]=a}attachTimeline(i){const a=this.animations.map(r=>r.attachTimeline(i));return()=>{a.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(i){this.setAll("time",i)}get speed(){return this.getAll("speed")}set speed(i){this.setAll("speed",i)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return te(this.animations,"duration")}get iterationDuration(){return te(this.animations,"iterationDuration")}runAll(i){this.animations.forEach(a=>a[i]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function te(t,i){let a=0;for(let r=0;r<t.length;r++){const s=t[r][i];s!==null&&s>a&&(a=s)}return a}class lt extends ot{then(i,a){return this.finished.finally(i).then(()=>{})}}function dt(...t){const i=!Array.isArray(t[0]),a=i?0:-1,r=t[0+a],s=t[1+a],o=t[2+a],n=t[3+a],l=be(s,o,n);return i?l(r):l}function ct(t,i){return t in i}class mt extends we{constructor(){super(...arguments),this.type="object"}readValueFromInstance(i,a){if(ct(a,i)){const r=i[a];if(typeof r=="string"||typeof r=="number")return r}}getBaseTargetFromProps(){}removeValueFromRenderState(i,a){delete a.output[i]}measureInstanceViewportBox(){return je()}build(i,a){Object.assign(i.output,a)}renderInstance(i,{output:a}){Object.assign(i,a)}sortInstanceNodePosition(){return 0}}function he(t){const i=ne(()=>oe(t)),{isStatic:a}=v.useContext(Se);if(a){const[,r]=v.useState(t);v.useEffect(()=>i.on("change",r),[])}return i}function ue(t,i){const a=he(i()),r=()=>a.set(i());return r(),ke(()=>{const s=()=>Ae.preRender(r,!1,!0),o=t.map(n=>n.on("change",s));return()=>{o.forEach(n=>n()),Ce(r)}}),a}function pt(t){U.current=[],t();const i=ue(U.current,t);return U.current=void 0,i}function gt(t,i,a,r){if(typeof t=="function")return pt(t);const o=typeof i=="function"?i:dt(i,a,r),n=Array.isArray(t)?ie(t,o):ie([t],([d])=>o(d)),l=Array.isArray(t)?void 0:t.accelerate;return l&&!l.isTransformed&&typeof i!="function"&&Array.isArray(a)&&(r==null?void 0:r.clamp)!==!1&&(n.accelerate={...l,times:i,keyframes:a,isTransformed:!0}),n}function ie(t,i){const a=ne(()=>[]);return ue(t,()=>{a.length=0;const r=t.length;for(let s=0;s<r;s++)a[s]=t[s].get();return i(a)})}function K(t){return typeof t=="object"&&!Array.isArray(t)}function xe(t,i,a,r){return t==null?[]:typeof t=="string"&&K(i)?Ee(t,a,r):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(s=>s!=null):[t]}function ht(t,i,a){return t*(i+1)}function ae(t,i,a,r){return typeof i=="number"?i:i.startsWith("-")||i.startsWith("+")?Math.max(0,t+parseFloat(i)):i==="<"?a:i.startsWith("<")?Math.max(0,a+parseFloat(i.slice(1))):r.get(i)??t}function ut(t,i,a){for(let r=0;r<t.length;r++){const s=t[r];s.at>i&&s.at<a&&(le(t,s),r--)}}function xt(t,i,a,r,s,o){ut(t,s,o);for(let n=0;n<i.length;n++)t.push({value:i[n],at:Ie(s,o,r[n]),easing:ge(a,n)})}function ft(t,i){for(let a=0;a<t.length;a++)t[a]=t[a]/(i+1)}function yt(t,i){return t.at===i.at?t.value===null?1:i.value===null?-1:0:t.at-i.at}const vt="easeInOut";function bt(t,{defaultTransition:i={},...a}={},r,s){const o=i.duration||.3,n=new Map,l=new Map,d={},g=new Map;let u=0,c=0,F=0;for(let I=0;I<t.length;I++){const f=t[I];if(typeof f=="string"){g.set(f,c);continue}else if(!Array.isArray(f)){g.set(f.name,ae(c,f.at,u,g));continue}let[C,y,h={}]=f;h.at!==void 0&&(c=ae(c,h.at,u,g));let x=0;const N=(b,z,S,A=0,T=0)=>{const m=wt(b),{delay:R=0,times:w=Ne(m),type:H=i.type||"keyframes",repeat:W,repeatType:Yt,repeatDelay:Jt=0,...ye}=z;let{ease:k=i.ease||"easeOut",duration:j}=z;const Y=typeof R=="function"?R(A,T):R,J=m.length,$=Re(H)?H:s==null?void 0:s[H||"keyframes"];if(J<=2&&$){let M=100;if(J===2&&kt(m)){const O=m[1]-m[0];M=Math.abs(O)}const L={...i,...ye};j!==void 0&&(L.duration=Me(j));const P=ze(L,M,$);k=P.ease,j=P.duration}j??(j=o);const Q=c+Y;w.length===1&&w[0]===0&&(w[1]=1);const X=w.length-m.length;if(X>0&&Te(w,X),m.length===1&&m.unshift(null),W){j=ht(j,W);const M=[...m],L=[...w];k=Array.isArray(k)?[...k]:[k];const P=[...k];for(let O=0;O<W;O++){m.push(...M);for(let B=0;B<M.length;B++)w.push(L[B]+(O+1)),k.push(B===0?"linear":ge(P,B-1))}ft(w,W)}const Z=Q+j;xt(S,m,k,w,Q,Z),x=Math.max(Y+j,x),F=Math.max(Z,F)};if(de(C)){const b=re(C,l);N(y,h,se("default",b))}else{const b=xe(C,y,r,d),z=b.length;for(let S=0;S<z;S++){y=y,h=h;const A=b[S],T=re(A,l);for(const m in y)N(y[m],jt(h,m),se(m,T),S,z)}}u=c,c+=x}return l.forEach((I,f)=>{for(const C in I){const y=I[C];y.sort(yt);const h=[],x=[],N=[];for(let A=0;A<y.length;A++){const{at:T,value:m,easing:R}=y[A];h.push(m),x.push(Oe(0,F,T)),N.push(R||"easeOut")}x[0]!==0&&(x.unshift(0),h.unshift(h[0]),N.unshift(vt)),x[x.length-1]!==1&&(x.push(1),h.push(null)),n.has(f)||n.set(f,{keyframes:{},transition:{}});const b=n.get(f);b.keyframes[C]=h;const{type:z,...S}=i;b.transition[C]={...S,duration:F,ease:N,times:x,...a}}}),n}function re(t,i){return!i.has(t)&&i.set(t,{}),i.get(t)}function se(t,i){return i[t]||(i[t]=[]),i[t]}function wt(t){return Array.isArray(t)?t:[t]}function jt(t,i){return t&&t[i]?{...t,...t[i]}:{...t}}const St=t=>typeof t=="number",kt=t=>t.every(St);function Ct(t){const i={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},a=Be(t)&&!Ve(t)?new Fe(i):new We(i);a.mount(t),D.set(t,a)}function At(t){const i={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},a=new mt(i);a.mount(t),D.set(t,a)}function Et(t,i){return de(t)||typeof t=="number"||typeof t=="string"&&!K(i)}function fe(t,i,a,r){const s=[];if(Et(t,i))s.push(Le(t,K(i)&&i.default||i,a&&(a.default||a)));else{if(t==null)return s;const o=xe(t,i,r),n=o.length;for(let l=0;l<n;l++){const d=o[l],g=d instanceof Element?Ct:At;D.has(d)||g(d);const u=D.get(d),c={...a};"delay"in c&&typeof c.delay=="function"&&(c.delay=c.delay(l,n)),s.push(...Pe(u,{...i,transition:c},{}))}}return s}function It(t,i,a){const r=[],s=t.map(n=>{if(Array.isArray(n)&&typeof n[0]=="function"){const l=n[0],d=oe(0);return d.on("change",l),n.length===1?[d,[0,1]]:n.length===2?[d,[0,1],n[1]]:[d,n[1],n[2]]}return n});return bt(s,i,a,{spring:De}).forEach(({keyframes:n,transition:l},d)=>{r.push(...fe(d,n,l))}),r}function Nt(t){return Array.isArray(t)&&t.some(Array.isArray)}function zt(t={}){const{scope:i,reduceMotion:a}=t;function r(s,o,n){let l=[],d;if(Nt(s)){const{onComplete:u,...c}=o||{};typeof u=="function"&&(d=u),l=It(s,a!==void 0?{reduceMotion:a,...c}:c,i)}else{const{onComplete:u,...c}=n||{};typeof u=="function"&&(d=u),l=fe(s,o,a!==void 0?{reduceMotion:a,...c}:c,i)}const g=new lt(l);return d&&g.finished.then(d),i&&(i.animations.push(g),g.finished.then(()=>{le(i.animations,g)})),g}return r}const Tt=zt();/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=q("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=q("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=q("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=q("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"10lez9"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6a6 6 0 0 0 6-6v-4",key:"ce9bce"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]),Vt=()=>{const[t,i]=ee.useState(0),a=[{visual:"diagram"},{badge:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(_,{size:14})," Market Leader"]}),title:e.jsxs(e.Fragment,{children:["The Complete Examination ",e.jsx("br",{}),e.jsx("span",{className:"gradient-text",style:{whiteSpace:"nowrap"},children:" Evaluation Suite"}),e.jsx("br",{}),e.jsxs("span",{style:{fontSize:"clamp(1.1rem, 2.5vw, 1.3rem)",fontWeight:"800",color:"rgba(255, 255, 255, 0.9)",marginTop:"10px",display:"inline-block"},children:[e.jsxs("span",{style:{color:"var(--primary)",marginRight:"6px"},children:["eVAL"," ","OMR"]})," ",e.jsx("span",{style:{wordSpacing:"4px",letterSpacing:"0.02em"},children:"Largest Selling OMR Software"})]})]}),desc:"eVAL provides an end-to-end ecosystem for modern institutions—from secure student registration and QPMS to high-speed OMR, OSM, CBT, and AI-driven proctoring.",ctaPrimary:"Book Free Demo",ctaSecondary:"Explore Solutions",visual:"collage"}];return ee.useEffect(()=>{const r=setInterval(()=>{i(s=>(s+1)%a.length)},6e3);return()=>clearInterval(r)},[a.length]),e.jsxs("section",{className:"hero-v4",children:[e.jsxs("div",{className:"hero-v4-bg",children:[e.jsx("div",{className:"grid-overlay"}),e.jsx("div",{className:"glow-circle glow-1"}),e.jsx("div",{className:"glow-circle glow-2"})]}),e.jsxs("div",{className:a[t].visual==="diagram"?"hero-v4-inner-full":"container hero-v4-inner",children:[e.jsx(ce,{mode:"wait",children:e.jsxs(V.div,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.8,ease:"easeOut"},className:`hero-v4-grid ${a[t].visual==="diagram"?"diagram-mode":""}`,children:[a[t].title&&e.jsxs("div",{className:"hero-v4-content",children:[e.jsxs("div",{className:"hero-v4-badge",children:[e.jsx("div",{className:"pulse-dot"}),a[t].badge]}),e.jsx("h1",{children:a[t].title}),e.jsx("p",{children:a[t].desc}),e.jsxs("div",{className:"hero-v4-cta",children:[e.jsxs(G,{to:"/book-demo",className:"btn-v4-primary",children:[a[t].ctaPrimary," ",e.jsx(pe,{size:20})]}),e.jsx(G,{to:"#solutions",className:"btn-v4-secondary",children:a[t].ctaSecondary})]})]}),e.jsx("div",{className:`hero-v4-visual ${a[t].visual==="diagram"?"full-width":""}`,children:a[t].visual==="diagram"?e.jsx("div",{className:"ecosystem-container detailed-suite",style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"auto"},children:e.jsx("img",{src:"/assets/images/ecosystem-diagram.png",alt:"eVAL Examination Evaluation Suite Ecosystem",style:{width:"100%",height:"auto",maxWidth:"1440px",borderRadius:"20px",boxShadow:"0 20px 50px rgba(0,0,0,0.5)"}})}):e.jsxs("div",{className:"hero-collage-container",children:[e.jsx("div",{className:"collage-bg-glow"}),e.jsxs("div",{className:"collage-card ai-card",children:[e.jsxs("div",{className:"card-badge",children:[e.jsx(me,{size:12})," AI Proctoring"]}),e.jsx("img",{src:"/assets/images/ai_proctoring_dashboard.png",alt:"AI Proctoring Dashboard"})]}),e.jsxs("div",{className:"collage-card osm-card",children:[e.jsxs("div",{className:"card-badge",children:[e.jsx(Ue,{size:12})," OSM System"]}),e.jsx("img",{src:"/assets/images/OSMScreen.jpeg",alt:"On-Screen Marking"})]}),e.jsxs("div",{className:"collage-card omr-card",children:[e.jsxs("div",{className:"card-badge",children:[e.jsx(_e,{size:12})," OMR Technology"]}),e.jsx("img",{src:"/assets/images/omr_scanning.png",alt:"OMR Scanning"})]})]})})]},t)}),e.jsx("div",{className:"hero-carousel-dots",children:a.map((r,s)=>e.jsx("button",{className:`dot ${t===s?"active":""}`,onClick:()=>i(s)},s))})]}),e.jsx("style",{children:`
        .hero-v4 {
          position: relative;
          height: 85vh; /* Reduced height to keep header visible */
          min-height: 800px;
          background: #020617; /* Deepest Navy */
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .hero-v4 {
            height: auto;
            min-height: auto;
            padding: 120px 0 60px;
          }
        }

        .hero-v4-inner {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 120px; /* Account for navbar */
        }

        .hero-v4-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(14, 165, 164, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 164, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
        }

        .glow-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          z-index: 1;
        }

        .glow-1 {
          width: 500px;
          height: 500px;
          background: var(--primary);
          top: -10%;
          right: -10%;
        }

        .glow-2 {
          width: 400px;
          height: 400px;
          background: #4F46E5;
          bottom: -10%;
          left: -5%;
        }

        .hero-v4-inner, .hero-v4-inner-full {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .hero-v4-inner-full {
          max-width: 100%;
          padding: 120px 4rem 0; /* Account for navbar */
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-v4-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          justify-items: center;
          width: 100%;
          max-width: 1500px;
          min-height: 600px;
        }

        .hero-v4-grid.diagram-mode {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 1rem;
          width: 100%;
          height: 100%;
          max-width: 100%;
        }

        .hero-v4-grid.diagram-mode .hero-v4-content {
          max-width: 850px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2rem;
        }

        @media (max-width: 1150px) {
          .hero-v4-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          .hero-v4-content {
            max-width: 800px;
            text-align: center;
          }
          .hero-v4-cta {
            justify-content: center;
          }
          .hero-v4-content p {
            margin-left: auto;
            margin-right: auto;
          }
        }

        /* Left Content */
        .hero-v4-content {
          max-width: 1000px;
          text-align: left;
        }

        .hero-v4-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(14, 165, 164, 0.1);
          border: 1px solid rgba(14, 165, 164, 0.2);
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          animation: dotPulse 2s infinite;
        }

        @keyframes dotPulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        .hero-v4-content h1 {
          font-size: clamp(2.2rem, 5vw, 3rem);
          line-height: 1.1;
          font-weight: 900;
          color: white;
          margin-bottom: 1.5rem;
        }

        .hero-v4-content p {
          font-size: clamp(1rem, 2vw, 1.15rem);
          line-height: 1.6;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2.5rem;
          max-width: 650px;
        }

        .hero-v4-cta {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-bottom: 0;
        }

        .btn-v4-primary {
          background: var(--primary);
          color: white;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(14, 165, 164, 0.2);
        }

        .btn-v4-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(14, 165, 164, 0.3);
          background: #0D8A89;
        }

        .btn-v4-secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 800;
          transition: all 0.3s ease;
        }

        .btn-v4-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }


        /* Visual Ecosystem Area */
        .hero-v4-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ecosystem-container {
          position: relative;
          width: 100%;
          height: auto;
          transform-origin: center center;
        }

        .ecosystem-lines {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .nodes-layer {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
        }

        .eco-node {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .eco-node-main {
          z-index: 3;
        }

        .node-icon {
          width: 64px;
          height: 64px;
          background: #1e293b;
          border: 2px solid rgba(14, 165, 164, 0.3);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: all 0.3s ease;
        }

        .eco-node:hover .node-icon {
          transform: translateY(-5px) scale(1.1);
          border-color: var(--primary);
          box-shadow: 0 15px 40px rgba(14, 165, 164, 0.2);
        }

        .result-node:hover .node-icon {
          border-color: #10B981 !important;
          box-shadow: 0 15px 40px rgba(16, 185, 129, 0.2) !important;
        }

        .node-label {
          font-size: 0.6rem;
          font-weight: 800;
          color: white;
          white-space: nowrap;
        }

        /* Flow V8 - Architectural Blueprint */
        .flow-visual-v8 {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .flow-svg-v8 {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 5; /* Above frame, below icons */
          pointer-events: none;
        }

        .flow-nodes-v8 {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 2;
        }

        .hub-node-v8 {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 120px;
          z-index: 10;
        }

        .hub-node-v8.inner-node {
          position: relative;
          width: 120px;
          height: 64px; /* Matches hub-icon height */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hub-icon-v8 {
          width: 64px;
          height: 64px;
          background: #0f172a;
          border: 2px solid var(--primary);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          box-shadow: 0 0 30px rgba(14, 165, 164, 0.2);
        }

        .hub-label-v8 {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          padding-top: 10px;
          color: white;
          text-align: center;
          line-height: 1.2;
          font-size: 0.7rem;
          font-weight: 600;
          width: 160px; /* Allow space for long titles without overlapping */
          pointer-events: none;
          display: block;
        }

        .track-label-v8 {
          font-weight: 900;
        }

        .flow-item-v8 {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(30, 41, 59, 0.6);
          backdrop-filter: blur(5px);
          padding: 8px 15px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.05);
          width: 180px;
        }

        .item-dot-v8 {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          box-shadow: 0 0 10px currentColor;
        }

        .flow-item-v8 span {
          font-size: 0.75rem;
          font-weight: 700;
          color: white;
          white-space: nowrap;
        }

        .result-hub-v8 .hub-icon-v8 {
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.2);
        }

        /* Detailed Suite Styles */
        .detailed-suite {
          width: 100% !important;
          max-width: 1200px;
          height: auto !important;
          aspect-ratio: 12 / 5.5;
          margin: 0 auto;
          position: relative;
        }

        .suite-frame-label {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(90deg, #0EA5A4, #6366F1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 0.9rem;
          font-weight: 900;
          z-index: 10;
          white-space: nowrap;
          opacity: 0.8;
        }

        .suite-outer-frame {
          position: absolute;
          left: 150px;
          top: 0;
          width: 950px;
          height: 100%;
          display: flex;
          padding: 0 30px;
          justify-content: space-between;
          align-items: center; /* Center nodes vertically */
          z-index: 1; /* Below SVG icons */
        }

        .suite-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center; /* Center content vertically */
          height: 100%;
          position: relative;
        }

        .suite-section-header {
          position: absolute;
          top: 40px;
          left: 50%;
          transform: translateX(-50%);
          font-weight: 900;
          color: rgba(255, 255, 255, 0.4);
          background: rgba(255,255,255,0.03);
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 0.75rem;
          white-space: nowrap;
        }

        .nodes-row {
          display: flex;
          flex-direction: column;
          gap: 40px;
          height: 100%;
          justify-content: center;
        }

        .nodes-row.horizontal {
          flex-direction: row;
          gap: 100px; /* Increased gap to prevent label overlap */
          align-items: center;
        }

        .hub-node-v8.inner-node {
          position: relative;
          left: auto !important;
          top: auto !important;
          width: auto;
        }

        .hub-icon-v8.small {
          width: 48px;
          height: 48px;
          border-radius: 14px;
        }

        .hub-icon-v8.external {
          border-color: #0EA5A4;
          box-shadow: 0 0 20px rgba(14, 165, 164, 0.3);
        }

        .exam-stacks.single-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .track-label-v8 {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          pointer-events: none;
          font-family: 'Outfit', sans-serif;
        }

        .stack {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .suite-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(30, 41, 59, 0.6);
          padding: 6px 12px;
          border-radius: 8px;
          border-left: 3px solid;
          min-width: 160px;
        }

        .suite-item span {
          font-size: 0.7rem;
          font-weight: 700;
          color: white;
          white-space: nowrap;
        }

        .suite-item .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .hub-icon-v8.success {
          border-color: #10B981;
          color: #10B981;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
        }

        .path-label {
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.1em;
          fill: currentColor;
          opacity: 0.6;
        }

        @media (max-width: 1400px) {
          .hero-v4-visual { transform: scale(0.8); }
        }

        @media (max-width: 1150px) {
          .hero-v4-visual { 
            display: flex; 
            justify-content: center;
            width: 100%;
            margin-top: 2rem;
            transform: scale(0.9);
            order: 2;
          }
          .hero-v4-content {
            order: 1;
          }
          .hero-v4 { 
            height: auto;
            min-height: 800px;
            padding: 20px 0 60px; /* Reduced top padding as inner has it */
          }
          .hero-v4-inner, .hero-v4-inner-full {
            padding-top: 100px;
          }
        }

        @media (max-width: 1400px) {
          .lifecycle-grid { flex-direction: column; gap: 20px; }
          .block-arrow { transform: rotate(90deg); padding: 10px; }
          .evaluation-block { width: 100%; }
        }

        @media (max-width: 768px) {
          .hero-v4-grid.diagram-mode {
            padding: 0 1rem;
          }
        }

        /* Carousel Dots */
        .hero-carousel-dots {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 10;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: var(--primary);
          width: 30px;
          border-radius: 100px;
          box-shadow: 0 0 15px rgba(14, 165, 164, 0.5);
        }

        /* Collage Visual */
        .hero-collage-container {
          position: relative;
          width: 100%;
          max-width: 600px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        .collage-bg-glow {
          position: absolute;
          width: 120%;
          height: 120%;
          background: radial-gradient(circle at center, rgba(14, 165, 164, 0.1), transparent 70%);
          z-index: 1;
        }

        .collage-card {
          position: absolute;
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 30px 60px -12px rgba(0,0,0,0.5);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 2;
        }

        .collage-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .card-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(8px);
          padding: 6px 12px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          font-size: 0.65rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 10;
        }

        .card-badge svg { color: var(--primary); }

        .ai-card {
          width: 320px;
          height: 200px;
          top: 0;
          right: 0;
          transform: rotate(4deg) translateZ(20px);
          animation: float 6s ease-in-out infinite;
        }

        .osm-card {
          width: 340px;
          height: 210px;
          bottom: 10%;
          right: 15%;
          transform: rotate(-2deg) translateZ(40px);
          z-index: 4;
          animation: float 7s ease-in-out infinite 0.5s;
          border-color: rgba(14, 165, 164, 0.3);
        }

        .omr-card {
          width: 300px;
          height: 180px;
          top: 25%;
          left: 0;
          transform: rotate(-5deg) translateZ(10px);
          z-index: 3;
          animation: float 8s ease-in-out infinite 1s;
        }

        .collage-card:hover {
          transform: scale(1.05) translateZ(60px) rotate(0deg);
          z-index: 100;
          border-color: var(--primary);
          box-shadow: 0 40px 80px -15px rgba(14, 165, 164, 0.3);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--rot, 0deg)); }
          50% { transform: translateY(-15px) rotate(var(--rot, 0deg)); }
        }

        .ai-card { --rot: 4deg; }
        .osm-card { --rot: -2deg; }
        .omr-card { --rot: -5deg; }

        @media (max-width: 1200px) {
          .hero-collage-container {
            width: 100%;
            max-width: 500px;
            height: 400px;
            margin: 2rem auto;
          }
          .ai-card { width: 260px; height: 160px; }
          .osm-card { width: 280px; height: 175px; }
          .omr-card { width: 240px; height: 145px; }
        }
      `})]})},Ft=()=>{const t=["/assets/images/school/dps.png","/assets/images/school/RPS International School.png","/assets/images/school/OASIS International School.png","/assets/images/school/SURAJ SCHOOL.png","/assets/images/school/St Francis De Sales Sr Sec School.webp","/assets/images/university/BANARAS HINDU UNIVERSITY.png","/assets/images/university/Parul University.png","/assets/images/university/Jamia Millia Islamia.png","/assets/images/university/Silver Oak University.png","/assets/images/university/ADANI UNIVERSITY.png","/assets/images/coaching/physics wallah.webp","/assets/images/coaching/aakash logo.png","/assets/images/coaching/career launcher.png","/assets/images/coaching/Resonance.png","/assets/images/school/ICFAI Business School.png"],i=["/assets/images/government/National Cadet Corps.png","/assets/images/government/Union Public Service Commission.png","/assets/images/government/AIIMS.svg","/assets/images/government/IIT Goa.png","/assets/images/government/NIT Goa.png","/assets/images/government/Indian Railway.png","/assets/images/government/QUALITY COUNCIL OF INDIA.png","/assets/images/government/Council of Scientific and Industrial Research.png","/assets/images/government/Maulana Azad Medical College.png"];return e.jsxs("section",{className:"section-padding trust-section",style:{background:"var(--muted)",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)",overflow:"hidden",position:"relative"},children:[e.jsx("div",{className:"trust-fade-left",style:{position:"absolute",top:0,left:0,width:"15%",height:"100%",zIndex:2,background:"linear-gradient(to right, var(--muted), transparent)",pointerEvents:"none"}}),e.jsx("div",{className:"trust-fade-right",style:{position:"absolute",top:0,right:0,width:"15%",height:"100%",zIndex:2,background:"linear-gradient(to left, var(--muted), transparent)",pointerEvents:"none"}}),e.jsxs("div",{className:"container",style:{textAlign:"center",marginBottom:"3rem"},children:[e.jsx("span",{className:"badge",children:"Institutional Trust"}),e.jsxs("h2",{style:{maxWidth:"800px",margin:"0 auto 1.5rem"},children:["Trusted by ",e.jsx("span",{className:"gradient-text",children:"Elite Schools, Universities & Colleges"})]})]}),e.jsx("div",{className:"marquee-wrapper",style:{overflow:"hidden",width:"100%",marginBottom:"3.5rem"},children:e.jsx("div",{className:"marquee-track",style:{display:"flex",gap:"clamp(2rem, 5vw, 4rem)",animation:"marquee 30s linear infinite",width:"max-content"},children:[...t,...t].map((a,r)=>e.jsx("div",{className:"trust-logo-item",style:{height:"clamp(60px, 10vw, 100px)",width:"clamp(120px, 20vw, 180px)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.jsx("img",{src:a,alt:"Client Logo",style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",mixBlendMode:"multiply",opacity:.8}})},`edu-${r}`))})}),e.jsx("div",{className:"container",style:{textAlign:"center",marginBottom:"3rem"},children:e.jsxs("h2",{children:["Trusted by ",e.jsx("span",{className:"gradient-text",children:"Government Bodies & Segment Leaders"})]})}),e.jsx("div",{className:"marquee-wrapper",style:{overflow:"hidden",width:"100%"},children:e.jsx("div",{className:"marquee-track",style:{display:"flex",gap:"clamp(2rem, 5vw, 4rem)",animation:"marquee 35s linear infinite reverse",width:"max-content"},children:[...i,...i].map((a,r)=>e.jsx("div",{className:"trust-logo-item",style:{height:"clamp(60px, 10vw, 100px)",width:"clamp(120px, 20vw, 180px)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.jsx("img",{src:a,alt:"Client Logo",style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",mixBlendMode:"multiply",opacity:.8}})},`gov-${r}`))})}),e.jsx("style",{children:`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .trust-section {
            padding: 4rem 0;
          }
          .trust-fade-left, .trust-fade-right {
            width: 10%;
          }
        }
      `})]})},Wt=[{title:"OMR Sheets Designing",desc:"Optimized form architecture designed for maximum scannability. We account for every data point, ensuring your institutional layouts are perfectly aligned for digital evaluation systems.",img:"/assets/images/omr_design.png",tag:"Custom Design"},{title:"OMR Sheets Printing",desc:"Institutional-grade OMR/ICR sheets printing, customised to precision. Ideal for high-stakes examinations, surveys, and large-scale feedback collection for Govt. and Private organisations.",img:"/assets/images/omr_printing.png",tag:"Most Popular"},{title:"OMR Sheets Evaluation",desc:"End-to-end Pre and Post-examination result processing. We leverage advanced OMR/ICR/OCR tools for rapid and accurate data capture from Medical, Engineering, and General entrance exams.",img:"/assets/images/omr_scanning.png",tag:"High Speed"}],Lt=()=>e.jsxs("section",{id:"services",style:{padding:"8rem 0",background:"white",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"5%",left:"-5%",width:"300px",height:"300px",background:"radial-gradient(circle, rgba(14, 165, 164, 0.06) 0%, transparent 70%)",borderRadius:"50%",zIndex:0}}),e.jsx("div",{style:{position:"absolute",bottom:"10%",right:"-3%",width:"400px",height:"400px",background:"radial-gradient(circle, rgba(14, 165, 164, 0.04) 0%, transparent 70%)",borderRadius:"50%",zIndex:0}}),e.jsxs("div",{className:"container",style:{position:"relative",zIndex:1},children:[e.jsx(E,{badge:"Our Services",title:e.jsxs(e.Fragment,{children:["End-to-End ",e.jsx("span",{className:"gradient-text",children:"Examination"})," Services"]}),text:"Beyond software, we provide end to end examination services for boards, recruitment agencies, and academic institutions."}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 280px), 1fr))",gap:"2.5rem"},children:Wt.map((t,i)=>e.jsxs("div",{style:{background:"#FFFFFF",borderRadius:"1.5rem",overflow:"hidden",border:"1px solid #EEEEEE",transition:"all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",cursor:"default",display:"flex",flexDirection:"column"},className:"card-hover",onMouseEnter:a=>{a.currentTarget.style.transform="translateY(-8px)",a.currentTarget.style.boxShadow="0 30px 60px -15px rgba(0,0,0,0.12)",a.currentTarget.style.borderColor="var(--primary)"},onMouseLeave:a=>{a.currentTarget.style.transform="translateY(0)",a.currentTarget.style.boxShadow="none",a.currentTarget.style.borderColor="#EEEEEE"},children:[e.jsxs("div",{style:{width:"100%",height:"220px",overflow:"hidden",position:"relative",background:t.img?"#f0f0f0":"linear-gradient(135deg, var(--primary-light) 0%, #FFF 100%)"},children:[t.img?e.jsx("img",{src:t.img,alt:t.title,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.6s ease"},onMouseEnter:a=>a.currentTarget.style.transform="scale(1.05)",onMouseLeave:a=>a.currentTarget.style.transform="scale(1)"}):e.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--primary)"},children:e.jsx(Ke,{size:72,strokeWidth:1})}),e.jsx("div",{style:{position:"absolute",top:"1rem",left:"1rem",background:"rgba(255,255,255,0.95)",backdropFilter:"blur(8px)",padding:"0.4rem 1rem",borderRadius:"999px",fontSize:"0.6875rem",fontWeight:"800",color:"var(--primary)",textTransform:"uppercase",letterSpacing:"0.5px",border:"1px solid rgba(14, 165, 164, 0.15)"},children:t.tag})]}),e.jsxs("div",{style:{padding:"2rem",flex:1,display:"flex",flexDirection:"column"},children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:"800",marginBottom:"1rem",color:"var(--secondary)"},children:t.title}),e.jsx("p",{style:{fontSize:"0.9375rem",lineHeight:"1.7",color:"var(--muted-foreground)",marginBottom:"1.5rem",flex:1},children:t.desc})]})]},i))})]})]}),Pt=()=>{const t=[{icon:e.jsx(_,{size:32}),title:"Coaching Institutes",desc:"JEE, NEET, and banking exam coaching chains standardizing mock tests across hundreds of centers.",stat:"3100+ Coaching Centers"},{icon:e.jsx(Ye,{size:32}),title:"K-12 & Schools",desc:"CBSE, ICSE, and state boards conducting periodic assessments, scholarship tests, and Olympiad evaluations.",stat:"1000+ Schools"},{icon:e.jsx(Rt,{size:32}),title:"Government & PSU",desc:"State and national boards conducting large-scale surveys, recruitment exams, civil services, and public examinations.",stat:"100+ Government Bodies"},{icon:e.jsx(Je,{size:32}),title:"Universities & Colleges",desc:"Universities and colleges managing entrance exams, semester evaluations, and accreditation assessments.",stat:"1000+ Universities & Colleges"},{icon:e.jsx($e,{size:32}),title:"Manufacturing",desc:"eVAL OMR leading to inaccurate OEE (Overall Equipment Effectiveness) data and delayed performance audits.",stat:"50+ Manufacturing Companies"},{icon:e.jsx(Bt,{size:32}),title:"Olympiad Examination Bodies",desc:"Olympiad organizations conducting competitive exams to identify academic excellence across schools and institutions.",stat:"100+ Olympiad Bodies"}];return e.jsx("section",{id:"industries",className:"section-padding",style:{background:"var(--muted)"},children:e.jsxs("div",{className:"container",children:[e.jsx(E,{badge:"Industry Solutions",title:e.jsxs(e.Fragment,{children:["Empowering Every ",e.jsx("span",{className:"gradient-text",children:"Sector"})]}),text:"Purpose-built solutions for the unique assessment challenges of every industry vertical."}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"2rem"},children:t.map((i,a)=>e.jsxs("div",{className:"hover-lift",style:{padding:"2.5rem",display:"flex",flexDirection:"column",background:"white",borderRadius:"1.75rem",boxShadow:"0 4px 20px rgba(0,0,0,0.03)",border:"1px solid var(--border)",transition:"all 0.4s ease"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"2rem"},children:[e.jsx("div",{style:{color:"var(--primary)",background:"var(--primary-light)",padding:"1rem",borderRadius:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},children:i.icon}),e.jsx("span",{style:{fontSize:"0.75rem",fontWeight:"800",color:"var(--primary)",textTransform:"uppercase",letterSpacing:"0.1em"},children:i.stat})]}),e.jsx("h3",{style:{fontSize:"1.25rem",marginBottom:"1rem",color:"var(--foreground)"},children:i.title}),e.jsx("p",{style:{fontSize:"0.9375rem",color:"var(--muted-foreground)",marginBottom:"2rem",flex:1,lineHeight:"1.7"},children:i.desc})]},a))})]})})},Dt=()=>{const[t,i]=v.useState(0),a=[{quote:"The application is performing exceptionally well in the checking and evaluation process. The OMR scanning and result processing are accurate, smooth, and highly efficient. It has significantly improved our exam evaluation system by saving time and reducing manual errors. Overall, we are very satisfied with its performance and appreciate the support provided by your team.",author:"Anil Patil & Manish Jha",role:"Catalyst Coaching Class",org:"Silvassa",images:["/assets/images/Testimonials/catalyst-classes-silvassa-diu-logo.png"]},{quote:"Before being introduced to eval, our evaluation process was time consuming and more often a frustrating one. Managing data, tracking it and ensuring consistency while correcting the papers required significant effort and coordination. But this app really transformed the entire process. The Eval app brought all the stuff into one intuitive platform and made the hourly long process gets done within no time with much more accuracy.",author:"Shaju Joseph",role:"Principal",org:"St. Joseph College",images:["/assets/images/Testimonials/ST JOSEPH-logo.png"]},{quote:"The adoption of eVal has significantly enhanced the efficiency, accuracy, and transparency of the evaluation process. The software’s ability to process large volumes of OMR sheets with high speed and near-perfect accuracy has streamlined examination workflows and reduced manual effort considerably. The University is using this software for its Recruitment as well as Admission Examination.",author:"Er. S Govind Singh",role:"System Analyst",org:"Central Agricultural University, Imphal",images:["/assets/images/Testimonials/Central_Agricultural_University_Logo.png"]},{quote:"I would like to take a moment to express our sincere appreciation for the excellent performance of your software and scanner during our recent examination process. The system functioned smoothly and efficiently, which greatly supported our team in conducting the examination successfully. The support provided by your team is truly commendable and highly appreciated.",author:"Abhishek Dwivedi",role:"Admin Executive",org:"Smt. D G Agrawal Memorial School, Maharashtra",images:["/assets/images/Testimonials/DG.jpeg"]},{quote:"Hi, we have been using this software for 4 years. It is good product, accuracy is also good and technical service is also good. We are highly satisfied with the automation and reliability eVAL brings to our institution.",author:"PACE Shimoga",role:"Institution Partner",org:"Shimoga",images:["/assets/images/Testimonials/PACE.png"]},{quote:"OMR scanner and evaluation software have been purchased, installed, and are working properly. The system is adequate for examination and evaluation purposes. It has simplified our result processing significantly.",author:"Little Flowers SCH",role:"Academic Board",org:"Madhupuram Walterganj Basti R.O Allahabad",images:["/assets/images/Testimonials/LITTLE FLOWER.jpeg"]},{quote:"We are pleased to share our positive feedback regarding the Eval OMR Software developed by VIR Softech. We have been using the software for our examination and evaluation processes, and we are highly satisfied with its performance, accuracy, and user-friendly interface. The software has significantly streamlined the OMR assessment process, reduced manual efforts, and improved efficiency in result processing. We also appreciate the timely support and cooperation provided by the VIR Softech team whenever required.",author:"Pradip Maradiya",role:"Noble University",org:"Junagadh, Gujarat",images:["/assets/images/Testimonials/noble university.png"]},{quote:"qSarthi is pleased to place on record its appreciation for the eVAL Examination Software. The solution has significantly improved the efficiency, transparency, and accuracy of our answer script evaluation process. The software is user-friendly, secure, and well-organized, enabling our evaluators and administrators to complete assessments faster while maintaining confidentiality and fairness. Its digital workflow has minimized manual effort and reduced the chances of human error considerably.",author:"Rohit Panchal",role:"IT-Head",org:"qSarthi Kota",images:["/assets/images/Testimonials/qsarthi.png"]},{quote:"National Cadet Corps(NCC) is pleased to place on record its appreciation for the eVAL Examination Software provided by VIR Softech Pvt. Ltd. The implementation of this solution has greatly enhanced the efficiency and transparency of our examination answer script evaluation process. The software is well-structured, easy to operate, and has enabled our evaluators and administrators to complete assessments in a much faster and more organized manner. We would also like to acknowledge the dedicated technical assistance and timely support extended by the VIR Softech team during deployment, training and live operations. Their professional approach and responsiveness ensured a seamless transition from conventional evaluation methods to a modern digital platform.",author:"Brig KS BAWA",role:"Gp Cdr",org:"NCC Group HQ Mumbai 'A'",images:["/assets/images/Testimonials/ncc.png"]},{quote:"We would like to share our experience of eVAL OMR reader software. We are pleased with the services and support provided through the eVAL OMR Reading Software. The software has helped streamline the OMR answer sheet processing work with good accuracy and faster result generation. The platform is easy to operate and has reduced manual effort and chances of human error during OMR evaluation. One of the useful features is the ability to design customized OMR sheets as per examination requirements. The overall performance and support provided by VIR Softech have been satisfactory.",author:"V.K. Vishwakarma",role:"Examination Manager",org:"School for Aircraft Maintenance Engineering",images:["/assets/images/Testimonials/same.png"]},{quote:"We are highly satisfied with the OMR Evaluation Software provided by Virsoftech. Their solution has significantly improved the accuracy, efficiency, and speed of our examination evaluation process. The software is user-friendly, reliable, and supported by a highly responsive technical team. Virsoftech has proven to be a dependable technology partner, and we confidently recommend their OMR Evaluation Software to institutions seeking efficient and accurate examination management solutions",author:"Team RPSIS‑89",role:"RPS International School",org:"Gurugram",images:["/assets/images/Testimonials/rpsis.jpg"]}];return v.useEffect(()=>{const r=setInterval(()=>{i(s=>(s+1)%a.length)},8e3);return()=>clearInterval(r)},[a.length]),e.jsx("section",{id:"testimonials",className:"section-padding",style:{background:"white",overflow:"hidden"},children:e.jsxs("div",{className:"container",children:[e.jsx(E,{badge:"Global Success",title:e.jsxs(e.Fragment,{children:["Institutional ",e.jsx("span",{className:"gradient-text",children:"Voices"})]}),text:"Hear from the leaders who are transforming evaluation with eVAL's deep-tech ecosystem."}),e.jsxs("div",{style:{position:"relative",maxWidth:"1200px",margin:"0 auto"},children:[e.jsx(ce,{mode:"wait",children:e.jsx(V.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.5,ease:"easeOut"},style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 500px), 1fr))",gap:"2.5rem",minHeight:"400px"},children:[t,(t+1)%a.length].map((r,s)=>e.jsxs("div",{style:{background:"#ffffff",borderRadius:"1.5rem",padding:"3.5rem",position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:"0 20px 40px rgba(0,0,0,0.04)",border:"1px solid var(--border)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{color:"var(--primary)",marginBottom:"1.5rem"},children:e.jsx(Mt,{size:48,fill:"var(--primary)",strokeWidth:0})}),e.jsx("p",{style:{fontSize:"1.0625rem",lineHeight:"1.7",color:"var(--muted-foreground)",marginBottom:"4rem",fontWeight:"500"},children:a[r].quote})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end"},children:[e.jsx("div",{style:{position:"relative",bottom:"-4.5rem",left:"-1rem"},children:e.jsx("div",{style:{width:"85px",height:"85px",borderRadius:"50%",background:"white",padding:"4px",border:"4px solid var(--primary)",boxShadow:"0 15px 30px rgba(0,0,0,0.12)",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("img",{src:a[r].images[0],alt:"Client",style:{width:"85%",height:"85%",objectFit:"contain"}})})}),e.jsxs("div",{style:{textAlign:"right"},children:[e.jsx("h4",{style:{color:"var(--primary)",fontSize:"1.125rem",fontWeight:"700",marginBottom:"0.25rem"},children:a[r].author}),e.jsxs("p",{style:{color:"var(--primary)",opacity:.8,fontSize:"0.9375rem",fontWeight:"500",lineHeight:1.4},children:[a[r].role," ",e.jsx("br",{}),a[r].org]})]})]})]},`${r}-${s}`))},t)}),e.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"0.75rem",marginTop:"6rem"},children:a.map((r,s)=>e.jsx("button",{onClick:()=>i(s),style:{width:t===s?"30px":"12px",height:"12px",borderRadius:"6px",background:t===s?"var(--primary)":"#e2e8f0",border:"none",cursor:"pointer",transition:"all 0.3s ease"}},s))})]})]})})},Gt=()=>{const t=[{src:"/assets/images/cmmi logo.png",alt:"CMMI Level 3"},{src:"/assets/images/iso9001.png",alt:"ISO 9001"},{src:"/assets/images/iso14001.png",alt:"ISO 14001"},{src:"/assets/images/msme.png",alt:"MSME"},{src:"/assets/images/gem.png",alt:"GeM India"},{src:"/assets/images/rkcllogo.png",alt:"RKCL"}];return e.jsxs("section",{style:{background:"var(--muted)",padding:"5rem 0",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"},children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"4rem"},children:[e.jsx("p",{style:{fontSize:"0.75rem",fontWeight:"800",textTransform:"uppercase",letterSpacing:"0.15em",color:"var(--primary)",marginBottom:"0.75rem"},children:"Compliance & Trust"}),e.jsxs("h3",{style:{fontSize:"2rem"},children:["Certification & ",e.jsx("span",{className:"gradient-text",children:"Empanelment"})]})]}),e.jsx("div",{style:{display:"flex",flexWrap:"nowrap",justifyContent:"center",gap:"clamp(1rem, 3vw, 3.5rem)",alignItems:"center",overflowX:"auto",paddingBottom:"1rem",scrollbarWidth:"none",msOverflowStyle:"none"},children:t.map((i,a)=>e.jsx("div",{className:"hover-lift",style:{height:"clamp(60px, 8vw, 85px)",display:"flex",alignItems:"center",justifyContent:"center",opacity:.9,transition:"all 0.3s ease"},children:e.jsx("img",{src:i.src,alt:i.alt,style:{maxHeight:"100%",maxWidth:"180px",objectFit:"contain"}})},a))})]}),e.jsx("style",{children:`
        div::-webkit-scrollbar {
          display: none;
        }
      `})]})},qt=()=>{const t=[{src:"/assets/images/award_best_edtech.png",name:"New Normal Award",desc:"Partner"},{src:"/assets/images/award_innovation.png",name:"Amar Ujala",desc:"Leading Technology Company in Education Domain"},{src:"/assets/images/award_excellence.png",name:"Deccan College Pune",desc:"Appreciation for development of Virasat"},{src:"/assets/images/award_top_omr.png",name:"EGN- Winner",desc:"Excellence in Education Technology"},{src:"/assets/images/award_trusted.png",name:"New Normal Award",desc:"Partner"}];return e.jsx("section",{className:"section-padding",style:{background:"white"},children:e.jsxs("div",{className:"container",children:[e.jsx("div",{style:{textAlign:"center",marginBottom:"4rem"},children:e.jsxs(p,{children:[e.jsx("p",{style:{fontSize:"0.75rem",fontWeight:"800",textTransform:"uppercase",letterSpacing:"0.15em",color:"var(--primary)",marginBottom:"0.75rem"},children:"Recognition"}),e.jsxs("h3",{style:{fontSize:"clamp(2rem, 5vw, 2.5rem)",fontWeight:800,marginBottom:"1rem"},children:["Awards & ",e.jsx("span",{className:"gradient-text",children:"Recognitions"})]}),e.jsx("p",{style:{color:"var(--muted-foreground)",maxWidth:"600px",margin:"0 auto",fontSize:"1.125rem"},children:"Our commitment to excellence has been recognized by leading industry bodies and educational institutions."})]})}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"1.5rem",alignItems:"stretch"},className:"awards-grid",children:t.map((i,a)=>e.jsx(p,{delay:a*.1,direction:"up",children:e.jsxs("div",{className:"hover-lift",style:{textAlign:"center",height:"100%",display:"flex",flexDirection:"column",background:"white",padding:"1.25rem",borderRadius:"2rem",boxShadow:"0 20px 40px rgba(0,0,0,0.04)",transition:"all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"},children:[e.jsx("div",{style:{borderRadius:"1.25rem",overflow:"hidden",marginBottom:"1.25rem",display:"flex",alignItems:"center",justifyContent:"center",aspectRatio:"1.2",padding:"0"},children:e.jsx("img",{src:i.src,alt:i.name,style:{width:"100%",height:"100%",objectFit:"contain"}})}),e.jsx("h4",{style:{fontSize:"0.875rem",fontWeight:"800",marginBottom:"0.4rem",color:"var(--secondary)",lineHeight:"1.3"},children:i.name}),e.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted-foreground)",lineHeight:"1.4",margin:0,fontWeight:"500"},children:i.desc})]})},a))}),e.jsx("style",{children:`
          @media (min-width: 1024px) {
            .awards-grid {
              grid-template-columns: repeat(5, 1fr) !important;
            }
          }
        `})]})})},Ht=({value:t,duration:i=1.5})=>{const a=he(0),r=parseFloat(t.replace(/[^0-9.]/g,""))||0,s=t.replace(/[0-9.]/g,""),o=gt(a,n=>Math.floor(n).toLocaleString()+s);return v.useEffect(()=>Tt(a,r,{duration:i,ease:"easeOut"}).stop,[r,i]),e.jsx(V.span,{children:o})},Ut=()=>{const t=[{label:"Global Presence Countries",val:"10+"},{label:"Global Segment Clients",val:"5000+"},{label:"Universities",val:"100+"},{label:"Colleges",val:"1000+"},{label:"Olympiad conducting Bodies",val:"100+"},{label:"Coaching",val:"3100+"},{label:"OMR Sheets Evaluated",val:"250 M+"},{label:"Years Of Experience",val:"10+"}];return e.jsxs("section",{id:"stats",className:"section-padding",style:{background:"white",position:"relative"},children:[e.jsxs("div",{className:"container",children:[e.jsx(E,{badge:"Institutional Impact",title:e.jsxs(e.Fragment,{children:["Trusted by ",e.jsx("span",{className:"gradient-text",children:"Institutions Worldwide"})]}),text:"Powering large-scale examinations with unmatched speed, accuracy, and reliability."}),e.jsx("div",{className:"stats-grid-v3",children:t.map((i,a)=>e.jsxs(V.div,{initial:{opacity:0,x:-10},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:a*.05},className:"stat-item-v3",children:[e.jsx("div",{className:"stat-line-v3"}),e.jsxs("div",{className:"stat-content-v3",children:[e.jsx("div",{className:"stat-value-v3",children:e.jsx(Ht,{value:i.val})}),e.jsx("div",{className:"stat-label-v3",children:i.label})]})]},a))})]}),e.jsx("style",{children:`
        .stats-grid-v3 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .stat-item-v3 {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .stat-line-v3 {
          width: 4px;
          height: 60px;
          background: #0EA5A4;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .stat-value-v3 {
          font-size: 2.25rem;
          font-weight: 800;
          color: #1A3636;
          line-height: 1.1;
          margin-bottom: 0.3rem;
          
        }

        .stat-label-v3 {
          font-size: 0.9375rem;
          color: #4A5568;
          line-height: 1.3;
          font-weight: 600;
          max-width: 180px;
        }

        @media (max-width: 1024px) {
          .stats-grid-v3 {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 1rem;
          }
        }

        @media (max-width: 640px) {
          .stats-grid-v3 {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .stat-value-v3 {
            font-size: 2rem;
          }

          .stat-line-v3 {
            height: 50px;
          }
        }
      `})]})},_t=()=>{const[t,i]=v.useState(""),[a,r]=v.useState(!1),{status:s,message:o,submitForm:n}=Qe({successMessage:"Awesome! You're now subscribed to our monthly insights.",onSuccess:()=>r(!0)}),l=d=>{d.preventDefault(),n({email:t},"Newsletter Subscription"),i("")};return e.jsxs("section",{className:"section-padding",style:{background:"var(--muted)"},children:[e.jsx("div",{className:"container",children:e.jsxs("div",{style:{background:"white",borderRadius:"clamp(1.5rem, 3vw, 3rem)",padding:"clamp(2rem, 5vw, 5rem)",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 280px), 1fr))",gap:"clamp(2rem, 4vw, 4rem)",alignItems:"center",boxShadow:"none",border:"1px solid var(--border)"},className:"reveal",children:[e.jsxs("div",{children:[e.jsx("span",{className:"badge",children:"Stay Ahead"}),e.jsxs("h2",{children:["Get Expert Assessment ",e.jsx("span",{className:"gradient-text",children:"Insights"})]}),e.jsx("p",{style:{marginBottom:0},children:"Join 2000+ educational leaders receiving our monthly briefing on evaluation trends and security protocols."})]}),e.jsxs("form",{onSubmit:l,style:{display:"flex",flexWrap:"wrap",gap:"0.75rem",width:"100%"},children:[e.jsxs("div",{style:{display:"flex",gap:"0.75rem",flex:"1 1 300px",flexWrap:"wrap"},children:[e.jsx("input",{type:"email",required:!0,value:t,onChange:d=>i(d.target.value),placeholder:"Your professional email",style:{flex:"1 1 200px",minWidth:0,padding:"1rem 1.5rem",borderRadius:"1rem",border:"1px solid var(--border)",background:"white",fontSize:"0.9375rem"}}),e.jsx("button",{type:"submit",disabled:s==="loading",className:"btn btn-primary",style:{flexShrink:0},children:s==="loading"?"Joining...":"Subscribe"})]}),e.jsx("div",{style:{width:"100%"},children:e.jsx(Xe,{status:s,message:o})})]})]})}),e.jsx(Ze,{isOpen:a,onClose:()=>r(!1)})]})},Kt=()=>{const[t,i]=v.useState(0),a=[{id:1,title:"National Cadet Corps (NCC)",tagline:"End-to-End OMR Examination Automation",tags:["OMR","Admit Card","Certificates"],color:"var(--primary)",background:"The National Cadet Corps (NCC) conducts certification examinations across the country for Junior & Senior Division cadets. These exams evaluate cadets' knowledge, discipline, and readiness for defense-related opportunities.",points:["Conducted offline across multiple NCC units","'A' Certificate – School Level Cadets","'B' & 'C' Certificates – College Level Cadets","Examination mode traditionally based on Physical test papers & OMR sheets"],solution:"Vir Softech deployed an Examination Management System tailored for NCC operations in 500+ Locations.",features:[{title:"OMR Examination Software",items:["Automated OMR sheet reading & scoring","High processing accuracy with instant error detection"]},{title:"Admit Card Generation System",items:["Secure identity validation with QR Code","Highly Secure with integration of Digitally Signed"]},{title:"Certificate Generator Tool",items:["Auto-qualified certification as per scoring rules","Secure certificate design, print & digital Signature"]}],outcomes:["NCC successfully transitioned to a digitally enabled offline OMR examination ecosystem","Faster and more accurate evaluation process","Streamlined certification for thousands of cadets nationwide"]},{id:2,title:"Union Public Service Commission (UPSC)",tagline:"Automated ICR/OCR Based Marks Processing",tags:["ICR","OCR","Security"],color:"var(--secondary)",background:"The Union Public Service Commission (UPSC) is India’s premier central recruitment agency. It conducts nationwide competitive examinations attended by millions of aspirants.",points:["Marks are handwritten on the back of answer sheets","Different questions have different validation rules","Manual data entry resulted in high chance of human error","Difficult tracking & verification at scale"],solution:"Vir Softech deployed its advanced eVAL Evaluation System using cutting-edge character recognition (ICR/OCR).",features:[{title:"ICR Technology",items:["Reads handwritten marks with validation logic","Automated extraction with built-in rule checks"]},{title:"OCR Intelligence",items:["Reads roll numbers & identifiers on each sheet","Ensures 100% data integrity for identifiers"]},{title:"Workflow Automation",items:["Instant processing & centralized result mapping","Export-ready formats (PDF, Excel, CSV, DBF)"]}],outcomes:["Eliminated human calculation errors entirely","Cut result preparation cycles by 60%","Guaranteed 100% data integrity for national-level recruitment"]}];v.useEffect(()=>{const s=setInterval(()=>{i(o=>(o+1)%a.length)},15e3);return()=>clearInterval(s)},[]);const r=a[t];return e.jsxs("div",{style:{position:"relative"},children:[e.jsxs("div",{className:"card",style:{padding:0,overflow:"hidden",background:"white",minHeight:"600px",transition:"all 0.5s ease"},children:[e.jsxs("div",{style:{background:r.color,padding:"clamp(1.5rem, 5vw, 2.5rem) clamp(1.25rem, 5vw, 4rem)",display:"flex",alignItems:"center",gap:"2rem",flexWrap:"wrap",transition:"background 0.5s ease"},children:[e.jsx("div",{style:{width:"64px",height:"64px",background:"rgba(255,255,255,0.15)",borderRadius:"1rem",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.jsx(_,{size:32,color:"white"})}),e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"0.75rem",fontWeight:"900",textTransform:"uppercase",letterSpacing:"0.15em",color:"rgba(255,255,255,0.7)",marginBottom:"0.4rem"},children:["Case Study ",r.id]}),e.jsx("h3",{style:{color:"white",fontSize:"1.75rem",margin:0},children:r.title})]}),e.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:r.tags.map(s=>e.jsx("span",{style:{padding:"0.4rem 0.9rem",background:"rgba(255,255,255,0.12)",borderRadius:"0.5rem",fontSize:"0.6875rem",fontWeight:"700",color:"white"},children:s},s))})]}),e.jsxs("div",{style:{padding:"clamp(1.5rem, 5vw, 3rem) clamp(1.25rem, 5vw, 4rem)",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 280px), 1fr))",gap:"clamp(2rem, 5vw, 4rem)"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{color:r.color,fontSize:"0.75rem",fontWeight:"900",textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:"1rem"},children:"Background"}),e.jsx("p",{style:{fontSize:"0.9375rem",lineHeight:"1.8",color:"var(--muted-foreground)",marginBottom:"1.5rem"},children:r.background}),e.jsx("ul",{style:{listStyle:"none",padding:0,display:"grid",gap:"0.75rem"},children:r.points.map((s,o)=>e.jsxs("li",{style:{display:"flex",gap:"0.75rem",alignItems:"flex-start",fontSize:"0.875rem",color:"var(--foreground)",lineHeight:"1.6"},children:[e.jsx(et,{size:16,style:{color:r.color,flexShrink:0,marginTop:"2px"}}),s]},o))})]}),e.jsxs("div",{children:[e.jsxs("h4",{style:{color:r.color,fontSize:"0.75rem",fontWeight:"900",textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:"1rem"},children:["Solution: ",r.tagline]}),e.jsx("p",{style:{fontSize:"0.875rem",color:"var(--muted-foreground)",marginBottom:"1.5rem",lineHeight:"1.7"},children:r.solution}),e.jsx("div",{style:{display:"grid",gap:"1rem"},children:r.features.map((s,o)=>e.jsxs("div",{style:{background:"var(--muted)",borderRadius:"1rem",padding:"1rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.625rem",marginBottom:"0.5rem"},children:[e.jsx(tt,{size:16,style:{color:r.color,flexShrink:0}}),e.jsx("span",{style:{fontWeight:"800",fontSize:"0.8125rem",color:"var(--foreground)"},children:s.title})]}),e.jsx("ul",{style:{listStyle:"none",padding:0,paddingLeft:"1.25rem",display:"grid",gap:"0.25rem"},children:s.items.map((n,l)=>e.jsxs("li",{style:{fontSize:"0.75rem",color:"var(--muted-foreground)",lineHeight:"1.5"},children:["• ",n]},l))})]},o))})]})]}),e.jsx("div",{style:{background:t===0?"var(--secondary)":"var(--primary)",padding:"clamp(1.5rem, 5vw, 2rem) clamp(1.25rem, 5vw, 4rem)",display:"flex",alignItems:"center",gap:"2rem",flexWrap:"wrap",transition:"all 0.5s ease"},children:e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.7rem",fontWeight:"900",textTransform:"uppercase",letterSpacing:"0.15em",color:"rgba(255,255,255,0.6)",marginBottom:"0.5rem"},children:"Combined Outcome"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"1.5rem"},children:r.outcomes.map((s,o)=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"flex-start",color:"rgba(255,255,255,0.9)",fontSize:"0.8125rem",lineHeight:"1.4"},children:[e.jsx(Ge,{size:14,style:{color:"white",flexShrink:0,marginTop:"2px"}}),s]},o))})]})})]}),e.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"0.75rem",marginTop:"2rem"},children:a.map((s,o)=>e.jsx("button",{onClick:()=>i(o),style:{width:o===t?"32px":"10px",height:"10px",borderRadius:"5px",background:o===t?"var(--primary)":"#e2e8f0",border:"none",cursor:"pointer",transition:"all 0.3s ease"},"aria-label":`Go to case study ${o+1}`},o))})]})},yi=()=>{const t=[{title:"On Screen Marking Software",desc:"On-screen evaluation for descriptive answer sheets.",path:"/osm",icon:e.jsx(at,{size:28}),color:"#0EA5A4",isPopular:!0},{title:"Optical Mark Reader Software",desc:"Process 300–500 sheets/min with 100% accuracy using plain paper.",path:"/omr",icon:e.jsx(rt,{size:28}),color:"#0EA5A4"},{title:"Computer Based Examination Solution",desc:"Secure online exam system with anti-cheating & analytics.",path:"/cbt",icon:e.jsx(me,{size:28}),color:"#1F1F1F"},{title:"Question Paper Management System",desc:"Advanced question bank with tagging & workflows.",path:"/qpms",icon:e.jsx(st,{size:28}),color:"#1F1F1F"}];return e.jsxs("div",{className:"home-page",children:[e.jsx(He,{title:"Home",description:"eVAL provides end-to-end examination solutions including OMR software, CBT platforms, AI Proctoring, and LMS for schools, universities, and corporate assessments.",keywords:"Examination Solutions, OMR Software India, Computer Based Test, Online Assessment Platform, AI Proctoring Software, Education Technology"}),e.jsx(Vt,{}),e.jsx(p,{width:"100%",children:e.jsx(Ft,{})}),e.jsx(p,{width:"100%",children:e.jsx(Ut,{})}),e.jsx("section",{id:"solutions",className:"section-padding",style:{background:"var(--muted)"},children:e.jsxs("div",{className:"container",children:[e.jsx(E,{badge:"Our Solutions",title:e.jsxs(e.Fragment,{children:["One Platform. ",e.jsx("span",{className:"gradient-text",children:"Complete Examination Ecosystem"})]}),text:"Digitize, automate, and scale your entire assessment lifecycle — from OMR to AI-powered evaluation."}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"1.5rem"},children:t.map((i,a)=>e.jsx(p,{delay:a*.1,direction:"up",children:e.jsxs(G,{to:i.path,className:"card hover-lift",style:{height:"100%",display:"flex",flexDirection:"column",padding:"2rem 1.5rem",textDecoration:"none",position:"relative",overflow:"hidden"},children:[i.isPopular&&e.jsx("div",{style:{position:"absolute",top:"1rem",right:"1rem",background:"var(--primary)",color:"white",padding:"0.3rem 0.8rem",borderRadius:"100px",fontSize:"0.6rem",fontWeight:"800",textTransform:"uppercase",letterSpacing:"0.05em",boxShadow:"var(--shadow-sm)"},children:"Most Popular"}),e.jsx("div",{style:{width:"60px",height:"60px",background:"var(--primary-light)",color:"var(--primary)",borderRadius:"1.25rem",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"2rem"},children:i.icon}),e.jsx("h3",{style:{fontSize:"1.25rem",marginBottom:"1rem",color:"var(--foreground)"},children:i.title}),e.jsx("p",{style:{flex:1,marginBottom:"2rem",color:"var(--muted-foreground)"},children:i.desc}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:"700",color:"var(--primary)",fontSize:"0.875rem"},children:["Explore Solution ",e.jsx(pe,{size:16})]})]})},a))})]})}),e.jsx(p,{width:"100%",children:e.jsx(Lt,{})}),e.jsx(p,{width:"100%",children:e.jsx(Pt,{})}),e.jsx("section",{className:"section-padding",style:{background:"white"},children:e.jsx("div",{className:"container",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"4rem",alignItems:"center"},children:[e.jsx(p,{direction:"right",children:e.jsxs("div",{children:[e.jsx(E,{badge:"Why EVAL?",title:e.jsxs(e.Fragment,{children:["Built for ",e.jsx("span",{className:"gradient-text",children:"Accuracy, Scale & Trust"})]}),text:"Transform your evaluation ecosystem with automation, security, and unmatched precision.",centered:!1}),e.jsx("div",{style:{marginTop:"2.5rem",display:"grid",gap:"1.5rem"},children:[{icon:e.jsx(Ot,{size:20}),title:"Cloud Scalable",text:"Handle lakhs of sheets with auto-scaling infrastructure"},{icon:e.jsx(it,{size:20}),title:"Enterprise Security",text:"End-to-end encryption with secure data handling"},{icon:e.jsx(qe,{size:20}),title:"Nationwide Adoption",text:"Trusted by universities & institutions across India"}].map((i,a)=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-start"},children:[e.jsx("div",{style:{background:"white",padding:"0.75rem",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)",color:"var(--primary)"},children:i.icon}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.3rem"},children:i.title}),e.jsx("p",{style:{margin:0},children:i.text})]})]},a))})]})}),e.jsx(p,{direction:"left",children:e.jsxs("div",{style:{position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:"-20%",left:"-10%",width:"120%",height:"140%",background:"radial-gradient(circle, rgba(14, 165, 164, 0.15), transparent 70%)",zIndex:0}}),e.jsxs("div",{style:{position:"relative",background:"var(--muted)",borderRadius:"2rem",padding:"2.5rem",boxShadow:"0 20px 50px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},children:[e.jsx("h3",{style:{textAlign:"center",marginBottom:"2rem"},children:"Measurable Impact"}),e.jsx("div",{style:{display:"grid",gap:"1.5rem"},children:[{label:"Evaluation Speed",value:"4x Faster"},{label:"Operational Cost",value:"↓ 65%"},{label:"Accuracy Rate",value:"100%"}].map((i,a)=>e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifySelf:"stretch",justifyContent:"space-between",fontWeight:"700",marginBottom:"0.4rem"},children:[e.jsx("span",{style:{color:"var(--muted-foreground)"},children:i.label}),e.jsx("span",{style:{color:"var(--primary)"},children:i.value})]}),e.jsx("div",{style:{height:"6px",background:"white",borderRadius:"4px",overflow:"hidden"},children:e.jsx(V.div,{initial:{width:0},whileInView:{width:a===0?"90%":a===1?"65%":"95%"},transition:{duration:1,delay:.5},style:{height:"100%",background:"var(--primary)"}})})]},a))}),e.jsx("div",{style:{marginTop:"2rem"},children:e.jsx(G,{to:"/book-demo",className:"btn btn-primary",style:{width:"100%"},children:"Get Free Demo"})})]})]})})]})})}),e.jsx(p,{width:"100%",children:e.jsx(Gt,{})}),e.jsx(p,{width:"100%",children:e.jsx(qt,{})}),e.jsx("section",{id:"case-studies",className:"section-padding",style:{background:"var(--muted)"},children:e.jsxs("div",{className:"container",children:[e.jsx(E,{badge:"Success Stories",title:e.jsxs(e.Fragment,{children:["Proven ",e.jsx("span",{className:"gradient-text",children:"Institutional Impact"})]})}),e.jsx(p,{width:"100%",children:e.jsx(Kt,{})})]})}),e.jsx(p,{width:"100%",children:e.jsx(Dt,{})}),e.jsx(p,{width:"100%",children:e.jsx(_t,{})})]})};export{yi as default};

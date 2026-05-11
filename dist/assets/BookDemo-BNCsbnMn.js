import{r as m,B as e,P as v,J as j,L as y}from"./index-BdzEvM3d.js";import{u as w,F as N}from"./FormStatus-CBsVvICK.js";import{S}from"./SEO-4s3Rlcjd.js";import{S as z}from"./SuccessModal-qCObwHmN.js";import{c as d}from"./countryData-DRe3hHOb.js";import{U as C}from"./user-D6onm9yW.js";import{B as k}from"./building-DYfWl6YD.js";import{A as P}from"./arrow-right-RdQ6rFc0.js";import"./circle-check-big-8LSVhopV.js";import"./circle-alert-BnZsGFPU.js";const R=()=>{const[i,a]=m.useState({name:"",phone:"",email:"",organization:"",country:"India",solutions:["Complete eVAL Suite"],message:""}),u=["Complete eVAL Suite","OMR Software","On Screen Marking (OSM)","Question Paper Management (QPMS)","AI Proctoring","CBT Platform","LMS Portal"],[p,l]=m.useState(!1),{status:n,message:g,submitForm:h}=w({successMessage:"Your demo request has been received! Our Team will contact you within 24 hours.",onSuccess:()=>l(!0)}),t=r=>{const{name:o,value:s}=r.target;if(o==="country"){const c=d.find(b=>b.name===s);a(c?{...i,country:s,phone:c.dial_code+" "}:{...i,country:s})}else a({...i,[o]:s})},x=r=>{const o=[...i.solutions];o.includes(r)?a({...i,solutions:o.filter(s=>s!==r)}):a({...i,solutions:[...o,r]})},f=r=>{if(r.preventDefault(),i.solutions.length===0){alert("Please select at least one product for the demo.");return}h(i,"Demo Request")};return e.jsxs("div",{className:"demo-page",style:{paddingTop:"var(--nav-height)",minHeight:"100vh",background:"var(--background)"},children:[e.jsx(S,{title:"Schedule a Personalized Demo | eVAL Edtech",description:"Experience the power of eVAL's AI-driven evaluation ecosystem. Schedule a live demo with our experts today."}),e.jsxs("div",{className:"bg-decoration",children:[e.jsx("div",{className:"blob blob-1"}),e.jsx("div",{className:"blob blob-2"})]}),e.jsx("section",{className:"section-padding",style:{position:"relative",zIndex:1},children:e.jsxs("div",{className:"container",style:{maxWidth:"800px"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"3rem"},children:[e.jsx("span",{className:"badge",children:"Institutional Access"}),e.jsxs("h1",{className:"page-title",children:["Experience the ",e.jsx("span",{className:"gradient-text",children:"eVAL Suite"})]}),e.jsx("p",{className:"page-subtitle",children:"Fill out the form below and our solution expert will guide you through a 30-minute personalized walkthrough."})]}),e.jsx("div",{className:"form-container",children:e.jsx("div",{className:"form-card",children:e.jsxs("form",{onSubmit:f,className:"demo-form",children:[e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"input-group",children:[e.jsx("label",{children:"Full Name"}),e.jsxs("div",{className:"input-with-icon",children:[e.jsx(C,{size:18,className:"input-icon"}),e.jsx("input",{name:"name",type:"text",required:!0,value:i.name,onChange:t,placeholder:"e.g. Dr. Sameer"})]})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{children:"Contact Number"}),e.jsxs("div",{className:"input-with-icon",children:[e.jsx(v,{size:18,className:"input-icon"}),e.jsx("input",{name:"phone",type:"tel",required:!0,value:i.phone,onChange:t,placeholder:"+91 99xx"})]})]})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{children:"Professional Email"}),e.jsxs("div",{className:"input-with-icon",children:[e.jsx(j,{size:18,className:"input-icon",style:{color:"#EA4335"}}),e.jsx("input",{name:"email",type:"email",required:!0,value:i.email,onChange:t,placeholder:"principal@institute.org"})]})]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"input-group",children:[e.jsx("label",{children:"Organization"}),e.jsxs("div",{className:"input-with-icon",children:[e.jsx(k,{size:18,className:"input-icon"}),e.jsx("input",{name:"organization",type:"text",required:!0,value:i.organization,onChange:t,placeholder:"University/School"})]})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{children:"Country"}),e.jsxs("select",{name:"country",required:!0,value:i.country,onChange:t,children:[e.jsx("option",{value:"",children:"Please Select"}),[...d].sort((r,o)=>r.name.localeCompare(o.name)).map(r=>e.jsx("option",{value:r.name,children:r.name},r.code))]})]})]}),e.jsxs("div",{className:"input-group",children:[e.jsxs("label",{children:["Products for Demo ",e.jsx("span",{style:{fontWeight:"normal",color:"var(--muted-foreground)"},children:"(Select multiple)"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"0.75rem",background:"#f8fafc",padding:"1.5rem",borderRadius:"1.25rem",border:"1px solid var(--border)"},children:u.map(r=>e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.75rem",cursor:"pointer",fontSize:"0.875rem",fontWeight:i.solutions.includes(r)?"700":"500",color:i.solutions.includes(r)?"var(--primary)":"var(--foreground)"},children:[e.jsx("input",{type:"checkbox",checked:i.solutions.includes(r),onChange:()=>x(r),style:{width:"18px",height:"18px",cursor:"pointer"}}),r]},r))})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{children:"Tell us about your requirements"}),e.jsx("textarea",{name:"message",required:!0,value:i.message,onChange:t,rows:"3",placeholder:"Number of students, specific challenges, etc..."})]}),e.jsxs("button",{type:"submit",disabled:n==="loading",className:"btn btn-primary submit-btn",children:[n==="loading"?"Scheduling Demo...":"Confirm Demo Request",e.jsx(P,{size:20})]}),e.jsx(N,{status:n,message:g}),e.jsxs("p",{className:"form-privacy",children:["By clicking, you agree to our ",e.jsx(y,{to:"/privacy-policy",children:"Privacy Policy"})," and trial terms."]})]})})})]})}),e.jsx("style",{children:`
        .demo-page {
          overflow-x: hidden;
          position: relative;
        }

        .bg-decoration {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          z-index: 0;
        }

        .blob-1 {
          top: 10%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: var(--primary);
        }

        .blob-2 {
          bottom: 10%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: #2563eb;
        }

        .page-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          line-height: 1.1;
          font-weight: 900;
          margin-bottom: 1rem;
          color: var(--secondary);
        }

        .page-subtitle {
          font-size: 1.125rem;
          color: var(--muted-foreground);
          max-width: 600px;
          margin: 0 auto;
        }

        .form-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .form-card {
          background: white;
          padding: 3.5rem;
          border-radius: 3rem;
          box-shadow: 0 40px 100px rgba(0,0,0,0.08);
          border: 1px solid var(--border);
          position: relative;
          z-index: 2;
        }

        .demo-form {
          display: grid;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .input-group label {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--foreground);
          margin-left: 0.25rem;
        }

        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          color: var(--muted-foreground);
        }

        .input-with-icon input {
          padding-left: 3rem !important;
        }

        .input-group input, 
        .input-group select, 
        .input-group textarea {
          width: 100%;
          padding: 0.875rem 1.25rem;
          border-radius: 1rem;
          border: 1px solid var(--border);
          background: #f8fafc;
          font-size: 0.9375rem;
          transition: var(--transition);
        }

        .input-group input:focus, 
        .input-group select:focus, 
        .input-group textarea:focus {
          border-color: var(--primary);
          background: white;
          box-shadow: 0 0 0 4px var(--primary-light);
          outline: none;
        }

        .submit-btn {
          margin-top: 1rem;
          padding: 1.25rem;
          border-radius: 1rem;
          font-size: 1.125rem;
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          box-shadow: 0 10px 25px rgba(14, 165, 164, 0.2);
        }

        .form-privacy {
          text-align: center;
          font-size: 0.75rem;
          color: var(--muted-foreground);
          margin-top: 1rem;
        }

        .form-privacy a {
          color: var(--primary);
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
        }

        .trust-strip {
          text-align: center;
          margin-top: 3rem;
          padding: 2rem;
          border-radius: 2rem;
          background: rgba(255,255,255,0.5);
          backdrop-filter: blur(10px);
        }

        .trust-strip p {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--muted-foreground);
          margin-bottom: 1.5rem;
        }

        .trust-logos {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .trust-logos span {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--secondary);
          opacity: 0.5;
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .form-card {
            padding: 2rem 1.5rem;
            border-radius: 2rem;
          }

          .page-title {
            font-size: 2.5rem;
          }
        }
      `}),e.jsx(z,{isOpen:p,onClose:()=>l(!1)})]})};export{R as default};

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[723],{5722:function(e,t,a){Promise.resolve().then(a.bind(a,3388))},3388:function(e,t,a){"use strict";a.r(t);var s=a(7437),r=a(6463),n=a(2265),l=a(6853),o=a(3979);t.default=()=>{let e=(0,r.useRouter)(),{user:t,error:a,isLoading:u}=(0,l.aF)(),[i,c]=(0,n.useState)(!1),[m,d]=(0,n.useState)({prompt:"",tag:""}),h=async a=>{a.preventDefault(),c(!0);try{(await fetch("/api/prompt/new",{method:"POST",body:JSON.stringify({prompt:m.prompt,auth0Id:null==t?void 0:t.sub,tag:m.tag})})).ok&&e.push("/")}catch(e){console.log(e)}finally{c(!1)}};return(0,s.jsx)(o.Z,{type:"Create",post:m,setPost:d,submitting:i,handleSubmit:h})}},3979:function(e,t,a){"use strict";var s=a(7437),r=a(7138);t.Z=e=>{let{type:t,post:a,setPost:n,submitting:l,handleSubmit:o}=e;return(0,s.jsx)("section",{className:"w-full max-w-full flex-start",children:(0,s.jsxs)("h1",{className:"head_text text_left",children:[(0,s.jsxs)("span",{className:"blue_gradient",children:[t," Post"]}),(0,s.jsxs)("p",{className:"desc text-left max-w-md",children:[t," and share amazing prompts with the world, and let your imagination run wild woth any AI-powered platform"]}),(0,s.jsxs)("form",{onSubmit:o,className:"mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism",children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{className:"font-satoshi font-semibold text-base text-gray-700",children:"Your AI Prompt"}),(0,s.jsx)("textarea",{value:a.prompt,onChange:e=>n({...a,prompt:e.target.value}),placeholder:"Write you promt here..",required:!0,className:"form_textarea"})]}),(0,s.jsxs)("label",{children:[(0,s.jsxs)("span",{className:"font-satoshi font-semibold text-base text-gray-700",children:["Tag "," ",(0,s.jsx)("span",{className:"font-normal",children:"(#product, # webdevelopment, #idea)"})]}),(0,s.jsx)("input",{value:a.tag,onChange:e=>n({...a,tag:e.target.value}),placeholder:"#tag",required:!0,className:"form_input"})]}),(0,s.jsxs)("div",{className:"flex-end mx-3 mb-5 gap-4",children:[(0,s.jsx)(r.default,{href:"/",className:"text-gray-500 text-sm",children:"Cancel"}),(0,s.jsx)("button",{type:"submit",disabled:l,className:"px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white",children:l?"".concat(t,"..."):t})]})]})]})})}},6463:function(e,t,a){"use strict";var s=a(1169);a.o(s,"usePathname")&&a.d(t,{usePathname:function(){return s.usePathname}}),a.o(s,"useRouter")&&a.d(t,{useRouter:function(){return s.useRouter}}),a.o(s,"useSearchParams")&&a.d(t,{useSearchParams:function(){return s.useSearchParams}})}},function(e){e.O(0,[730,138,971,23,744],function(){return e(e.s=5722)}),_N_E=e.O()}]);
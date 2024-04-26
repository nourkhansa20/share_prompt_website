(()=>{var e={};e.id=931,e.ids=[931],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},95486:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>d,routeModule:()=>u,tree:()=>c}),t(34161),t(98327),t(35866);var r=t(23191),a=t(88716),n=t(37922),o=t.n(n),i=t(95231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(s,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,34161)),"C:\\Room\\Next js\\share_prompts\\app\\page.jsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,98327)),"C:\\Room\\Next js\\share_prompts\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Room\\Next js\\share_prompts\\app\\page.jsx"],m="/page",p={require:t,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},45409:(e,s,t)=>{Promise.resolve().then(t.bind(t,30922))},56886:(e,s,t)=>{Promise.resolve().then(t.bind(t,60918)),Promise.resolve().then(t.bind(t,18206))},96696:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,12994,23)),Promise.resolve().then(t.t.bind(t,96114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,79671,23)),Promise.resolve().then(t.t.bind(t,41868,23)),Promise.resolve().then(t.t.bind(t,84759,23))},30922:(e,s,t)=>{"use strict";t.d(s,{default:()=>i});var r=t(10326),a=t(17577),n=t(3686);let o=({data:e,handleSearchChange:s})=>r.jsx("div",{className:"mt-16 prompt_layout",children:e.map(e=>r.jsx(n.Z,{post:e,handleTagClick:s},e._id))}),i=()=>{let[e,s]=(0,a.useState)(),[t,n]=(0,a.useState)([]);return(0,a.useEffect)(()=>{(async()=>{let e=await fetch("/api/prompt"),s=await e.json();console.log(s),n(s)})()},[]),(0,r.jsxs)("section",{className:"feed",children:[r.jsx("form",{className:"relative w-full flex-center",children:r.jsx("input",{type:"text",placeholder:"Search for a tag or a username",value:e,onChange:e=>{},required:!0,className:"search_input peer"})}),r.jsx(o,{data:t,handleTagClick:()=>{}})]})}},60918:(e,s,t)=>{"use strict";t.d(s,{default:()=>l});var r=t(10326),a=t(90434),n=t(46226),o=t(17577),i=t(18206);let l=()=>{let{user:e,error:s,isLoading:t}=(0,i.aF)(),[l,c]=(0,o.useState)(!1);return((0,o.useEffect)(()=>{!t&&e&&fetch("/api/user",{method:"POST",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{console.log(e.message)}).catch(e=>{console.error("Error adding user:",e)})},[e,t]),t)?r.jsx("div",{children:"Loading..."}):s?r.jsx("div",{children:s.message}):(0,r.jsxs)("nav",{className:"flex-between w-full mb-16 pt-3",children:[(0,r.jsxs)(a.default,{href:"/",className:"flex gap-2 flex-center",children:[r.jsx(n.default,{src:"/assets/images/logo.svg",alt:"Promptopia Logo",width:30,height:30,className:"object-contain"}),r.jsx("p",{className:"logo_text",children:"Emporium"})]}),r.jsx("div",{className:"sm:flex hidden",children:e?(0,r.jsxs)("div",{className:"flex gap-3 md:gap-5",children:[r.jsx(a.default,{href:"/create-prompt",className:"black_btn",children:"Create Post"}),r.jsx("a",{href:"/api/auth/logout",className:"outline_btn",children:"Log Out"}),r.jsx(a.default,{href:"/profile",children:r.jsx("img",{src:e.picture,className:"rounded-full size-[37px]",alt:"profile"})})]}):r.jsx(r.Fragment,{children:r.jsx("a",{href:"/api/auth/login",className:"black_btn",children:"Sign In"})})}),r.jsx("div",{className:"sm:hidden flex relative",children:e?(0,r.jsxs)("div",{className:"flex",children:[r.jsx("img",{src:e.picture,className:"rounded-full size-[37px]",alt:"profile",onClick:()=>c(e=>!e)}),l&&(0,r.jsxs)("div",{className:"dropdown",children:[r.jsx(a.default,{href:"/profile",className:"dropdown_link",onClick:()=>c(!1),children:"My Profile"}),r.jsx(a.default,{href:"/profile",className:"create_prompt",onClick:()=>c(!1),children:"Create Prompt"}),r.jsx("a",{href:"/api/auth/logout",className:"mt-5 w-full black_btn",children:"Sign Out"})]})]}):r.jsx(r.Fragment,{children:r.jsx("button",{type:"button",className:"black_btn",children:"Sign In"})})})]})}},3686:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l});var r=t(10326),a=t(17577),n=t(46226),o=t(18206),i=t(35047);let l=({post:e,handleTagClick:s,handleEdit:t,handleDelete:l})=>{let{user:c,loading:d,error:m}=(0,o.aF)(),p=(0,i.usePathname)();(0,i.useRouter)();let[u,x]=(0,a.useState)("second");return(0,r.jsxs)("div",{className:"prompt_card",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start gap-5",children:[(0,r.jsxs)("div",{className:"flex-1 flex  justify-start items-center gap-3 cursor-pointer",children:[r.jsx("img",{src:e.creator.image,alt:"user_image",className:"rounded-full object-contain size-[40px]"}),(0,r.jsxs)("div",{className:"flex flex-col",children:[r.jsx("h3",{className:"font-satoshi font-semibold text-gray-900",children:e.creator.username}),r.jsx("p",{className:"font-inter text-sm text-gray-500",children:e.creator.email})]})]}),r.jsx("div",{className:"copy_btn",onClick:()=>{x(e.prompt),navigator.clipboard.writeText(e.prompt),setTimeout(()=>x(""),2e3)},children:r.jsx(n.default,{src:u===e.prompt?"/assets/icons/tick.svg":"/assets/icons/copy.svg",width:12,height:12})})]}),r.jsx("p",{className:"my-4 font-satoshi text-sm text-gray-700",children:e.prompt}),(0,r.jsxs)("p",{className:"font-inter text-sm blue_gradient cursor-pointer",onClick:()=>s&&s(e.tag),children:["#",e.tag]}),c?.sub===e.creator.auth0Id&&"/profile"===p&&(0,r.jsxs)("div",{className:"mt-5 flex-center gap-4 border-t border-gray-100 pt-3",children:[r.jsx("p",{className:"font-inter text-sm green_gradient cursor-pointer",onClick:t,children:"Edit"}),r.jsx("p",{className:"font-inter text-sm orange_gradient cursor-pointer",onClick:l,children:"Delete"})]})]})}},35047:(e,s,t)=>{"use strict";var r=t(77389);t.o(r,"usePathname")&&t.d(s,{usePathname:function(){return r.usePathname}}),t.o(r,"useRouter")&&t.d(s,{useRouter:function(){return r.useRouter}}),t.o(r,"useSearchParams")&&t.d(s,{useSearchParams:function(){return r.useSearchParams}})},98327:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>m,metadata:()=>d});var r=t(19510),a=t(68570);let n=(0,a.createProxy)(String.raw`C:\Room\Next js\share_prompts\components\Nav.jsx`),{__esModule:o,$$typeof:i}=n;n.default;let l=(0,a.createProxy)(String.raw`C:\Room\Next js\share_prompts\components\Nav.jsx#default`);t(7633);var c=t(3512);let d={title:"Proptopia",description:"Discover & Share Ai Prompts"};function m({children:e}){return r.jsx("html",{lang:"en",children:r.jsx(c.UserProvider,{children:(0,r.jsxs)("body",{children:[r.jsx("div",{className:"main",children:r.jsx("div",{className:"gradient"})}),(0,r.jsxs)("main",{className:"app",children:[r.jsx(l,{}),e]})]})})})}},34161:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});var r=t(19510),a=t(68570);let n=(0,a.createProxy)(String.raw`C:\Room\Next js\share_prompts\components\Feed.jsx`),{__esModule:o,$$typeof:i}=n;n.default;let l=(0,a.createProxy)(String.raw`C:\Room\Next js\share_prompts\components\Feed.jsx#default`),c=function(){return(0,r.jsxs)("section",{className:"w-full flex-center flex-col",children:[(0,r.jsxs)("h1",{className:"head_text text-center",children:["Discover & Share",r.jsx("br",{className:"max-md:hidden"}),r.jsx("span",{className:"orange_gradient text-center",children:"AI-Powered Prompts"})]}),r.jsx("p",{className:"desc text-center",children:"Promptopia is an open-source AI promorting tool for modern world to discover, create and share creative prompts"}),r.jsx(l,{})]})}},7633:()=>{}};var s=require("../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[948,509],()=>t(95486));module.exports=r})();
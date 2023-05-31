(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(74)}])},3481:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var s=n(5893);n(7294);var i=n(5675),r=n.n(i),o=n(7348),c=n.n(o),a=n(6447),l=n(6860),u=function(){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})})},d=n(5368);function h(e){let{title:t,image:n,date:i,location:o,id:h}=e,m=new Date(i).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}),x=o.replace(", ","\n");return(0,s.jsxs)("li",{className:c().item,children:[(0,s.jsx)(r(),{src:"/"+n,alt:t,width:300,height:160}),(0,s.jsxs)("div",{className:c().content,children:[(0,s.jsxs)("div",{className:c().summary,children:[(0,s.jsx)("h2",{children:t}),(0,s.jsxs)("div",{className:c().date,children:[(0,s.jsx)(a.Z,{}),(0,s.jsx)("time",{children:m})]}),(0,s.jsxs)("div",{className:c().address,children:[(0,s.jsx)(l.Z,{}),(0,s.jsx)("address",{children:x})]})]}),(0,s.jsx)("div",{className:c().actions,children:(0,s.jsxs)(d.Z,{link:"/events/".concat(h),children:[(0,s.jsx)("span",{children:"Explore Event"}),(0,s.jsx)("span",{className:c().icon,children:(0,s.jsx)(u,{})})]})})]})]})}var m=n(5508),x=n.n(m);function f(e){let{items:t}=e;return(0,s.jsx)("ul",{className:x().list,children:t.map(e=>(0,s.jsx)(h,{id:e.id,title:e.title,location:e.location,date:e.date,image:e.image},e.id))})}},6860:function(e,t,n){"use strict";var s=n(5893);t.Z=function(){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]})}},6447:function(e,t,n){"use strict";var s=n(5893);t.Z=function(){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}},5368:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(5893),i=n(1664),r=n.n(i);n(7294);var o=n(9932),c=n.n(o);function a(e){let{children:t,link:n,onClick:i}=e;return n?(0,s.jsx)(r(),{href:n,className:c().btn,children:t}):(0,s.jsx)("button",{className:c().btn,onClick:i,children:t})}},74:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return m}});var s=n(5893),i=n(7294),r=n(3481),o=n(3671),c=n.n(o),a=n(2172);function l(){let e=(0,i.useRef)(),t=(0,i.useContext)(a.Z);return(0,s.jsxs)("section",{className:c().newsletter,children:[(0,s.jsx)("h2",{children:"Sign up to stay updated!"}),(0,s.jsx)("form",{onSubmit:function(n){n.preventDefault();let s=e.current.value;t.showNotification({title:"Signing Up...",message:"Registering for newsletter.",status:"pending"}),fetch("/api/newsletter",{method:"POST",body:JSON.stringify({email:s}),headers:{"Content-Type":"application/json"}}).then(e=>e.ok?e.json():e.json().then(e=>{throw Error(e.message||"Something went wrong!")})).then(e=>{t.showNotification({title:"Success!",message:"Successfully registered for newsletter!",status:"success"})}).catch(e=>{t.showNotification({title:"Error!",message:e.message||"Something went wrong!",status:"error"})})},children:(0,s.jsxs)("div",{className:c().control,children:[(0,s.jsx)("input",{ref:e,type:"email",id:"email",placeholder:"Your email","aria-label":"Your email"}),(0,s.jsx)("button",{children:"Register"})]})})]})}var u=n(9008),d=n.n(u),h=!0;function m(e){return(0,s.jsxs)("div",{children:[(0,s.jsxs)(d(),{children:[(0,s.jsx)("title",{children:"CodeyEvents"}),(0,s.jsx)("meta",{name:"description",content:"Find your next developer event near you!"})]}),(0,s.jsx)(l,{}),(0,s.jsx)(r.Z,{items:e.events})]})}},7348:function(e){e.exports={item:"event-item_item__fVtqa",content:"event-item_content__SQSF9",date:"event-item_date__4WZ_m",address:"event-item_address__tF6LM",actions:"event-item_actions__FMKJ9",icon:"event-item_icon__Dun0S"}},5508:function(e){e.exports={list:"event-list_list__cHFCu"}},3671:function(e){e.exports={newsletter:"newsletter-registration_newsletter__yI1Np",control:"newsletter-registration_control__YcKSh"}},9932:function(e){e.exports={btn:"button_btn__O_wkr"}}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);
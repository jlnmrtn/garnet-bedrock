(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8577:function(e,t,s){Promise.resolve().then(s.bind(s,6538))},6538:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return z}});var r=s(8038),o=s(2357),n=s(8971),i=s(2846),a=s.n(i),l=s(719),c=s(9723),d=s(4457),u=s(629);function f(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,u.m6)((0,d.W)(t))}let x=l.forwardRef((e,t)=>{let{className:s,orientation:o="horizontal",decorative:n=!0,...i}=e;return(0,r.jsx)(c.f,{ref:t,decorative:n,orientation:o,className:f("shrink-0 bg-border","horizontal"===o?"h-[1px] w-full":"h-full w-[1px]",s),...i})});function m(e){let{signOut:t,user:s}=e;return(0,r.jsxs)("header",{className:"w-full mt-3 flex justify-between items-center p-8 text-2xl border border-violet-400 shadow-lg fixed top-0 z-50 overflow-auto bg-zinc-200",children:[(0,r.jsx)("div",{className:"font-mono",children:"Easy Rider for Lille"}),(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center space-y-3",children:[(0,r.jsx)("span",{className:"text-violet-500 font-mono",children:"\uD83E\uDD16 Chatbot Powered by Garnet Framework and AWS Bedrock agents"}),(0,r.jsx)(x,{orientation:"horizontal",className:"bg-slate-950"}),(0,r.jsx)(a(),{href:"https://garnet-framework.dev/",className:"text-cyan-600 text-sm",children:"Find More About Garnet"})]}),(0,r.jsxs)("div",{className:" flex flex-col justify-center items-center cursor-pointer font-mono space-y-2",onClick:t,children:[(0,r.jsx)(n.nf1,{className:"text-cyan-500 hover:bg-violet-600 active:bg-violet-700  rounded-full focus:outline-none focus:ring focus:ring-violet-300",size:50}),(0,r.jsx)("p",{children:null==s?void 0:s.username})]})]})}x.displayName=c.f.displayName;let b=l.forwardRef((e,t)=>{let{className:s,type:o,...n}=e;return(0,r.jsx)("input",{type:o,className:f("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s),ref:t,...n})});b.displayName="Input";var g=s(2836);let h=(0,s(3918).j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),p=l.forwardRef((e,t)=>{let{className:s,variant:o,size:n,asChild:i=!1,...a}=e,l=i?g.g7:"button";return(0,r.jsx)(l,{className:f(h({variant:o,size:n,className:s})),ref:t,...a})});p.displayName="Button";var v=s(9991),_=s(6830),w=s(7205),y=e=>{let{id:t,role:s,content:o}=e;return(0,r.jsxs)("div",{className:"flex items-center justify-center space-x-4",children:["user"===s?(0,r.jsx)(n.nf1,{size:"70",className:"text-3xl text-cyan-500"}):(0,r.jsx)(_.xBA,{size:"70",className:"text-3xl text-fuchsia-500"})," ",(0,r.jsx)("div",{className:"p-4 text-lg font-mono overflow-auto border border-solid rounded-xl max-w-3xl shadow-xl bg-gradient-to-br ".concat("user"===s?"from-fuchsia-300 to-cyan-300":"from-violet-200 to-pink-200"),children:o})]},t)},j=s(1715),N=s(9188);s(4282);var k=JSON.parse('{"aws_project_region":"eu-west-1","aws_cognito_identity_pool_id":"eu-west-1:72fb4917-5a7f-43d5-af39-8bb555f2211b","aws_cognito_region":"eu-west-1","aws_user_pools_id":"eu-west-1_PV8GTvWZL","aws_user_pools_web_client_id":"62dvhak4s0gmk7heogrp5uqhvp","oauth":{},"aws_cognito_username_attributes":[],"aws_cognito_social_providers":[],"aws_cognito_signup_attributes":["EMAIL"],"aws_cognito_mfa_configuration":"OFF","aws_cognito_mfa_types":["SMS"],"aws_cognito_password_protection_settings":{"passwordPolicyMinLength":8,"passwordPolicyCharacters":[]},"aws_cognito_verification_mechanisms":["EMAIL"],"aws_content_delivery_bucket":"smartnext-20240118142551-hostingbucket-dev","aws_content_delivery_bucket_region":"eu-west-1","aws_content_delivery_url":"https://d2b7bnhutikk6c.cloudfront.net"}');j.V.configure(k,{ssr:!0});var z=(0,N.Q)(function(e){let{signOut:t,user:s}=e,{messages:n,input:i,handleInputChange:a,handleSubmit:l,isLoading:c}=(0,o.RJ)();return(0,r.jsxs)("div",{className:"relative min-h-screen bg-slate-200 overflow-hidden flex flex-col  justify-center",children:[(0,r.jsx)(m,{signOut:t,user:s}),c&&(0,r.jsx)("div",{className:"absolute h-full w-full bottom-0 backdrop-blur-sm z-30 flex justify-center items-center ease-out duration-300",children:(0,r.jsx)(v.Z,{color:"#EE82EE"})}),(0,r.jsx)("div",{className:"flex flex-1 flex-col justify-center items-center m-auto ",children:(0,r.jsxs)("div",{className:"flex-1 flex flex-col items-start m-auto space-y-9 min-w-fit justify-center",children:[0==n.length&&(0,r.jsxs)("div",{className:"flex items-center justify-center space-x-4 ",children:[(0,r.jsx)(_.xBA,{size:"70",className:"text-3xl text-cyan-500"}),(0,r.jsx)("div",{className:"text-lg  font-mono p-4 overflow-auto border border-solid rounded-xl max-w-3xl shadow-xl bg-gradient-to-br from-violet-200 to-pink-200 ",children:"Helloooo !! I am a super Dumb Guy ask me questions about Bikes"})]}),n.map(e=>(0,r.jsx)(y,{content:e.content,id:e.id,role:e.role},e.id))]})}),(0,r.jsxs)("form",{onSubmit:l,className:"flex space-x-3 justify-center items-center my-10 ",children:[(0,r.jsx)(b,{className:"border max-w-3xl border-gray-100 shadow-xl py-8 text-xl text-bold rounded-2xl font-mono ",value:i,onChange:a,placeholder:"I am in Lille-europe and I need a bike"}),(0,r.jsx)(p,{variant:"ghost",className:"p-8",type:"submit",children:(0,r.jsx)(w.aRH,{size:"80",color:"purple"})})]})]})})}},function(e){e.O(0,[337,585,550,208,27,120,543,744],function(){return e(e.s=8577)}),_N_E=e.O()}]);
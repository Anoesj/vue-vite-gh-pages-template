let e=document.createElement("style");e.innerHTML="",document.head.appendChild(e);import{o as l,c as t,a,t as n,F as o,b as s,r}from"./index.d5bfa253.js";import{l as u}from"./logo.787e77a3.js";var m={name:"Home",data:()=>({logoPath:u,customEnvVarTest:"I'm a custom env variable"})};const c=a("br",null,null,-1),d=s("Environment: "),i=s("Base path: "),g=s("Custom .env variable test: ");m.render=function(e,s,u,m,p,h){const v=r("HelloWorld");return l(),t(o,null,[a("img",{alt:"Vue logo",width:"200",height:"200",src:p.logoPath},null,8,["src"]),a(v,{msg:e.$appName},null,8,["msg"]),c,a("p",null,[d,a("strong",null,n(e.$mode),1)]),a("p",null,[i,a("strong",null,n(e.$basePath),1)]),a("p",null,[g,a("strong",null,n(p.customEnvVarTest),1)])],64)},m.__file="src/js/routes/Home.vue";export default m;

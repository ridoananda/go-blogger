import{o as c,c as l,a as p,d as f,b as v,r as h,e as d,u as b,f as g,g as y,h as E,i as L}from"./vendor.1661173a.js";const O=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};O();const P="modulepreload",u={},A="/go-blogger/",a=function(r,s){return!s||s.length===0?r():Promise.all(s.map(t=>{if(t=`${A}${t}`,t in u)return;u[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":P,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e)return new Promise((_,m)=>{n.addEventListener("load",_),n.addEventListener("error",m)})})).then(()=>r())};var w=(i,r)=>{const s=i.__vccOpts||i;for(const[t,e]of r)s[t]=e;return s};const D={},N={class:"animate-pulse flex justify-between items-center container py-2 border-b"},V=p('<div class="space-y-1"><div class="rounded bg-slate-500 h-1 w-6"></div><div class="rounded bg-slate-500 h-1 w-4"></div><div class="rounded bg-slate-500 h-1 w-6"></div></div><div class="w-24 h-6 rounded bg-slate-500"></div><div class="w-6 h-6 rounded-full bg-slate-500"></div>',3),j=[V];function C(i,r){return c(),l("div",N,j)}var R=w(D,[["render",C]]);const k={class:"antialiased"},I={class:"pt-12 pb-6"},$=f({setup(i){const r=v({loader:()=>a(()=>import("./Navbar.6e3526fa.js"),["assets/Navbar.6e3526fa.js","assets/Navbar.7f3beb44.css","assets/vendor.1661173a.js"]),loadingComponent:R});return(s,t)=>{const e=h("router-view");return c(),l("div",k,[d(b(r)),g("div",I,[d(e)])])}}});const T=[{path:"/",name:"Home",component:()=>a(()=>import("./Home.08d73c33.js"),["assets/Home.08d73c33.js","assets/vendor.1661173a.js"])},{path:"/about",name:"About",component:()=>a(()=>import("./About.ca832d10.js"),["assets/About.ca832d10.js","assets/vendor.1661173a.js"])},{path:"/disclaimer",name:"Disclaimer",component:()=>a(()=>import("./Disclaimer.68ae0904.js"),["assets/Disclaimer.68ae0904.js","assets/vendor.1661173a.js"])},{path:"/contact",name:"Contact",component:()=>a(()=>import("./Contact.b6644c84.js"),["assets/Contact.b6644c84.js","assets/vendor.1661173a.js"])},{path:"/post/:id",name:"PostDetail",component:()=>a(()=>import("./Detail.1ec009b7.js"),["assets/Detail.1ec009b7.js","assets/article.306c4ea1.js","assets/vendor.1661173a.js"])}],x=y({history:E("go-blogger"),routes:T});L($).use(x).mount("#app");export{w as _,a};

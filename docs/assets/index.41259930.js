import{a as m}from"./vendor.8a0d1596.js";const b=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const L of s.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&l(L)}).observe(document,{childList:!0,subtree:!0});function e(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(a){if(a.ep)return;a.ep=!0;const s=e(a);fetch(a.href,s)}};b();const $="5b3de73c94mshad6ae102dfbb3b2p142456jsnf8dced1c8bef",S="https://deep-translate1.p.rapidapi.com/language/translate/v2",y={headers:{"content-type":"application/json","x-rapidapi-host":"deep-translate1.p.rapidapi.com","x-rapidapi-key":$}},g=new Intl.DisplayNames(["es"],{type:"language"});function x(){return m.get(`${S}/languages`,y)}function N(t){return m.post(S,t,y)}const E=(t,n)=>{const e=new SpeechSynthesisUtterance(t),l=speechSynthesis.getVoices().find(a=>a.lang===n);e.voice=l,speechSynthesis.speak(e)};function O(t,n=800){let e;return(...l)=>{clearTimeout(e),e=setTimeout(()=>{t.apply(this,l)},n)}}const o=t=>document.querySelector(t),r=o("#input textarea"),u=o("#output textarea"),i=o("#input-lang"),c=o("#output-lang"),P=o("#swap-languages"),T=o("#spell-input"),I=o("#spell-output"),p=o("#spell-input-lang"),d=o("#spell-output-lang"),_=o("#copy-output"),w=()=>{x().then(t=>{t.data.languages.sort((n,e)=>g.of(n.language)>g.of(e.language)?1:-1),t.data.languages.forEach(({language:n})=>{const e=document.createElement("option");e.value=n,e.innerText=g.of(n),i.appendChild(e),c.appendChild(e.cloneNode(!0)),r.value=localStorage.getItem("input")||"",i.value=localStorage.getItem("inputLanguage")||"es",c.value=localStorage.getItem("outputLanguage")||"en"}),h(),f(),v()}).catch(console.log)},A=()=>{localStorage.setItem("inputLanguage",i.value),localStorage.setItem("outputLanguage",c.value),h(),f(),v()},C=()=>{let t=c.value;c.value=i.value,i.value=t,t=u.value,u.value=r.value,r.value=t,localStorage.setItem("inputLanguage",i.value),localStorage.setItem("outputLanguage",c.value),h(),f()},v=O(()=>{localStorage.setItem("input",r.value);const t={q:r.value,source:i.value,target:c.value};u.classList.add("translating"),N(t).then(n=>{u.value=n.data.data.translations.translatedText,u.classList.remove("translating")}).catch(console.log)}),h=()=>{p.innerHTML="",p.disabled=!0;const n=speechSynthesis.getVoices().map(e=>e.lang).filter(e=>e.startsWith(i.value));if(!n.length){const e=document.createElement("option");e.value="",e.innerText="Lenguaje no disponible",p.appendChild(e);return}p.disabled=!1,n.forEach(e=>{const l=document.createElement("option");l.value=e,l.innerText=g.of(e),p.appendChild(l)})},f=()=>{d.innerHTML="",d.disabled=!0;const n=speechSynthesis.getVoices().map(e=>e.lang).filter(e=>e.startsWith(c.value));if(!n.length){const e=document.createElement("option");e.value="",e.innerText="Lenguaje no disponible",d.appendChild(e);return}d.disabled=!1,n.forEach(e=>{const l=document.createElement("option");l.value=e,l.innerText=g.of(e),d.appendChild(l)})},G=()=>{const t=p.value;!r.value||!t||(T.classList.add("active"),E(r.value,t))},k=()=>{const t=d.value;!u.value||!t||(I.classList.add("active"),E(u.value,t))},U=()=>{u.select(),u.setSelectionRange(0,99999),navigator.clipboard.writeText(u.value)};window.addEventListener("load",w);i.addEventListener("change",A);c.addEventListener("change",A);P.addEventListener("click",C);r.addEventListener("keypress",v);T.addEventListener("click",G);I.addEventListener("click",k);_.addEventListener("click",U);

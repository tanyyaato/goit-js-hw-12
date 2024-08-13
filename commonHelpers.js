import{S as v,i as $,a as f}from"./assets/vendor-CA5bdUtC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const P=document.querySelector(".list"),M=document.querySelector(".load-more-btn"),O=new v(".list  a",{captionsData:"alt"});function m(r){const s=r.map(({webformatURL:t,largeImageURL:l,tags:e,likes:o,views:i,comments:w,downloads:S})=>`<li class = "list-item">
  <a href="${l}">
    <div class = "preview-photo"><img src="${t}" alt="${e}"></div>
     <ul class="img-desc">
    <li>
      <h2>Likes</h2>
      <p>${o}</p>
    </li>
    <li>
      <h2>Views</h2>
      <p>${i}</p>
    </li>
    <li>
      <h2>Comments</h2>
      <p>${w}</p>
    </li>
    <li>
      <h2>Downloads</h2>
      <p>${S}</p>
    </li>
  </ul>
  </a>

</li>`).join("");P.insertAdjacentHTML("beforeend",s),O.refresh()}function y(){return M.style.display="none",$.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",closeOnClick:!0})}const x="https://pixabay.com/api/",E="45156529-f4caada2c6812495035285f69";f.defaults.baseURL=x;function g(r,s=1,t=15){return f.get("",{params:{key:E,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:t}})}const L=document.querySelector(".list"),u=document.querySelector(".js-form"),q=document.querySelector(".end-text"),n=document.querySelector(".load-more-btn"),d=document.querySelector(".loader");let a=null,p=15,c="",h=null;n.addEventListener("click",B);u.addEventListener("submit",R);async function R(r){if(r.preventDefault(),d.classList.remove("loader-hidden"),L.innerHTML="",q.style.display="none",n.style.display="none",a=1,c=u.elements.request.value.trim().toLowerCase(),c==="")return d.classList.add("loader-hidden"),y();try{const t=await g(c,a,p);if(d.classList.add("loader-hidden"),h=Math.ceil(t.data.totalHits/p),t.data.hits.length>0)m(t.data.hits),n.style.display=h>1?"block":"none";else{if(t.data.hits.length===0)throw new Error(t.status);n.style.display="none"}}catch(t){console.log(t.message),y()}finally{u.reset(),b()}}async function B(){a+=1;try{const r=await g(c,a,p);m(r.data.hits),a>=h&&(n.style.display="none",q.style.display="block")}catch(r){console.log(r.message)}finally{b()}}function b(){const r=L.children[0].getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map

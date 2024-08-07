import{S as b,i as q,a as f}from"./assets/vendor-CA5bdUtC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const v=document.querySelector(".list"),w=new b(".list  a",{captionsData:"alt"});function h(o){const s=o.map(({webformatURL:r,largeImageURL:c,tags:e,likes:t,views:n,comments:g,downloads:L})=>`<li class = "list-item">
  <a href="${c}">
    <div class = "preview-photo"><img src="${r}" alt="${e}"></div>
     <ul class="img-desc">
    <li>
      <h2>Likes</h2>
      <p>${t}</p>
    </li>
    <li>
      <h2>Views</h2>
      <p>${n}</p>
    </li>
    <li>
      <h2>Comments</h2>
      <p>${g}</p>
    </li>
    <li>
      <h2>Downloads</h2>
      <p>${L}</p>
    </li>
  </ul>
  </a>

</li>`).join("");v.insertAdjacentHTML("beforeend",s),w.refresh()}function S(){return q.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",closeOnClick:!0})}const $="https://pixabay.com/api/",x="45156529-f4caada2c6812495035285f69";f.defaults.baseURL=$;function m(o,s=1,r=15){return f.get("",{params:{key:x,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:r}})}const E=document.querySelector(".list"),p=document.querySelector(".js-form"),u=document.querySelector(".end-text"),a=document.querySelector(".load-more-btn");let i=1,d=15,l="";a.addEventListener("click",y);p.addEventListener("submit",O);async function O(o){if(o.preventDefault(),E.innerHTML="",i=1,l=p.elements.request.value.trim().toLowerCase(),!!l){try{const r=await m(l,i,d);if(r.data.hits.length>0)i+=1,h(r.data.hits),a.style.display="block";else if(r.data.hits.length===0)throw new Error(r.status)}catch{S()}p.reset()}}async function y(){const o=await m(l,i,d);i+=1,i<Math.ceil(o.data.totalHits/d)?(h(o.data.hits),a.style.display="block"):(a.removeEventListener("click",y),a.replaceWith(u),u.style.display="block",u.textContent="We're sorry, but you've reached the end of search results.")}
//# sourceMappingURL=commonHelpers.js.map

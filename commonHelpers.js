import{S as q,i as v,a as h}from"./assets/vendor-CA5bdUtC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const w=document.querySelector(".list"),S=document.querySelector(".load-more-btn"),$=new q(".list  a",{captionsData:"alt"});function m(o){const s=o.map(({webformatURL:r,largeImageURL:l,tags:e,likes:t,views:a,comments:L,downloads:b})=>`<li class = "list-item">
  <a href="${l}">
    <div class = "preview-photo"><img src="${r}" alt="${e}"></div>
     <ul class="img-desc">
    <li>
      <h2>Likes</h2>
      <p>${t}</p>
    </li>
    <li>
      <h2>Views</h2>
      <p>${a}</p>
    </li>
    <li>
      <h2>Comments</h2>
      <p>${L}</p>
    </li>
    <li>
      <h2>Downloads</h2>
      <p>${b}</p>
    </li>
  </ul>
  </a>

</li>`).join("");w.insertAdjacentHTML("beforeend",s),$.refresh()}function f(){return S.style.display="none",v.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",closeOnClick:!0})}const x="https://pixabay.com/api/",E="45156529-f4caada2c6812495035285f69";h.defaults.baseURL=x;function y(o,s=1,r=15){return h.get("",{params:{key:E,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:r}})}const M=document.querySelector(".list"),p=document.querySelector(".js-form"),d=document.querySelector(".end-text"),i=document.querySelector(".load-more-btn");let n=1,u=15,c="";i.addEventListener("click",g);p.addEventListener("submit",O);async function O(o){if(o.preventDefault(),M.innerHTML="",n=1,c=p.elements.request.value.trim().toLowerCase(),!c)return f();try{const r=await y(c,n,u);if(r.data.hits.length>0)n+=1,m(r.data.hits),i.style.display="block";else{if(r.data.hits.length===0)throw new Error(error.response);r.data.totalHits<=u&&(i.style.display="none")}}catch(r){return console.log(r.message),f()}p.reset()}async function g(){const o=await y(c,u);console.log(n),console.log(o.data.totalHits),n<Math.ceil(o.data.totalHits/u)?(n+=1,m(o.data.hits),i.style.display="block"):(i.removeEventListener("click",g),i.replaceWith(d),d.style.display="block",d.textContent="We're sorry, but you've reached the end of search results.")}
//# sourceMappingURL=commonHelpers.js.map

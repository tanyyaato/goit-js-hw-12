import{S as q,i as w,a as f}from"./assets/vendor-CA5bdUtC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const v=document.querySelector(".list"),S=document.querySelector(".load-more-btn"),$=new q(".list  a",{captionsData:"alt"});function m(o){const s=o.map(({webformatURL:r,largeImageURL:l,tags:e,likes:t,views:n,comments:L,downloads:b})=>`<li class = "list-item">
  <a href="${l}">
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
      <p>${L}</p>
    </li>
    <li>
      <h2>Downloads</h2>
      <p>${b}</p>
    </li>
  </ul>
  </a>

</li>`).join("");v.insertAdjacentHTML("beforeend",s),$.refresh()}function y(){return S.style.display="none",w.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",closeOnClick:!0})}const P="https://pixabay.com/api/",x="45156529-f4caada2c6812495035285f69";f.defaults.baseURL=P;function h(o,s=1,r=15){return f.get("",{params:{key:x,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:r}})}const M=document.querySelector(".list"),p=document.querySelector(".js-form"),i=document.querySelector(".end-text"),d=document.querySelector(".load-more-btn");let a=null,c=15,u="",g=null;d.addEventListener("click",E);p.addEventListener("submit",O);async function O(o){if(o.preventDefault(),M.innerHTML="",a=1,u=p.elements.request.value.trim().toLowerCase(),!u)return y();try{const r=await h(u,a,c);if(g=Math.ceil(r.data.totalHits/c),r.data.hits.length>0)m(r.data.hits),r.data.totalHits<=c?(d.style.display="none",i.style.display="none"):(d.style.display="block",i.style.display="none");else throw new Error("No results found")}catch(r){return console.log(r.message),i.style.display="none",y()}finally{p.reset()}}async function E(){a+=1;try{const o=await h(u,a,c);m(o.data.hits),a>=g&&(d.style.display="none",i.style.display="block",i.textContent="We're sorry, but you've reached the end of search results.")}catch(o){console.log(o.message)}}
//# sourceMappingURL=commonHelpers.js.map

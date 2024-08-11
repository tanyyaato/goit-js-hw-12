import{S as v,i as w,a as m}from"./assets/vendor-CA5bdUtC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const S=document.querySelector(".list"),$=document.querySelector(".load-more-btn"),P=new v(".list  a",{captionsData:"alt"});function h(o){const s=o.map(({webformatURL:t,largeImageURL:l,tags:e,likes:r,views:i,comments:b,downloads:q})=>`<li class = "list-item">
  <a href="${l}">
    <div class = "preview-photo"><img src="${t}" alt="${e}"></div>
     <ul class="img-desc">
    <li>
      <h2>Likes</h2>
      <p>${r}</p>
    </li>
    <li>
      <h2>Views</h2>
      <p>${i}</p>
    </li>
    <li>
      <h2>Comments</h2>
      <p>${b}</p>
    </li>
    <li>
      <h2>Downloads</h2>
      <p>${q}</p>
    </li>
  </ul>
  </a>

</li>`).join("");S.insertAdjacentHTML("beforeend",s),P.refresh()}function f(){return $.style.display="none",w.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",closeOnClick:!0})}const x="https://pixabay.com/api/",E="45156529-f4caada2c6812495035285f69";m.defaults.baseURL=x;function y(o,s=1,t=15){return m.get("",{params:{key:E,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:t}})}const M=document.querySelector(".list"),p=document.querySelector(".js-form"),c=document.querySelector(".end-text"),a=document.querySelector(".load-more-btn");let n=null,u=15,d="",g=null;a.addEventListener("click",L);p.addEventListener("submit",O);async function O(o){if(o.preventDefault(),M.innerHTML="",n=1,d=p.elements.request.value.trim().toLowerCase(),!d)return f();try{const t=await y(d,n,u);if(g=Math.ceil(t.data.totalHits/u),t.data.hits.length>0)h(t.data.hits),t.data.totalHits>u?a.style.display="block":(a.remove(),c.remove());else if(t.data.hits.length===0)throw new Error(error.response)}catch(t){return console.log(t.message),f()}finally{p.reset()}}async function L(){n+=1;try{const o=await y(d,n,u);h(o.data.hits),n>=g&&(a.removeEventListener("click",L),a.replaceWith(c),c.style.display="block",c.textContent="We're sorry, but you've reached the end of search results.")}catch(o){console.log(o.message)}}
//# sourceMappingURL=commonHelpers.js.map

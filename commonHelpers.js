import{S as v,i as $,a as f}from"./assets/vendor-CA5bdUtC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const P=document.querySelector(".list"),M=document.querySelector(".load-more-btn"),O=new v(".list  a",{captionsData:"alt"});function m(r){const s=r.map(({webformatURL:t,largeImageURL:a,tags:e,likes:o,views:n,comments:w,downloads:S})=>`<li class = "list-item">
  <a href="${a}">
    <div class = "preview-photo"><img src="${t}" alt="${e}"></div>
     <ul class="img-desc">
    <li>
      <h2>Likes</h2>
      <p>${o}</p>
    </li>
    <li>
      <h2>Views</h2>
      <p>${n}</p>
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

</li>`).join("");P.insertAdjacentHTML("beforeend",s),O.refresh()}function h(){return M.style.display="none",$.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",closeOnClick:!0})}const x="https://pixabay.com/api/",E="45156529-f4caada2c6812495035285f69";f.defaults.baseURL=x;function g(r,s=1,t=15){return f.get("",{params:{key:E,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:t}})}const L=document.querySelector(".list"),u=document.querySelector(".js-form"),q=document.querySelector(".end-text"),i=document.querySelector(".load-more-btn"),y=document.querySelector(".loader");let l=null,d=15,c="",p=null;i.addEventListener("click",B);u.addEventListener("submit",R);async function R(r){if(r.preventDefault(),y.classList.remove("loader-hidden"),L.innerHTML="",q.style.display="none",i.style.display="none",l=1,c=u.elements.request.value.trim().toLowerCase(),!c)return h();try{const t=await g(c,l,d);if(y.classList.add("loader-hidden"),p=Math.ceil(t.data.totalHits/d),t.data.hits.length>0)m(t.data.hits),i.style.display=p>1?"block":"none";else{if(t.data.hits.length===0)throw new Error(t.status);i.style.display="none"}}catch(t){console.log(t.message),h()}finally{u.reset(),b()}}async function B(){l+=1;try{const r=await g(c,l,d);m(r.data.hits),l>=p&&(i.style.display="none",q.style.display="block")}catch(r){console.log(r.message)}finally{b()}}function b(){const r=L.children[0].getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map

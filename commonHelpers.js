import{S as b,i as w,a as m}from"./assets/vendor-CA5bdUtC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const S=document.querySelector(".list"),v=document.querySelector(".load-more-btn"),$=new b(".list  a",{captionsData:"alt"});function y(r){const s=r.map(({webformatURL:t,largeImageURL:a,tags:e,likes:o,views:n,comments:L,downloads:q})=>`<li class = "list-item">
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
      <p>${L}</p>
    </li>
    <li>
      <h2>Downloads</h2>
      <p>${q}</p>
    </li>
  </ul>
  </a>

</li>`).join("");S.insertAdjacentHTML("beforeend",s),$.refresh()}function f(){return v.style.display="none",w.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",closeOnClick:!0})}const P="https://pixabay.com/api/",M="45156529-f4caada2c6812495035285f69";m.defaults.baseURL=P;function h(r,s=1,t=15){return m.get("",{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:t}})}const O=document.querySelector(".list"),u=document.querySelector(".js-form"),g=document.querySelector(".end-text"),c=document.querySelector(".load-more-btn");let i=null,d=15,l="",p=null;c.addEventListener("click",E);u.addEventListener("submit",x);async function x(r){if(r.preventDefault(),O.innerHTML="",g.style.display="none",i=1,l=u.elements.request.value.trim().toLowerCase(),!l)return f();try{const t=await h(l,i,d);if(p=Math.ceil(t.data.totalHits/d),t.data.hits.length>0)y(t.data.hits),c.style.display=p>1?"block":"none";else{if(t.data.hits.length===0)throw new Error(t.status);c.style.display="none"}}catch(t){console.log(t.message),f()}finally{u.reset()}}async function E(){i+=1;try{const r=await h(l,i,d);y(r.data.hits),i>=p&&(c.style.display="none",g.style.display="block")}catch(r){console.log(r.message)}}
//# sourceMappingURL=commonHelpers.js.map

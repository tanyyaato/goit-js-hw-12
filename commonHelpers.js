import{S as b,i as w,a as m}from"./assets/vendor-CA5bdUtC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const S=document.querySelector(".list"),v=document.querySelector(".load-more-btn"),$=new b(".list  a",{captionsData:"alt"});function y(o){const s=o.map(({webformatURL:t,largeImageURL:a,tags:e,likes:r,views:i,comments:L,downloads:q})=>`<li class = "list-item">
  <a href="${a}">
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
      <p>${L}</p>
    </li>
    <li>
      <h2>Downloads</h2>
      <p>${q}</p>
    </li>
  </ul>
  </a>

</li>`).join("");S.insertAdjacentHTML("beforeend",s),$.refresh()}function f(){return v.style.display="none",w.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",closeOnClick:!0})}const P="https://pixabay.com/api/",M="45156529-f4caada2c6812495035285f69";m.defaults.baseURL=P;function h(o,s=1,t=15){return m.get("",{params:{key:M,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:t}})}const O=document.querySelector(".list"),d=document.querySelector(".js-form"),g=document.querySelector(".end-text"),c=document.querySelector(".load-more-btn");let n=null,p=15,l="",u=null;c.addEventListener("click",E);d.addEventListener("submit",x);async function x(o){if(o.preventDefault(),O.innerHTML="",g.style.display="none",n=1,l=d.elements.request.value.trim().toLowerCase(),!l)return f();try{const t=await h(l,n,p);if(u=Math.ceil(t.data.totalHits/p),t.data.hits.length>0)y(t.data.hits),c.style.display=u>1?"block":"none";else{if(t.data.hits.length===0)throw new Error(t.status);c.style.display="none"}}catch(t){console.log(t.message),f()}finally{d.reset()}}async function E(){if(!(n>=u)){n+=1;try{const o=await h(l,n,p);y(o.data.hits),n>=u&&(c.style.display="none",g.style.display="block")}catch(o){console.log(o.message)}}}
//# sourceMappingURL=commonHelpers.js.map

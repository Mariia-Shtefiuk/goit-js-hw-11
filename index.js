import{a as m,S as f,i as o}from"./assets/vendor-Cip_4kvj.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="50948492-7a2c95c1e3ac536ddbec900a1";function h(a){return m.get("https://pixabay.com/api/",{params:{key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const l=document.querySelector(".gallery"),y=new f(".gallery a"),c=document.querySelector(".loader"),v=a=>{const s=a.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:i,comments:d,downloads:p})=>` 
  <li class="gallery-item">
        <a href="${n}">
        <img src="${r}" alt="${e}" width="300">
        </a>
        <div class="image-stats">
            <div class="image-stat">
                <span class="label">Likes</span>
                <span class="value">${t}</span>
            </div>
            <div class="image-stat">
                <span class="label">Views</span>
                <span class="value">${i}</span>
            </div>
            <div class="image-stat">
                <span class="label">Comments</span>
                <span class="value">${d}</span>
            </div>
            <div class="image-stat">
                <span class="label">Downloads</span>
                <span class="value">${p}</span>
            </div>
        </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",s),y.refresh()};function b(){l.innerHTML=""}function L(){c.classList.remove("hidden")}function S(){c.classList.add("hidden")}const u=document.querySelector(".form");u.addEventListener("submit",w);function w(a){a.preventDefault();const s=u.querySelector('input[name="search-text"]').value.trim();if(s===""){o.warning({title:"Увага",message:"Поле пошуку не може бути поржнім!",position:"topRight"});return}b(),L(),h(s).then(r=>{if(r.hits.length===0){o.error({title:"Oops",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(r.hits)}).catch(r=>{o.error({title:"Error",message:"Something went wrong. Please try again later",position:"topRight"})}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map

var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var n=r("23aE7");r("3s0lT"),r("k6w5h"),r("75K3C"),r("gta3E");var o=r("krGWQ"),i=r("bL5Vt");if(window.addEventListener("DOMContentLoaded",(e=>(0,n.mqHandler)())),o.refs.errorFind.classList.remove("notfind-part-hidden"),"/favorite.html"===window.location.pathname){function l(e,t){o.refs.errorFind.classList.add("notfind-part-hidden"),e.insertAdjacentHTML("beforeend",t)}function s({title:e,img:t,description:a,source:r,category:n,date:o}){return`<li class="gallery__item">\n    <article class="gallery__article">\n              <div class="gallery__thumb"> <p class="gallery__category">${n}</p>\n                <img class="gallery__img" src="${t}" alt=""/>\n                 <button type="button" class="gallery__favorite__btn ">\n                         <span class="favorite__btn-span add-favorite-btn is-hidden">Add to favorite\n                           <svg width='16' height='16' viewBox="0 0 37 32">\n<path fill="none" stroke="#4440f7" style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.667 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n                    </svg> </span>\n                    <span class="favorite__btn-span remove-favorite-btn">Remove from favorite\n                                    <svg width='16' height='16' viewBox="0 0 37 32">\n<path fill="#4b48da" style="fill: var(--color1, #4b48da)" d="M9.778 0c-4.908 0-8.889 3.94-8.889 8.8 0 3.924 1.556 13.236 16.868 22.649 0.274 0.167 0.589 0.255 0.91 0.255s0.636-0.088 0.91-0.255c15.312-9.413 16.867-18.725 16.867-22.649 0-4.86-3.98-8.8-8.889-8.8s-8.889 5.333-8.889 5.333-3.98-5.333-8.889-5.333z"></path>\n          </svg></span>\n                          </button>\n                    </div>\n                    <h3 class="gallery__header">${e}</h3>\n                    <p class="gallery__text">${a}</p>\n                    <div class="gallery__item-bottom_wrap">\n                        <span class="gallery__date">${o}</span>\n                        <a href="${r}" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>\n                    </div>\n                </article>\n             </li>`}i.favoritesInLocalStorage.map((e=>{l(i.favoriteGalleryList,s(e))})),
//!!!!Remove favorite ---------------------------------------------------------------RESTORE
"/favorite.html"===window.location.pathname&&i.favoriteGalleryList.addEventListener("click",(function(e){const t=e.target.closest(".remove-favorite-btn"),a=t.parentNode.childNodes[1];console.log();const r=t.parentNode.parentNode.parentNode.childNodes[3].textContent;if(!t)return;if(!i.favoritesInLocalStorage)return;t.classList.contains("is-hidden")||(t.classList.add("is-hidden"),a.classList.remove("is-hidden"));const n=i.favoritesInLocalStorage.findIndex((e=>e.title===r));console.log(r,n),i.favoritesInLocalStorage.splice(n,1),localStorage.setItem("favoritesNews",JSON.stringify(i.favoritesInLocalStorage)),i.favoriteGalleryList.innerHTML="",o.refs.errorFind.classList.remove("notfind-part-hidden"),i.favoritesInLocalStorage.map((e=>{l(i.favoriteGalleryList,s(e))}))})),console.log(i.favoritesInLocalStorage),null!==i.favoritesInLocalStorage&&i.favoritesInLocalStorage!==[]||console.log("error")}
//# sourceMappingURL=favorite.69876849.js.map

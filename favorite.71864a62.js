!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var r=a("4Nugj"),o=a("eM8IA");if(r.refs.errorFind.classList.remove("notfind-part-hidden"),"/favorite.html"===window.location.pathname){function i(e,t){r.refs.errorFind.classList.add("notfind-part-hidden"),e.insertAdjacentHTML("beforeend",t)}function s(e){var t=e.title,n=e.img,a=e.description,r=e.source,o=e.category,i=e.date;return'<li class="gallery__item">\n    <article class="gallery__article">\n              <div class="gallery__thumb"> <p class="gallery__category">'.concat(o,'</p>\n                <img class="gallery__img" src="').concat(n,'" alt=""/>\n                 <button type="button" class="gallery__favorite__btn ">\n                         <span class="favorite__btn-span add-favorite-btn is-hidden">Add to favorite\n                           <svg width=\'16\' height=\'16\'><use href="}"></use>\n                    </svg> </span>\n                    <span class="favorite__btn-span remove-favorite-btn">Remove from favorite\n                                    <svg width=\'16\' height=\'16\'><use href=""></use>\n                    </svg></span>\n                          </button>\n                    </div>\n                    <h3 class="gallery__header">').concat(t,'</h3>\n                    <p class="gallery__text">').concat(a,'</p>\n                    <div class="gallery__item-bottom_wrap">\n                        <span class="gallery__date">').concat(i,'</span>\n                        <a href="').concat(r,'" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>\n                    </div>\n                </article>\n             </li>')}o.favoritesInLocalStorage.map((function(e){i(r.refs.galleryList,s(e))})),
//!!!!Remove favorite
"/favorite.html"===window.location.pathname&&r.refs.galleryList.addEventListener("click",(function(e){var t=e.target.closest(".remove-favorite-btn"),n=t.parentNode.childNodes[1];console.log();var a=t.parentNode.parentNode.parentNode.childNodes[3].textContent;if(!t)return;if(!o.favoritesInLocalStorage)return;t.classList.contains("is-hidden")||(t.classList.add("is-hidden"),n.classList.remove("is-hidden"));var l=o.favoritesInLocalStorage.findIndex((function(e){return e.title===a}));console.log(a,l),o.favoritesInLocalStorage.splice(l,1),localStorage.setItem("favoritesNews",JSON.stringify(o.favoritesInLocalStorage)),r.refs.galleryList.innerHTML="",r.refs.errorFind.classList.remove("notfind-part-hidden"),o.favoritesInLocalStorage.map((function(e){i(r.refs.galleryList,s(e))}))})),console.log(o.favoritesInLocalStorage),null!==o.favoritesInLocalStorage&&o.favoritesInLocalStorage!==[]||console.log("error")}}();
//# sourceMappingURL=favorite.71864a62.js.map

!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n),n("31XKK"),n("eDLZO"),n("iEXUT");var r=n("eQMc3"),o=n("4Nugj"),i=n("eM8IA");if(o.refs.errorFind.classList.remove("notfind-part-hidden"),"/favorite.html"===window.location.pathname){function l(e,t){o.refs.errorFind.classList.add("notfind-part-hidden"),e.insertAdjacentHTML("beforeend",t)}function s(e){var t=e.title,a=e.img,n=e.description,o=e.source,i=e.category,l=e.date;return'<li class="gallery__item">\n    <article class="gallery__article">\n              <div class="gallery__thumb"> <p class="gallery__category">'.concat(i,'</p>\n                <img class="gallery__img" src="').concat(a,'" alt=""/>\n                 <button type="button" class="gallery__favorite__btn ">\n                         <span class="favorite__btn-span add-favorite-btn is-hidden">Add to favorite\n                           <svg width=\'16\' height=\'16\'><use href="').concat(r.ICON_HEART,'"></use>\n                    </svg> </span>\n                    <span class="favorite__btn-span remove-favorite-btn">Remove from favorite\n                                    <svg width=\'16\' height=\'16\' fill="#4440f7"><use href="').concat(r.ICON_HEART,'"></use>\n                    </svg></span>\n                          </button>\n                    </div>\n                    <h3 class="gallery__header">').concat(t,'</h3>\n                    <p class="gallery__text">').concat(n,'</p>\n                    <div class="gallery__item-bottom_wrap">\n                        <span class="gallery__date">').concat(l,'</span>\n                        <a href="').concat(o,'" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>\n                    </div>\n                </article>\n             </li>')}i.favoritesInLocalStorage.map((function(e){l(i.favoriteGalleryList,s(e))})),
//!!!!Remove favorite ---------------------------------------------------------------RESTORE
"/favorite.html"===window.location.pathname&&i.favoriteGalleryList.addEventListener("click",(function(e){var t=e.target.closest(".remove-favorite-btn"),a=t.parentNode.childNodes[1];console.log();var n=t.parentNode.parentNode.parentNode.childNodes[3].textContent;if(!t)return;if(!i.favoritesInLocalStorage)return;t.classList.contains("is-hidden")||(t.classList.add("is-hidden"),a.classList.remove("is-hidden"));var r=i.favoritesInLocalStorage.findIndex((function(e){return e.title===n}));console.log(n,r),i.favoritesInLocalStorage.splice(r,1),localStorage.setItem("favoritesNews",JSON.stringify(i.favoritesInLocalStorage)),i.favoriteGalleryList.innerHTML="",o.refs.errorFind.classList.remove("notfind-part-hidden"),i.favoritesInLocalStorage.map((function(e){l(i.favoriteGalleryList,s(e))}))})),console.log(i.favoritesInLocalStorage),null!==i.favoritesInLocalStorage&&i.favoritesInLocalStorage!==[]||console.log("error")}}();
//# sourceMappingURL=favorite.8c58cd7f.js.map

!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var r=a[e];delete a[e];var t={id:e,exports:{}};return n[e]=t,r.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){a[e]=n},e.parcelRequired7c6=r);var t=r("4Nugj"),o=r("eM8IA");if(t.refs.errorFind.classList.remove("notfind-part-hidden"),"/favorite.html"===window.location.pathname){function l(e,n){t.refs.errorFind.classList.add("notfind-part-hidden"),e.insertAdjacentHTML("beforeend",n)}function s(e){var n=e.title,a=e.img,r=e.description,t=e.source,o=e.category,l=e.date;return'<li class="gallery__item">\n    <article class="gallery__article">\n              <div class="gallery__thumb"> <p class="gallery__category">'.concat(o,'</p>\n                <img class="gallery__img" src="').concat(a,'" alt=""/>\n                 <button type="button" class="gallery__favorite__btn ">\n                         <span class="favorite__btn-span add-favorite-btn is-hidden">Add to favorite\n                           <svg width=\'16\' height=\'16\'><use href="}"></use>\n                    </svg> </span>\n                    <span class="favorite__btn-span remove-favorite-btn">Remove from favorite\n                                    <svg width=\'16\' height=\'16\'><use href=""></use>\n                    </svg></span>\n                          </button>\n                    </div>\n                    <h3 class="gallery__header">').concat(n,'</h3>\n                    <p class="gallery__text">').concat(r,'</p>\n                    <div class="gallery__item-bottom_wrap">\n                        <span class="gallery__date">').concat(l,'</span>\n                        <a href="').concat(t,'" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>\n                    </div>\n                </article>\n             </li>')}o.favoritesInLocalStorage.map((function(e){l(t.refs.galleryList,s(e))})),
//!!!!Remove favorite ---------------------------------------------------------------RESTORE
console.log(o.favoritesInLocalStorage),null!==o.favoritesInLocalStorage&&o.favoritesInLocalStorage!==[]||console.log("error")}}();
//# sourceMappingURL=favorite.87295446.js.map
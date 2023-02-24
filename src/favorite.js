// import './js/functions/mqHandler';
import { mqHandler } from './js/functions/mqHandler';
import './js/js-header/dark-mode';
import './js/js-header/mobile-menu';
import './js/js-header/nav-current';

window.addEventListener('DOMContentLoaded', event => mqHandler());

import { ICON_HEART } from './js/functions/markup';

import { refs } from './js/refs';
import {
  favoritesInLocalStorage,
  favoriteGalleryList,
} from './js/localStorageFavorite';

// console.log(favoritesInLocalStorage);

refs.errorFind.classList.remove('notfind-part-hidden');

if (window.location.pathname === '/favorite.html') {
  function renderFavorites(element, constMarkup) {
    refs.errorFind.classList.add('notfind-part-hidden');
    element.insertAdjacentHTML('beforeend', constMarkup);
  }

  function createMarkupFav({
    title,
    img,
    description,
    source,
    category,
    date,
  }) {
    return `<li class="gallery__item">
    <article class="gallery__article">
              <div class="gallery__thumb"> <p class="gallery__category">${category}</p>
                <img class="gallery__img" src="${img}" alt=""/>
                 <button type="button" class="gallery__favorite__btn ">
                         <span class="favorite__btn-span add-favorite-btn is-hidden">Add to favorite
                           <svg width='16' height='16' viewBox="0 0 37 32">
<path fill="none" stroke="#4440f7" style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.667 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>
                    </svg> </span>
                    <span class="favorite__btn-span remove-favorite-btn">Remove from favorite
                                    <svg width='16' height='16' viewBox="0 0 37 32">
<path fill="#4b48da" style="fill: var(--color1, #4b48da)" d="M9.778 0c-4.908 0-8.889 3.94-8.889 8.8 0 3.924 1.556 13.236 16.868 22.649 0.274 0.167 0.589 0.255 0.91 0.255s0.636-0.088 0.91-0.255c15.312-9.413 16.867-18.725 16.867-22.649 0-4.86-3.98-8.8-8.889-8.8s-8.889 5.333-8.889 5.333-3.98-5.333-8.889-5.333z"></path>
          </svg></span>
                          </button>
                    </div>
                    <h3 class="gallery__header">${title}</h3>
                    <p class="gallery__text">${description}</p>
                    <div class="gallery__item-bottom_wrap">
                        <span class="gallery__date">${date}</span>
                        <a href="${source}" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>
                    </div>
                </article>
             </li>`;
  }

  favoritesInLocalStorage.map(el => {
    renderFavorites(favoriteGalleryList, createMarkupFav(el));
  });

  //!!!!Remove favorite ---------------------------------------------------------------RESTORE
  if (window.location.pathname === '/favorite.html') {
    favoriteGalleryList.addEventListener('click', onRemoveFavoriteBtn);
  }

  console.log(favoritesInLocalStorage);

  if (favoritesInLocalStorage === null || favoritesInLocalStorage === []) {
    console.log('error');
  }

  function onRemoveFavoriteBtn(e) {
    const removeBtn = e.target.closest(`.remove-favorite-btn`);
    const addBtn = removeBtn.parentNode.childNodes[1];
    console.log();

    const title =
      removeBtn.parentNode.parentNode.parentNode.childNodes[3].textContent;

    if (!removeBtn) return;
    if (!favoritesInLocalStorage) return;

    if (!removeBtn.classList.contains('is-hidden')) {
      removeBtn.classList.add('is-hidden');
      addBtn.classList.remove('is-hidden');
    }

    const indexInLocalStorage = favoritesInLocalStorage.findIndex(
      e => e.title === title
    );

    console.log(title, indexInLocalStorage);

    // localStorage.removeItem('favoriteNews');
    favoritesInLocalStorage.splice(indexInLocalStorage, 1);

    localStorage.setItem(
      'favoritesNews',
      JSON.stringify(favoritesInLocalStorage)
    );

    favoriteGalleryList.innerHTML = '';
    // refs.errorFind.classList.remove('notfind-part-hidden');

    favoritesInLocalStorage.map(el => {
      renderFavorites(favoriteGalleryList, createMarkupFav(el));
    });
  }
}

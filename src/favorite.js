import { refs } from './js/refs';
import { favoritesInLocalStorage } from './js/localStorageFavorite';
// console.log(favoritesInLocalStorage);
if (
  window.location.pathname === '/favorite.html'
) { 
function renderFavorites(element, constMarkup) {
  element.insertAdjacentHTML('beforeend', constMarkup);
}

function createMarkupFav({ title, img, description, source, category, date }) {
  return `<li class="gallery__item">
    <article class="gallery__article">
              <div class="gallery__thumb"> <p class="gallery__category">${category}</p>
                <img class="gallery__img" src="${img}" alt=""/>
                 <button type="button" class="gallery__favorite__btn ">
                         <span class="favorite__btn-span add-favorite-btn is-hidden">Add to favorite
                           <svg width='16' height='16'><use href="}"></use>
                    </svg> </span>
                    <span class="favorite__btn-span remove-favorite-btn">Remove from favorite
                                    <svg width='16' height='16'><use href=""></use>
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
  renderFavorites(refs.galleryList, createMarkupFav(el));
});

//!!!!Remove favorite
if (window.location.pathname === '/favorite.html') {
  refs.galleryList.addEventListener('click', onRemoveFavoriteBtn);
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

  refs.galleryList.innerHTML = '';

  favoritesInLocalStorage.map(el => {
    renderFavorites(refs.galleryList, createMarkupFav(el));
  });
}
}
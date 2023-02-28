

import { refs } from './refs';
import onResize from './resize';
let favoritesInLocalStorage = [];
const favoriteGalleryList = document.querySelector('.gallery__list');
// document.addEventListener('DOMContentLoaded', addListener);
//  function addListener(e) {
//    refs.galleryList.refs.galleryList.forEach(list => list.addEventListener('click', onBtnFavoriteClick))
//    ;
// }
// if (window.location.pathname === '/favorite.html') {
   favoriteGalleryList.addEventListener('click', onBtnFavoriteClick);
  // }
checkFavorite();
function checkFavorite() {
  if (JSON.parse(localStorage.getItem('favoritesNews')) === null) {
    favoritesInLocalStorage = [];
    return;
  }
  favoritesInLocalStorage = JSON.parse(localStorage.getItem('favoritesNews'));
}
function onBtnFavoriteClick(e) {
  console.log('onBtnFavoriteClick', e.target.nodeName);
  const btn = e.target.closest(`.gallery__favorite__btn`);
  const addBtn = btn.childNodes[1];
  const removeBtn = btn.childNodes[3];
  if (!btn) return;
  console.log(removeBtn.childNodes);
  checkFavorite();
  // let title = btn.parentNode.parentNode.childNodes[3].textContent;
  // console.log(title);
  if (removeBtn.classList.contains('is-hidden')) {
    addBtn.classList.add('is-hidden');
    removeBtn.classList.remove('is-hidden');
    removeBtn.childNodes[1].style.fill = '#4440F7';
    addToFavorite(btn);
    return;
  }
  localStorage.setItem(
    'favoritesNews',
    JSON.stringify(favoritesInLocalStorage)
  );
}
function addToFavorite(btn) {
  const favoriteData = {
    title: btn.parentNode.parentNode.childNodes[3].textContent,
    img: btn.parentNode.childNodes[3].attributes.src.nodeValue,
    category: btn.parentNode.childNodes[1].innerText,
    description: btn.parentNode.parentNode.childNodes[5].textContent,
    date: btn.parentNode.parentNode.lastElementChild.children[0].textContent,
    favorite: 'true',
    source:
      btn.parentNode.parentNode.lastElementChild.children[1].attributes[0]
        .value,
  };
  for (let i = 0; i < favoritesInLocalStorage.length; i += 1) {
    if (favoritesInLocalStorage[i].title === favoriteData.title) return;
  }
  favoritesInLocalStorage.push(favoriteData);
  localStorage.setItem(
    'favoritesNews',
    JSON.stringify(favoritesInLocalStorage)
  );
}
export { favoritesInLocalStorage, favoriteGalleryList };

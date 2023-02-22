import { refs } from './refs';
import onResize from './resize';

let favoritesInLocalStorage = [];

// refs.galleryList.addEventListener('click', onBtnFavoriteClick);

function checkFavorite() {
  if (JSON.parse(localStorage.getItem('favoritesNews')) === null) {
    favoritesInLocalStorage = [];
    return;
  }
  favoritesInLocalStorage = JSON.parse(localStorage.getItem('favoritesNews'));
}

checkFavorite();

function onBtnFavoriteClick(e) {
  console.log('onBtnFavoriteClick',e.target.nodeName);
  const btn = e.target.closest(`.gallery__favorite__btn`);
  const addBtn = btn.childNodes[1];
  const removeBtn = btn.childNodes[3];
  if (!btn) return;
  // console.log(addBtn);
  checkFavorite();
  // let title = btn.parentNode.parentNode.childNodes[3].textContent;
  // console.log(title);
  if (removeBtn.classList.contains('is-hidden')) {
    addBtn.classList.add('is-hidden');
    removeBtn.classList.remove('is-hidden');
    addToFavorite(btn);
    return;
  }

  // for (let i = 0; i < favoritesInLocalStorage.length; i += 1) {
  //   if (favoritesInLocalStorage[i].title === title) {
  //     favoritesInLocalStorage.splice(i, 1);
  //   }
  // }
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
  console.log(favoritesInLocalStorage);
}

export { favoritesInLocalStorage };

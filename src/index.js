import { refs } from './js/refs';
import onResize from './js/resize';
import { mqHandler } from './js/functions/mqHandler';
import getCatagories from './js/filter';
import './js/js-header/dark-mode';
import './js/js-header/mobile-menu';
import './js/js-header/nav-current';
// import './js/js-read/read';
// import './js/localStorageFavorite';
import { toLS } from './js/functions/saveToLocalStorage';
import { calendar } from './js/calendar';

import { onBtnFavoriteClick } from '../src/js/localStorageFavorite';



if (
  window.location.pathname === '/favorite.html' ||
  window.location.pathname === '/read.html'
) {
  window.addEventListener('DOMContentLoaded', event => mqHandler());
}
if (
  window.location.pathname === '/' ||
  window.location.pathname === '/index.html'
) {
}

refs.contentContainer.forEach(container =>
  container.addEventListener('click', toLS)
);


('REF', refs.favoritesContainer);


refs.contentContainer.forEach(container => container.addEventListener('click', toLS));



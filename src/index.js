import onResize from './js/resize';
import { mqHandler } from './js/functions/mqHandler';
import getCatagories from './js/filter';
import './js/js-header/dark-mode';
import './js/js-header/mobile-menu';
import './js/js-read/read';
import './js/localStorageFavorite';
import { toLS } from './js/functions/saveToLocalStorage';
// import './js/functions/eventLiCard';
// import { calendar } from './js/calendar';

import { refs } from './js/refs';

if (
  window.location.pathname === '/favorite.html' ||
  window.location.pathname === '/read.html'
) {
  window.addEventListener('DOMContentLoaded', event => mqHandler());
}

console.log(window.location);
if (
  window.location.pathname === '/' ||
  window.location.pathname === '/index.html'
) {
  refs.galleryList.addEventListener('click', toLS);
}

console.dir(document);

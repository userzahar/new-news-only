import onResize from './js/resize';
import { mqHandler } from './js/functions/mqHandler';
import getCatagories from './js/filter';
import './js/js-header/dark-mode';
import './js/js-header/mobile-menu';
// import './js/js-read/read';
import './js/localStorageFavorite';

// import './js/functions/eventLiCard';
import { calendar } from './js/calendar';

import { refs } from './js/refs';

if (
  window.location.pathname === '/favorite.html' ||
  window.location.pathname === '/read.html'
) {
  window.addEventListener('DOMContentLoaded', event => mqHandler());
}

console.log(window.location);

refs.galleryList.addEventListener('click', toLS);
let readNews;
let fromLS = localStorage.getItem('read-news');
if (fromLS) {
  readNews = JSON.parse(fromLS);
} else readNews = [];

console.log('ReadNews', readNews);
// readNews = readNews ? readNews.split('},') : [];
let count = 0;

// if(readNews){
// readNews = JSON.parse(readData)
// }

function toLS(e) {
  console.log(e.target.nodeName);
  if (e.target.nodeName !== 'A') {
    return;
  }
  count += 1;
  const readObj = {
    alt: e.target.parentNode.parentNode.childNodes[1].children[1].alt,
    header: e.target.parentNode.parentNode.childNodes[3].textContent,
    src: e.target.parentNode.parentNode.childNodes[1].children[1].src,
    text: e.target.parentNode.parentNode.childNodes[5].textContent,
    separator: 'separator',
  };
  console.log(
    'ALT',
    e.target.parentNode.parentNode.childNodes[1].children[1].alt
  );
  console.log('readObj', readObj);
  readNews.push(readObj);
  console.log('readNews after push', readNews);
  const LSReadNewsJSON = JSON.stringify(readNews);

  localStorage.setItem('read-news', LSReadNewsJSON);
}

console.dir(document);


import { mqHandler } from './functions/mqHandler';
import { refs } from './refs';

import { fetchNews } from './functions/fetchNews';
import { createMarkup } from './functions/markup';
import { clearMarkup } from './functions/markup';
import { normalizePop } from './functions/markup';
import { normalizeSrc } from './functions/markup';
import { markData } from './functions/markup';
// import {itemsPerPage} from './functions/markup';
import { page } from './functions/markup';
// import { addToLocalStorate } from './js-read/read'

export let itemsPerPage = 8;
export let totalPages = 0;
if (
  window.location.pathname === '/' ||
  window.location.pathname === '/index.html'
) {
const formRef = document.querySelector('.search-field');
const inputRef = document.querySelector('#search-field__input');

formRef.addEventListener('submit', onSubmit);

  inputRef.addEventListener('input', createReq);


fetchNews('/svc/mostpopular/v2/viewed/1.json', {})
  .then(data => {
    if (window.innerWidth >= 1280) {
      itemsPerPage = 8;
    }
    if (window.innerWidth < 1280 && window.innerWidth >= 780) {
      itemsPerPage = 7;
    }
    if (window.innerWidth < 768) {
      itemsPerPage = 4;
    }
    totalItems = data.results.length;
    totalPages = Math.ceil(data.results.length / itemsPerPage);

    normalizePop(data.results);
    // console.log(page);
    createMarkup(markData, page);

    // addToLocalStorate();
    // Do something with the data
  })
  .catch(error => {
    console.error(error);
    // Handle the error
  });

function onSearch(inputData) {
  fetchNews('/svc/search/v2/articlesearch.json', {
    q: inputData,
    page: '1',
  }).then(data => {
    totalItems = data.response.docs.length;

    totalPages = Math.ceil(data.response.docs.length / itemsPerPage);
    refs.errorFind.classList.add('notfind-part-hidden');
    // console.log(totalItems);
    if (data.response.docs.length === 0) {
      // console.log('Empty');
      refs.errorFind.classList.remove('notfind-part-hidden');
      galleryСontainer.innerHTML = '';
    }
    normalizeSrc(data.response.docs);
    createMarkup(markData, page);
  });
}

// onSearch('ukraine');

let searchReq = '';

function createReq(e) {
  searchReq = e.target.value.trim();
  // console.log(searchReq);
}
function onSubmit(e) {
  e.preventDefault();
  clearMarkup();
  onSearch(searchReq);
}
}
// export function fetchSizer(size) {

//   if (size === 'desktop') {
//     console.log('desk')
//     // clearMarkup();
//     // createMarkup(markData, page);

//   } else if (size === 'tablet') {
//     console.log('tab')
//     // clearMarkup();
//     // createMarkup(markData, page);
//   } else if (size === 'mobile') {
//     console.log('mobile')
//     // clearMarkup();
//     // createMarkup(markData, page);
//   }

// };

// const encoded = encodeURIComponent('crosswords & games'); //crosswords%20&%20games

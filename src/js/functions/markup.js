import { initPagination } from '../pagination';
import { totalPages } from '../news-page';
import { mqHandler } from './mqHandler';
import { searchType } from '../news-page';
import { weather } from '../weather';

// import { itemsPerPage } from '../news-page';
import { weather } from '../weather';
let itemsPerPage = 8;
let srartIndex = 0;
let endIndex = 0;
let weatherPos = 0;
let pagBtnQty = 5;

let page = 1;
export { page };

let markData = {};
export { markData };
const paginationContainer = document.getElementById('pagination');
const emptyCard = `<li class="gallery__item">${weather}</li>`;
export const ICON_HEART = '/new-news-only/sprite.50c1db32.svg#icon-heart';
const galleryRef = document.querySelector('.gallery__list');

// const mql = window.matchMedia('(min-width: 1280px)');
// function screenChange(e) {
//   if (e.matches) {
//     weatherPos = 2;
//     clearMarkup();
//     createMarkup(markData, page);
//     console.log(weatherPos);
//     console.log('bolshe 1280')
//   } else {
//     weatherPos = 1;
//     clearMarkup();
//     createMarkup(markData, page);
//     console.log(weatherPos);
//     console.log('menshe 1280')
//   }
// }
// screenChange(mql);
// mql.addEventListener('change', screenChange);

function createMarkup(arr, page) {
  if (window.innerWidth >= 1280) {
    weatherPos = 2;
    if (searchType === 'popular') {
      srartIndex = (page - 1) * itemsPerPage;
      endIndex = srartIndex + itemsPerPage;
    }
    if (searchType === 'word') {
    }
    srartIndex = (page - 1) * itemsPerPage;
    endIndex = srartIndex + itemsPerPage;
  }
  if (window.innerWidth < 1280 && window.innerWidth >= 780) {
    weatherPos = 1;
    itemsPerPage = 7;
    srartIndex = (page - 1) * itemsPerPage;
    endIndex = srartIndex + itemsPerPage;
  }
  if (window.innerWidth < 768) {
    weatherPos = 0;
    itemsPerPage = 4;
    srartIndex = (page - 1) * itemsPerPage;
    endIndex = srartIndex + itemsPerPage;
    pagBtnQty = 3;
  }

  initPagination(totalPages, pagBtnQty);

  const markup = arr.map(el => {
    return `<li class="gallery__item">
    <article class="gallery__article">
              <div class="gallery__thumb"> <p class="gallery__category">${el.category}</p>
                <img class="gallery__img" src="${el.image}" alt="${el.alt}"/>
                 <button type="button" class="gallery__favorite__btn ">
                         <span class="favorite__btn-span">Add to favorite 
                           <svg width='16' height='16' viewBox="0 0 37 32">
<path fill="none" stroke="#4440f7" style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.667 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>
                    </svg> </span>
                    <span class="favorite__btn-span remove-btn is-hidden">Remove from favorite
                                    <svg width='16' height='16' viewBox="0 0 37 32">
<path fill="#4b48da" style="fill: var(--color1, #4b48da)" d="M9.778 0c-4.908 0-8.889 3.94-8.889 8.8 0 3.924 1.556 13.236 16.868 22.649 0.274 0.167 0.589 0.255 0.91 0.255s0.636-0.088 0.91-0.255c15.312-9.413 16.867-18.725 16.867-22.649 0-4.86-3.98-8.8-8.889-8.8s-8.889 5.333-8.889 5.333-3.98-5.333-8.889-5.333z"></path>
          </svg></span>
                          </button>         
                    </div>
                    <h3 class="gallery__header">${el.title}</h3>
                    <p class="gallery__text">${el.descr}</p>
                    <div class="gallery__item-bottom_wrap">
                        <span class="gallery__date">${el.date}</span>
                        <a href="${el.source}" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>
                    </div>
                </article>

             </li>`
    });
    const pageMarkup = markup.slice(srartIndex, endIndex);
    // console.log(pageMarkup);
    const emptyCard = `<li class="gallery__item">${weather}</li>`;
    pageMarkup.splice(weatherPos, 0, emptyCard);
    const finishedMkp = pageMarkup.join('');
    // console.log(finishedMkp);
    // console.log("BEFORE");
    galleryRef.insertAdjacentHTML('beforeend', finishedMkp);
    mqHandler(); //додана функція для адаптивного відображення.
  }
  export {createMarkup};


function normalizePop(feed) {
  const marks = feed.map(el => {
    function checkoutDescr() {
      if (el.abstract.length > 120) {
        return el.abstract.slice(0, 119) + '...';
      }
      return el.abstract;
    }
    const descr = checkoutDescr();
    const dateFormat = new Date(el.published_date);
    const date = new Intl.DateTimeFormat().format(dateFormat);
    function ckeckoutTit() {
      if (el.title.length > 50) {
        return el.title.slice(0, 49) + '...';
      }
      return el.title;
    }
    const title = ckeckoutTit();
    // console.log(title.length);
    const source = el.url;
    function checkoutImg() {
      if (el.media.length === 0) {
        return 'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg';
      }
      return el.media[0]['media-metadata'][2].url;
    }
    const image = checkoutImg();
    function checkoutAlt() {
      if (el.media.length === 0) {
        return 'Image is no avalible';
      }
      return el.media[0].caption;
    }
    const alt = checkoutAlt();
    // console.log(alt);
    // console.log(image);
    const category = el.section;

    return { descr, date, title, source, image, alt, category };
  });
  // console.log(marks);
  markData = marks;
  // console.log(markData);
  return markData;
}

export { normalizePop };

function clearMarkup() {
  galleryRef.innerHTML = '';
}

export { clearMarkup };

function normalizeSrc(feed) {
  const marks = feed.map(el => {
    function checkoutDescr() {
      if (el.abstract.length > 120) {
        return el.abstract.slice(0, 119) + '...';
      }
      return el.abstract;
    }
    const descr = checkoutDescr();
    const dateFormat = new Date(el.pub_date);
    const date = new Intl.DateTimeFormat().format(dateFormat);
    function ckeckoutTit() {
      if (el.headline.main.length > 50) {
        return el.headline.main.slice(0, 49) + '...';
      }
      return el.headline.main;
    }
    const title = ckeckoutTit();
    const source = el.web_url;
    const imagePart = el.multimedia;

    function checkoutImg() {
      if (imagePart.length === 0) {
        return 'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg';
      }
      return `https://static01.nyt.com/${imagePart[0].url}`;
    }
    const image = checkoutImg();
    const alt = 'New`s image';
    const category = el.section_name;
    // console.log(image);
    return { descr, date, title, source, image, alt, category };
  });
  // console.log(marks);
  markData = marks;
  return markData;
}

export { normalizeSrc };

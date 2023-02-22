import { refs } from './refs';
import {initPagination} from './pagination';
import { createMarkup } from './functions/markup';
import {clearMarkup} from './functions/markup';
// import {fetchNews} from './functions/fetchNews';
// import {itemsPerPage} from './functions/markup';
// import { page } from './functions/markup';

let markData = {};

if (
  window.location.pathname === '/' ||
  window.location.pathname === '/index.html'
) {
  const getCatagories = fetchCatagories();
  let lastClickedFilterBtn = null;
  
  refs.btnCatagories.addEventListener('click', onBtnCatagoriesClick);
  refs.catagoriesItem.addEventListener('click', selectedCatagory);
  refs.listOfCatagories.addEventListener('click', selectedCatagory);
  function onBtnCatagoriesClick(e) {
    e.stopPropagation();
    const expanded =
      refs.btnCatagories.getAttribute('aria-expanded') === 'true' || false;
    refs.btnCatagories.classList.toggle('is-open');
    refs.btnCatagories.setAttribute('aria-expanded', !expanded);
    refs.btnCatagories.classList.toggle('btn-color');
    refs.listOfCatagories.classList.toggle('is-open');
    console.log('onclick');
    const listner = () => {
      console.log('inlistener');
      if (refs.btnCatagories.classList.contains('btn-color')) {
        refs.btnCatagories.classList.remove('btn-color');
      }
      if (refs.btnCatagories.getAttribute('aria-expanded') === 'true') {
        refs.btnCatagories.setAttribute('aria-expanded', false);
      }
      if (refs.listOfCatagories.classList.contains('is-open')) {
        refs.listOfCatagories.classList.remove('is-open');
      }
      if (refs.btnCatagories.classList.contains('is-open')) {
        refs.btnCatagories.classList.remove('is-open');
      }
      window.removeEventListener('click', listner);
    };
    window.addEventListener('click', listner);
  }
  function fetchCatagories() {
    return fetch(
      'https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=HunERBoFJkGno2ChxwL9g20UbJbd8EGL'
    )
      .then(res => res.json())
      .then(data => data.results);
  }
  function categoriesForMobile() {
    refs.catagoriesItem.innerHTML = '';
    getCatagories.then(results => {
      const markUp = results.reduce(
        (markUp, result) => markUp + createListOfSections(result),
        ''
      );
      refs.name.textContent = 'Categories';
      refs.listOfCatagories.innerHTML = markUp;
    });
  }
  function createListOfSections({ section }) {
    return `<li class='catagories__item'><button data-name="${section}" class="catagory__btn">${section}</button></li>`;
  }
  function categoriesForTablet() {
    refs.catagoriesItem.innerHTML = '';
    getCatagories.then(results => {
      const [first, second, third, forth, ...rest] = results;
      const markUp = `
    <li class='catagories__item-tab'><button type="button" data-name="${first.section}" class="catagory__btn-tab">${first.section}</button></li>
    <li class='catagories__item-tab'><button type="button" data-name="${second.section}" class="catagory__btn-tab">${second.section}</button></li>
    <li class='catagories__item-tab'><button type="button" data-name="${third.section}" class="catagory__btn-tab">${third.section}</button></li>
    <li class='catagories__item-tab'><button type="button" data-name="${forth.section}" class="catagory__btn-tab">${forth.section}</button></li>
    `;
      const list = `${rest
        .map(
          item =>
            ` <button type="button" data-name="${item.section}" class="catagory__btn-list-tab">${item.section}</button>`
        )
        .join('')}`;
      refs.name.textContent = 'Others';
      refs.catagoriesItem.insertAdjacentHTML('afterbegin', markUp);
      refs.listOfCatagories.innerHTML = list;
    });
  }
  function categoriesForDesktop() {
    refs.catagoriesItem.innerHTML = '';
    getCatagories.then(results => {
      const [first, second, third, forth, fifth, sixth, ...rest] = results;
      const markUp = `
    <li class='catagories__item-des'><button type="button" data-name="${first.section}" class="catagory__btn-tab">${first.section}</button></li>
    <li class='catagories__item-des'><button type="button" data-name="${second.section}" class="catagory__btn-tab">${second.section}</button></li>
    <li class='catagories__item-des'><button type="button" data-name="${third.section}" class="catagory__btn-tab">${third.section}</button></li>
    <li class='catagories__item-des'><button type="button" data-name="${forth.section}" class="catagory__btn-tab">${forth.section}</button></li>
    <li class='catagories__item-des'><button type="button" data-name="${fifth.section}" class="catagory__btn-tab">${fifth.section}</button></li>
     <li class='catagories__item-des'><button type="button" data-name="${sixth.section}" class="catagory__btn-tab">${sixth.section}</button></li>
     `;
      const list = `${rest
        .map(
          item =>
            `<button type="button" data-name="${item.section}" class="catagory__btn-list-tab">${item.section}</button>
          `
        )
        .join('')}`;
      refs.name.textContent = 'Others';
      refs.catagoriesItem.insertAdjacentHTML('afterbegin', markUp);
      refs.listOfCatagories.innerHTML = list;
    });
  }

  const apiKey = 'TSw2QdOoFucel7ybh9h7kC4obHmkxxGl';

  async function selectedCatagory(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
      return;
    }
    const selectedCatagory = evt.target.dataset.name;
    const button = evt.target;
    if (lastClickedFilterBtn) {
      lastClickedFilterBtn.classList.remove('btn-color');
    }
    button.classList.add('btn-color');
    lastClickedFilterBtn = button;
    const encoded = encodeURIComponent(selectedCatagory);
    // console.log(button);

    const results = await fetchNewsByCategory(encoded, apiKey);
    if (window.innerWidth >= 1280) {
      itemsPerPage = 8;
    }
    if (window.innerWidth < 1280 && window.innerWidth >= 780) {
      itemsPerPage = 7;
    }
    if (window.innerWidth < 768) {
      itemsPerPage = 4;
    }
    totalItems = results.results.length;
    totalPages = results.num_results;

    arrForMarkup = results.results;
    // console.log(arrForMarkup);
    normalizePop(arrForMarkup);
    clearMarkup();
    createMarkup(markDataNew, 1);
  }
}
async function fetchNewsByCategory(section, apiKey) {
  const url = `https://api.nytimes.com/svc/news/v3/content/all/${section}.json?&api-key=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch data from ${url}`);
  }
}
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
      if (el.multimedia === null) {
        return 'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg';
      }
      return el.multimedia[2].url;
    }
    const image = checkoutImg();
    function checkoutAlt() {
      if (el.multimedia === null) {
        return 'Image is no avalible';
      }
      return el.multimedia[0].caption;
    }
    const alt = checkoutAlt();
    const category = el.section;

    return { descr, date, title, source, image, alt, category };
  });

  markDataNew = marks;

  return markDataNew;
}
export { categoriesForMobile, categoriesForTablet, categoriesForDesktop };

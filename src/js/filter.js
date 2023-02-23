import { refs } from './refs';
//import { initPagination } from './pagination';
//import { createMarkup } from './functions/markup';
//import { clearMarkup } from './functions/markup';
//import { mqHandler } from './functions/mqHandler';
//import { fetchNews } from './functions/fetchNews';
//import { itemsPerPage } from './functions/markup';
//import { page } from './functions/markup';
export {getSize}

 function getSize(scr) {
  let scrView = scr;
   if (scrView === 'mobile') {
    renderForMobile();
  }
  if  (scrView === 'tablet') {
    renderForTablet();
  }
  if (scrView === 'desktop') {
    renderForDesktop();
  }
}

if (
  window.location.pathname === '/' ||
  window.location.pathname === '/index.html'
) 



let markData = {};

const apiKey = 'TSw2QdOoFucel7ybh9h7kC4obHmkxxGl';

function fetchCatagories() {
  return fetch(
    'https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=HunERBoFJkGno2ChxwL9g20UbJbd8EGL'
  )
    .then(res => res.json())
    .then(data => data.results);
}

class CategoriesComponent {
  #state = {
    categories: [],
    isExpanded: false,
    lastClickedFilterBtn: null,
  };

  constructor() {
    refs.btnCatagories.addEventListener(
      'click',
      this.onBtnCatagoriesClick.bind(this)
    );
    refs.catagoriesItem.addEventListener(
      'click',
      this.selectedCatagory.bind(this)
    );
    refs.listOfCatagories.addEventListener(
      'click',
      this.selectedCatagory.bind(this)
    );
  }

  setCategories(categories) {
    this.#state.categories = categories;
  }

  onBtnCatagoriesClick() {
    this.#state.isExpanded = true;
    refs.btnCatagories.classList.add('is-open');
    refs.btnCatagories.classList.add('btn-color');
    refs.btnCatagories.setAttribute('aria-expanded', true);
    refs.listOfCatagories.classList.add('is-open');


    const listner = () => {
      refs.btnCatagories.classList.remove('is-open');
      refs.btnCatagories.classList.remove('btn-color');
      refs.btnCatagories.setAttribute('aria-expanded', false);
      refs.listOfCatagories.classList.remove('is-open');
      window.removeEventListener('click', listner);
    };

    window.removeEventListener('click', listner);
    window.addEventListener('click', listner, true);
  }

  renderForMobile() {

    refs.catagoriesItem.innerHTML = '';

    const markUp = this.#state.categories.reduce((markUp, category) => {
      return (
        markUp +
        `<li class='catagories__item'><button data-name="${category.section}" class="catagory__btn">${category.section}</button></li>`
      );

    }, '');

    refs.othersBtnName.textContent = 'Categories';
    refs.listOfCatagories.innerHTML = markUp;
  }

  renderForTablet() {
    if (this.#state.categories.length === 0) {
      return;
    }

    const [first, second, third, forth, ...rest] = this.#state.categories;

    const markUp = `
      <li class='catagories__item-tab'><button type="button" data-name="${
        first.section
      }" class="catagory__btn-tab ${this.addBtnColorIfIsSelected(
      first.section
    )}">${first.section}</button></li>
      <li class='catagories__item-tab'><button type="button" data-name="${
        second.section
      }" class="catagory__btn-tab ${this.addBtnColorIfIsSelected(
      second.section
    )}">${second.section}</button></li>
      <li class='catagories__item-tab'><button type="button" data-name="${
        third.section
      }" class="catagory__btn-tab ${this.addBtnColorIfIsSelected(
      third.section
    )}">${third.section}</button></li>
      <li class='catagories__item-tab'><button type="button" data-name="${
        forth.section
      }" class="catagory__btn-tab ${this.addBtnColorIfIsSelected(
      forth.section
    )}">${forth.section}</button></li>
      `;

    const list = rest
      .map(item => {
        return ` <button type="button" data-name="${item.section}" class="catagory__btn-list-tab">${item.section}</button>`;
      })
      .join('');

    refs.othersBtnName.textContent = 'Others';
    refs.catagoriesItem.innerHTML = markUp;
    refs.listOfCatagories.innerHTML = list;
  }

  renderForDesktop() {
    if (this.#state.categories.length === 0) {
      return;
    }

    const [first, second, third, forth, fifth, sixth, ...rest] =
      this.#state.categories;

    const markUp = `
        <li class='catagories__item-des'><button type="button" data-name="${
          first.section
        }" class="catagory__btn-tab ${this.addBtnColorIfIsSelected(
      first.section
    )}">${first.section}</button></li>
        <li class='catagories__item-des'><button type="button" data-name="${
          second.section
        }" class="catagory__btn-tab ${this.addBtnColorIfIsSelected(
      second.section
    )}">${second.section}</button></li>
        <li class='catagories__item-des'><button type="button" data-name="${
          third.section
        }" class="catagory__btn-tab ${this.addBtnColorIfIsSelected(
      third.section
    )}">${third.section}</button></li>
        <li class='catagories__item-des'><button type="button" data-name="${
          forth.section
        }" class="catagory__btn-tab ${this.addBtnColorIfIsSelected(
      forth.section
    )}">${forth.section}</button></li>
        <li class='catagories__item-des'><button type="button" data-name="${
          fifth.section
        }" class="catagory__btn-tab ${this.addBtnColorIfIsSelected(
      fifth.section
    )}">${fifth.section}</button></li>
        <li class='catagories__item-des'><button type="button" data-name="${
          sixth.section
        }" class="catagory__btn-tab ${this.addBtnColorIfIsSelected(
      sixth.section
    )}">${sixth.section}</button></li>

     `;
    const list = rest
      .map(
        item =>
          `<button type="button" data-name="${item.section}" class="catagory__btn-list-tab">${item.section}</button>`
      )
      .join('');

    refs.othersBtnName.textContent = 'Others';
    refs.catagoriesItem.innerHTML = markUp;
    refs.listOfCatagories.innerHTML = list;
  }


  async selectedCatagory(evt) {

    if (evt.target.nodeName !== 'BUTTON') {
      return;
    }
    const selectedCatagory = evt.target.dataset.name;
    const button = evt.target;

    this.#state.lastClickedFilterBtn = button;

    const encoded = encodeURIComponent(selectedCatagory);

    const results = await fetchNewsByCategory(encoded, apiKey);

    normalizePop(results.results);
    clearMarkup();
    createMarkup(markDataNew, 1);
  }

  addBtnColorIfIsSelected(dataName) {
    if (
      dataName === this.#state.lastClickedFilterBtn?.getAttribute('data-name')
    ) {
      return 'btn-color';
    }

    return '';
  }
}

let categoriesComponent = null;

if (
  window.location.pathname === '/' ||
  window.location.pathname === '/index.html'
) {
  categoriesComponent = new CategoriesComponent();
  fetchCatagories().then(categories => {
    categoriesComponent.setCategories(categories);
    mqHandler();
  });
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


export { categoriesComponent };


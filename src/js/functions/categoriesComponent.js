
import { refs } from "../refs";
import { normalizeData } from "../filter";
import { fetchNewsByCategory } from "../filter";

import { createMarkup } from '../functions/markup';
import { clearMarkup } from '../functions/markup';


export default class CategoriesComponent {
  #state = {
    categories: [],
    isExpanded: false,
    lastClickedFilterBtn: null,
  };

  constructor() {
     if (
  (window.location.pathname === '/') ||
  (window.location.pathname === '/index.html')
) {
   
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
const apiKey = 'TSw2QdOoFucel7ybh9h7kC4obHmkxxGl';
    if (evt.target.nodeName !== 'BUTTON') {
      return;
    }
    const selectedCatagory = evt.target.dataset.name;
    const button = evt.target;

    this.#state.lastClickedFilterBtn = button;

    const encoded = encodeURIComponent(selectedCatagory);

    const results = await fetchNewsByCategory(encoded, apiKey);

    normalizeData(results.results);
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


import CategoriesComponent from "./functions/categoriesComponent";
import {refs} from "../js/refs";

import { initPagination } from './pagination';
import { createMarkup } from './functions/markup';
import { clearMarkup } from './functions/markup';
import { mqHandler } from './functions/mqHandler';
import { fetchNews } from './functions/fetchNews';
import { itemsPerPage } from './functions/markup';
import { page } from './functions/markup';

import { normalizePop } from "./functions/markup";
export {getSize}
//  let categoriesComponent = null;
const categoriesComponent = new CategoriesComponent();
if (
  (window.location.pathname === '/') ||
  (window.location.pathname === '/index.html')
) {
  fetchCatagories();
 
} 
// .then(categories => {
//     categoriesComponent.setCategories(categories);
    // mqHandler();
//   });


 function getSize(scr) {
  let scrView = scr;
   if (scrView === 'mobile') {
    categoriesComponent.renderForMobile();
  }
  if  (scrView === 'tablet') {
    categoriesComponent.renderForTablet();
  }
  if (scrView === 'desktop') {
    categoriesComponent.renderForDesktop();
  }
}


let f = {};

const apiKey = 'TSw2QdOoFucel7ybh9h7kC4obHmkxxGl';

  async function fetchCatagories() {
    return fetch(
      'https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=HunERBoFJkGno2ChxwL9g20UbJbd8EGL'
    )
      .then(res => res.json())
      .then(data => data.results).then((categories) => {
        categoriesComponent.setCategories(categories)
      }).then(categories => console.log('fetchCatagories', categories)).catch(error => console.log(error));
  };


export async function fetchNewsByCategory(section, apiKey) {

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

export function normalizeData(feed) {
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



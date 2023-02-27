
import { readNews } from '../functions/saveToLocalStorage';
import { mqHandler } from '../functions/mqHandler';
import { refs } from '../refs';
import { ICON_HEART } from '../functions/markup';
if (window.location.pathname === '/read.html') {
  window.addEventListener('DOMContentLoaded', event => mqHandler());
  window.addEventListener('DOMContentLoaded', event => createDiv(readNews));
  // refs.errorFind.classList.remove('notfind-part-hidden');
  if (readNews.length === 0) {
    refs.readNewsContainer.classList.add('read__news__container__hidden');
     refs.errorFind.classList.remove('notfind-part-hidden');
  }
}
//  refs.errorFind.classList.remove('notfind-part-hidden');
const readingDates = readNews.map(singleArticle => singleArticle.readDate);
function onlyUnique(value, index, array) {
  return readingDates.indexOf(value) === index;
}
function createDiv(readNews) {
  // refs.errorFind.classList.add('notfind-part-hidden');
  let unique = readingDates.filter(onlyUnique);
  const divMarkup = unique
    .map(el => {
      return `<div class = "accordion__container accord parent__box dated=${el.toString()}"><p class = "accordion__label accord__date">${el.toString()}</p><svg class="arrow__icon" width="15" height="9">
  <use href="./images/sprite.svg#icon-arrow-up"></use>
</svg><ul class = "accordion__content gallery__list read__gallery__list"></ul></div>`;
    })
    .join('');
  refs.readNewsContainer.insertAdjacentHTML('beforeend', divMarkup);
  accordeon = document.querySelectorAll('.accord');
  createDailyList(readNews);
  // createMarkupElems();
  mqHandler();
}
function createDailyList(readNewsArray) {
  accordeon.forEach((singleDay, currentIndex) => {
    const dayMarkup = readNewsArray
      .map(el => {
        if (singleDay.innerText === el.readDate) {
          return `<li class="gallery__item">
    <article class="gallery__article">
              <div class="gallery__thumb">
                <img class="gallery__img" src="${el.src}" alt="${el.alt}"/>
                       <button type="button" class="gallery__favorite__btn ">
                         <span class="favorite__btn-span">Add to favorite
                           <svg width='16' height='16'><use href="${ICON_HEART}"></use>
                    </svg> </span>
                    <span class="favorite__btn-span remove-btn is-hidden">Remove from favorite
                                    <svg width='16' height='16'><use href="${ICON_HEART}"></use>
                    </svg></span>
                          </button>
                    </div>
                    <h3 class="gallery__header">${el.header}</h3>
                    <p class="gallery__text">${el.text}</p>
                    <div class="gallery__item-bottom_wrap">
                        <span class="gallery__date">${el.readDate}</span>
                        <a href="${el.link}" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>
                    </div>
                </article>
             </li>`;
        }
      })
      .join('');
    accordeon[currentIndex].lastElementChild.insertAdjacentHTML(
      'beforeend',
      dayMarkup
    );
  });
}
function checks(el) {
  for (let i = 0; i < el; i++) {
    console.log(
      refs.readNewsContainer.children[i].children[1].childElementCount
    );
    let childCounter =
      refs.readNewsContainer.children[i].children[1].childElementCount;
    if (childCounter < 3) {
      lessArr = refs.readNewsContainer.children[i].children[1].children;
      console.log('lessArr', lessArr);
      for (const el of lessArr) {
        el.classList.add('less3');
      }
    }
  }
}
if (window.location.pathname === '/read.html') {
  refs.readNewsContainer.addEventListener('click', openNewsGallery);
  function openNewsGallery(event) {
    if (event.target.nodeName !== 'SPAN') {
      return;
    }
    event.target.classList.toggle('title__date__rotate');
    event.target.nextElementSibling.classList.toggle('gallery__list__open');
  }
}
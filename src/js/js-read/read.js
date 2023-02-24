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
                          <svg width='16' height='16' viewBox="0 0 37 32">
<path fill="none" stroke="#4440f7" style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.667 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>
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


import { refs } from './refs';

export default function onResize(size, toRemove) {
  if (
    window.location.pathname === '/' ||
    window.location.pathname === '/index.html'
  ) {
    for (let sizeRemove of toRemove) {
      refs.othersBtnName.classList.remove(`catagories__btn-name-${sizeRemove}`);
      refs.listOfCatagories.classList.remove(`catagories__list-${sizeRemove}`);
      refs.catagories.classList.remove(`catagories-${sizeRemove}`);
      refs.btnCatagories.classList.remove(`catagories__btn-${sizeRemove}`);
      // refs.calendarText.classList.remove(`calendar__text-${sizeRemove}`);

    }
    refs.listOfCatagories.classList.add(`catagories__list-${size}`);
    refs.catagories.classList.add(`catagories-${size}`);
    refs.othersBtnName.classList.add(`catagories__btn-name-${size}`);
    refs.btnCatagories.classList.add(`catagories__btn-${size}`);

    // refs.calendarText.classList.add(`calendar__text-${size}`);

  }

  refs.galleryList.forEach(list => {
    for (let sizeRemove of toRemove) {
      list.classList.remove(`gallery__list-${sizeRemove}`);
    }
    list.classList.add(`gallery__list-${size}`);
  });

  // if ( window.location.pathname === '/' ||
  //   window.location.pathname === '/index.html') {

  // }

  for (let sizeRemove of toRemove) {
    refs.logo.classList.remove(`logo-${sizeRemove}`);
    refs.navBar.classList.remove(`navbar-${sizeRemove}`);
  }

  refs.headerContainer.forEach(hCont => {
    for (let sizeRemove of toRemove) {
      hCont.classList.remove(`header-container-${sizeRemove}`);
    }
    hCont.classList.add(`header-container-${size}`);
  });
  
  refs.logo.classList.add(`logo-${size}`);
  refs.navBar.classList.add(`navbar-${size}`);

  refs.container.forEach(cont => {
    for (let sizeRemove of toRemove) {
      cont.classList.remove(`container-${sizeRemove}`);
    }
    cont.classList.add(`container-${size}`);
  });
  let item = document.querySelectorAll('.gallery__item');
  item.forEach(singleItem => {
    for (let sizeRemove of toRemove) {
      singleItem.classList.remove(`gallery__item-${sizeRemove}`);
    }
    singleItem.classList.add(`gallery__item-${size}`);
  });
}
import {
  openMenuBtn,
  mobileMenu,
  closeMenuBtn,
  themeContainer,
  seachBtn,
} from './refs-header';

import debounce from 'lodash.debounce';

function toggleMenu() {
  mobileMenu.classList.toggle('open-menu');
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('js-open-menu');
  if (themeContainer.classList.contains('mobile')) {
    themeContainer.classList.remove('mobile');
  } else if (!themeContainer.classList.contains('mobile')) {
    const debouncedThemeContainer = debounce(() => {
      themeContainer.classList.add('mobile');
    }, 100);

    debouncedThemeContainer();
  }

  const scrollLockMethod = !isMenuOpen
    ? 'disableBodyScroll'
    : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);
}

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

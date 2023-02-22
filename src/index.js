import onResize from './js/resize';
import { mqHandler } from './js/functions/mqHandler';
import getCatagories from './js/filter';
import './js/js-header/dark-mode';
import './js/js-header/mobile-menu';
import './js/js-read/read';
import './js/localStorageFavorite';
import { toLS } from './js/functions/saveToLocalStorage';
// import './js/functions/eventLiCard';
import { calendar } from './js/calendar';

import { refs } from './js/refs';
import {onBtnFavoriteClick} from '../src/js/localStorageFavorite'


('REF', refs.favoritesContainer)

refs.contentContainer.forEach(container => container.addEventListener('click', toLS));



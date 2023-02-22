import {createMarkup} from './functions/markup';
import {clearMarkup} from './functions/markup';
import { markData } from './functions/markup';
import { srcPage } from './news-page';
import { normalizeSrc } from './functions/markup';
import { refs } from './refs';
import { searchType } from './news-page';
import { searchReq } from './news-page';
import { onSearch } from './news-page';

const paginationContainer = document.getElementById('pagination');
export function initPagination(totalPages, pagBtnQty) {
  const pagination = new tui.Pagination(paginationContainer, {
    totalItems: totalPages,
    itemsPerPage: 1,
    visiblePages: pagBtnQty,
  });
    pagination.on('beforeMove', event => {
      const currentPage = event.page;
      if (searchType === 'popular') {
        console.log('pop', searchType);
        clearMarkup();
        createMarkup(markData, currentPage);

     } 
      if (searchType === 'word') {
        console.log('wor', searchType);
        clearMarkup();
        onSearch(searchReq, currentPage);
     } 

  });
}
// export {initPagination};
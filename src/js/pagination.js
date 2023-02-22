// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// const gallery = document.querySelector('.gallery');
// const button = document.querySelector('.button');
// button.addEventListener('click', search);
// // const options = {
// //   totalItems: 10,
// //   itemsPerPage: 10,
// //   visiblePages: 20,
// //   page: 1,
// //   centerAlign: false,
// //   firstItemClassName: 'tui-first-child',
// //   lastItemClassName: 'tui-last-child',
// //   template: {
// //     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
// //     currentPage:
// //       '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
// //     moveButton:
// //       '<a href="#" class="tui-page-btn tui-{{type}}">' +
// //       '<span class="tui-ico-{{type}}">{{type}}</span>' +
// //       '</a>',
// //     disabledMoveButton:
// //       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
// //       '<span class="tui-ico-{{type}}">{{type}}</span>' +
// //       '</span>',
// //     moreButton:
// //       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
// //       '<span class="tui-ico-ellip">...</span>' +
// //       '</a>',
// //   },
// // };

// async function search(page) {
//   const pokemon = await fetch(
//     `https://pixabay.com/api/?key=33289628-97fffc14136600725dd3f07c9&q=dog&page=${page}`
//   );
//   const jsonPokemon = await pokemon.json();
//   //   console.log('🚀 ~ jsonPokemon', jsonPokemon);

//   const hits = jsonPokemon.hits;
//   //   console.log('🚀 ~ hits', hits);
//   renderCard(hits, jsonPokemon);
// }

// function renderCard(arrObj, json) {
//   const card = arrObj
//     .map(({ largeImageURL }) => {
//       return `<img src="${largeImageURL}"></img>`;
//     })
//     .join('');
//   const options = {
//     totalItems: json.totalHits,
//     itemsPerPage: json.hits.length,
//     visiblePages: 5,
//   };
//   gallery.innerHTML = card;
//   const pagination = new Pagination('pagination', options);
//   pagination.on('afterMove', evt => {
//     const { page } = evt;
//     // pagination.movePageTo(page);
//     search(page);
//   });
// }

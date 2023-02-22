// const API_KEY = 'qrHaNn2k74FM8RnB6KjeURX3lnCKHKR4';
// const ENP_POINT = 'https://api.nytimes.com';
// const formEl = document.getElementById('form');
// const inputEl = document.getElementById('input');
// const listEl = document.querySelector('.gallery-list');

// let inputValue= '';

// function getFetchByInput(query) {
//   return fetch(`${ENP_POINT}/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`
//   ).then(responce => {
//     if (!responce.ok) {
//       throw new Error(responce.statusText);
//     }
//     return responce.json();
//   });
// }
// formEl.addEventListener('submit', onBtnSubmit);

// function onBtnSubmit(e){
//     e.preventDefault();

//     inputValue = e.currentTarget.search.value.trim();
//     console.log(inputValue);

//     getFetchByInput(inputValue).then((res)=> renderMarkup(res.response.docs))

//     if(res.response.docs === 0){
//         notFindNewsRender();
//     }
// }



// function renderMarkup(){
//     console.log('render card')
// }
console.log('searchjs')

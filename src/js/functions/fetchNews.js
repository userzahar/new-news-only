
const baseUrl = 'https://api.nytimes.com';
const apiKey = 'TSw2QdOoFucel7ybh9h7kC4obHmkxxGl';



async function fetchNews(endpoint, queryParams = {}) {
  const queryString = Object.entries(queryParams)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  const url = `${baseUrl}${endpoint}?${queryString}&api-key=${apiKey}`;
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

export {fetchNews};



// Приклад використання для запиту списку категорій

// fetchNews('/svc/news/v3/content/section-list.json')
//   .then(data => {
//     console.log(data);
//     // Do something with the data
//   })
//   .catch(error => {
//     console.error(error);
//     // Handle the error
//   });



// Приклад використання для запиту статей з категорії world

// fetchNews('/svc/news/v3/content/inyt/world.json')
//   .then(data => {
//     console.log(data);
//     // Do something with the data
//   })
//   .catch(error => {
//     console.error(error);
//     // Handle the error
//   });


// Приклад використання для пошуку статей за запитом "climate change"
//  (можна використати змінну в якій зберігається слова з запитом)
//  також можна вказати номер сторінки в результаті пошуку у влативості page

// fetchNews('/svc/search/v2/articlesearch.json', {
//   q: 'climate change',
//   page: '1',
// })
//   .then(data => {
//     console.log(data);
//     // Do something with the data
//   })
//   .catch(error => {
//     console.error(error);
//     // Handle the error
//   });


// Приклад використання для запиту популярних статей

// fetchNews('/svc/mostpopular/v2/viewed/1.json', {})
//   .then(data => {
//     console.log(data);
//     // Do something with the data
//   })
//   .catch(error => {
//     console.error(error);
//     // Handle the error
//   });

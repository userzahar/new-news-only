
// navigator.geolocation.getCurrentPosition(
//     function(position) {
//         localStorageCheck(position);
//     }
// )
// const load = key => {
//     try {
//       const serializedState = localStorage.getItem(key);
//       return serializedState === null ? undefined : JSON.parse(serializedState);
//     } catch (error) {
//       console.error("Get state error: ", error.message);
//     }
//   };
//   function localStorageCheck(position){
//         if (load === !true) {
//             fetchWeather(position)
//         } 
//         else if(Date.UTC() - load("weather today").data.current.last_updated_epoch > 86400000){
//             fetchWeather(position)
//         }
//         return
// }
// const save = (key, value) => {
//     try {
//       const serializedState = JSON.stringify(value);
//       localStorage.setItem(key, serializedState);
//     } catch (error) {
//       console.error("Set state error: ", error.message);
//     }
//   };
// function fetchWeather(position) {
//     return fetch(`https://api.weatherapi.com/v1/forecast.json?key=be66b75c9aaf490dbaf162029231902&days=8&hour=12&q=${position.coords.latitude}, ${position.coords.longitude}&aqi=no`)
//     .then((res)=> res.json())
//     .then((data) => save("weather today",data))
//     .catch((e) => console.error(e))
// }
// // console.log(load("weather today").data);
// const weatherDegreeTemp = load("weather today").data.current.temp_c;
// const weatherCondition = load("weather today").data.current.condition.text;
// const weatherConditionImage = load("weather today").data.current.condition.icon;
// const weatherLocationCountry = load("weather today").data.location.region;
// // console.log(weatherLocationCountry);
// const d = new Date();
// const y = d.toDateString().split(" ");
// const dayOFWeek = y[0].toString();
// export let weather = `<div class="weather">
// <div class="weather_wrap">
// <p class="weather_degree">${weatherDegreeTemp}&deg</p>
// <div class="weather_part">
// <p class="weather_character gallery__text">${weatherCondition}</p>
// <button type="button" class="weather_location"><p class="weather_country"></p>${weatherLocationCountry}</p></button>
// </div>
// </div>
// <img src="${weatherConditionImage}" alt="weather icon" width="165" height="156" class="weather_image">
// <p class="weather_date">${dayOFWeek}<br>
// ${y[2]} ${y[1]} ${y[3]}</p>
// <button type="button" class="weather_week"><p class="">weather for week</p></button>
// </div>`


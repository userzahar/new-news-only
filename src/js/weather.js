const d = new Date();
const y = d.toDateString().split(" ");
const STORAGE_KEY = "weather-block";
const geoposition = { longitude : null, latitude : null};


checkLocalStorage ()
function checkLocalStorage (){
    const weatherData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (weatherData) {
        console.log("there is something in LS");
        if(Date.UTC() - weatherData.current.last_updated_epoch > 3600000){
            getUserLocation();
            return
        }
        renderMarkupWeather
        return
    }
    console.log("there is nothing in LS");
    getUserLocation()
}

function getUserLocation() {
    navigator.geolocation.watchPosition(function(position) {
        geoposition.longitude = position.coords.longitude;
        geoposition.latitude = position.coords.latitude;
        fetchCityByLocation(geoposition.latitude, geoposition.longitude);
      },
      function(error) {
        if (error.code == error.PERMISSION_DENIED);
          console.log("you denied me :-(");
          fetchNYCity();
      }); 
}

function fetchNYCity(){
    return fetch(`https://api.weatherapi.com/v1/current.json?key=be66b75c9aaf490dbaf162029231902&q=New_York&aqi=no`)
      .then(res => res.json())
      .then((data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data)))
      .catch((error)=>console.log(error))
    }

function fetchCityByLocation(latitude , longitude){
    return fetch(`https://api.weatherapi.com/v1/current.json?key=be66b75c9aaf490dbaf162029231902&q=${latitude},${longitude}&aqi=no`)
        .then(res => res.json())
        .then((data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data)))
        .catch((error)=>console.log(error))
    }

export function renderMarkupWeather() {
// console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))

const weatherData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (weatherData) {
console.log(weatherData);
    const weather = 
`<div class="weather">
<div class="weather_wrap">
<p class="weather_degree">${weatherData.current.temp_c}&deg</p>
<div class="weather_part">
<p class="weather_character gallery__text">${weatherData.current.condition.text}</p>
<button type="button" class="weather_location"><p class="weather_country">${weatherData.location.name}</p></button>
</div>
</div>
<img src="${weatherData.current.condition.icon}" class="weather_image" alt="image of current weather">
<p class="weather_date">${y[0]}<br>
${y[2]} ${y[1]} ${y[3]}</p>
<a href="https://weather.com/weather/tenday/l/New+York+NY+USNY0996:1:US" class="weather_week"><p class="">weather for week</p></a>
</div>`;
return weather}
else {const weather =
`<div class="weather">
<div class="weather_wrap">
<p class="weather_degree">6&deg</p>
<div class="weather_part">
<p class="weather_character gallery__text">Cloudy, rain</p>
<button type="button" class="weather_location"><p class="weather_country">Lviv</p></button>
</div>
</div>
<div class="weather_image"></div>
<p class="weather_date">${y[0]}<br>
${y[2]} ${y[1]} ${y[3]}</p>
<a href="https://www.gismeteo.com/weather-lviv-4949/10-days/" class="weather_week"><p class="">weather for week</p></a>
</div>`;
return weather;}
} 


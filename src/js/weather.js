
navigator.geolocation.getCurrentPosition(
    function(position) { 
        // console.log(position.coords.latitude, position.coords.longitude)
        fetchWeather(position)
    }
)

function fetchWeather(position) {
    return fetch(`https://api.weatherapi.com/v1/current.json?key=be66b75c9aaf490dbaf162029231902&q=${position.coords.latitude}, ${position.coords.longitude}&aqi=no`)
    .then((res)=> res.json())
    .then((data) => data)
    .catch((e) => console.error(e))
}

const d = new Date();
const y = d.toDateString().split(" ");
const dayOFWeek = y[0].toString();
export let weather = `<div class="weather">
<div class="weather_wrap">
<p class="weather_degree">23&deg</p>
<div class="weather_part">
<p class="weather_character gallery__text">Sunny</p>
<button type="button" class="weather_location"><p class="weather_country"></p>West Jakarta</p></button>
</div>
</div>
<div class="weather_image"></div>
<p class="weather_date">${dayOFWeek}<br>
${y[2]} ${y[1]} ${y[3]}</p>
<button type="button" class="weather_week"><p class="">weather for week</p></button>
</div>`


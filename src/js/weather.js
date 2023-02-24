const d = new Date();
const y = d.toDateString().split(" ");
export const weather = `<div class="weather">
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
</div>`

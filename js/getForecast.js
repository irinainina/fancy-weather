import state from './app.js';
import {clearDay, clearNight, cloudy, fog, partlyCloudyDay, partlyCloudyNight, rain, sleet, snow, wind, weatherIcons} from './weatherIcons.js';
import { switchTempF } from './switchTemp.js';

async function getForecast(location, lang) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&lang=${lang}&units=metric&appid=a9a3a62789de80865407c0452e9d1c27`;
  const res = await fetch(url);
  const data = await res.json();
  showForecast(data);
}

function showForecast(data) {
  const nextday = document.querySelectorAll('.nextday');
  nextday.forEach((day, index) => {
    const dayTemperature = day.querySelector('.nextday-temperature');
    const dayIcon = day.querySelector('.nextday-icon'); 
    dayTemperature.textContent = `${switchTempF(data.list[(index+1)*8].main.temp, state.tempScale)}°`;
    dayIcon.innerHTML = weatherIcons(data.list[(index+1)*8].weather[0].id, data.list[(index+1)*8].weather[0].icon);
  });
}

export default getForecast;
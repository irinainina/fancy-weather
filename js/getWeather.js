import state from './app.js';
import {clearDay, clearNight, cloudy, fog, partlyCloudyDay, partlyCloudyNight, rain, sleet, snow, wind, weatherIcons} from './weatherIcons.js';
import { switchTempF } from './switchTemp.js';

async function getWeather(location, lang) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=${lang}&units=metric&appid=a9a3a62789de80865407c0452e9d1c27`;
  const res = await fetch(url);
  const data = await res.json();
  showWeather(data);
}

function showWeather(data) {
  const currentTemperature = document.querySelector('.current-temperature'); 
  const summary = document.querySelector('.summary'); 
  const apparentTemperature = document.querySelector('.apparent-value'); 
  const windSpeed = document.querySelector('.wind-value'); 
  const humidity = document.querySelector('.humidity-value');
  const locationIcon = document.querySelector('.location-icon');
  
  currentTemperature.textContent = switchTempF(data.main.temp, state.tempScale);  
  summary.textContent = data.weather[0].description;
  apparentTemperature.textContent = `${switchTempF(data.main.feels_like, state.tempScale)}°`;
  windSpeed.textContent = data.wind.speed.toFixed(0);
  humidity.textContent = `${data.main.humidity.toFixed(0)}%`;
  locationIcon.innerHTML = weatherIcons(data.weather[0].id, data.weather[0].icon);
}

export default getWeather;
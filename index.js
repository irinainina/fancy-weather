import state from './js/app.js';
import getCurrentLocation from './js/location.js';
import './js/audio.js'
import './js/bgImage.js'
import './js/searchLocation.js';
import './js/switchLang.js';
import './js/switchTemp.js';
import './js/voiceSearch.js';
import getLocalStorageTemp from './js/switchTemp.js';
import getLocalStorageLang from './js/switchLang.js';

window.onload = () => {
  getLocalStorageTemp();
  getLocalStorageLang();
  getCurrentLocation();  
}

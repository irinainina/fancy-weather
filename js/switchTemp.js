import state from './app.js';

const tempBtnF = document.querySelector('.temp-btn-f');
const tempBtnC = document.querySelector('.temp-btn-c');

function switchTempF(tempC, tempScale)  {
  let tempF;
  tempScale === 'C' ? tempF = tempC : tempF = tempC * 9 / 5 + 32;
  return tempF.toFixed(0);
}

function switchTemp(temp, tempScale) {
  let tempRes;
  tempScale === 'C' ? tempRes = (temp - 32) * 5 / 9 : tempRes = temp * 9 / 5 + 32;
  return tempRes.toFixed(0);
}

function showTemp() {
  const nextday = document.querySelectorAll('.nextday');
  nextday.forEach((day) => {
    const dayTemp = day.querySelector('.nextday-temperature');
    const dayTempValue = dayTemp.textContent.slice(0, -1);
    dayTemp.textContent = `${switchTemp(dayTempValue, state.tempScale)}°`;
  });

  const currentTemp = document.querySelector('.current-temperature');
  const currentTempValue = currentTemp.textContent;
  currentTemp.textContent = switchTemp(currentTempValue, state.tempScale);

  const apparentTemp = document.querySelector('.apparent-value');
  const apparentTempValue = apparentTemp.textContent.slice(0, -1);
  apparentTemp.textContent = `${switchTemp(apparentTempValue, state.tempScale)}°`;
}

function switchTempScale() {
  if(state.tempScale === this.dataset.scale) return;
  tempBtnF.classList.remove('temp-btn-active');
  tempBtnC.classList.remove('temp-btn-active');
  this.classList.add('temp-btn-active');
  state.tempScale = this.dataset.scale;
  localStorage.setItem('tempScale', state.tempScale);
  showTemp();
}
tempBtnF.addEventListener('click', switchTempScale);
tempBtnC.addEventListener('click', switchTempScale);

// get temperature scale from localStorage
function getLocalStorageTemp() {
  state.tempScale = localStorage.getItem('tempScale') || 'C';
  console.log(state.tempScale);
  if(state.tempScale !== 'C') {
    tempBtnC.classList.remove('temp-btn-active');
    tempBtnF.classList.add('temp-btn-active');
  } 
}

export default getLocalStorageTemp;
export { switchTempF };
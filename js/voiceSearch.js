import state from './app.js';
import searchLocation from './searchLocation.js';

const searchInput = document.querySelector('.search-input');
const voice = document.querySelector('.voice');

// voice search 
const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const rec = new SpeechRecognition();

voice.addEventListener('click', () => {
  voice.classList.toggle('voice-active');
  if (voice.classList.contains('voice-active')) {
    rec.start();
  } else {
    rec.stop();
    searchInput.value = '';
  }
});

rec.addEventListener('result', (event) => {
  const text = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
  searchInput.value = text;
  searchLocation(text);
});

rec.addEventListener('end', () => {
  if (voice.classList.contains('voice-active')) {
    rec.start();
  }
});
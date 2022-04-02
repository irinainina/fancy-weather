// play audio
const audio = document.querySelector('audio');
const audioBtn = document.querySelector('.audio-btn');
const birds = document.querySelector('.birds-container'); 

function toggleClasses() {
  audioBtn.classList.toggle('audio-play');
  audioBtn.classList.toggle('audio-pause');
  birds.classList.toggle('birds-container-none');
}

function playAudio() {
  if(this.classList.contains('audio-play')) {
    audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
  }
  toggleClasses();
}

audioBtn.addEventListener('click', playAudio);
audio.addEventListener('ended', toggleClasses);
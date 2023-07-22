'use strict';

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const stopSongs = function () {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
};

sounds.forEach(sound => {
  const btn = document.createElement('button');

  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', function () {
    stopSongs();
    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn);
});

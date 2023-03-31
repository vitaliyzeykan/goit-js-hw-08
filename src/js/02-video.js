import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// const PLAYER_STORAGE_KEY = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', throttle(onPlayerTime, 2000));

function onPlayerTime(time) {
  // console.log(time);
  const playedTimeJSON = JSON.stringify(time);
  localStorage.setItem('videoplayer-current-time', playedTimeJSON);
  // console.log(playedTimeJSON);
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
fillPlayerSavedTime();
function fillPlayerSavedTime() {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  const parsedSavedTime = JSON.parse(savedTime);
  console.log(parsedSavedTime);

  player
    .setCurrentTime(parsedSavedTime.seconds)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}

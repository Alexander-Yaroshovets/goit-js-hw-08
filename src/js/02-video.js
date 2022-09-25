import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEO_CURRENT_KEY = 'videoplayer-current-time';
const savedTime = localStorage.getItem('videoplayer-current-time');
player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
if (savedTime) {
  player.setCurrentTime(savedTime);
}

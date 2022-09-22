import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEO_CURRENT_KEY = 'videoplayer-current-time';
player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
if (VIDEO_CURRENT_KEY) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

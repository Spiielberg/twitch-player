const { shell } = require('electron');

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();

  const streamer = document.querySelector('input[name="name"]').value;

  window.location.href = `https://player.twitch.tv/?player=popout&parent=twitch.tv&volume=0.5&channel=${streamer}`;
});

function forInput() {
  document.querySelector('input[name="name"]').focus();
}

function openTwitch() {
  shell.openExternal('https://www.twitch.tv/directory/following/live');
}

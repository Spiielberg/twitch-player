const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const streamer = document.querySelector('input[name="name"]').value.trim();

  if (streamer === '') {
    formInvalid();
  } else {
    window.location.href = `https://player.twitch.tv/?player=popout&parent=twitch.tv&volume=0.5&channel=${streamer}`;
  }
});

form.addEventListener('invalid', e => {
  e.preventDefault();

  formInvalid();
}, true);

function formInvalid () {
  document.querySelector('input[name="name"]').value = '';
  form.classList.add('validade-error');
  const formError = document.querySelector('.validade-error');

  if (formError) {
    formError.addEventListener('animationend', e => {
      if (e.animationName === 'vibrate') {
        formError.classList.remove('validade-error');
      }
    });
  }
}

function forInput() {
  document.querySelector('input[name="name"]').focus();
}

function openTwitch() {
  window.location.href = 'https://twitch.tv/directory/following/live';
}

const divLogos = document.querySelector('div.logos');

for (let i = 0; i < 20; i++) {
  const logo = document.createElement('img');

  const random = (min, max) => Math.random() * (max - min) + min;
  const returnTrueOrFalse = () => (Math.random() <= 0.5) ? true : false;

  const size = Math.floor(random(10, 120));
  const position = random(0, 95);
  const delay = random(0.1, 15);
  const duration = random(10, 30);

  logo.src = './assets/logo.png';
  logo.style.width = `${size}px`;
  logo.style.height = `${size}px`;

  logo.style.left = `${position}%`;

  if (returnTrueOrFalse()) {
    logo.style.top = '125%';
    logo.style.animation = `up${(Math.random() <= 0.5) ? 1 : 2} infinite alternate`;
  } else {
    logo.style.top = '-25%';
    logo.style.animation = `down${(Math.random() <= 0.5) ? 1 : 2} infinite alternate`;
  }

  logo.style.animationDelay = `${delay}s`;
  logo.style.animationDuration = `${duration}s`;
  logo.style.animationTimingFunction = `cubic-bezier(${Math.random}, ${Math.random}, ${Math.random}, ${Math.random})`;

  divLogos.appendChild(logo);
}

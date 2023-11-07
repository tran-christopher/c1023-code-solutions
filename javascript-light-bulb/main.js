const $container = document.querySelector('.container');
const $lightBulb = document.querySelector('.light-bulb');

function turnOffAndOn(event) {
  if ($lightBulb.className === 'light-bulb') {
    $container.className = 'dark-container';
    $lightBulb.className = 'dark-bulb';
  } else {
    $container.className = 'container';
    $lightBulb.className = 'light-bulb';
  }
}

$lightBulb.addEventListener('click', turnOffAndOn);

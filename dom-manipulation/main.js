let numberOfClicks = 0;
const $hotButton = document.querySelector('.hot-button');
// const $clickCount = document.querySelector('.click-count')

function increment$clickCount() {
  numberOfClicks++;
  if (numberOfClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numberOfClicks > 4 && numberOfClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numberOfClicks > 7 && numberOfClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numberOfClicks > 10 && numberOfClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numberOfClicks > 13 && numberOfClicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else if (numberOfClicks > 16) {
    $hotButton.className = 'hot-button nuclear';
  }

  document.getElementById('test').textContent = `Clicks: ${numberOfClicks}`;
}

$hotButton.addEventListener('click', increment$clickCount);

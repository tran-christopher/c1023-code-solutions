const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    const data = event.target.getAttribute('data-view');
    for (let i = 0; i < $tabElements.length; i++) {
      if ($tabElements[i] === event.target) {
        $tabElements[i].setAttribute('class', 'tab active');
      } else $tabElements[i].setAttribute('class', 'tab');
      if ($tabElements[i].getAttribute('data-view') === data) {
        $viewElements[i].setAttribute('class', 'view');
      } else $viewElements[i].setAttribute('class', 'hidden');
    }
  }
});

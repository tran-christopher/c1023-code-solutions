const $openButton = document.querySelector('.open-button');
const $closeButton = document.querySelector('.close-button');
const $overlay = document.querySelector('.overlay-light');
const $modalContainer = document.querySelector('.modal-container-light');

function openModal(event) {
  $overlay.className = 'overlay-dark';
  $modalContainer.className = 'modal-container-dark';
  console.log('does this work 2');
}

$openButton.addEventListener('click', openModal);

function closeModal(event) {
  $overlay.className = 'overlay-light';
  $modalContainer.className = 'modal-container-light';
  console.log('does this work');
}

$closeButton.addEventListener('click', closeModal);

console.log($openButton);

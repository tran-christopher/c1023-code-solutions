const $header = document.querySelector('.message');

function newMessage(text) {
  $header.textContent = 'Hello There';
}

function changeMessage() {
  setTimeout(newMessage, 2000);
}

changeMessage();

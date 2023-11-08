function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

const test = document.querySelector('button.click-button');
test.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

const test2 = document.querySelector('button.hover-button');
test2.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

const test3 = document.querySelector('button.double-click-button');
test3.addEventListener('dblclick', handleDoubleClick);

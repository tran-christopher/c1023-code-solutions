const $form = document.forms['contact-form'];

function submitFunction(event) {
  const newObject = {};
  newObject.name = $form.elements.name.value;
  newObject.email = $form.elements.email.value;
  newObject.message = $form.elements.message.value;
  event.preventDefault();
  $form.reset();
  console.log(newObject);
}

$form.addEventListener('submit', submitFunction);

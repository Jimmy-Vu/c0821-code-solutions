var form = document.querySelector('#contact-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  var formValue = {};
  formValue.name = form.elements.name.value;
  formValue.email = form.elements.email.value;
  formValue.message = form.elements.message.value;

  console.log(formValue);
}
document.querySelector('#contact-form').reset();

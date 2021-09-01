var character = document.querySelectorAll('span');
var i = 0;

function typeVerify(event) {
  if (event.key === character[i].textContent) {
    character[i].className = 'success';
    character[(i + 1)].className = 'bottom-bar';
    i++;
  } else {
    character[i].className = 'failure';
  }
}
document.addEventListener('keydown', typeVerify);

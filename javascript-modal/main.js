var clickStatus = false;
var dialogContainer = document.querySelector('.dialog-container');
var openButton = document.querySelector('.open-button');
var noButton = document.querySelector('.no-button');
var overlay = document.querySelector('#overlay');

function modalClicked(event) {
  if (clickStatus === false) {
    clickStatus = true;
    dialogContainer.className = 'dialog-container-clicked';
    overlay.className = 'dark-overlay';
  }
}

function noClicked(event) {
  if (clickStatus === true) {
    clickStatus = false;
    dialogContainer.className = 'dialog-container';
    overlay.className = '';
  }
}

openButton.addEventListener('click', modalClicked);
noButton.addEventListener('click', noClicked);

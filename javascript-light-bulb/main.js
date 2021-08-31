var lightStatus = false;

function lightClick(event) {
  if (lightStatus === false) {
    light.className = 'light-bulb-on';
    background.className = 'background-on';
    shadow.className = 'shadow-on';
    lightStatus = true;

  } else {
    light.className = 'light-bulb-off';
    background.className = 'background-off';
    shadow.className = 'shadow-off';
    lightStatus = false;
  }
}

var light = document.querySelector('#light-bulb');
var background = document.querySelector('#background');
var shadow = document.querySelector('#shadow');
light.addEventListener('click', lightClick);

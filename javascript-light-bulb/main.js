function lightClick(event) {
  if (light.className === 'light-bulb-off') {
    light.className = 'light-bulb-on';
    background.className = 'background-on';
    shadow.className = 'shadow-on';

  } else if (light.className === 'light-bulb-on') {
    light.className = 'light-bulb-off';
    background.className = 'background-off';
    shadow.className = 'shadow-off';
  }
}

var light = document.querySelector('#light-bulb');
var background = document.querySelector('#background');
var shadow = document.querySelector('#shadow');
light.addEventListener('click', lightClick);

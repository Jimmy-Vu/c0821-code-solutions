function handleClick(event) {
  console.log('button clicked');
  console.log('event object:', event);
  console.log('target property:', event.target);
}

var buttonClicked = document.querySelector('.click-button');

buttonClicked.addEventListener('click', handleClick, [false]);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event object:', event);
  console.log('target property:', event.target);
}

var buttonHovered = document.querySelector('.hover-button');

buttonHovered.addEventListener('mouseover', handleMouseover, [false]);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event object:', event);
  console.log('target property:', event.target);
}

var buttonDoubleClicked = document.querySelector('.double-click-button');

buttonDoubleClicked.addEventListener('dblclick', handleDoubleClick, [false]);

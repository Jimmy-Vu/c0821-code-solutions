var buttonContainer = document.querySelectorAll('.button-container');
var buttonList = document.querySelectorAll('.fa-circle');
var dataViews = document.querySelectorAll('.view');

function switchViews(string) {
  for (var i = 0; i < dataViews.length; i++) {
    if (string === dataViews[i].getAttribute('data-view')) {
      dataViews[i].className = ' view';
      buttonList[i].className = 'fas fa-circle status-buttons';
    } else {
      dataViews[i].className = 'hidden view';
      buttonList[i].className = 'far fa-circle status-buttons';
    }
  }
}

var leftChevron = document.querySelector('.fa-chevron-left');
var rightChevron = document.querySelector('.fa-chevron-right');
var currentIndex = 0;

rightChevron.addEventListener('click', rightChevronClick);
leftChevron.addEventListener('click', leftChevronClick);

var carouselIntervalID = setInterval(autoClick, 3 * 1000);

function rightChevronClick(event) {
  if (currentIndex === (dataViews.length - 1)) {
    currentIndex = 0;
  } else {
    ++currentIndex;
  }

  switchViews(dataViews[currentIndex].getAttribute('data-view'));
  clearInterval(carouselIntervalID);
  carouselIntervalID = setInterval(autoClick, 3 * 1000);
}

function autoClick(event) {
  if (currentIndex === (dataViews.length - 1)) {
    currentIndex = 0;
  } else {
    ++currentIndex;
  }

  switchViews(dataViews[currentIndex].getAttribute('data-view'));
}

function leftChevronClick(event) {
  if (currentIndex === 0) {
    currentIndex = dataViews.length - 1;
  } else {
    --currentIndex;
  }
  switchViews(dataViews[currentIndex].getAttribute('data-view'));
  clearInterval(carouselIntervalID);
  carouselIntervalID = setInterval(autoClick, 3 * 1000);
}
for (var i = 0; i < buttonContainer.length; i++) {
  buttonContainer[i].addEventListener('click', buttonListener);
}

function buttonListener(event) {
  for (var i = 0; i < dataViews.length; i++) {
    if (event.target.getAttribute('data-view') === dataViews[i].getAttribute('data-view')) {
      currentIndex = i;
    }
  }
  switchViews(event.target.getAttribute('data-view'));
  clearInterval(carouselIntervalID);
  carouselIntervalID = setInterval(autoClick, 3 * 1000);
}

var tabContainer = document.querySelector('.tab-container');
var tabList = document.querySelectorAll('.tab');
var viewList = document.querySelectorAll('.view');

tabContainer.addEventListener('click', handleTabContainerClick);

function handleTabContainerClick(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabList.length; i++) {
      if (tabList[i] !== event.target) {
        tabList[i].className = 'tab';
      } else {
        tabList[i].className = 'tab active';
      }
    }
    var dataView = event.target.getAttribute('data-view');

    for (var x = 0; x < viewList.length; x++) {
      if (dataView === viewList[x].getAttribute('data-view')) {
        viewList[x].className = 'view';
      } else {
        viewList[x].className = 'hidden';
      }
    }
  }
}

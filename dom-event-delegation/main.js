var taskList = document.querySelector('.task-list');

taskList.addEventListener('click', handleTaskClick);

function handleTaskClick(event) {
  console.log('Value of event.target:', event.target);
  console.log('Value of event.target.tagName', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var closestTaskListItem = event.target.closest('.task-list-item');
    console.log('Value of closest .task-list-item', closestTaskListItem);
    closestTaskListItem.remove();
  }
}

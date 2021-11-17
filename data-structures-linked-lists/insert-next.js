/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  if (list.next === null) return;
  var secondInList = list.next;
  list.next = new LinkedList(value);
  list.next.next = secondInList;
}

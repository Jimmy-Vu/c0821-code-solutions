/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  var currentNode = list;
  var valueNode = new LinkedList(value);

  while (currentNode !== null) {
    if (currentNode.next === null) {
      currentNode.next = valueNode;
      return currentNode;
    }
    currentNode = currentNode.next;
  }
}

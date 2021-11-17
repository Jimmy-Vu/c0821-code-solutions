/* exported getTail */

function getTail(list) {
  let currentNode = list;

  while (currentNode !== null) {
    if (currentNode.next === null) {
      return currentNode.data;
    }
    currentNode = currentNode.next;
  }
}

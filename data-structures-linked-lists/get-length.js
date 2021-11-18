/* exported getLength */

function getLength(list) {
  let currentNode = list;
  let counter = 0;
  while (currentNode !== null) {
    currentNode = currentNode.next;
    counter++;
  }
  return counter;
}

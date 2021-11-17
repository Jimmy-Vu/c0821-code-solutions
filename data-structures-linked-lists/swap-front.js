/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;

  var firstValue = list.data;
  var secondValue = list.next.data;

  list.next.data = firstValue;
  list.data = secondValue;

  return list;
}

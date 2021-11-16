/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) return;

  let frontValue = queue.dequeue();
  if (queue.peek() === undefined) return frontValue;

  while (frontValue > queue.peek()) {
    queue.enqueue(frontValue);
    frontValue = queue.dequeue();
  }
  return frontValue;
}

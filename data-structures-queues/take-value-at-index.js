/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;
  let i = 0;

  while (i <= index) {
    const frontValue = queue.dequeue();
    if (i === index) return frontValue;
    queue.enqueue(frontValue);
    i++;
  }
}

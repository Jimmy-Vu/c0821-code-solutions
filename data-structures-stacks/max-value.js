/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let max = stack.peek();

  while (stack.peek() !== undefined) {
    const newNum = stack.pop();
    if (newNum > max) {
      max = newNum;
    }
  }
  return max;
}

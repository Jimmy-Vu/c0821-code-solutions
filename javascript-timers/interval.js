var h1 = document.querySelector('h1');
var textNumber = parseInt(h1.textContent, 10);

function countDown() {
  --textNumber;
  h1.textContent = textNumber.toString();
  if (textNumber === 0) {
    h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }

}

var intervalID = setInterval(countDown, 1 * 1000);

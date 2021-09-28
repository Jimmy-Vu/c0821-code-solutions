var dom = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

xhr.addEventListener('load', userFunction);

function userFunction(event) {
  console.log(xhr.status);
  console.log(xhr.response);

  for (var i = 0; i < xhr.response.length; i++) {
    var li = document.createElement('li');
    li.textContent = xhr.response[i].name;
    dom.appendChild(li);
  }
}

xhr.send();

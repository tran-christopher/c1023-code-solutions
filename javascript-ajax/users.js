const $userList = document.querySelector('#user-list');

function getUserData() {
  const newRequest = new XMLHttpRequest();
  newRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
  newRequest.responseType = 'json';
  newRequest.addEventListener('load', function (event) {
    console.log('Status:', newRequest.status);
    console.log('Response:', newRequest.response);
    for (let i = 0; i < newRequest.response.length; i++) {
      const $li = document.createElement('li');
      $li.textContent = newRequest.response[i].name;
      $userList.appendChild($li);
    }
  });
  newRequest.send();
}

getUserData();

// local storage - LogIn
const form = document.querySelector("form");
const name = document.querySelector("input");
const loginbutton = document.querySelector("#login-btn");

function printName(username) {
  const welcomname = document.createElement('p');
  welcomname.innerText = `Welcome ${username}!`;
  form.appendChild(welcomname);
}

function submitEvent() {
  localStorage.setItem('username', `${name.value}`);
  const username = localStorage.getItem('username');
  name.classList.add('hidden');
  loginbutton.classList.add('hidden');
  printName(username);
}

function loadEvent() {
  const username = localStorage.getItem('username');

  if (username) {
    printName(username);
  } else {
    name.classList.remove('hidden');
    loginbutton.classList.remove('hidden');
    form.addEventListener('submit', submitEvent);
  }
}

window.addEventListener('load', loadEvent);
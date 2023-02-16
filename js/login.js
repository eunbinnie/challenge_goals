// local storage - LogIn
const loginform = document.querySelector("#login-form");
const loginformForHidden = document.querySelector("nav");
const showform = document.querySelector("#show-form");
const showformForHidden = document.querySelector(".show-form");
const listform = document.querySelector(".list-form");
const todoUl = document.querySelector(".todos");

const name = document.querySelector("input");

const loginbutton = document.querySelector("#login-btn");
const logoutbutton = document.querySelector("#logout-btn");

// logout 버튼 클릭 이벤트
function logoutEvent() {
  const newname = document.querySelector(".newname");
  localStorage.removeItem('username');
  showformForHidden.classList.add('hidden');
  newname.remove();
  listform.classList.add('hidden');
  todoUl.classList.add('hidden');
  name.value = "";
  loginformForHidden.classList.remove('hidden');
  loginform.addEventListener('submit', submitEvent);
}

// Welcome name 출력
function printName(username) {
  const welcomname = document.createElement('span');
  welcomname.classList.add('newname');
  welcomname.innerText = `Welcome, ${username}🖤`;
  showform.prepend(welcomname);
  showformForHidden.classList.remove('hidden');
  listform.classList.remove('hidden');
  todoUl.classList.remove('hidden');
  logoutbutton.addEventListener('click', logoutEvent);
}

// 이름 입력 이벤트
function submitEvent() {
  if (name.value === "") {

  } else {
    localStorage.setItem('username', `${name.value}`);
    const username = localStorage.getItem('username');
    loginformForHidden.classList.add('hidden');
    printName(username);
  }
}

// 화면 새로고침 이벤트
function loadEvent() {
  const username = localStorage.getItem('username');

  if (username) {
    printName(username);
  } else {
    loginformForHidden.classList.remove('hidden');
    loginform.addEventListener('submit', submitEvent);
  }
}

window.addEventListener('load', loadEvent);
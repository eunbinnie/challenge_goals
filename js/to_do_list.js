// TO DO list

const listForm = document.querySelector(".list-form");
const listInput = document.querySelector(".list-form input");
const ul = document.querySelector("ul");

const todos = [];

function printToDo(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = `${todo}`;
  li.appendChild(span);
  ul.appendChild(li);
}

function enterToDoEvent() {
  const value = listInput.value;
  todos.push(value);
  listInput.value = "";
  printToDo(value);
}

listForm.addEventListener('submit', enterToDoEvent);
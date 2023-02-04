// TO DO list

const listForm = document.querySelector(".list-form");
const listInput = document.querySelector(".list-form input");
const ul = document.querySelector("ul");

let toDos = [];

function saveToDos() {
  localStorage.setItem('todos', JSON.stringify(toDos));
}

// 투두리스트 삭제
function deleteClickEvent(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}

// 투두리스트 출력
function printToDo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const list = document.createElement("span");
  list.innerText = `${todo}`;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";

  deleteBtn.addEventListener('click', deleteClickEvent);

  li.appendChild(list);
  li.appendChild(deleteBtn);
  ul.appendChild(li);
}

// 투두리스트 입력
function enterToDoEvent() {
  const value = listInput.value;
  listInput.value = "";
  const newTodoObj = {
    text: value,
    id: Date.now(),
  };
  toDos.push(value);
  printToDo(value);
  saveToDos();
}

listForm.addEventListener('submit', enterToDoEvent);

const getTodos = localStorage.getItem('todos');

if (getTodos !== null) {
  const parseTodos = JSON.parse(getTodos);
  toDos = parseTodos;
  parseTodos.forEach(element => {
    printToDo(element);
  });
}
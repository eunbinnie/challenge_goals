const listForm = document.querySelector(".list-form");
const todoInput = document.querySelector(".list-form input");
const todoLists = document.querySelector("#to-do-list ul");

const todos = [];

function deleteEvent(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter(toDo => toDo.id !== parseInt(li.id));
  console.log(todos)
  inputEvent();
}

function printList(item) {
  const list = document.createElement('li');
  list.id = item.id;
  const span = document.createElement('span');
  span.innerText = item;
  list.appendChild(span);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete');
  deleteBtn.innerText = "✖";
  list.appendChild(deleteBtn);
  deleteBtn.addEventListener('click', deleteEvent);

  todoLists.appendChild(list);
}

function getLocalStorage() {
  const fromLocalItem = localStorage.getItem('todos');
  const localList = JSON.parse(fromLocalItem);
  console.log(localList);
  localList.forEach(element => {
    todos.push(element);
    printList(element);
  });
}

function inputEvent() {
  const inputValue = todoInput.value;

  todos.push(inputValue);
  localStorage.setItem('todos', JSON.stringify(todos));
  printList(inputValue);

  todoInput.value = "";
}

listForm.addEventListener('submit', inputEvent);
window.addEventListener('load', getLocalStorage);
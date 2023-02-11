const listForm = document.querySelector(".list-form");
const todoInput = document.querySelector(".list-form input");
const todoLists = document.querySelector("#to-do-list ul");

let toDos = [];

function deleteEvent(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
  localStorage.setItem('todos', JSON.stringify(toDos));
}

function printList(item) {
  const list = document.createElement('li');
  list.id = item.id;
  const span = document.createElement('span');
  const deleteBtn = document.createElement('button');

  span.innerText = item.text;
  deleteBtn.innerText = "✖";

  deleteBtn.classList.add('delete');

  deleteBtn.addEventListener('click', deleteEvent);

  list.appendChild(span);
  list.appendChild(deleteBtn);
  todoLists.appendChild(list);
}

function inputEvent(event) {
  const inputValue = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: inputValue,
    id: Date.now(),
  };

  toDos.push(newTodoObj);
  printList(newTodoObj);
  localStorage.setItem('todos', JSON.stringify(toDos));
}

listForm.addEventListener('submit', inputEvent);

const savedTodos = localStorage.getItem('todos');

if (savedTodos !== null) {
  const localList = JSON.parse(savedTodos);
  toDos = localList;
  localList.forEach(element => {
    printList(element);
  });
}
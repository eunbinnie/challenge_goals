// TO DO list

const listForm = document.querySelector(".list-form");
const listInput = document.querySelector(".list-form input");
const ul = document.querySelector("ul");

const toDos = [];

// 투두리스트 삭제
function deleteClickEvent(event) {
  const li = event.target.parentElement;
  li.remove();
}

// 투두리스트 출력
function printToDo(todo) {
  const li = document.createElement("li");
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
  toDos.push(value);
  listInput.value = "";
  printToDo(value);
}

listForm.addEventListener('submit', enterToDoEvent);
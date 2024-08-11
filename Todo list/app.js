// elements
let todoInput = document.getElementById("todoInput");
let submitBtn = document.getElementById("submitBtn");
let todos = document.getElementById("todos");
let todosNb = document.getElementById("todosNb");
let deleteAll = document.getElementById("deleteAll");

//compteur de todos
let nbTodos = 0;

// fonctions
const createDeleteBtn = () => {
  let deleteButton = document.createElement("div");
  deleteButton.classList.add("btn");
  deleteButton.innerHTML = '<ion-icon name="trash"> <button>X</button></ion-icon>';

  //event suppression
  deleteButton.addEventListener("click",deleteTodo)

  return deleteButton;
};

const addTodo = () => {
  //vreation d'un todo

  let todoText = todoInput.value;
  if (todoText == "") return;

  let newTodo = document.createElement("div");
  newTodo.classList.add("todo");
  newTodo.innerHTML = `<p>${todoText}</p>`;

  newTodo.appendChild(createDeleteBtn());

  //ajout du todo a la liste
  todos.appendChild(newTodo);
  todoInput.value = "";
  nbTodos++;
  todosNb.innerText = nbTodos;
};

const deleteTodo = (e) => {
    let todoEl = e.target.closest("div.todo");
    todoEl.remove();
    nbTodos--;
    todosNb.innerText = nbTodos;
}

const deleteAllTodo = () => {
    todos.innerHTML = "";
    nbTodos = 0;
    todosNb.innerText = nbTodos;

}

submitBtn.addEventListener("click", addTodo);
deleteAll.addEventListener("click", deleteAllTodo)

var inputEl = document.querySelector("input");
var buttonEl = document.querySelector("button");
var ulEl = document.querySelector("ul");
var todos = [];

buttonEl.addEventListener("click", addTodo);
inputEl.addEventListener("keyup", function (e) {
  //console.log(e);
  if (e.key === 13) {
    addTodo();
  }
});

function addTodo() {
  var userInput = inputEl.value;
  if (userInput.trim() == "") {
    return;
  }
  var newTodo = { id: Math.random(), value: userInput };
  todos.push(newTodo);

  var todoLi = document.createElement("LI");
  todoLi.textContent = userInput;
  todoLi.addEventListener("click", removeTodo);
  //dataset crea el atributo id en el DOM
  todoLi.dataset.id = newTodo.id;
  ulEl.appendChild(todoLi);
  inputEl.value = null;
  console.log(todos);
}

//El evento lo envía JS por defecto
function removeTodo(event) {
  var clickedLi = event.target;
  var itemId = clickedLi.dataset.id;
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id == itemId) {
      todos.splice(i, 1);
      break;
    }
  }
  clickedLi.parentNode.removeChild(clickedLi);
  console.log(todos);
}

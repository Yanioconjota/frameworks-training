var inputEl = $("input");
var buttonEl = $("button");
var ulEl = $("ul");
var todos = [];

buttonEl.click(addTodo);
inputEl.keyup(function (e) {
  //console.log(e);
  if (e.keyCode === 13) {
    addTodo();
  }
});

function addTodo() {
  var userInput = inputEl.val();
  if (userInput.trim() == "") {
    return;
  }
  var newTodo = { id: _.uniqueId('todo-'), value: userInput };
  //Reemplazamos Math.random por _.uniqueId() para asegurarnos que el ID sea único realmente
  todos.push(newTodo);
  $("<li>" + userInput + "</li>")
    .appendTo(ulEl)
    .attr("dataset-id", newTodo.id)
    .click(removeTodo);
  inputEl.val(null);
  console.log(todos);
}

//El evento lo envía JS por defecto
function removeTodo(event) {
  //$(this) es una referencia al elemento DOM, en este caso el que fue clickeado
  var clickedLi = $(this);
  var itemId = clickedLi.attr("dataset-id");
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id == itemId) {
      todos.splice(i, 1);
      break;
    }
  }
  clickedLi.remove();
  console.log(todos);
}

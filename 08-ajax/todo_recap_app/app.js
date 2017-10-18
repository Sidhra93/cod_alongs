var todos = ["one", "two", "three"];

var $addTodoBtn = $("#add-todo-btn");
var $newTodoInput = $("#new-todo-input");
var $todoList = $("#todo-list");


$addTodoBtn.on('click', function(){
  var input = $newTodoInput.val();
  addTodo(input);
  $newTodoInput.val("");
});

function addTodo(text){
  var $newListItem = $("<li>").text(text);
  $todoList.append($newListItem);
}

todos.forEach(function(elem){
  addTodo(elem)
})

// _.each(todos, function(elem){
//   var $newListItem = $("<li>").text(elem);
//   $todoList.append($newListItem);
// });

$('ul').on('click', 'li', function(event){
  // event.target.addClass("completed");
  $(event.target).toggleClass("completed");
});

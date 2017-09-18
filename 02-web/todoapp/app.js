// var lastListItem = document.querySelector("li:last-child");
//
// lastListItem.addEventListener("click", function(){
//   lastListItem.classList.add("completed");
// });

var listItems = document.querySelectorAll("li");
var addButton = document.querySelector(".add-button");
var newItemInput = document.querySelector(".new-item");
var list = document.querySelector("ul");

var toggleComplete = function(event){
  event.target.classList.toggle("completed")
}

listItems.forEach(function(elem){
  elem.addEventListener("click", toggleComplete);
});

addButton.addEventListener("click", function(){
  var newItem = newItemInput.value
  var newListItem = document.createElement("li");
  newListItem.textContent = newItem;
  newListItem.addEventListener("click", toggleComplete);
  list.appendChild(newListItem);
  newItemInput.value = "";
});

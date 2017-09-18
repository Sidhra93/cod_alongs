var tasks = [
  {
    name: "eat",
    isComplete: true
  },
  {
    name: "sleep",
    isComplete: false
  }
];

var addNewTask = function(name){
  var newTask = {
    name: name,
    isComplete: false
  };
  tasks.push(newTask);
}

//=============================

var tasksList = document.querySelector(".tasks");
var newTaskInput = document.querySelector(".new-task-input");
var addButton = document.querySelector(".add-button");

addButton.addEventListener("click", function(){
  //get user input
  var newTaskName = newTaskInput.value;
  //add new task
  addNewTask(newTaskName);
  //render
  renderTasks();
});

var renderTasks = function(){
  //clear list
  tasksList.innerHTML = "";
  //for each task object in the tasks array
  tasks.forEach(function(task){
    //make a new li
    var newListItem = document.createElement("li");
    newListItem.textContent = task.name;
    //append to task UL
    tasksList.appendChild(newListItem);
  });
}

renderTasks();

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
    var taskList = document.getElementById("taskList");
    var listItem = document.createElement("li");
    listItem.innerHTML = taskText + " <button onclick='removeTask(this)'>Remove</button>";
    taskList.appendChild(listItem);
  
    taskInput.value = "";
  }
  function removeTask(button) {
    var listItem = button.parentElement;
    listItem.remove();
  }

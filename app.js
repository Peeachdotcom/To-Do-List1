const todoList = document.getElementById("todo-list");
const newTodo = document.getElementById("new-todo");
const addTodoButton = document.getElementById("add-todo");

addTodoButton.addEventListener("click", addTodo);
newTodo.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

function addTodo() {
  // Get the user's input
  const todoText = newTodo.value.trim();

  // Check that the input is not empty
  if (todoText.length === 0) {
    alert("Please enter a todo");
    return;
  }

  // Create a new list item and add it to the list
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  
  // Add event listener to the checkbox to toggle the todo text style
  checkbox.addEventListener("change", function() {
    if (this.checked) {
      li.style.textDecoration = "line-through";
      li.style.color = "red";
    } else {
      li.style.textDecoration = "none";
      li.style.color = "black";
    }
  });
  
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.addEventListener("click", function () {
    todoList.removeChild(li);
  });
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(todoText));
  li.appendChild(removeButton);
  todoList.appendChild(li);

  // Clear the input field
  newTodo.value = "";
}

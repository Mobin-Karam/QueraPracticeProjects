const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-input");
const submit = document.getElementById("new-task-submit");
const taskList = document.getElementById("todosContainer");
const deleteButton = document.getElementById("delete");
const error = document.getElementById("errorContainer");

// Task item scheme:
{
  /* <li class="todos__todo">
${newTask} <img src="../assets/trash.svg" class="todos__todo--trash" id="delete" alt="trash" />
</li> */
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = input.value;

  if (newTask === "") {
    error.style.setProperty("display", "block");
    error.style.setProperty("animation", "fadeIn 0.3s");
    error.style.setProperty("opacity", "100");
    setTimeout(() => {
      error.style.setProperty("display", "none");
    }, 2000);
    return;
  }

  // Add task to taskList
  const li = document.createElement("li");
  li.classList.add("todos__todo");

  const taskText = document.createTextNode(newTask);
  li.appendChild(taskText);

  // Create the trash button
  const trashButton = document.createElement("img");
  trashButton.src = "../assets/trash.svg";
  trashButton.classList.add("todos__todo--trash");
  trashButton.id = "delete";
  trashButton.alt = "trash";
  trashButton.addEventListener("click", function () {
    this.parentElement.remove();
  });

  li.appendChild(trashButton);
  taskList.appendChild(li);

  // Clear the input field
  input.value = "";
});

taskList.addEventListener("click", (e) => {
  // Complete task when clicked on task item
  if (e.target.tagName === "LI") {
    e.target.style.textDecoration = "line-through";
    e.target.style.backgroundColor = "#c9c8c8";
  }

  // Delete task item
  if (e.target.tagName === "svg" || e.target.tagName === "path") {
    taskList.removeChild(e.target.closest("li"));
  }
});

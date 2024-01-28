const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-input");
const submit = document.getElementById("new-task-submit");
const taskList = document.getElementById("todosContainer");
const deleteButton = document.getElementById("delete");
const error = document.getElementById("errorContainer");

// Task item scheme:
{/* <li class="todos__todo">
${newTask} <img src="../assets/trash.svg" class="todos__todo--trash" id="delete" alt="trash" />
</li> */}

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

  // TODO: Add task to taskList

  // TODO: Reset form input
});

taskList.addEventListener("click", (e) => {
  // TODO: Complete task when clicked on task item
  // TODO: Delete task item
});

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// save task
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(renderTask);

// add new task
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // trim = remove white space
    const text = todoInput.value.trim();
    if (!text) return;

    const task = {text, completed: false}
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTask(task);
    todoInput.value = "";
});

function renderTask(task){
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) li.classList.add("completed");

    li.addEventListener("click", () => {
        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.addEventListener("click", () =>{
        tasks = tasks.filter((t)=> t !== task);
        localStorage.setItem("task", JSON.stringify(tasks));
        li.remove();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

}
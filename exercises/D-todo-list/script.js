let content = document.getElementById("content");
function completeTask(e) {
  let clickedTodo = e.target;
  if (clickedTodo.style.textDecoration === "line-through") {
    clickedTodo.style.textDecoration = "none";
  } else {
    clickedTodo.style.textDecoration = "line-through";
  }
}

function todoList(todos) {
  let todoList = document.createElement("ul");
  todos.forEach((task) => {
    let contents = document.createElement("li");
    contents.innerText = task.todo;
    contents.addEventListener("click", completeTask);
    todoList.appendChild(contents);
  });

  content.appendChild(todoList);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);

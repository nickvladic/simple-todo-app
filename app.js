//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-item");
const todoInputDiv = document.querySelector(".todo-input-div");
const todoLists = document.querySelector(".todo-list")


//eventlisteners
todoButton.addEventListener("click", getTodos);
todoButton.addEventListener("click", removeInputDiv);

//functions
function getTodos(event){
    event.preventDefault();
    // todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // li
    const newTodo = document.createElement("p");
    newTodo.innerText = todoInput.value;
    todoList.appendChild(newTodo)

}

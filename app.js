const todoList = document.querySelector(".list");
const input = document.querySelector("input");

let Todos = [];
let todoInputText = "";
let counter = 0;

function renderTodos() {
    todoList.innerHTML = Todos.map(todo => todoHTML(todo)).join('');
}

function onInputChange(event) {
    todoInputText = event.target.value;
}

function addTodo() {
    if (!todoInputText) {
        return;
    }
    Todos.push({
        id: counter++,
        title: todoInputText
    });
    renderTodos();
    input.value = "";
    todoInputText = "";
}

function todoDelete(id) {
    Todos = Todos.filter(todo => id !== todo.id);
    renderTodos();
}

function todoHTML(todo) {
    return `<li>
                ${todo.title}
                <button class="todo__delete" onclick="todoDelete(${todo.id})">
                x
                </button>
            </li>`;
}



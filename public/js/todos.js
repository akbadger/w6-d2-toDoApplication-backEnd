getTodos()

function getTodos() {
    fetch('http://localhost:3000/todos')
        .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        loopTodos(response);
    })
}

function loopTodos(todos) {

    todos.forEach(function(todo) {
        showTodos(todo)
    })
}

function showTodos(todo) {
    var todoList = `<li class="list-group-item">${todo.todo}</li>`

    document.querySelector('#todos').innerHTML += todoList;
}
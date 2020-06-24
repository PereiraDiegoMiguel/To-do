const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');
//const todos = ["Fazer coffee", "Estudar", "Programar"];
const todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function rederTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        const pos = todos.indexOf(todo);
        const todoElement = document.createElement('li');
        const todoText = document.createTextNode(todo);

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        const linkText = document.createTextNode('  Excluir');
        linkElement.appendChild(linkText);
        linkElement.setAttribute('onClick', 'deleteTodo(' + pos + ')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

rederTodos();

function addTodo() {
    const todoText = inputElement.value
    todos.push(todoText);
    inputElement.value = '';
    rederTodos();
    saveToStorage();
}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    rederTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

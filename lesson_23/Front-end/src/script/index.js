import { TodoAPI } from '../api/todos.js';
import "../style/scss/main.scss";

console.log(TodoAPI);

async function getTodos() {
    try {
        const response = await fetch(`${process.env.BASE_SERVICE_URL}/${TodoAPI.prefix}`);
        // const response = await fetch(`http://localhost:3000/todos`);
        const todos = await response.json();

        createTodo(todos)
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
    }
}
getTodos();

// todo list
function createTodo(data) {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        createTodoList(data[i].title, data[i].description, data[i].completed, data[i]._id)
    }
}

function createTodoList(title, description, completed, id) {
    let completedIcon_isCompleted = 'bi bi-circle';
    let todoContainer_isCompleted = 'alert-light';

    if (completed) completedIcon_isCompleted = 'bi bi-check-circle';

    const todoContainer = $('<div>')
        .addClass(`todo-container alert ${todoContainer_isCompleted}`)
        .attr('id', `todo-id-${id}`);

    const todoBoxforText = $('<div>')
        .addClass('todo-box')
    const todoTitle = $('<h4>')
        .addClass('todo-title alert alert-light')
        .text(title);
    const todoDescription = $('<p>')
        .addClass('todo-description alert alert-light')
        .text(description);

    const todoBoxButtons = $('<div>')
        .addClass('todo-box-buttons');

    const todoButtonCompleted = $('<button>')
        .addClass('todo-button btn btn-primary');
    const todoButtonView = $('<button>')
        .addClass('todo-button btn btn-primary');
    const todoButtonRedact = $('<button>')
        .addClass('todo-button btn btn-primary');
    const todoButtonDelete = $('<button>')
        .addClass('todo-button btn btn-primary');

    const viewIcon = $('<i>')
        .addClass('bi bi-eye');
    const redacthIcon = $('<i>')
        .addClass('bi bi-pencil');
    const trashIcon = $('<i>')
        .addClass('bi bi-trash');
    const completedIcon = $('<i>')
        .addClass(completedIcon_isCompleted);

    todoButtonCompleted.append(completedIcon);
    todoButtonView.append(viewIcon);
    todoButtonRedact.append(redacthIcon);
    todoButtonDelete.append(trashIcon);
    todoBoxforText.append(todoTitle, todoDescription);
    todoBoxButtons.append(todoButtonCompleted, todoButtonView, todoButtonRedact, todoButtonDelete);
    todoContainer.append(todoBoxforText, todoBoxButtons);
    $('[data-container-for-todo]').append(todoContainer);
}

// API req

$('[data-input-form]').on("submit", handleFormSubmit);


async function handleFormSubmit(e) {
    e.preventDefault();

    const title = e.currentTarget.elements.inputTitle.value.trim();
    const description = e.currentTarget.elements.inputDescription.value.trim();
    console.log(title);
    console.log(description);

    if (!title) return;

    const data = new TodoAPI(title, description);

    await TodoAPI.save(process.env.BASE_SERVICE_URL, data).then(() => {
        fetchTodos();
    }).catch((e) => {
        fetchErrorHandler(e);
    });
}

function fetchErrorHandler(e) {
    console.warn(e.message);
}

function fetchTodos() {
    view.renderLoader("loading");

    TodoAPI.getAll(process.env.BASE_SERVICE_URL)
        .then((todos) => {
            view.renderData(todos);
        })
        .catch((e) => {
            fetchErrorHandler(e);
        });
}
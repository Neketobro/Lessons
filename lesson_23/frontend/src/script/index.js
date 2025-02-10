import { TodoAPI } from '../api/todos.js';
import "../style/scss/main.scss";

async function getTodos() {
  showLoader();
  try {
    const response = await fetch(`${process.env.BASE_SERVICE_URL}/${TodoAPI.prefix}`);
    const todos = await response.json();
    hideLoader();
    createTodo(todos);
  } catch (error) {
    hideLoader();
    console.error('Помилка завантаження даних:', error);
  }
}

function createTodo(data) {
  for (let i = 0; i < data.length; i++) {
    createTodoList(data[i].title, data[i].description, data[i].completed, data[i]._id)
  }
}

function cleanTodo(container, flag) {
  if (!container && container.nodeType !== 1) return;
  while (container.firstElementChild) {
    container.firstElementChild.remove();
  }
  if (flag) container.remove();
}

function createTodoList(title, description, completed, id) {
  let completedIcon_isCompleted = completed ? 'bi bi-check-circle' : 'bi bi-circle';

  const todoContainer = $('<div>')
    .addClass(`todo-container alert alert-light`)
    .attr('id', `todo-id-${id}`);

  const todoBoxforText = $('<div>').addClass('todo-box');
  const todoTitle = $('<h4>').addClass('todo-title alert alert-light').text(title);
  const todoDescription = $('<p>').addClass('todo-description alert alert-light').text(description);

  const todoBoxButtons = $('<div>').addClass('todo-box-buttons');

  const todoButtonCompleted = $('<button>').addClass('todo-button btn btn-primary').append($('<i>').addClass(completedIcon_isCompleted)).on('click', () => toggleCompleted(id, todoButtonCompleted));
  const todoButtonView = $('<button>').addClass('todo-button btn btn-primary').append($('<i>').addClass('bi bi-eye')).on('click', () => viewTodo(title, description));
  const todoButtonRedact = $('<button>').addClass('todo-button btn btn-primary').append($('<i>').addClass('bi bi-pencil')).on('click', () => editTodo(id, title, description));
  const todoButtonDelete = $('<button>').addClass('todo-button btn btn-primary').append($('<i>').addClass('bi bi-trash')).on('click', () => deleteTodo(id, todoContainer));

  todoBoxforText.append(todoTitle, todoDescription);
  todoBoxButtons.append(todoButtonCompleted, todoButtonView, todoButtonRedact, todoButtonDelete);
  todoContainer.append(todoBoxforText, todoBoxButtons);
  $('[data-container-for-todo]').append(todoContainer);
}

async function deleteTodo(id, element) {
  try {
    await fetch(`${process.env.BASE_SERVICE_URL}/${TodoAPI.prefix}/${id}`, { method: 'DELETE' });
    element.remove();
  } catch (error) {
    console.error('Помилка видалення:', error);
  }
}

function viewTodo(title, description) {
  alert(`Завдання: ${title}\nОпис: ${description}`);
}

function editTodo(id, title, description) {
  const newTitle = prompt('Редагувати заголовок:', title);
  const newDescription = prompt('Редагувати опис:', description);

  if (newTitle !== null && newDescription !== null) {
    fetch(`${process.env.BASE_SERVICE_URL}/${TodoAPI.prefix}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle, description: newDescription })
    }).then(() => fetchTodos());
  }
}

async function toggleCompleted(id, button) {
  try {
    const response = await fetch(`${process.env.BASE_SERVICE_URL}/${TodoAPI.prefix}/${id}`);
    const todo = await response.json();

    const updatedCompleted = !todo.completed;

    await fetch(`${process.env.BASE_SERVICE_URL}/${TodoAPI.prefix}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: updatedCompleted })
    });

    button.find('i').toggleClass('bi-circle bi-check-circle');
  } catch (error) {
    console.error('Помилка оновлення статусу:', error);
  }
}

$('[data-input-form]').on("submit", handleFormSubmit);

async function handleFormSubmit(e) {
  e.preventDefault();
  const title = e.currentTarget.elements.inputTitle.value.trim();
  const description = e.currentTarget.elements.inputDescription.value.trim();
  if (!title) return;
  const data = new TodoAPI(title, description);
  await TodoAPI.save(process.env.BASE_SERVICE_URL, data).then(() => fetchTodos()).catch(fetchErrorHandler);
}

function fetchErrorHandler(e) {
  console.warn(e.message);
}

function showLoader() {
  const loader = $('<div>').addClass('spinner-border').attr('role', 'status').append($('<span>').addClass('visually-hidden').text('Loading...'));
  $('[data-container-for-todo]').append(loader);
}

function hideLoader() {
  $('.spinner-border').remove();
}

async function fetchTodos() {
  cleanTodo($('[data-container-for-todo]')[0], false);
  showLoader();
  try {
    const todos = await TodoAPI.getAll(process.env.BASE_SERVICE_URL);
    hideLoader();
    if (todos.length === 0) {
      $('[data-container-for-todo]').append($('<p>').text('Немає завдань'));
    } else {
      createTodo(todos);
    }
  } catch (e) {
    hideLoader();
    fetchErrorHandler(e);
  }
}
getTodos();
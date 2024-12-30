const form = document.forms.form;
const container = document.querySelector('[data-container]');

let tasks = [];

// Завантаження задач із localStorage
if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(task => addElement(task));
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskValue = form.elements.value.value.trim();
    if (!taskValue) return;

    const newTask = { content: taskValue, checked: false };
    tasks.push(newTask);
    addElement(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    form.reset();
});

container.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const taskContent = e.target.previousElementSibling.textContent;

        tasks = tasks.filter(task => task.content !== taskContent);
        e.target.parentElement.remove();

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});

container.addEventListener('input', (e) => {
    if (e.target.type === 'checkbox') {
        const taskContent = e.target.nextElementSibling.textContent;
        const task = tasks.find(task => task.content === taskContent);

        if (task) {
            task.checked = e.target.checked;
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        e.target.checked
            ? e.target.parentElement.classList.add('todo-item--checked')
            : e.target.parentElement.classList.remove('todo-item--checked');
    }
});

function addElement(task) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    if (task.checked) li.classList.add('todo-item--checked');

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.checked = task.checked;

    const span = document.createElement('span');
    span.classList.add('todo-item__description');
    span.textContent = task.content;

    const removeButton = document.createElement('button');
    removeButton.classList.add('todo-item__delete');
    removeButton.textContent = 'Видалити';

    li.append(input, span, removeButton);
    container.append(li);
}

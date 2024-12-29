const form = document.forms.form;
const container = document.querySelector('[data-container]');

let tasks = [];

if (localStorage.getItem('tasks')) tasks = tasks.concat(JSON.parse(localStorage.getItem('tasks')));

form.addEventListener('submit', (e) => {
    e.preventDefault();    

    if (tasks.length) {
        addElement(tasks[tasks.length - 1]);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
})

container.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const taskContent = e.target.previousElementSibling.textContent;
        
        e.target.parentElement.remove();

        tasks = tasks.filter((el) => el !== taskContent);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };
});

container.addEventListener('input', (e) => {
    e.target.checked ? e.target.parentElement.classList.add('todo-item--checked') : e.target.parentElement.classList.remove('todo-item--checked');
})

function addElement(content) {
    if(!content.trim()) return;

    const li = document.createElement('li');
    li.classList.add('todo-item');

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');

    const span = document.createElement('span');
    span.classList.add('todo-item__description');
    span.textContent = content;

    const removeButton = document.createElement('button');
    removeButton.classList.add('todo-item__delete');
    removeButton.textContent = 'Видалити';

    li.append(input, span, removeButton);
    container.append(li);
}

if (tasks.length) {
    tasks.forEach(task => {
        addElement(task);
    });
}

form.elements.value.addEventListener('change', (e) => {
    if (e.target.value) tasks.push(e.target.value);
})
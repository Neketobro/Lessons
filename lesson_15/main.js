// Доробити TODO лист, в якому буде можливість:

// Додати завдання                                              - создавать елемент с класом стилей
// Видалити завдання                                            - видлити елемент
// Відзначити як виконану                                       - если checed тогда зачеркнуть текст
// Усі дані повинні зберегтися після перезавантаження сторінки. - local storage

const form = document.forms.form;
const container = document.querySelector('[data-container]');

let lists = [];

container.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') e.target.parentElement.remove();
})

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
    removeButton.innerText = 'Видалити';

    li.append(input, span, removeButton);
    container.append(li);

    // localStorage
    localStorage.setItem('value', content);
}

if (lists.length) {
    lists.forEach(list => {
        addElement(list);
    });
}

container.addEventListener('change', (e) => {
    if (e.target.value) lists.push(e.target.value);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (tasks.length) {
        addElement(tasks[tasks.length - 1]);
        clearTaskBtn.classList.remove("d-none");
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    e.target.reset()
})
//
// clearTaskBtn.addEventListener('click', (e) => {
//     e.target.classList.add("d-none");
//     localStorage.clear();
//     tasks.length = 0;
//
//     while (taskList.firstElementChild) {
//         taskList.firstElementChild.remove()
//     }
// })
 

// local storage


// window.addEventListener('storage', (e) => {
//     console.log(e);
// })

// let tasks = [];

// function addTask(content) {
//     const li = document.createElement('li');
//     li.classList.add("list-group-item", "d-flex", "justify-content-between");
//     li.textContent = content;
//
//     const removeBtn = document.createElement('span');
//     removeBtn.classList.add("delete-icon");
//     removeBtn.dataset.removeTask = "";
//
//     const icon = document.createElement('i');
//     icon.classList.add("bi", "bi-trash2-fill");
//
//     removeBtn.addEventListener('click', (e) => {
//         e.currentTarget.parentElement.remove();
//
//         tasks = tasks.filter((el) => el !== e.currentTarget.parentElement.textContent);
//
//         if (!tasks.length) clearTaskBtn.classList.add("d-none");
//
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     })
//
//     removeBtn.append(icon);
//     li.append(removeBtn);
//     taskList.append(li)
// }
//
// if (tasks.length) {
//     tasks.forEach(task => {
//         addTask(task);
//     });
//     clearTaskBtn.classList.remove("d-none");
// }
//
// form.elements.task.addEventListener('change', (e) => {
//     if (e.target.value) tasks.push(e.target.value);
// })
//
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//
//     if (tasks.length) {
//         addTask(tasks[tasks.length - 1]);
//         clearTaskBtn.classList.remove("d-none");
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }
//
//     e.target.reset()
// })
//
// clearTaskBtn.addEventListener('click', (e) => {
//     e.target.classList.add("d-none");
//     localStorage.clear();
//     tasks.length = 0;
//
//     while (taskList.firstElementChild) {
//         taskList.firstElementChild.remove()
//     }
// })
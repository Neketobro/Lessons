let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(task => addElement(task));
}

$(document.forms.form).on('submit', (e) => {
    e.preventDefault();
    const taskValue = $("input[name=inputValue]").val().trim();
    if (!taskValue) return;

    const newTask = { 
        id: Date.now(),
        content: taskValue, 
        checked: false 
    };
    tasks.push(newTask);
    addElement(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    $(document.forms.form).trigger('reset');
});

$('[data-container]').on('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const taskId = $(e.target).parent().data('id');
        tasks = tasks.filter(task => task.id !== taskId);
        $(e.target).parent().remove();

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    if (e.target.tagName === 'LI' || e.target.tagName === 'SPAN') {
        const taskId = $(e.target).parent().data('id');
        const task = tasks.find(el => el.id === taskId);
        if (task) {
            modalWindow(task.content);
        }
    }
});

$('[data-container]').on('input', (e) => {
    if (e.target.type === 'checkbox') {
        const taskId = $(e.target).parent().data('id');
        const task = tasks.find(task => task.id === taskId);

        if (task) {
            task.checked = e.target.checked;
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        e.target.checked
            ? $(e.target).parent().addClass('todo-item--checked')
            : $(e.target).parent().removeClass('todo-item--checked');
    }
});

function addElement(task) {
    const li = $('<li>').addClass('todo-item').attr('data-id', task.id);
    if (task.checked) li.addClass('todo-item--checked');

    const checkbox = $('<input type="checkbox">').prop('checked', task.checked);
    const text = $('<span>').addClass('todo-item__description').text(task.content);
    const deleteButton = $('<button>').addClass('todo-item__delete').text('Видалити');

    li.append(checkbox, text, deleteButton);
    $('[data-container]').append(li);
}

function modalWindow(content) {
    const existingModal = $('#dynamicModal');
    if (existingModal.length) {
        existingModal.remove();
    }

    const divModal = $('<div>')
        .addClass('modal fade')
        .attr('id', 'dynamicModal')
        .attr('tabindex', '-1')
        .attr('aria-hidden', 'true');

    const divDialog = $('<div>').addClass('modal-dialog');

    const divContent = $('<div>').addClass('modal-content');

    const divHeader = $('<div>').addClass('modal-header');
    const title = $('<h5>').addClass('modal-title').text('Задача');
    const closeButton = $('<button>')
        .addClass('btn-close')
        .attr('type', 'button')
        .attr('data-bs-dismiss', 'modal')
        .attr('aria-label', 'Close');

    const divBody = $('<div>').addClass('modal-body');
    const bodyText = $('<p>').text(content);

    const divFooter = $('<div>').addClass('modal-footer');
    const closeFooterButton = $('<button>')
        .addClass('btn btn-secondary')
        .attr('type', 'button')
        .attr('data-bs-dismiss', 'modal')
        .text('Закрити');

    divHeader.append(title, closeButton);
    divBody.append(bodyText);
    divFooter.append(closeFooterButton);
    divContent.append(divHeader, divBody, divFooter);
    divDialog.append(divContent);
    divModal.append(divDialog);

    $('body').append(divModal);
    const modalElement = $('#dynamicModal');
    const modalInstance = new bootstrap.Modal(modalElement[0]);
    modalInstance.show();
}

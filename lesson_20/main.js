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
    const li = $('<li></li>').addClass('todo-item').attr('data-id', task.id);
    if (task.checked) li.addClass('todo-item--checked');

    const checkbox = $('<input type="checkbox">').prop('checked', task.checked);
    const text = $('<span></span>').addClass('todo-item__description').text(task.content);
    const deleteButton = $('<button>Видалити</button>').addClass('todo-item__delete');

    li.append(checkbox, text, deleteButton);
    $('[data-container]').append(li);
}

function modalWindow(content) {
    const existingModal = document.getElementById('dynamicModal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = `
        <div class="modal fade" id="dynamicModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Задача</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>${content}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modal);

    const modalElement = $('#dynamicModal');
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
}
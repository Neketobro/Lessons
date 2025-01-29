/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var tasks = [];
if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach(function (task) {
    return addElement(task);
  });
}
$(document.forms.form).on('submit', function (e) {
  e.preventDefault();
  var taskValue = $("input[name=inputValue]").val().trim();
  if (!taskValue) return;
  var newTask = {
    id: Date.now(),
    content: taskValue,
    checked: false
  };
  tasks.push(newTask);
  addElement(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  $(document.forms.form).trigger('reset');
});
$('[data-container]').on('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    var taskId = $(e.target).parent().data('id');
    tasks = tasks.filter(function (task) {
      return task.id !== taskId;
    });
    $(e.target).parent().remove();
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  if (e.target.tagName === 'LI' || e.target.tagName === 'SPAN') {
    var _taskId = $(e.target).parent().data('id');
    var task = tasks.find(function (el) {
      return el.id === _taskId;
    });
    if (task) {
      modalWindow(task.content);
    }
  }
});
$('[data-container]').on('input', function (e) {
  if (e.target.type === 'checkbox') {
    var taskId = $(e.target).parent().data('id');
    var task = tasks.find(function (task) {
      return task.id === taskId;
    });
    if (task) {
      task.checked = e.target.checked;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    e.target.checked ? $(e.target).parent().addClass('todo-item--checked') : $(e.target).parent().removeClass('todo-item--checked');
  }
});
function addElement(task) {
  var li = $('<li>').addClass('todo-item').attr('data-id', task.id);
  if (task.checked) li.addClass('todo-item--checked');
  var checkbox = $('<input type="checkbox">').prop('checked', task.checked);
  var text = $('<span>').addClass('todo-item__description').text(task.content);
  var deleteButton = $('<button>').addClass('todo-item__delete').text('Видалити');
  li.append(checkbox, text, deleteButton);
  $('[data-container]').append(li);
}
function modalWindow(content) {
  var existingModal = $('#dynamicModal');
  if (existingModal.length) {
    existingModal.remove();
  }
  var divModal = $('<div>').addClass('modal fade').attr('id', 'dynamicModal').attr('tabindex', '-1').attr('aria-hidden', 'true');
  var divDialog = $('<div>').addClass('modal-dialog');
  var divContent = $('<div>').addClass('modal-content');
  var divHeader = $('<div>').addClass('modal-header');
  var title = $('<h5>').addClass('modal-title').text('Задача');
  var closeButton = $('<button>').addClass('btn-close').attr('type', 'button').attr('data-bs-dismiss', 'modal').attr('aria-label', 'Close');
  var divBody = $('<div>').addClass('modal-body');
  var bodyText = $('<p>').text(content);
  var divFooter = $('<div>').addClass('modal-footer');
  var closeFooterButton = $('<button>').addClass('btn btn-secondary').attr('type', 'button').attr('data-bs-dismiss', 'modal').text('Закрити');
  divHeader.append(title, closeButton);
  divBody.append(bodyText);
  divFooter.append(closeFooterButton);
  divContent.append(divHeader, divBody, divFooter);
  divDialog.append(divContent);
  divModal.append(divDialog);
  $('body').append(divModal);
  var modalElement = $('#dynamicModal');
  var modalInstance = new bootstrap.Modal(modalElement[0]);
  modalInstance.show();
}
/******/ })()
;
//# sourceMappingURL=index.js.map
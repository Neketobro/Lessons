const container = document.querySelector('[data-ul-container]');

let i = 0;
document.forms.myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let inputValue = e.target.firstElementChild.value;

    if (!inputValue.trim()) return;
    i++;
    const li = createList({ type: 'li', content: inputValue, attributes: {class: i } })
    const btnDelete = createList({ type: 'button', content: 'delete', attributes: {class: `btnClass-${i}`}});

    btnDelete.style.cssText = 'margin-left: 20px';

    li.append(btnDelete);
    container.append(li);

    btnDelete.addEventListener('click', () => {
        clearList(li, true); 
    })
})

function createList({ type = 'li', content, attributes}) {
    const $el = document.createElement(type);

    if (content) {
        typeof content === 'string' ? $el.textContent = content : $el.append(content)
    }

    if (attributes) Object.entries(attributes).forEach(([key, value]) => {
        $el.setAttribute(key, value)
    })

    return $el;
}

function clearList(elemetn, flag) {
    if (!elemetn && elemetn.nodeType !== 1) return;

    while (elemetn.firstElementChild) {
        elemetn.firstElementChild.remove()
    }

    if (flag) elemetn.remove()
}
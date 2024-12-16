const ul = document.querySelector('[data-ul-container]');
const input = document.getElementById('inputText');
const btnIpnput = document.querySelector('[data-btn-input]')

let i = 0;
btnIpnput.addEventListener('click', (e) => {
    e.preventDefault()
    i++;
    if (!input.value.trim()) return;

    const li = createEl({ type: 'li', content: input.value, attributes: {class: i } })
    const btnDelete = createEl({ type: 'button', content: 'delete', attributes: {class: `btnClass-${i}` } })
    btnDelete.style.cssText = 'margin-left: 20px';
    li.append(btnDelete);
    ul.append(li);

    btnDelete.addEventListener('click', () => {
        clearEl(li, true);
    })
});

function createEl({ type = 'div', content, attributes  } = {}) {
    const $el = document.createElement(type);

    if (content) {
        typeof content === 'string' ? $el.textContent = content : $el.append(content)
    }

    if (attributes) Object.entries(attributes).forEach(([key, value]) => {
        $el.setAttribute(key, value)
    })

    return $el;
}

function clearEl(elemetn, flag) {
    if (!elemetn && elemetn.nodeType !== 1) return;

    while (elemetn.firstElementChild) {
        elemetn.firstElementChild.remove()
    }

    if (flag) elemetn.remove()
}
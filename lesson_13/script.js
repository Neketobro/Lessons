document.forms.form.addEventListener('focusout', (e) => {
    if (e.target.name) {
        validateElement(e.target);
    }
});

document.forms.form.addEventListener('submit', (e) => {
    e.preventDefault();
    funSubmit(e.target);
});

function validateElement(elmnt) {
    const regExps = {
        name: /.+/,
        textArea: /\w{5}/m,
        phoneNumber: /^\+380\d{9}$/,
        email: /\w+@\w+\.\w{2,3}/
    };

    const messages = {
        name: 'Name is not valid',
        textArea: 'Message must contain at least one word with 5 characters',
        phoneNumber: 'Entered number is incorrect. Number must be "+380" and have 9 digits.',
        email: 'Email is not valid'
    };

    const setError = (message) => {
        elmnt.previousElementSibling.textContent = message;
        elmnt.previousElementSibling.style.color = 'red';
        elmnt.style.border = '1px solid red';
    };

    const clearError = () => {
        elmnt.previousElementSibling.textContent = '';
        elmnt.style.border = 'none';
    };

    if (regExps[elmnt.name] && !regExps[elmnt.name].test(elmnt.value.trim())) {
        setError(messages[elmnt.name]);
        return false;
    }

    clearError();
    return true;
}

function funSubmit(form) {
    const elmnts = Array.from(form.elements).filter(elmnt => elmnt.name);
    let isFormValid = true;
    const result = {};

    elmnts.forEach(elmnt => {
        const isValid = validateElement(elmnt);
        if (!isValid) {
            isFormValid = false;
        } else {
            result[elmnt.name] = elmnt.value.trim();
        }
    });

    if (isFormValid) {
        console.log(result);
    }
}

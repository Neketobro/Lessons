document.forms.form.addEventListener('focusout', (e) => {
    e.preventDefault();
    checkInputStyle(e);
});

document.forms.form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputSubmit(e);
});

function checkInputStyle(e) {
    const regTextArea = /\w{5}/m;
    const regNumber = /^\+380\d{9,9}$/ig;
    const regEmail = /\w+@\w+\.\w{2,3}/g;

    if (e.target.name === 'name' && !e.target.value.trim()) {
        e.target.previousElementSibling.textContent = 'Name is not valid';
        e.target.previousElementSibling.style.color = 'red';
        e.target.style.border = '1px solid red';
        return;
    } else {
        e.target.previousElementSibling.textContent = '';
        e.target.style.border = 'none';
    };
   
    if (e.target.name === 'textArea' && !regTextArea.test(e.target.value)) { 
        e.target.previousElementSibling.textContent = 'Message must contain at least one word with 5 characters';
        e.target.previousElementSibling.style.color = 'red';
        e.target.style.border = '1px solid red';
        return;
    }
    else {
        e.target.previousElementSibling.textContent = '';
        e.target.style.border = 'none';
    };

    if (e.target.name === 'phoneNumber' && !regNumber.test(e.target.value)) {
        e.target.previousElementSibling.textContent = 'Entered number is incorrect. Number must be "+380" and have 9 digits.';
        e.target.previousElementSibling.style.color = 'red';
        e.target.style.border = '1px solid red';
        return;
    } else {
        e.target.previousElementSibling.textContent = '';
        e.target.style.border = 'none';
    };

    if (e.target.name === 'email' && !regEmail.test(e.target.value)) {
        e.target.previousElementSibling.textContent = 'Email is not valid';
        e.target.previousElementSibling.style.color = 'red';
        e.target.style.border = '1px solid red';
        return;
    } else {
        e.target.previousElementSibling.textContent = '';
        e.target.style.border = 'none';
    };
};

function inputSubmit(e) {
    const result = {};
    let isFormValid = true;

    Array.from(e.target.elements).forEach(el => {
        if (el.name) {
            const regTextArea = /\w{5}/m;
            const regNumber = /^\+380\d{9}$/ig;
            const regEmail = /\w+@\w+\.\w{2,3}/g;

            if (el.name === 'name' && !el.value.trim()) {
                el.previousElementSibling.textContent = 'Name is not valid';
                el.previousElementSibling.style.color = 'red';
                el.style.border = '1px solid red';
                isFormValid = false;
            } else if (el.name === 'textArea' && !regTextArea.test(el.value)) {
                el.previousElementSibling.textContent = 'Message must contain at least one word with 5 characters';
                el.previousElementSibling.style.color = 'red';
                el.style.border = '1px solid red';
                isFormValid = false;
            } else if (el.name === 'phoneNumber' && !regNumber.test(el.value)) {
                el.previousElementSibling.textContent = 'Entered number is incorrect. Number must be "+380" and have 9 digits.';
                el.previousElementSibling.style.color = 'red';
                el.style.border = '1px solid red';
                isFormValid = false;
            } else if (el.name === 'email' && !regEmail.test(el.value)) {
                el.previousElementSibling.textContent = 'Email is not valid';
                el.previousElementSibling.style.color = 'red';
                el.style.border = '1px solid red';
                isFormValid = false;
            } else {
                el.previousElementSibling.textContent = '';
                el.style.border = 'none';
                result[el.name] = el.value.trim();
            }
        }
    });

    if (!isFormValid) {
        return;
    }

    console.log(result);
}
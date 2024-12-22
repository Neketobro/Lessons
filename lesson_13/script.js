let isFormValid = true;
const result = {};

document.forms.form.addEventListener('focusout', (e) => {
    e.preventDefault();
    checkInputStyle(e.target);
});

document.forms.form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputSubmit(e);
});

function inputSubmit(e) {
    Array.from(e.target.elements).forEach(el => {
        if (el.name) {
            checkInputStyle(el);
            result[el.name] = el.value.trim();
        }
    });
    if (!isFormValid) {
        for (let i = 0; i < e.target.elements.length; i++) {
            if (e.target.elements[i].name) {
                if (!e.target.elements[i].name) checkInputStyle(e.target.elements[i]);
            }
        }
        return isFormValid = true;
    };
    console.log(result);
}

function checkInputStyle(el) {
    const regTextArea = /\w{5}/m;
    const regNumber = /^\+380\d{9,9}$/ig;
    const regEmail = /\w+@\w+\.\w{2,3}/g;

    const messgaError = {
        name: 'Name is not valid',
        textArea: 'Message must contain at least one word with 5 characters',
        phoneNumber: 'Entered number is incorrect. Number must be "+380" and have 9 digits.',
        email: 'Email is not valid'
    };
    
    const previosElement = el.previousElementSibling;

    if (el.name === 'name' && !el.value.trim()) {
        previosElement.textContent = messgaError.name;            
        previosElement.style.color = 'red';
        el.style.border = '1px solid red';
        isFormValid = false;
    } else if (el.name === 'textArea' && !regTextArea.test(el.value)) {
        previosElement.textContent = messgaError.textArea;            
        previosElement.style.color = 'red';
        el.style.border = '1px solid red';
        isFormValid = false;
    } else if (el.name === 'phoneNumber' && !regNumber.test(el.value)) {
        previosElement.textContent = messgaError.phoneNumber;            
        previosElement.style.color = 'red';
        el.style.border = '1px solid red';
        isFormValid = false;
    } else if (el.name === 'email' && !regEmail.test(el.value)) {
        previosElement.textContent = messgaError.email;            
        previosElement.style.color = 'red';
        el.style.border = '1px solid red';
        isFormValid = false;
    } else {
        previosElement.textContent = '';
        el.style.border = 'none';
    };
    if (!isFormValid) return;
};
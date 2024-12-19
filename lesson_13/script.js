const formElements = document.forms.form.elements;

// formElements.name.addEventListener('change', (e) => {
//     if (!e.target.value.trim()) console.log('value undefind');
// })

document.forms.form.addEventListener('focusout', (e) => {
    e.preventDefault();
    //name
    if (e.target.name === 'name' && !e.target.value.trim()) {
        e.target.previousElementSibling.textContent = 'Name is not valid';
        e.target.previousElementSibling.style.color = 'red';
        e.target.style.border = '1px solid red';

        return false;
    } else {
        e.target.previousElementSibling.textContent = '';
        e.target.style.border = 'none';
    }

    //textArea
    const regTextArea = /\w{5}/m;
    if (e.target.name === 'textArea' && !regTextArea.test(e.target.value)) { 
        e.target.previousElementSibling.textContent = 'Message must contain at least one word with 5 characters';
        e.target.previousElementSibling.style.color = 'red';
        e.target.style.border = '1px solid red';

        return false;
    }
    else {
        e.target.previousElementSibling.textContent = '';
        e.target.style.border = 'none';
    }

    // phone number
    const regNumber = /^\+380\d{9,9}$/ig;
    if (e.target.name === 'phoneNumber' && !regNumber.test(e.target.value)) {
        e.target.previousElementSibling.textContent = 'Entered number is incorrect. Number must be "+380" and have 9 digits.';
        e.target.previousElementSibling.style.color = 'red';
        e.target.style.border = '1px solid red';
        
        return false;
    } else {
        e.target.previousElementSibling.textContent = '';
        e.target.style.border = 'none';
    }
    

    // emeil
    const regEmail = /\w+@\w+\.\w{2,3}/g;
    if (e.target.name === 'email' && !regEmail.test(e.target.value)) {
        e.target.previousElementSibling.textContent = 'Email is not valid';
        e.target.previousElementSibling.style.color = 'red';
        e.target.style.border = '1px solid red';

        return false;
    } else {
        console.log('valid email');
        e.target.previousElementSibling.textContent = '';
        e.target.style.border = 'none';
    }




    if (e.target.name) console.log(e.target.value);
});



///submit 
document.forms.form.addEventListener('submit', (e) => {
    e.preventDefault();
    fooSubmit(e);
});

function fooSubmit(e) {
    const result = {};
    
    Array.from(e.target.elements).forEach(el => {
        if (el.name) {
            result[el.name] = el.value;
        }
    });
    
    console.log(result)
};
    
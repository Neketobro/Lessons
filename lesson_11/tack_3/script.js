const btn = document.getElementById('button');

btn.addEventListener('click', () => {    
    btn.previousElementSibling.classList.toggle('paragraf');

    if (btn.previousElementSibling.classList.contains('paragraf')) {
        btn.previousElementSibling.style.color = 'red';
    } else {
        btn.previousElementSibling.style.color = 'black';
    }
});




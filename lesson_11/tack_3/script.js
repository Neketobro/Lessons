const btn = document.getElementById('button');

btn.addEventListener('click', () => {    
    btn.previousElementSibling.classList.toggle('paragraf');

    btn.previousElementSibling.classList.contains('paragraf') ? btn.previousElementSibling.style.color = 'red' : btn.previousElementSibling.style.color = 'black';
});




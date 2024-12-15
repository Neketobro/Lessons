const container = document.querySelector('[data-container]');

container.addEventListener('click', (el) => {
    
    let buttonClick = el.target.innerText;
    
    alert(buttonClick);
});



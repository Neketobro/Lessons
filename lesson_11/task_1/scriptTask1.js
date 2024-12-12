document.body.style.display = 'flex';

function sum() {
    let result = 1;

    for (let i = 1; i <= 10; i++){ 
        const fatherDiv = document.createElement('div');
        fatherDiv.classList.add('father');
        
        for (let j = 1; j <= 10; j++) {
            result = i * j;
            
            fatherDiv.insertAdjacentElement('beforeend', createList(result));
        }
        document.body.insertAdjacentElement('beforeend', fatherDiv);
    }
}
sum();

function createListEl(data) {
    const el = document.createElement('div');
    el.innerText = data;
    el.style.textAlign = 'center';

    return el;
}

function createList(data) {
    const div = document.createElement('div');

    div.insertAdjacentElement('beforeend', createListEl(data))

    div.style.display = 'flexbox';
    div.style.width = '30px';
    div.style.height = '30px';
    div.style.background = 'grey';
    div.style.border = '1px solid black';

    return div;
}
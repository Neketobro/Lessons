// // # HW 11.1

// // ## Таблиця піфагора

// // Вивести таблицю Піфагора (10×10), проте цього разу таблиця повинна бути створена динамічно


// function sum() {
//     let result = 1;
    
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//     for (let i = 1; i <= 10; i++){ 
//         for (let j = 1; j <= 10; j++) {
//             result = i * j;
//             // console.log(result);
//         }
//     }
// }
// sum();


const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function createListEl(data) {
    const el = document.createElement('p');
    el.innerText = data;

    return el;
};

function createList(data) {
    const div = document.createElement('div');

    data.forEach( el => {
        div.insertAdjacentElement('beforeend', createListEl(el))
    });

    return div;
};

document.body.insertAdjacentElement('beforeend', createList(data));
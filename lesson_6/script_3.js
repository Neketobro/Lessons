// Функція видалення елементу
// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {

    const newArray = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i] !== item) {
            newArray[newArray.length] = array[i];
        };
    };
    for (let i = 0; i < newArray.length; i++) {
        array[i] = newArray[i];
    };

    array.length = newArray.length;
    return array;
}

removeElement(array, 4);

console.log(array); // Результат: [1, 3, 6, 2, 5, 7]
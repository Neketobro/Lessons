// Добуток через карування
// Створити функцію для розрахунку добутку двох чисел, що викликається так: product(5)(2). Функція повинна повертати результат (у середині функції не має бути консоль лога!)

function product(a) {
    return function (b) {
        return a + b;
    }
}

const result = product(5)(2);

console.log(result)
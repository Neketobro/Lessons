function sum(number) {
    let initialValue = number;

    return function (value) {
        initialValue += value;
        return initialValue;
    };
}

const add = sum(0);

console.log(add(4)); // 4

console.log(add(6)); // 10

console.log(add(10)); // 20

console.log(add(7)); // 27
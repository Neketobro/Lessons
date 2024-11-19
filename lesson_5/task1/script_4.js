let value = Number(prompt('Введіть число:', ''));
let isPrime = true;

if (value <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i * i <= value; i++) {
        if (value % i === 0) {
            isPrime = false;
            break;
        };
    };
};

if (isPrime) {
    alert(`${value} є простим числом.`);
} else {
    alert(`${value} не є простим числом.`);
};
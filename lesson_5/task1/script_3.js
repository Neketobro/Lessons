let value = Number(prompt('Введіть, будь-яке число:', ''));

let i = 0;

while (i <= 100) {
    if (i * i < value) {
        console.log(i);
    };
    i++;
}
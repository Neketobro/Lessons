for (k = 0; k < 1; k) {
        
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

    let reverse = confirm('Ви хочете повторити операцію?')

    if (reverse) {
        continue;
    } else {
        break;
    };
}
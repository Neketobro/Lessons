function printChoise(initialValue) {
    let lastValue = 'Not entered value';

    for (let i = 0; i < 10; i++) {

        initialValue = prompt('Enter a number greater than 100');

        if (!initialValue) {
            continue;
        } else if (!Number(initialValue)) {
            lastValue = initialValue;
            break;
        } else if (initialValue >= 100) {
            lastValue = initialValue;
            break;
        } else if (initialValue < 100 && i === 9) {
            lastValue = initialValue;
        } else if (initialValue < 100) {
            lastValue = initialValue;
            alert('Your value is less than 100, please try again');
        };
    };

    return lastValue;
};

console.warn(printChoise());
const num = prompt('Введіть трьохзначне число:', '');

const num1 = num[0];
const num2 = num[1];
const num3 = num[2];

if ((num1 === num2) && (num2 === num3)) {
    alert('all numbers are the same');
} else if ((num1 === num2) || (num2 === num3) || (num3 === num1)) {
    alert('among the numbers are the same');
} else {
    alert('the numbers are different');
};
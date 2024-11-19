// Обрахувати валюту де один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

// Приклад:

// 10$ = 260₴
// 20$ = 540₴
// За допомогою prompt() запитати від користувача валюту (Наприклад: uah, usd, euro).


let userCurrency = prompt('Яку валюту Ви хочете розрахувати?', '');
let currency = '';

let uah = 0.024;
let usd = 41;
let euro = 47;

switch (userCurrency.toLocaleLowerCase()) {
    case 'uah':
    case 'гривня':
    case 'гривна':
    case '₴':
        currency = uah;
        break;
    case 'usd':
    case 'долар':
    case 'dollar':
    case '$':
        currency = usd;
        break;
    case 'euro':
    case 'евро':
    case 'євро':
    case '€':
        currency = euro;
        break;
    default:
        console.log('not value');
        break;
};

console.log(currency);

let i = 0;
while (i < 100) {
    i++;
    if (i % 10 === 0) {
        console.log(i + '$' + ' = ' + (i * currency) + '₴');
    };
};


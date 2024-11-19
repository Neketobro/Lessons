let userCurrency = prompt('Яку валюту Ви хочете розрахувати?', '');
let currency = '';

let uah = 0.024;
let usd = 41.29;
let euro = 43.61;

let invalidValue = false;

if (!userCurrency) userCurrency = '';

let i = 0;
while (i < 100) {
    i++;
    if (i % 10 === 0) {
        switch (userCurrency.toLocaleLowerCase()) { 
            case 'uah':    
            case 'гривня':
            case 'гривна':
            case 'hryvnia':
            case '₴':
                console.log(i + '₴' + ' = ' + (i * uah) + '$');
                break;
            case 'usd':
            case 'долар':
            case 'dollar':
            case '$':
                console.log(i + '$' + ' = ' + Math.round(i * usd) + '₴');
                break;
            case 'euro':
            case 'евро':
            case 'євро':
            case '€':
                console.log(i + '€' + ' = ' + Math.round(i * euro) + '₴');
                break;
            default:
                invalidValue = true;
                break;
        };
    };
    
    if (invalidValue == true) alert('На жаль введену валюти не розіпнано, \nВи можете ввести - "USD", "UAH", "EURO".');
    if (invalidValue == true) break;
};


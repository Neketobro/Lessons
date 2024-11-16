let userBirthday = prompt('Підкажіть, дату Вашого народження?', '00.00.0000');
let userCity = prompt('Уточніть, в якому місті Ви проживаєте?', '');
let favoriteSport = prompt('Який Ваш юлюблений вид спорту?', '');

let champions;
switch (true) {
    case favoriteSport === 'Футбол':
        champions = 'Ліонель Мессі';
        break;
    case favoriteSport === 'Баскетбол':
        champions = 'Майкл Джордан';
        break;
    case favoriteSport === 'Бейсбол':
        champions = 'Джекі Робінсон';
        break;
    default:
        champions = favoriteSport;
        break;
};

let userAge;
if (userBirthday === null || userBirthday === '') {
    userAge = '';
} else {
    userAge = (2024 - (userBirthday[6] + userBirthday[7] + userBirthday[8] + userBirthday[9]));
};

let chooseDate = `Вік: ${userAge}`;
let chooseCity = `Ти живеш у місті ${userCity}`;
let chooseSport = `Круто! Хочеш стати ${champions}?`;

if (userAge === null || userAge === '') {
    chooseDate = 'Шкода, що Ви не захотіли ввести свію Дату народження.';
};

if (userCity === 'Київ' || userCity === 'Лондон' || userCity === 'Вашингтог') {
    chooseCity = `Ти живеш у столиці ${userCity}`;
};

if (userCity === null || userCity === '') {
    chooseCity = 'Шкода, що Ви не захотіли ввести свіє місто.';
};

if (favoriteSport === null || favoriteSport === '') {
    chooseSport = 'Шкода, що Ви не захотіли ввести свій улюблений вид спорту';
};

switch (true) {
    case userCity === 'Київ':
    case userCity === 'Лондон':
    case userCity === 'Вашингтог':
    case favoriteSport === 'Футбол':
    case favoriteSport === 'Баскетбол':
    case favoriteSport === 'Бейсбол':
        alert(`${chooseDate}
            ${chooseCity}
            ${chooseSport}`);
        break;
    case favoriteSport === 'Футбол':
    case favoriteSport === 'Баскетбол':
    case favoriteSport === 'Бейсбол':
        alert(`${chooseDate}
            ${chooseCity}
            ${chooseSport}`);
        break;
    case userCity === 'Київ':
    case userCity === 'Лондон':
    case userCity === 'Вашингтог':
        alert(`${chooseDate}
            ${chooseCity}`);
        break;
    default:
        alert(`${chooseDate}
            ${chooseCity}`);
        break;
};
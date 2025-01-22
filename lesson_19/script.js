const select = document.querySelector('[data-select]');
const container = document.querySelector('[data-container]');
const containerChild = container.firstElementChild;

select.addEventListener('change', (e) => {
    let locationCity = e.target.value.trim();
    clearContainer();
    if (locationCity) {
        loadWeather(locationCity);
    } else {
        displayError("Please enter a valid city.");
    }
});

async function loadWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=73987a53a669537328a8886b25210e04`;

    try {
        const response = await fetch(url, { method: 'GET' });
        const data = await response.json();

        if (response.ok) {
            weather(data);
        } else {
            displayError(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error("Network Error: ", error);
        displayError("Failed to fetch weather data. Please try again later.");
    }
}

function clearContainer() {
    while (containerChild.firstChild) {
        containerChild.firstChild.remove();
    }
}

function displayError(message) {
    clearContainer();

    let errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.textContent = message;
    errorDiv.style.fontSize = '7vh';

    containerChild.append(errorDiv);

    containerChild.style.height = '20vh';
    containerChild.style.width = '40vw';
    containerChild.style.display = 'flex';
    containerChild.style.justifyContent = 'center';
    containerChild.style.alignItems = 'center';
    containerChild.style.textAlign = 'center';
    containerChild.style.fontSize = '3vh';
    containerChild.style.color = 'red';
}

function createContainerOne(name, time) {
    let div = document.createElement('div');
    let city = document.createElement('h1');
    let date = document.createElement('p');

    date.innerText = time;
    city.textContent = name;

    div.classList.add('wrapper');
    city.style.fontSize = '5vh';
    city.style.textAlign = 'center';
    date.style.fontSize = '4vh';
    date.style.textAlign = 'center';

    div.append(city, date);
    containerChild.append(div);
}

function createContainerTwo(status) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let description = document.createElement('h2');

    img.src = `https://openweathermap.org/img/wn/${status.icon}@4x.png`;
    img.style.width = '40vh';
    description.textContent = status.main;
    description.style.fontSize = '5vh';
    description.style.textAlign = 'center';

    div.append(img, description);
    containerChild.append(div);
}

function createContainerLast(infoTemp, windSpeed) {
    let div = document.createElement('div');
    let temp = document.createElement('h1');
    let feelsLike = document.createElement('h3');
    let pressure = document.createElement('p');
    let humidity = document.createElement('p');
    let speedWind = document.createElement('p');

    temp.textContent = `Temperature: ${Math.round(infoTemp.temp)}°C`;
    feelsLike.textContent = `Feels like: ${Math.round(infoTemp.feels_like)}°C`;
    pressure.textContent = `Pressure: ${Math.round(infoTemp.pressure)} hPa`;
    humidity.textContent = `Humidity: ${Math.round(infoTemp.humidity)}%`;
    speedWind.textContent = `Speed wind: ${windSpeed} m/s`;

    temp.style.fontSize = '5vh';
    feelsLike.style.fontSize = '4vh';
    pressure.style.fontSize = '3vh';
    humidity.style.fontSize = '3vh';
    speedWind.style.fontSize = '3vh';

    div.append(temp, feelsLike, pressure, humidity, speedWind);
    containerChild.append(div);
}

function weather(data) {
    clearContainer();

    containerChild.style.height = '70vh';
    containerChild.style.width = '60vw';
    containerChild.style.justifyContent = 'space-between';

    createContainerOne(data.name, getDateTime());
    createContainerTwo(data.weather[0]);
    createContainerLast(data.main, data.wind.speed);
}

function getDateTime() {
    let now = new Date();
    let day = now.getDate();
    let timeHours = now.getHours();
    let timeMinutes = now.getMinutes();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = days[now.getDay()];
    

    day = day < 10 ? "0" + day : day;
    timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;

    return `${dayName}, ${day} ${timeHours}:${timeMinutes}`;
}
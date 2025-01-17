const timerInput = document.getElementById('timerInput');
const startButton = document.getElementById('startButton');
const timerContainer = document.getElementById('timerContainer');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
}

function createTimer(duration) {
    let remainingTime = duration;
    const timerElement = document.createElement('div');
    timerElement.className = 'timer';

    const timeDisplay = document.createElement('span');
    timeDisplay.textContent = formatTime(remainingTime);
    timerElement.appendChild(timeDisplay);

    const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop';
    timerElement.appendChild(stopButton);

    timerContainer.appendChild(timerElement);

    const intervalId = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            timeDisplay.textContent = formatTime(remainingTime);
        } else {
            clearInterval(intervalId);
        }
    }, 1000);

    stopButton.addEventListener('click', () => {
        clearInterval(intervalId);
        timerElement.remove();
    });
}

startButton.addEventListener('click', () => {
    const inputTime = parseInt(timerInput.value, 10);
    if (!isNaN(inputTime) && inputTime > 0) {
        createTimer(inputTime);
        timerInput.value = '';
    } else {
        alert('Please enter a valid time in seconds.');
    }
});
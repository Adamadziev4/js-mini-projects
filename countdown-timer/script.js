const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2023';

function countdown() {
    const newYearsDate = new Date(newYears);  // Новогодняя дата
    const currentDate = new Date();  // Сегодняшняя дата

    const totalSeconds = (newYearsDate - currentDate) / 1000;  // Секунды до нового года

    const days = Math.floor(totalSeconds / 3600 / 24);  // Дни до нового года
    const hours = Math.floor(totalSeconds / 3600) % 24;  // Часов до нового года
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    // console.log(days, hours, minutes, seconds);
}

function formatTime(time) {  // Если время < 10 будет ставить перед временем 0
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);

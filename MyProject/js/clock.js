const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

const clockTitle = document.querySelector("#xmas-clock");

const perMinMs = 1000*60;
const perHourMs = perMinMs*60;
const perDayMs = perHourMs*24;

function getXmasClock(){
    const futureDate = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
    const nowDate = new Date();

    const diff = futureDate.getTime()- nowDate.getTime();

    const diffDay = String(Math.floor(diff / perDayMs));
    const diffHours = String(Math.floor((diff % perDayMs) / perHourMs)).padStart(2,"0");
    const diffMinutes = String(Math.floor((diff % perDayMs % perHourMs) / perMinMs)).padStart(2,"0");
    const diffSeconds = String(Math.floor((diff % perDayMs % perHourMs % perMinMs) / 1000)).padStart(2,"0");
    
    clockTitle.innerText = `${diffDay}d ${diffHours}h ${diffMinutes}m ${diffSeconds}s`;   
}

getClock();
setInterval(getXmasClock,1000);
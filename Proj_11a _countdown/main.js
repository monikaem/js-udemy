const endTime = new Date('2021-04-21 19:00:00').getTime();
function countdown() {
    const nowTime = new Date().getTime(); // podaje czas w ms
    let time = Math.floor((endTime - nowTime)/1000); // obliczenie roznicy czasu i zamiana ms na sekundy
    let days = Math.floor(time/(60*60*24));  //liczba dni
    let hours = Math.floor((time/(60*60)) % 24); // liczba godzin
    let minutes = Math.floor((time/60) % 60); // liczba minut
    let seconds = Math.floor(time % 60)  // liczba sekund
    document.querySelector('span.d').textContent = days < 10 ? `0${days}` : days;
    document.querySelector('span.h').textContent = hours < 10 ? `0${hours}` : hours;
    document.querySelector('span.m').textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector('span.s').textContent = seconds < 10 ? `0${seconds}` : seconds;

}

setInterval(countdown, 1000);


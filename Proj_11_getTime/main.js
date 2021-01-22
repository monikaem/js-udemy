const spanText = document.querySelector('span');


function getTime () {
    const time = new Date();  //tworzymy nowy obiekt
    const seconds = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds(); // wyswietla sekundy, jezeli sekundy sa mniejsze niz 10 to z przodu dodajemy 0
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes(); // minuty
    const hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours(); //godziny
    spanText.textContent = `${hours}:${minutes}:${seconds}`  // dodaje godzine do elementu span
}
setInterval(getTime, 1000); // co 1s wywolujemy funkcje
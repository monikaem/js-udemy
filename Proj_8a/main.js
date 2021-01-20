const txt = ['Dzień dobry!!!', 'Co za piękny dzień...', 'Uśmiechnij się'];

let activeLetter = -20;
let activeText = 0;


const spanText = document.querySelector('.text');

const addLetter = () => {
    if (activeLetter >= 0) {
        spanText.textContent += txt[activeText][activeLetter]; // jezeli activeLetter jest wieksze lub rowne 0 to dodajemy pierwsza literke z pierwszego elementu tablicy
    }
    activeLetter++; // przechodzimy do kolejnej literki
    if (activeLetter === txt[activeText].length){ // jezeli dojdziemy do ostatniej literki pierwszego elementu
        activeText++; // to przechodzimy do drugiego elementu
        if (activeText === txt.length){ // jezeli dojdziemy do ostatniego elementu to konczymy
            return
        }
        return setTimeout(() => {
            activeLetter = -15; // wtedy na poczatku mamy opoznienie
            spanText.textContent = ''; // zerujemy zawartosc
            addLetter(); // jeszcze raz uruchamiamy funkcje
        }, 2000)   //czeka 2000ms pomiedzy kolejnymi elementami z tablicy txt

    }
    setTimeout(addLetter, 100); //dodawanie literki co 100 ms
}
addLetter();

const spnCursor = document.querySelector('.cursor'); // do zmiennej przypisujemy kursor

const cursorAnimation = () => {
    spnCursor.classList.toggle('active'); // dodawanie lub zabieranie klasy active
}

setInterval(cursorAnimation, 400); // animacja kursora co 400ms
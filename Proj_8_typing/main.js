const spanText = document.querySelector('.text');
const txt = 'ORP Flaming – polski trałowiec bazowy z okresu zimnej wojny, jeden z serii dwunastu okrętów projektu 206F, przebudowany w latach 2000–2001 na niszczyciel min proj. 206FM. Jednostka mierzyła 58,2 metra długości, 7,97 metra szerokości i miała zanurzenie 2,14 metra, a jej wyporność pełna wynosiła 470 ton. Uzbrojona była w trzy podwójne zestawy działek automatycznych 2M-3M kal. 25 mm i bomby głębinowe, a ponadto była przystosowana do przewozu i stawiania min morskich.';
let indexText = 0;  // index od ktorego zaczynamy wyswietlac tekst
const time = 40;
const addLetter = () => {
        spanText.textContent += `${txt[indexText]}`; // dodajemy literke o danym indeksie
        indexText++;  // zwiekszamy indeks o 1
        if (indexText === txt.length) {   // jezeli indeks jest rowny dlugosci stringa to konczymy interval
            clearInterval(indexTyping);
        }
}
const spnCursor = document.querySelector('.cursor'); // do zmiennej przypisujemy kursor

const cursorAnimation = () => {
    spnCursor.classList.toggle('active'); // dodawanie lub zabieranie klasy active
}

const indexTyping = setInterval(addLetter, time); //set Interval zwraca index, co okreslony time wywolywana jest funkcja addLetter
setInterval(cursorAnimation, 400); // animacja kursora co 400ms
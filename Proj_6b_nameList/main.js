const btn = document.querySelector('button');
const input = document.querySelector('input');
const div = document.querySelector('div');
let names = [];

const addName = (e) => {
    e.preventDefault();  //kasuje defaultowe zachowanie button, czyli np odswiezanie strony
    let writtenName = input.value;
    if (writtenName.length) {  //sprawdza czy jest cokolwiek wpisane w pole input
        for (name of names) { // sprawdza czy podane imie juz jest na liscie
            if (name === writtenName){
                alert('Podane imię jest już na liście'); // jezeli jest to zwraca alert
                return
            }
        }
            names.push(writtenName); //dodaje nowe imie do listy names
            div.textContent = names.join(', '); // zwraca string z lista imion
            input.value = ''; // kasuje wartosc z pola input po dodaniu do listy
    }
}

input.addEventListener('focus', (e) => {
    e.target.value = ''; // po kliknieciu na pole input - zerowanie pola
})


btn.addEventListener('click', addName);





//Zastosowanie closure
const div = document.querySelector('div');



const add = (start = 0) => {   //tworzymy funkcje add
    let number = start;   // ktora przechowuje wartosc dla licznika
    return () => {   //i zwraca funkcje ktora dodaje do licznika liczbe
        div.textContent = `Kliknąłeś już ${number++} razy`;
    }
}

const counter = add(); // do zmiennej counter przypisana jest funkcja add
window.addEventListener('click', counter); // po kliknieciu nastepuje wywolania counter, czyli add
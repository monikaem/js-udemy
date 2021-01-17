//Prostokat rozsuwany podczas scrolllowania do 50% wysokosci strony i zmieniajacy kolor
const newDiv = document.createElement('div'); // tworzymy nowy div
document.body.appendChild(newDiv); // dodajemy nowy div do body
let height = 10;
let width = 100;
let grow = true; // wkazuje czy ma rosnac czy nie
newDiv.style.width = `${width}%`;  // ustalamy szerokosc
newDiv.style.height = `${height}px`;  // ustalamy wysokosc

window.addEventListener('scroll', function() {
    if (grow){
        height++;   // zwiekszanie podczas scrollowania

    } else {
        height--;    // zmniejszanie podczas scrollowania
    }
    newDiv.style.height = `${height}px`;

    if (height >= window.innerHeight/2){        // czy juz osiagnal polowe wysokosci okna przegladarki
        grow = !grow;
        newDiv.style.backgroundColor = 'blue';   // zmiana koloru
    } else if (height === 0){                   // gdy zmniejszy sie do zera
        grow = !grow;
        newDiv.style.backgroundColor = 'red';   //zmiana koloru
    }
})

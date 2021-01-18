//poruszanie kwadratem po wcisnieciu myszy
const div = document.querySelector('div');
let divX = 150; // odleglosc od lewej krawedzi okna przegladarki
let divY = 50;   // odleglosc od gornej krawedzi okna przegladarki
let moveActive = false;  // czy kwadrat ma sie poruszac
let insertDivX;  // odleglosc pozioma od krawedzi obiektu
let insertDivY;  // odleglosc pionowa od krawedzi obiektu
div.style.left = divX + 'px';  // polozenie obiektu wzgledem lewej krawedzi
div.style.top = divY + 'px';  // polozenie obiektu wzgledem gornej krawedzi
div.addEventListener("mousedown", (e) =>{  //nacisniecie klawisza myszy na obiekcie
    div.style.backgroundColor = 'grey';  //zmiana koloru
    moveActive = !moveActive;  // obiekt moze sie poruszac
    insertDivX = e.offsetX;  // polozenie myszy wzgledem lewej krawedzi obiektu
    insertDivY = e.offsetY;  // polozenie myszy wzgledem gornej krawedzi obiektu
})

div.addEventListener("mousemove", (e) => { //poruszanie myszy na obiekcie
    if (moveActive) {   // jezeli moveAvtive jest true to nastepuje zmiana pozycji obiektu o parametry poznizej
        divX = e.clientX - insertDivX;   // od pozycji wzgledem przegladarki odejmujemy pozycje wzgledem krawedzi obiektu
        divY = e.clientY - insertDivY;
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }
})

div.addEventListener('mouseup', () => { // po odkliknieciu myszy zmiana koloru na czarny i zablokowanie mozliwosci ruchu kwadratu
    div.style.backgroundColor = 'black';
    moveActive = !moveActive;
} )
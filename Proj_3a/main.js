function init() {    // funkcja dodaje przyciski i tworzy ul po uruchomieniu strony
    const btn = document.createElement('button');
    const resetBtn = document.createElement('button');
    document.body.appendChild(btn);
    document.body.appendChild(resetBtn);
    btn.textContent = 'Dodaj 10 elementów listy';
    resetBtn.textContent = 'Wyczyść';
    const ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    btn.addEventListener('click', createLiElements); // po kliknieciu w przycick uruchamia sie funkcja tworzaca elementy listy
    resetBtn.addEventListener('click', removeLiElements); // po kliknieciu uruchamia sie funkcja usuwajaca wszystkie li
}

setTimeout(init, 500);

let orderElement = 0; // nr elementu
let size = 10;     // wielkosc czcionki

function createLiElements() {
    for (let i = 0; i < 10; i++) {
        const liElement = document.createElement('li'); // tworzymy element li (10 razy bo tyle razy przejdzie petla)
        document.querySelector('ul').appendChild(liElement);  // dodaejemy li do ul
        liElement.textContent = `Element ${orderElement++}` // dodajemy zawartosc li
        liElement.style.fontSize = `${size++}px`  // zmieniamy wielkosc czcionki
    }
}

function removeLiElements () {
    document.querySelector('ul').textContent = ''; //czysci zawartosc ul
}

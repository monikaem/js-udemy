function init() {    // funkcja dodaje przycisk i tworzy ul po uruchomieniu strony
    const btn = document.createElement('button');
    document.body.appendChild(btn);
    btn.textContent = 'Dodaj 10 elementów listy';
    const ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    btn.addEventListener('click', createLiElements); // po kliknieciu w przycick uruchamia sie funkcja tworzaca elementy listy
}

setTimeout(init, 500);

let orderElement = 0; // nr elementu
let size = 10;     // wielkosc czcionki
let liArray = [];   //tworzymy pusta tablice
liArray.length = 10;  //dlugosc tablicy ma 10 elementow, aby moc po niej iterowac i dodawac elementy
// console.log(liArray);
function createLiElements() {
    for (let i = 0; i < liArray.length; i++) {
        const liElement = document.createElement('li'); // tworzymy element li (10 razy bo tyle razy przejdzie petla po tablicy)
        document.querySelector('ul').appendChild(liElement);  // dodaejemy li do ul
        liElement.textContent = `Element ${orderElement++}` // dodajemy zawartosc li
        liElement.style.fontSize = `${size++}px`  // zmieniamy wielkosc czcionki
    }
}


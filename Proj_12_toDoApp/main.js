const input = document.querySelector('form input');
const form = document.querySelector('form');
let tasksArray = [];
const ul = document.querySelector('ul');
const h1Span = document.querySelector('h1 span');
const clearBtn = document.querySelector('.clear');
const searchInput = document.querySelector('input.search');



function findPhrase (e) {
const searchText = e.target.value.toLowerCase();   //wpisana fraze zamieniamy na male litery
    let tasks = tasksArray.filter(li => li.textContent.toLowerCase().includes(searchText));// filtruje array czy zawiera szukana fraze
    ul.textContent = '';  //czyszczenie starych elementow ul
    tasks.forEach(task => ul.appendChild(task)); //dodanie przefiltrowanych li do ul
//Alternatywnie
// let tasks = [...document.querySelectorAll('li')];  //pobieram wszystkie li i tworze array
//    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText)); // filtruje array czy zawiera szukana fraze
//     ul.textContent = '';  //czyszczenie starych elementow ul
//     tasks.forEach(task => ul.appendChild(task));  //dodanie przefiltrowanych li do ul
}


function clearSearchInput (e) {  //czyszczenie pola wyszukiwarki po odkliknieciu
    e.target.value = '';
    renderList(); // ponowne wczytanie niefiltrowanej ul
}

function renderList () {   // funkcja wczytujaca elemnty listy i nadajaca im index
    ul.textContent = '';
    tasksArray.forEach((element, key) => {  // kazdy element array dostaje nowy index (key)
        element.dataset.key = key;
        ul.appendChild(element); //dodanie elementow do ul
    })
}

function removeTask (e) {   //usuwanie danego elementu
    const index = e.target.parentNode.dataset.key;  //klikajac w przycisk usun pobieramy indeks jego parenta czyli li
    tasksArray.splice(index, 1); // z array usuwamy element o danym indeksie
    h1Span.textContent = tasksArray.length; // aktualizujemy liczbe taskow
    renderList();  // ponownie wczytujemy liste z nowymi indeksami

}


function addTask (e) {  //dodawanie taskow
    e.preventDefault(); // usuwamy defaultowe zachowanie przycisku
    if (input.value){   // jezeli cos zostanie wpisane do inputa
    let liElement = document.createElement('li'); // to tworzymy nowy element li
    liElement.className = 'task';   // nadajemy mu klase task
    liElement.innerHTML = input.value + "<button>Usuń</button>"; // zawartosc li aktualizujemy dodajac mu wartosc inputa oraz przycisk
    tasksArray.push(liElement);  // nowy element dodajemy do arraya
    renderList();   // ponownie wczytujemy liste i nadajemy nowe indeksy
    ul.appendChild(liElement); // nowy element dodajemy do ul
    input.value = '';   //czyscimy pole input
    h1Span.textContent = tasksArray.length; //aktualizujemy liczbe taskow
    liElement.querySelector('button').addEventListener('click', removeTask); // usuwanie poszczegolnych taskow - funkcja removeTask

    } else {    // jezeli nic nie zostanie wpisane do inputa
        alert('Nic nie wpisałeś!');
    }
}


function clearAll () {  // funkcja czyszczaca wszystkie li
    if (tasksArray.length > 1) { //jezeli cokolwiek zostalo dodane do arraya
        tasksArray = [];  // czyscimy array
        ul.textContent = ''; //czyscimy ul
        h1Span.textContent = tasksArray.length; // aktualizujemy liczbe taskow
    }
}




form.addEventListener('submit', addTask);
clearBtn.addEventListener('click', clearAll);
searchInput.addEventListener('input', findPhrase);
searchInput.addEventListener('blur', clearSearchInput);
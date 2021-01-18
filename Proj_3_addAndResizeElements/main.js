const liElements = document.querySelectorAll('li'); // przypisuje wszystkie li do zmiennej
const startBtn = document.querySelector('button'); // przypisuje button do zmiennej
const liElementsArray = Array.from(liElements); // tworze array ze wszystkich li
// console.log(liElementsArray);
let fontSize = 10; // poczatkowa wielkosc czcionki
startBtn.addEventListener('click', function () {
    fontSize++;   //przy kazdym kliknieciu w przycisk zwiekszam czcionke
    for (let i = 0; i < liElementsArray.length; i++){
        liElementsArray[i].style.display = 'block';   //zmiana display z none na block
        liElementsArray[i].style.fontSize = `${fontSize}px`; // zwiekszenie czcionki dla kazdego elementu
    }
})

//alternatywny sposob z forEach
// const liElements = document.querySelectorAll('li'); // przypisuje wszystkie li do zmiennej
// const startBtn = document.querySelector('button'); // przypisuje button do zmiennej
// const liElementsArray = Array.from(liElements); // tworze array ze wszystkich li
// // console.log(liElementsArray);
// let fontSize = 10; // poczatkowa wielkosc czcionki
// startBtn.addEventListener('click', function(){
//     fontSize++;
//     liElementsArray.forEach(liElement => {
//         liElement.style.display = 'block';
//         liElement.style.fontSize = `${fontSize}px`;
//
//     })
// })
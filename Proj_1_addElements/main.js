const button = document.querySelector('.przycisk');
let counter = 0;
button.addEventListener('click', function addElement() {
    console.log('dziala')
    const divElement = document.createElement('div');
    divElement.textContent = String(++counter);
    console.log(divElement.textContent);
    document.querySelector('.squareContainer').appendChild(divElement);
    if (divElement.textContent%5 === 0) {
        divElement.classList.add('square', 'round');
        // divElement.classList.add('round');
    } else {
        divElement.classList.toggle('square')
    }
});
const btn = document.querySelector('body button');
// console.log(btn);
let number = 1;
const addNewListItem = function() {
    console.log('dziala');
    const liElement = document.createElement('li');
    liElement.textContent = number;
    number += 2;
    if (liElement.textContent%3 === 0){
        liElement.classList.add('bigFont');
    }
    document.querySelector('ul').appendChild(liElement);
}

btn.addEventListener('click', addNewListItem)
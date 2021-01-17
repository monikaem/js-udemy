function init() {
    const btn = document.createElement('button');
    document.body.appendChild(btn);
    btn.textContent = 'Dodaj 10 elementów listy';
    const ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    btn.addEventListener('click', createLiElements);
}

setTimeout(init, 500);

let orderElement = 0;
let size = 10;
let liArray = [];
liArray.length = 10;
console.log(liArray);
function createLiElements() {
    for (let i = 0; i < liArray.length; i++) {
        const liElement = document.createElement('li');
        document.body.appendChild(liElement);
        liElement.textContent = `Element ${orderElement++}`
        liElement.style.fontSize = `${size++}px`
    }
}


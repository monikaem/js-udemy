// haslo i wiadomosc bez wzgledu na wielkosc liter
const input = document.querySelector('input');
const passwords = ['jedEN', 'DwA'];
const messages = ['super', 'dziala!'];
const divMessage = document.querySelector('.message');

const showMessage = (e) => {
    divMessage.textContent = '';
    const text = e.target.value;
    for (let i = 0; i < passwords.length; i++){
        if (passwords[i].toLowerCase() === text.toLowerCase()){  //sprawdzamy czy wpisane haslo jest takie samo jak haslo w passwords, dodatkowo zmienione na male lub duze litery
        divMessage.textContent = messages[i];
        e.target.value = '';  // czyscimy pole hasla po wyswietleniu sie wiadomosci
        }
    }

}

input.addEventListener('input', showMessage);



input.addEventListener('focus', (e) => {
    e.target.classList.add('active');   // jezeli jestesmy w polu input to dodawana jest klasa (kolor tla czarny, czionka biala)
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active'); // po wyjsciu z pola input klasa jest usuwana
})
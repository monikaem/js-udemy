const input = document.querySelector('input')  //przypisujemy pole input do zmiennej
const passwords = ['mama', 'wiosna', 'Ania']; //lista hasel
const messages = ['wyjechalam na zawsze', 'wiosna to piekna pora roku', 'Fajny styl masz']; // lista wiadomosci
const div = document.querySelector('.message') // przypisujemy pole wiadomosci do zmiennej


input.addEventListener('input', (e) => {  //nasluchujemy na wpisywanie do pola input
    div.textContent = '';  // przy kazdym nowym wpisywaniu zerujemy wiadomosc
    const text = e.target.value; // przypisujemy to co uzytkownik wpisal do pola input do zmiennej
    // console.log(text);

    passwords.forEach((password, index) => { //iterujemy po haslach w celu sprawdzenia czy sie zgadza z podanym
        if (password === text) {
            // console.log(password, index);
            div.textContent = messages[index]; // jezeli tak to pole wiadomosci wyswietla wiadomosc
            e.target.value = ''; // pole hasla jest czyszczone
        }
    })

})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');   // jezeli jestesmy w polu input to dodawana jest klasa (kolor tla czarny, czionka biala)
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active'); // po wyjsciu z pola input klasa jest usuwana
})

// generator kodow
const btn = document.querySelector('button');
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const codesNumber = 1000; // liczba kodow do wygenerowania
const charsNumber = 10;  //ile znakow ma miec kod



const codesGenerator = () => {
    for (let i = 0; i < codesNumber; i++){
        let code = '';  //na poczatku kod jest pusty
        for (let j = 0; j < charsNumber; j++){
            let index = Math.floor(Math.random() * chars.length);
            code += chars[index]; // do pustego kodu dodajemy 10 randomych znakow z chars
        }
        const div = document.createElement('div');
        div.textContent = code;  //do utworzonego diva dodajemy kody
        document.querySelector('section').appendChild(div);
    }
}



btn.addEventListener("mousedown", (e) =>{
    e.target.style.backgroundColor = 'grey';   // zmiana koloru przycisku po kliknieciu myszka
})
btn.addEventListener("mouseup", (e) =>{ // powrot do koloru podstawowego
    e.target.style.backgroundColor = 'aliceblue';
})



btn.addEventListener('click', codesGenerator);
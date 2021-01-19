const btn = document.querySelector('button');
const div = document.querySelector('div');
const girlNames = ['Anna', 'Magda', 'Julia', 'Krysia', 'Zuzia', 'Ola'];
const boyNames = ['Kamil', 'Patryk', 'Dominik', 'Ignacy', 'Teofil', 'Adam'];  //tablice imion
const prefix = ['Wybierz te imiona:', 'Moim zdaniem najładniejsze będą:', 'Mam wrażenie, że te imiona Ci się spododobają']; // tablice prefiksow

const findNames = () => {
    let girlIndex = Math.floor(Math.random() * girlNames.length); //losowanie imion i prefiksow
    let boyIndex = Math.floor(Math.random() * boyNames.length);
    let prefixIndex = Math.floor(Math.random() * prefix.length);
    div.style.backgroundColor = 'aliceblue';
    div.style.border = '2px solid lightsteelblue' // ustawienie kolorow tla i border dla elementu div
    div.textContent = `${prefix[prefixIndex]} dla dziewczynki - ${girlNames[girlIndex]}, a dla chłopca ${boyNames[boyIndex]}.`; // wyswietlanie wiadomosci
}

btn.addEventListener("mousedown", (e) =>{
    e.target.style.backgroundColor = 'grey';   // zmiana koloru przycisku po kliknieciu myszka
})
btn.addEventListener("mouseup", (e) =>{ // powrot do koloru podstawowego
    e.target.style.backgroundColor = 'aliceblue';
})



btn.addEventListener('click', findNames);
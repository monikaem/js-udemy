const slideList = [{        //obiekt z obrazkami i tekstami
    img: './img1.jpg',
    text: 'Pierwszy tekst',
},
    {
        img: './img2.jpg',
        text: 'Drugi tekst',

    }, {
        img: './img3.jpg',
        text: 'Trzeci tekst',
    }]

const time = 3000;
let active = 0;  //wskazuje ktory obrazek i tekst ma sie wyswietlac
const image = document.querySelector('.slider');
const h1 = document.querySelector('h1');
const dots = [...document.querySelectorAll('.dots span')];
let leftOrRight = 1;

function changeDot () {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));  //znajdujemy indeks kropki z klasa active
    dots[activeDot].classList.remove('active'); // od kropki usuwamy klas active
    dots[active].classList.add('active');  // jezeli aktywny jest obrazek z indeksem 2 to aktywujemy tez kropke z indeksem 2
}
function changeSlide () {  //zmiana slajdu
    active += leftOrRight;  // czyw lewo czy w prawo
    if (active === -1){  // jezeli active bedzie rowne -1 to znaczy ze ma przejsc do ostatniego obrazka (od konca)
        active = slideList.length -1;
    }
    if (active === slideList.length){  // jezeli active bedzie rowny ostatniemu elementowi to active ma wrocic do 0
        active = 0;
    }
    image.src = slideList[active].img;   //dodajemy do atributte src nowe zdrodlo - pobierane z obiektu w zaleznosci od active
    h1.textContent = slideList[active].text; //dodawanie tekstu
    changeDot();   //zmiana klasy aktywnej kropki
}
let indexInterval = setInterval(changeSlide, time); // ustawiamy zmiane slajdu co jakis czas i przypisujemy do zmiennej ktora prszechowuje index interval

function keyChangeSlide (e) {
   if (e.keyCode === 39 || e.keyCode === 37) {  //jezeli wcisniemy 39 lub 37
       clearInterval(indexInterval); //stopujemy funkcje zmieniajaca slajdy
       if (e.keyCode === 39) {  // jezeli wcisniemy 39 to do active dodajemy 1
           leftOrRight = 1;
       } else if (e.keyCode === 37) {  // jezeli wcisniemy 37 to od active odejmujemy 1
           leftOrRight = -1;
       }
       changeSlide();  //wywolujemy funkcje zmieniajaca slajd i kropke z nowymi parametrami zaleznymi od nr klawisza
       changeDot();
       leftOrRight = 1;  // ponownie zmieniamy na dodawanie 1 do active
       indexInterval = setInterval(changeSlide, time); // ponownie uruchamiamy setInterval aby zmieniac slajd, ponownie przypisujemy do tej samej zmiennej aby moc wyzerowac ta funkcje
   }
}


window.addEventListener("keydown", keyChangeSlide); // nasluchiwanie na wcisniecie klawisza




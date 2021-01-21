//autoslider

const slideList = [{
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
let active = 0;
const image = document.querySelector('.slider');
const h1 = document.querySelector('h1');
const dots = [...document.querySelectorAll('.dots span')];


function changeDot () {
const activeDot = dots.findIndex(dot => dot.classList.contains('active')) // usuwamy klase active kropce ktora obecnie ta klase posiada
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active'); // dodajemy klase nowej kropce w zaleznosci od tego jaka wartosc przyjmuje active
}
function changeSlide () { //zmiana slajdu
active++;
    if (active === slideList.length){ // jezeli active bedzie rowny dlugosci obiektu to zerujemy actice
    active = 0;
    }
    image.src = slideList[active].img; //zmiana obrazka i tekstu w zaleznosci od wartosci active
    h1.textContent = slideList[active].text;
    changeDot(); // zmiana kropki
}


setInterval(changeSlide, time); // zmiana slajdu co okreslony czas


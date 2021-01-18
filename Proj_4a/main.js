// zmiana koloru body w zaleznosci od pozycji klikniecia myszki
document.body.addEventListener('click', function changeBcgColor(e){
    const x = e.clientX; //pozycja klikniecia myszki (x)
    const y = e.clientY; //pozycja klikniecia myszki (y)
    console.log(x, y); // informacja na temat pozycji
    if (x % 2 === 0 && y % 2 === 0){   // jezeli obie wartosci sa parzyste, czyli dziela sie na dwa bez reszty to kolor zielony
        document.body.style.backgroundColor = 'red';
    } else if (x % 2 === 0 || y % 2 === 0){   // jezeli jedna z wartosci jest parzysta to kolor zielony
        document.body.style.backgroundColor = 'green';
    } else {
        document.body.style.backgroundColor = 'blue'; //jezeli obie nieparzyste to kolor niebieski
    }
})
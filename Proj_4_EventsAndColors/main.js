// Zmiana koloru w zaleznosci od pozycji myszki
const h1 = document.querySelector('h1'); // przypisujemy element h1 do zmiennej
document.body.addEventListener("mousemove", (e) =>{  //nasluchiwanie na ruch myszki w obrebie body
    const x = e.clientX; // pobieramy pozycje x myszki
    const y = e.clientY; // pobieramy pozycje y myszki
    const width = innerWidth;  // szerokosc okna przegladarki
    const height = innerHeight; // wysokosc okna przegladarki
    const red = x/width * 100;  // parametr red w rgb
    const green = y/height * 100; // parametr green
    const blue = ((x/width * 100) + (y/height * 100))/2; // parametr blue
    h1.textContent = `${x}, ${y}`; // h1 wyswietla pozycje myszki
    document.body.style.backgroundColor = `rgb(${red}%,${green}%, ${blue}%`; // zmiana koloru w zaleznosci od pozycji myszki

})
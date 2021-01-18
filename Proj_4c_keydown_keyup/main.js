//zmiana kolorow za pomoca strzalek gora dol
let red = 100; //ustawiam parametry kolorow
let green = 100;
let blue = 100;
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;// ustawiam kolor poczatkowy na szary

const changeColor = (event) => {   // funkcja zmieniajaca kolor w zaleznosci od tego ktory klawisz wciskamy
    if (event.keyCode === 38) {  // 38 to keycode strzalki w gore
        red++;
        green++;
        blue++;
    } else if (event.keyCode === 40){ // to keycode strzalki w dol
        red--;
        green--;
        blue--;
    }
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`; //ustawiam nowy kolor
}
//alternatywny sposob z uzyciem switch
// const changeColor = (event) => {
//     switch (event.keyCode){
//         case 38:
//             console.log('Strzalka up')
//             red++;
//             green++;
//             blue++;
//             break;
//         case 40:
//             console.log('strzalka down')
//             red--;
//             green--;
//             blue--;
//         break;
//     }
//     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
// }
window.addEventListener('keydown', changeColor);



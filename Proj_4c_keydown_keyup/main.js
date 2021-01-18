//zmiana kolorow za pomoca strzalek gora dol
let red = 100; //ustawiam parametry kolorow
let green = 100;
let blue = 100;
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;// ustawiam kolor poczatkowy na szary

const changeColor = (event) => {   // funkcja zmieniajaca kolor w zaleznosci od tego ktory klawisz wciskamy
    if (event.keyCode === 38 && red < 255) {  // 38 to keycode strzalki w gore
        red++;
        green++;
        blue++;

    } else if (event.keyCode === 40 && red >= 0){ // to keycode strzalki w dol
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
//             document.body.style.backgroundColor = `rgb(${red < 255 ? red++ : red }, ${green < 255 ? green++ : green}, ${blue < 255 ? blue++ : blue}`;
//                 break;
//         case 40:
//             document.body.style.backgroundColor = `rgb(${red >= 0 ? red-- : red}, ${green >= 0 ? green-- : green}, ${blue >= 0 ? blue-- : blue}`;
//                 break;
//     }
//
// }
window.addEventListener('keydown', changeColor);



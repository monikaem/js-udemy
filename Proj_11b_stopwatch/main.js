// http://websamuraj.pl/examples/js/projekt11/

const btnTime = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const panel = document.querySelector('div.time div');

let time = 0 // setne sekundy
let active = false; //czy czas ma 'leciec'
let idI; // interval index

const timer = () => {
    if (!active) {
        active = !active;   //zmienia z false na true
        btnTime.textContent = 'Pauza';
        idI = setInterval(start, 10); //zaczyna odliczanie
    } else {
        active = !active;   // zmienia z true na false
        btnTime.textContent = 'Start';
        clearInterval(idI); //stopuje odliczanie
    }
}

const start = () => {
    time++
    panel.textContent = (time/100).toFixed(2);
}

const reset = () => {  // resetuje timer
    time = 0;
    panel.textContent = '---';
    clearInterval(idI);
    btnTime.textContent = 'Start';
    active = false;
}

btnTime.addEventListener('click', timer);
btnReset.addEventListener('click', reset);




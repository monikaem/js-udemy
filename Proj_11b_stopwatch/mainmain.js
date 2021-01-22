const mainButton = document.querySelector('.main');
const resetButton = document.querySelector('.reset');
const div = document.querySelector('div');
let startStop = 0;
let intIndex;
let time = 0;

function timer () {
    if (!startStop) {
        startStop = !startStop;
        mainButton.textContent = 'Pauza';
        intIndex = setInterval(startTimer, 10);
    } else {
        startStop = !startStop;
        mainButton.textContent = 'Start';
        clearInterval(intIndex)
    }
}

function startTimer () {
    time++;
    div.textContent = (time/100).toFixed(2);
}

function resetTimer () {
    time = 0;
    div.textContent = '---'
    clearInterval(intIndex);
    mainButton.textContent = 'Start';
    active = false;

}





mainButton.addEventListener('click', timer);
resetButton.addEventListener('click', resetTimer);
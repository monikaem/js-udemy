const stone = document.querySelector(".stone");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");  //obrazki przypisane do zmiennych
const button = document.querySelector('.play');
const usersChoice = document.querySelector('.usersChoice');
const computersChoice = document.querySelector('.computersChoice');
const winner = document.querySelector('.winner');
const remis = document.querySelector('.remis');
const gameNumber = document.querySelector('.gameNumber');
const win = document.querySelector('.win');
const loss = document.querySelector('.loss');
const repeatButton = document.querySelector('.repeat');
let gameCounter = 0;
let winCounter = 0;
let lossCounter = 0;
let remisCounter = 0;
let whatUserChose;
let whatComputerChose;

function addUsersChoiceStone(){
    button.style.border = "dotted deeppink 2px"
    usersChoice.textContent = 'Twój wybór: kamień';
    whatUserChose = 'stone';
}
function addUsersChoicePaper () {
    button.style.border = "dotted deeppink 2px"
    usersChoice.textContent = 'Twój wybór: papier';
    whatUserChose = 'paper';
}
function addUsersChoiceScissors () {
    button.style.border = "dotted deeppink 2px"
    usersChoice.textContent = 'Twój wybór: nożyczki';
    whatUserChose = 'scissors';
}



function addComputersChoiceAndShowTheWinner () {
    let randomNumber = Math.floor(Math.random() * 3);
    if (!randomNumber){
        computersChoice.textContent = `Wybór komputera: papier`;
        whatComputerChose = 'paper';
    } else if (randomNumber){
        computersChoice.textContent = `Wybór komputera: kamień`;
        whatComputerChose = 'stone';
    } else {
        computersChoice.textContent = `Wybór komputera: nożyczki`
        whatComputerChose = 'scissors';
    }
    gameCounter++
    gameNumber.textContent = `liczba gier: ${gameCounter}`;

    if (whatComputerChose === whatUserChose){
        winner.textContent = 'Zwycięzca gry: REMIS';
        remisCounter++;
        remis.textContent = `remisów: ${remisCounter}`;
    } else if (whatComputerChose === 'stone'){
        if (whatUserChose === 'paper'){
            winner.textContent = 'Zwycięzca gry: USER';
            winCounter++
            win.textContent = `wygranych: ${winCounter}`;
        } else if (whatUserChose === 'scissors'){
            winner.textContent = 'Zwycięzca gry: KOMPUTER';
            lossCounter++;
            loss.textContent = `przegranych: ${lossCounter}`;
        }
    }
}

function clearChoices() {
    winner.textContent = 'Zwycięzca gry: ';
    computersChoice.textContent = `Wybór komputera: `;
    usersChoice.textContent = 'Twój wybór: ';
}




stone.addEventListener('click', addUsersChoiceStone);
paper.addEventListener('click', addUsersChoicePaper);
scissors.addEventListener('click', addUsersChoiceScissors);
button.addEventListener('click', addComputersChoiceAndShowTheWinner);
repeatButton.addEventListener('click', clearChoices);
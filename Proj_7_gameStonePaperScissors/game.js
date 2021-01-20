const gameSummary = {  //dane gry
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}
const game = {  //wybor uzytkownika, wybor komputera
    playerHand: "",
    aiHand: "",
}

function handSelection () {  //wybor uzytkownika
    game.playerHand = this.dataset.option; //przypisane wartosci wyboru uzytkownika w zaleznosci jaki obrazek zostal wybrany
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 4px yellow";   // dodanie ramki do wybranego obrazka
}
function aiChoice () {
    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option; //wybor komputera i przypisanie wartosci
    return aiHand;
}
function checkResult (player, ai) { //sprawdzenie wyniku
    if (player === ai) {
        return 'draw';
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")){
        return 'win';
    } else {
        return 'loss';
    }
}
function publishResult (player, ai, result) { //opublikowanie wyniku
    document.querySelector('[data-summary="your-choice"]').textContent = player;// wyswietla wybor uzytkownika
    document.querySelector('[data-summary="ai-choice"]').textContent = ai; //wyswietla wybor komputera
    gameSummary.numbers++; //dodaje gre do sumy gier
    document.querySelector('p.numbers span').textContent = gameSummary.numbers; //publikacja liczby gier
    if (result === 'win'){
    gameSummary.wins++;
        document.querySelector('p.wins span').textContent = gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = 'Ty wygrałeś!!!!';
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else if (result === 'loss'){
        gameSummary.losses++;
        document.querySelector('p.losses span').textContent = gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = 'Przegrałeś!!!!';
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    } else {
        gameSummary.draws++;
        document.querySelector('p.draws span').textContent = gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = 'Remis!!!!';
        document.querySelector('[data-summary="who-win"]').style.color = "grey";
    }
}
function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';  // po publikacji wyniku czyscimy zawartosc pol z wyborem
    game.playerHand = '';
    game.aiHand = '';
}
function startGame() {  // funkcja sterujaca gra
    if (!game.playerHand){
      return alert("Wybierz dłoń!");
    }
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
}

const hands = [...document.querySelectorAll('.select img')]; // pobieramy wszystkie 3 obrazki
hands.forEach(img => img.addEventListener('click', handSelection)) //nasluchujemy na klikniecie

document.querySelector('.start').addEventListener('click', startGame); // przycisk startujacy gre
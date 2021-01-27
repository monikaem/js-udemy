class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);

        document.getElementById('start').addEventListener('click', this.startGame.bind(this)); //pobieramy wszystkie elementy
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.boards = [...document.querySelectorAll('div.color')];
        this.inputBid = document.querySelector('#bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGames = document.querySelector('.score span.number');
        this.spanWins = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');
        this.render();   //poczatkowy wyglad strony
    }

    render(colors = ['gray', 'gray', 'gray'], money = this.wallet.getWalletValue(), result = '', stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        this.boards.forEach((color, index) => {
                color.style.backgroundColor = colors[index]   //ustawienie kolor tablic zgodnie z losowaniem
            }
        )
        this.spanWallet.textContent = money;  // ustawienie zawartosci pozostalych pieniedzy
        if (result) {
            result = `Wygrałeś ${wonMoney}$. `
        } else if (!result && result !== "") {
            result = `Przegrałeś ${bid}$. `
        }
        this.spanResult.textContent = result;  //wynik
        this.spanGames.textContent = stats[0]; //liczba gier
        this.spanWins.textContent = stats[1];  //liczba wygranych
        this.spanLosses.textContent = stats[2];  // liczba przegranych
        this.inputBid.value = ''; // zerowanie zawartosci inputu po grze
    }

    startGame() {
        if (this.inputBid.value < 1) return alert('Kwota, którą chcesz grać jest za mała!'); //sprawdzenie czy wpisana kwota jest prawidlowa
        const bid = Math.floor(this.inputBid.value);
        if (!this.wallet.checkCanPlay(bid)){   //sprawdzenie czy jest wystarczajaco srodkow do gry
            return alert('Masz za mało środków lub podana została nieprawidłowa wartość');
        }
        this.wallet.changeWallet(bid, '-'); // zmiana zawartosci portfela po wpisaniu inputu
        this.draw = new Draw(); // losowanie
        const colors = this.draw.getDrawResult(); // pobranie wyniku losowania i przypisanie do zmiennej colors
        const win = Result.checkWinner(colors); //sprawdzenie kto wygral
        const wonMoney = Result.moneyWonInGame(win, bid); // sprawdzenie ile wygrano
        this.wallet.changeWallet(wonMoney, '+'); // zmiana zawartosci portfela po grze
        this.stats.addGameToStats(win, bid); //dodanie statystyk
        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGamesStats(), bid, wonMoney); // ponowne wczytanie strony z nowymi wartosciami
    }
}




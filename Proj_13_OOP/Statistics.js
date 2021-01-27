class Statistics {
    constructor() {
        this.gameResults = [];

    }

    addGameToStats(win, bid) {
        let gameResult = {
            win,
            bid
        }
        this.gameResults.push(gameResult);
    }

    showGamesStats() {
        let gamesNumber = this.gameResults.length;
        let winNumber = this.gameResults.filter(gameResult => gameResult.win).length;
        let lossNumber = this.gameResults.filter(gameResult => !gameResult.win).length;
        return [gamesNumber, winNumber, lossNumber];
    }
}



// const stats = new Statistics();
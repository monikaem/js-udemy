class Wallet {
    constructor (money) {
       let _money = money;
        // pobieranie aktualnej zawartosci portfela
        this.getWalletValue = () => _money;
        //sprawdzanie czy uzytkownik ma odpowiednia ilosc srodkow
        this.checkCanPlay = value => {
            if (_money >= value) {
                return true;
                return false;
            }
        }
        //sprawdzanie wartosci w input i czy wygrana czy przegrana
        this.changeWallet = (value, type = '+') => {
            if (typeof value === 'number' && !isNaN(value)){
                if (type === '+'){
                    return _money += value;
                } else if (type === '-'){
                    return _money -= value;
                } else {
                    throw new Error('Nieprawidłowy typ działania');
                }
            } else {
                console.log(typeof value);
                throw new Error('Nieprawidłowa liczba');
            }
        }
    }

}



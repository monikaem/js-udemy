
// kwadrat rosnacy podczas scrollowania
const newElement = document.createElement('div'); // tworzenie nowego diva
document.body.appendChild(newElement); // dolaczenie diva do body
newElement.classList.add('square');  // nadanie klasy - niekonieczne

let grow = true;  // wskaznik czy ma rosnac (flag)
let size = 10; // wielkosc kwadratu
newElement.style.height = `${size}px`;
newElement.style.width = `${size}px`;

//maksymalna wielkosc kwadratu = polowa okna przegladarki czyli window.innerWidth * 0.5
window.addEventListener('scroll', function(){
    if (grow) {   // zwiekszanie podczas scrollowania
        size += 5;
        newElement.style.height = `${size}px`;
        newElement.style.width = `${size}px`;
    } else  {
            size -= 5;  // zmniejszanie podczas scrollowania
            newElement.style.height = `${size}px`;
            newElement.style.width = `${size}px`;
    }
    if (size >= window.innerWidth * 0.5){   // gdy kwadrat osiagnie polowe wielkosci okna przegladarki
        grow = !grow;
    } else if (size === 0){   // gdy kwadrat zmniejszy sie do 0
        grow = !grow;
    }
});


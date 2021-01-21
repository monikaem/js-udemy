const div = document.querySelector('div');

function clock () {
    let seconds = 0;
    function timer () {
        div.textContent = `Jesteś na tej stronie już ${seconds++} sekund`;
    }
    return timer;
}

const counter = clock();

setInterval(counter, 1000);
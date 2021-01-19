const btn = document.querySelector('button');
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const codesNumber = 1000;
const charsNumber = 10;



const codesGenerator = () => {
    for (let i = 0; i < codesNumber; i++){
        let code = '';
        for (let j = 0; j < charsNumber; j++){
            let index = Math.floor(Math.random() * chars.length);
            code += chars[index];
        }
        const div = document.createElement('div');
        div.textContent = code;
        document.querySelector('section').appendChild(div);
    }
}



btn.addEventListener("mousedown", (e) =>{
    e.target.style.backgroundColor = 'grey';   // zmiana koloru przycisku po kliknieciu myszka
})
btn.addEventListener("mouseup", (e) =>{ // powrot do koloru podstawowego
    e.target.style.backgroundColor = 'aliceblue';
})



btn.addEventListener('click', codesGenerator);
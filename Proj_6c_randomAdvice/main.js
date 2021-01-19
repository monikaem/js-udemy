// losowa rada
onst addBtn = document.querySelector('.add');
const resetBtn = document.querySelector('.reset');
const showAdviceBtn = document.querySelector('.showAdvice');
const showOptionsBtn = document.querySelector('.showOptions');
const input = document.querySelector('#textInput');
let arrayOfOptions = ['nie poddawaj się', 'olej to', 'porozmawiaj z kimś']; //defaultowe opcje

const addOption = () => {
    let writtenOption = input.value; // dodawanie opcji do array
    arrayOfOptions.push(writtenOption);
    alert('Dodano opcję!');
    input.value = '';
}
const resetOptions = () =>{
    arrayOfOptions = [];   //zerowanie array z opcjami
    alert('Możesz zacząć od nowa!');
}
const showAdvice = () => {
    let randomNumber = Math.floor(Math.random() * arrayOfOptions.length);  // losowanie rady
    document.querySelector('.advice').textContent = arrayOfOptions[randomNumber];
}

const showOptions = () => {
    alert(`Masz do wyboru: ${arrayOfOptions.join(', ')}`); // pokazywanie dostepnych mozliwosci
}

input.addEventListener('focus', (e) => {
    e.target.value = '';
})
addBtn.addEventListener('click', addOption);
resetBtn.addEventListener('click', resetOptions);
showAdviceBtn.addEventListener('click', showAdvice);
showOptionsBtn.addEventListener('click', showOptions);
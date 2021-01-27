class List {   //klasa zawierajaca liste i metody do zarzadzania lista
    constructor() {
        this.tasks = [];
        this.ul = document.querySelector('ul');
        this.h1Span = document.querySelector('h1 span');
    }

    addTaskToList(value) {  //dodawanie taska
        if (value) {
            let liElement = document.createElement('li');
            liElement.innerHTML = value + '<button>Usuń</button>';
            liElement.className = 'task';
            this.tasks.push(liElement);
            this.ul.appendChild(liElement);
            this.h1Span.textContent = this.tasks.length;
            liElement.querySelector('button').addEventListener('click', this.removeTask.bind(this));   //usuwanie poszczegolnych taskow
        } else {
            alert('Nic nie zostało wpisane!');
        }
    }

    clearAllTasks() {  //czyszczenie wszystkich taskow
        if (this.tasks.length > 0) { //tylko gdy liczba taskow jest wieksza od 0
            this.tasks = [];
            this.ul.textContent = '';
            this.h1Span.textContent = this.tasks.length;
        } else {
            alert('Lista zadań jest pusta!');
        }
    }

    renderList() {  //nadawanie data-key elementom listy
        this.ul.textContent = '';
        this.tasks.forEach((li, index) => {
            li.dataset.key = index;
            this.ul.appendChild(li);
        })
    }

    removeTask(e) {   //usuwanie taskow
        let elementToDeleteIndex = e.target.parentNode.dataset.key; //pobranie indeksu li ktory chcemy usunac, parentnode bo w tym przypadku e to button, a parent to li
        this.tasks.splice(elementToDeleteIndex,1);
        this.h1Span.textContent = this.tasks.length;
        this.renderList();
    }

    isPhraseInList(value) {  //szukanie frazy
        let searchPhrase = value.toLowerCase();
            let searchTasks = this.tasks.filter(task => task.textContent.toLowerCase().includes(searchPhrase));
            this.ul.textContent = '';
            searchTasks.forEach(task => this.ul.appendChild(task));
        }
}

class Manager {
    constructor() {
        this.list = new List();
        this.input = document.querySelector('.input');
        this.form = document.querySelector('form');
        this.clearAll = document.querySelector('button.clear');
        this.searchInput = document.querySelector('input.search');
        this.manage();
    }
    manage() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.list.addTaskToList(this.input.value);
            this.input.value = '';
            this.list.renderList();
        });
        this.clearAll.addEventListener('click', () =>{
            this.list.clearAllTasks();
            this.list.renderList()});

        this.searchInput.addEventListener('input', () => {
            this.list.isPhraseInList(this.searchInput.value);
        });
    }
}

const main = new Manager();

'use strict';

class Book{
    constructor(title, author, pages, year){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
        this.finishedReading = false;
        this.id = '';
    }

    toggleFinishedReading(){
        if(this.finishedReading === true){
            this.finishedReading = false;
        }
        else this.finishedReading = true;
    }
    
    tellAll(){
        return [this.title, this.author, this.pages, this.year, this.finishedReading];
    }
}

let myLib = [];
const shelf = document.querySelector("#table-data");

const addBtn =  document.querySelector('#add-book');
addBtn.addEventListener('click', addNewBook);

const formBookData = document.querySelector('#book-form');

function addNewBook(e){
    // make form visible
    formBookData.classList.toggle('hidden');
    addBtn.classList.toggle('hidden');
    // make add button invisible
}

const submitBookBtn = document.querySelector('#submit-add-book');
submitBookBtn.addEventListener('click', createBookFromForm);


function clearFormData(){
    formBookData.title.value = '';
    formBookData['author-name'].value = '';
    formBookData['page-count'].value = '';
    formBookData['pub-year'].value = '';
}

// use form data to populate library
function createBookFromForm(e){
    e.preventDefault();
    console.log('it kinda works');
    if (formBookData.title.value === null || formBookData.title.value === undefined || formBookData.title.value === ''){
        alert('Book needs a title.');
        return;
    }
    let book = new Book(formBookData.title.value, formBookData['author-name'].value, formBookData['page-count'].value, formBookData['pub-year'].value);
    addBookToLibrary(book);
    displayLib();
    clearFormData();
    formBookData.classList.toggle('hidden');
    addBtn.classList.toggle('hidden');
    // make form invisible
    // make add button visible
}

// remove button functionality
function removeBook(e){
    delete myLib[e.target.parentElement.getAttribute('idNum')];
    myLib = myLib.filter(el => {
        return el != null;
    });
    myLib.forEach(book => {
        book.id = `${myLib.indexOf(book)}`;
    });
    displayLib();
}

function addBookToLibrary(book){
    myLib.push(book);
    book.id = `${myLib.indexOf(book)}`;
}

function displayLib(){
    shelf.innerHTML = '';
    myLib.forEach(book => {
        addBookToDisplay(book);       
    });
}

function addBookToDisplay(book) {
    const bookRow = document.createElement('tr');
    bookRow.setAttribute('idNum', book.id);
    book.tellAll().forEach(elem => {
        let info = document.createElement('td');
        info.textContent = elem;
        bookRow.appendChild(info);
    });
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'x'
    bookRow.appendChild(removeBtn);    
    shelf.appendChild(bookRow);
    removeBtn.addEventListener('click', removeBook);
}






const book1 = new Book("Assassin's Fate", "Hobb, Robin",);
addBookToLibrary(book1);
const book2 = new Book("Golden Fool", "Hobb, Robin");
book2.year = 1992;
addBookToLibrary(book2);
displayLib();


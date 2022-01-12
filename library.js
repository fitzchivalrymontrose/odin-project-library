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
const submitBookBtn = document.querySelector('#submit-add-book');
submitBookBtn.addEventListener('click', createBookFromForm);
const cancelBtn = document.querySelector('#cancel-add-book');
cancelBtn.addEventListener('click', cancelAddBook);
// add book button
function addNewBook(e){
    formBookData.classList.toggle('hidden');
    addBtn.classList.toggle('hidden');
}
// remove book button
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
// form submit button
function createBookFromForm(e){
    e.preventDefault();
    console.log('it kinda works');
    if (formBookData.title.value === null || formBookData.title.value === undefined || formBookData.title.value === ''){
        alert('Book needs a title.');
        return;
    }
    let book = new Book(formBookData.title.value, formBookData['author-name'].value, formBookData['page-count'].value, formBookData['pub-year'].value);
    if (formBookData['have-read'].checked){
        book.finishedReading = true;
    }
    else {
        book.finishedReading = false;
    }
    addBookToLibrary(book);
    displayLib();
    clearFormData();
    formBookData.classList.toggle('hidden');
    addBtn.classList.toggle('hidden');
}
// form cancel button
function cancelAddBook(e){
    e.preventDefault();
    clearFormData();
    formBookData.classList.toggle('hidden');
    addBtn.classList.toggle('hidden');
}
// read status checkbox
function toggleHaveRead(e){
    let book = myLib[e.target.parentElement.parentElement.getAttribute('idnum')];
    book.toggleFinishedReading();
 }
function clearFormData(){
    formBookData.title.value = '';
    formBookData['author-name'].value = '';
    formBookData['page-count'].value = '';
    formBookData['pub-year'].value = '';
    formBookData['have-read'].checked = false;
}
function addBookToLibrary(book){
    myLib.push(book);
    book.id = `${myLib.indexOf(book)}`;
}
function addBookToDisplay(book) {
    // create table row
    const bookRow = document.createElement('tr');
    bookRow.setAttribute('idNum', book.id);
    // populate table row with book object data
    let title = document.createElement('td');
    title.textContent = book.title;
    bookRow.appendChild(title);
    let author = document.createElement('td');
    author.textContent = book.author;
    bookRow.appendChild(author);
    let pages = document.createElement('td');
    pages.textContent = book.pages;
    bookRow.appendChild(pages);
    let year = document.createElement('td');
    year.textContent = book.year;
    bookRow.appendChild(year);
    // checkbox indicating read status of book
    // create checkbox
    let haveRead = document.createElement('td');
    let haveReadToggle = document.createElement('input');
    haveReadToggle.type = 'checkbox';
    haveReadToggle.id = 'checkRead';
    haveReadToggle.name = 'checkRead';
    if (book.finishedReading ===  false){
        haveReadToggle.checked = false;
    }
    else if (book.finishedReading === true){
        haveReadToggle.checked = true;
    }
    // add eventListener to checkbox to change book object data
    haveReadToggle.addEventListener('click', toggleHaveRead);
    // add checkbox to row
    haveRead.appendChild(haveReadToggle);
    bookRow.appendChild(haveRead);
    // button to remove book
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'x'
    bookRow.appendChild(removeBtn);
    console.log(bookRow);    
    shelf.appendChild(bookRow);
    removeBtn.addEventListener('click', removeBook);
}
function displayLib(){
    shelf.innerHTML = '';
    myLib.forEach(book => {
        addBookToDisplay(book);       
    });
}


const book1 = new Book("Assassin's Fate", "Hobb, Robin", '864', '2017');
addBookToLibrary(book1);
const book2 = new Book("Golden Fool", "Hobb, Robin", '640', '2014');
addBookToLibrary(book2);
const book3 = new Book("Shaman's Crossing", "Robin Hobb", "400", "2005");
addBookToLibrary(book3);
displayLib();


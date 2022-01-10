'use strict';

let myLib = [];
const shelf = document.querySelector("#table-data");

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

function addBookToLibrary(book){
    myLib.push(book);
    book.id = `${myLib.indexOf(book)}`;
}

function removeBookFromLibrary(book) {
    
}

function displayLib(){
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
    removeBtn.textContent = 'x'
    bookRow.appendChild(removeBtn);    
    shelf.appendChild(bookRow);
}







const book1 = new Book("Assassin's Fate", "Hobb, Robin",);
addBookToLibrary(book1);
const book2 = new Book("Golden Fool", "Hobb, Robin");
book2.year = 1992;
addBookToLibrary(book2);
displayLib();


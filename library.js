'use strict';

let myLib = [];

function Book(title, author, pages, pubYear){
    //constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pubYear = pubYear;
    this.finishedReading = false;
}
Book.prototype.toggleFinishedReading = function (){
    if(this.finishedReading === true){
        this.finishedReading = false;
    }
    else{
        this.finishedReading = true;
    }
}

const shelf = document.querySelector("#table-data");

const book1 = new Book("Assassin's Fate", "Hobb, Robin",);
addBookToLibrary(book1);
const book2 = new Book("Golden Fool", "Hobb, Robin");
addBookToLibrary(book2);
displayLib();

function addBookToLibrary(book){
    myLib.push(book);
}

function removeBookFromLibrary(book) {
    
}


// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display

function displayLib(){
    myLib.forEach(book => {
        addToShelf(book);       
    });
}
function addToShelf(book) {
    shelf.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td>${book.pubYear}</td></tr>`;
}
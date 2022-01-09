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

const book1 = new Book("Assassin's Fate", "Hobb, Robin");
book1.toggleFinishedReading();
console.log(book1);


function addBookToLibrary(book){
    myLib.push(book);
}

// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display

function displayLib(){
    myLib.forEach(book => {
        //display book        
    });
}
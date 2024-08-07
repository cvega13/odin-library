
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, " + read; 
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    // Get parent div

    // Loop through books

    // Add book as child to parent div

}


console.log(myLibrary);
const JurassicPark = new Book("Jurassic Park", "Michael Crichton", 416, "read");
addBookToLibrary(JurassicPark);
console.log(myLibrary);


/*
const JurassicPark = new Book("Jurassic Park", "Michael Crichton", 416, "read");
console.log(JurassicPark.info());
*/
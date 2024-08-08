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

// Adds a Book object to the library
function addBookToLibrary(book) {
    myLibrary.push(book);
}


// Displays book cards of all library books
function displayBooks() {
    const bookDisplay = document.querySelector(".bookDisplay");

    // Clears current books
    while (bookDisplay.lastElementChild) {
         bookDisplay.removeChild(bookDisplay.lastElementChild);
    }

    // Loop through current library
    myLibrary.forEach(function (book) {
        let card = document.createElement("div");
        card.classList.add("card");

        // Add Book details to card
        let title = document.createElement("p");
        title.classList.add("title");
        title.textContent = book.title;
        card.appendChild(title);

        let author = document.createElement("p");
        author.classList.add("author");
        author.textContent = "By " + book.author;
        card.appendChild(author);

        let pages = document.createElement("p");
        pages.classList.add("pages");
        pages.textContent = book.pages + " Pages";
        card.appendChild(pages);

        let read = document.createElement("button");
        read.classList.add("read");
        read.textContent = book.read;
        card.appendChild(read);

        let remove = document.createElement("button");
        remove.classList.add("remove");
        remove.textContent = "remove";
        card.appendChild(remove);

        bookDisplay.appendChild(card);
    });
}

// Opens form to enter new books
const addBookButton = document.querySelector(".addBook");
const dialog = document.querySelector(".addBookDialog");
const form = document.querySelector(".newBookDiv");
const cancelBtn = document.querySelector(".cancelBtn");
addBookButton.addEventListener("click", (event) => {
    dialog.showModal();
})

// Closes form to enter new books
cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close()
})


form.addEventListener("submit", (event) => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector('input[name="readBook"]:checked').value;

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    displayBooks();
    dialog.close();
    form.reset();
});

/*
const JurassicPark = new Book("Jurassic Park", "Michael Crichton", 416, "read");
const FNAF = new Book("Into the Pit", "Scott Cawthon", 224, "read");
addBookToLibrary(JurassicPark);
addBookToLibrary(FNAF);
displayBooks();
*/
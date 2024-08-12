const myLibrary = [];

class Book {
    constructor (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
    get info() {
        return title + " by " + author + ", " + pages + " pages, " + read; 
    }
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

        // Associate card with index in library array
        let bookIndex = myLibrary.indexOf(book);
        card.setAttribute("index", bookIndex);

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

        // Assign initial read and give toggle function
        read.setAttribute("read", book.read)
        
        read.addEventListener("click", (event) => {
            if (event.target.getAttribute("read") == "Already Read") {
                myLibrary[bookIndex].read = "Not Read Yet";
            }
            else if (event.target.getAttribute("read") == "Not Read Yet") {
                myLibrary[bookIndex].read = "Already Read";
            }
            displayBooks();
        });

        card.appendChild(read);

        let remove = document.createElement("button");
        remove.classList.add("remove");
        remove.textContent = "Remove Book";
        // Gives button functionality to remove book from library
        remove.addEventListener("click", (event) => {
            myLibrary.splice(bookIndex, 1);
            displayBooks();
        });
        card.appendChild(remove);

        bookDisplay.appendChild(card);
    });
}



function FormController() {
    const addBookButton = document.querySelector(".addBook");
    const dialog = document.querySelector(".addBookDialog");
    const form = document.querySelector(".newBookDiv");
    const cancelBtn = document.querySelector(".cancelBtn");

    // Opens form to enter new books
    addBookButton.addEventListener("click", (event) => {
        dialog.showModal();
    })

    // Closes form to enter new books
    cancelBtn.addEventListener("click", (event) => {
        event.preventDefault();
        dialog.close()
    })

    // Submits new book to library
    function formSubmitHandler() {
        const title = document.querySelector("#title").value;
        const author = document.querySelector("#author").value;
        const pages = document.querySelector("#pages").value;
        const read = document.querySelector('input[name="readBook"]:checked').value;

        const newBook = new Book(title, author, pages, read);
        addBookToLibrary(newBook);
        displayBooks();
        dialog.close();
        form.reset();
    }
    form.addEventListener("submit", formSubmitHandler);
}
FormController();

/*
const JurassicPark = new Book("Jurassic Park", "Michael Crichton", 416, "read");
const FNAF = new Book("Into the Pit", "Scott Cawthon", 224, "read");
addBookToLibrary(JurassicPark);
addBookToLibrary(FNAF);
displayBooks();
*/
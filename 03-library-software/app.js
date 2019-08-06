//global vars
let myLibrary = [{title: "Lord of the Rings", author: "Tolkien",}];
let renderedBookIndex = -1;

//elements
let btnAddBook = document.querySelector('#addBook');
let btnSubmitBook = document.querySelector('#submitBook');
let formNewBook = document.querySelector('#newBookForm');
let tableBook = document.querySelector('#bookTable');

let harryPotter = new Book("Harry Potter", "J. K. Rowling");
addBookToLibrary(harryPotter);
render();

//event handler
btnAddBook.addEventListener('click', toggleNewBookForm);
btnSubmitBook.addEventListener('click', submitBook);

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function render() {
    myLibrary.forEach( function(e) {
        if (myLibrary.indexOf(e) > renderedBookIndex) {
            //Create new Elements
            let newRow = document.createElement('tr');
            let newCol1 = document.createElement('td');
            let newCol2 = document.createElement('td');
            let newCol3 = document.createElement('td');
            let newDelBtn = document.createElement('input');

            //Add Content into Elements
            newCol1.textContent = e.title;
            newCol2.textContent = e.author;
            newDelBtn.type = "button";
            newDelBtn.value = "Delete";
            newDelBtn.addEventListener('click', function() {
                tableBook.removeChild(newRow);
            })

            //Add elements to Page
            tableBook.appendChild(newRow);
            newRow.appendChild(newCol1);
            newRow.appendChild(newCol2);
            newRow.appendChild(newCol3);
            newCol3.appendChild(newDelBtn);
            renderedBookIndex = myLibrary.indexOf(e);
        }
    })
    
}

function toggleNewBookForm() {
    formNewBook.classList.toggle("hidden");
}

function submitBook() {
    let newTitle = document.querySelector('#title').value;
    let newAuthor = document.querySelector('#author').value;
    let newBook = new Book(newTitle, newAuthor);
    addBookToLibrary(newBook);
    toggleNewBookForm();
    render();
}
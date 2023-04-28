// delcaring variables from the webpage
window.onload = function() {
newBookBtn = document.getElementById('newbook');
library = document.getElementById('library')
newBookBtn.addEventListener('click', () => addNewBook())

 }

// declaring library variable and the Book object
let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author;
    this.pages = pages
    this.read = read

}
// add book to library function
function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read))
}

// Adding some books 
addBookToLibrary("The Eye of the World", "Robert Jordan", 782,"read")
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 304,"read")
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald",208,"not read")

console.log(myLibrary.forEach(readBook))
function readBook(book) {
    console.log(book)
    return book
}

function addNewBook() {
    library.style.opacity=0;
   
}
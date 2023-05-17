// delcaring variables from the webpage

window.onload = function() {
const library = document.getElementById('libBody')
const newBookBtn = document.getElementById('newbook');
newBookBtn.addEventListener('click', () => addNewBook())
let row = library.insertRow(3);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);
let cell5 = row.insertCell(4);
let cell6 = row.insertCell(5);
cell1.innerHTML = myLibrary[0].title;
cell2.innerHTML = myLibrary[0].author;
cell3.innerHTML = myLibrary[0].pages;
cell4.innerHTML = myLibrary[0].read;
cell5.innerHTML = `<td class="editbtn" bookid=0><button>EDIT</button></td>`;
cell6.innerHTML = `<td class="deletebtn" bookid=0><button>DELETE</button></td>`;

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

// function addNewBook() {
//     library.style.opacity=0;
   
// }
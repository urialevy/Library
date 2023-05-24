// delcaring variables from the webpage

window.onload = function() {
const library = document.getElementById('libBody')
const newBookBtn = document.getElementById('newbook');
const formArea = document.getElementById('newForm')
newBookBtn.addEventListener('click', () => addNewBook())
    for (let i = 0; i<myLibrary.length; i++) {
        let row = library.insertRow(i+1)
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        cell1.innerHTML = myLibrary[i].title;
        cell2.innerHTML = myLibrary[i].author;
        cell3.innerHTML = myLibrary[i].pages;
        cell4.innerHTML = myLibrary[i].read
        cell5.innerHTML = `<td><button class="editbtn" id="edit_${i}">EDIT</button></td>`;
        cell6.innerHTML = `<td><button class="deletebtn" id="delete_${i}">DELETE</button></td>`;
    }}



// declaring library variable and the Book object
let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author;
    this.pages = pages
    this.read = read

}
// add book to library function
function addBookToLibrary(title, author, pages, read){true
    myLibrary.push(new Book(title, author, pages, read));
    
}

// Adding some books 
addBookToLibrary("The Eye of the World", "Robert Jordan", 782,true)
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 304, true)
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald",208,false)

// create add new book form
function addNewBook() {
    document.getElementById('submitNew').style.visibility='visible'

;

let submitBtn = document.getElementById('submitBtn')
let form = document.getElementById('submitNew');
form.addEventListener("submit", (e) => {e.preventDefault();
let title = document.getElementById('title').value
let author = document.getElementById('author').value
let pages = Number(document.getElementById('pages').value)
let read = document.getElementById('read').checked
addBookToLibrary(title, author, pages, read)
let row = library.insertRow(-1)
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);
let cell5 = row.insertCell(4);
let cell6 = row.insertCell(5);
let cell7 = row.insertCell(6);
cell1.innerHTML = this.title.value;
// cell2.innerHTML = myLibrary[-1].author;
// cell3.innerHTML = myLibrary[-1].pages;
// cell4.innerHTML = myLibrary[-1].read
cell5.innerHTML = `<td><button class="editbtn" id="edit_${myLibrary.length}">EDIT</button></td>`;
cell6.innerHTML = `<td><button class="deletebtn" id="delete_${myLibrary.length}">DELETE</button></td>`;


submitNew.reset();
document.getElementById('submitNew').style.visibility='hidden'})}
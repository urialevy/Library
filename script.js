// delcaring variables from the webpage

window.onload = function() {
library = document.getElementById('libBody')
const newBookBtn = document.getElementById('newbook');
formArea = document.getElementById('newForm')
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
        if (myLibrary[i].read == true) {cell4.innerHTML = "Yes"} else {cell4.innerHTML = "No"}
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

// console.log(myLibrary.forEach(readBook))
// function readBook(book) {
//     console.log(book)
//     return book
// }

function addNewBook() {
    newForm.innerHTML =`<form id="submitNew">
    <label for="Title">Title</label>
    <input type="text" name="Title" id="title" placeholder="Title" required> <br>
    <label for="Author">Author</label>
    <input type="text" name="Author" id="author" placeholder="Author" required> <br>
    <label for="Pages">Pages</label>
    <input type="number" name="Pages" id="pages" required> <br>
    <label for="read">Read?</label>
    <input type="checkbox" id="read"> <br>
    <input type="submit" id="submitBtn">
</form>`;
submitBtn = document.getElementById('submitBtn')
title = document.getElementById('title').value
author = document.getElementById('author').value
pages = document.getElementById('pages').value
read = document.getElementById('read').checked
form = document.getElementById('submitNew');
form.addEventListener("submit", (e, i) => {e.preventDefault();
addBookToLibrary(i)})
// form.addEventListener('submit', (e, function)) => {e.preventDefault()}
// submitBtn.addEventListener('submit',() => addBookToLibrary(title, author, pages, read))

}
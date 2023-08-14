// delcaring data structures
class Book {
    constructor(title, author, pages, read, id) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.id = id
    }
}
class Library {
    constructor(){
        this.books = []
    }
    addBookToLibrary(newBook) {
        this.books.push(newBook)
    }
    firstBooks = () => {
        myLibrary.addBookToLibrary(new Book("The Eye of the World", "Robert Jordan", 782, true, crypto.randomUUID()))
        myLibrary.addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 304, true, crypto.randomUUID()))
        myLibrary.addBookToLibrary(new Book("The Great Gatsby", "F. Scott Fitzgerald",208,false, crypto.randomUUID()))
    }
}
// global scope variables
const form = document.getElementById('submitNew')
const delbtns = document.getElementsByClassName(`deletebtn`)
const libraryBod = document.getElementById('libBody')
const formArea = document.getElementById('newForm')
const newBookBtn = document.getElementById('newbook');
const myLibrary = new Library()
// functions for the global scope
const getBooksFromInput = () => {
        const title = document.getElementById('title').value
        const author = document.getElementById('author').value
        const pages = Number(document.getElementById('pages').value)
        const read = document.getElementById('read').checked
        myLibrary.addBookToLibrary(new Book (title, author, pages, read, crypto.randomUUID()))
    }
form.addEventListener('submit', function(e) {e.preventDefault()
getBooksFromInput()
title.value = ``
author.value = ``;
pages.value = ``
read.checked = false;})
const recreateTable = (lib) => {
    libraryBod.innerHTML = `<table id="library">
                    <tbody id = libBody>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Pages</th>
                    <th>Read?</th>
                <th>ID</th></tbody>
              </table>`
    lib.forEach(book => {
        let row = libraryBod.insertRow(-1)
            let nameCell = row.insertCell(0);
            let authorCell = row.insertCell(1);
            let pagesCell = row.insertCell(2);
            let readCell = row.insertCell(3);
            let idCell = row.insertCell(4);
            let editCell = row.insertCell(5);
            let deleteCell = row.insertCell(6);
            let saveCell = row.insertCell(7)
            nameCell.innerHTML = book.title;
            authorCell.innerHTML = book.author
            pagesCell.innerHTML = book.pages
            readCell.innerHTML = book.read ? `Read` : `Not Read`
            idCell.innerHTML = book.id
            editCell.innerHTML=`<td><button class="editbtn" id="edit.${book.id}">EDIT</button></td>`
            editCell.addEventListener('click', function(e) {
                nameCell.innerHTML = `<input type="text" name="Title" id="title.${book.id}" value="${book.title}" required">`
                authorCell.innerHTML = ` <input type="text" name="Author" id="author.${book.id}" value="${book.author}" required>`
                pagesCell.innerHTML = `<input type="number" name="Pages" id="pages.${book.id}" value="${book.pages}" required>`
                readCell.innerHTML = `<input type="checkbox" id="read.${book.id}" value="${book.read.checked}">`
                saveCell.innerHTML = `<button id="saveCell.${book.id}">SAVE</button>`
                saveCell.addEventListener('click', function(){
                    function matchID(target){
                        
                        return target.id == book.id}
                    let updateTarget = myLibrary.books.findIndex(matchID)
                    let newTitle = document.getElementById(`title.${book.id}`).value; 
                    let newAuth = document.getElementById(`author.${book.id}`).value;
                    let newPage = document.getElementById(`pages.${book.id}`).value;
                    let newRead = document.getElementById(`read.${book.id}`).checked
                    myLibrary.books[updateTarget].title = newTitle;
                    myLibrary.books[updateTarget].author = newAuth;
                    myLibrary.books[updateTarget].pages = newPage;
                    myLibrary.books[updateTarget].read = newRead;
                    recreateTable(myLibrary.books)
                })
            })
            deleteCell.innerHTML = `<td><button class="deletebtn" id="delete.${book.id}">DELETE</button></td>`; 
            deleteCell.addEventListener('click', function(e) {
                function checkIDs(target) {
                    return target.id !== book.id
                }
                let newLib = myLibrary.books.filter(checkIDs)
                myLibrary.books = newLib
                libraryBod.innerHTML = ``
                recreateTable(myLibrary.books)

            })
    })    
}
        form.addEventListener('submit', function(e) {
            e.preventDefault()
            recreateTable(myLibrary.books)
        })
myLibrary.firstBooks()
recreateTable(myLibrary.books)
newBookBtn.addEventListener('click', function() {document.getElementById('submitNew').style.visibility='visible'})
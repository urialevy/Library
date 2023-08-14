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
const getBooksFromInput = () => {
        const title = document.getElementById('title').value
        const author = document.getElementById('author').value
        const pages = Number(document.getElementById('pages').value)
        const read = document.getElementById('read').checked
        return new Book (title, author, pages, read, crypto.randomUUID())
    }


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
            let cell8 = row.insertCell(7)
            nameCell.innerHTML = book.title;
            authorCell.innerHTML = book.author
            pagesCell.innerHTML = book.pages
            readCell.innerHTML = book.read
            idCell.innerHTML = book.id
            editCell.innerHTML=`<td><button class="editbtn" id="edit.${book.id}">EDIT</button></td>`
            editCell.addEventListener('click', function(e) {
                
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
    


// function deletionBtns() {
// for (let i = 0; i < delbtns.length; i++) {
//         delbtns[i].addEventListener('click', function(){
//             function checkIDs(e){
//                 return e.id !== Number(delbtns[i].getAttribute('data-index'))                
//             }
                        
//             let newLib = myLibrary.books.filter(checkIDs)
//             myLibrary = newLib;
//             recreateTable();
            
//         })
//     }

// }

   



    
    // function newEntry(){
    //         let title = document.getElementById('title').value
    //         let author = document.getElementById('author').value
    //         let pages = Number(document.getElementById('pages').value)
    //         let read = document.getElementById('read').checked
    //         myLibrary.addBookToLibrary(new Book(title, author, pages, read, crypto.randomUUID()))
    //             let row = libraryBod.insertRow(-1)
    //             let cell1 = row.insertCell(0);
    //             let cell2 = row.insertCell(1);
    //             let cell3 = row.insertCell(2);
    //             let cell4 = row.insertCell(3);
    //             let cell5 = row.insertCell(4);
    //             let cell6 = row.insertCell(5);
    //             let cell7 = row.insertCell(6);
    //             cell1.innerHTML = this.title.value;
    //             cell2.innerHTML = this.author.value;
    //             cell3.innerHTML = this.pages.value;
    //             cell4.innerHTML = this.read.checked;
    //             cell5.innerHTML = `<td><button class="editbtn" id="edit.${myLibrary[myLibrary.books.length-1]}">EDIT</button></td>`;
    //             cell6.innerHTML = `<td><button class="deletebtn" data-index=${myLibrary[myLibrary.books.length-1]}">DELETE</button></td>`;
    //             cell6.addEventListener('click', function() {
    //                 function checkIDs(e){
    //                 return e.id !== Number(delbtns[delbtns.length-1].getAttribute('data-index'))                
    //             }                            
    //             let newLib = myLibrary.filter(checkIDs)
    //             myLibrary = newLib;
    //             recreateTable()});
    //     submitNew.reset();
    //     document.getElementById('submitNew').style.visibility='hidden'}
myLibrary.firstBooks()
recreateTable(myLibrary.books)
newBookBtn.addEventListener('click', () => addNewBook())
function addNewBook() {
    document.getElementById('submitNew').style.visibility='visible'}
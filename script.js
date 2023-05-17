// delcaring variables from the webpage

window.onload = function() {
const library = document.getElementById('libBody')
const newBookBtn = document.getElementById('newbook');
newBookBtn.addEventListener('click', () => addNewBook())
for (let i = 0; i<myLibrary.length; i++) {
    let row = library.insertRow(i+1)
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    cell1.innerHTML = myLibrary[i].title;
    cell2.innerHTML = myLibrary[i].author;
    cell3.innerHTML = myLibrary[i].pages;
    if (myLibrary[i].read == true) {cell4.innerHTML = "Yes"} else {cell4.innerHTML = "No"}
    cell5.innerHTML = `<td class="editbtn" bookid=2><button>EDIT</button></td>`;
    cell6.innerHTML = `<td class="deletebtn" bookid=2><button>DELETE</button></td>`;
}




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
addBookToLibrary("The Eye of the World", "Robert Jordan", 782,true)
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 304, true)
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald",208,false)

console.log(myLibrary.forEach(readBook))
function readBook(book) {
    console.log(book)
    return book
}

// function addNewBook() {
//     library.style.opacity=0;
   
// }
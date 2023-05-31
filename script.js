// delcaring variables from the webpage
window.onload = function() {
    const library = document.getElementById('libBody')
    const formArea = document.getElementById('newForm')
    const newBookBtn = document.getElementById('newbook');
    newBookBtn.addEventListener('click', () => addNewBook())
        for (let i = 0; i<myLibrary.length; i++) {
            let row = library.insertRow(-1)
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
            cell5.innerHTML = `<td><button class="editbtn" id="edit.${myLibrary[i].id}">EDIT</button></td>`;
            cell6.innerHTML = `<td><button class="deletebtn" id="delete.${myLibrary[i].id}" data-index=${myLibrary[i].id}>DELETE</button></td>`; 
        }
        const form = document.getElementById('submitNew')
        form.addEventListener('submit', function(submit) {
            submit.preventDefault()
        newEntry()})
        deletionBtns()
}
const delbtns = document.getElementsByClassName(`deletebtn`)
function deletionBtns() {
for (let i = 0; i < delbtns.length; i++) {
    let index = Number(delbtns[i].getAttribute('data-index'))
    delbtns[i].addEventListener('click', function() {
        console.log(`Deleted ${myLibrary[index].title}, i = ${index}`)
        library.deleteRow(index+1)
        myLibrary.splice(index, 1)
        })}}

    


    
    // declaring library variable and the Book object
    const myLibrary = []
    
    function Book(title, author, pages, read, id) {
        this.title = title
        this.author = author;
        this.pages = pages
        this.read = read
        this.id = id;
    
    }
    // add book to library function
    function addBookToLibrary(title, author, pages, read, id){true
        myLibrary.push(new Book(title, author, pages, read, id));
        
    }
    
    // Adding some books 
    addBookToLibrary("The Eye of the World", "Robert Jordan", 782,true, myLibrary.length)
    addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 304, true, myLibrary.length)
    addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald",208,false, myLibrary.length)
    
    // create add new book form with its functionality
    function addNewBook() {
        document.getElementById('submitNew').style.visibility='visible'}

    // function to delete an array item
    function deleteBook(){

    }


    // function to add rows to library HTML table
    
    function newEntry(){
            let title = document.getElementById('title').value
            let author = document.getElementById('author').value
            let pages = Number(document.getElementById('pages').value)
            let read = document.getElementById('read').checked
            addBookToLibrary(title, author, pages, read, Number(myLibrary.length))
                let row = library.insertRow(-1)
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                let cell6 = row.insertCell(5);
                let cell7 = row.insertCell(6);
                cell1.innerHTML = this.title.value;
                cell2.innerHTML = this.author.value;
                cell3.innerHTML = this.pages.value;
                cell4.innerHTML = this.read.checked;
                cell5.innerHTML = `<td><button class="editbtn" id="edit.${myLibrary[i].id}">EDIT</button></td>`;
                cell6.innerHTML = `<td><button class="deletebtn" id="delete.${myLibrary[i].id} data-index=${myLibrary[i].id}">DELETE</button></td>`;
        submitNew.reset();
        document.getElementById('submitNew').style.visibility='hidden'}
    
        
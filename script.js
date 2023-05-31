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
            cell5.innerHTML = `<td><button class="editbtn" id="edit_${i}">EDIT</button></td>`;
            cell6.innerHTML = `<td><button class="deletebtn" id="delete_${i}" data=${i+1}>DELETE</button></td>`; 
            document.querySelector(`#delete_${i}`).addEventListener('click', function(){
                let entry = Number(document.querySelector(`#delete_${i}`).getAttribute('data'))
                myLibrary.splice(i,1)
                if (myLibrary.length == 1) {
                library.deleteRow(-1);
                }
                else{
                    library.deleteRow(entry);
                }
            } )
        }
        const form = document.getElementById('submitNew')
        form.addEventListener('submit', function(submit) {
            submit.preventDefault()
        newEntry()})
}
// adds event listener to delete buttons to trigger relevant function
window.addEventListener('DOMContentLoaded', function(e){
    const delbtns = document.getElementsByClassName('deletebtn');
    for (let i = 0; i < delbtns.length; i++) {
        delbtns[i].addEventListener('click', delRow(i))
    }
}) 


    
    // declaring library variable and the Book object
    const myLibrary = []
    
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
                cell2.innerHTML = this.author.value;
                cell3.innerHTML = this.pages.value;
                cell4.innerHTML = this.read.checked;
                cell5.innerHTML = `<td><button class="editbtn" id="edit_${myLibrary.length}">EDIT</button></td>`;
                cell6.innerHTML = `<td><button class="deletebtn" id="delete_${myLibrary.length}">DELETE</button></td>`;
        submitNew.reset();
        document.getElementById('submitNew').style.visibility='hidden'}
    
        
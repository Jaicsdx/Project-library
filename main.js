let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
book.prototype.toggleRead =function(){
  this.read = !this.read;
}
function toggleRead(index){
  myLibrary[index].toggleRead();
  render()}


function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = ""; //no duplicates like a ab a ab c
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-card");
    bookEl.innerHTML = `
    <div class ="book-header">
    <h3 class ="title">${book.title}</h3>
    <h5 class ="author">${book.author}</h5></div>
    <div class = "body">
    <p>${book.pages}</p>
    <p class="read">${book.read ? "Read" : "Not Read"}</p>
    <button class ="remove-btn" onclick ="removeBook(${i})">Remove</button>
    <button class ="toggle-read-btn" onclick ="toggleRead(${i})"> Read
    </button></div>`;
    libraryEl.appendChild(bookEl);
  }
}
function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}


function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;

  let newBook = new book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}
let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});

document
  .querySelector("#new-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });

let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML =""; //no duplicates like a ab a ab c
  for (let i = 0; i < myLibrary.length; i++) {
   let book = myLibrary[i];
    let bookEl = document.createElement("div");
   
    bookEl.innerHTML =`
    <div class ="header">
    <h3 class ="title">${book.title}</h3>
    <h5 class ="author">${book.author}</h5></div>
    <div class = "body">
    <p>${book.pages}</p>
    <p class="read">${book.read? "read":"not read"}</p></div>`;
    libraryEl.appendChild(bookEl);
  }
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

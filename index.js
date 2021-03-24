const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBooksToLibrary() {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const newBook = new Book(title.value, author.value, pages.value);
  const readBtn = document.createElement('button');
  const rmBtn = document.createElement('button');
  const displayBooks = document.querySelector('.display-books');
  const li = document.createElement('li');

  readBtn.textContent = 'not read yet';
  Book.prototype.status = () => {
    readBtn.classList.toggle('true_value');
    if (readBtn.textContent === 'not read yet') {
      readBtn.textContent = 'already read';
      return true;
    }
    readBtn.textContent = 'not read yet';
    return false;
  };

  myLibrary.push(newBook);
  readBtn.addEventListener('click', newBook.status);

  const lastItem = myLibrary.pop();
  li.textContent = 'Title: ' + lastItem.title + ' ,Author: ' + lastItem.author + ' ,Pages: ' + lastItem.pages;
  rmBtn.textContent = 'REMOVE BOOK';
  displayBooks.appendChild(li);
  li.appendChild(rmBtn);
  li.appendChild(readBtn);
}

const newBookBtn = document.getElementById('new_book');
const theForm = document.querySelector('#book_form');
const submitBtn = document.getElementById('submit');

newBookBtn.addEventListener('click', () => {
  theForm.setAttribute('style', 'display: block');
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBooksToLibrary();
});

let myLibrary = []
function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

function addBooksToLibrary() {
  let newBook = new Book(title.value, author.value, pages.value)
  myLibrary.push(newBook)

  const displayBooks = document.querySelector('.display-books')
  const li = document.createElement('li')
  const rmBtn = document.createElement('button')
    lastItem = myLibrary.pop()
    li.textContent = 'Title: ' + lastItem.title + ' ,Author: ' + lastItem.author + ' ,Pages: ' + lastItem.pages
    rmBtn.textContent = 'REMOVE BOOk'
    displayBooks.appendChild(li)
    li.appendChild(rmBtn)
    // will add remove function
}

const newBookBtn = document.getElementById('new_book')
const theForm = document.querySelector('#book_form')
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const submitBtn = document.getElementById('submit')

newBookBtn.addEventListener('click', _=> {
  theForm.setAttribute("style", "display: block")
})

submitBtn.addEventListener('click', (e)=> {
  e.preventDefault()
  addBooksToLibrary()
})
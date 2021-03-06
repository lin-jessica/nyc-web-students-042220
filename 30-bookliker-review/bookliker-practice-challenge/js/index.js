// Be able to click on a book, you should see the book's thumbnail and description and a list of users who have liked the book.

// event listener on button

// PATCH (fetch) 
// update the DOM??? YES!

/*** DOM Elements ***/
const bookList = document.getElementById('list')
const showPanel = document.querySelector('#show-panel')

const BASE_URL = 'http://localhost:3000/books'

/*** Local State ***/
let books = []
let selectedBookId = null
const currentUser = { "id": 1, "username": "pouros" }


/*** Render Methods ***/
function usersToHTML(users) {
  return users.map(user => `<li>${user.username}</li>`).join("")
}

function renderOneBook() {
  console.log(selectedBookId)
  // get the book details
  const selectedBook = books.find(function (book) {
    return book.id === selectedBookId
  })
  // create the DOM node
  const div = document.createElement('div')
  div.innerHTML = `
    <h1>${selectedBook.title}</h1>
    <img src="${selectedBook.img_url}" />
    <p>${selectedBook.description}</p>
    <ul>
      ${usersToHTML(selectedBook.users)}
    </ul>
    <button data-id="${selectedBook.id}">Read Book</button>
  `
  // append to the DOM
  showPanel.innerHTML = ""
  showPanel.appendChild(div)
}

function renderAllBooks() {
  books.forEach(book => {
    const li = document.createElement('li')
    li.innerText = book.title
    li.dataset.id = book.id
    bookList.appendChild(li)
  })
}

/** Event Listeners **/
showPanel.addEventListener('click', e => {
  if (e.target.tagName === "BUTTON") {
    console.dir(e.target)
    console.log("dataset id:", e.target.dataset.id)
    console.log("local state selected id:", selectedBookId)

    const selectedBook = books.find(function (book) {
      return book.id === selectedBookId
    })
    selectedBook.users.push({ "id": 1, "username": "pouros" })

    // optimistic!
    renderOneBook()

    // what data are we sending to the server?
    fetch(`http://localhost:3000/books/${selectedBookId}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "users": selectedBook.users
      })
    })

  }
})

bookList.addEventListener('click', e => {
  const bookId = parseInt(e.target.dataset.id)
  selectedBookId = bookId
  renderOneBook()
})


/*** Intitialize the page ***/
function init() {
  fetch(BASE_URL)
    .then(r => r.json())
    .then(bookData => {
      console.log('initial response from server:', bookData)
      books = bookData
      // display the HTML (append to the DOM)
      renderAllBooks()
    })
}

init()


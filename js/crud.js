let books = [];

// Function to add or update a book
function addOrUpdateBook(event) {
    event.preventDefault();
    
    const bookId = document.getElementById('bookId').value;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;

    if (bookId) {
        // Update existing book
        const index = books.findIndex(book => book.id === parseInt(bookId));
        if (index !== -1) {
            books[index] = { id: parseInt(bookId), title, author, genre };
        }
    } else {
        // Add new book
        const newBook = { id: Date.now(), title, author, genre };
        books.push(newBook);
    }

    document.getElementById('bookForm').reset();
    displayBooks();
}

// Function to display all books
function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author} (${book.genre})`;
        
        // Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editBook(book.id);
        
        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteBook(book.id);
        
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        
        bookList.appendChild(li);
    });
}

// Function to edit a book
function editBook(id) {
    const book = books.find(b => b.id === id);
    
    if (book) {
      document.getElementById('bookId').value = book.id;
      document.getElementById('title').value = book.title;
      document.getElementById('author').value = book.author;
      document.getElementById('genre').value = book.genre;
   }
}

// Function to delete a specific book
function deleteBook(id) {
   books = books.filter(book => book.id !== id);
   displayBooks();
}

// Function to delete all books
function deleteAllBooks() {
   books.length = 0; // Clear the array
   displayBooks();
}

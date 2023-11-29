var books = [];

//Функция добавления книги
function addBook(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;

    const book = {
        title: title,
        author: author,
        genre: genre
    };

    books.push(book);

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('genre').value = '';

    displayBooks();
}

//Функция отображения списка книг
function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    for (let i = 0; i < books.length; i++) {
        const book = books[i];

        const listItem = document.createElement('ol');

        listItem.innerHTML = `
            <table class="book-container">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Автор</th>
                        <th>Жанр</th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <th class="book__title">${book.title}</th>
                    <th class="book__author">${book.author}</th>
                    <th class="book__title">${book.genre}</th>
                    <button onclick="editBook(${i})">Редактировать</button>
                    <button onclick="deleteBook(${i})">Удалить</button>
                </tr>
            </thead>`
            ;
            title.value = '';
            author.value = '';
            genre.value = '';

        bookList.appendChild(listItem);
    }
}

//Функция удаления книги
function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
}

//Функция редактирования книги
function editBook(index) {
    const book = books[index];

    const newTitle = prompt('Введите новое название:', book.title);
    const newAuthor = prompt('Введите нового автора:', book.author);
    const newGenre = prompt('Войдите в новый жанр:', book.genre);

    book.title = newTitle;
    book.author = newAuthor;
    book.genre = newGenre;

    displayBooks();
}

document.getElementById('bookForm').addEventListener('submit', addBook);

displayBooks();
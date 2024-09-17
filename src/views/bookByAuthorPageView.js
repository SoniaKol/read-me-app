export function createBookByAuthorPageView(name, books, id) {
  return ` <h3 class="authors-title page-title">${name}</h3>
      <div class="authors-container">
      <img src="https://covers.openlibrary.org/a/olid/${id}-M.jpg" alt="" class="authors-img" />
        <p class="authors-container-text">We found <span>${books} books</span> by <span>${name}</span></p>
        </div>
        <ul class="authors-container-list" id="book-list-by-author"></ul>
      `;
}

export function createBookListByAuthor(data) {
  return data
    .map((book) => {
      if (book.isbn) {
        if (!book.cover_i) {
          return ` <li class="searching-result-item" data-isbn="${book.isbn[0]}">
        <img
          src="https://via.placeholder.com/150"
          alt="${book.title} by ${book.author_name} book cover"
          class="searching-result-item-img"
          data-isbn="${book.isbn[0]}"
        />
        <h3 class="searching-result-item-title" data-isbn="${book.isbn[0]}">${book.title}</h3>
        <button type="button" class="search-list-btn add-to-list-btn">
        <svg class="bottom-menu-svg" width="25" height="25"><use href="./public/img/symbol-defs.svg#icon-plus"></use></svg>
        </button></li>`;
        }
        return ` <li class="searching-result-item" data-isbn="${book.isbn[0]}">
        <img
          src="https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg"
          alt="${book.title} by ${book.author_name} book cover"
          class="searching-result-item-img"
          data-isbn="${book.isbn[0]}"
        />
        <h3 class="searching-result-item-title" data-isbn="${book.isbn[0]}">${book.title}</h3>
        <button type="button" class="search-list-btn add-to-list-btn">
          +
        </button>
      </li>`;
      }
    })
    .join("");
}

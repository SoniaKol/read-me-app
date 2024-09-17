export function createSearchingResultsPage() {
  return `<h2 class="page-title">Results</h2>
  <ul class="searching-results-list" id="searching-results"></ul>
  <button type="button" id="load-more-btn" class="load-more-btn">Load more</button>
  `;
}

export function createBookList(arr) {
  return arr
    .map((book) => {
      if (book.isbn) {
        if (!book.cover_i) {
          return `<li class="searching-results-item" data-isbn="${book.isbn[0]}">
        <img
        src="https://via.placeholder.com/100"
        alt="${book.title} by ${book.author_name} book cover"
        class="searching-result-item-img"
        data-isbn="${book.isbn[0]}"

      />
  <h3 class="searching-result-item-title" data-isbn="${book.isbn[0]}">${book.title}</h3>
  <p class="searching-result-item-text" data-isbn="${book.isbn[0]}">by ${book.author_name}</p>
        <button type="button"  class="add-to-list-btn">
        <svg class="bottom-menu-svg" width="25" height="25"><use href="./public/img/symbol-defs.svg#icon-plus"></use></svg>
        </button></li>`;
        }

        return `<li class="searching-results-item" data-isbn="${book.isbn[0]}">
        <img
        src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg"
        alt="${book.title} by ${book.author_name} book cover"
        class="searching-result-item-img"
        data-isbn="${book.isbn[0]}"
      />
  <h3 class="searching-result-item-title" data-isbn="${book.isbn[0]}">${book.title}</h3>
  <p class="searching-result-item-text" data-isbn="${book.isbn[0]}">by ${book.author_name}</p>
        <button type="button"  class="add-to-list-btn">
          +
        </button></li>`;
      }
    })
    .join("");
}

export function createAuthorList(arr) {
  return arr
    .map((author) => {
      return `<li class="searching-results-item" data-key="${author.key}">
  <h3 class="searching-result-item-title" data-key="${author.key}">${author.name}</h3>
  <p class="searching-result-item-text" data-key="${author.key}">Top book: <span data-key="${author.key}">${author.top_work}</span> </p>
  </li>`;
    })
    .join("");
}

export function createReadingPageView() {
  return `<h2 class="reading-list-title page-title">Reading list</h2>
        <button type="button" id="update-list-btn" class="update-list-btn">
          <svg class="reading-list-svg" width="25" height="25"><use href="./public/img/symbol-defs.svg#icon-spinner">
           </use></svg>
         </button>
        <ul class="reading-list" id="reading-list-id"></ul>`;
}

export function createReadingListItems(arr) {
  return arr
    .map((book) => {
      if (!book.imgSrc) {
        book.imgSrc = "https://via.placeholder.com/150";
      }
      return `<li data-id="${book.id}" class="reading-list-item">
      <img src="${book.imgSrc}" alt="${book.title} ${book.author} book cover" class="reading-list-img"/>
      <p class="reading-list-text">${book.title} ${book.author}</p>
       <button type="button" class="remove-btn">
      <svg class="reading-list-svg" width="25" height="25">
      <use href="./public/img/symbol-defs.svg#icon-bin"></use>
      </svg>
        </button> 
        <button type="button" class="mark-as-read-btn">
        <svg class="reading-list-svg" width="25" height="25">
        <use href="./public/img/symbol-defs.svg#icon-checkmark2"></use>
        </svg>
        </button>
      </li>`;
    })
    .join(" ");
}

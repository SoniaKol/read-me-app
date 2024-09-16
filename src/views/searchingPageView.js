export function createSearchingPageView() {
  return `<h2 class="search-title page-title">Search</h2>
      <p class="search-text"><span>Find a book </span>using authors or titles</p>
      <form class="search-form" id="search-form">
        <label class="search-input-label" for="search-input">
          <input
            type="text"
            name="input"
            id="search-input"
            placeholder="What are you looking for?"
            class="search-input"
        /></label>
      <p class="search-by">Search by:</p>
        <div class="search-checkbox-container">
          <input type="radio" name="search" id="title" class="search-checkbox visually-hidden" checked/>
          <label for="title" class="search-checkbox-label">
            <p>Title</p>
          </label>
          <input type="radio" name="search" id="author" class="search-checkbox visually-hidden" />
          <label for="author" class="search-checkbox-label">
            <p>Author</p>
          </label>
        </div>
        <button type="submit" class="search-button">Find a book</button>
      </form>
  `;
}

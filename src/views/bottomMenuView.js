export function createBottomMenu() {
  return `<div class="bottom-menu">
          <button type="button" id="home-btn" >
      <svg class="bottom-menu-svg" width="25" height="25"><use href="./public/img/symbol-defs.svg#icon-home"></use></svg>
          Home</button>
          <button type="button" id="search-btn">
      <svg class="bottom-menu-svg" width="25" height="25"><use href="./public/img/symbol-defs.svg#icon-search"></use></svg>
          Search</button>
          <button type="button" id="reading-list-btn">
      <svg class="bottom-menu-svg" width="25" height="25"><use href="./public/img/symbol-defs.svg#icon-books"></use></svg>
          Reading List</button>
        </div>`;
}

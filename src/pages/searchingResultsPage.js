import { createSearchingResultsPage } from "../views/searchingResultsPageView.js";
import { USER_INTERFACE_ID } from "../constants.js";
import {
  loadMoreHandler,
  addButtonHandlerAuthorsPage,
} from "../listeners/searchResultsPageListeners.js";
import {
  createBookByAuthorPageView,
  createBookListByAuthor,
} from "../views/bookByAuthorPageView.js";
import { initBottomMenu } from "./bottomMenu.js";
import { initModalWindow } from "./modalWindow.js";
import { openBookCard } from "../listeners/searchResultsPageListeners.js";

export function initSearchingResultsPage() {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  const searchingPage = createSearchingResultsPage();
  userInterface.insertAdjacentHTML("afterbegin", searchingPage);
  initModalWindow();

  const loadMoreBtn = document.getElementById("load-more-btn");

  loadMoreBtn.addEventListener("click", loadMoreHandler);

  initBottomMenu();
}

export function initBookByAuthorPage(books, authorID) {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";
  const bookByAuthorPage = createBookByAuthorPageView(
    books[0].author_name,
    books.length,
    authorID
  );

  userInterface.insertAdjacentHTML("afterbegin", bookByAuthorPage);
  initModalWindow();
  const bookList = document.getElementById("book-list-by-author");
  const bookListData = createBookListByAuthor(books);
  bookList.insertAdjacentHTML("beforeend", bookListData);
  bookList.addEventListener("click", openBookCard);

  const addBtn = document.querySelectorAll(`.add-to-list-btn`);
  addBtn.forEach((btn) =>
    btn.addEventListener("click", addButtonHandlerAuthorsPage)
  );
  initBottomMenu();
}

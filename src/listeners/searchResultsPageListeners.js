import {
  fetchBookByAuthor,
  fetchBookByISBN,
} from "../api/fetchSearchingData.js";
import { searchHandler } from "../api/fetchSearchingData.js";
import { initSearchingResultsPage } from "../pages/searchingResultsPage.js";
import { createBookList } from "../views/searchingResultsPageView.js";
import { readingListLSCheck } from "../utils/localStorage.js";
import { initLoaderPage } from "../pages/loaderPage.js";
import { initBookByAuthorPage } from "../pages/searchingResultsPage.js";
import {
  initModalLoader,
  initModalContent,
  initErrorModal,
} from "../pages/modalWindow.js";
import { openModalWindow } from "../listeners/modalWindowListeners.js";

export async function openAuthorsCard(evt) {
  if (
    evt.target.nodeName !== "LI" &&
    evt.target.nodeName !== "H3" &&
    evt.target.nodeName !== "P" &&
    evt.target.nodeName !== "SPAN"
  )
    return;
  initLoaderPage();
  const authorID = evt.target.dataset.key;

  const data = await fetchBookByAuthor(authorID);
  const books = await data.docs;
  initBookByAuthorPage(books, authorID);
}

export async function openBookCard(evt) {
  if (
    evt.target.nodeName !== "LI" &&
    evt.target.nodeName !== "H3" &&
    evt.target.nodeName !== "P" &&
    evt.target.nodeName !== "IMG"
  )
    return;

  openModalWindow();
  initModalLoader();
  try {
    const data = await fetchBookByISBN(evt.target.dataset.isbn);
    const book = data.docs[0];
    initModalContent(book);
  } catch (error) {
    initErrorModal(error);
  }
}

export async function loadMoreHandler() {
  initLoaderPage();

  const formData = JSON.parse(localStorage.getItem("formData"));
  formData.page++;
  localStorage.setItem("formData", JSON.stringify(formData));

  const data = await searchHandler(formData);
  initSearchingResultsPage();
  const resultList = document.getElementById("searching-results");

  if (data.length < 6) {
    document.getElementById("load-more-btn").style.display = "none";
  }

  const bookList = createBookList(data);
  resultList.insertAdjacentHTML("beforeend", bookList);
  resultList.classList.add("searching-results-list-book");
  resultList.addEventListener("click", openBookCard);

  const addBtn = document.querySelectorAll(`.add-to-list-btn`);
  addBtn.forEach((btn) => btn.addEventListener("click", addButtonHandler));
}

export function addButtonHandler(evt) {
  const readingList = readingListLSCheck();
  const book = {
    id: evt.target.parentNode.dataset.isbn,
    imgSrc: evt.target.parentNode.children[0].currentSrc,
    title: evt.target.parentNode.children[1].innerHTML,
    author: evt.target.parentNode.children[2].innerHTML,
  };
  console.log(evt.target.parentNode);
  evt.target.parentNode.classList.add("is-added");
  readingList.push(book);
  localStorage.setItem("readingList", JSON.stringify(readingList));
}

export function addButtonHandlerAuthorsPage(evt) {
  const readingList = readingListLSCheck();
  const book = {
    id: evt.target.parentNode.dataset.isbn,
    imgSrc: evt.target.parentNode.children[0].currentSrc,
    title: evt.target.parentNode.children[1].innerHTML,
    author: `by ${evt.target.parentNode.parentNode.parentNode.children[0].innerHTML}`,
  };
  evt.target.parentNode.classList.add("is-added");
  readingList.push(book);
  localStorage.setItem("readingList", JSON.stringify(readingList));
}

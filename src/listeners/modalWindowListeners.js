import { readingListLSCheck } from "../utils/localStorage.js";

export function addBtnModalHandler(evt) {
  const readingList = readingListLSCheck();
  const book = {
    id: evt.target.parentNode.children[1].dataset.isbn,
    imgSrc: evt.target.parentNode.children[0].currentSrc,
    title: evt.target.parentElement.children[1].innerHTML,
    author: evt.target.parentNode.children[2].innerHTML,
  };
  readingList.push(book);
  localStorage.setItem("readingList", JSON.stringify(readingList));
}

export function closeModalWindow() {
  const modalWindow = document.querySelector(".modal-window");
  modalWindow.classList.remove("is-open");
}

export function openModalWindow() {
  const modalWindow = document.querySelector(".modal-window");
  modalWindow.classList.add("is-open");
}

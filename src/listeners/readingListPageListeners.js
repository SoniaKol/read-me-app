import { readingListLSCheck } from "../utils/localStorage.js";
import { createReadingListItems } from "../views/readingListPageView.js";

export function readingListUpdate() {
  const readingListUl = document.getElementById("reading-list-id");
  readingListUl.innerHTML = "";
  const readingListItems = createReadingListItems(readingListLSCheck());
  readingListUl.insertAdjacentHTML("afterbegin", readingListItems);
  putListeners();
}

export function readingListRemove(evt) {
  markAsReadHandler(evt);
  readingListUpdate();
}

export function markAsReadHandler(evt) {
  const readingList = readingListLSCheck();

  const newReadingList = readingList.filter(
    (item) => item.id !== evt.currentTarget.parentElement.dataset.id
  );
  localStorage.removeItem("readingList");
  localStorage.setItem("readingList", JSON.stringify(newReadingList));
  evt.currentTarget.parentElement.classList.add("is-read");
}

export function putListeners() {
  const removeBtn = document.querySelectorAll(".remove-btn");
  const markAsReadBtn = document.querySelectorAll(".mark-as-read-btn");
  removeBtn.forEach((btn) => btn.addEventListener("click", readingListRemove));
  markAsReadBtn.forEach((btn) =>
    btn.addEventListener("click", markAsReadHandler)
  );
}

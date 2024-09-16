import { searchHandler } from "./fetchSearchingData.js";
import { initSearchingResultsPage } from "../pages/searchingResultsPage.js";
import {
  createBookList,
  createAuthorList,
} from "../views/searchingResultsPageView.js";
import { addButtonHandler } from "../listeners/searchResultsPageListeners.js";
import {
  openAuthorsCard,
  openBookCard,
} from "../listeners/searchResultsPageListeners.js";
import { initNoDataErrorPage } from "../pages/errorPage.js";

export async function handleBookSearch(form, pageNo) {
  const formData = {
    request: form.elements.input.value,
    page: pageNo,
  };

  const searchBy = form.elements.search;
  searchBy.forEach((radio) => {
    if (radio.checked === true) {
      formData.searchBy = radio.id;
    }
  });

  localStorage.setItem("formData", JSON.stringify(formData));

  const data = await searchHandler(formData);
  if (data.length === 0) {
    initNoDataErrorPage();
    return;
  }
  initSearchingResultsPage();
  const resultList = document.getElementById("searching-results");

  switch (formData.searchBy) {
    case "title":
      const bookList = createBookList(data);
      resultList.classList.add("searching-results-list-book");
      resultList.insertAdjacentHTML("beforeend", bookList);
      resultList.addEventListener("click", openBookCard);
      const addBtn = document.querySelectorAll(`.add-to-list-btn`);
      addBtn.forEach((btn) => btn.addEventListener("click", addButtonHandler));
      break;
    case "author":
      const authorList = createAuthorList(data);
      resultList.insertAdjacentHTML("beforeend", authorList);
      resultList.classList.add("searching-results-list-author");
      document.getElementById("load-more-btn").style.display = "none";
      resultList.addEventListener("click", openAuthorsCard);
      break;
  }
}

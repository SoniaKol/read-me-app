import { USER_INTERFACE_ID, READING_LIST_BTN_ID } from "../constants.js";
import {
  createReadingPageView,
  createReadingListItems,
} from "../views/readingListPageView.js";
import { readingListLSCheck } from "../utils/localStorage.js";
import { initBottomMenu, setActiveBtn } from "./bottomMenu.js";
import {
  putListeners,
  readingListUpdate,
} from "../listeners/readingListPageListeners.js";

export function initReadingListPage() {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  const readingPage = createReadingPageView();
  userInterface.insertAdjacentHTML("afterbegin", readingPage);

  const readingListUl = document.getElementById("reading-list-id");
  const readingList = readingListLSCheck();
  const removeRepeating = readingList.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  localStorage.removeItem("readingList");
  localStorage.setItem("readingList", JSON.stringify(removeRepeating));

  const readingListItems = createReadingListItems(removeRepeating);

  readingListUl.insertAdjacentHTML("afterbegin", readingListItems);

  const updateBtn = document.getElementById("update-list-btn");

  updateBtn.addEventListener("click", readingListUpdate);
  putListeners();
  initBottomMenu();
  setActiveBtn(READING_LIST_BTN_ID);
}

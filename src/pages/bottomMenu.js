import { createBottomMenu } from "../views/bottomMenuView.js";
import {
  SEARCH_BTN_ID,
  HOME_BTN_ID,
  READING_LIST_BTN_ID,
} from "../constants.js";
import { initHomePage } from "./homePage.js";
import { initReadingListPage } from "./readingListPage.js";
import { initSearchingPage } from "./searchingPage.js";

export function initBottomMenu() {
  const userInterface = document.getElementById("user-interface");
  const bottomMenu = createBottomMenu();
  userInterface.insertAdjacentHTML("beforeend", bottomMenu);

  addListeners();
}

function addListeners() {
  const homeBtn = document.getElementById(HOME_BTN_ID);
  homeBtn.addEventListener("click", () => {
    initHomePage();
  });

  const searchBtn = document.getElementById(SEARCH_BTN_ID);
  searchBtn.addEventListener("click", () => {
    initSearchingPage();
  });

  const readingListBtn = document.getElementById(READING_LIST_BTN_ID);
  readingListBtn.addEventListener("click", () => {
    initReadingListPage();
  });
}

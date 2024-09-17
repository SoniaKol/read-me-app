import {
  createHomePageViewEmptyRS,
  createHomePageViewOneBook,
  createHomePageViewManyBooks,
} from "../views/homePageView.js";
import { USER_INTERFACE_ID, HOME_BTN_ID } from "../constants.js";
import { initBottomMenu, setActiveBtn } from "./bottomMenu.js";
import { readingListLSCheck } from "../utils/localStorage.js";

export function initHomePage() {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  const readingList = readingListLSCheck();

  if (readingList.length === 0) {
    const homePage = createHomePageViewEmptyRS();
    userInterface.insertAdjacentHTML("afterbegin", homePage);
  }

  if (readingList.length === 1) {
    const homePage = createHomePageViewOneBook();
    userInterface.insertAdjacentHTML("afterbegin", homePage);
  }
  if (readingList.length > 1) {
    const homePage = createHomePageViewManyBooks(readingList.length);
    userInterface.insertAdjacentHTML("afterbegin", homePage);
  }
  initBottomMenu();
  setActiveBtn(HOME_BTN_ID);
}

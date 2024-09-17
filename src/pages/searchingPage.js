import { createSearchingPageView } from "../views/searchingPageView.js";
import { USER_INTERFACE_ID, SEARCH_BTN_ID } from "../constants.js";
import { searchFormHandler } from "../listeners/searchPageListeners.js";
import { initBottomMenu, setActiveBtn } from "./bottomMenu.js";

export function initSearchingPage() {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  const searchingPage = createSearchingPageView();
  userInterface.insertAdjacentHTML("afterbegin", searchingPage);

  const form = document.getElementById("search-form");
  form.addEventListener("submit", searchFormHandler);

  initBottomMenu();
  setActiveBtn(SEARCH_BTN_ID);
}

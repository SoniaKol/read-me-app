import { createSearchingPageView } from "../views/searchingPageView.js";
import { USER_INTERFACE_ID } from "../constants.js";
import { searchFormHandler } from "../listeners/searchPageListeners.js";
import { initBottomMenu } from "./bottomMenu.js";

export function initSearchingPage() {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  const searchingPage = createSearchingPageView();
  userInterface.insertAdjacentHTML("afterbegin", searchingPage);

  const form = document.getElementById("search-form");
  form.addEventListener("submit", searchFormHandler);

  initBottomMenu();
}

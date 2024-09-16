import {
  createErrorPageView,
  createNoDataErrorPageView,
} from "../views/errorPageView.js";
import { USER_INTERFACE_ID } from "../constants.js";
import { initBottomMenu } from "./bottomMenu.js";

export function initErrorPage(error) {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  const errorPage = createErrorPageView();
  userInterface.insertAdjacentHTML("afterbegin", errorPage);

  initBottomMenu();
}

export function initNoDataErrorPage() {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  const noDataErrorPage = createNoDataErrorPageView();
  userInterface.insertAdjacentHTML("afterbegin", noDataErrorPage);

  initBottomMenu();
}

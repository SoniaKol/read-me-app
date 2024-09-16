import { USER_INTERFACE_ID } from "../constants.js";
import { createLoaderPageView } from "../views/loaderView.js";

export function initLoaderPage() {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  const loaderPage = createLoaderPageView();
  userInterface.insertAdjacentHTML("afterbegin", loaderPage);
}

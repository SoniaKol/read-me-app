import { createStartAppPage } from "../views/startAppView.js";
import {
  createWelcomePageNew,
  createWelcomeBackPage,
} from "../views/welcomePage.js";
import { USER_INTERFACE_ID, GET_STARTED_BTN } from "../constants.js";
import {
  welcomePageInputHandler,
  newAccountHandler,
} from "../listeners/welcomePageListeners.js";
import { initHomePage } from "./homePage.js";

export function initWelcomePage() {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  // userInterface.innerHTML = "";
  // const startAppPage = createStartAppPage();
  // userInterface.insertAdjacentHTML("afterbegin", startAppPage);
  const userName = JSON.parse(localStorage.getItem("userData")) || "";

  // setTimeout(() => {
  userInterface.innerHTML = "";

  if (!userName.name) {
    const welcomePage = createWelcomePageNew();
    userInterface.insertAdjacentHTML("afterbegin", welcomePage);
    const getStartedBtn = document.getElementById(GET_STARTED_BTN);
    getStartedBtn.disabled = true;
    const input = document.getElementById("user-name");
    input.addEventListener("input", welcomePageInputHandler);
  } else {
    const welcomePage = createWelcomeBackPage(userName.name);
    userInterface.insertAdjacentHTML("afterbegin", welcomePage);
    const newAccBtn = document.getElementById("new-acc");
    newAccBtn.addEventListener("click", newAccountHandler);
  }

  document.getElementById(GET_STARTED_BTN).addEventListener("click", () => {
    initHomePage();
  });
  // }, 1500);
}

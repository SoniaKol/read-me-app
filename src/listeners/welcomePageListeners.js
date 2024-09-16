import { initWelcomePage } from "../pages/welcomePage.js";
import { setUsersDataLS } from "../utils/localStorage.js";
import { GET_STARTED_BTN } from "../constants.js";

export function welcomePageInputHandler(evt) {
  const inputData = { name: evt.currentTarget.value.trim() };
  localStorage.setItem("userData", JSON.stringify(inputData));
  document.getElementById(GET_STARTED_BTN).disabled = false;
}

export function newAccountHandler() {
  localStorage.removeItem("userData");
  localStorage.removeItem("readingList");
  setUsersDataLS();
  initWelcomePage();
}

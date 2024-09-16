import { initWelcomePage } from "./src/pages/welcomePage.js";
import { setUsersDataLS } from "./src/utils/localStorage.js";

function main() {
  initWelcomePage();
  setUsersDataLS();
}

window.addEventListener("load", main);

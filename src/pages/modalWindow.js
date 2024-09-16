import {
  createModalWindowView,
  createModalLoaderView,
  createBookData,
  initAdditionalData,
} from "../views/modalWindowView.js";
import {
  addBtnModalHandler,
  closeModalWindow,
} from "../listeners/modalWindowListeners.js";

export function initModalWindow() {
  const userInterface = document.getElementById("user-interface");
  const modalWindow = createModalWindowView();
  userInterface.insertAdjacentHTML("beforeend", modalWindow);

  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", closeModalWindow);
}

export function initModalLoader() {
  const modalContent = document.querySelector(".modal-content");
  modalContent.innerHTML = "";
  modalContent.insertAdjacentHTML("afterbegin", createModalLoaderView());
}

export function initModalContent(book) {
  const modalContent = document.querySelector(".modal-content");
  modalContent.innerHTML = "";
  modalContent.insertAdjacentHTML("afterbegin", createBookData(book));
  const addBtn = document.querySelector(".add-book");
  addBtn.addEventListener("click", addBtnModalHandler);
  initAdditionalData(book);
}

export function initErrorModal(error) {
  const modalContent = document.querySelector(".modal-content");
  modalContent.innerHTML = `<h2>Ooops! Something went wrong!</h2>`;
  console.log(error);
}

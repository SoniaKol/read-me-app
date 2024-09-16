import { initLoaderPage } from "../pages/loaderPage.js";
import { handleBookSearch } from "../api/handleSearchingData.js";

export function searchFormHandler(evt) {
  initLoaderPage();
  evt.preventDefault();

  const form = evt.target;
  handleBookSearch(form, 1);
}

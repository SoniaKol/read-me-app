export function createModalWindowView() {
  return `<div class="modal-window"> 
      <button type="button" class="close-btn">
      <svg
        class="modal-window-close-icon"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711L7.70711 21.7071C7.31658 22.0976 6.68342 22.0976 6.29289 21.7071C5.90237 21.3166 5.90237 20.6834 6.29289 20.2929L20.2929 6.29289C20.6834 5.90237 21.3166 5.90237 21.7071 6.29289Z"
          fill="#FAFAFA"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z"
          fill="#FAFAFA"
        />
      </svg>
    </button>
    <div class="modal-content"></div></div>`;
}

export function createModalLoaderView() {
  return `<div class="loader"></div>`;
}

export function createBookData(arr) {
  return `<img src="" alt="" class="modal-img" />
  <h2 class="modal-title" data-isbn="${arr.isbn[0]}">${arr.title}</h2>
      <h4 class="modal-subtitle">by ${arr.author_name[0]}</h4>
      
      <div class="modal-extra-data">
      </div>
      <button type="button" class="add-book">Add to Reading List</button>`;
}

export function initAdditionalData(book) {
  const img = document.querySelector(".modal-img");

  if (book.cover_edition_key) {
    img.src = `http://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`;
  } else {
    img.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
  }

  const extraData = document.querySelector(".modal-extra-data");
  extraData.innerHTML = "";
  if (book.subject) {
    const mainSubject = book.subject.slice(0, 7);
    const items = mainSubject.map(
      (subject) => `<li class="modal-extra-subject-item">${subject}</li>`
    );
    extraData.insertAdjacentHTML(
      "afterbegin",
      `<ul class="modal-extra-subject-list">${items.join(" ")}</ul>`
    );
  }

  if (book.first_publish_year) {
    extraData.insertAdjacentHTML(
      "afterbegin",
      `<p>First published in <span>${book.first_publish_year}</span></p>`
    );
  }

  if (book.ratings_average) {
    extraData.insertAdjacentHTML(
      "afterbegin",
      `<p>Rating: <span>${book.ratings_average.toFixed(1)}</span></p>`
    );
  }

  if (book.person && book.place && book.time) {
    const mainCharacter = [book.person[0], book.person[1], book.person[2]];
    const mainPlace = [book.place[0], book.place[1], book.place[2]];
    const mainTime = book.time[0];
    extraData.insertAdjacentHTML(
      "beforeend",
      `<p class="modal-extra-text">Book is about ${mainCharacter.join(
        ", "
      )} in ${mainPlace.join(", ")} on ${mainTime}</p>`
    );
  } else if (book.person && book.place) {
    const mainCharacter = [book.person[0], book.person[1], book.person[2]];
    const mainPlace = [book.place[0], book.place[1], book.place[2]];
    extraData.insertAdjacentHTML(
      "beforeend",
      `<p class="modal-extra-text">Book is about ${mainCharacter.join(
        ", "
      )} in ${mainPlace.join(", ")}</p>`
    );
  }

  if (book.id_amazon) {
    extraData.insertAdjacentHTML(
      "beforeend",
      `<a href="https://www.amazon.com/ID/s?k=${book.id_amazon[0]}" target="_blank"><img src="./public/img/amazon_logo.png" alt="amazon logo" class="modal-img-logo" /></a>`
    );
  }

  if (book.id_goodreads) {
    extraData.insertAdjacentHTML(
      "beforeend",
      `<a href="https://www.goodreads.com/book/show/${book.id_goodreads[0]}" target="_blank"><img src="./public/img/goodreads_logo.png" alt="goodreads logo" class="modal-img-logo" /></a>`
    );
  }
}

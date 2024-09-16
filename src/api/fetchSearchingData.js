import { initErrorPage } from "../pages/errorPage.js";

const BASE_URL = "https://openlibrary.org";

export async function searchHandler({ request, searchBy, page }) {
  const req = request.split(" ").join("+").toLowerCase().trim();
  let results;
  switch (searchBy) {
    case "title":
      try {
        results = await fetchBookByTitle(req, page);
      } catch (error) {
        initErrorPage(error);
      }
      break;
    case "author":
      try {
        results = await fetchAuthor(req);
      } catch (error) {
        initErrorPage(error);
      }
      break;
  }

  return results.docs;
}

async function fetchBookByTitle(request, pageNo) {
  const fields = "key,title,isbn,author_name,cover_i";

  const response = await fetch(
    `${BASE_URL}/search.json?title=${request}&fields=${fields}&limit=6&page=${pageNo}`
  );
  if (response.status !== 200) {
    throw new Error("error lol");
  }
  const data = await response.json();
  return data;
}

async function fetchAuthor(request) {
  const fields = "olid,name,top_work,key";

  const response = await fetch(
    `${BASE_URL}/search/authors.json?q=${request}&fields=${fields}&limit=5`
  );
  if (response.status !== 200) {
    throw new Error("error lol");
  }
  const data = await response.json();

  return data;
}

export async function fetchBookByAuthor(authorID) {
  const fields = "author_name,cover_i,title,isbn";
  const response = await fetch(
    `${BASE_URL}/search.json?author=${authorID}&fields=${fields}`
  );

  if (response.status !== 200) {
    throw new Error("error lol");
  }
  const data = await response.json();
  console.log(data);

  return data;
}

export async function fetchBookByISBN(isbn) {
  const fields =
    "isbn,author_name,cover_edition_key,cover_i,first_publish_year,id_amazon,person,place,ratings_average,subject,time,title,first_sentence,id_goodreads";
  const response = await fetch(
    `${BASE_URL}/search.json?isbn=${isbn}&fields=${fields}`
  );

  if (response.status !== 200) {
    throw new Error("error lol");
  }
  const data = await response.json();
  console.log(data);
  return data;
}

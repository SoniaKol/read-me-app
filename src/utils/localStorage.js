export function setUsersDataLS() {
  const data = JSON.parse(localStorage.getItem("userData"));
  if (!data) {
    const usersData = {
      name: "",
    };

    localStorage.setItem("userData", JSON.stringify(usersData));
  }
}

export function readingListLSCheck() {
  return JSON.parse(localStorage.getItem("readingList")) || [];
}

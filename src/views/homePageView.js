export function createHomePageViewEmptyRS() {
  return ` <h2 class="home-title page-title">Home</h2>
      <p class="home-text">
        Discover new worlds, join a vibrant reading community. Start your
        reading adventure effortlessly with us.
      </p>
      <p class="home-text home-text-background">Your <span>reading list </span>is <span>empty</span>. Let find something to read for you!</p>
    `;
}

export function createHomePageViewOneBook() {
  return ` <h2 class="home-title page-title">Home</h2>
      <p class="home-text">
        Discover new worlds, join a vibrant reading community. Start your
        reading adventure effortlessly with us.
      </p>
      <p class="home-text home-text-background">You have <span>only one book</span> in your  <span>reading list</span>. Is it enough? Let find something to read for you!</p>
   `;
}

export function createHomePageViewManyBooks(number) {
  return `<h2 class="home-title page-title">Home</h2>
      <p class="home-text">
        Discover new worlds, join a vibrant reading community. Start your
        reading adventure effortlessly with us.
      </p>
      <p class="home-text home-text-background">You have <span>${number} books</span> in your <span>reading list</span>. Let add more books for you!</p>
       `;
}

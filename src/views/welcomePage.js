import { changeWelcomeImg } from "../utils/random.js";

function createWelcomePageNew() {
  return `<img src="./public/img/welcome-${changeWelcomeImg()}.png" alt="image with reading people" class="welcome-img"/>
      <h2 class="welcome-title">Start Your Adventure</h2>
      <p class="welcome-text"> Welcome to your new book space, where you can quickly find the books you need. Create your personal <span>reading list</span>: for study, leisure or self-development.

</p>
      <label for="user-name" class="welcome-label"
        ><input
          type="text"
          name="user-name"
          id="user-name"
          class="welcome-input"
          placeholder="Your name"
          required
      /></label>
      <button type="button" id="get-started" class="welcome-btn">Get started</button>`;
}

function createWelcomeBackPage(name) {
  return `<img src="./public/img/welcome-${changeWelcomeImg()}.png" alt="image with reading people" class="welcome-img" />
      <h2 class="welcome-title">Welcome back, ${name}</h2>
      <p class="welcome-text">Create your personal <span>reading list</span>: for study, leisure or self-development.</p>

      <button type="button" class="welcome-btn" id="get-started">Get started</button>
      <button type="button" class="welcome-btn-minor" id="new-acc">Create new account</button>`;
}

export { createWelcomeBackPage, createWelcomePageNew };

export function changeWelcomeImg() {
  let imgNumberLS = Number(localStorage.getItem("imgNumber")) || 0;
  imgNumberLS++;
  if (imgNumberLS < 3) {
    localStorage.setItem("imgNumber", imgNumberLS);
    return imgNumberLS;
  } else {
    imgNumberLS = 0;
    localStorage.setItem("imgNumber", imgNumberLS);
    return imgNumberLS;
  }
}

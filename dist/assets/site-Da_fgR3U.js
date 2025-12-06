import "vite-imagetools";
const images = /* @__PURE__ */ Object.assign({});
const imagesURLs = Object.values(images);
console.log(imagesURLs);
const navMenu = document.getElementById("nav-menu"), navToggle = document.getElementById("nav-toggle"), navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu2 = document.getElementById("nav-menu");
  navMenu2.classList.remove("show__menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("image_Container");
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fav__container");
});
const blurHeader = () => {
  const header = document.getElementById("header");
  (void 0).scrollY >= 50 ? header.classList.add("blur_header") : header.classList.remove("blur_header");
};
window.addEventListener("scroll", blurHeader);
const modal = document.getElementById("myModal");
const modalImg = document.createElement("img");
modalImg.id = "Img01";
modalImg.className = "modal_content";
if (modal) {
  modal.appendChild(modalImg);
}
const CloseButton = document.getElementById("Modal_close");
console.log(CloseButton);
if (CloseButton) {
  CloseButton.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

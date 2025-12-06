const images = /* @__PURE__ */ Object.assign({});
const imagesFolder = "../images/Paintings/";
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
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
  const imageContainer = document.getElementById("image_Container");
  if (imageContainer) {
    const imageCount = 11;
    const imageIndices = Array.from({ length: imageCount }, (_, i) => i + 1);
    shuffleArray(imageIndices);
    imageIndices.forEach((i) => {
      const box = document.createElement("div");
      box.className = "box";
      imageContainer.appendChild(box);
      const img = document.createElement("img");
      img.src = images[`${imagesFolder}image${i}.png?w=400&format=webp`].default;
      img.id = `image-${i}`;
      img.alt = `Image ${i}`;
      img.addEventListener("click", () => {
        clickFunction(img.id);
      });
      box.appendChild(img);
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const FavoriteContainer = document.getElementById("fav__container");
  if (FavoriteContainer) {
    const FavIndices = [1, 2, 3, 4, 11];
    shuffleArray(FavIndices);
    FavIndices.forEach((i) => {
      const FavImg = document.createElement("img");
      FavImg.src = images[`${imagesFolder}image${i}.png?w=400&format=webp`].default;
      FavImg.alt = `image ${i}`;
      FavImg.id = `image_${i}`;
      FavImg.className = "Fav_image";
      FavoriteContainer.appendChild(FavImg);
    });
  }
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
function clickFunction(id) {
  const modalImage = document.getElementById(id);
  modal.style.display = "block";
  modalImg.src = modalImage.src;
}
const CloseButton = document.getElementById("Modal_close");
console.log(CloseButton);
if (CloseButton) {
  CloseButton.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

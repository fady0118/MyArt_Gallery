import "vite-imagetools";
const image1 = "/assets/image1-CdlYuMFP.webp";
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: image1
}, Symbol.toStringTag, { value: "Module" }));
const image10 = "/assets/image10-Dv_vtvzz.webp";
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: image10
}, Symbol.toStringTag, { value: "Module" }));
const image11 = "/assets/image11-B3ZM7-Cr.webp";
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: image11
}, Symbol.toStringTag, { value: "Module" }));
const image2 = "/assets/image2-Bq6pdJGr.webp";
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: image2
}, Symbol.toStringTag, { value: "Module" }));
const image3 = "/assets/image3-CmoMRQBA.webp";
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: image3
}, Symbol.toStringTag, { value: "Module" }));
const image4 = "/assets/image4-Ml-DoKjc.webp";
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: image4
}, Symbol.toStringTag, { value: "Module" }));
const image5 = "/assets/image5-CvgaMC0j.webp";
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: image5
}, Symbol.toStringTag, { value: "Module" }));
const image6 = "/assets/image6-Crc4YtMN.webp";
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: image6
}, Symbol.toStringTag, { value: "Module" }));
const image7 = "/assets/image7-ODdFqPdt.webp";
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: image7
}, Symbol.toStringTag, { value: "Module" }));
const image8 = "/assets/image8-Bp1cDMBM.webp";
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: image8
}, Symbol.toStringTag, { value: "Module" }));
const image9 = "/assets/image9-DW20f33J.webp";
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: image9
}, Symbol.toStringTag, { value: "Module" }));
const images = /* @__PURE__ */ Object.assign({ "../images/Paintings/image1.png": __vite_glob_0_0, "../images/Paintings/image10.png": __vite_glob_0_1, "../images/Paintings/image11.png": __vite_glob_0_2, "../images/Paintings/image2.png": __vite_glob_0_3, "../images/Paintings/image3.png": __vite_glob_0_4, "../images/Paintings/image4.png": __vite_glob_0_5, "../images/Paintings/image5.png": __vite_glob_0_6, "../images/Paintings/image6.png": __vite_glob_0_7, "../images/Paintings/image7.png": __vite_glob_0_8, "../images/Paintings/image8.png": __vite_glob_0_9, "../images/Paintings/image9.png": __vite_glob_0_10 });
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

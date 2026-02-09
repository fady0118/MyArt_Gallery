import router from "./router";
import { navigate } from "./utility.js";
import header, { headerUtils } from "./views/header.js";

window.addEventListener("hashchange", () => {
  router();
});
document.addEventListener("DOMContentLoaded", () => {
  // render header
  renderHeader();
  // navigate to homepage
  if (!location.hash) {
    location.hash = "/";
  } else {
    router();
  }
  window.addEventListener("scroll", blurHeader);

  const footerLink = document.querySelector("#footer>a");
  footerLink.addEventListener("click", () => {
    navigate(footerLink.getAttribute("dest"));
  });
});

function renderHeader() {
  const headerEl = document.getElementById("header");
  headerEl.innerHTML = "";
  headerEl.appendChild(header());
  headerUtils();
}

function blurHeader() {
  const header = document.getElementById("header");
  if (window.scrollY >= 50) {
    header.classList.add("blur_header");
  } else {
    header.classList.remove("blur_header");
  }
}



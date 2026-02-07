import { scrollTo, scrollToTop } from "./utility.js";
import about from "./views/about.js";
import copyright from "./views/copyright.js";
import gallery, { renderGalleryImages } from "./views/gallery.js";
import homepage, { homepageUtils } from "./views/homepage.js";

const main = document.getElementById("main");

function renderHomepge(hash = undefined) {
  console.log("render homepage");
  main.innerHTML = "";
  main.appendChild(homepage());
  homepageUtils();
  scrollTo(hash);
}
function renderGallery() {
  const { galleryEl, modalEl } = gallery();
  console.log("render gallery");
  main.innerHTML = "";
  main.appendChild(galleryEl);
  main.appendChild(modalEl);
  renderGalleryImages();
  scrollToTop();
}
function renderAbout() {
  main.innerHTML = "";
  main.appendChild(about());
  scrollToTop();
}
function renderCopyright() {
  main.innerHTML = "";
  main.appendChild(copyright());
  scrollToTop();
}

let previousHash;
export default async function router() {
  console.log("router in");
  const hash = window.location.hash.split("#")[1];
  // prevent unnecessary re-renders in case the user clicks on a link that lead to the same view
  if (hash === previousHash) {
    scrollTo(window.location.hash.split("#")[2]);
    return;
  }
  // render views
  switch (hash) {
    case "/":
      renderHomepge(hash);
      break;
    case "/gallery":
      renderGallery();
      break;
    case "/about":
      renderAbout();
      break;
    case "/copyright":
      renderCopyright();
      break;
    case "/about":
      renderAbout();
      break;
    default:
      renderHomepge();
  }
  previousHash = hash;
  console.log("router out");
}

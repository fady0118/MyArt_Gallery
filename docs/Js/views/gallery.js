import { images, imagesURLs, thumbnails, thumbnailsURLs } from "../resources.js";
import { shuffleArray } from "../utility.js";

export default function gallery() {
  const galleryEl = document.createElement("div");
  galleryEl.id = "image_Container";
  galleryEl.classList = "GalleryContainer";

  const modalEl = document.createElement("div");
  modalEl.id = "myModal";
  modalEl.classList = "Modal_Container";
  modalEl.innerHTML = '<span id="Modal_close"><i class="fa-solid fa-xmark"></i></span>';

  return { galleryEl, modalEl };
}

function renderGalleryImages() {
  const imageContainer = document.getElementById("image_Container");
  if (imageContainer) {
    const imageCount = thumbnailsURLs.length;
    // Create an array of image indices 1 to imageCount
    const imageIndices = Array.from({ length: imageCount }, (_, i) => i);
    shuffleArray(imageIndices);

    imageIndices.forEach((i) => {
      const box = document.createElement("div");
      box.className = "box";
      box.innerHTML = `<img id="image-${i + 1}" alt="Image ${i + 1}" src="${thumbnails[thumbnailsURLs[i]].default}"></img>`;
      box.addEventListener("click", () => {
        clickFunction(i);
      });
      imageContainer.appendChild(box);
    });
  }
}

function clickFunction(i) {
    console.log(imagesURLs[i])

  const modal = document.getElementById("myModal");
  modal.innerHTML='<span id="Modal_close"><i class="fa-solid fa-xmark"></i></span>';
  const modalImg = document.createElement("img");
  modalImg.id = `Img${i}`;
  modalImg.className = "modal_content";
  if (modal) {
    modal.appendChild(modalImg);
  }
  modal.style.display = "block";
  modalImg.src = images[imagesURLs[i]].default;

  // modal close button
  const CloseButton = document.getElementById("Modal_close");
  if (CloseButton) {
    CloseButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
}

export { renderGalleryImages };

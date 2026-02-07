import { mobileNavUtils, navigate } from "../utility.js";
export default function header() {
  const navBar = document.createElement("nav");
  
  navBar.classList = "nav container";
  navBar.innerHTML = `<a dest="#/#top" class="nav__logo">Fady's Gallery</a>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a class="nav__link" dest="#/">Home</a>
                        </li>

                        <li class="nav__item">
                            <a class="nav__link" dest="#/gallery">Gallery</a>
                        </li>

                        <li class="nav__item">
                            <a class="nav__link" dest="#/about">About</a>
                        </li>

                        <li class="nav__item">
                            <a class="nav__link" dest="#/#Favorites">Favorites</a>
                        </li>
                    </ul>
                    <!-- Close Button -->
                    <div class="nav__close" id="nav-close">
                        <i class="fa-solid fa-xmark"></i>
                        <!-- <i class="ri-close-line"></i> -->
                    </div>
                    <img src="./images/mona-lisa.png" alt="image" class="nav__img-1">
                    <img src="./images/paint-roller.png" alt="image" class="nav__img-2">
                
                    </div>
                        <!-- Toggle button -->
                        <div class="nav__toggle" id="nav-toggle">
                            <i class="fa-solid fa-bars"></i>
                            <!-- <i class="ri-menu-line"></i> -->
                        </div>`;
  return navBar;
}

function headerUtils() {
  const navBarEl = document.querySelector(".nav.container");
  const navLinks = navBarEl.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.style.cursor = "pointer";
    link.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(`${link.innerHTML} clicked!`);
      navigate(link.getAttribute("dest"));
    });
  });
  mobileNavUtils();
}


export { headerUtils };

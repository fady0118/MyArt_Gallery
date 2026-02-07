import { thumbnails, thumbnailsURLs } from "../resources.js";
import { shuffleArray } from "../utility.js";

export default function homepage() {
  const homepage = document.createElement("div");
  homepage.innerHTML = `        
        <section class="home-section" id="Home">     
            <div id="home_grid_container" class="home__container container grid">
                <div class="home__data">
                    <h1 class="home__title">Art By Fady</h1> 
                    <h1 class="home__title">Digital Artist</h1>
                </div>
                <div class="home__social" id="home-social">
                    <a id="social_insta" href="https://www.instagram.com/fady_abdelshahid/" target="_blank"><i id="social-insta" class="fa-brands fa-instagram"></i></a>
                    <a id="social_mail" href="mailto:fady0118@gmail.com" target="_blank"><i id="social-mail" class="fa-regular fa-envelope"></i></a>
                    <a id="social_deviant" href="https://www.deviantart.com/fadynasser" target="_blank" ><i id="deviant" class="fa-brands fa-deviantart"></i></a>
                </div>
                <!-- <img src="images/palette.png" alt="image" class="bg__img"> -->
            </div>
        </section>
        <section class="Favorties-section" id="Favorites" >
            <h1 class="Favorite_title" id="Favorite-title">Favorites</h1>
            <div class="Fav_frame">
                <div id="fav__container" class="fav_image_container"></div>
            </div>
        </section>`;
  return homepage;
}
function renderFavorites() {
  const FavoriteContainer = document.getElementById("fav__container");
  if (FavoriteContainer) {
    const FavIndices = [0, 1, 2, 3, 10];
    shuffleArray(FavIndices);

    FavIndices.forEach((i) => {
      const FavImg = document.createElement("img");
      FavImg.src = thumbnails[thumbnailsURLs[i]].default;
      FavImg.alt = `image ${i + 1}`;
      FavImg.id = `image_${i + 1}`;
      FavImg.className = "Fav_image";
      FavoriteContainer.appendChild(FavImg);
    });
  }
}
function homepageUtils() {
  renderFavorites();
}

export { homepageUtils };

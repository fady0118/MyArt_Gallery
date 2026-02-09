// change hash
function navigate(path) {
  window.location.hash = path;
}
// Shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
// scroll to section
function scrollToTop() {
  window.scrollTo(0, 0);
}
function scrollTo(secId) {
  const secEl = document.getElementById(secId);
  if (secEl) {
    secEl.scrollIntoView();
    return;
  }
  scrollToTop();
}

// mobile nav bar actions (show/hide)
function mobileNavUtils() {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  const navLinks = document.querySelectorAll(".nav__link");

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
  if (navLinks) {
    navLinks.forEach((link) =>
      link.addEventListener("click", () => {
        navMenu.classList.remove("show__menu");
      }),
    );
  }
}
export { navigate, shuffleArray, scrollTo, scrollToTop, mobileNavUtils };

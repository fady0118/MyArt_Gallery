// document.addEventListener("DOMContentLoaded",function(){})

/* =============== Show Menu =============== */
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show__menu')
    })
}
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show__menu')
    })
}
/* =============== Remove Menu Mobile =============== */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () =>{
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove('show__menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* =============== Image Gallery Generator =============== */
document.addEventListener('DOMContentLoaded',()=>{
    const imageContainer = document.getElementById('image_Container');
    const imageCount = 11;
    const imageFolder = 'images/Paintings/';
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif','webp'];

    for(let i=1;i<=imageCount;i++){
            const img = document.createElement('img');
            img.src = `${imageFolder}image${i}.png`;
            img.id = `image-${i}`;
            img.alt = `Image ${i}`;
            imageContainer.appendChild(img);
        
    }
})
/* =============== Add Blur Header =============== */


/* =============== Show Scroll Up =============== */


/* =============== Scroll Sections Active Link =============== */


/* =============== Scroll Reveal Animation =============== */


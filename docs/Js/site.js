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

    // Create an array of image indices 1 to imageCount
    const imageIndices = Array.from({ length: imageCount }, (_, i) => i + 1);

   // Shuffle the array
   function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(imageIndices);


    imageIndices.forEach(i => {
            const box = document.createElement('div');
            box.className = "box";
            imageContainer.appendChild(box);
            
            const img = document.createElement('img');
            img.src = `${imageFolder}image${i}.png`;
            img.id = `image-${i}`;
            img.alt = `Image ${i}`;
            box.appendChild(img);
        } )    

})
/* =============== Favorite Image Generator =============== */
document.addEventListener('DOMContentLoaded',()=>{
    const FavoriteContainer = document.getElementById('fav__container');
    const imageFolder = 'images/Paintings/';

    const FavIndices = [1,2,3,4,11];
    FavIndices.forEach(i=>{
        const FavImg = document.createElement('img');
        FavImg.src=`${imageFolder}image${i}.png`
        FavImg.alt=`image ${i}`;
        FavImg.id=`image_${i}`;
        FavImg.className='Fav_image';
        FavoriteContainer.appendChild(FavImg);
    })
        
    
})

/* =============== Add Blur Header =============== */
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY>=50? header.classList.add('blur_header')
    : header.classList.remove('blur_header');

}
window.addEventListener('scroll',blurHeader);

/* =============== Show Scroll Up =============== */


/* =============== Scroll Sections Active Link =============== */


/* =============== Scroll Reveal Animation =============== */


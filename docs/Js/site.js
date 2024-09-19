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
    const ColImgCount =  Math.floor(imageCount/3);
    const ExtraImg = imageCount%3;

    for(let i=1;i<=3;i++){
        const column = document.createElement('div');
        column.className = "ContainerColumn";
        column.id = `column-${i}`;
        imageContainer.appendChild(column);

        for(let j=1;j<= ColImgCount;j++){
            var x = j+((i-1)*ColImgCount);
            const img = document.createElement('img');
            img.src = `${imageFolder}image${x}.png`;
            img.id = `image-${x}`;
            img.alt = `Image ${x}`;
            column.appendChild(img);
        }     
    }

    for(let n=1;n<=ExtraImg;n++){
        var imageNum = n + 3*ColImgCount;
        const img = document.createElement('img');
        img.src = `${imageFolder}image${imageNum}.png`;
        img.id = `image-${imageNum}`;
        img.alt = `Image ${imageNum}`;
        document.getElementById(`column-${n}`).appendChild(img);
    }
    
})
/* =============== Add Blur Header =============== */


/* =============== Show Scroll Up =============== */


/* =============== Scroll Sections Active Link =============== */


/* =============== Scroll Reveal Animation =============== */


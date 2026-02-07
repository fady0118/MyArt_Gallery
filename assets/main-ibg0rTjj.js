(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function _(){const e=document.createElement("nav");return e.classList="nav container",e.innerHTML=`<a href="#/#top" class="nav__logo">Fady's Gallery</a>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a class="nav__link" dest="#/">Home</a>
                        </li>

                        <li class="nav__item">
                            <a href="#/gallery" class="nav__link">Gallery</a>
                        </li>

                        <li class="nav__item">
                            <a href="#/about" class="nav__link">About</a>
                        </li>

                        <li class="nav__item">
                            <a href="/#Favorites" class="nav__link">Favorites</a>
                        </li>
                    </ul>
                    <!-- Close Button -->
                    <div class="nav__close" id="nav-close">
                        <i class="fa-solid fa-xmark"></i>
                        <!-- <i class="ri-close-line"></i> -->
                    </div>
                    <img src="images/mona-lisa.png" alt="image" class="nav__img-1">
                    <img src="images/paint-roller.png" alt="image" class="nav__img-2">
                
                    </div>
                        <!-- Toggle button -->
                        <div class="nav__toggle" id="nav-toggle">
                            <i class="fa-solid fa-bars"></i>
                            <!-- <i class="ri-menu-line"></i> -->
                        </div>
                    </div>
                </div>`,e}function g(){const e=document.querySelectorAll("#nav-menu>ul>li>a.nav__link");console.log(e)}const d="/MyArt_Gallery/assets/image1-BkbZ2qDC.webp",m=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),u="/MyArt_Gallery/assets/image10-ZQ1nMz7J.webp",f=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),v="/MyArt_Gallery/assets/image11-5rR1Vrot.webp",p=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),b="/MyArt_Gallery/assets/image2-B03sSZbG.webp",h=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),y="/MyArt_Gallery/assets/image3-C0vq7NAQ.webp",M=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),O="/MyArt_Gallery/assets/image4-Bw-okr3Y.webp",j=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),P="/MyArt_Gallery/assets/image5-BNMaHEFo.webp",S=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),w="/MyArt_Gallery/assets/image6-CGScuNku.webp",A=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),F="/MyArt_Gallery/assets/image7-BT3e9jF0.webp",T=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),G="/MyArt_Gallery/assets/image8-BlA6B00M.webp",L=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"})),B="/MyArt_Gallery/assets/image9-Q8dnW779.webp",z=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"})),r=Object.assign({"../images/Paintings/image1.png":m,"../images/Paintings/image10.png":f,"../images/Paintings/image11.png":p,"../images/Paintings/image2.png":h,"../images/Paintings/image3.png":M,"../images/Paintings/image4.png":j,"../images/Paintings/image5.png":S,"../images/Paintings/image6.png":A,"../images/Paintings/image7.png":T,"../images/Paintings/image8.png":L,"../images/Paintings/image9.png":z}),E=Object.keys(r);function k(e){for(let a=e.length-1;a>0;a--){const n=Math.floor(Math.random()*(a+1));[e[a],e[n]]=[e[n],e[a]]}}function C(){const e=document.createElement("div");return e.innerHTML=`        
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
        </section>`,e}function H(){const e=document.getElementById("fav__container");if(e){const a=[0,1,2,3,10];k(a),a.forEach(n=>{const o=document.createElement("img");o.src=r[E[n]].default,o.alt=`image ${n+1}`,o.id=`image_${n+1}`,o.className="Fav_image",e.appendChild(o)})}}function N(){H()}const l=document.getElementById("main");function I(){console.log("render header");const e=document.getElementById("header");e.innerHTML="",e.appendChild(_()),g()}function q(){console.log("render homepage"),l.innerHTML="",l.appendChild(C()),N()}async function c(){const e=window.location.hash.split("#")[1];console.log(e),e==="/"&&(I(),q())}window.addEventListener("hashchange",()=>{console.log("hash change",location.hash),c()});document.addEventListener("DOMContentLoaded",()=>{console.log("DOM load",location.hash),location.hash?c():(console.log("navigate to /"),location.hash="/")});

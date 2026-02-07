(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();const _="/MyArt_Gallery/assets/image1-BkbZ2qDC.webp",g=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),d="/MyArt_Gallery/assets/image10-ZQ1nMz7J.webp",m=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),u="/MyArt_Gallery/assets/image11-5rR1Vrot.webp",f=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),v="/MyArt_Gallery/assets/image2-B03sSZbG.webp",p=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),b="/MyArt_Gallery/assets/image3-C0vq7NAQ.webp",y=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),h="/MyArt_Gallery/assets/image4-Bw-okr3Y.webp",M=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),O="/MyArt_Gallery/assets/image5-BNMaHEFo.webp",j=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),P="/MyArt_Gallery/assets/image6-CGScuNku.webp",S=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),w="/MyArt_Gallery/assets/image7-BT3e9jF0.webp",A=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),F="/MyArt_Gallery/assets/image8-BlA6B00M.webp",T=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),G="/MyArt_Gallery/assets/image9-Q8dnW779.webp",L=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));function B(e){for(let a=e.length-1;a>0;a--){const n=Math.floor(Math.random()*(a+1));[e[a],e[n]]=[e[n],e[a]]}}function z(){const e=document.createElement("div");return e.innerHTML=`        
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
        </section>`,e}function E(){const e=document.getElementById("fav__container");if(e){const a=[0,1,2,3,10];B(a),a.forEach(n=>{const o=document.createElement("img");o.src=c[I[n]].default,o.alt=`image ${n+1}`,o.id=`image_${n+1}`,o.className="Fav_image",e.appendChild(o)})}}function k(){E()}const l=document.getElementById("main");function C(){console.log("render homepage"),l.innerHTML="",l.appendChild(z()),k()}async function r(){const e=window.location.hash.split("#")[1];console.log(e),e==="/"&&C()}function H(){const e=document.createElement("nav");return e.classList="nav container",e.innerHTML=`<a href="#/#top" class="nav__logo">Fady's Gallery</a>

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
                </div>`,e}function N(){const e=document.querySelectorAll("#nav-menu>ul>li>a.nav__link");console.log(e)}const c=Object.assign({"../images/Paintings/image1.png":g,"../images/Paintings/image10.png":m,"../images/Paintings/image11.png":f,"../images/Paintings/image2.png":p,"../images/Paintings/image3.png":y,"../images/Paintings/image4.png":M,"../images/Paintings/image5.png":j,"../images/Paintings/image6.png":S,"../images/Paintings/image7.png":A,"../images/Paintings/image8.png":T,"../images/Paintings/image9.png":L}),I=Object.keys(c);window.addEventListener("hashchange",r);document.addEventListener("DOMContentLoaded",()=>{console.log("DOM load"),q(),r()});function q(){console.log("render header");const e=document.getElementById("header");e.innerHTML="",e.appendChild(H()),N()}

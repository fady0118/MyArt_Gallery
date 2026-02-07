(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const m="/MyArt_Gallery/assets/image1-BkbZ2qDC.webp",u=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),f="/MyArt_Gallery/assets/image10-ZQ1nMz7J.webp",p=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"})),b="/MyArt_Gallery/assets/image11-5rR1Vrot.webp",y=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),v="/MyArt_Gallery/assets/image2-B03sSZbG.webp",h=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),M="/MyArt_Gallery/assets/image3-C0vq7NAQ.webp",O=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),j="/MyArt_Gallery/assets/image4-Bw-okr3Y.webp",P=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),S="/MyArt_Gallery/assets/image5-BNMaHEFo.webp",A=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),T="/MyArt_Gallery/assets/image6-CGScuNku.webp",w=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),G="/MyArt_Gallery/assets/image7-BT3e9jF0.webp",E=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"})),L="/MyArt_Gallery/assets/image8-BlA6B00M.webp",C=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"})),z="/MyArt_Gallery/assets/image9-Q8dnW779.webp",B=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),F="/MyArt_Gallery/assets/image1-CIwPBUO3.png",$=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),k="/MyArt_Gallery/assets/image10-398KwGUu.png",I=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),H="/MyArt_Gallery/assets/image11-CFLsTaLe.png",N=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),q="/MyArt_Gallery/assets/image2-BJMaIKqp.png",x=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),D="/MyArt_Gallery/assets/image3-oWs4xuCJ.png",U=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),J="/MyArt_Gallery/assets/image4-CXDqeAw-.png",K=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),Q="/MyArt_Gallery/assets/image5-C-1wuB_A.png",R=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),Z="/MyArt_Gallery/assets/image6-BaEmCH1H.png",W=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),V="/MyArt_Gallery/assets/image7-CmkgBNfc.png",X=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"})),Y="/MyArt_Gallery/assets/image8-Bwx6I12d.png",ee=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),te="/MyArt_Gallery/assets/image9-daIF-2Jq.png",ae=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"})),g=Object.assign({"../images/Paintings/image1.png":u,"../images/Paintings/image10.png":p,"../images/Paintings/image11.png":y,"../images/Paintings/image2.png":h,"../images/Paintings/image3.png":O,"../images/Paintings/image4.png":P,"../images/Paintings/image5.png":A,"../images/Paintings/image6.png":w,"../images/Paintings/image7.png":E,"../images/Paintings/image8.png":C,"../images/Paintings/image9.png":B}),r=Object.keys(g),_=Object.assign({"../images/Paintings/image1.png":$,"../images/Paintings/image10.png":I,"../images/Paintings/image11.png":N,"../images/Paintings/image2.png":x,"../images/Paintings/image3.png":U,"../images/Paintings/image4.png":K,"../images/Paintings/image5.png":R,"../images/Paintings/image6.png":W,"../images/Paintings/image7.png":X,"../images/Paintings/image8.png":ee,"../images/Paintings/image9.png":ae}),ne=Object.keys(_);function ie(){const e=document.createElement("div");e.id="image_Container",e.classList="GalleryContainer";const t=document.createElement("div");return t.id="myModal",t.classList="Modal_Container",t.innerHTML='<span id="Modal_close"><i class="fa-solid fa-xmark"></i></span>',{galleryEl:e,modalEl:t}}function oe(){const e=document.getElementById("image_Container");if(e){const t=r.length,n=Array.from({length:t},(i,a)=>a);shuffleArray(n),n.forEach(i=>{const a=document.createElement("div");a.className="box",a.innerHTML=`<img id="image-${i+1}" alt="Image ${i+1}" src="${g[r[i]].default}"></img>`,a.addEventListener("click",()=>{le(i)}),e.appendChild(a)})}}function le(e){const t=document.getElementById("myModal"),n=document.createElement("img");n.id=`Img${e}`,n.className="modal_content",t&&t.appendChild(n),t.style.display="block",n.src=_[ne[e]].default}function se(e){window.location.hash=e}function re(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function ge(){const e=document.createElement("div");return e.innerHTML=`        
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
        </section>`,e}function ce(){const e=document.getElementById("fav__container");if(e){const t=[0,1,2,3,10];re(t),t.forEach(n=>{const i=document.createElement("img");i.src=g[r[n]].default,i.alt=`image ${n+1}`,i.id=`image_${n+1}`,i.className="Fav_image",e.appendChild(i)})}}function _e(){ce()}const l=document.getElementById("main");function c(){console.log("render homepage"),l.innerHTML="",l.appendChild(ge()),_e()}function de(){const{galleryEl:e,modalEl:t}=ie();console.log("render gallery"),l.innerHTML="",l.appendChild(e),l.appendChild(t),oe()}async function d(){console.log("router in");const e=window.location.hash.split("#")[1];switch(console.log(e),e){case"/":c();break;case"/gallery":de();break;default:c()}console.log("router out")}function me(){const e=document.createElement("nav");return e.classList="nav container",e.innerHTML=`<a href="#/#top" class="nav__logo">Fady's Gallery</a>

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
                            <a class="nav__link" dest="/#Favorites">Favorites</a>
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
                </div>`,e}function ue(){document.querySelectorAll("#nav-menu>ul>li>a.nav__link").forEach(t=>{t.addEventListener("click",n=>{n.preventDefault(),console.log(`${t.innerHTML} clicked!`),se(t.getAttribute("dest"))})})}window.addEventListener("hashchange",()=>{console.log("hash change",location.hash),d()});document.addEventListener("DOMContentLoaded",()=>{console.log("DOM load",location.hash),fe(),location.hash?d():(console.log("navigate to /"),location.hash="/")});function fe(){console.log("render header");const e=document.getElementById("header");e.innerHTML="",e.appendChild(me()),ue()}

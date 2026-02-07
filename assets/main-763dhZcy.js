(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=i(a);fetch(a.href,n)}})();function f(e){window.location.hash=e}function y(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}}function l(){window.scrollTo(0,0)}function b(e){if(e==="top"){l();return}const t=document.getElementById(e);t&&t.scrollIntoView()}function v(){const e=document.createElement("div");return e.classList="About_Container",e.innerHTML=`
        <h1 class="About_title">About Me</h1>
        <h3 class="About_Section">Welcome to My Digital Art Gallery!</h3>
        <div class="about_text">
            Hello! I’m Fady Abd-Elshahid, a passionate digital artist, engineer, designer and developer based in Egypt. 
            My journey into the world of digital art began few years ago, and since then, 
            I’ve been exploring various styles and techniques to bring my creative visions to life.
        </div>
        <h3 class="About_Section">My Artistic Journey</h3>
        <div class="about_text">
            Although my adventure in digital art started recently, 
            I’ve always been fascinated by the power of visual storytelling. 
            My work is inspired by other artists, anime and story rich video games, 
            and I strive to create pieces that evoke emotions and spark imagination. 
            Each artwork is a reflection of my thoughts, experiences, and the world around me.
        </div>
        <h3 class="About_Section">Let’s Connect</h3>
        <div class="about_text">
            I believe that art is a universal language that connects people from all walks of life. 
            Feel free to explore my gallery, share your thoughts, 
            and connect with me on 
            <ul class="socials__list">
                <li class="social_list_item">
                    <a class="social__item" href="https://www.instagram.com/fady_abdelshahid/" target="_blank" >
                        <div class="about_social_insta"><i id="about-insta" class="fa-brands fa-instagram"></i>Instagram</div>
                    </a>
                </li>
                <li class="social_list_item">
                    <a class="social__item" href="mailto:fady0118@gmail.com" target="_blank" >
                       <div class="about_social_gmail"><i id="about-gmail" class="fa-brands fa-google"></i>-mail</div>
                    </a>
                </li>
                <li class="social_list_item">
                    <a class="social__item" href="https://www.deviantart.com/fadynasser" target="_blank" >
                        <div class="about_social_deviantart"><i id="about-deviant" class="fa-brands fa-deviantart"></i>Deviantart</div>
                    </a>
                </li>
            </ul> 
            <div class="aboutclosure">
                Your feedback and support mean the world to me!<br/>
                Thank you for visiting, and I hope you enjoy your stay!
            </div>
            
        </div>
 `,e}function M(){const e=document.createElement("div");return e.classList="Copyright_body",e.innerHTML=`
        <h1 class="copyright_title">Copyright Notice</h1>
        <h3 class="signature">©Fady Abd-Elshahid 2024</h3>
        <div>All artwork on this website is the intellectual property of Fady Abd-Elshahid. You are welcome to view, share, and enjoy the art displayed here under the following conditions:
            <ol class="ruleslist">
                <li class="rule">
                    Attribution: You must give appropriate credit, provide a link to the original work, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
                </li>
                <li class="rule"> 
                    Non-Commercial: You may not use the material for commercial purposes.
                </li>
                <li class="rule">
                    No Derivatives: If you remix, transform, or build upon the material, you may not distribute the modified material.
                </li>
            </ol>
        </div>
        <h3 class="credit">How to Credit</h1>
        <div class="copyright_text">When sharing or using the artwork, please include the following credit line:<br/>
            “Artwork by Fady AbdElshahid - 
            <a href="https://fady0118.github.io/MyArt_Gallery" class="text-decoration: none;" id="credit_link" target="_blank">https://fady0118.github.io/MyArt_Gallery</a>”</div>
    
        <h3 class="Contact">Contact</h1>
        <div class="copyright_text">For any inquiries or permissions beyond the scope of this license, please contact 
            <a id="Contact_mail" href="mailto:fady0118@gmail.com" target="_blank">fady0118@gmail.com</a>.<br/>
            Thank you for respecting the creative work and rights of the artist.
        </div>`,e}const w="/MyArt_Gallery/assets/image1-BkbZ2qDC.webp",O=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),A="/MyArt_Gallery/assets/image10-ZQ1nMz7J.webp",j=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"})),S="/MyArt_Gallery/assets/image11-5rR1Vrot.webp",P=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),E="/MyArt_Gallery/assets/image2-B03sSZbG.webp",k=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),T="/MyArt_Gallery/assets/image3-C0vq7NAQ.webp",L=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),C="/MyArt_Gallery/assets/image4-Bw-okr3Y.webp",G=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),I="/MyArt_Gallery/assets/image5-BNMaHEFo.webp",B=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),F="/MyArt_Gallery/assets/image6-CGScuNku.webp",H=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),z="/MyArt_Gallery/assets/image7-BT3e9jF0.webp",$=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),x="/MyArt_Gallery/assets/image8-BlA6B00M.webp",N=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),q="/MyArt_Gallery/assets/image9-Q8dnW779.webp",D=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),Y="/MyArt_Gallery/assets/image1-CIwPBUO3.png",U=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),J="/MyArt_Gallery/assets/image10-398KwGUu.png",W=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),K="/MyArt_Gallery/assets/image11-CFLsTaLe.png",Q=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"})),R="/MyArt_Gallery/assets/image2-BJMaIKqp.png",Z=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"})),V="/MyArt_Gallery/assets/image3-oWs4xuCJ.png",X=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"})),ee="/MyArt_Gallery/assets/image4-CXDqeAw-.png",te=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"})),ae="/MyArt_Gallery/assets/image5-C-1wuB_A.png",ie=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"})),oe="/MyArt_Gallery/assets/image6-BaEmCH1H.png",ne=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"})),se="/MyArt_Gallery/assets/image7-CmkgBNfc.png",le=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"})),re="/MyArt_Gallery/assets/image8-Bwx6I12d.png",ce=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"})),de="/MyArt_Gallery/assets/image9-daIF-2Jq.png",ge=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"})),d=Object.assign({"../images/Paintings/image1.png":O,"../images/Paintings/image10.png":j,"../images/Paintings/image11.png":P,"../images/Paintings/image2.png":k,"../images/Paintings/image3.png":L,"../images/Paintings/image4.png":G,"../images/Paintings/image5.png":B,"../images/Paintings/image6.png":H,"../images/Paintings/image7.png":$,"../images/Paintings/image8.png":N,"../images/Paintings/image9.png":D}),c=Object.keys(d),p=Object.assign({"../images/Paintings/image1.png":U,"../images/Paintings/image10.png":W,"../images/Paintings/image11.png":Q,"../images/Paintings/image2.png":Z,"../images/Paintings/image3.png":X,"../images/Paintings/image4.png":te,"../images/Paintings/image5.png":ie,"../images/Paintings/image6.png":ne,"../images/Paintings/image7.png":le,"../images/Paintings/image8.png":ce,"../images/Paintings/image9.png":ge}),g=Object.keys(p);function _e(){const e=document.createElement("div");e.id="image_Container",e.classList="GalleryContainer";const t=document.createElement("div");return t.id="myModal",t.classList="Modal_Container",t.innerHTML='<span id="Modal_close"><i class="fa-solid fa-xmark"></i></span>',{galleryEl:e,modalEl:t}}function me(){const e=document.getElementById("image_Container");if(e){const t=c.length,i=Array.from({length:t},(o,a)=>a);y(i),i.forEach(o=>{const a=document.createElement("div");a.className="box",a.innerHTML=`<img id="image-${o+1}" alt="Image ${o+1}" src="${d[c[o]].default}"></img>`,a.addEventListener("click",()=>{ue(o)}),e.appendChild(a)})}}function ue(e){console.log(g[e]);const t=document.getElementById("myModal");t.innerHTML='<span id="Modal_close"><i class="fa-solid fa-xmark"></i></span>';const i=document.createElement("img");i.id=`Img${e}`,i.className="modal_content",t&&t.appendChild(i),t.style.display="block",i.src=p[g[e]].default;const o=document.getElementById("Modal_close");o&&o.addEventListener("click",()=>{t.style.display="none"})}function fe(){const e=document.createElement("div");return e.innerHTML=`        
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
        </section>`,e}function ye(){const e=document.getElementById("fav__container");if(e){const t=[0,1,2,3,10];y(t),t.forEach(i=>{const o=document.createElement("img");o.src=d[c[i]].default,o.alt=`image ${i+1}`,o.id=`image_${i+1}`,o.className="Fav_image",e.appendChild(o)})}}function be(){ye()}const s=document.getElementById("main");function _(e=void 0){console.log("render homepage"),s.innerHTML="",s.appendChild(fe()),be(),b(e)}function pe(){const{galleryEl:e,modalEl:t}=_e();console.log("render gallery"),s.innerHTML="",s.appendChild(e),s.appendChild(t),me(),l()}function m(){s.innerHTML="",s.appendChild(v()),l()}function he(){s.innerHTML="",s.appendChild(M()),l()}let u;async function h(){console.log("router in");const e=window.location.hash.split("#")[1];if(e===u){b(window.location.hash.split("#")[2]);return}switch(e){case"/":_(e);break;case"/gallery":pe();break;case"/about":m();break;case"/copyright":he();break;case"/about":m();break;default:_()}u=e,console.log("router out")}function ve(){const e=document.createElement("nav");return e.classList="nav container",e.innerHTML=`<a dest="#/#top" class="nav__logo">Fady's Gallery</a>

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
                    <img src="images/mona-lisa.png" alt="image" class="nav__img-1">
                    <img src="images/paint-roller.png" alt="image" class="nav__img-2">
                
                    </div>
                        <!-- Toggle button -->
                        <div class="nav__toggle" id="nav-toggle">
                            <i class="fa-solid fa-bars"></i>
                            <!-- <i class="ri-menu-line"></i> -->
                        </div>
                    </div>
                </div>`,e}function Me(){document.querySelector(".nav.container").querySelectorAll("a").forEach(i=>{i.addEventListener("click",o=>{o.preventDefault(),console.log(`${i.innerHTML} clicked!`),f(i.getAttribute("dest"))})})}window.addEventListener("hashchange",()=>{console.log("hash change",location.hash),h()});document.addEventListener("DOMContentLoaded",()=>{console.log("DOM load",location.hash),we(),location.hash?h():(console.log("navigate to /"),location.hash="/"),window.addEventListener("scroll",Oe);const e=document.querySelector("#footer>a");e.addEventListener("click",()=>{f(e.getAttribute("dest"))})});function we(){console.log("render header");const e=document.getElementById("header");e.innerHTML="",e.appendChild(ve()),Me()}function Oe(){const e=document.getElementById("header");window.scrollY>=50?e.classList.add("blur_header"):e.classList.remove("blur_header")}

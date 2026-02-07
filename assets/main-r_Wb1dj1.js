(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();function f(e){window.location.hash=e}function y(e){for(let t=e.length-1;t>0;t--){const a=Math.floor(Math.random()*(t+1));[e[t],e[a]]=[e[a],e[t]]}}function l(){window.scrollTo(0,0)}function b(e){if(e==="top"){l();return}const t=document.getElementById(e);t&&t.scrollIntoView()}function h(){const e=document.getElementById("nav-menu"),t=document.getElementById("nav-toggle"),a=document.getElementById("nav-close"),n=document.querySelectorAll(".nav__link");t&&t.addEventListener("click",()=>{e.classList.add("show__menu")}),a&&a.addEventListener("click",()=>{e.classList.remove("show__menu")}),n&&n.forEach(i=>i.addEventListener("click",()=>{e.classList.remove("show__menu")}))}function M(){const e=document.createElement("div");return e.classList="About_Container",e.innerHTML=`
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
 `,e}function w(){const e=document.createElement("div");return e.classList="Copyright_body",e.innerHTML=`
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
        </div>`,e}const O="/MyArt_Gallery/assets/image1-BkbZ2qDC.webp",A=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),S="/MyArt_Gallery/assets/image10-ZQ1nMz7J.webp",j=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),E="/MyArt_Gallery/assets/image11-5rR1Vrot.webp",P=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),k="/MyArt_Gallery/assets/image2-B03sSZbG.webp",L=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),T="/MyArt_Gallery/assets/image3-C0vq7NAQ.webp",C=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),G="/MyArt_Gallery/assets/image4-Bw-okr3Y.webp",I=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"})),B="/MyArt_Gallery/assets/image5-BNMaHEFo.webp",F=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"})),H="/MyArt_Gallery/assets/image6-CGScuNku.webp",z=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),$="/MyArt_Gallery/assets/image7-BT3e9jF0.webp",x=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),N="/MyArt_Gallery/assets/image8-BlA6B00M.webp",q=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"})),D="/MyArt_Gallery/assets/image9-Q8dnW779.webp",U=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),Y="/MyArt_Gallery/assets/image1-CIwPBUO3.png",J=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),W="/MyArt_Gallery/assets/image10-398KwGUu.png",K=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),Q="/MyArt_Gallery/assets/image11-CFLsTaLe.png",R=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),Z="/MyArt_Gallery/assets/image2-BJMaIKqp.png",V=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),X="/MyArt_Gallery/assets/image3-oWs4xuCJ.png",ee=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),te="/MyArt_Gallery/assets/image4-CXDqeAw-.png",ae=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"})),ie="/MyArt_Gallery/assets/image5-C-1wuB_A.png",ne=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"})),oe="/MyArt_Gallery/assets/image6-BaEmCH1H.png",se=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"})),le="/MyArt_Gallery/assets/image7-CmkgBNfc.png",re=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"})),ce="/MyArt_Gallery/assets/image8-Bwx6I12d.png",de=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"})),ge="/MyArt_Gallery/assets/image9-daIF-2Jq.png",_e=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"})),d=Object.assign({"../images/Paintings/image1.png":A,"../images/Paintings/image10.png":j,"../images/Paintings/image11.png":P,"../images/Paintings/image2.png":L,"../images/Paintings/image3.png":C,"../images/Paintings/image4.png":I,"../images/Paintings/image5.png":F,"../images/Paintings/image6.png":z,"../images/Paintings/image7.png":x,"../images/Paintings/image8.png":q,"../images/Paintings/image9.png":U}),c=Object.keys(d),p=Object.assign({"../images/Paintings/image1.png":J,"../images/Paintings/image10.png":K,"../images/Paintings/image11.png":R,"../images/Paintings/image2.png":V,"../images/Paintings/image3.png":ee,"../images/Paintings/image4.png":ae,"../images/Paintings/image5.png":ne,"../images/Paintings/image6.png":se,"../images/Paintings/image7.png":re,"../images/Paintings/image8.png":de,"../images/Paintings/image9.png":_e}),g=Object.keys(p);function me(){const e=document.createElement("div");e.id="image_Container",e.classList="GalleryContainer";const t=document.createElement("div");return t.id="myModal",t.classList="Modal_Container",t.innerHTML='<span id="Modal_close"><i class="fa-solid fa-xmark"></i></span>',{galleryEl:e,modalEl:t}}function ue(){const e=document.getElementById("image_Container");if(e){const t=c.length,a=Array.from({length:t},(n,i)=>i);y(a),a.forEach(n=>{const i=document.createElement("div");i.className="box",i.innerHTML=`<img id="image-${n+1}" alt="Image ${n+1}" src="${d[c[n]].default}"></img>`,i.addEventListener("click",()=>{fe(n)}),e.appendChild(i)})}}function fe(e){console.log(g[e]);const t=document.getElementById("myModal");t.innerHTML='<span id="Modal_close"><i class="fa-solid fa-xmark"></i></span>';const a=document.createElement("img");a.id=`Img${e}`,a.className="modal_content",t&&t.appendChild(a),t.style.display="block",a.src=p[g[e]].default;const n=document.getElementById("Modal_close");n&&n.addEventListener("click",()=>{t.style.display="none"})}function ye(){const e=document.createElement("div");return e.innerHTML=`        
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
        </section>`,e}function be(){const e=document.getElementById("fav__container");if(e){const t=[0,1,2,3,10];y(t),t.forEach(a=>{const n=document.createElement("img");n.src=d[c[a]].default,n.alt=`image ${a+1}`,n.id=`image_${a+1}`,n.className="Fav_image",e.appendChild(n)})}}function pe(){be()}const s=document.getElementById("main");function _(e=void 0){console.log("render homepage"),s.innerHTML="",s.appendChild(ye()),pe(),b(e)}function ve(){const{galleryEl:e,modalEl:t}=me();console.log("render gallery"),s.innerHTML="",s.appendChild(e),s.appendChild(t),ue(),l()}function m(){s.innerHTML="",s.appendChild(M()),l()}function he(){s.innerHTML="",s.appendChild(w()),l()}let u;async function v(){console.log("router in");const e=window.location.hash.split("#")[1];if(e===u){b(window.location.hash.split("#")[2]);return}switch(e){case"/":_(e);break;case"/gallery":ve();break;case"/about":m();break;case"/copyright":he();break;case"/about":m();break;default:_()}u=e,console.log("router out")}function Me(){const e=document.createElement("nav");return e.classList="nav container",e.innerHTML=`<a dest="#/#top" class="nav__logo">Fady's Gallery</a>

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
                        </div>`,e}function we(){document.querySelector(".nav.container").querySelectorAll("a").forEach(a=>{a.style.cursor="pointer",a.addEventListener("click",n=>{n.preventDefault(),console.log(`${a.innerHTML} clicked!`),f(a.getAttribute("dest"))})}),h()}window.addEventListener("hashchange",()=>{console.log("hash change",location.hash),v()});document.addEventListener("DOMContentLoaded",()=>{Oe(),location.hash?v():location.hash="/",window.addEventListener("scroll",Ae);const e=document.querySelector("#footer>a");e.addEventListener("click",()=>{f(e.getAttribute("dest"))})});function Oe(){const e=document.getElementById("header");e.innerHTML="",e.appendChild(Me()),we()}function Ae(){const e=document.getElementById("header");window.scrollY>=50?e.classList.add("blur_header"):e.classList.remove("blur_header")}

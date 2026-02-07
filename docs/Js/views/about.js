export default function about() {
  const aboutEl = document.createElement("div");
  aboutEl.classList = "About_Container";
  aboutEl.innerHTML = `
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
 `;
 return aboutEl
}

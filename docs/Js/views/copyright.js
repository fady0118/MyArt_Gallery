export default function copyright() {
  const copyrightEl = document.createElement("div");
  copyrightEl.classList = "Copyright_body";
  copyrightEl.innerHTML = `
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
        </div>`;
  return copyrightEl;
}

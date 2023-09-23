const renderContactPage = (() => {
    return `
        <h1 class="red">Contact us</h1>
        
        <div class="information">
            <div class="phone">
                <span class="material-symbols-outlined red">
                    phone
                </span>
                <div>
                    <span class="big red">Phone</span> <br>
                    <a href="tel:+123 606 984 354">+123 606 984 354</a>
                </div>
            </div>
            <div class="mail">
                <span class="material-symbols-outlined red">
                    mail
                </span>
                <div>
                    <span class="big red">Mail</span> <br>
                    <a href="mailto:letseat@gmail.com">letseat@gmail.com</a>
                </div>
            </div>
            <div class="location">
                <span class="material-symbols-outlined red">
                    location_on
                </span>
                <div>
                    <span class="big red">Location</span> <br>
                    nám. Svobody 19, <br>
                    602 00 Brno-střed
                </div>
            </div>
            <div class="schedule">
                <span class="material-symbols-outlined md-60 red">
                    schedule
                </span>
                <div>
                    <span class="big red">Opening hours</span> <br>
                    <span class="red">Mo-Th:</span> 10:00-20:00 <br>
                    <span class="red">Fr-Su:</span> 15:00-22:00 <br>
                </div>
            </div>
            <div class="socials">
                <span class="big red">Our socials</span>
                <div class="icons">
                    <img src="images/instagram.png">
                    <img src="images/facebook.png">
                    <img src="images/twitter.png">
                </div>
            </div>
        </div>
        <p>
            <iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20860.279781309644!2d16.57733672400508!3d49.19041022622123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129450c70597c3%3A0x49c6ac8dc859102a!2sMcDonald&#39;s!5e0!3m2!1sen!2scz!4v1695140271692!5m2!1sen!2scz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </p>`;
    });


export { renderContactPage };
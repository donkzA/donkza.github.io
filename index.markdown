---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
---
<div class="container">
    <div class="row">
        <div class="contact col">
            <h2 class="title-header">Contact</h2>
            <form id="contactForm" class="contact-form" action="https://formspree.io/mzbpjgbd" method="POST">
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control" id="contact-name" name="contact-name" placeholder="Your name">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="contact-email" name="contact-email" aria-describedby="emailHelp" placeholder="name@domain.com">
                </div>
                <div class="form-group">
                    <label for="contact-message">Message</label>
                    <textarea class="form-control" id="contact-message" name="contact-message" rows="3" placeholder="Open to any working opportunity."></textarea>
                </div>
                <button id="my-form-button" type="submit" class="btn btn-dark" name="submit">Send</button>
                <p id="my-form-status"></p>
            </form>
        </div>
        <div class="profile col">
            <div class="row">
                <div class="skills col">
                    <h3 class="title-header">Skills</h3>
                    <ul class="nav flex-column">
                        <li class="nav-item">HTML/HTML5</li>
                        <li class="nav-item">CSS/CSS3</li>
                        <li class="nav-item">JavaScript/jQuery</li>
                        <li class="nav-item">Theme Customization</li>
                        <li class="nav-item">Website Debugging</li>
                    </ul>
                </div>
                <div class="interest col">
                    <h3 class="title-header">Interest</h3>
                    <ul class="nav flex-column">
                        <li class="nav-item">PHP</li>
                        <li class="nav-item">React</li>
                        <li class="nav-item">Python</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

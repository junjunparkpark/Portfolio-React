import React from 'react';

const About = () => {
  return (
    <section id="about" class="section section-bg-light section-top-rise section-bottom-rise">
      <div class="section-inner">

        <div class="container">

          <header class="heading">
            <h2>About</h2>
            <div class="separator"></div>
          </header>

          <div class="row">
            <div class="col span_4 center">
              <div class="site-photo"><img src="images/new-profile-pic.png" width="250" height="250" alt="Photo" class="photo"/></div>
              </div>
              <div class="col span_8">
                <p>I am a Frontend Web Developer motivated to combine the art of design with the art of programming. I am obsessed (borderline compulsive, actually) about making user interfaces look right and work right. I dig the science of user experience and have opinions.
              <p>Want a look at my full resume?
					<a href="assets/Resume.pdf" target="_blank">Click here!</a>
                  </p>
                  Additionally find out more on:
         			  </p>
                <ul class="social-nav">
                  <li><a href="https://github.com/ritagya" target="_blank"><i class="fa fa-github"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/ritagya-meharishi-a51b57ab" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                  <li><a href="https://www.instagram.com/ritagyamehrish/?hl=en" target="_blank"><i class="fa fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>

          </div>

        </div>
    </section>
  );
};

export default About;
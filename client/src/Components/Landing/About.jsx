import React from 'react';

const About = () => {
  return (
    <section id="about" className="section section-bg-light section-top-rise section-bottom-rise">
      <div className="section-inner">

        <div className="container">

          <header className="heading">
            <h2>About</h2>
            <div className="separator"></div>
          </header>

          <div className="row">
            <div className="col span_4 center">
              <div className="site-photo"><img src="media/images/junpark2.jpg" width="250" height="250" alt="Photo" className="photo"/></div>
              </div>
              <div className="col span_8">
                <p>I am a software engineer with experience in creating intuitive user interfaces with modern web technologies, implementing REST API's on the server, creating scalable database solutions, and deploying to the cloud with Amazon Web Services.</p>
                <p>Want a look at my full resume? <a href="assets/Resume.pdf" target="_blank">Click here!</a></p>
                
                <p>Find out more:
         			  </p>
                <ul className="social-nav">
                  <li><a href="https://github.com/junjunparkpark" target="_blank"><i className="fa fa-github"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/junjunparkpark" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="https://www.instagram.com/junjunparkpark" target="_blank"><i className="fa fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>

          </div>

        </div>
    </section>
  );
};

export default About;
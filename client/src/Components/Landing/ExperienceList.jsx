import React from 'react';

class ExperienceList extends React.Component {
  constructor(props) {
    super();

  }



  render() {
    return (


    <section id="experience" className="section">
      <div className="section-inner">
        <div className="container">

          <header className="heading">
            <h2>Experience</h2>
            <div className="separator"></div>
          </header>

          <div className="experience">
            <div className="experience-item">
              <div className="icon-b wow bounceIn"><i className="fa fa-briefcase"></i></div>
              <div className="experience-item-inner wow bounceInLeft">
                <div className="date">Web Developer at OPSWAT</div>
                <h3>October 2016 - Present</h3>
                <p>OPSWAT is a San Francisco based software company that provides solutions to secure and manage IT infrastructure. I help develop and maintain the company's websites. <br/> Technologies Used - HTML, CSS, JavaScript, JQuery, Drupal, Craft, GhostInspector, Hubspot, Adobe Suite. </p>
                  <p>Latest Project - <a href="http://micro.opswat.com/" target="_blank">OPSWAT Microsite</a> A multi-lingual web platform.</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="icon-b wow bounceIn"><i className="fa fa-briefcase"></i></div>
            <div className="experience-item-inner wow bounceInLeft">
              <div className="date">LVRT, LLC</div>
              <p>LVRT (pronounced "Love Art") is a copyright licensing and promotional platform for musicians and filmmakers to distribute and fairly monetize their works.
              <a href="http://www.lvrt.com/" target="_blank">LVRT</a></p>
            </div>
          </div>

          <div className="experience-item">
            <div className="icon-b wow bounceIn"><i className="fa fa-briefcase"></i></div>
            <div className="experience-item-inner wow bounceInRight">
              <div className="date">Stanford University</div>
              <h3>June - October, 2016</h3>
              <p>Website management and integration of technology into Stanford's learning management system. </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="icon-b wow bounceIn"><i className="fa fa-briefcase"></i></div>
            <div className="experience-item-inner wow bounceInRight">
              <div className="date">Part-time Mentor at Codify Academy</div>
              <h3>December 2016 - May, 2017</h3>
              <p>Collaborate with Instructors and actively engage with students to deliver a fully effective className in teaching Front End Development.</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="icon-b wow bounceIn"><i className="fa fa-mortar-board"></i></div>
            <div className="experience-item-inner wow bounceInLeft">
              <div className="date">Codify Academy</div>
              <h3>Nov 2016 - Apr 2017</h3>
              <p>
                Web Development coding bootcamp in San Francisco, California.
                Learned front end fundamentals: HTML, CSS, Javascript, JQuery, Bootstrap, Git, and AngularJS.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="icon-b wow bounceIn"><i className="fa fa-briefcase"></i></div>
            <div className="experience-item-inner wow bounceInRight">
              <div className="date">BitSigma, LLC</div>
              <h3>Jun 2014 - Jan 2015</h3>
              <p>
                Bitcoin mining startup in Denver, Colorado.
                Implemented a Bitcoin mining environment by converting office space into a datacenter.
                Outputting ~25 Terahashes per second generating 1-2 Bitcoins per day at the time. 
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="icon-b wow bounceIn"><i className="fa fa-briefcase"></i></div>
            <div className="experience-item-inner wow bounceInLeft">
              <div className="date">Financial Representative</div>
              <h3>Apr 2014 - Jun 2014</h3>
              <p>Northwestern Mutual</p>
            </div>
          </div>
          
          <div className="experience-item">
            <div className="icon-b wow bounceIn"><i className="fa fa-mortar-board"></i></div>
            <div className="experience-item-inner wow bounceInRight">
              <div className="date">University of Denver</div>
              <h3>2011 - 2015</h3>
              <p>Bachelor of Science in Finance and Business Administration (Incomplete) </p>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>



    )
  }
}

export default ExperienceList;
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
            <div className="experience-item-inner wow bounceInRight">
                  <div className="date">Hacker-In-Residence (Software Engineering Fellowship)</div>
              <h3>July 2017 - Present</h3>
              <p>
                Accommodated mentorship to engineering teams through code review, debugging, and architecture design.<br/>
                Provided individualized instruction on topics including but not limited to computer science fundamentals, Javascript frameworks, and general back-end architecture.<br/>
                Conducted mock software engineering technical interviews for students and alumni. 
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="icon-b wow bounceIn"><i className="fa fa-mortar-board"></i></div>
            <div className="experience-item-inner wow bounceInRight">
              <div className="date">Hack Reactor</div>
              <h3>May 2017 - July 2017</h3>
              <p>
                12 week software engineering program.<br/>
                Focusing in computer science and Javascript fundamentals.<br/>
                San Francisco Market - Cohort #78.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="icon-b wow bounceIn"><i className="fa fa-mortar-board"></i></div>
            <div className="experience-item-inner wow bounceInLeft">
              <div className="date">Codify Academy</div>
              <h3>November 2016 - April 2017</h3>
              <p>
              Web Development coding bootcamp in San Francisco, California.<br/>
              Learned front end fundamentals: HTML, CSS, Javascript, JQuery, Bootstrap, Git, and AngularJS.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="icon-b wow bounceIn"><i className="fa fa-briefcase"></i></div>
            <div className="experience-item-inner wow bounceInRight">
              <div className="date">BitSigma, LLC</div>
              <h3>June 2014 - January 2015</h3>
              <p>
                Bitcoin mining startup in Denver, Colorado.<br/>
                Implemented a Bitcoin mining environment by converting office space into a datacenter.<br/>
                Outputted ~25 Terahashes per second generating 1-2 Bitcoins per day at the time. 
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="icon-b wow bounceIn"><i className="fa fa-briefcase"></i></div>
            <div className="experience-item-inner wow bounceInLeft">
              <div className="date">Northwestern Mutual</div>
              <h3>April 2014 - June 2014</h3>
              <p>
                College Financial Representative.<br/>
                Completed Northwestern Mutual's sales program for incoming financial representatives.
              </p>
            </div>
          </div>
          
          <div className="experience-item">
            <div className="icon-b wow bounceIn"><i className="fa fa-mortar-board"></i></div>
            <div className="experience-item-inner wow bounceInRight">
              <div className="date">University of Denver</div>
              <h3>August 2011 - November 2014</h3>
              <p>
                Bachelor of Science in Finance and Business Administration (Incomplete) <br/>
                VP of Judicial Affairs and Risk Management - DU Greek Council
              </p>
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
import React from 'react';

const ExperienceListItem = ({ isLeft }) => {
  return (
    <div className="experience">
      <div className="experience-item">
        <div className="icon-b wow bounceIn"><i className="fa fa-briefcase"></i></div>
        <div className="experience-item-inner wow bounceInLeft">
          <div className="date">Web Developer at OPSWAT</div>
          <h3>October 2016 - Present</h3>
          <p>OPSWAT is a San Francisco based software company that provides solutions to secure and manage IT infrastructure. I help develop and maintain the company's websites.
            <br /> Technologies Used - HTML, CSS, JavaScript, JQuery, Drupal, Craft, GhostInspector, Hubspot, Adobe Suite. </p>
          <p>Latest Project - <a href="http://micro.opswat.com/" target="_blank">OPSWAT Microsite</a> A multi-lingual web platform.</p>
        </div>
        {/* {isLeft 
          ? 
          <div className="experience-item-inner wow bounceInLeft">
            <div className="date">Web Developer at OPSWAT</div>
            <h3>October 2016 - Present</h3>
            <p>OPSWAT is a San Francisco based software company that provides solutions to secure and manage IT infrastructure. I help develop and maintain the company's websites. 
            <br /> Technologies Used - HTML, CSS, JavaScript, JQuery, Drupal, Craft, GhostInspector, Hubspot, Adobe Suite. </p>
            <p>Latest Project - <a href="http://micro.opswat.com/" target="_blank">OPSWAT Microsite</a> A multi-lingual web platform.</p>
          </div>
          :  
          <div className="experience-item-inner wow bounceInRight"> 
            <div className="date">Web Developer at OPSWAT</div>
            <h3>October 2016 - Present</h3>
            <p>OPSWAT is a San Francisco based software company that provides solutions to secure and manage IT infrastructure. I help develop and maintain the company's websites.
            <br /> Technologies Used - HTML, CSS, JavaScript, JQuery, Drupal, Craft, GhostInspector, Hubspot, Adobe Suite. </p>
            <p>Latest Project - <a href="http://micro.opswat.com/" target="_blank">OPSWAT Microsite</a> A multi-lingual web platform.</p>
          </div>
        } */}
      </div>
    </div>

  );
};

export default ExperienceListItem;
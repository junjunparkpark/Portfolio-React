import React from 'react';

const ApplicationsListItem = () => {
  return (
    <li className="works-item"><a href="#works-item-details-5" className="works-item-link"><span className="works-item-thumb"><img src="images/chinese.png" width="250" height="250" alt="" /></span></a>
      <div id="works-item-details-5" className="popup mfp-hide">
        <figure><img src="images/chinesehoro.png" width="750" height="500" alt="" /></figure>
        <div className="popup-inner">
          <h3>Chinese Zodiac</h3>
          <p>An app created with Javascript where you can get a reading for your characteristics by entering your Chinese animal sign.</p>
          <div className="center"><a href="https://ritagya.github.io/Chinese_Horoscope_App/" target="_blank" className="btn">View site</a></div>
        </div>
      </div>
    </li>
  );
};

export default ApplicationsListItem;
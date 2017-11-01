import React from 'react';

const ApplicationsListItem = (props) => {
  return (
    <li className="works-item">
      <a href="" className="works-item-link">
        <span className="works-item-thumb"><img src="https://socialnewsdaily.com/wp-content/uploads/2014/05/rick-astley-rickrolling.jpg" width="250" height="250" alt="" /></span>
      </a>
      <div id="" className="popup mfp-hide">
        <figure><img src="" width="750" height="500" alt="" /></figure>
        <div className="popup-inner">
          <h3>Chinese Zodiac</h3>
          <p>An app created with Javascript where you can get a reading for your characteristics by entering your Chinese animal sign.</p>
          <div className="center"><a href="" target="_blank" className="btn">View site</a></div>
        </div>
      </div>
    </li>
  );
};

export default ApplicationsListItem;
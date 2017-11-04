import React from 'react';
import ApplicationsListItem from './ApplicationsListItem.jsx';

class ApplicationsList extends React.Component {
  constructor(props) {
    super();

    this.state = {
      applications: [{ h: 'h' }, { h: 'h' }, { h: 'h' }, { h: 'h' }, { h: 'h' }, { h: 'h' }]
    }
  }

  render() {
    return (
      <section id="projects" className="section">
        <div className="section-inner">

          <div className="container">

            <header className="heading">
              <h2>Applications</h2>
              <div className="separator"></div>
            </header>

            <ul className="works">
              <li className="works-item">
                <a href="" className="works-item-link">
                  <span className="works-item-thumb"><img src="https://lh3.googleusercontent.com/bwq-QbVKjLk8OU3oU25NtawHAyWNTxNFa7fKkTDhXEQ4Qidsj-S5kh49r6suxcFKuMvBzsGMoJXjsj9jd1Lu-MtZWF_3w1w8ZoSschF5qOWyK1koHL0AFuv8tS-hiSM8dVUGrSYJlp-CZ_5650T_P7v8ZXAO8jZyj7DnsHxHUaaqhWWjKjbBTFg7eIaBzdZ6CpjXNPzd9RkIapBmkrScbF5UvxQ3C-NJS6ftJUva1eQ0uPkTHLOpIFunh1kIgJA88xUjPQhjnuQ3jBcXtcW3CHT6WmWSA7NW6fSbYWCs-mFAkQWxDnPplm4clha2lhIv9SJHSzKdqL-7Lysnz8hPUztmc1KERzx_nCpAkFXZedWLyKc9xeoFMtGRSlfoe-UHE9xeQb8-f5hkM1vR6jIQqPk2lK7j348MMsuvKGSlXFC2BmM0MC7dBxvToBgVUySeduf39LdcUKJ2jU_fDpVAKW8nj-Igo0VV1rqBser9P_wKutS01ERcUoZMGGh_SDi6qdTd2NS-ReC0g2u7p6z35NAx75-5F035vLdoIvpJG1DSvZpGfqDGJ9MT_lBDOMuoVjhJrogLMULQMAT9e-KV-29iI-3TAGPSU6L_0uG0eZw=s1462-no" width="250" height="250" alt="" /></span>
                </a>
                <div id="" className="popup mfp-hide">
                  <figure><img src="" width="750" height="500" alt="" /></figure>
                  <div className="popup-inner">
                    <h3>CodeSmash</h3>
                    <p>Real-time collaborative Javascript coding environment with video chat.</p>
                    <p>Tech Stack: React, Bootstrap UI, Node, Express, Redis, MongoDB, Mongoose ODM, Google Oauth, Heroku deployment.</p>
                    <div className="center"><a href="" target="_blank" className="btn">View site</a></div>
                  </div>
                </div>
              </li>
              
              <li className="works-item">
                <a href="" className="works-item-link">
                  <span className="works-item-thumb"><img src="https://lh3.googleusercontent.com/Zf5faCwPoi8eRQWOz0aPptN09g68KXu4jzSKT6y9ULeJ-653vg4dTCR7VXwjZJ5I1AEczXN9fwqXI4KcD-pZaBhgfcFK-aY7becPVj-RFj0oGzBsX_HFDVsR4vvqkVkhxS9XdVSFlaRLxigxDifBN4A3XoZu0Fchs5KamN69tljBg2VSNR2y6og5UHIXs_sem0ES3PYNmhaRKY4bTt5Lh4YUbnNMUcWm7zybS9Rgmbu2bYSy0bc2zs9SNXqCg48yXCeh9KYFOab7c7oqrl3_2uVY4wiiE1chs3JvW3fN33v_ePbcRBVWYAO2yxqxP1LUpGwreaQYidlCLQjHuI3gejZw9adNwsFVxI9l-h6HebBQA7xA2yYgD2DXDHvU_iS2WODcHm_5Kf9w7z8QjlN_sVficIfyPrqPx0nbaurh2sR6RwdgTVuuOSOcRyt7hiBxHe1odsCUOnabXtemgAjKuniaALZXdH5TDLSg1715PbLGMWgz20pjglwDI19DxKHhET-V20ikkld9D6Uk6Vuh4PUTWi-pBsGVZyfpav_0FcI2FlMxNzZjgt3CGTJQrYfnHaXQ7M61S_sCH5bDIXM3aBGqeCN_JSDtPp5xo5DV_Kc=s1462-no" width="250" height="250" alt="" /></span>
                </a>
                <div id="" className="popup mfp-hide">
                  <figure><img src="" width="750" height="500" alt="" /></figure>
                  <div className="popup-inner">
                    <h3>ToadTryp</h3>
                    <p>An full-stack web application created where you can book a road trip with users traveling to all parts of the country. </p>
                    <p>Tech Stack: React, Semantic UI, Node, Express, MySQL, Bookshelf ORM, Google Oauth, Heroku Deployment.</p>
                    <div className="center"><a href="" target="_blank" className="btn">View site</a></div>
                  </div>
                </div>
              </li>

              <li className="works-item">
                <a href="" className="works-item-link">
                  <span className="works-item-thumb"><img src="https://lh3.googleusercontent.com/dQRYgyo51lY3qpWsQweKkhkK51ivZFSzJV5K7xkdJgEkcQhkh0--wkFVfpu8Qr8H1m8FgcXCqIZC0K-b6H5La0SOB97T7lS63kkTFkwK-bdtytOFCLVmKILaeIFzvr_1KqimSzbEaPW8JXPIXLMEqU3pe3oqyd6j0y8uWraFOhrQxy5ee9XomlGW3s4H1y4EoYm_cdGCVMAIhL6lxDSCc7DsfIlqob9KeqE0rviEger0hkKyDcPNxwh_mghFV95TGeQvbK-1UxOdRIoW9IQYB3mj51Zh9FfayyeARUE2LRIMTqTvBf2yaJZULZIgvk_f8BecKZB30BOs_I4lLjc76Mvqyt7zPmz_fwlO6OysKZ8hnPhqSXINZTUcGs9XBm7ZOhluKv0U9R76LWSUa4xhSDkdVYb6xjqsJvvtPB70w2tV5BC8CUtKH0Z6E5RJuO3Kn6bOVyGp92j4lRwO3dvk60GZHODTvhWzE9lFMvLchrBtLtgLDF3ul-MYzmMU0s5sylZv4zJdy5DxFDVOkXMo5uNHx0yfiiZWv0Q2irgGaWRocJyzAZ7N5KsQYisjqVA8OEzukZ6Mq9fYIt8gBLYLpxbe63TBKRtzaya7z512jhI=s1062-no" width="250" height="250" alt="" /></span>
                </a>
                <div id="" className="popup mfp-hide">
                  <figure><img src="" width="750" height="500" alt="" /></figure>
                  <div className="popup-inner">
                    <h3>Yelp Historian</h3>
                    <p>Full-stack application utilizing the Yelp API to keep a historical record of restaurants and their ratings.</p>
                    <p>Tech Stack: AngularJS, Node, Express, MongoDB, Mongoose ODM.</p>
                    <div className="center"><a href="" target="_blank" className="btn">View site</a></div>
                  </div>
                </div>
              </li>
            </ul>

        </div>

      </div>
    </section>
    )
  }
}



export default ApplicationsList;
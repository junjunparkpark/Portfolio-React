import React from 'react';

const Footer = () => {
  return (
    <section id="contacts" className="section section-bg-img section-bg-overlay section-top-rise">
      <div className="bg"></div>
      <div className="section-inner">

        <div className="container">

          <header className="heading">
            <span className="black-background"><h2>Contact</h2></span>
            <div className="separator"></div>
          </header>

          <div className="contacts">
            <div className="row">
              <div className="col span_4">
                <div className="contacts-item">
                  <div className="icon-b"><i className="fa fa-map-marker"></i></div>
                  <address className="adr"><span className="country-name">San Francisco, CA</span></address>
                </div>
              </div>
              <div className="col span_4">
                <div className="contacts-item">
                  <div className="icon-b"><i className="fa fa-phone"></i></div><span className="tel">+1 (720) 878-5168</span>
                </div>
              </div>
              <div className="col span_4">
                <div className="contacts-item">
                  <div className="icon-b"><i className="fa fa-send"></i></div><a href="www.gmail.com" className="email">jun.park@live.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Footer;
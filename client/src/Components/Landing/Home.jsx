import React from 'react';

const Home = () => {
  var tableStyle = { 
    height: '100%', 
    marginTop: '-70px'
  };

  var h1Style = {
    color: 'white'
  }

  return (
    <div>
      <section id="preloader"></section>
      <section id="home" className="landing text-center bg-image no-overflow"  data-stellar-background-ratio="0.5">
        <div className="container text-center">
          <div className="fullscreen inline-block">
            <div className="table" style={tableStyle}>
              <div className="table-cell v-middle">

                <div className="lg-rounded-box home__image-box">
                  <img src="media/images/junpark3.jpg" className="img-responsive" alt="#"/>
                </div>

                <h1 className="wow zoomIn heavy text-uppercase home__name" style={h1Style}>jun park</h1>

                <span className="text-uppercase small home__profession">designer / developer / engineer</span>

              </div>

            </div>

            <div className="rings">
              <span>scroll</span>
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <div className="ring ring-3"></div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
};

export default Home;
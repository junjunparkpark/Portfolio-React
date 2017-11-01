import React from 'react';


const Home = () => {
  var tableStyle = { 
    height: '100%', 
    marginTop: '-70px'
  };

  return (
    <div>
      <section id="preloader"></section>
      <section id="home" className="text-center no-overflow gradient">

        <div className="container text-center">
          <div className="fullscreen inline-block">
            <div className="table" style={tableStyle}>
              <div className="table-cell v-middle">

                <div className="lg-rounded-box home__image-box">
                    <img src="media/images/junpark.jpg" className="img-responsive" alt="#"/>
                </div>

                <h1 className="heavy text-uppercase home__name">jun park</h1>

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
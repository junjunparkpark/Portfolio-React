


const Home = () => {
  return (
    <div>
      <section id="preloader"></section>
      <section id="home" class="text-center no-overflow gradient">

        <div class="container text-center">
          <div class="fullscreen inline-block">
            <div class="table" style="height: 100%; margin-top: -70px;">
              <div class="table-cell v-middle">

                <div class="lg-rounded-box home__image-box">
                    <img src="media/images/junpark.jpg" class="img-responsive" alt="#"/>
                </div>

                <h1 class="heavy text-uppercase home__name">jun park</h1>

                <span class="text-uppercase small home__profession">designer / developer / engineer</span>

                  </div>

                </div>

            <div class="rings">
                  <span>scroll</span>
                  <div class="ring ring-1"></div>
                  <div class="ring ring-2"></div>
                  <div class="ring ring-3"></div>
                </div>

              </div>

            </div>
      </section>
    </div>
  )
};

export default Home;
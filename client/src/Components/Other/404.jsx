import React from 'react';

const Page404 = () => {
  return (
    <div>
      <section class="text-center hero-header bg-image" style="background-image: url(media/images/backgrounds/404-image.jpg)">
        <div class="overlay"></div>
        <h1 class="text-capitalize light huge">404</h1>
      </section>		

      <section class="container text-center main-block">
        <div class="container">
      
          <h6 class="h6 regular">The page you are looking for doesn't exist.</h6>

          <div class="md-padder col-md-6 col-md-push-3">
            <form action="#" method="#">
              <div class="input-group">
                <input type="search" name="search" class="form-control" placeholder="type and hit enter to search"/>
                <span class="form-control-feedback fa fa-search"></span>
              </div>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Page404;

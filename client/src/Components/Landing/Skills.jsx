import React from 'react';

const Skills = (props) => {
  return (
    <section id="skills" class="section section-bg-dark section-top-fall section-bottom-fall">
      <div class="section-inner">

        <div class="container">
          <header class="heading">
            <h2>Skills</h2>
            <div class="separator"></div>
          </header>
        </div>

        <div id="icon" class="col span_4">
          <div class="tools">
            <div class="icon-b new">
              <div class="icons"><img src="media/images/html.png" alt="HTML5" title="HTML5" width="40" height="40"/></div>
                <h3>HTML5</h3>
              </div>
              <div class="icon-b new">
                <div class="icons"><img src="media/images/css.png" alt="CSS3" title="CSS3" width="40" height="40"/></div>
                  <h3>CSS3</h3>
                </div>
                <div class="icon-b new">
                  <div class="icons"><img src="media/images/js.png" alt="Javascript" title="Javascript" width="40" height="40"/></div>
                    <h3>Javascript</h3>
                  </div>
                  <div class="icon-b new">
                    <div class="icons"><img src="media/images/jq.png" alt="Jquery" title="Jquery" width="40" height="40"/></div>
                      <h3>Jquery</h3>

                    </div>
                    <div class="icon-b new">
                      <div class="icons"><img src="media/images/b.png" alt="Bootstrap" title="Bootstrap" width="40" height="40"/></div>
                        <h3>Bootstrap</h3>
                      </div>
                      <div class="icon-b new">
                        <div class="icons"><img src="media/images/react.png" alt="react" title="react" width="30" height="30"/></div>
                          <h3>React</h3>
                        </div>

                        <div class="icon-b new">
                          <div class="icons"><img src="media/images/json.png" alt="Json" title="Json" width="50" height="50"/></div>
                            <h3>Json</h3>
                          </div>
                          <div class="icon-b new">
                            <div class="icons"><img src="media/images/ajax.png" alt="Ajax" title="ajax" width="50" height="50"/></div>
                              <h3>AJAX</h3>
                            </div>
                          </div>
                        </div>

                      </div>
    </section>
  );
};

export default Skills;
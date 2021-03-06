import React from 'react';

const Skills = (props) => {
  return (
    <section id="skills" className="section section-bg-dark section-top-fall section-bottom-fall">
      <div className="section-inner">

        <div className="container">
          <header className="heading">
            <span className="black-background"><h2>Skills</h2></span>
            <div className="separator"></div>
          </header>
        </div>

        <div id="icon" className="col span_4">
          <div className="tools">
            <div className="icon-b new">
              <div className="icons"><img src="media/images/html.png" alt="HTML5" title="HTML5" width="40" height="40"/></div>
              <h3>HTML</h3>
            </div>
              
            <div className="icon-b new">
              <div className="icons"><img src="media/images/css.png" alt="CSS3" title="CSS3" width="40" height="40"/></div>
              <h3>CSS</h3>
            </div>

            <div className="icon-b new">
              <div className="icons"><img src="media/images/js.png" alt="Javascript" title="Javascript" width="30" height="30"/></div>
              <h3>Javascript</h3>
            </div>

            <div className="icon-b new">
              <div className="icons"><img src="media/images/react.png" alt="react" title="react" width="30" height="30" /></div>
              <h3>React</h3>
            </div>

            <div className="icon-b new">
              <div className="icons"><img src="media/images/angular.png" alt="angular" title="angular" width="40" height="40"/></div>
              <h3>Angular</h3>
            </div>

            <div className="icon-b new">
              <div className="icons"><img src="media/images/backbone.png" alt="Backbone" title="Backbone" width="25" height="25"/></div>
              <h3>Backbone</h3>
            </div>
                  

            <div className="icon-b new">
              <div className="icons"><img src="media/images/node.png" alt="node" title="node" width="35" height="35"/></div>
              <h3>Node</h3>
            </div>

            <div className="icon-b new">
              <div className="icons"><img src="media/images/sql.png" alt="sql" title="sql" width="40" height="40"/></div>
              <h3>SQL</h3>
            </div>

            <div className="icon-b new">
              <div className="icons"><img src="media/images/mongo.png" alt="mongo" title="mongo" width="40" height="40" /></div>
              <h3>Mongo</h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
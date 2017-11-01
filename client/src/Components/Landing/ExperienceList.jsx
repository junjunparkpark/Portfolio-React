import React from 'react';

class ExperienceList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      experiences: [],
      left: true
    }
  }



  render() {
    return (


    <section id="experience" className="section">
      <div className="section-inner">

        <div className="container">

          <header className="heading">
            <h2>Experience</h2>
            <div className="separator"></div>
          </header>


        </div>
      </div>
    </section>



    )
  }
}

export default ExperienceList;
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

            <ul className="filter">
              <li data-group="all" className="active">All</li>
              <li data-group="web">sites</li>
              <li data-group="illustration">apps</li>
            </ul>

            <ul className="works">
              {
                this.state.applications.map(app => <ApplicationsListItem appData={app} />)
              }
            </ul>

        </div>

      </div>
    </section>
    )
  }
}



export default ApplicationsList;
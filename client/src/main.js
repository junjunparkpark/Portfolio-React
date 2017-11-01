import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Components/Navigation/Nav.jsx';
import Home from './Components/Landing/Home.jsx';
import ApplicationsList from './Components/Landing/ApplicationsList.jsx';
import ExperienceList from './Components/Landing/ExperienceList.jsx';

const Main = () => {
  return (
    <div>
      <Home/>
      <ApplicationsList/>
      <ExperienceList/>
    </div>
  );
};


ReactDOM.render(<Main />, document.getElementById('app'));
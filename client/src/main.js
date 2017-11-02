import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Components/Navigation/Nav.jsx';
import Home from './Components/Landing/Home.jsx';
import ApplicationsList from './Components/Landing/ApplicationsList.jsx';
import ExperienceList from './Components/Landing/ExperienceList.jsx';
import Skills from './Components/Landing/Skills.jsx';
import About from './Components/Landing/About.jsx';
import Footer from './Components/Landing/Footer.jsx';

const Main = () => {
  return (
    <div>
      <Home/>
      <About />
      <Skills/>
      <ApplicationsList/>
      <ExperienceList/>
      <Footer/>
    </div>
  );
};


ReactDOM.render(<Main />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Components/Navigation/Nav.jsx';
import Home from './Components/Landing/Home.jsx';
import 'bootstrap';
import 'jquery';

const Main = () => {
  return (
    <div>
      <Home/>
      <Nav />
    </div>
  );
};


ReactDOM.render(<Main />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Components/Navigation/Nav.jsx';
import Home from './Components/Landing/Home.jsx';

const Main = () => {
  return (
    <div>
      <Home/>
    </div>
  );
};


ReactDOM.render(<Main />, document.getElementById('app'));
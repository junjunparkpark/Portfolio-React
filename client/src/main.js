import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Components/Navigation/Nav.jsx';
import 'bootstrap';
import 'jquery';

const Main = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};


ReactDOM.render(<Main />, document.getElementById('app'));
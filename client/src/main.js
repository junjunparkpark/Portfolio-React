import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Components/Navigation/Nav.jsx';

const Main = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};


ReactDOM.render(<Main />, document.getElementById('app'));
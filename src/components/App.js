import React from 'react';
import Nav from './Nav';
import Header from './Header';

import {
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <div className="root">
      <Header />
      <Nav />
    </div>
  );
}

export default App;

import React, { Component, Fragment } from 'react';

import Navbar from './components/Navbar';
import RecipeComponents from './components/RecipeComponents';

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <RecipeComponents />
        </div>
      </Fragment>
    );
  }
}

export default App;

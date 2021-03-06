import React, { Component, Fragment } from 'react';

import Navbar from './components/Navbar';
import RecipeComponents from './components/RecipeComponents';

import './App.css';
import './css/recipeTable.css';
import './css/responseTables.css';

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

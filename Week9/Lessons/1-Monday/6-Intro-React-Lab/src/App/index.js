import React, { Component } from 'react';
import './style.css';

import recipes from '../data/recipes';

const recipe = recipes[0];

class App extends Component {
  render() {
    return (
      <div className="flex-container"></div>
    );
  }
}

export default App;

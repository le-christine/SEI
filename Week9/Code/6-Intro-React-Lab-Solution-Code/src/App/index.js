import React, { Component } from 'react';
import './style.css';

import Recipe from './Recipe';
import RecipeHeader from './RecipeHeader';
import RecipeFooter from './RecipeFooter';

import recipes from '../data/recipes';

const recipe = recipes[0];
console.log(recipe);
class App extends Component {
  render() {
    return (
        <div className="flex-container">
          <nav className="nav">
            <button className="btn btn-default">Previous Recipe</button>
            <button className="btn btn-default">Next Recipe</button>
          </nav>
          <RecipeHeader recipe={recipe}/>
          <Recipe recipe={recipe}/>
          <RecipeFooter />
        </div>
    );
  }
}

export default App;

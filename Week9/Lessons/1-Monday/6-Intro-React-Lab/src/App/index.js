import React, { Component } from 'react';
import './style.css';
import RecipeHeader from './RecipeHeader.js'
import Nav from './nav.js'
import Article from './Article.js'

import recipes from '../data/recipes';

const recipe = recipes[0];

class App extends Component {
  render() {

    return (
      // components :
      // recipeHeader - title, author name, source
      // recipePrep - active prep, total prep, servings
      // recipeImage - image
      // recipeIngredients = ingredients title, ingredients
      // recipeInstructions - preparation

      <div className="flex-container">
        <Nav/>
        <RecipeHeader recipe = {recipe}/>

        <Article recipe={recipe}/>

        <footer>Copyright &copy; General Assembly</footer>
      </div>
    );
  }
}

export default App;

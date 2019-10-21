import React, { Component } from 'react';
import './style.css';
import RecipeHeader from './RecipeHeader.js';
import Nav from './nav.js';
import Article from './Article.js';
import Footer from './Footer.js';
import RecipePrep from './RecipePrep.js';

import recipes from '../data/recipes';

class App extends Component {
  render() {
    let recipeList = recipes.map((data) =>
    <div>
    <RecipeHeader recipe={data}/>
    <RecipePrep recipe={data}/>
    <Article recipe={data}/>
    </div>
  )

    return (
      <div className="flex-container">
        <Nav/>
        {recipeList}
        <Footer/>
      </div>
    );
  }
}

export default App;

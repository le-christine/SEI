import React, { Component } from 'react';
import './style.css';
import RecipeHeader from './RecipeHeader.js';
import Nav from './nav.js';
import Article from './Article.js';
import Footer from './Footer.js';
import RecipePrep from './RecipePrep.js';

import recipes from '../data/recipes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recipes: recipes,
      currentRecipeIndex: 0
    }
    this.onClickPrev = this.onClickPrev.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
  }

  onClickPrev() {
    if (this.state.currentRecipeIndex > 0) {
      this.setState({
        currentRecipeIndex: this.state.currentRecipeIndex - 1
      })
    }
  }

  onClickNext() {
    if (this.state.currentRecipeIndex < this.state.recipes.length - 1) {
      this.setState({
        currentRecipeIndex: this.state.currentRecipeIndex + 1
      })
    }
  }

  render() {

    return (
      <div className="flex-container">
        <Nav onClickPrev={this.onClickPrev} onClickNext={this.onClickNext}/>
        <RecipeHeader recipe={this.state.recipes[this.state.currentRecipeIndex]}/>
        <RecipePrep recipe={this.state.recipes[this.state.currentRecipeIndex]}/>
        <Article recipe={this.state.recipes[this.state.currentRecipeIndex]}/>
        <Footer/>
      </div>
    );
  }
}

export default App;

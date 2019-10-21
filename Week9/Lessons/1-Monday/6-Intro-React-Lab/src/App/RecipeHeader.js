import React, { Component } from 'react';
import RecipePrep from './RecipePrep.js'

import recipes from '../data/recipes';

class RecipeHeader extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.recipe.title}!</h1>
        <cite className="contributors">
              <div>By {this.props.recipe.byline.name}</div>
              <div><a href={this.props.recipe.byline.source} target="_blank">Source</a></div>
              </cite>
      </header>
    );
  }
}

export default RecipeHeader;

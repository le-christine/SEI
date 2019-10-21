import React, { Component } from 'react';

class RecipePrep extends Component {
  render() {
    return (
      <ul id="recipe_meta_data" className="list-group">
        <li className="list-group-item">Active: {this.props.recipe.activePrep}</li>
        <li className="list-group-item">Total: {this.props.recipe.totalPrep}</li>
        <li className="list-group-item">{this.props.recipe.servings} Servings</li>
      </ul>
    )
  }
}

export default RecipePrep;

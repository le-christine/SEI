import React, { Component } from 'react';
import Ingredient from './Ingredient.js';

class Article extends Component {
  render() {

    let ingredients = this.props.recipe.ingredients.map((ingredient, index) =>
      <Ingredient ingredient={ingredient} key = {index} />
    )

    return (
      <article className="article">
        <img id="food_image" src={this.props.recipe.img} alt="" class="img-thumbnail"/>

        <div id="Ingredients_cont">
          <h1>Ingredients</h1>
          <ul>
            {ingredients}
          </ul>
        </div>

        <h1>Preparation</h1>
        <p>
        {this.props.recipe.preparation}
        </p>
      </article>
    )
  }
}


export default Article;

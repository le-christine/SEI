import React, { Component } from 'react';
import './style.css';

class Recipe extends Component {
    render() {
        return (
            <article className="article">
                <img id="food_image" src="./media/tikka.jpg" alt="" className="img-thumbnail" />

                <div id="Ingredients_cont">
                  <h1>Ingredients</h1>
                  <ul>
                        {this.props.recipe.ingredients.map ((ingredient, key) => {
                            return <li key={key}>{ingredient}</li>
                        })}
                  </ul>
                </div>
                <h1>Preparation</h1>
                <p>{this.props.recipe.preparation}</p>
            </article>
        )
    }
}

export default Recipe;

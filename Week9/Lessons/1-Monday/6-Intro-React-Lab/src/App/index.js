import React, { Component } from 'react';
import './style.css';

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
      
      <div class="flex-container">
        <nav class="nav">
          <button class="btn btn-default">Previous Recipe</button>
          <button class="btn btn-default">Next Recipe</button>
        </nav>
        <header>
          <h1>CHICKEN TIKKA MASALA!</h1>
          <cite class="contributors">
                <div>By John Doe</div>
                <div><a href="https://cooking.nytimes.com/recipes/5593-chicken-and-apricot-masala" target="_blank">Source</a></div>
                </cite>
          <ul id="recipe_meta_data" class="list-group">
            <li class="list-group-item">Active: 1 Hour</li>
            <li class="list-group-item">Total: 5 Hours</li>
            <li class="list-group-item">6 Servings</li>
          </ul>
        </header>

        <article class="article">
          <img id="food_image" src="./media/tikka.jpg" alt="" class="img-thumbnail"/>

          <div id="Ingredients_cont">
            <h1>Ingredients</h1>
            <ul>
              <li> 6 garlic cloves, finely grated</li>
              <li>4 teaspoons finely grated peeled ginger</li>
              <li>4 teaspoons ground turmeric</li>
              <li>2 teaspoons garam masala</li>
              <li>2 teaspoons ground cumin</li>
              <li>1 tablespoon kosher salt</li>
              <li>2 pounds skinless, boneless chicken breasts</li>
              <li>3 tablespoons ghee (clarified butter) or vegetable oil</li>
              <li>1 small onion, thinly sliced...</li>
            </ul>
          </div>
          <h1>Preparation</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
        <footer>Copyright &copy; General Assembly</footer>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './style.css';
import RecipeHeader from './RecipeHeader.js'
import Nav from './nav.js'
import Article from './Article.js'
import Footer from './Footer.js'
import RecipePrep from './RecipePrep.js'

import recipes from '../data/recipes';

const recipe = recipes[0];
const recipe1 = recipes[1];

class App extends Component {
  render() {


    return (
      <div className="flex-container">
        <Nav/>

        <RecipeHeader recipe = {recipe}/>
        <RecipePrep recipe = {recipe}/>
        <Article recipe={recipe}/>

        <RecipeHeader recipe = {recipe1}/>
        <RecipePrep recipe = {recipe1}/>
        <Article recipe={recipe1}/>

        <Footer/>
      </div>
    );
  }
}

export default App;

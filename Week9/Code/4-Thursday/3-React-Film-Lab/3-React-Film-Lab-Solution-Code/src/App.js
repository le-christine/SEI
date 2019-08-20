import React, { Component } from 'react';
import './App.css';
import TMDB from './TMDB';

import FilmListing from './components/FilmListing';
import FilmDetails from './components/FilmDetails';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log(TMDB);
    }
  render() {
    return (
        <div className="film-library">
            <FilmListing TMDB={TMDB}/>
            <FilmDetails TMDB={TMDB}/>
        </div>
    );
  }
}

export default App;

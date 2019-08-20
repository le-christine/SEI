import React, { Component } from 'react';
import './App.css';
import TMDB from './TMDB';

import FilmListing from './components/FilmListing';
import FilmDetails from './components/FilmDetails';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: TMDB.films,
            faves: [],
            current: {}
        }

        this.handleFaveToggle = this.handleFaveToggle.bind(this);
        this.handleDetailsToggle = this.handleDetailsToggle.bind(this);
    }

    handleFaveToggle(film) {
        const faves = this.state.faves.slice();
        const filmIndex = faves.indexOf(film);

        if (faves.indexOf(film) === -1) {
            faves.push(film);
        }
        else {
            faves.splice(filmIndex, 1);
            console.log(faves, filmIndex);
        }

        this.setState({faves})
    }

    handleDetailsToggle(film) {
        console.log('Fetching details for: ' + film.title);
    }

    render() {
        return (
            <div className="film-library">
                <FilmListing
                    films={this.state.films}
                    faves={this.state.faves}
                    onFaveToggle={this.handleFaveToggle}
                    onDetailsToggle={this.handleDetailsToggle}
                />
                <FilmDetails
                    films={this.state.films}
                    current={this.state.current}
                />
            </div>
        );
    }
}

export default App;

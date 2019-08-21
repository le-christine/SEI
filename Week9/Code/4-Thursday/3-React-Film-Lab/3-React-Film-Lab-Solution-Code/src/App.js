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

        faves.indexOf(film) === -1
            ? faves.push(film)
            : faves.splice(filmIndex, 1);

        this.setState({faves})
    }

    handleDetailsToggle(film) {
        const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;

        fetch(url).then(response => {
            response.json().then(data => {
                this.setState({current: data})
            })
        })
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

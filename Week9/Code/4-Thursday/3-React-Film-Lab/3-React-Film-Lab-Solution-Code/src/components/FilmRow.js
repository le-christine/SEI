import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {
    constructor(props) {
        super(props);

        this.handleDetailsClick = this.handleDetailsClick.bind(this);
    }

    handleDetailsClick(film) {
        console.log('Fetching details for: ' + film.title);
    }
    
    render() {
        const year = new Date(this.props.film.release_date).getFullYear();
        return (
            <div
                className="film-row"
                onClick={() => this.handleDetailsClick(this.props.film)}
            >
                <FilmPoster film={this.props.film} />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{year}</p>
                </div>
                <Fave />
            </div>
        )
    }
}

export default FilmRow;

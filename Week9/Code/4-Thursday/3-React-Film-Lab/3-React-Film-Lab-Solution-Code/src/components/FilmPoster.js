import React, { Component } from 'react';

class FilmPoster extends Component {
    render() {
        const imgUrl = "https://image.tmdb.org/t/p/w780/" + this.props.film.poster_path;
        return (
            <img src={imgUrl} alt="" />
        )
    }
}

export default FilmPoster;

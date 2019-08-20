import React from 'react';

export default function FilmPoster(props) {
    const imgUrl = "https://image.tmdb.org/t/p/w780/" + props.film.poster_path;
    return (
        <img src={imgUrl} alt="" />
    )
}

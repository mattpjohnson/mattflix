import React from 'react';
import './style.css';

const MfxMovieListItem = ({ movie }) => (
    <div className="mfx-movie-list-item">
        <img alt={`${movie.Title} poster`} className="mfx-movie-list-item__poster" src={movie.Poster} />
        <p className="mfx-movie-list-item__title">{movie.Title}</p>
    </div>
);

export const MfxMovieList = ({ movies = [] }) => (
    <div className="mfx-movie-list">
        {movies.map((movie, i) => <MfxMovieListItem key={i} movie={movie} />)}
    </div>
);
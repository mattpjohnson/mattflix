import React from 'react';

export const MfxMovieList = ({ movies = [] }) => movies.map((movie, i) => (
    <img alt="" className="mfx-movie-list__poster" key={i} src={movie.Poster} />
));
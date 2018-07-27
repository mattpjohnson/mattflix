import React from 'react';
import { omdb } from '../../lib/omdb';
import './style.css';

class MfxMovieListItem extends React.Component {
    state = {
        movieDetails: {}
    };

    async componentDidMount() {
        const movieDetails = await omdb.details(this.props.movie.imdbID);
        this.setState({ movieDetails });
    }

    render() {
        const movie = this.props.movie;
        const movieDetails = this.state.movieDetails;

        return (
            <div className="mfx-movie-list-item">
                <img alt={`${movie.Title} poster`} className="mfx-movie-list-item__poster" src={movie.Poster} />
                <p className="mfx-movie-list-item__title">{movie.Title}</p>
                <span className="mfx-movie-list-item__genre">{movieDetails.Genre}</span>
            </div>
        );
    }
}

export const MfxMovieList = ({ movies = [] }) => (
    <div className="mfx-movie-list">
        {movies.map((movie, i) => <MfxMovieListItem key={i} movie={movie} />)}
    </div>
);
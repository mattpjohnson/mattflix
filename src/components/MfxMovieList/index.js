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
                <div className="mfx-movie-list-item__poster-wrapper">
                    <img alt={`${movie.Title} poster`} className="mfx-movie-list-item__poster" src={movie.Poster} />
                    <div className="mfx-movie-list-item__details">
                        <div className="mfx-movie-list-item__details__title">{movie.Title}</div>
                        <div className="mfx-movie-list-item__details__plot">{movieDetails.Plot}</div>
                    </div>
                </div>
                <p className="mfx-movie-list-item__title">{movie.Title}</p>
                <span className="mfx-movie-list-item__genre">{movieDetails.Genre}</span>
            </div>
        );
    }
}

export const MfxMovieList = ({ movies = [] }) => {
    if (movies.length === 0) {
        return <div className="mfx-movie-list--no-results">No results. Try refining your search.</div>;
    }

    return (
        <div className="mfx-movie-list">
            {movies.map((movie, i) => <MfxMovieListItem key={i} movie={movie} />)}
        </div>
    );
};
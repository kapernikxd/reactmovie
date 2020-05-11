import React, {Component} from 'react';
import Movie from './moviesLayout'


import './movies.css';

class Movies extends Component {
    render() {
        return (
            <div className="movies-block">
                {
                    this.props.movies.map((movie, index) => {
                        return (
                            <Movie
                                key = {index}
                                id = {movie.id}
                                title = {movie.title}
                                overview = {movie.overview}
                                poster_path = {movie.poster_path}
                                popularity = {movie.popularity}
                                vote_average = {movie.vote_average}
                                release_date = {movie.release_date}
                                url_name = {movie.original_title}
                            />

                        )

                    })
                }
            </div>
        );
    }
}

export default Movies;
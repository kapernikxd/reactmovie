import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'


class MoviePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            movie: [],
        }

        this.getDateMovie();
    }


    //Получаем данные фильма по id из history
    getDateMovie() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.title}?api_key=4237669ebd35e8010beee2f55fd45546&language=ru-RU`)
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                this.setState({
                    movie: json,
                })
            })
    }


    //Получаем список жанров (для карточки)
    getGenres(props) {
        const genre = []
        for (let key in props) {
            const obj_val =  Object.values(props[key]) // [ 878, 'фантастика' ] [ 18, 'драма' ]
            genre.push(obj_val[1]+', ')
        }
        return(genre)
    }





    render() {

        // console.log(this.props);
        return (

            <div className='view-container'>
                <div className='container'>
                    <div className='row mt-3 mb-3 ml-1'>
                        <NavLink to='/'>Главная</NavLink>
                        <span> > {this.state.movie.title}</span>
                    </div>
                    <div className='row'>

                        <div className='col-md-4'>
                            <img className='card__img' src={'http://image.tmdb.org/t/p/w300/'+this.state.movie.poster_path}/>
                        </div>
                        <div className='col-md-7'>
                            <h2 style={{
                                marginTop: '20px',
                            }}>{this.state.movie.title}</h2>
                            <p>Описание фильма: {this.state.movie.overview}</p>
                            <p>Популярность фильма: {this.state.movie.popularity}</p>
                            <p>Рейтинг: {this.state.movie.vote_average}</p>
                            <p>Бюджет фильма: {this.state.movie.budget} $</p>
                            <p>Жанр: {this.getGenres(this.state.movie.genres)}</p>
                            <p>Дата выхода фильма: {this.state.movie.release_date}</p>
                        </div>

                     </div>
                </div>
            </div>
        );
    }
}

export default MoviePage;


import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import './index.css';

class Movie extends Component {

    constructor(props){
        super(props);
        this.state = {
            favorites: 'Добавить в избранное',
        }

    }


    //формируем ссылку карточки
    addParams = id => {
        this.props.history.push('/movie/'+id.toString());
    }


    //выводим в избранном или нет
    favorite = param => {
        if(this.state.favorites == 'В избранном') {
            this.setState((prevState) => {
                return {
                    favorites: 'Добавить в избранное'
                }

            })
            let stateFavorite
        }
        if(this.state.favorites == 'Добавить в избранное') {
            this.setState((prevState) => {
                return {
                    favorites: 'В избранном'
                }

            })
        }

    }

    render() {

        return (
            <div className='card__poster'>
                <div className='card__top'>
                    <img className='card__img' alt={this.props.title} src={'http://image.tmdb.org/t/p/w500/'+this.props.poster_path}/>
                    <span className='card__rating'>{this.props.vote_average}</span>
                </div>
                <div className='card__bottom'>
                    <p className='card__title'>{this.props.title}</p>
                    <div className='card__info'>
                        <div className='card__popular'><div>Голосов:</div><strong>{this.props.popularity}</strong></div>
                        <div className='card__release'><div>Релиз:</div><strong>{this.props.release_date}</strong></div>
                     </div>
                    {/*<button onClick={this.favorite}>{this.state.favorites}</button>*/}
                    <div className='card__button_info'>
                        <button class="card__button" onClick={this.addParams.bind(null, this.props.id)}>Побробнее <PlayArrowIcon className='card__button_icon' fontSize="small"/></button>
                        {
                            this.state.favorites == 'Добавить в избранное' ? <FavoriteBorderIcon onClick={this.favorite} className="card__icon"/> : <FavoriteIcon onClick={this.favorite} className="card__icon"/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Movie);
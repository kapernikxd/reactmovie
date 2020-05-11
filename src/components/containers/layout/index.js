import React from 'react'

import Filter from '../filter/filter';
import Sorting from "../sorting/sorting";
import Movies from "../movies/movies";
import Pagination from '../pagination/pagination';




const API_KEY = '4237669ebd35e8010beee2f55fd45546';

class Layout extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            movies: [ ],
            isLoaded:false,
            sortField: 'desc', //asc
            sortPopularity: 'popularity', //По какому параметру сортируем
            filters: [], //Массив фильтров
            checks: [], //заносим id фильтра
            pageCount: [], //Поместили данные из API по количеству страниц
            pageCurrent: 1, //На какой странице сейчас находимся -> передаем в вывод api

        }
        this.getDataApi(this.state.sortField, this.state.sortPopularity, this.state.checks, this.state.pageCurrent);
        this.handleClick = this.handleClick.bind(this);
        this.getGenreApi();
        this.setCheckBox();
    }

    //Получаем параметр по которому сортируем массив
    handleClick = setSortPopularity => {

        this.state.sortField == 'desc' ? this.state.sortField ='asc' : this.state.sortField = 'desc';
        this.state.sortPopularity = setSortPopularity;

        this.getDataApi(this.state.sortField, setSortPopularity, this.state.checks, this.state.pageCurrent);

    }


    //Получаем список checked для фильтра
    setCheckBox = checkedId => {

        if(checkedId !== undefined) {
            const currentIndex = this.state.checks.indexOf(checkedId);
            if(currentIndex == -1){
                this.state.checks.push(checkedId);
            }
            else {
                this.state.checks.splice(currentIndex, 1)
            }
        }

        this.getDataApi(this.state.sortField, this.state.sortPopularity, this.state.checks, this.state.pageCurrent);
    }


    //Получаем данные по жанрам из API
    getGenreApi() {
         fetch(`http://api.themoviedb.org/3/genre/movie/list?api_key=4237669ebd35e8010beee2f55fd45546&language=ru-RU`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    filters: json.genres,
                })
            })


    }


    //Получаем номер страницы
    handlePageClick = page => {
        const pageCurrent = page.selected + 1
        this.getDataApi(this.state.sortField, this.state.sortPopularity, this.state.checks, pageCurrent)
    }


    //Получаем данные фильмов по API
    getDataApi(sortField, sortPopularity, filterCheck, pageCurrent) {
        let filter;
        if(filterCheck === '') {
            filter = ''
        }
        if(filterCheck !== undefined) {
            filter = '&with_genres='+filterCheck;
        }

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ru-RU${filter}&sort_by=${sortPopularity}.${sortField}&include_adult=false&include_video=false&page=${pageCurrent}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    movies: json.results,
                    pageCount: json.total_pages,
                })
            })


    }

    render(){


        return (
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>

                            <Filter
                                filters = {this.state.filters}
                                setCheckBox = {this.setCheckBox}
                            />

                        </div>
                        <div className='col-md-9'>

                            <Sorting
                                sortPopularity = {this.state.sortPopularity}
                                sortField = {this.state.sortField}
                                handleClick = {this.handleClick}
                            />

                            <Movies
                                movies = {this.state.movies}
                            />

                            <Pagination
                                pageCount = {this.state.pageCount}
                                handlePageClick = {this.handlePageClick}
                            />

                        </div>
                    </div>
                </div>
            </div>

        );
    }



}


export default Layout;




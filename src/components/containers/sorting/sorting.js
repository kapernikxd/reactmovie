import React, {Component} from 'react';

import './sorting.css'
class Sorting extends Component {

    //Получаем расположение стрелочки в сортировке
    showArr(props){
        let arrow;
        if(props == 'desc') {
                arrow = '↓';
            }
        else{
                arrow = '↑';
            }
        return arrow
    }


    render() {

        return (


            <div className="sort-options">
                <button onClick={this.props.handleClick.bind(null, 'popularity')}>По популярности <span>{
                    this.props.sortPopularity == 'popularity' ?  this.showArr(this.props.sortField) : ''

                }</span></button>
                <button onClick={this.props.handleClick.bind(null, 'vote_average')}>По рейтингу {
                    this.props.sortPopularity == 'vote_average' ?  this.showArr(this.props.sortField) : ''
                }</button>
                <button onClick={this.props.handleClick.bind(null, 'release_date')}>По новизне {
                    this.props.sortPopularity == 'release_date'  ?  this.showArr(this.props.sortField) : ''
                }</button>
            </div>


        );
    }
}

export default Sorting;



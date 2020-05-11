import React, {Component} from 'react';

import './filter.css'
class Filter extends Component {

    render() {
        return (
            <div>
                <section className='filter'>
                    <h4>Фильтр по жанрам</h4>
                    {
                        this.props.filters.map((filter, index) => {
                            return (
                                <div className="checkbox-items" key = {index}>
                                    <input id={filter.id}
                                           type="checkbox"
                                           onChange={
                                               this.props.setCheckBox.bind(null, filter.id)
                                           }
                                    />
                                    <label htmlFor={filter.id}>{filter.name}</label>
                                </div>
                            )

                        })
                    }
                </section>
            </div>
        );
    }
}

export default Filter;
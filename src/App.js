import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Layout from "./components/containers/layout";
import MoviePage from "./components/containers/movies/MoviePage/moviePage";


class MyApp extends React.Component {

    render(){


        return (

                <Switch>

                    <Route path="/movie/:title"  component={MoviePage} />
                    <Route path="/" exact render={ () => {
                        return (
                            <Layout />
                        )}
                    } />

                </Switch>

        );
    }
}


export default MyApp;


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';


export default class Movie extends Component {

    state = {
        movie: {},
    }

    async componentDidMount() {

        const { id } = this.props.match.params;

        const response = await api.get(`/movies/${id}`);

        console.log(response);

        this.setState({movie: response.data.data});
    }
    render() {

        const { movie } = this.state;

        return (
            <div className="movie-edit">
                <div className="movie-info">
                    <h1>{movie.name}</h1>
                    <p>{movie.year}</p>
                    <p>{movie.genre}</p>
                    <p>{movie.description}</p>
                    <strong>{movie.schedule}</strong>
                </div>
                <div className="navigation">
                    <Link to={`/edit/${movie.id}`}>Edit</Link>
                    <Link to={'/'}>Return</Link>
                </div>
            </div>
        )
    
    }
}
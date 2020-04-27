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

    deleteMovieHandler = event => {

        event.preventDefault();

        api.delete(`/movies/${this.state.movie.id}`).then(response => {
           
            if (response.status === 200) {
                this.setState({ message: "Successfully deleted" });
            }
            
            this.props.history.push('/')
                       
            console.log(response);
        })
        .catch(error => {

            this.setState({ message: `${error}` });
            console.log(error)
        });
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
                <div>
                    <p className="messages">{this.state.message}</p>
                </div>
                <div className="navigation">
                    <Link to={`/edit/${movie.id}`}>Edit</Link>
                    <button type="button" onClick={this.deleteMovieHandler}>Delete</button>
                    <Link to={'/'}>Return</Link>
                </div>
            </div>
        )
    
    }
}
import React, { Component } from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom';

import "./styles.css";

export default class Main extends Component {

    state = {
        movies: [],
        search: '',
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        
        const response = await api.get(`/movies`);

        console.log(response.data);

        this.setState({ movies: response.data.data });

        //console.log(this.state.movies.length);

    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,20)});
        //console.log(this.state.search);
    }

    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }                
        );

        return (        
            <div>
                <div className="movies-list">
                    
                    <h2> Movies in Theatres: {this.state.movies.length} </h2>
                    <div className="movie-search">
                        Search: <input type="Text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>                         
                    </div>
                    {filteredMovies.map(movie => (
                        <article key={movie.id}>
                            <strong>{movie.name}</strong>
                            <p>{movie.year}</p>
                            <p>{movie.genre}</p>
                            <p>{movie.description}</p>
                            <Link to={`/movie/${movie.id}`}>Details</Link>
                        </article>
                    ))}

                </div>
                <div className="navigation">                            
                    <Link to={'/create'}>Create</Link>
                </div>
            </div>

            
    );

    }
}
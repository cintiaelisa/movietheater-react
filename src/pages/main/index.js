import React, { Component } from 'react';
import api from "../../services/api";

import "./styles.css";

export default class Main extends Component {

    state = {
        movies: [],
        productInfo: {},
        page: 1,
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async ( page = 1) => {
        const response = await api.get(`/movies`);

        console.log(response.data);

        this.setState({ movies: response.data.data, page });

        console.log(this.state.movies.length);

    }

    prevPage = () => {

        if(this.state.page === 1) return;

        const pageNumber = this.state.page - 1;

        this.loadProducts(pageNumber);
    }

    nextPage = () => {

        if(this.state.page>=1) {

        const pageNumber = this.state.page + 1;
        this.loadProducts(pageNumber);

        console.log(pageNumber);

        }    
        
    }

    render() {

        const { movies } = this.state;

        return (        

        <div className="movies-list">
            <h1> Quantidade de filmes em cartaz: {this.state.movies.length} </h1>

            {movies.map(movie => (
                <article key={movie.id}>
                    <strong>{movie.name}</strong>
                    <p>{movie.year}</p>
                    <p>{movie.genre}</p>
                    <p>{movie.description}</p>
                    <a href="">Details</a>
                </article>
            ))}
            <div className="navigation">
                <button disabled="true" onClick={this.prevPage}>Previous</button>
                <button disabled="true" onClick={this.nextPage}>Next</button>
            </div>
        </div>
    );

    }
}
import React, { Component } from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom';
import qs from 'qs';
import "./styles.css";

export default class Edit extends Component {

    constructor(props){
        super(props);
        this.state = {
            movie: {
                id: '',
                name: '',
                year: '',
                genre: '',
                description: '',
                schedule: ''
            }
        };
    }

    async componentDidMount() {

        const { id } = this.props.match.params;

        const response = await api.get(`/movies/${id}`);

        this.setState({movie: response.data.data});
        
    }

    submitHandler = event => {

        event.preventDefault();

        //console.log(qs.stringify(this.state.movie));

        api(`/movies/${this.state.movie.id}`, {
            method: 'patch',
            data: qs.stringify(this.state.movie),
            headers: {'content-type': 'application/x-www-form-urlencoded'}  
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    handleNameChange = (event) => {

        this.setState({movie: {...this.state.movie, name: event.target.value}});

    }

    handleYearChange = (event) => {

        this.setState({movie: {...this.state.movie, year: event.target.value}});
    }

    handleGenreChange = (event) => {

        this.setState({movie: {...this.state.movie, genre: event.target.value}});
    }

    handleDescriptionChange = (event) => {
        
        this.setState({movie: {...this.state.movie, description: event.target.value}});
    }

    handleScheduelChange = (event) => {

        this.setState({movie: {...this.state.movie, schedule: event.target.value}});
    }

    render() {

        return (
            <div className="movie-edit">
                <div className="movie-info">
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label>Title:</label>
                            <input type="text" value={this.state.movie.name} onChange={this.handleNameChange}/>
                        </div>
                        <div>
                            <label>Year:</label>
                            <input type="text" value={this.state.movie.year} onChange={this.handleYearChange}/>
                        <div>
                        </div>
                            <label>Genre:</label>
                            <select value={this.state.movie.genre} onChange={this.handleGenreChange}>
                                <option value="Drama">Drama</option>
                                <option value="Action">Action</option>
                                <option value="comedy">Comedy</option>
                            </select>
                        </div>
                        <div>
                            <label>Description:</label>
                            <textarea value={this.state.movie.description} onChange={this.handleDescriptionChange} />
                        </div>
                        <div>
                            <label>Schedule:</label>
                            <input type="text" value={this.state.movie.schedule} onChange={this.handleScheduelChange} />
                        </div>
                    
                        <div className="navigation">
                            <button type="submit">Save</button>
                            <Link to={'/'}>Return</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    
    }
}
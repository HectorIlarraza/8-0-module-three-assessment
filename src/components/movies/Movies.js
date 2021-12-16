import React, { Component } from 'react'
import "../../App.css";

export default class Movies extends Component {
    constructor(){
        super();
        this.state = {
            movies: [],
            currentMovie: null,
            display: false,
        };
    }

    fetchMovies = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                movies: data,
            });
        });
    };

    componentDidMount(){
        this.fetchMovies();
    };

    handleDropDownChange = (e) => {
        let currentMoviesObject = this.state.movies.find((movie) => {
            return movie.title === e.target.value;
        });

        this.setState({
            currentMovie: currentMoviesObject,
            display: e.target.value,
        })
    };
    render() {
        const { display, currentMovie } = this.state;
        let dropDownOptions = this.state.movies.map((movie) => {
            return <option key={movie.id}>{movie.title}</option>
        });
        return (
            <div className='movies'>
                <h1>Select a Movie</h1>
                <select onChange={this.handleDropDownChange}>
                    <option></option>
                    {dropDownOptions}
                </select>
                { display &&
                     <div>
                        <h2>
                            Title: {currentMovie?.title}
                        </h2>
                        <h3>
                            Release Date: {currentMovie?.release_date}
                        </h3>
                        <h4>
                            Description: {currentMovie?.description}
                        </h4>
                    </div>
                }

                {/* { display &&
                     <div>
                        <h2>
                            Title: {this.state.currentMovie?.title}
                        </h2>
                        <h3>
                            Release Date: {this.state.currentMovie?.release_date}
                        </h3>
                        <h4>
                            Description: {this.state.currentMovie?.description}
                        </h4>
                    </div>
                } */}
               
            </div>
        )
    }
}

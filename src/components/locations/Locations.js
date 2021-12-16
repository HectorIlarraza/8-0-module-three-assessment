import React, { Component } from 'react';
import "../../App.css";

export default class Locations extends Component {
    constructor(){
        super();
        this.state = {
            locations: [],
            display: false,
        };
    }

    fetchLocations = () => {
        fetch("https://ghibliapi.herokuapp.com/locations")
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                locations: data,
            });
        });
    };

    componentDidMount(){
        this.fetchLocations();
    };
    render() {
        const { display } = this.state
        let locationElArr = display && this.state.locations.map((location) => {
            return (
                <ul>
                    <li key={location.id}>
                        Name: {location.name}
                        <br />
                        Climate: {location.climate}
                        <br />
                        Terrain: {location.terrain}
                    </li>
                </ul>
            )
        })
        return (
            <div className='locations'>
                <h1>List of Locations</h1>
                <button type='submit' onClick={() => this.setState({ display: !display })}>
                    { display &&
                        <div>Hide Locations</div>
                    }

                    { !display &&
                        <div>Show Locations</div>
                    }
                </button>
                    {locationElArr}
            </div>
        )
    }
}

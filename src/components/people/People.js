import React, { Component } from 'react';
import "../../App.css";

export default class People extends Component {
    constructor(){
        super();
        this.state = {
            peoples: [],
            userInput: "",
            currentPerson: [],
            display: false,
        };
    }

    handleChange = (e) => {
        this.setState({
            userInput: e.target.value 
        })
    }

    fetchPeople = () => {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                peoples: data,
            });
        });
    };

    componentDidMount(){
        this.fetchPeople();
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let currentPeopleObject = this.state.peoples.filter((person) => {
            return person.name === this.state.userInput;
        });
        console.log(currentPeopleObject)
        this.setState({
            currentPerson: currentPeopleObject,
            userInput: "",
            display: !this.state.display,
        })
    };
    render() {
        const { currentPerson, display, userInput } = this.state;
        return (
            <div className='people'>
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    className='input' 
                    type="text"  
                    value={userInput}
                    onChange={this.handleChange}
                    placeholder='Find Your Person' 
                    />
                    <button className='btn' type='submit'>Submit</button>
                </form>
                {display ? 
                    <div className="personInfo">
                        {currentPerson.length ? <div>
                        <h3>Name: {currentPerson[0].name}</h3> 
                        <h3>Age: {currentPerson[0].age}</h3> 
                        <h4>Gender: {currentPerson[0].gender}</h4>
                        </div> : "Not Found"}
                    </div>
                : null}
            </div>
        )
    }
}

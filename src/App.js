import "./App.css";
import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Movies from "./components/movies/Movies";
import People from "./components/people/People";
import Locations from "./components/locations/Locations";

export default class App extends Component {
  render() {
    return (
      <div>
        <main>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/people" component={People} />
            <Route path="/locations" component={Locations} />
          </Switch>
        </main>
      </div>
    )
  }
}

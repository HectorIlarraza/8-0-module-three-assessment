import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "../../App.css";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className='Navbar'>
                    <Link to="/">
                    <img 
                    className='StudioGhibli-logo' 
                    src='http://www.nausicaa.net/miyazaki/ghibli/studioghibli.gif' 
                    alt='Studio Ghibli logo' 
                    />
                    </Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/people">People</Link>
                    <Link to="/locations">Locations</Link>
                </nav>
            </div>
        )
    }
}

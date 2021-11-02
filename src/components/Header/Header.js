import React, {Component} from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        const {onServiceChange} = this.props
        return (
            <div className='header d-flex'>
                <h3>
                    <NavLink to="/" exact>Star DB</NavLink>
                </h3>
                <ul className='d-flex'>
                    <li><NavLink to="/people">People</NavLink></li>
                    <li><NavLink to="/planets">Planets</NavLink></li>
                    <li><NavLink to="/starships">Starship</NavLink></li>
                </ul>
                <button className='btn btn-primary btn-sm' onClick={onServiceChange}>
                    Change Service
                </button>
            </div>
        );
    }
}

export default Header;
import React, {Component} from 'react';
import './Header.css'

class Header extends Component {
    render() {
        const {onServiceChange} = this.props
        return (
            <div className='header d-flex'>
                <h3>
                    <a href="/">Star DB</a>
                </h3>
                <ul className='d-flex'>
                    <li><a href="/">People</a></li>
                    <li><a href="/">Planets</a></li>
                    <li><a href="/">Starship</a></li>
                </ul>
                <button className='btn btn-primary btn-sm' onClick={onServiceChange}>
                    Change Service
                </button>
            </div>
        );
    }
}

export default Header;
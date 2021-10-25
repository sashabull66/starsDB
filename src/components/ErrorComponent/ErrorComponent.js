import React, {Component} from 'react';
import './ErrorComponent.css'
import icon from './death-star.png'

class ErrorComponent extends Component {
    render() {
        return (
            <div className='error-indicator'>
                <img src={icon} alt="error-ico" className='icon'/>
                <span className='boom'>BOOM!</span>
                <span>Something has gone terribly wrong</span>
                <span> (but we already sent droids to fix it)</span>
            </div>
        );
    }
}

export default ErrorComponent;
import React, {Component} from 'react';
import './PersonDetalis.css'

class PersonDetalis extends Component {
    render() {
        return (
            <div className="person-details card">
                <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/1.jpg`}
                     alt="character"/>

                <div className="card-body">
                    <h4>Alex #1</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>male</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>15.01.1993</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>green</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PersonDetalis;
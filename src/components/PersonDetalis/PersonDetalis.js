import React, {Component} from 'react';
import './PersonDetalis.css'
import {swapi} from "../../services/swapi/SwapiService";
import Spinner from "../Spinner";

class PersonDetalis extends Component {

    state = {
        person: null,
        isLoading: true
    }

    updatePerson = () => {
        if (!this.props.personId) return
        swapi.getPeople(this.props.personId)
            .then(p => {
                this.setState({
                    person: p,
                    isLoading: false
                })
            })
    }

    componentDidMount() {
        this.updatePerson(this.props.personId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.setState({
                person: null,
                isLoading: true
            })
            this.updatePerson()
        }
    }

    render() {
        const {person, isLoading} = this.state
        const content = isLoading ? <Spinner/> : <PersonView {...person}/>
        return (
            <div className="person-details card">
                {content}
            </div>
        );
    }
}

export default PersonDetalis;


class PersonView extends Component {
    render() {
        const {name, gender, birthYear, eyeColor, id} = this.props
        return (
            <>
                <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                     alt="character"/>

                <div className="card-body">
                    <h4>{name || 'n/a'}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender || 'n/a'}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear || 'n/a'}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor || 'n/a'}</span>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}
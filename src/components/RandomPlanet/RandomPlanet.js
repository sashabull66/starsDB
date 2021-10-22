import React, {Component} from 'react';
import './RandomPlanet.css'
import {swapi} from "../../services/swapi/SwapiService";

class RandomPlanet extends Component {
    componentDidMount() {
        this.updatePlanet()
    }

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet})
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25 + 2)
        swapi.getPlanet(id)
            .then((planet) => {
                console.log(planet)
                this.onPlanetLoaded(planet)
            })
    }


    render() {
        const {id, name, population, rotationPeriod, diameter} = this.state
        return (
            <div className='random-planet jumbotron rounded'>
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                     alt="planet"/>
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default RandomPlanet;
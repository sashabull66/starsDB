import React, {Component} from 'react';
import './RandomPlanet.css'
import {swapi} from "../../services/swapi/SwapiService";
import Spinner from "../Spinner";
import PlanetView from "./PlanetView";
import ErrorBoundry from "../ErrorBoundry";

class RandomPlanet extends Component {

    state = {
        planet: {},
        isLoading: true,
    }

    componentDidMount() {
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, 5000)
    }

    componentWillUnmount() { // чищу таймер
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet, isLoading: false})
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25 + 2)
        swapi.getPlanet(id)
            .then((planet) => {
                this.onPlanetLoaded(planet)
            })
    }

    render() {
        const {isLoading, planet} = this.state
        const preloader = isLoading  && <Spinner/>
        const content = !isLoading && <PlanetView {...planet}/>
        return (
            <ErrorBoundry>
                <div className='random-planet jumbotron rounded'>
                    {preloader}
                    {content}
                </div>
            </ErrorBoundry>
        )
    }
}

export default RandomPlanet;


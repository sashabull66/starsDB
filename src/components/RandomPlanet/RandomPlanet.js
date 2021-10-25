import React, {Component} from 'react';
import './RandomPlanet.css'
import {swapi} from "../../services/swapi/SwapiService";
import Spinner from "../Spinner";
import ErrorComponent from "../ErrorComponent";
import PlanetView from "./PlanetView";

class RandomPlanet extends Component {

    componentDidMount() {
        this.updatePlanet()
        setInterval(this.updatePlanet, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.updatePlanet)
    }

    state = {
        planet: {},
        isLoading: true,
        isError: false
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet, isLoading: false})
    }

    onError = (error) => {
        console.error(error)
        this.setState({
            isLoading: false,
            isError: true
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25 + 2)
        swapi.getPlanet(id)
            .then((planet) => {
                this.onPlanetLoaded(planet)
            })
            .catch(this.onError)
    }

    render() {
        const {isLoading, planet, isError} = this.state
        const preloader = isLoading && !isError && <Spinner/>
        const content = !isLoading && !isError && <PlanetView {...planet}/>
        const error = isError && <ErrorComponent/>
        return (
            <div className='random-planet jumbotron rounded'>
                {preloader}
                {content}
                {error}
            </div>
        )
    }
}

export default RandomPlanet;


import React, {Component} from 'react';
import './RandomPlanet.css'
import Spinner from "../Spinner";
import PlanetView from "./PlanetView";
import ErrorBoundry from "../ErrorBoundry";
import {SwapiService} from "../../services/swapi/SwapiService";
import PropTypes from "prop-types";

class RandomPlanet extends Component {

    static defaultProps = {
        updateInterval: 3000
    }

    static propTypes = {
        updateInterval: PropTypes.number
    }

    state = {
        planet: {},
        isLoading: true,
    }

    componentDidMount() {
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, this.props.updateInterval)
    }

    componentWillUnmount() { // чищу таймер
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet, isLoading: false})
    }

    updatePlanet = () => {
        const swapi = new SwapiService()
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

/*RandomPlanet.defaultProps = { // можно так
    updateInterval: 3000
}*/

export default RandomPlanet;


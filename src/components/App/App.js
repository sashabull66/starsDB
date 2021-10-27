import React, {Component} from 'react';
import './App.css'
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorBoundry from "../ErrorBoundry";
import Row from "../Row";
import ItemDetalis from "../ItemDetalis";
import {swapi} from "../../services/swapi/SwapiService";
import {Record} from "../ItemDetalis/ItemDetalis";


class App extends Component {

    state = {
        showRandomPlanet: false,
    }

    showPlanetHandler = () => {
        this.setState(prev => {
            return {
                showRandomPlanet: !prev.showRandomPlanet,
            }
        })
    }

    render() {
        const {showRandomPlanet} = this.state
        const personDetalis = (
            <ItemDetalis itemId={5} getData={swapi.getPeople} getImageUrl={swapi.getPersonImage}>
                <Record field='gender' label='Gender'/>
                <Record field='eyeColor' label='Eye Color'/>
            </ItemDetalis>)
        const starshipDetalis = (
            <ItemDetalis itemId={5} getData={swapi.getStarship} getImageUrl={swapi.getStarshipImage}>
                <Record field='model' label='Model'/>
                <Record field='length' label='Length'/>
                <Record field='costInCredit' label='Cost'/>
            </ItemDetalis>)
        return (
            <ErrorBoundry>
                <div className={'app'}>
                    <Header/>
                    {showRandomPlanet && <RandomPlanet/>}
                    <Row left={
                        <button
                            className='btn btn-warning btn-lg toggle-planet'
                            onClick={this.showPlanetHandler}>
                            On/Off Random Planet
                        </button>
                    }/>

                    <Row left={personDetalis} right={starshipDetalis}/>
                </div>
            </ErrorBoundry>
        );
    }
}

export default App;
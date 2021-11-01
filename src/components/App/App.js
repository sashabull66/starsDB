import React, {Component} from 'react';
import './App.css'
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorBoundry from "../ErrorBoundry";
import Row from "../Row";
import {PersonList, PlanetList, StarShipList} from "../SwComponents";
import {SwapiProvider} from "../SwapiServiceContext";
import {swapi} from "../../services/swapi/SwapiService";
import PersonDetalis from "../SwComponents/PersonDetalis";
import StarShipDetalis from "../SwComponents/StarShipDetalis";
import PlanetDetalis from "../SwComponents/PlanetDetalis";


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
        return (
            <ErrorBoundry>
                <SwapiProvider value={swapi}>
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

                        <PersonDetalis itemId={11}/>
                        <StarShipDetalis itemId={5}/>
                        <PlanetDetalis itemId={8}/>



                        <PersonList/>
                        <StarShipList/>
                        <PlanetList/>



                    </div>
                </SwapiProvider>
            </ErrorBoundry>
        );
    }
}

export default App;
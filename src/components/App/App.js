import React, {Component} from 'react';
import './App.css'
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorBoundry from "../ErrorBoundry";
import {SwapiProvider} from "../SwapiServiceContext";
import {SwapiService} from "../../services/swapi/SwapiService";
import DummySwapiService from "../../services/DummySwapiService/DummySwapiService";
import {PeoplePage, StarShipPage, PlanetPage} from "../pages";
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {

    state = {
        apiService: new SwapiService()
    }

    onServiceChange = () => {
        this.setState(({apiService}) => {
            const service = apiService instanceof DummySwapiService ? SwapiService : DummySwapiService
            return {
                apiService: new service()
            }
        })
    }

    render() {
        const {apiService} = this.state
        return (
            <ErrorBoundry>
                <SwapiProvider value={apiService}>
                    <BrowserRouter>
                        <div className={'app'}>
                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet/>
                            <Route exact path={'/'} render={()=><h2>Welcome to StarDB</h2>}/>
                            <Route path={'/people'}><PeoplePage/></Route>
                            <Route path={'/planets'}><PlanetPage/></Route>
                            <Route path={'/starships'}><StarShipPage/></Route>

                        </div>
                    </BrowserRouter>
                </SwapiProvider>
            </ErrorBoundry>

        )
            ;
    }
}

export default App;
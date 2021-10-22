import React, {Component} from 'react';
import './App.css'
import Header from "../Header";
import ItemList from "../ItemList";
import PersonDetalis from "../PersonDetalis";
import RandomPlanet from "../RandomPlanet";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <RandomPlanet/>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList />
                    </div>
                    <div className="col-md-6">
                        <PersonDetalis  />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
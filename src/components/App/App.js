import React, {Component} from 'react';
import './App.css'
import Header from "../Header";
import ItemList from "../ItemList";
import PersonDetalis from "../PersonDetalis";
import RandomPlanet from "../RandomPlanet";

class App extends Component {

    state = {
        showRandomPlanet: true,
        selectedPerson: null
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    showPlanetHandler = () => {
        this.setState(prev=>{
            return {
                showRandomPlanet: !prev.showRandomPlanet,
            }
        })
    }

    render() {
        const {showRandomPlanet, selectedPerson} = this.state
        return (
            <div className={'app'}>
                <Header />
                {showRandomPlanet && <RandomPlanet/>}
                <div className='row mb2'>
                    <button className='btn btn-warning btn-lg toggle-planet' onClick={this.showPlanetHandler}>On/Off Random Planet</button>
                </div>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className="col-md-6">
                        {selectedPerson && <PersonDetalis personId={selectedPerson}/>}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
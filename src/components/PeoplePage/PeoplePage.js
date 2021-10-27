import React, {Component} from 'react';
import ItemList from "../ItemList";
import ItemDetalis from "../ItemDetalis";
import {swapi} from "../../services/swapi/SwapiService";
import ErrorBoundry from "../ErrorBoundry";
import Row from "../Row";

class PeoplePage extends Component {

    state = {
        selectedPerson: null,
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        const {selectedPerson} = this.state
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={swapi.getAllPeople}
                renderItem={item => `${item.name} (${item.gender}, ${item.birthYear})`}
            />
        )
        const personDetalis = selectedPerson && <ItemDetalis personId={selectedPerson}/>

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetalis}/>
            </ErrorBoundry>
        );
    }
}

export default PeoplePage;
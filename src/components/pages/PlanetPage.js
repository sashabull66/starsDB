import React, {Component} from 'react';
import {PlanetList} from "../SwComponents";
import PlanetDetalis from "../SwComponents/PlanetDetalis";
import Row from "../Row";

class PlanetPage extends Component {
    state = {
        selectedItem: null
    }
    showItem = (id) => {
        this.setState({
            selectedItem: id
        })
    }
    render() {
        const {selectedItem} = this.state
        return (
            <Row left={<PlanetList onItemSelected={this.showItem}/>} right={selectedItem && <PlanetDetalis itemId={selectedItem}/>}/>
        );
    }
}

export default PlanetPage;
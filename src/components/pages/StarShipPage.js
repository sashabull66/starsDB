import React, {Component} from 'react';
import {StarShipList} from "../SwComponents";
import StarShipDetalis from "../SwComponents/StarShipDetalis";
import Row from "../Row";

class StarShipPage extends Component {
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
            <Row left={<StarShipList onItemSelected={this.showItem}/>} right={selectedItem && <StarShipDetalis itemId={selectedItem}/>}/>
        );
    }
}

export default StarShipPage;
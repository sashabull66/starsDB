import React, {Component} from 'react';
import {PersonList} from "../SwComponents";
import PersonDetalis from "../SwComponents/PersonDetalis";
import Row from "../Row";

class PeoplePage extends Component {
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
            <Row left={<PersonList onItemSelected={this.showItem}/>} right={selectedItem && <PersonDetalis itemId={selectedItem}/>}/>
        );
    }
}

export default PeoplePage;